import './Certifications.css'
import hfLogo from '../assets/huggingface-logo.svg'
import iitgLogo from '../assets/iitg-logo.png'

const certs = [
  {
    id: 'mcp',
    title: 'Fundamentals of MCP',
    issuer: 'Hugging Face',
    subtitle: 'Model Context Protocol',
    tag: 'AI Certification',
    logo: hfLogo,
    alt: 'Hugging Face',
  },
  {
    id: 'agents',
    title: 'Agents Fundamentals',
    issuer: 'Hugging Face',
    subtitle: 'Autonomous AI Agents',
    tag: 'AI Certification',
    logo: hfLogo,
    alt: 'Hugging Face',
  },
  {
    id: 'ml-fdp',
    title: 'Joint Faculty Development Programme on Classical ML',
    issuer: 'Electronics & ICT Academy, IIT Guwahati',
    subtitle: 'Supported by MeitY, Govt. of India',
    tag: 'May 2026',
    logo: iitgLogo,
    alt: 'IIT Guwahati',
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
            Professional certifications and accredited programmes in AI and Machine Learning.
          </p>
        </div>

        <div className="certs__grid fade-in">
          {certs.map((cert, index) => (
            <div
              key={cert.id}
              className="certs__card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="certs__card-top">
                <div className="certs__logo-badge">
                  <img src={cert.logo} alt={cert.alt} className="certs__logo-img" />
                </div>
                <span className="certs__tag">{cert.tag}</span>
              </div>

              <div className="certs__card-body">
                <h3 className="certs__title">{cert.title}</h3>
              </div>

              <div className="certs__card-footer">
                <p className="certs__issuer-name">{cert.issuer}</p>
                {cert.subtitle && <p className="certs__issuer-sub">{cert.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
