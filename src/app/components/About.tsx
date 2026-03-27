'use client';

import ScrollReveal from "./ScrollReveal";

const PILLARS = [
  {
    num: "01",
    title: "Precision Engineering",
    desc: "Every project follows strict engineering standards — from soil analysis to structural integrity, we leave nothing to chance.",
  },
  {
    num: "02",
    title: "Integrity First",
    desc: "Transparent timelines, honest budgets, and zero compromises on material quality. Our reputation is built on trust.",
  },
  {
    num: "03",
    title: "Local Expertise",
    desc: "Deep knowledge of Nepal&apos;s terrain, climate, and regulatory frameworks allows us to deliver where others cannot.",
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--white)" }}>
      {/* Top band */}
      <div style={{ background: "var(--charcoal)", padding: "0" }}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px clamp(20px, 5vw, 60px)",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Registered · Dept. of Roads, GoN · ISO 9001
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            Aadi Shakti Nirman Sewa Pvt. Ltd.
          </span>
        </div>
      </div>

      <div className="container section-pad">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <ScrollReveal>
            <div className="tag" style={{ marginBottom: 24 }}>
              Who We Are
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--charcoal)",
              }}
            >
              A Legacy Built
              <br />
              in Concrete
              <br />&{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                Character.
              </em>
            </h2>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={150}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--gray-dark)",
                marginBottom: 24,
              }}
            >
              Founded in 2006, Aadi Shakti Nirman Sewa Pvt. Ltd. has grown from
              a regional contractor to one of Nepal&apos;s most trusted
              infrastructure builders. We operate with a government-registered
              class &apos;A&apos; license, participating in and winning tenders
              across road construction, bridge fabrication, hydropower civil
              works, and institutional buildings.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--gray-mid)",
              }}
            >
              Our team of qualified engineers and skilled technicians brings
              together local knowledge with international construction standards
              — ensuring every structure we build stands for generations.
            </p>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "clamp(48px, 6vw, 80px) 0",
            display: "grid",
            gridTemplateColumns: "var(--accent) 1fr",
          }}
        >
          <hr className="hr-bold" />
        </div>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
          }}
        >
          {PILLARS.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 120}>
              <div
                style={{
                  padding: "clamp(28px, 4vw, 40px)",
                  border: "1px solid var(--concrete)",
                  position: "relative",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--accent)";
                  el.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--concrete)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "var(--accent-dark)",
                    marginBottom: 20,
                  }}
                >
                  {p.num}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    marginBottom: 12,
                    color: "var(--charcoal)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: "var(--gray-mid)",
                  }}
                >
                  {p.desc}
                </p>
                {/* Bottom accent bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "var(--accent)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.35s var(--ease-out)",
                  }}
                  className="pillar-bar"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        div:hover > .pillar-bar { transform: scaleX(1) !important; }
      `}</style>
    </section>
  );
}
