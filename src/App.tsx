import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CiscoExperience from './components/CiscoExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0a192f' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CiscoExperience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

