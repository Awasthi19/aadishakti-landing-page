"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { value: "18+", label: "Years of Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "40+", label: "Govt. Tenders Won" },
  { value: "100%", label: "On-Time Delivery" },
];

export default function Hero() {
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    requestAnimationFrame(() => {
      el.style.transition =
        "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "var(--white)",
      }}
    >
      {/* Background geometric construction grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(15,15,14,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,15,14,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          zIndex: 0,
        }}
      />

      {/* Large background text — blueprint style */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-2vw",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(80px, 16vw, 220px)",
          fontWeight: 500,
          color: "transparent",
          WebkitTextStroke: "1px rgba(15,15,14,0.06)",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          userSelect: "none",
          zIndex: 0,
          lineHeight: 1,
        }}
      >
        BUILD
      </div>

      {/* Yellow accent block — top right */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "clamp(120px, 22vw, 360px)",
          height: "clamp(120px, 22vw, 360px)",
          background: "var(--accent)",
          opacity: 0.12,
          zIndex: 0,
        }}
      />

      {/* Corner bracket — top left */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 100,
          left: "clamp(20px, 5vw, 60px)",
          width: 48,
          height: 48,
          borderTop: "2px solid var(--accent)",
          borderLeft: "2px solid var(--accent)",
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "calc(var(--nav-h) + clamp(60px, 10vh, 120px))",
          paddingBottom: "clamp(60px, 8vh, 100px)",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          {/* Eyebrow */}
          <div
            className="tag"
            style={{
              marginBottom: 28,
              opacity: 0,
              animation: "fadeUp 0.8s 0.2s var(--ease-out) forwards",
            }}
          >
            Est. 2006 · Kathmandu, Nepal
          </div>

          {/* Headline */}
          <h1
            ref={headRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 7.5vw, 108px)",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "var(--charcoal)",
              marginBottom: 32,
            }}
          >
            Building
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--accent)",
                fontWeight: 700,
              }}
            >
              Nepal&apos;s
            </em>
            <br />
            Future.
          </h1>

          {/* Subhead */}
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "var(--gray-mid)",
              maxWidth: 520,
              lineHeight: 1.75,
              marginBottom: 44,
              opacity: 0,
              animation: "fadeUp 0.8s 0.5s var(--ease-out) forwards",
            }}
          >
            Government-certified contractor specializing in roads, bridges,
            buildings, and critical infrastructure across Nepal. Precision
            engineering, delivered on time.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: 0,
              animation: "fadeUp 0.8s 0.65s var(--ease-out) forwards",
            }}
          >
            <a href="#projects" className="btn btn-primary">
              View Our Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Get a Quote
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          style={{
            marginTop: "clamp(60px, 10vh, 120px)",
            borderTop: "1px solid var(--concrete)",
            paddingTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "32px 48px",
            opacity: 0,
            animation: "fadeUp 0.8s 0.8s var(--ease-out) forwards",
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--charcoal)",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--gray-mid)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          right: "clamp(20px, 5vw, 60px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0,
          animation: "fadeUp 0.8s 1.1s var(--ease-out) forwards",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gray-mid)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </div>
        <div
          style={{
            width: 1,
            height: 48,
            background: "var(--gray-light)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "40%",
              background: "var(--accent)",
              animation: "scrollBar 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes scrollBar {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
