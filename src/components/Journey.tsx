import { motion } from 'framer-motion';
import { FiBook, FiCpu, FiGitBranch, FiMonitor, FiBriefcase } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.12 } }),
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.12 } }),
};

const timeline = [
  {
    icon: FiBook,
    color: '#6c63ff',
    title: 'CSE Graduate',
    subtitle: 'Sri Chaitanya Technical Campus',
    period: '2020 – 2024',
    description: 'Completed a four-year B.E. Computer Science & Engineering program covering algorithms, databases, operating systems, computer networks, and software engineering fundamentals.',
    tags: ['C', 'Java', 'Python', 'DBMS', 'OS', 'CN'],
  },
  {
    icon: FiBriefcase,
    color: '#34d399',
    title: 'Software Automation Apprentice',
    subtitle: 'Cisco · Karnataka, Bangalore',
    period: 'Aug 2025 – Aug 2026',
    description: 'Collaborating with cross-functional teams on development, testing, and debugging. Deployed and tested LLMs (Mistral-24B, LLaMA-70B) using NVIDIA NIM and Triton. Performed performance benchmarking using aiperf and monitored systems with Grafana and Prometheus.',
    tags: ['Python', 'NVIDIA NIM', 'Triton', 'Prometheus', 'Grafana', 'aiperf', 'LLaMA-70B', 'Mistral-24B'],
  },
  {
    icon: FiCpu,
    color: '#00d4ff',
    title: 'AI/LLM Exploration',
    subtitle: 'Self-driven Learning & Practice',
    period: '2024 – Present',
    description: 'Diving deep into Large Language Models, exploring Ollama with Llama and Mistral locally, studying transformer architecture, and practising prompt engineering techniques.',
    tags: ['Llama', 'Mistral', 'Ollama', 'Prompt Engineering', 'Gen AI'],
  },
  {
    icon: FiMonitor,
    color: '#f59e0b',
    title: 'Observability & Monitoring',
    subtitle: 'Prometheus · Grafana · AI Perf',
    period: '2024 – Present',
    description: 'Gained hands-on experience monitoring AI inference systems — collecting metrics with Prometheus, building dashboards in Grafana, and analysing model latency using AI Perf tools.',
    tags: ['Prometheus', 'Grafana', 'AI Perf', 'Metrics', 'Alerting'],
  },
  {
    icon: FiGitBranch,
    color: '#10b981',
    title: 'DSA & Interview Prep',
    subtitle: 'Daily Practice on LeetCode / GFG',
    period: '2024 – Present',
    description: 'Following a structured 90-day DSA roadmap covering arrays, linked lists, trees, graphs, dynamic programming, and system design — with consistent morning coding sessions.',
    tags: ['Arrays', 'Trees', 'Graphs', 'DP', 'System Design'],
  },
];

type TimelineItem = typeof timeline[0];

function Card({ item }: { item: TimelineItem }) {
  const Icon = item.icon;
  return (
    <div className="glass glass-hover p-5 rounded-2xl w-full">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="font-bold text-slate-800">{item.title}</h3>
          <p className="text-sm" style={{ color: item.color }}>{item.subtitle}</p>
        </div>
        <span
          className="text-xs px-3 py-1 rounded-full flex-shrink-0"
          style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}35` }}
        >
          {item.period}
        </span>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed mb-3">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span key={t} className="px-2.5 py-0.5 rounded-md text-xs"
            style={{ background: 'rgba(236,72,153,0.05)', color: '#ec4899', border: '1px solid rgba(236,72,153,0.15)' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="section-padding" style={{ background: '#fff8fc' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#ec4899' }}>My Path</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            <span style={{ color: '#1e1b4b' }}>Learning </span><span className="gradient-text">Journey</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#ec4899,#8b5cf6)' }} />
          <p className="text-slate-500 mt-4 text-sm max-w-lg mx-auto">
            A timeline of milestones, skills acquired, and continuous growth on my path to becoming an SDE.
          </p>
        </motion.div>

        {/* ── Desktop: two-column alternating layout ── */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, #ec4899 10%, #8b5cf6 90%, transparent 100%)' }}
          />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={isLeft ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="relative flex items-center"
                >
                  {/* Left half */}
                  <div className="w-[calc(50%-1.5rem)] pr-8 flex justify-end">
                    {isLeft && <Card item={item} />}
                  </div>

                  {/* Center dot */}
                  <div
                    className="shrink-0 z-10 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: '#fff8fc',
                      border: `2.5px solid ${item.color}`,
                      boxShadow: `0 0 0 5px ${item.color}20`,
                    }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>

                  {/* Right half */}
                  <div className="w-[calc(50%-1.5rem)] pl-8 flex justify-start">
                    {!isLeft && <Card item={item} />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: single-column layout ── */}
        <div
          className="md:hidden space-y-8 pl-14"
          style={{ borderLeft: '2px solid rgba(236,72,153,0.5)' }}
        >
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative"
              >
                <div
                  className="absolute top-4 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ left: '-3.1rem', background: '#fff8fc', border: `2px solid ${item.color}60` }}
                >
                  <Icon size={16} style={{ color: item.color }} />
                </div>
                <Card item={item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
