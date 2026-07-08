import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  badge: string;
  badgeColor: string;
}

const projects: Project[] = [
  {
    title: 'Bug Reproduction and QA Workflow Management System',
    description:
      'A full-stack application to streamline bug reporting, reproduction tracking, assignment workflows, and status management for QA and development teams. Features role-based access for testers, developers, and administrators with real-time bug tracking and centralized issue management.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'REST API', 'Java'],
    github: 'https://github.com/deepikarthinikanche',
    badge: 'Full Stack',
    badgeColor: '#10b981',
  },
  {
    title: 'TraceOps — AI-Powered Root Cause Analysis System',
    description:
      'A RAG-based incident analysis system using FastAPI, ChromaDB, and LLMs to automate root cause identification from application logs. Implements semantic log retrieval with vector similarity search and OpenAI embeddings, enabling intelligent issue correlation across 15+ log patterns with sub-second response times.',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React', 'OpenAI'],
    github: 'https://github.com/deepikarthinikanche',
    badge: 'AI / RAG',
    badgeColor: '#38bdf8',
  },
  {
    title: 'Autonomous AI Agent',
    description:
      'An autonomous agent built with FastAPI that accepts natural language requests, plans its own task execution using LLM-powered reasoning, and generates polished Word documents. Features self-reflection to review and improve plans, multi-step execution (Research → Outline → Generate → Format → Review), and REST API endpoints for document generation.',
    tech: ['Python', 'FastAPI', 'Groq', 'Llama 3.1', 'Pydantic', 'python-docx'],
    github: 'https://github.com/deepikarthinikanche/autonomous-agent',
    badge: 'AI Agent',
    badgeColor: '#a78bfa',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* Header gradient bar */}
      <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${project.badgeColor}, ${project.badgeColor}88)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Badge */}
        <span
          className="self-start px-3 py-1 rounded-full text-xs font-semibold mb-4"
          style={{ background: `${project.badgeColor}18`, color: project.badgeColor, border: `1px solid ${project.badgeColor}35` }}
        >
          {project.badge}
        </span>

        <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{ background: 'rgba(100,255,218,0.06)', color: '#64ffda', border: '1px solid rgba(100,255,218,0.15)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: 'rgba(100,255,218,0.08)', color: '#64ffda', border: '1px solid rgba(100,255,218,0.2)', textDecoration: 'none' }}
          >
            <FiGithub size={15} /> Code
          </motion.a>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white"
              style={{ background: 'linear-gradient(135deg,#64ffda,#38bdf8)', color: '#0a192f', textDecoration: 'none' }}
            >
              <FiExternalLink size={15} /> Live
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background: '#0a192f' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#64ffda' }}>My work</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
            Projects
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#64ffda,#38bdf8)' }} />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Here are my projects that showcase my skills across different technologies and domains. Each project demonstrates my problem-solving abilities and technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/deepikarthinikanche"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(145,94,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg,#64ffda,#38bdf8)', color: '#0a192f', textDecoration: 'none' }}
          >
            <FiGithub size={17} /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
