import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CiscoExperience from './components/CiscoExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg,#0d1135 0%,#1a0a2e 100%)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CiscoExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

