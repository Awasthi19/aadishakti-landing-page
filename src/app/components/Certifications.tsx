'use client';

import ScrollReveal from './ScrollReveal'

const CERTS = [
  {
    code: 'GoN/DoR',
    title: 'Dept. of Roads',
    sub: 'Class "A" Registered Contractor',
    body: 'Government of Nepal',
    year: '2006',
  },
  {
    code: 'ISO',
    title: 'ISO 9001:2015',
    sub: 'Quality Management System',
    body: 'Certified',
    year: '2018',
  },
  {
    code: 'OCR',
    title: 'Office of Controller',
    sub: 'Revenue Registration',
    body: 'Inland Revenue Dept.',
    year: '2006',
  },
  {
    code: 'PAN',
    title: 'Tax Registration',
    sub: 'Permanent Account Number',
    body: 'IRD Nepal',
    year: '2006',
  },
  {
    code: 'FNCCI',
    title: 'FNCCI Member',
    sub: 'Federation of Commerce',
    body: 'Nepal Chamber',
    year: '2010',
  },
  {
    code: 'ORC',
    title: 'Company Register',
    sub: 'Private Ltd. Registration',
    body: 'Dept. of Commerce',
    year: '2006',
  },
]

const CLIENTS = [
  'Dept. of Roads, GoN',
  'Dept. of Urban Development',
  'Ministry of Health & Population',
  'Ministry of Education',
  'NEA – Nepal Electricity Authority',
  'AEPC – Alternative Energy',
  'Local Level Govts.',
  'Donor-funded INGO Projects',
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: 'var(--charcoal)' }}>
      <div className="container section-pad">
        {/* Header */}
        <ScrollReveal>
          <div
            className="tag"
            style={{ marginBottom: 20, color: 'var(--accent)', filter: 'brightness(1.2)' }}
          >
            <span style={{ background: 'var(--accent)' }} />
            Credentials
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'var(--white)',
              marginBottom: 'clamp(40px, 5vw, 64px)',
            }}
          >
            Certified.{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Trusted.</em>
            <br />
            Government-Approved.
          </h2>
        </ScrollReveal>

        {/* Certs grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 2,
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          {CERTS.map((cert, i) => (
            <ScrollReveal key={cert.code} delay={i * 70}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: 'clamp(24px, 3vw, 32px)',
                  transition: 'background 0.25s, border-color 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = 'rgba(212,160,23,0.08)'
                  el.style.borderColor = 'rgba(212,160,23,0.3)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = 'rgba(255,255,255,0.04)'
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: 14,
                  }}
                >
                  {cert.code}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                  {cert.sub}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.25)',
                    marginTop: 14,
                    letterSpacing: '0.05em',
                  }}
                >
                  Since {cert.year}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Clients */}
        <ScrollReveal>
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: 'clamp(36px, 5vw, 56px)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: 28,
              }}
            >
              Works with / Government Bodies & Clients
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px 24px',
              }}
            >
              {CLIENTS.map(client => (
                <div
                  key={client}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  />
                  {client}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}