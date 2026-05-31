import './Experience.css'

const experiences = [
  {
    id: 'viacerta',
    num: '01',
    company: 'ViaCerta',
    role: 'Full Stack Developer',
    period: 'May 2026 – Present',
    location: 'Bengaluru, India',
    type: 'Full-time',
    current: true,
    highlights: [
      'Develop and maintain company websites, web applications, and mobile applications.',
      'Manage backend architecture, APIs, databases, and server-side operations.',
      'Collaborate with product, marketing, and management teams on feature implementation and optimisation.',
      'Ensure scalability, performance, security, and smooth functionality across all digital platforms.',
      'Manage deployment, integrations, bug fixes, and technical maintenance.',
      'Research and implement modern technologies and development practices to drive business growth.',
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'MongoDB', 'Cloud Infrastructure'],
  },
  {
    id: 'foreignadmits',
    num: '02',
    company: 'ForeignAdmits',
    role: 'Software Development Engineer (SDE-1)',
    period: 'Feb 2025 – March 2025',
    location: 'Bengaluru, India',
    type: 'Full-time',
    current: false,
    highlights: [
      'Designed and implemented AI-driven platform features — owned end-to-end conversational workflow design with LLM-powered chatbots handling study-abroad queries, integrating responses with internal admissions data to reduce manual counselor intervention.',
      'Built AI-assisted document processing workflows for structured extraction of student and academic data via OCR pipelines with backend validation, normalisation, and consistency checks for high-volume ingestion.',
      'Implemented intelligent search and recommendation workflows inspired by RAG-based systems, enabling semantic course discovery and smarter shortlisting aligned with student profiles.',
      'Developed and maintained scalable backend services using Node.js, Express.js, and MongoDB; designed REST APIs supporting real-time queries and high-volume admissions data.',
      'Integrated role-based access control (RBAC) and secure API authentication for counselors, operations teams, and internal stakeholders.',
      'Optimised API performance, pagination, filtering, and database queries for low-latency responses powering AI dashboards and search.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'LLM', 'OCR', 'RAG', 'RBAC', 'REST APIs'],
  },
  {
    id: 'coding-ninjas',
    num: '03',
    company: 'Coding Ninjas',
    role: 'Full Stack Web Development',
    period: 'June 2023 – Feb 2025',
    location: 'Remote',
    type: 'Training',
    current: false,
    highlights: [
      'Built production-grade full-stack applications covering React frontends, Node.js/Express backends, and MongoDB/SQL databases.',
      'Developed REST APIs and authentication flows, following Git/GitHub-based collaborative workflows.',
      'Completed hands-on curriculum covering data structures, system design fundamentals, and deployment pipelines.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Git'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience" style={{ background: 'var(--bg-secondary)' }} aria-label="Work experience">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work <span className="accent">Experience</span></h2>
          <p className="section-subtitle">
            Building production-grade software in fast-moving, AI-first environments.
          </p>
        </div>

        <div className="exp__list">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="exp__card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
              aria-label={`${exp.role} at ${exp.company}`}
            >
              {/* Number bar */}
              <div className="exp__bar">
                <span className="exp__num">{exp.num}</span>
                <span className="exp__type">{exp.type}</span>
                {exp.current && <span className="exp__current">● Now</span>}
                <div className="exp__bar-line" aria-hidden="true"></div>
                <span className="exp__period">{exp.period}</span>
              </div>

              {/* Header */}
              <div className="exp__head">
                <h3 className="exp__company">{exp.company}</h3>
                <p className="exp__role">{exp.role}</p>
                {exp.location && (
                  <span className="exp__location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {exp.location}
                  </span>
                )}
              </div>

              {/* Body: highlights + stack */}
              <div className="exp__body">
                <ul className="exp__highlights" aria-label="Key responsibilities">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="exp__highlight">
                      <span className="exp__check" aria-hidden="true">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <aside className="exp__stack-box">
                  <span className="exp__stack-label">Tech Stack</span>
                  <div className="exp__tags">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="exp__chip">{tech}</span>
                    ))}
                  </div>
                </aside>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
