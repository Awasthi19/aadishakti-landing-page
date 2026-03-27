'use client';

import ScrollReveal from './ScrollReveal'

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24h20M8 24V12l6-8 6 8v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="11" y="17" width="6" height="7" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'Building Construction',
    desc: 'Government offices, schools, hospitals, and institutional structures. We deliver compliant, durable buildings designed for Nepal\'s demanding conditions.',
    scope: ['Structural Works', 'Foundation Engineering', 'Finishing & MEP'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M2 20h24M6 20v-8l3-4M22 20v-8l-3-4M9 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 20v-5h6v5" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'Bridge & Culvert Works',
    desc: 'From single-lane footbridges to multi-span motorable bridges — designed for seismic zones and monsoon conditions across Nepal\'s varied terrain.',
    scope: ['RCC Bridges', 'Steel Truss', 'Box Culverts'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M2 18c3-6 8-10 12-10s9 4 12 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M4 22h20M8 22l2-4M16 22l2-4M12 22l2-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Road Construction',
    desc: 'Earthwork, sub-base, base course, and bituminous surfacing for district roads, urban roads, and strategic highways under GoN tender.',
    scope: ['Gravel Roads', 'Blacktopping', 'Earthworks'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24V10l10-8 10 8v14H4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 24v-8h8v8" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M13 12h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Hydropower Civil Works',
    desc: 'Headworks, penstock trenching, powerhouse construction, and access roads for micro and small hydropower projects across Nepal\'s river systems.',
    scope: ['Headworks', 'Penstock', 'Powerhouse'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="14" width="22" height="10" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 14V10a7 7 0 0114 0v4" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="14" cy="19" r="2" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'Retaining Walls & Drainage',
    desc: 'Slope stabilization, gabion walls, RCC retaining structures, and comprehensive storm drainage for landslide-prone zones.',
    scope: ['Gabion Walls', 'RCC Retaining', 'Storm Drainage'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 22L14 6l9 16H5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 14v5M14 12v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Project Management',
    desc: 'End-to-end project supervision, quality control, and contractor management for large government and donor-funded infrastructure projects.',
    scope: ['QA/QC', 'Site Supervision', 'Reporting'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--gray-faint)' }}>
      <div className="container section-pad">
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          <ScrollReveal>
            <div className="tag" style={{ marginBottom: 20 }}>
              What We Do
            </div>
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
              Our Core
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Services</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p
              style={{
                maxWidth: 360,
                fontSize: 15,
                lineHeight: 1.75,
                color: 'var(--gray-mid)',
              }}
            >
              Government-registered across all categories. Every service is backed by
              qualified engineers, certified equipment, and a rigorous QA/QC process.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 2,
          }}
        >
          {SERVICES.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 80}>
              <div
                style={{
                  background: 'var(--white)',
                  padding: 'clamp(28px, 3.5vw, 40px)',
                  position: 'relative',
                  cursor: 'default',
                  transition: 'transform 0.25s var(--ease-out), box-shadow 0.25s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = 'var(--shadow-md)'
                  el.style.zIndex = '2'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'none'
                  el.style.boxShadow = 'none'
                  el.style.zIndex = '1'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--gray-faint)',
                    color: 'var(--charcoal)',
                    marginBottom: 24,
                    transition: 'background 0.25s, color 0.25s',
                  }}
                >
                  {svc.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    color: 'var(--charcoal)',
                    marginBottom: 12,
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'var(--gray-mid)',
                    marginBottom: 20,
                  }}
                >
                  {svc.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {svc.scope.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10.5,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        background: 'var(--gray-faint)',
                        color: 'var(--gray-dark)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Accent corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 28px 28px 0',
                    borderColor: 'transparent var(--accent) transparent transparent',
                    opacity: 0.5,
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}