import { useEffect, useState } from "react";

const navigation = [
    {title: 'home', url: '#home'},
    {title: 'about', url: '#about'},
    {title: 'skills', url: '#skills'},
    {title: 'project', url: '#project'},
    {title: 'contact', url: '#contact'},
]

const Navbar = ({isClicked, toggleNavClick}) => {
    const [activeLink, setActiveLink] = useState('home');
    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => {
                if(section){
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if(scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight){
                        setActiveLink(section.id);
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
  return(
    <>
        {/* mobile */}
        <nav className={`${
            isClicked ? 'translate-x-0' : '-translate-x-[190.25rem]'
        } fixed left-0 top-0 h-screen w-full flex items-center justify-start transition-all duration-500 lg:hidden`}>
            <ul className="h-full w-[60%] bg-gray-300 pl-4 pt-22">
                {navigation.map(item => (
                    <li key={item.title} className="mb-4 text-lg font-medium capitalize">
                        <a className={`${activeLink === item.title ? 'text-blue-600 dark:text-orange-400' : 'text-black'} hover:text-blue-600 dark:hover:text-orange-400 transition-colors duration-300 ease-in`} href={item.url} onClick={() => toggleNavClick()}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
        {/* desktop */}
        <nav className="hidden md:inline-flex">
            <ul className="flex gap-10 capitalize">
                {navigation.map(item => (
                    <li key={item.title} className="inline-block">
                        <a className={`relative font-medium after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-[20px] after:rounded-xl after:transition-all after:duration-300 after:ease-in hover:after:bg-blue-600 dark:hover:after:bg-orange-600 hover:after:w-full ${activeLink === item.title ? 'text-blue-600 dark:text-orange-400 relative after:absolute after:bottom-[-0.2rem] after:bg-blue-600 dark:after:bg-orange-600 after:left-0 after:h-[3px] after:w-full after:rounded-xl after:transition-all after:duration-300 after:ease-in hover:after:bg-blue-600' : 'text-black dark:text-white'} hover:text-blue-600 dark:hover:text-orange-400 transition-colors duration-300 ease-in`} href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default Navbar