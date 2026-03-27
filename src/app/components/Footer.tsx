'use client';

const LINKS = {
  Company: ["About Us", "Our Team", "Certifications", "CSR"],
  Services: ["Road Construction", "Bridge Works", "Buildings", "Hydropower"],
  Connect: ["Projects", "Tenders", "Contact", "Careers"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--black)", color: "var(--white)" }}>
      {/* Main footer body */}
      <div className="container" style={{ paddingTop: 72, paddingBottom: 56 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "clamp(36px, 5vw, 64px)",
            marginBottom: 64,
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <polygon points="10,2 18,18 2,18" fill="var(--black)" />
                </svg>
              </span>
              <div style={{ lineHeight: 1.2 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--white)",
                  }}
                >
                  Aadi Shakti Nirman
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                  }}
                >
                  Sewa Pvt. Ltd.
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.4)",
                maxWidth: 240,
                marginBottom: 28,
              }}
            >
              Building Nepal&apos;s infrastructure with precision, integrity,
              and local expertise since 2006.
            </p>

            {/* Vertical marquee of certifications */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                lineHeight: 2,
              }}
            >
              GoN Registered · ISO 9001 · Class &apos;A&apos;
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 20,
                }}
              >
                {heading}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.55)",
                        transition: "color 0.2s",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLAnchorElement).style.color =
                          "var(--white)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.55)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            © {year} Aadi Shakti Nirman Sewa Pvt. Ltd. All rights reserved.
          </span>

          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.6)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.25)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant type */}
      <div
        aria-hidden
        style={{
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          paddingBottom: 0,
          lineHeight: 0.85,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 14vw, 200px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
            userSelect: "none",
            padding: "0 clamp(20px, 5vw, 60px)",
            whiteSpace: "nowrap",
          }}
        >
          Build Nepal
        </div>
      </div>
    </footer>
  );
}
