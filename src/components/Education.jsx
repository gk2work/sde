import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education" aria-label="Education and certifications">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title"><span className="accent">Education</span></h2>
          <p className="section-subtitle">
            My formal foundation in engineering.
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
              <p className="education__cgpa">CGPA: <strong>7.70 / 10.0</strong></p>

              <div className="education__awards">
                <h4 className="education__awards-title">Awards &amp; Achievements</h4>
                <div className="education__award-item">
                  <span aria-hidden="true">🏆</span>
                  <span>National Level Workshop — Quadcopter Drone</span>
                </div>
                <div className="education__award-item">
                  <span aria-hidden="true">📜</span>
                  <span>VLSI Certification — National Institute of Electronics &amp; IT, Calicut</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
