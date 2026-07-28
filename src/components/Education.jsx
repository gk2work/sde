import './Education.css'
import aecLogo from '../assets/aec-logo.png'
import cnLogo from '../assets/coding-ninjas-logo.jpg'

const educationData = [
  {
    id: 'degree',
    type: "Bachelor's Degree",
    year: '2014 – 2018',
    title: 'B.Tech in Electronics & Communication Engineering',
    institution: 'Asansol Engineering College',
    location: 'Asansol, India',
    description:
      'Formal engineering degree covering hardware fundamentals, communication systems, signal processing, and computer science basics.',
    logo: aecLogo,
    alt: 'Asansol Engineering College',
  },
  {
    id: 'training',
    type: 'Professional Training',
    year: 'Jun 2023 – Feb 2024',
    title: 'Full Stack Web Development',
    institution: 'Coding Ninjas',
    location: null,
    description:
      'Built production-style React frontends and Node.js/Express backends with MongoDB and SQL; implemented REST APIs, authentication flows, and Git/GitHub collaborative workflows.',
    logo: cnLogo,
    alt: 'Coding Ninjas',
  },
]

export default function Education() {
  return (
    <section id="education" className="section education" aria-label="Education and training">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Academic &amp; Professional</span>
          <h2 className="section-title">Education &amp; <span className="accent">Training</span></h2>
          <p className="section-subtitle">
            Formal engineering foundation and full-stack software development training.
          </p>
        </div>

        <div className="education__grid fade-in">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="education__card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="education__card-top">
                <div className="education__logo-badge">
                  <img src={item.logo} alt={item.alt} className="education__logo-img" />
                </div>
                <div className="education__meta">
                  <span className="education__type">{item.type}</span>
                  <span className="education__year">{item.year}</span>
                </div>
              </div>

              <div className="education__card-body">
                <h3 className="education__title">{item.title}</h3>
                <p className="education__institution">
                  {item.institution}
                  {item.location && <span className="education__location"> · {item.location}</span>}
                </p>
                <p className="education__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
