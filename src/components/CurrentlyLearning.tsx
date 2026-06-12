import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiArrowRight } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const learning = [
  { topic: 'Advanced DSA', progress: 60, status: 'in-progress', desc: 'Trees, Graphs, DP patterns', color: '#6c63ff' },
  { topic: 'System Design Basics', progress: 35, status: 'in-progress', desc: 'HLD, LLD, Scalability', color: '#00d4ff' },
  { topic: 'FastAPI + REST', progress: 50, status: 'in-progress', desc: 'Building REST APIs with Python', color: '#10b981' },
  { topic: 'LLM Fine-Tuning', progress: 20, status: 'exploring', desc: 'LoRA, PEFT, datasets', color: '#f59e0b' },
  { topic: 'RAG Applications', progress: 30, status: 'in-progress', desc: 'LangChain, vector stores, embeddings', color: '#ec4899' },
  { topic: 'SQL Optimization', progress: 70, status: 'in-progress', desc: 'Indexing, query planning, EXPLAIN', color: '#34d399' },
];

const upcoming = [
  'Docker & Containerization',
  'Cloud (AWS / GCP Basics)',
  'React.js & TypeScript',
  'Machine Learning with scikit-learn',
  'CI/CD Pipelines',
];

export default function CurrentlyLearning() {
  return (
    <section className="section-padding" style={{ background: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#34d399' }}>Right Now</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#10b981,#6c63ff)' }} />
          <p className="text-slate-400 mt-4 text-sm">What's on my learning plate right now</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {learning.map((item, i) => (
            <motion.div
              key={item.topic}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="glass glass-hover p-5 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-white text-sm">{item.topic}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.status === 'in-progress' ? (
                    <FiClock size={13} style={{ color: item.color }} />
                  ) : (
                    <FiCheckCircle size={13} style={{ color: '#34d399' }} />
                  )}
                  <span className="text-xs font-semibold" style={{ color: item.color }}>{item.progress}%</span>
                </div>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Learning Path Section ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={7} className="text-center mb-10">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#6c63ff' }}>Roadmap</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            My <span style={{ background: 'linear-gradient(90deg,#6c63ff,#00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Learning Path</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#6c63ff,#00d4ff)' }} />
          <p className="text-slate-400 mt-4 text-sm">What's next on my roadmap</p>
        </motion.div>

        {/* Upcoming */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={8}
          className="glass p-6 rounded-2xl"
        >
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <FiArrowRight size={16} style={{ color: '#6c63ff' }} /> Topics Queued Up Next
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {upcoming.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-xl"
                style={{ background: 'rgba(108,99,255,0.07)', border: '1px solid rgba(108,99,255,0.15)' }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6c63ff' }} />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
