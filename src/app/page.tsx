"use client";

import { useState, useEffect } from "react";
import content from "../../content/site.json";

const SVC_DELAYS = ["", "d1", "d2", "d1", "d2", "d3"];
const CERT_DELAYS = ["", "d1", "d2", "d1", "d2", "d3"];

function ProjectIllustration({ svgKey }: { svgKey: string }) {
  switch (svgKey) {
    case "mountain_road":
      return (
        <svg className="proj-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="225" fill="#1a3d2b" />
          <rect y="140" width="400" height="85" fill="#162f20" opacity=".6" />
          <polygon points="120,225 280,225 240,140 160,140" fill="#2a4a35" opacity=".8" />
          <polygon points="155,225 245,225 225,160 175,160" fill="#1e3d2a" opacity=".5" />
          <line x1="200" y1="225" x2="200" y2="165" stroke="#c8a84a" strokeWidth="2" strokeDasharray="8,6" opacity=".5" />
          <polygon points="0,140 80,40 160,140" fill="#245033" opacity=".5" />
          <polygon points="80,140 180,20 280,140" fill="#1e4029" opacity=".6" />
          <polygon points="200,140 310,50 400,140" fill="#245033" opacity=".5" />
          <polygon points="180,20 200,50 160,50" fill="rgba(255,255,255,0.15)" />
          <polygon points="80,40 100,65 60,65" fill="rgba(255,255,255,0.1)" />
          <g opacity=".06" stroke="white" strokeWidth=".5">
            <line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="100" x2="400" y2="100" />
            <line x1="100" y1="0" x2="100" y2="225" /><line x1="200" y1="0" x2="200" y2="225" /><line x1="300" y1="0" x2="300" y2="225" />
          </g>
        </svg>
      );
    case "arch_bridge":
      return (
        <svg className="proj-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="225" fill="#162e2f" />
          <rect y="155" width="400" height="70" fill="#1e4a50" opacity=".7" />
          <path d="M0 170 Q100 160 200 175 Q300 190 400 170 L400 225 L0 225Z" fill="#1a3f45" opacity=".5" />
          <rect x="40" y="105" width="320" height="12" rx="2" fill="#2d6e70" opacity=".9" />
          <rect x="130" y="117" width="16" height="60" fill="#245a5c" opacity=".8" />
          <rect x="254" y="117" width="16" height="60" fill="#245a5c" opacity=".8" />
          <path d="M50 105 Q200 40 350 105" stroke="#3d8e90" strokeWidth="3" fill="none" opacity=".8" />
          <line x1="200" y1="45" x2="130" y2="105" stroke="#4aacae" strokeWidth="1.5" opacity=".6" />
          <line x1="200" y1="45" x2="160" y2="105" stroke="#4aacae" strokeWidth="1" opacity=".5" />
          <line x1="200" y1="45" x2="190" y2="105" stroke="#4aacae" strokeWidth="1" opacity=".5" />
          <line x1="200" y1="45" x2="210" y2="105" stroke="#4aacae" strokeWidth="1" opacity=".5" />
          <line x1="200" y1="45" x2="240" y2="105" stroke="#4aacae" strokeWidth="1" opacity=".5" />
          <line x1="200" y1="45" x2="270" y2="105" stroke="#4aacae" strokeWidth="1.5" opacity=".6" />
          <polygon points="0,105 60,30 130,105" fill="#1a4040" opacity=".4" />
          <polygon points="270,105 340,25 400,105" fill="#1a4040" opacity=".4" />
        </svg>
      );
    case "hospital":
      return (
        <svg className="proj-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="225" fill="#2a1e3d" />
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1230" />
              <stop offset="100%" stopColor="#2a1e3d" />
            </linearGradient>
          </defs>
          <rect width="400" height="140" fill="url(#sky)" />
          <rect y="185" width="400" height="40" fill="#1e1530" opacity=".6" />
          <rect x="80" y="50" width="240" height="175" fill="#3d2d5a" opacity=".8" />
          <g fill="#7a60a8" opacity=".5">
            <rect x="100" y="65" width="25" height="18" rx="2" /><rect x="140" y="65" width="25" height="18" rx="2" />
            <rect x="180" y="65" width="25" height="18" rx="2" /><rect x="220" y="65" width="25" height="18" rx="2" />
            <rect x="260" y="65" width="25" height="18" rx="2" /><rect x="100" y="98" width="25" height="18" rx="2" />
            <rect x="140" y="98" width="25" height="18" rx="2" /><rect x="180" y="98" width="25" height="18" rx="2" />
            <rect x="220" y="98" width="25" height="18" rx="2" /><rect x="260" y="98" width="25" height="18" rx="2" />
            <rect x="100" y="131" width="25" height="18" rx="2" /><rect x="140" y="131" width="25" height="18" rx="2" />
            <rect x="220" y="131" width="25" height="18" rx="2" /><rect x="260" y="131" width="25" height="18" rx="2" />
          </g>
          <rect x="170" y="162" width="60" height="63" rx="2" fill="#2a1e3d" opacity=".9" />
          <rect x="192" y="100" width="16" height="46" fill="#a0c0e0" opacity=".6" rx="2" />
          <rect x="180" y="112" width="40" height="16" fill="#a0c0e0" opacity=".6" rx="2" />
          <rect x="85" y="50" width="8" height="175" fill="#4a3870" opacity=".5" />
          <rect x="307" y="50" width="8" height="175" fill="#4a3870" opacity=".5" />
        </svg>
      );
    case "hydro_dam":
      return (
        <svg className="proj-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="225" fill="#1a2d3d" />
          <polygon points="0,140 90,30 180,140" fill="#1e3f55" opacity=".7" />
          <polygon points="100,140 220,15 340,140" fill="#163040" opacity=".8" />
          <polygon points="250,140 360,45 400,140" fill="#1e3f55" opacity=".7" />
          <polygon points="220,15 240,50 200,50" fill="rgba(255,255,255,0.2)" />
          <path d="M0 165 Q50 155 100 168 Q150 178 200 162 Q250 148 300 165 Q350 178 400 162 L400 225 L0 225Z" fill="#1a4a6e" opacity=".6" />
          <rect x="155" y="115" width="90" height="60" fill="#245070" opacity=".85" />
          <rect x="185" y="100" width="12" height="80" fill="#2d6080" opacity=".9" rx="3" />
          <rect x="100" y="145" width="55" height="42" fill="#1e4060" opacity=".8" />
          <rect x="108" y="155" width="12" height="12" rx="1" fill="#3a80a0" opacity=".7" />
          <rect x="128" y="155" width="12" height="12" rx="1" fill="#3a80a0" opacity=".7" />
          <path d="M0 180 Q100 168 200 182 Q300 196 400 180" stroke="#4a9ab5" strokeWidth="1" fill="none" opacity=".4" />
          <g opacity=".05" stroke="white" strokeWidth=".5">
            <line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="100" x2="400" y2="100" />
          </g>
        </svg>
      );
    case "urban_road":
      return (
        <svg className="proj-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="225" fill="#1a3d2b" />
          <g fill="#1e4530" opacity=".5">
            <rect x="10" y="70" width="35" height="155" /><rect x="55" y="90" width="28" height="135" />
            <rect x="95" y="55" width="40" height="170" /><rect x="280" y="80" width="30" height="145" />
            <rect x="320" y="65" width="42" height="160" /><rect x="365" y="90" width="28" height="135" />
          </g>
          <rect x="140" y="0" width="120" height="225" fill="#1a3020" opacity=".7" />
          <line x1="200" y1="0" x2="200" y2="225" stroke="#b8a030" strokeWidth="2" strokeDasharray="16,12" opacity=".5" />
          <line x1="165" y1="0" x2="165" y2="225" stroke="white" strokeWidth="1" opacity=".15" />
          <line x1="235" y1="0" x2="235" y2="225" stroke="white" strokeWidth="1" opacity=".15" />
          <g fill="white" opacity=".15">
            <rect x="142" y="90" width="14" height="45" /><rect x="162" y="90" width="14" height="45" />
            <rect x="182" y="90" width="14" height="45" /><rect x="202" y="90" width="14" height="45" />
            <rect x="222" y="90" width="14" height="45" /><rect x="242" y="90" width="14" height="45" />
          </g>
          <rect x="140" y="0" width="4" height="225" fill="#2a5040" opacity=".8" />
          <rect x="256" y="0" width="4" height="225" fill="#2a5040" opacity=".8" />
        </svg>
      );
    case "suspension_bridge":
      return (
        <svg className="proj-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="225" fill="#162e2f" />
          <polygon points="0,225 0,80 80,130 0,225" fill="#1a4035" opacity=".7" />
          <polygon points="400,225 400,80 320,130 400,225" fill="#1a4035" opacity=".7" />
          <path d="M60 190 Q200 175 340 190 L400 225 L0 225Z" fill="#1e4a50" opacity=".6" />
          <line x1="130" y1="30" x2="130" y2="170" stroke="#4a9ab5" strokeWidth="3" opacity=".8" />
          <line x1="270" y1="30" x2="270" y2="170" stroke="#4a9ab5" strokeWidth="3" opacity=".8" />
          <path d="M40 50 Q200 95 360 50" stroke="#5abace" strokeWidth="2.5" fill="none" opacity=".7" />
          <g stroke="#4a9ab5" strokeWidth="1" opacity=".5">
            <line x1="80" y1="58" x2="80" y2="165" /><line x1="105" y1="68" x2="105" y2="165" />
            <line x1="155" y1="73" x2="155" y2="165" /><line x1="180" y1="77" x2="180" y2="165" />
            <line x1="200" y1="78" x2="200" y2="165" /><line x1="220" y1="77" x2="220" y2="165" />
            <line x1="245" y1="73" x2="245" y2="165" /><line x1="295" y1="68" x2="295" y2="165" />
            <line x1="320" y1="58" x2="320" y2="165" />
          </g>
          <rect x="40" y="162" width="320" height="8" fill="#2d6e70" opacity=".9" />
          <line x1="118" y1="55" x2="142" y2="55" stroke="#4a9ab5" strokeWidth="2.5" opacity=".7" />
          <line x1="258" y1="55" x2="282" y2="55" stroke="#4a9ab5" strokeWidth="2.5" opacity=".7" />
        </svg>
      );
    default:
      return null;
  }
}

