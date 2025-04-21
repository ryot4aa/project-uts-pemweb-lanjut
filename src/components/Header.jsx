import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { AlignLeft, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Menyimpan preferensi mode gelap/light di localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Menyimpan mode di localStorage ketika mode berubah
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolling
          ? 'backdrop-blur-sm bg-gradient-to-r from-neutral-900/50 via-neutral-900/50 to-gray-900/50 duration-500'
          : 'bg-transparent duration-500 animate-out'
      } fixed top-0 z-[500] w-full`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* logo */}
        <div className="z-10">
          <a href="/" className="font-bold md:text-lg">
            My{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-600 dark:to-yellow-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </a>
        </div>

        {/* Navbar untuk layar besar */}
        <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />

        {/* Wrapper tombol menu + dark mode */}
        <div className="z-10 flex items-center gap-4 lg:gap-6">
        {/* Tombol Menu untuk mobile */}
        <button
            onClick={toggleNavClick}
            className="flex items-center cursor-pointer lg:hidden"
        >
            {isClicked ? <X size={28} /> : <AlignLeft size={28} />}
        </button>

        {/* Tombol Dark Mode */}
        <button
            onClick={toggleDarkMode}
            className="flex items-center cursor-pointer"
        >
            {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
