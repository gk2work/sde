import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education" aria-label="Education and training">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Academic &amp; Professional Background</span>
          <h2 className="section-title">Education &amp; <span className="accent">Training</span></h2>
          <p className="section-subtitle">
            Formal engineering foundation and full-stack software development training.
          </p>
        </div>

        <div className="education__grid">
          {/* Degree */}
          <div className="card education__card fade-in">
            <div className="education__card-icon" aria-hidden="true">🎓</div>
            <div className="education__card-content">
              <div className="education__badge-row">
                <span className="education__label">Bachelor&apos;s Degree</span>
                <span className="education__year">2014 – 2018</span>
              </div>
              <h3 className="education__degree">B.Tech in Electronics &amp; Communication Engineering</h3>
              <p className="education__institution">Asansol Engineering College, Asansol, India</p>
              <p className="education__cgpa">CGPA: <strong>7.70 / 10</strong></p>
            </div>
          </div>

          {/* Professional Training */}
          <div className="card education__card fade-in">
            <div className="education__card-icon" aria-hidden="true">💻</div>
            <div className="education__card-content">
              <div className="education__badge-row">
                <span className="education__label">Professional Training</span>
                <span className="education__year">Jun 2023 – Feb 2024</span>
              </div>
              <h3 className="education__degree">Full Stack Web Development</h3>
              <p className="education__institution">Coding Ninjas</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Built production-style React frontends and Node.js/Express backends with MongoDB and SQL; implemented REST APIs, authentication flows, and Git/GitHub collaborative workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
