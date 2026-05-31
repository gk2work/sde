import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js 14', 'Angular 17', 'Tailwind CSS', 'shadcn/ui', 'Material-UI', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Flask', 'REST APIs', 'WebSockets', 'GraphQL'],
  },
  {
    category: 'Databases & Stores',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'SQLite', 'Qdrant', 'FAISS', 'Elasticsearch', 'Neo4j'],
  },
  {
    category: 'AI / ML',
    skills: ['OpenAI GPT-4o', 'Llama 3.1 + LoRA', 'vLLM', 'RAG Pipelines', 'Sentence-Transformers', 'FaceNet', 'OCR Pipelines', 'DeepSeek-Coder'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (ECS, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'],
  },
  {
    category: 'Auth & Security',
    skills: ['RBAC', 'JWT', 'NextAuth', 'bcrypt', 'AES-256', 'OAuth (Google)'],
  },
  {
    category: 'Automation',
    skills: ['Playwright', 'Telegram Bot API', 'APScheduler'],
  },
  {
    category: 'Integrations & Tools',
    skills: ['Twilio', 'Stripe', 'Cloudinary', 'Octokit', 'Git', 'GitHub', 'Jira', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-label="Skills and technologies">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">What I Work With</span>
          <h2 className="section-title">Skills &amp; <span className="accent">Technologies</span></h2>
          <p className="section-subtitle">
            A curated stack of languages, frameworks, and tools I use to build production-grade software.
          </p>
        </div>

        <div className="skills__table fade-in">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="skills__row"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="skills__row-label">{group.category}</span>
              <div className="skills__row-chips">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
