import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Angular', 'HTML', 'CSS'],
  },
  {
    category: 'AI / LLM',
    skills: [
      'LLM App Development',
      'Prompt Engineering',
      'RAG & Semantic Search',
      'OCR / Document Extraction',
      'MCP & Agent Fundamentals',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'Authentication & RBAC',
    ],
  },
  {
    category: 'Data',
    skills: ['MongoDB', 'SQL', 'Schema Design', 'Query Optimization'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (ECS, S3)', 'Docker', 'CI/CD', 'Git', 'GitHub'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Postman', 'Jira', 'Agile/Scrum', 'Code Review', 'Data Structures'],
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
            Languages, frameworks, and tools I work with across the full stack.
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
