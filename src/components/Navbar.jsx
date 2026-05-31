import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-mark">GK</span>
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__resume-btn"
            onClick={handleLinkClick}
          >
            Resume ↗
          </a>
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
