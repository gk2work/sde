import './Certifications.css'

const certs = [
  {
    id: 'mcp',
    name: 'Fundamentals of MCP',
    issuer: 'Hugging Face',
    icon: '🤗',
  },
  {
    id: 'agents',
    name: 'Agents Fundamentals',
    issuer: 'Hugging Face',
    icon: '🤗',
  },
  {
    id: 'ml-fdp',
    name: 'Joint Faculty Development Programme on Classical ML',
    issuer: 'Electronics & ICT Academy, IIT Guwahati (supported by MeitY, Govt. of India) · May 2026',
    icon: '🎓',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications" style={{ background: 'var(--bg-secondary)' }} aria-label="Certifications">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Continuous Learning</span>
          <h2 className="section-title"><span className="accent">Certifications</span></h2>
          <p className="section-subtitle">
            Professional certifications to stay at the cutting edge of AI and hardware technologies.
          </p>
        </div>

        <div className="certs__grid">
          {certs.map((cert, index) => (
            <div
              key={cert.id}
              className="card certs__card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="certs__card-icon" aria-hidden="true">{cert.icon}</div>
              <div className="certs__card-content">
                <h3 className="certs__name">{cert.name}</h3>
                <p className="certs__issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
