import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGitCommit, FiStar, FiTrendingUp } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { icon: FiCode, label: 'Projects Built', value: 2, suffix: '+', color: '#6c63ff' },
  { icon: FiGitCommit, label: 'Commits This Year', value: 150, suffix: '+', color: '#00d4ff' },
  { icon: FiStar, label: 'Problems Solved', value: 100, suffix: '+', color: '#fbbf24' },
  { icon: FiTrendingUp, label: 'Certifications', value: 2, suffix: '', color: '#10b981' },
];

function StatCard({ icon: Icon, label, value, suffix, color, animate }: typeof stats[0] & { animate: boolean }) {
  const count = useCountUp(value, 1600, animate);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="glass glass-hover p-6 rounded-2xl text-center"
    >
      <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
        style={{ background: `${color}18`, border: `1px solid ${color}40` }}>
        <Icon size={22} style={{ color }} />
      </div>
      <div className="text-3xl font-extrabold text-white">{count}{suffix}</div>
      <p className="text-xs text-slate-400 mt-1">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section-padding" style={{ background: '#0d0a1f' }} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#00d4ff' }}>Numbers</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            By the <span className="gradient-text">Stats</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#6c63ff,#00d4ff)' }} />
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, _i) => (
            <StatCard key={s.label} {...s} animate={started} />
          ))}
        </div>

        {/* GitHub contribution heatmap placeholder */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="mt-10 glass p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white text-sm">GitHub Contribution Activity</h3>
            <a
              href="https://github.com/deepikarthini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-white transition-colors"
              style={{ color: '#6c63ff', textDecoration: 'none' }}
            >
              View Profile →
            </a>
          </div>
          {/* Simulated contribution grid */}
          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {Array.from({ length: 52 }, (_, week) => (
                <div key={week} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }, (_, day) => {
                    const rnd = Math.random();
                    const level = rnd > 0.75 ? 3 : rnd > 0.55 ? 2 : rnd > 0.35 ? 1 : 0;
                    const colors = ['rgba(255,255,255,0.05)', '#6c63ff44', '#6c63ff88', '#6c63ff'];
                    return (
                      <div
                        key={day}
                        className="w-3 h-3 rounded-sm"
                        style={{ background: colors[level] }}
                        title={`${level * 2} contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 justify-end">
            <span className="text-xs text-slate-500">Less</span>
            {['rgba(255,255,255,0.05)', '#6c63ff44', '#6c63ff88', '#6c63ff'].map((c) => (
              <div key={c} className="w-3 h-3 rounded-sm" style={{ background: c }} />
            ))}
            <span className="text-xs text-slate-500">More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
