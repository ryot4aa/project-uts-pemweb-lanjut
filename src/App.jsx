import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Project from './sections/Project';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* {header section} */}
      <Header />

      {/* home section */}
      <Home />

      {/* about section */}
      <About />

      {/* skills section */}
      <Skills />

      {/* project section */}
      <Project />

      {/* contact section */}
      <Contact />

      {/* Footer section */}
      <Footer />
    </>
  )
}

export default App