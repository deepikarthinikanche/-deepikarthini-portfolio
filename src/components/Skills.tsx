import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiHtml5, SiCss, SiGit, SiGithub,
  SiPrometheus, SiGrafana, SiDocker, SiPostgresql,
  SiSpringboot, SiReact, SiSelenium, SiPostman,
  SiTypescript, SiJavascript, SiAngular, SiMysql, SiFastapi,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiCpu, FiDatabase, FiBook, FiLayers, FiTool } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05 } }),
};

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

const categories: { id: string; label: string; emoji: string; skills: Skill[] }[] = [
  {
    id: 'ai',
    label: 'AI/LLM Engineering',
    emoji: '🤖',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3b82f6' },
      { name: 'LangChain', icon: FiBook, color: '#34d399' },
      { name: 'ChromaDB', icon: FiDatabase, color: '#64ffda' },
      { name: 'AIPerf', icon: FiCpu, color: '#06b6d4' },
      { name: 'HuggingFace, Transformers', icon: FiCpu, color: '#fbbf24' },
      { name: 'Machine Learning', icon: FiCpu, color: '#a78bfa' },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Development',
    emoji: '🚀',
    skills: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Angular', icon: SiAngular, color: '#dd0031' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Java', icon: FaJava, color: '#f97316' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34c26' },
      { name: 'CSS3', icon: SiCss, color: '#06b6d4' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Monitoring',
    emoji: '☁️',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f97316' },
      { name: 'GitHub', icon: SiGithub, color: '#e2e8f0' },
      { name: 'Prometheus', icon: SiPrometheus, color: '#ef4444' },
      { name: 'Grafana', icon: SiGrafana, color: '#f59e0b' },
      { name: 'Linux', icon: FiTool, color: '#fcc624' },
      { name: 'Selenium', icon: SiSelenium, color: '#43b02a' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
    ],
  },
  {
    id: 'concepts',
    label: 'Core CS',
    emoji: '📚',
    skills: [
      { name: 'DSA', icon: FiLayers, color: '#8b5cf6' },
      { name: 'OOP', icon: FiCpu, color: '#a78bfa' },
      { name: 'DBMS', icon: FiDatabase, color: '#34d399' },
      { name: 'OS', icon: FiTool, color: '#f59e0b' },
      { name: 'Computer Networks', icon: FiTool, color: '#f472b6' },
      { name: 'LLM Engineering', icon: FiBook, color: '#00d4ff' },
      { name: 'RAG', icon: FiBook, color: '#38bdf8' },
    ],
  },
];

function SkillIcon({ skill, delay }: { skill: Skill; delay: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      className="flex flex-col items-center gap-2 p-4 rounded-xl glass-hover cursor-default"
      style={{ minWidth: 80 }}
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ background: `${skill.color}12`, border: `1px solid ${skill.color}30` }}>
        <Icon size={28} style={{ color: skill.color }} />
      </div>
      <span className="text-xs text-slate-300 font-medium text-center">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('ai');
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="section-padding" style={{ background: '#112240' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skillsets
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center text-slate-400 text-sm max-w-2xl mx-auto mb-10"
        >
          Proficient in modern technologies spanning <strong className="text-slate-200">AI/ML, Full‑Stack Development, DevOps & Monitoring,</strong> and <strong className="text-slate-200">Core CS</strong>. Experienced in building production‑grade enterprise applications with a focus on scalability and performance.
        </motion.p>

        {/* Category tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
              style={
                active === cat.id
                  ? { background: 'linear-gradient(135deg,#64ffda,#38bdf8)', color: '#0a192f', boxShadow: '0 4px 20px rgba(100,255,218,0.25)' }
                  : { background: 'rgba(100,255,218,0.06)', border: '1px solid rgba(100,255,218,0.12)' }
              }
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill icons grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {current.skills.map((skill, i) => (
            <SkillIcon key={skill.name} skill={skill} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
