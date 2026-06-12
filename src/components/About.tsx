import { motion } from 'framer-motion';
import { FiCode, FiBriefcase, FiCpu, FiStar, FiArrowRight } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const cards = [
  { icon: FiCode, title: 'Full Stack Developer', text: 'Building web apps with React, Spring Boot, FastAPI, and modern JavaScript/TypeScript.', color: '#64ffda' },
  { icon: FiCpu, title: 'AI/LLM Engineer', text: 'Deploying LLMs via NVIDIA NIM, benchmarking with AIPerf, and building RAG systems.', color: '#38bdf8' },
  { icon: FiBriefcase, title: 'QA & Automation', text: 'API testing, performance benchmarking, and monitoring enterprise AI infrastructure.', color: '#f472b6' },
  { icon: FiStar, title: 'CCNA Certified', text: 'Cisco certified with strong networking fundamentals and infrastructure knowledge.', color: '#fbbf24' },
];

const stats = [
  { value: '7.58', label: 'CGPA / 10' },
  { value: 'CCNA', label: 'Cisco Certified' },
  { value: '94.3%', label: 'Class XII (TSBIE)' },
  { value: 'DSA', label: 'LeetCode / GFG' },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: '#0a192f' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#64ffda' }}>
            Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
            Overview
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#64ffda,#38bdf8)' }} />
        </motion.div>

        {/* Overview text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(100,255,218,0.08)', border: '1px solid rgba(100,255,218,0.25)', color: '#64ffda' }}>
              💼 Software Test Engineer @ Cisco
            </span>
            <span className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.25)', color: '#7dd3fc' }}>
              🎓 Sri Chaitanya Technical Campus • 7.58 CGPA
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4">
            I build and validate scalable AI inference systems with experience across <strong className="text-slate-200">QA automation, LLM deployment, full‑stack development,</strong> and <strong className="text-slate-200">observability</strong>. At <strong className="text-white">Cisco</strong>, I deploy LLaMA models via NVIDIA NIM containers on UCS C885A servers, benchmark inference with AIPerf, and monitor GPU utilization with Prometheus & Grafana.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl" style={{ background: 'rgba(100,255,218,0.04)', border: '1px solid rgba(100,255,218,0.12)' }}>
              <h4 className="text-sm font-semibold text-white mb-2">🤖 AI & LLM Infrastructure</h4>
              <p className="text-sm text-slate-400">
                Working with <strong className="text-slate-200">NVIDIA NIM, AIPerf, DCGM exporter,</strong> and <strong className="text-slate-200">LangChain</strong> to deploy, benchmark, and monitor large language models at enterprise scale.
              </p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(56,189,248,0.04)', border: '1px solid rgba(56,189,248,0.12)' }}>
              <h4 className="text-sm font-semibold text-white mb-2">⚡ Full-Stack Development</h4>
              <p className="text-sm text-slate-400">
                My stack includes <strong className="text-slate-200">React, Angular, Spring Boot, FastAPI, PostgreSQL, MySQL,</strong> with hands-on experience in Docker, Selenium, and Postman.
              </p>
            </div>
          </div>
          <p className="text-slate-400 text-sm mt-5">
            <strong className="text-slate-200">Core Strengths:</strong> OOP, Operating Systems, DBMS, Computer Networks, and LLM Engineering — enabling me to architect efficient, scalable enterprise applications.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center p-4 rounded-xl" style={{ background: 'rgba(100,255,218,0.04)', border: '1px solid rgba(100,255,218,0.1)' }}>
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-slate-400 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Role cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ icon: Icon, title, text, color }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 3}
              className="glass glass-hover p-5 rounded-xl text-center"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon size={24} style={{ color }} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{text}</p>
              <FiArrowRight size={16} className="mx-auto mt-3" style={{ color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