const serviceIcons = [
  <svg key="s0" viewBox="0 0 24 24"><rect x="2" y="14" width="20" height="8" rx="1" /><rect x="5" y="8" width="14" height="6" /><rect x="8" y="3" width="8" height="5" /></svg>,
  <svg key="s1" viewBox="0 0 24 24"><path d="M2 18 Q5 13 8 16 Q11 19 12 14 Q13 9 16 13 Q19 17 22 15" /><line x1="2" y1="21" x2="22" y2="21" /><line x1="5" y1="18" x2="5" y2="21" /><line x1="19" y1="18" x2="19" y2="21" /></svg>,
  <svg key="s2" viewBox="0 0 24 24"><path d="M2 20 L6 10 L10 15 L14 8 L18 13 L22 6" /><line x1="2" y1="22" x2="22" y2="22" /></svg>,
  <svg key="s3" viewBox="0 0 24 24"><path d="M5 4 L5 20" /><path d="M5 8 Q9 5 11 10 Q13 15 17 12 L20 10" /><circle cx="20" cy="20" r="3" /><line x1="17" y1="20" x2="14" y2="20" /><line x1="5" y1="20" x2="14" y2="20" /></svg>,
  <svg key="s4" viewBox="0 0 24 24"><path d="M3 21 L3 10 L9 4 L9 21" /><path d="M9 14 L15 9 L15 21" /><path d="M15 17 L21 12 L21 21" /><line x1="1" y1="21" x2="23" y2="21" /></svg>,
  <svg key="s5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="2" y1="9" x2="22" y2="9" /><line x1="9" y1="9" x2="9" y2="20" /></svg>,
];

