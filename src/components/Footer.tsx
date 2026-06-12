import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiInstagram } from 'react-icons/fi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#cisco-experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const social = [
  { icon: FiGithub, href: 'https://github.com/deepikarthinikanche', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/deepikarthinikanche/', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://www.instagram.com/deepu_kanche', label: 'Instagram' },
  { icon: FiMail, href: 'mailto:deepikarthinikanche444@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative" style={{ background: '#112240', borderTop: '1px solid rgba(100,255,218,0.08)' }}>
      {/* Top glow line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg,transparent,#64ffda,#38bdf8,#0ea5e9,transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold mb-3 gradient-text">&lt;DK /&gt;</div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Software Test Engineer · Full Stack Developer · AI Enthusiast.<br />
              Passionate about AI/ML, Full-Stack Development, and Enterprise Solutions.
            </p>
            <div className="flex gap-3 mt-5">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(100,255,218,0.06)', border: '1px solid rgba(100,255,218,0.12)', color: '#64ffda' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Availability</h4>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-green-400">Open to Work</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Full-time · Internship · Remote / Hybrid</p>
              <p className="text-xs text-slate-500">Roles: SDE · Full Stack · AI Engineering</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid rgba(100,255,218,0.08)' }}>
          <p className="text-xs text-slate-500">© 2026 Deepikarthini Kanche. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500">💼 Open to full-time opportunities and collaborations</span>
            <button
              onClick={scrollTop}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'linear-gradient(135deg,#64ffda,#38bdf8)', color: '#0a192f' }}
              aria-label="Scroll to top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
