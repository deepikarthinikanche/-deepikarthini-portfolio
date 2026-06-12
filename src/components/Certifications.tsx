import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { SiPython, SiCisco } from 'react-icons/si';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

interface Cert {
  title: string;
  issuer: string;
  platform: string;
  date: string;
  icon: React.ElementType;
  color: string;
  link?: string;
  skills: string[];
  description: string;
}

const certs: Cert[] = [
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    platform: 'Cisco',
    date: 'Jun 2026',
    icon: SiCisco,
    color: '#1ba0d7',
    skills: ['Networking', 'Routing & Switching', 'VLAN', 'TCP/IP', 'Network Security'],
    description:
      'Earned the CCNA certification from Cisco, demonstrating knowledge of network fundamentals, IP connectivity, security fundamentals, automation, and programmability for enterprise network administration.',
  },
  {
    title: 'Problem Solver: LeetCode / GeeksforGeeks',
    issuer: 'LeetCode & GFG',
    platform: 'Online Platforms',
    date: 'Ongoing',
    icon: SiPython,
    color: '#f59e0b',
    skills: ['DSA', 'Competitive Programming', 'Problem Solving', 'Algorithms'],
    description:
      'Actively solving problems on LeetCode and GeeksforGeeks, strengthening data structures, algorithms, and competitive programming skills.',
  },
];

const badges = [
  { label: 'CCNA Certified', color: '#1ba0d7' },
  { label: 'LeetCode', color: '#f59e0b' },
  { label: 'GeeksforGeeks', color: '#2f8d46' },
  { label: 'Cisco', color: '#1ba0d7' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" style={{ background: '#0d0a1f' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#fbbf24' }}>Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#f59e0b,#6c63ff)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="glass glass-hover p-6 rounded-2xl relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${cert.color}12 0%, transparent 70%)`, filter: 'blur(20px)' }}
                />

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}40` }}
                  >
                    <Icon size={22} style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-base">{cert.title}</h3>
                    <p className="text-sm mt-0.5" style={{ color: cert.color }}>{cert.issuer}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-slate-500">{cert.platform}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${cert.color}18`, color: cert.color }}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 relative z-10">{cert.description}</p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md text-xs"
                      style={{ background: `${cert.color}12`, color: cert.color, border: `1px solid ${cert.color}25` }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4 relative z-10">
                  <FiAward size={14} style={{ color: '#fbbf24' }} />
                  <span className="text-xs text-slate-500">Certificate of Completion</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement badges */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} className="text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Achievement Badges</p>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map(({ label, color }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                style={{ border: `1px solid ${color}35` }}>
                <FiAward size={13} style={{ color }} />
                <span className="text-xs font-medium" style={{ color }}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