export default function Home() {
  const [navStuck, setNavStuck] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavStuck(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const ro = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); }
        }),
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));
    requestAnimationFrame(() =>
      document.querySelectorAll("#hero .reveal").forEach((el) => el.classList.add("in"))
    );

    return () => { window.removeEventListener("scroll", handleScroll); ro.disconnect(); };
  }, []);

  const ss = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    setDrawerOpen(false);
  };

  const filterLabels: Record<string, string> = {
    all: "All", roads: "Roads", bridges: "Bridges", buildings: "Buildings", hydropower: "Hydropower",
  };

  return (
    <>
      {/* NAV */}
      <nav id="nav" className={navStuck ? "stuck" : ""}>
        <a href="#" className="nav-logo" onClick={(e) => ss(e, "#hero")}>
          <div className="nav-logo-primary">Aadi Shakti Nirman Sewa</div>
          <div className="nav-logo-sub">Pvt. Ltd. · Est. 2006</div>
        </a>
        <div className="nav-center">
          <a href="#about" onClick={(e) => ss(e, "#about")}>About</a>
          <a href="#services" onClick={(e) => ss(e, "#services")}>Services</a>
          <a href="#projects" onClick={(e) => ss(e, "#projects")}>Projects</a>
          <a href="#certs" onClick={(e) => ss(e, "#certs")}>Certifications</a>
          <a href="#contact" onClick={(e) => ss(e, "#contact")}>Contact</a>
        </div>
        <div className="nav-right">
          <a href="#projects" className="nav-btn-ghost" onClick={(e) => ss(e, "#projects")}>Our Work</a>
          <a href="#contact" className="nav-btn-solid" onClick={(e) => ss(e, "#contact")}>Get a Quote →</a>
        </div>
        <button
          className={`nav-burger${drawerOpen ? " open" : ""}`}
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`nav-drawer${drawerOpen ? " open" : ""}`}>
        <a href="#about" onClick={(e) => ss(e, "#about")}>About</a>
        <a href="#services" onClick={(e) => ss(e, "#services")}>Services</a>
        <a href="#projects" onClick={(e) => ss(e, "#projects")}>Projects</a>
        <a href="#certs" onClick={(e) => ss(e, "#certs")}>Certifications</a>
        <a href="#contact" onClick={(e) => ss(e, "#contact")}>Contact</a>
        <a href="#contact" className="nav-btn-solid" onClick={(e) => ss(e, "#contact")}>Get a Quote →</a>
      </div>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-eyebrow reveal">{content.hero.eyebrow}</div>
          <h1 className="hero-h1 reveal d1">
            {content.hero.heading[0]}<br />
            <em>{content.hero.heading[1]}</em><br />
            {content.hero.heading[2]}
          </h1>
          <p className="hero-para reveal d2">{content.hero.paragraph}</p>
          <div className="hero-ctas reveal d3">
            <a href="#projects" className="btn-white" onClick={(e) => ss(e, "#projects")}>View Our Projects →</a>
            <a href="#contact" className="btn-outline-white" onClick={(e) => ss(e, "#contact")}>Get a Quote</a>
          </div>
          <div className="hero-stats reveal d4">
            {content.hero.stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <div className="stat-n">{stat.number}</div>
                <div className="stat-l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-strip">
          {content.hero.strip.map((item, i) => (
            <div key={i} className="hero-strip-item">
              <span className="hero-strip-dot" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="sec">
        <div className="wrap">
          <div className="about-layout">
            <div className="about-image-area reveal">
              <div className="about-img-frame" />
              <div className="about-img-badge">
                <div className="about-img-badge-n">{content.about.badge_number}</div>
                <div className="about-img-badge-l">{content.about.badge_label}</div>
              </div>
            </div>
            <div>
              <div className="eyebrow reveal">Who We Are</div>
              <h2 className="sec-title reveal d1">A Legacy Built<br />in <em>Concrete</em><br />&amp; Character.</h2>
              <div className="about-text">
                <p className="reveal d2">{content.about.paragraph1}</p>
                <p className="reveal d3">{content.about.paragraph2}</p>
              </div>
              <div className="about-pillars reveal d3">
                {content.about.pillars.map((pillar, i) => (
                  <div key={i} className="pillar">
                    <div className="pillar-num">{pillar.number}</div>
                    <div>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="sec">
        <div className="wrap">
          <div className="services-head">
            <div>
              <div className="eyebrow reveal">What We Do</div>
              <h2 className="sec-title reveal d1">Our Core<br /><em>Services</em></h2>
            </div>
            <p className="services-desc reveal d2">
              Government-registered across all categories. Every service is backed by qualified engineers, certified equipment, and a rigorous QA/QC process.
            </p>
          </div>
          <div className="svc-grid">
            {content.services.map((service, i) => (
              <div key={i} className={`svc-card reveal${SVC_DELAYS[i] ? ` ${SVC_DELAYS[i]}` : ""}`}>
                <div className="svc-icon">{serviceIcons[i]}</div>
                <div className="svc-name">{service.name}</div>
                <div className="svc-desc">{service.description}</div>
                <div className="svc-tags">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="svc-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="sec">
        <div className="wrap">
          <div className="projects-head">
            <div>
              <div className="eyebrow reveal">Our Work</div>
              <h2 className="sec-title reveal d1">Featured<br /><em>Projects</em></h2>
            </div>
            <div className="filter-bar reveal d2">
              {Object.entries(filterLabels).map(([f, label]) => (
                <button
                  key={f}
                  className={`fbtn${activeFilter === f ? " on" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="proj-grid">
            {content.projects.map((project, i) => (
              <div
                key={i}
                className={`proj-card reveal${project.delay ? ` ${project.delay}` : ""}${
                  activeFilter !== "all" && activeFilter !== project.category ? " hidden" : ""
                }`}
              >
                <div className="proj-img">
                  <div className={`proj-img-inner ${project.imgClass}`}>
                    <ProjectIllustration svgKey={project.svgKey} />
                  </div>
                  <span className={`proj-badge ${project.status}`}>{project.statusLabel}</span>
                  <span className="proj-img-label">{project.sectionLabel} · {project.year}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-cat">{project.displayCategory}</div>
                  <div className="proj-title">{project.title}</div>
                  <div className="proj-loc">📍 {project.location}</div>
                  <div className="proj-desc">{project.description}</div>
                  <div className="proj-footer">
                    <div>
                      <div className="proj-val">{project.value}</div>
                      <div className="proj-val-l">Contract Value</div>
                    </div>
                    <div className="proj-arrow">→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="proj-cta reveal">
            <p>120+ projects delivered across 40+ districts of Nepal.</p>
            <a href="#contact" className="btn-green" onClick={(e) => ss(e, "#contact")}>Discuss Your Project →</a>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="sec">
        <div className="wrap">
          <div className="cert-intro">
            <div>
              <div className="eyebrow reveal">Credentials</div>
              <h2 className="sec-title reveal d1">Certified. Trusted.<br /><em>Government-Approved.</em></h2>
            </div>
            <p className="cert-intro-desc reveal d2">
              Every registration, license, and certification we hold is current and verifiable. We operate with full transparency across all government and regulatory frameworks in Nepal.
            </p>
          </div>
          <div className="cert-grid">
            {content.certifications.map((cert, i) => (
              <div key={i} className={`cert-card reveal${CERT_DELAYS[i] ? ` ${CERT_DELAYS[i]}` : ""}`}>
                <div className="cert-badge">{cert.badge}</div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-org">{cert.org}</div>
                <div className="cert-since">{cert.since}</div>
              </div>
            ))}
          </div>
          <div className="reveal">
            <div className="clients-section-title">Government Bodies &amp; Clients We Work With</div>
            <div className="client-chips">
              {content.clients.map((client, i) => (
                <span key={i} className="client-chip">{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sec">
        <div className="wrap">
          <div className="contact-layout">
            <div>
              <div className="eyebrow reveal">Get In Touch</div>
              <h2 className="sec-title reveal d1">Let&apos;s Build<br /><em>Together.</em></h2>
              <p
                className="reveal d2"
                style={{ fontSize: "15px", color: "var(--gray-600)", lineHeight: "1.8", maxWidth: "400px", marginTop: "16px" }}
              >
                Whether you have a government tender to discuss, a project to bid on, or simply want to understand our capabilities — our team responds within one business day.
              </p>
              <div className="contact-info-list reveal d3">
                <div className="cinfo">
                  <div className="cinfo-icon">📍</div>
                  <div>
                    <div className="cinfo-label">Office Address</div>
                    <div className="cinfo-val">{content.contact.address}</div>
                  </div>
                </div>
                <div className="cinfo">
                  <div className="cinfo-icon">📞</div>
                  <div>
                    <div className="cinfo-label">Phone</div>
                    <div className="cinfo-val">{content.contact.phone}</div>
                  </div>
                </div>
                <div className="cinfo">
                  <div className="cinfo-icon">✉️</div>
                  <div>
                    <div className="cinfo-label">Email</div>
                    <div className="cinfo-val">
                      <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
                    </div>
                  </div>
                </div>
                <div className="cinfo">
                  <div className="cinfo-icon">🕐</div>
                  <div>
                    <div className="cinfo-label">Office Hours</div>
                    <div className="cinfo-val">{content.contact.hours}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal d2">
              <div className="contact-form-card">
                {!formSubmitted ? (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                    <div className="form-row2">
                      <div className="fg">
                        <label>Full Name <span className="req">*</span></label>
                        <input type="text" placeholder="Ram Sharma" required />
                      </div>
                      <div className="fg">
                        <label>Organization</label>
                        <input type="text" placeholder="Ministry / Dept. / Firm" />
                      </div>
                    </div>
                    <div className="fg">
                      <label>Email <span className="req">*</span></label>
                      <input type="email" placeholder="you@email.com" required />
                    </div>
                    <div className="fg">
                      <label>Project Type</label>
                      <select defaultValue="">
                        <option value="" disabled>Select type…</option>
                        <option>Road Construction</option>
                        <option>Bridge Works</option>
                        <option>Building Construction</option>
                        <option>Hydropower Civil Works</option>
                        <option>Retaining Walls &amp; Drainage</option>
                        <option>Project Management</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="fg">
                      <label>Message <span className="req">*</span></label>
                      <textarea placeholder="Describe your project, tender reference, or inquiry…" required />
                    </div>
                    <button type="submit" className="form-btn">Send Enquiry →</button>
                  </form>
                ) : (
                  <div className="form-success show">
                    <div className="form-success-icon">
                      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3>Enquiry Sent</h3>
                    <p>Thank you. Our team will respond within one business day.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-n">Aadi Shakti Nirman Sewa</div>
              <div className="footer-brand-s">Pvt. Ltd. · Kathmandu, Nepal</div>
              <p className="footer-brand-p">{content.footer.description}</p>
              <div className="footer-badges">
                {content.footer.badges.map((b, i) => (
                  <span key={i} className="footer-badge">{b}</span>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#about" onClick={(e) => ss(e, "#about")}>About Us</a></li>
                <li><a href="#certs" onClick={(e) => ss(e, "#certs")}>Certifications</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">CSR</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="#services" onClick={(e) => ss(e, "#services")}>Road Construction</a></li>
                <li><a href="#services" onClick={(e) => ss(e, "#services")}>Bridge Works</a></li>
                <li><a href="#services" onClick={(e) => ss(e, "#services")}>Buildings</a></li>
                <li><a href="#services" onClick={(e) => ss(e, "#services")}>Hydropower</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <ul>
                <li><a href="#projects" onClick={(e) => ss(e, "#projects")}>Projects</a></li>
                <li><a href="#">Tenders</a></li>
                <li><a href="#contact" onClick={(e) => ss(e, "#contact")}>Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bar">
            <div className="footer-copy">{content.footer.copyright}</div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
