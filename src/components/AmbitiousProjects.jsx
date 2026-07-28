import './AmbitiousProjects.css'

const ambitiousProjects = [
  {
    id: 'artha',
    num: '01',
    title: 'Artha · Personal Wealth Aggregator',
    subtitle: 'अर्थ · Sanskrit for wealth, meaning, and purpose',
    description:
      'A personal wealth aggregation platform for Indian residents that consolidates stocks, mutual funds, NPS, EPF, Sukanya Samriddhi, insurance, gold, FDs, and bank holdings in one place. Read-only by design: no money movement, no advisory.',
    highlights: [
      'Unified net worth tracking across 10+ asset classes',
      'Account Aggregator sync (RBI AA) & CAS ingestion',
      'Document parsing for EPF, NPS, and insurance via PDF + OCR',
      'Capital gains computation with post-Budget 2024 tax rates',
      '5 languages — English, Hindi, Tamil, Telugu, Marathi',
    ],
    tags: ['Mobile-First Frontend', 'Document Parsing', 'OCR', 'RBI AA Integration', 'Tax & Compliance Engine'],
    github: 'https://github.com/gk2work/artha',
  },
  {
    id: 'nyayamitra',
    num: '02',
    title: 'NyayaMitra · AI Legal Assistant',
    subtitle: 'न्यायमित्र · Friend of Justice',
    description:
      'An AI legal assistant that provides accurate, citation-backed, multilingual legal guidance across Indian statutory law, judicial precedents, and procedural walkthroughs. Strictly informational, not legal advice.',
    highlights: [
      '7 legal domains — Criminal, Property, Family, Labor, Consumer, Constitutional, IP',
      'Citation-verified answers cross-referenced against legal database',
      'Hybrid retrieval: semantic (Qdrant) + keyword (Elasticsearch) + knowledge graph (Neo4j)',
      'Multilingual — English, Hindi, Tamil, Telugu, Bengali, Marathi',
      'Fine-tuned Llama 3.1 70B on Indian legal corpus with LoRA adapters',
    ],
    tags: ['Llama 3.1 70B (vLLM)', 'Qdrant', 'Elasticsearch', 'Neo4j', 'FastAPI', 'Next.js 14', 'PostgreSQL', 'Docker/K8s'],
    github: 'https://github.com/gk2work/nyayamitra',
  },
]

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

export default function AmbitiousProjects() {
  return (
    <section id="ambitious-projects" className="section ambitious-projects" style={{ background: 'var(--bg-secondary)' }} aria-label="Flagship projects">
      <div className="container">

        <div className="section-header fade-in">
          <span className="section-tag">Flagship Builds</span>
          <h2 className="section-title"><span className="accent">Ambitious</span> Projects</h2>
          <p className="section-subtitle">
            Large-scope builds that demonstrate depth, product thinking, and full-stack range.
          </p>
        </div>

        <div className="ambitious__list">
          {ambitiousProjects.map((project, index) => (
            <article
              key={project.id}
              className="ambitious__card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Number bar */}
              <div className="ambitious__bar">
                <span className="ambitious__num">{project.num}</span>
                <div className="ambitious__bar-line" aria-hidden="true"></div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ambitious__gh-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon />
                    Source Code ↗
                  </a>
                )}
              </div>

              {/* Title */}
              <div className="ambitious__head">
                <h3 className="ambitious__title">{project.title}</h3>
                <p className="ambitious__subtitle">{project.subtitle}</p>
              </div>

              {/* Body: desc + highlights left, stack right */}
              <div className="ambitious__body">
                <div className="ambitious__main">
                  <p className="ambitious__desc">{project.description}</p>

                  <ul className="ambitious__highlights" aria-label="Key highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="ambitious__highlight">
                        <span className="ambitious__check" aria-hidden="true">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="ambitious__stack-box">
                  <span className="ambitious__stack-label">Tech Stack</span>
                  <div className="ambitious__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="ambitious__chip">{tag}</span>
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
