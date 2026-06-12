import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiInstagram } from 'react-icons/fi';
import profilePhoto from '../assets/hero-cropped.png';

const social = [
  { icon: FiGithub, href: 'https://github.com/deepikarthinikanche', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/deepikarthinikanche/', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://www.instagram.com/deepu_kanche', label: 'Instagram' },
  { icon: FiMail, href: 'mailto:deepikarthinikanche444@gmail.com', label: 'Email' },
];

const roles = [
  'A Software Test Engineer @ Cisco Systems',
  'An AI/LLM Infrastructure Engineer',
  'A Full Stack Web Developer',
  'A QA Automation Engineer',
];

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-lg sm:text-xl font-medium mb-6 h-8 flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-slate-300"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%)' }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,255,218,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, rgba(100,255,218,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }} />

      <div className="relative z-10 w-full px-8 xl:px-20 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT: text content */}
        <div className="flex-1 flex flex-col items-start text-left w-full max-w-2xl">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-white">Hey, I'm </span>
            <span className="gradient-text">Deepikarthini</span>
          </motion.h1>

          {/* Role cycler */}
          <RoleCycler />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(100,255,218,0.4)' }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full font-semibold text-sm inline-flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg,#64ffda,#38bdf8)', color: '#0a192f', boxShadow: '0 4px 20px rgba(100,255,218,0.3)', textDecoration: 'none' }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
              View Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 rounded-full font-semibold text-sm text-white gradient-btn-outline inline-flex items-center gap-2"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1.5px solid rgba(16,185,129,0.4)', color: '#34d399' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to Opportunities
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{ background: 'rgba(100,255,218,0.08)', border: '1.5px solid rgba(100,255,218,0.3)', color: '#64ffda' }}>
              ⭐ CCNA Certified
            </span>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-4"
          >
            {social.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl glass transition-all duration-200"
                style={{ color: '#94a3b8' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#64ffda')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: photo card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 flex items-center justify-center w-full md:w-auto"
        >
          <div className="relative p-1 rounded-3xl"
            style={{ background: 'linear-gradient(135deg,#64ffda,#38bdf8,#0ea5e9)', boxShadow: '0 0 60px rgba(100,255,218,0.25), 0 0 100px rgba(56,189,248,0.15)' }}>
            <div className="rounded-3xl overflow-hidden"
              style={{ width: 'min(340px, 80vw)', height: 'min(420px, 60vw)', minHeight: 280, background: '#112240' }}>
              <img
                src={profilePhoto}
                alt="Deepikarthini Kanche"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full"
        style={{ color: '#64ffda', border: '1px solid rgba(100,255,218,0.3)' }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  );
}
