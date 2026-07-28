import "./Hero.css";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "Tech Stacks" },
  { value: "3", label: "Certifications" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero section">
      <div className="hero__grid" aria-hidden="true"></div>

      <div className="container hero__content">
        <div className="hero__badge fade-in">
          <span className="hero__badge-dot" aria-hidden="true"></span>
          Open to new opportunities
        </div>

        <h1 className="hero__name fade-in">
          Gautam <span className="hero__name-accent">Kumar</span>
        </h1>

        <div className="hero__role-strip fade-in">
          <span>Full Stack Developer</span>
          <span className="hero__role-dot" aria-hidden="true">
            ·
          </span>
          <span>Software Engineer (SDE-1)</span>
          <span className="hero__role-dot" aria-hidden="true">
            ·
          </span>
          <span>AI Platform Builder</span>
        </div>

        <p className="hero__bio fade-in">
          Full Stack Developer building scalable web applications, RESTful APIs,
          and LLM-powered features. Skilled across React, Angular, Node.js, Python, and MongoDB.
        </p>

        <div className="hero__meta fade-in">
          <span className="hero__meta-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="13"
              height="13"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Bengaluru, India
          </span>
          <span className="hero__meta-sep" aria-hidden="true">
            ·
          </span>
          <span className="hero__meta-item">Full Stack Dev @ ViaCerta</span>
        </div>

        <div className="hero__actions fade-in">
          <a href="#projects" className="hero__cta-main">
            View My Work
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/GautamKumar_FullStackDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta-secondary"
          >
            Resume ↗
          </a>
        </div>

        <div className="hero__socials fade-in">
          <a
            href="https://github.com/gk2work"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="mailto:gautam.aec18@gmail.com"
            className="hero__social-link"
            aria-label="Email"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        <div className="hero__stats fade-in">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
