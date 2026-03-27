'use client';

'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const INFO = [
  {
    label: 'Office Address',
    value: 'Kathmandu Metropolitan City\nBagmati Province, Nepal',
    icon: '📍',
  },
  {
    label: 'Phone',
    value: '+977-01-XXXXXXX',
    icon: '📞',
  },
  {
    label: 'Email',
    value: 'info@aadishaktinirman.com.np',
    icon: '✉️',
  },
  {
    label: 'Office Hours',
    value: 'Sun – Fri: 9:00 AM – 5:00 PM',
    icon: '🕐',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--charcoal)',
    background: 'var(--white)',
    border: '1.5px solid var(--concrete)',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none',
  }

  return (
    <section id="contact" style={{ background: 'var(--gray-faint)' }}>
      <div className="container section-pad">
        {/* Header */}
        <ScrollReveal>
          <div className="tag" style={{ marginBottom: 20 }}>
            Get In Touch
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'var(--charcoal)',
              marginBottom: 'clamp(40px, 5vw, 64px)',
            }}
          >
            Lets Build
            <br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Together.</em>
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Contact info */}
          <ScrollReveal>
            <div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: 'var(--gray-mid)',
                  marginBottom: 36,
                }}
              >
                Whether you have a government tender to discuss, a project to bid on,
                or simply want to understand our capabilities — reach out and our team
                will respond within one business day.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {INFO.map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 18, marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 10,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--gray-light)',
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14.5,
                          color: 'var(--charcoal)',
                          whiteSpace: 'pre-line',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                style={{
                  marginTop: 40,
                  background: 'var(--concrete)',
                  height: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                      linear-gradient(rgba(15,15,14,0.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(15,15,14,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div style={{ position: 'relative', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>📍</div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      color: 'var(--gray-mid)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={150}>
            {submitted ? (
              <div
                style={{
                  background: 'var(--charcoal)',
                  padding: 'clamp(36px, 5vw, 56px)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 20 }}>✓</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 28,
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: 12,
                  }}
                >
                  Message Sent
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>
                  Our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--white)',
                  padding: 'clamp(28px, 4vw, 48px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 12,
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--gray-mid)',
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--charcoal)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--concrete)')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="org"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--gray-mid)',
                        display: 'block',
                        marginBottom: 6,
                      }}
                    >
                      Organization
                    </label>
                    <input
                      id="org"
                      name="org"
                      value={form.org}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--charcoal)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--concrete)')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--gray-mid)',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--charcoal)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--concrete)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--gray-mid)',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    Project Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237A7A76' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                      paddingRight: 40,
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--charcoal)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--concrete)')}
                  >
                    <option value="">Select type…</option>
                    <option>Road Construction</option>
                    <option>Bridge / Culvert</option>
                    <option>Building Construction</option>
                    <option>Hydropower Civil Works</option>
                    <option>Retaining / Drainage</option>
                    <option>Other / Government Tender</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--gray-mid)',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => (e.target.style.borderColor = 'var(--charcoal)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--concrete)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', marginTop: 8, fontSize: 14 }}
                >
                  Send Enquiry
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}