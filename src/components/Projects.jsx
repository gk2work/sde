import './Projects.css'

const projects = [
  {
    id: 'course-finder',
    num: '01',
    title: 'Course Finder',
    description: 'Co-developed a full-stack study abroad platform using Node.js for the backend and Angular for the frontend, allowing students to search, filter, and shortlist university courses based on their profile.',
    tags: ['Node.js', 'Angular', 'MongoDB', 'REST APIs', 'Express.js'],
    category: 'Selected Work',
    github: null,
    live: null,
  },
  {
    id: 'semantic-search',
    num: '02',
    title: 'Semantic Course Discovery',
    description: 'Built a search and shortlisting feature that matches university programs to student profiles, giving more relevant results than standard keyword search.',
    tags: ['RAG', 'Semantic Search', 'Node.js', 'Angular', 'MongoDB'],
    category: 'Selected Work',
    github: null,
    live: null,
  },
  {
    id: 'conversational-assistant',
    num: '03',
    title: 'Conversational Admissions Assistant',
    description: 'Developed a chatbot to handle common student queries using structured prompts and intent routing, with a fallback to human counselors when needed.',
    tags: ['LLM Orchestration', 'Prompt Engineering', 'Intent Routing', 'Node.js'],
    category: 'Selected Work',
    github: null,
    live: null,
  },
  {
    id: 'document-intelligence',
    num: '04',
    title: 'Document Intelligence Pipeline',
    description: 'Built a document processing service that extracts and structures data from student application forms and IDs, reducing manual data entry for the admissions team.',
    tags: ['OCR Pipelines', 'Data Extraction', 'Backend Validation', 'Node.js'],
    category: 'Selected Work',
    github: null,
    live: null,
  },
  {
    id: 'formalmock',
    num: '05',
    title: 'FormalMock',
    description: 'Voice interview platform powered by AI. Upload a CV, configure the session, have a live voice conversation with an AI interviewer, and receive a scored evaluation with personalised feedback.',
    tags: ['Next.js 14', 'TypeScript', 'GPT-4o', 'Web Speech API', 'MongoDB'],
    category: 'Full-Stack AI',
    github: 'https://github.com/gk2work/interview-platform',
    live: 'https://formalmock.vercel.app',
  },
  {
    id: 'voice-loan',
    num: '06',
    title: 'AI Voice Loan Agent',
    description: 'Multilingual voice system that qualifies students for study-abroad loans. Handles inbound and outbound calls, collects eligibility data, answers FAQs, and hands off qualified leads to a human agent.',
    tags: ['FastAPI', 'Twilio', 'OpenAI', 'React', 'MongoDB'],
    category: 'AI Voice System',
    github: 'https://github.com/gk2work/ai-voice-agent',
    live: null,
  },
  {
    id: 'job-agent',
    num: '07',
    title: 'VeriJob — Auto-Apply Agent',
    description: 'End-to-end job-search agent that scrapes live listings from Naukri, Indeed, Glassdoor, and other job portals, then auto-applies with tailored GPT-generated cover letters and tracks application status.',
    tags: ['Node.js', 'Playwright', 'OpenAI', 'React', 'SQLite'],
    category: 'Automation Agent',
    github: 'https://github.com/gk2work/job-search-agent',
    live: null,
  },
  {
    id: 'deepseek-copilot',
    num: '08',
    title: 'DeepSeek Code Copilot',
    description: 'Local AI code-completion system built on DeepSeek-Coder-1.3B with 4-bit quantization and LoRA fine-tuning. Served through a VS Code extension with full repo context for inline completions.',
    tags: ['FastAPI', 'DeepSeek-Coder', 'LoRA', 'VS Code Extension'],
    category: 'AI Dev Tool',
    github: 'https://github.com/gk2work/code-copilot',
    live: null,
  },
  {
    id: 'trading-analytics',
    num: '09',
    title: 'Trading Analytics Platform',
    description: 'MERN-stack app for Indian retail traders. Covers portfolio analysis, P&L, CAGR, XIRR, drawdown metrics, smart alerts, STCG/LTCG tax estimation, and benchmark comparisons against indices.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    category: 'FinTech App',
    github: 'https://github.com/gk2work/portfolios-analytics',
    live: null,
  },
  {
    id: 'face-auth',
    num: '10',
    title: 'Face Auth & De-duplication',
    description: 'Face authentication system built for large public exams. Processes 10,000+ applications per hour via FAISS and FaceNet, with AES-256 encryption, RBAC access control, and WebSocket status updates.',
    tags: ['FastAPI', 'FAISS', 'FaceNet', 'React 19', 'Material-UI'],
    category: 'AI Security',
    github: 'https://github.com/gk2work/Face-Authentication-System',
    live: null,
  },
]

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const LiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-label="Projects">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">All Work</span>
          <h2 className="section-title">Other <span className="accent">Projects</span></h2>
          <p className="section-subtitle">
            A range of full-stack apps, AI tools, and automation systems built across different domains.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="projects__item fade-in"
              style={{ transitionDelay: `${(index % 8) * 0.04}s` }}
            >
              {/* Number bar */}
              <div className="projects__bar">
                <span className="projects__num">{project.num}</span>
                <span className="projects__category">{project.category}</span>
                <div className="projects__bar-line" aria-hidden="true"></div>
                <div className="projects__links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label="Live demo">
                      <LiveIcon /> Live ↗
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label="GitHub">
                      <GithubIcon /> Source ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="projects__body">
                <div className="projects__main">
                  <h3 className="projects__title">{project.title}</h3>
                  <p className="projects__desc">{project.description}</p>
                </div>
                <div className="projects__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__chip">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__cta fade-in">
          <a href="https://github.com/gk2work" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View all on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}
