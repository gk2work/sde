import './Experience.css'

const experiences = [
  {
    id: 'viacerta',
    num: '01',
    company: 'ViaCerta',
    role: 'Full Stack Developer',
    period: 'April 2026 – Present',
    location: 'Remote',
    type: 'Full-time',
    current: true,
    highlights: [
      'Building core web applications and digital products from scratch using React for the frontend and Python for backend services.',
      'Architecting server-side operations, RESTful APIs, and database schemas to establish scalable tech infrastructure for new product launches.',
      'Collaborating directly with the founder and product leadership to plan technology roadmaps, system setup, and feature implementation.',
      'Overseeing deployment setup, third-party API integrations, performance optimization, and ongoing technical maintenance.',
    ],
    stack: ['React', 'Python', 'REST APIs', 'Database Schemas', 'Cloud Infrastructure', 'API Integrations'],
  },
  {
    id: 'foreignadmits',
    num: '02',
    company: 'ForeignAdmits',
    role: 'Software Development Engineer (SDE-1), Full Stack & AI Platform',
    period: 'Feb 2025 – Feb 2026',
    location: 'Bengaluru, India',
    type: 'Full-time',
    current: false,
    highlights: [
      'Co-developed "Course Finder", a full-stack study abroad platform using Node.js for the backend and Angular for the frontend, allowing students to search, filter, and shortlist university courses based on their profile.',
      'Built a Semantic Course Discovery search and shortlisting feature that matches university programs to student profiles, giving more relevant results than standard keyword search.',
      'Shipped an LLM-powered study-abroad chatbot end to end, owning prompt design, intent handling, and backend orchestration to automate first-line student support.',
      'Grounded chatbot answers in internal admissions data, replacing generic LLM output with verified university, course, and eligibility information to reduce incorrect responses.',
      'Built AI-assisted document-processing workflows that extract structured student and academic data from applications, IDs, and forms, removing hours of manual data entry per intake batch.',
      'Integrated OCR pipelines with backend validation and normalization, enforcing consistency checks that made high-volume ingestion reliable across multiple document formats.',
      'Designed and scaled backend services in Node.js, Express.js, and MongoDB, exposing REST APIs that serve real-time queries over high-volume admissions data.',
      'Secured the platform with RBAC and API authentication, giving counselors, operations, and internal stakeholders scoped access to AI-enabled tools.',
      'Optimized APIs and database queries through pagination, filtering, and indexing to keep dashboards and search responses low-latency under production load.',
      'Released new features in agile sprints using sprint planning, code reviews, and Git-based workflows for stable, repeatable production deployments.',
    ],
    stack: ['Node.js', 'Angular', 'Express.js', 'MongoDB', 'LLM', 'OCR Pipelines', 'RAG', 'RBAC', 'REST APIs'],
  },
  {
    id: 'uentree',
    num: '03',
    company: 'UEntrée',
    role: 'Software Development Engineer (SDE-1)',
    period: 'Jun 2023 – Jan 2025',
    location: 'Bengaluru, India',
    type: 'Full-time',
    current: false,
    highlights: [
      'Developed and maintained scalable web application features.',
      'Designed RESTful APIs, optimized database queries, and implemented user authentication workflows.',
      'Collaborated in agile sprints, participating in code reviews, bug fixes, and continuous product deployments.',
    ],
    stack: ['React', 'REST APIs', 'Database Optimization', 'Authentication Workflows', 'Agile'],
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
            Building software in fast-moving product teams, from backend services to AI features.
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
