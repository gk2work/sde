import './About.css'
import gkPhoto from '../assets/gk.jpeg'

const quickInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    text: 'Bengaluru, India',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
    ),
    text: 'Full Stack Dev @ ViaCerta',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    ),
    text: 'B.Tech ECE · Asansol Engineering College',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    text: 'gautam.aec18@gmail.com',
    href: 'mailto:gautam.aec18@gmail.com',
  },
]

const strengths = [
  { label: 'Full-Stack Development', desc: 'React, Angular, Node.js, Python, MongoDB, RESTful APIs.' },
  { label: 'AI & OCR Integration', desc: 'LLM app development, prompt engineering, RAG, document extraction pipelines, MCP.' },
  { label: 'Backend & Data Systems', desc: 'Scalable RESTful services, schema design, query optimization, RBAC security.' },
  { label: 'Product Architecture', desc: 'Architecting products from scratch to low-latency production deployments in agile teams.' },
]

export default function About() {
  return (
    <section id="about" className="section about" style={{ background: 'var(--bg-secondary)' }} aria-label="About me">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            The Engineer <span className="accent">Behind the Code</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="about__grid">

          {/* ── Left: sidebar ── */}
          <aside className="about__sidebar fade-in-left">
            <div className="about__photo-wrap">
              <img src={gkPhoto} alt="Gautam Kumar" className="about__photo" />
              <span className="about__available-badge">
                <span className="about__badge-pulse" aria-hidden="true"></span>
                Available
              </span>
            </div>

            <div className="about__sidebar-info">
              <h3 className="about__sidebar-name">Gautam Kumar</h3>
              <p className="about__sidebar-role">Full Stack Developer & SDE-1</p>
            </div>

            <ul className="about__quick-list">
              {quickInfo.map((item) => (
                <li key={item.text} className="about__quick-item">
                  <span className="about__quick-icon" aria-hidden="true">{item.icon}</span>
                  {item.href
                    ? <a href={item.href} className="about__quick-link">{item.text}</a>
                    : <span>{item.text}</span>
                  }
                </li>
              ))}
            </ul>
          </aside>

          {/* ── Right: content ── */}
          <div className="about__content fade-in-right">

            <p className="about__lead">
              Full Stack Developer with extensive experience building scalable web applications, RESTful APIs, and LLM-powered features.
            </p>

            <p className="about__body">
              Skilled across the full stack with React, Angular, Node.js, Python, and MongoDB. Proven track record of architecting digital products from scratch, integrating AI and OCR pipelines, and deploying reliable, low-latency backend services in agile environments.
            </p>

            <p className="about__body">
              From building semantic search and study-abroad platforms at ForeignAdmits to architecting server-side tech infrastructure for product launches at ViaCerta, I focus on clean code, robust system design, and high-impact digital solutions.
            </p>

            {/* What I bring */}
            <div className="about__strengths">
              <h4 className="about__strengths-title">Core Competencies</h4>
              <div className="about__strengths-grid">
                {strengths.map((s) => (
                  <div key={s.label} className="about__strength-item">
                    <span className="about__strength-dot" aria-hidden="true"></span>
                    <div>
                      <strong>{s.label}</strong>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
