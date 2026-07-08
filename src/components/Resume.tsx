import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiFileText } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const highlights = [
  { label: 'Education', value: 'B.Tech CSE – Sri Chaitanya Technical Campus (CGPA: 7.58)', color: '#6c63ff' },
  { label: 'Certifications', value: 'CCNA (Cisco, Jun 2026) · Problem Solver (LeetCode/GFG)', color: '#00d4ff' },
  { label: 'Tech Stack', value: 'Python · Java · JavaScript · TypeScript · React · Spring Boot · FastAPI · Docker · Groq · LangChain', color: '#10b981' },
  { label: 'Current Role', value: 'Software Test Engineer Apprentice @ Cisco · June 2025–Present', color: '#f59e0b' },
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding" style={{ background: '#0d0a1f' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#6c63ff' }}>My Resume</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Download <span className="gradient-text">CV</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#6c63ff,#00d4ff)' }} />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="glass p-8 rounded-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#6c63ff,#00d4ff)' }}>
              <FiFileText size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Deepikarthini Kanche</h3>
              <p style={{ color: '#00d4ff' }} className="text-sm mt-0.5">Software Test Engineer Apprentice — UCS AI Sizer Team @ Cisco</p>
              <p className="text-xs text-slate-500 mt-1">Sri Chaitanya Technical Campus · B.Tech CSE 2024 · PDF Format · ATS Optimized</p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8 relative z-10">
            {highlights.map(({ label, value, color }) => (
              <div key={label} className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-xs uppercase tracking-wide mb-1" style={{ color }}>{label}</p>
                <p className="text-sm text-slate-200 font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 relative z-10">
            <motion.a
              href="/resume.pdf"
              download="Deepikarthini_Kanche_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108,99,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-white"
              style={{ background: 'linear-gradient(135deg,#6c63ff,#00d4ff)', textDecoration: 'none' }}
            >
              <FiDownload size={16} /> Download Resume
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm glass"
              style={{ color: '#e2e8f0', textDecoration: 'none' }}
            >
              <FiEye size={16} /> Preview Online
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
