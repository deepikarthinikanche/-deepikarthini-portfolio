import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const highlights = [
  'Deployed LLaMA models via NVIDIA NIM containers on Cisco UCS C885A M8 H26 servers (H200 NVL GPUs) for mission-critical AI performance validation.',
  'Executed LLM benchmarking using AIPerf to analyze TTFT, p95/p99 latency, throughput, concurrency scaling, and GPU utilization metrics.',
  'Designed mixed short-context and long-context workload simulations to evaluate inference performance under production-like traffic conditions.',
  'Configured multi-turn conversational workloads with Poisson traffic patterns for enterprise AI serving and long-context inference testing.',
  'Monitored GPU memory, compute utilization, and inference KPIs using NVIDIA DCGM exporter, Prometheus, and Grafana dashboards.',
];

const techStack = [
  { label: 'Python', color: '#3b82f6' },
  { label: 'NVIDIA NIM', color: '#76b900' },
  { label: 'AIPerf', color: '#06b6d4' },
  { label: 'Grafana', color: '#f59e0b' },
  { label: 'Cisco UCS C885A', color: '#0d6efd' },
  { label: 'H200 GPUs', color: '#76b900' },
  { label: 'Prometheus', color: '#e85d04' },
  { label: 'DCGM Exporter', color: '#8b5cf6' },
];

export default function CiscoExperience() {
  return (
    <section id="cisco-experience" className="section-padding" style={{ background: '#112240' }}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#64ffda' }}>
            What I have done so far
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
            Work Experience
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#64ffda,#38bdf8)' }} />
        </motion.div>

        {/* Timeline card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, #64ffda, #38bdf8, #64ffda)' }} />

          {/* Experience item */}
          <div className="relative pl-16">
            {/* Timeline dot */}
            <div className="absolute left-4 top-2 w-5 h-5 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: '#64ffda', background: '#112240' }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#64ffda' }} />
            </div>

            <div className="glass rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="px-6 py-5 flex flex-wrap items-center justify-between gap-4"
                style={{ borderBottom: '1px solid rgba(100,255,218,0.12)' }}>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg"
                    style={{ background: 'linear-gradient(135deg,#0d6efd,#0055a5)', color: '#fff' }}
                  >
                    C
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Software Test Engineer Apprentice</h3>
                    <p className="text-sm font-medium" style={{ color: '#64ffda' }}>Cisco Systems — UCS AI Sizer Team</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={13} style={{ color: '#64ffda' }} />
                    June 2025 – Present
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={13} style={{ color: '#38bdf8' }} />
                    Bengaluru, India
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <ul className="space-y-3 mb-6">
                  {highlights.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i * 0.3 + 2}
                      className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                    >
                      <FiCheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: '#64ffda' }} />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div>
                  <h4 className="font-semibold text-slate-300 mb-3 text-xs uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech.label}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `${tech.color}14`,
                          color: tech.color,
                          border: `1px solid ${tech.color}40`,
                        }}
                      >
                        {tech.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
