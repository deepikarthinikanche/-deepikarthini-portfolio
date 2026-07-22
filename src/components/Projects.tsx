import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 42, scale: 0.97, filter: 'blur(5px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 115,
      damping: 20,
      mass: 0.8,
      delay: i * 0.1,
    },
  }),
};

const techColors = ['#f472b6', '#38bdf8', '#fbbf24', '#34d399', '#a78bfa', '#fb7185'];

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  githubLabel?: string;
  backend?: string;
  demo?: string;
  image?: string;
  badge: string;
  badgeColor: string;
}

const projects: Project[] = [
  {
    title: 'BugRepo — Bug Reproduction & QA Workflow',
    description:
      'A full-stack application to streamline bug reporting, reproduction tracking, assignment workflows, and status management for QA and development teams. Features role-based access for testers, developers, and administrators with real-time bug tracking and centralized issue management.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'REST API', 'Java'],
    github: 'https://github.com/deepikarthinikanche/bugrepo-frontend',
    githubLabel: 'Frontend',
    backend: 'https://github.com/deepikarthinikanche/bugrepo-backend',
    demo: 'https://bugrepo-frontend.vercel.app',
    image: '/bugrepo-dashboard.png',
    badge: 'Full Stack',
    badgeColor: '#10b981',
  },
  {
    title: 'TraceOps — AI-Powered Root Cause Analysis System',
    description:
      'A RAG-based incident analysis system using FastAPI, ChromaDB, and LLMs to automate root cause identification from application logs. Implements semantic log retrieval with vector similarity search and OpenAI embeddings, enabling intelligent issue correlation across 15+ log patterns with sub-second response times.',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React', 'OpenAI'],
    github: 'https://github.com/deepikarthinikanche',
    image: '/traceops-dashboard.png',
    badge: 'AI / RAG',
    badgeColor: '#38bdf8',
  },
  {
    title: 'Autonomous AI Agent',
    description:
      'An autonomous agent built with FastAPI that accepts natural language requests, plans its own task execution using LLM-powered reasoning, and generates polished Word documents. Features self-reflection to review and improve plans, multi-step execution (Research → Outline → Generate → Format → Review), and REST API endpoints for document generation.',
    tech: ['Python', 'FastAPI', 'Groq', 'Llama 3.1', 'Pydantic', 'python-docx'],
    github: 'https://github.com/deepikarthinikanche/autonomous-agent',
    image: '/autonomous-agent-api.png',
    badge: 'AI Agent',
    badgeColor: '#a78bfa',
  },
  {
    title: 'Angular Cypress Authentication Testing Suite',
    description:
      'An Angular 20 authentication workflow with automated component and end-to-end testing. Covers login, form interaction, navigation, password-reset routing, and complete browser journeys with 9 passing Cypress E2E scenarios and 5 passing Angular unit tests.',
    tech: ['Angular 20', 'TypeScript', 'Cypress 15', 'Jasmine', 'Karma', 'Angular Forms'],
    github: 'https://github.com/deepikarthinikanche/Angular-Cypress-Authentication-Testing-Suite',
    image: '/angular-cypress-auth-testing.png',
    badge: 'QA Automation',
    badgeColor: '#69d3a7',
  },
  {
    title: 'AI-First CRM HCP Module',
    description:
      'An AI-first healthcare CRM that helps pharmaceutical field representatives log HCP interactions through a structured form or conversational assistant. Uses LangGraph agents to extract interaction details, retrieve HCP profiles, suggest talking points, analyze sentiment, and schedule follow-ups.',
    tech: ['React', 'Redux', 'FastAPI', 'LangGraph', 'Groq', 'PostgreSQL'],
    github: 'https://github.com/deepikarthinikanche/AI-First-CRM-HCP-Module',
    image: '/ai-first-crm-hcp-module.png',
    badge: 'AI CRM',
    badgeColor: '#8b5cf6',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.16 }}
      custom={index}
      whileHover={{
        y: -12,
        scale: 1.015,
        borderColor: `${project.badgeColor}80`,
        boxShadow: `0 22px 55px ${project.badgeColor}24, 0 0 0 1px ${project.badgeColor}16`,
        transition: { type: 'spring', stiffness: 300, damping: 22 },
      }}
      whileTap={{
        y: -5,
        scale: 0.99,
        transition: { type: 'spring', stiffness: 420, damping: 24 },
      }}
      className="rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: 'linear-gradient(145deg, rgba(29,40,59,0.98), rgba(24,34,51,0.98))',
        border: '1px solid rgba(148,163,184,0.14)',
        boxShadow: '0 10px 32px rgba(2,8,23,0.22)',
        backdropFilter: 'blur(14px)',
        transformOrigin: 'center bottom',
        willChange: 'transform, box-shadow',
      }}
    >
      {project.image && (
        <div className="px-5 pt-5">
          <div className="rounded-xl overflow-hidden bg-white border border-white/10">
            <img
              src={project.image}
              alt={`${project.title} dashboard`}
              className="w-full aspect-[16/11] object-contain object-center"
            />
          </div>
        </div>
      )}

      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-xl font-bold leading-tight text-white">{project.title}</h3>

          <div className="flex flex-wrap justify-end gap-1.5 shrink-0">
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="px-2.5 py-1.5 rounded-md text-[11px] font-bold uppercase"
                style={{ background: 'rgba(34,197,94,0.18)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)', textDecoration: 'none' }}
              >
                Live
              </motion.a>
            )}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-2.5 py-1.5 rounded-md text-[11px] font-bold uppercase"
              style={{ background: 'rgba(59,130,246,0.16)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)', textDecoration: 'none' }}
            >
              {project.githubLabel ?? 'Code'}
            </motion.a>
            {project.backend && (
              <motion.a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="px-2.5 py-1.5 rounded-md text-[11px] font-bold uppercase"
                style={{ background: 'rgba(167,139,250,0.16)', color: '#c4b5fd', border: '1px solid rgba(196,181,253,0.3)', textDecoration: 'none' }}
              >
                API
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-6 mb-5 line-clamp-3">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, techIndex) => {
            const color = techColors[techIndex % techColors.length];
            return (
            <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{ background: `${color}0d`, color, border: `1px solid ${color}35` }}>
              {t}
            </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background: '#0a192f' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.35 }} className="text-center mb-10">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#64ffda' }}>My work</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
            Projects
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'linear-gradient(90deg,#64ffda,#38bdf8)' }} />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Here are my projects that showcase my skills across different technologies and domains. Each project demonstrates my problem-solving abilities and technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
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
