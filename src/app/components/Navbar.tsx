'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-h)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: scrolled ? 'rgba(250,250,248,0.96)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--concrete)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <span
              style={{
                width: 36,
                height: 36,
                background: 'var(--charcoal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polygon points="10,2 18,18 2,18" fill="var(--accent)" />
              </svg>
            </span>
            <div style={{ lineHeight: 1.2 }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 15,
                  color: 'var(--charcoal)',
                  letterSpacing: '-0.01em',
                }}
              >
                Aadi Shakti
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  color: 'var(--gray-mid)',
                  textTransform: 'uppercase',
                }}
              >
                Nirman Sewa
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              listStyle: 'none',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    color:
                      activeSection === link.href.replace('#', '')
                        ? 'var(--accent-dark)'
                        : 'var(--gray-dark)',
                    padding: '6px 14px',
                    borderBottom:
                      activeSection === link.href.replace('#', '')
                        ? '2px solid var(--accent)'
                        : '2px solid transparent',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="desktop-nav btn btn-primary" style={{ fontSize: 13 }}>
            Get a Quote
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="hamburger"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: 'var(--charcoal)',
                  transition: 'transform 0.3s, opacity 0.3s',
                  transform:
                    menuOpen
                      ? i === 0
                        ? 'translateY(7px) rotate(45deg)'
                        : i === 2
                        ? 'translateY(-7px) rotate(-45deg)'
                        : 'none'
                      : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'var(--charcoal)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 clamp(24px, 8vw, 80px)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s var(--ease-out)',
        }}
      >
        <ul style={{ listStyle: 'none' }}>
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                transform: menuOpen ? 'none' : 'translateX(40px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s ${0.05 * i + 0.1}s var(--ease-out), opacity 0.4s ${0.05 * i + 0.1}s`,
              }}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 6vw, 48px)',
                  fontWeight: 700,
                  color: 'var(--white)',
                  padding: '20px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn btn-accent"
          style={{ marginTop: 40, alignSelf: 'flex-start' }}
        >
          Get a Quote →
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hamburger { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  )
}