# Deepikarthini Kanche — Developer Portfolio

A responsive personal portfolio showcasing my software engineering experience, technical skills, certifications, and projects across full-stack development, AI systems, QA automation, and networking.

## Highlights

- Responsive single-page layout for desktop, tablet, and mobile
- Animated section and project-card transitions with Framer Motion
- Project gallery with live-demo, frontend, backend, and source-code links
- Downloadable resume and CCNA certificate
- Contact form and social links
- Production build powered by Vite and TypeScript

## Featured Projects

| Project | Summary | Technologies |
| --- | --- | --- |
| [BugRepo](https://github.com/deepikarthinikanche/bugrepo-frontend) | Full-stack bug reproduction and QA workflow platform with role-based access, assignment workflows, and centralized issue tracking. [Backend](https://github.com/deepikarthinikanche/bugrepo-backend) · [Live demo](https://bugrepo-frontend.vercel.app) | React, Spring Boot, PostgreSQL, Java, REST API |
| TraceOps | RAG-based incident-analysis system that retrieves related application logs and helps identify root causes. | Python, FastAPI, LangChain, ChromaDB, React, OpenAI |
| [Autonomous AI Agent](https://github.com/deepikarthinikanche/autonomous-agent) | LLM-powered agent that plans multi-step work, reflects on its output, and generates formatted Word documents. | Python, FastAPI, Groq, Llama 3.1, Pydantic, python-docx |
| [Angular Cypress Authentication Testing Suite](https://github.com/deepikarthinikanche/Angular-Cypress-Authentication-Testing-Suite) | Angular authentication workflow with five component tests and nine Cypress end-to-end scenarios covering login, forms, navigation, and password reset. | Angular 20, TypeScript, Cypress 15, Jasmine, Karma |
| [AI-First CRM HCP Module](https://github.com/deepikarthinikanche/AI-First-CRM-HCP-Module) | Healthcare CRM with structured interaction logging and a LangGraph assistant for HCP profiles, talking points, sentiment analysis, and follow-ups. | React, Redux, FastAPI, LangGraph, Groq, PostgreSQL |

## Portfolio Technology Stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Icons
- ESLint

## Portfolio Sections

- Hero introduction and social links
- About and professional summary
- Technical skills
- Cisco experience
- Featured projects
- Contact form
- Resume and certificate links

## Getting Started

### Requirements

- Node.js 20 or newer
- npm

### Installation

```powershell
git clone https://github.com/deepikarthinikanche/-deepikarthini-portfolio.git
cd -deepikarthini-portfolio
npm install
```

### Development

```powershell
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the project and create a production build |
| `npm run lint` | Run ESLint across the repository |
| `npm run preview` | Preview the production build locally |

## Production Build

```powershell
npm run lint
npm run build
npm run preview
```

The optimized production output is generated in `dist/`. The folder is intentionally excluded from Git because it can be recreated from the source.

## Project Structure

```text
public/                 Static project screenshots, resume, and certificate
src/
  assets/               Imported application images
  components/           Portfolio section components
  App.tsx               Page composition
  index.css             Global styles and Tailwind configuration
  main.tsx              React entry point
index.html              Vite HTML entry point
vite.config.ts          Vite and Tailwind plugins
```

## Deployment

This is a static Vite application and can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider.

Use these deployment settings:

- Build command: `npm run build`
- Output directory: `dist`

## Contact

- GitHub: [deepikarthinikanche](https://github.com/deepikarthinikanche)
- LinkedIn: [Deepikarthini Kanche](https://www.linkedin.com/in/deepikarthinikanche/)
- Email: [deepikarthinikanche444@gmail.com](mailto:deepikarthinikanche444@gmail.com)

## License

This portfolio and its source code are maintained for personal and professional presentation.
