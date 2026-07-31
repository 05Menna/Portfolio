import About from './components/About';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aurora from './effects/Aurora';
import CursorGlow from './effects/CursorGlow';
import ScrollProgress from './effects/ScrollProgress';

function App() {
  return (
    <>
      <Aurora />
      <CursorGlow />
      <ScrollProgress />
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>  
  );
}

export default App;
