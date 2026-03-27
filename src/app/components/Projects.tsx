'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

type Category = 'All' | 'Roads' | 'Bridges' | 'Buildings' | 'Hydropower'

const PROJECTS = [
  {
    id: 1,
    title: 'Sindhuli–Bardibas Road Upgrading',
    category: 'Roads' as Category,
    location: 'Sindhuli, Bagmati Province',
    year: '2023',
    value: 'NPR 4.2Cr',
    status: 'Completed',
    desc: 'Upgrading 12.6 km of gravel road to bituminous standard including drainage and slope protection works.',
    color: '#1C3A2E',
  },
  {
    id: 2,
    title: 'Koshi Corridor Bridge, 80m Span',
    category: 'Bridges' as Category,
    location: 'Okhaldhunga District',
    year: '2022',
    value: 'NPR 6.8Cr',
    status: 'Completed',
    desc: 'Double-lane RCC T-girder bridge with approach roads, completed ahead of schedule during monsoon season.',
    color: '#1A2C3D',
  },
  {
    id: 3,
    title: 'District Hospital Complex, Dolakha',
    category: 'Buildings' as Category,
    location: 'Charikot, Dolakha',
    year: '2023',
    value: 'NPR 9.1Cr',
    status: 'Completed',
    desc: '3-storey RCC hospital building with outpatient, inpatient, and operation theatre facilities under MoHP tender.',
    color: '#2E1C1C',
  },
  {
    id: 4,
    title: 'Tamakoshi Micro Hydro Civil Works',
    category: 'Hydropower' as Category,
    location: 'Ramechhap District',
    year: '2024',
    value: 'NPR 3.5Cr',
    status: 'Ongoing',
    desc: 'Headworks, penstock trench, and powerhouse civil works for 500 kW run-of-river micro hydropower project.',
    color: '#1C2A3A',
  },
  {
    id: 5,
    title: 'Bhaktapur Ring Road Resurfacing',
    category: 'Roads' as Category,
    location: 'Bhaktapur Metropolitan City',
    year: '2024',
    value: 'NPR 2.8Cr',
    status: 'Ongoing',
    desc: 'Full-depth reclamation and asphalt overlay of 8 km urban ring road with curb and gutter rehabilitation.',
    color: '#2A1C2E',
  },
  {
    id: 6,
    title: 'Mechi Zone Footbridge Cluster',
    category: 'Bridges' as Category,
    location: 'Ilam & Panchthar',
    year: '2021',
    value: 'NPR 1.9Cr',
    status: 'Completed',
    desc: 'Three 60–80m steel suspension footbridges connecting remote villages to the road network in Mechi zone.',
    color: '#1C2A1C',
  },
]

const CATEGORIES: Category[] = ['All', 'Roads', 'Bridges', 'Buildings', 'Hydropower']

export default function Projects() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <section id="projects" style={{ background: 'var(--white)' }}>
      <div className="container section-pad">
        {/* Header */}
        <ScrollReveal>
          <div className="tag" style={{ marginBottom: 20 }}>
            Our Work
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 24,
              marginBottom: 'clamp(36px, 5vw, 56px)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(30px, 4vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                color: 'var(--charcoal)',
              }}
            >
              Featured
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Projects</em>
            </h2>

            {/* Filter tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '8px 18px',
                    border: '1.5px solid',
                    borderColor: active === cat ? 'var(--charcoal)' : 'var(--concrete)',
                    background: active === cat ? 'var(--charcoal)' : 'transparent',
                    color: active === cat ? 'var(--white)' : 'var(--gray-mid)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'clamp(16px, 2.5vw, 28px)',
          }}
        >
          {filtered.map((proj, i) => (
            <ScrollReveal key={proj.id} delay={i * 70}>
              <article
                style={{
                  border: '1px solid var(--concrete)',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--accent)'
                  el.style.boxShadow = 'var(--shadow-md)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--concrete)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Color block with metadata */}
                <div
                  style={{
                    background: proj.color,
                    padding: 'clamp(24px, 3vw, 36px)',
                    position: 'relative',
                    minHeight: 160,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  {/* Status badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      background:
                        proj.status === 'Completed'
                          ? 'rgba(212,160,23,0.2)'
                          : 'rgba(255,255,255,0.12)',
                      color:
                        proj.status === 'Completed' ? 'var(--accent-bright)' : 'rgba(255,255,255,0.7)',
                      border: `1px solid ${proj.status === 'Completed' ? 'rgba(212,160,23,0.3)' : 'rgba(255,255,255,0.15)'}`,
                    }}
                  >
                    {proj.status}
                  </span>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.45)',
                      marginBottom: 8,
                    }}
                  >
                    {proj.category} · {proj.year}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(18px, 2.5vw, 22px)',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.25,
                    }}
                  >
                    {proj.title}
                  </h3>
                </div>

                {/* Content */}
                <div style={{ padding: 'clamp(20px, 3vw, 32px)' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--gray-mid)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      📍 {proj.location}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        fontWeight: 500,
                        color: 'var(--accent-dark)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {proj.value}
                    </span>
                  </div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'var(--gray-mid)' }}>
                    {proj.desc}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div style={{ marginTop: 'clamp(40px, 5vw, 64px)', textAlign: 'center' }}>
            <p style={{ color: 'var(--gray-mid)', marginBottom: 20, fontSize: 15 }}>
              120+ projects delivered across 40+ districts of Nepal.
            </p>
            <a href="#contact" className="btn btn-outline">
              Discuss Your Project →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}