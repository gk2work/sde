import './About.css'
import gkPhoto from '../assets/gk.jpeg'

const quickInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    text: 'Bengaluru, Karnataka',
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
    text: 'B.Tech ECE — Asansol Engineering College',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    text: 'gkt2work@gmail.com',
    href: 'mailto:gkt2work@gmail.com',
  },
]

const strengths = [
  { label: 'Full-Stack Engineering', desc: 'React, Next.js, Node.js, FastAPI — end to end.' },
  { label: 'AI & LLM Integration', desc: 'RAG pipelines, fine-tuned models, OCR, GPT-4o.' },
  { label: 'System Design', desc: 'Scalable APIs, RBAC, WebSockets, cloud deployments.' },
  { label: 'Product Mindset', desc: 'From architecture decisions to shipping to production.' },
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
              <p className="about__sidebar-role">Software Engineer & AI Builder</p>
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
              Full-stack engineer with a passion for building things that work at scale —
              from clean APIs to intelligent, AI-driven user experiences.
            </p>

            <p className="about__body">
              I transitioned from Electronics & Communication Engineering into software through
              self-driven learning and haven't looked back. I've since built LLM chatbots,
              RAG systems, OCR pipelines, face-authentication platforms, and multi-tenant SaaS
              products — each one shipped to real users.
            </p>

            <p className="about__body">
              I care deeply about code quality, product impact, and developer experience.
              Whether it's architecting a new system or optimising a slow query,
              I bring the same attention to detail to every layer of the stack.
            </p>

            {/* What I bring */}
            <div className="about__strengths">
              <h4 className="about__strengths-title">What I bring to the table</h4>
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
