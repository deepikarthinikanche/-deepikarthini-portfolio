import { useState, useEffect } from 'react';
import { FiFileText, FiMenu, FiX } from 'react-icons/fi';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = id === 'Experience' ? 'cisco-experience' : id.toLowerCase();
    document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'rgba(10, 25, 47, 0.7)',
        backdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(100, 255, 218, 0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
            style={{ background: 'linear-gradient(135deg,#64ffda,#38bdf8)', color: '#0a192f', boxShadow: '0 0 20px rgba(100,255,218,0.3)' }}
          >
            DK
          </div>
          <span className="font-semibold text-white text-base hidden sm:block">Deepikarthini <span style={{ color: '#64ffda' }}>Kanche</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
              {l}
            </button>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold gradient-btn">
            <FiFileText size={15} />
            Resume
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ background: 'rgba(10,25,47,0.98)' }}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-slate-300 hover:text-white text-left text-sm font-medium py-2 border-b border-teal-900/30">
              {l}
            </button>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold gradient-btn w-fit mt-1">
            <FiFileText size={15} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
