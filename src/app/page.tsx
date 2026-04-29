"use client";

import { useState, useEffect } from "react";
import content from "../../content/site.json";

const SVC_DELAYS = ["", "d1", "d2", "d1", "d2", "d3"];
const CERT_DELAYS = ["", "d1", "d2", "d1", "d2", "d3"];

function ProjectIllustration({ svgKey }: { svgKey: string }) {
  switch (svgKey) {
    case "mountain_road":
      return (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
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
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
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
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
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
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
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
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
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
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
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
  <svg key="s0" viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-green-600 fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="2" y="14" width="20" height="8" rx="1" /><rect x="5" y="8" width="14" height="6" /><rect x="8" y="3" width="8" height="5" /></svg>,
  <svg key="s1" viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-green-600 fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M2 18 Q5 13 8 16 Q11 19 12 14 Q13 9 16 13 Q19 17 22 15" /><line x1="2" y1="21" x2="22" y2="21" /><line x1="5" y1="18" x2="5" y2="21" /><line x1="19" y1="18" x2="19" y2="21" /></svg>,
  <svg key="s2" viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-green-600 fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M2 20 L6 10 L10 15 L14 8 L18 13 L22 6" /><line x1="2" y1="22" x2="22" y2="22" /></svg>,
  <svg key="s3" viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-green-600 fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M5 4 L5 20" /><path d="M5 8 Q9 5 11 10 Q13 15 17 12 L20 10" /><circle cx="20" cy="20" r="3" /><line x1="17" y1="20" x2="14" y2="20" /><line x1="5" y1="20" x2="14" y2="20" /></svg>,
  <svg key="s4" viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-green-600 fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M3 21 L3 10 L9 4 L9 21" /><path d="M9 14 L15 9 L15 21" /><path d="M15 17 L21 12 L21 21" /><line x1="1" y1="21" x2="23" y2="21" /></svg>,
  <svg key="s5" viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-green-600 fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="2" y1="9" x2="22" y2="9" /><line x1="9" y1="9" x2="9" y2="20" /></svg>,
];

// ── Shared class strings ──────────────────────────────────────────────────────

const btnGreen =
  "font-mono text-[12px] font-semibold tracking-[0.07em] uppercase px-7 py-[13px] bg-green-800 text-white rounded-[7px] inline-flex items-center gap-2 transition-all duration-200 hover:bg-green-700 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(27,58,39,0.2)]";

const eyebrow =
  "inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-green-600 mb-5 eyebrow-line";

const eyebrowDark =
  "inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-green-400 mb-5 eyebrow-line";

const secTitle =
  "font-serif text-[clamp(40px,5.5vw,72px)] font-medium leading-[1.05] tracking-[-0.01em] text-green-950";

const pageX = "w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20";
const sectionY = "py-20 sm:py-24 lg:py-28 xl:py-32";

// ─────────────────────────────────────────────────────────────────────────────

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
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
    setDrawerOpen(false);
  };

  const inputBase =
    "w-full bg-white border border-[1.5px] border-gray-200 rounded-[7px] px-[14px] py-[11px] font-sans text-[14px] text-green-900 outline-none transition-[border-color] duration-200 focus:border-green-500 focus:shadow-[0_0_0_3px_rgba(58,125,80,0.08)] placeholder:text-gray-400";

  const navLinks = content.navigation;
  const filterLabels = content.filters;
  const sectionCopy = content.section_copy;
  const contactForm = content.contact.form;

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      {/*
        Redesigned: White background always, dark green logo, gray nav links with
        green hover, ghost + solid CTA buttons. Scroll shadow instead of bg change.
      */}
      <nav
        id="nav"
        className={[
          "fixed top-0 left-0 right-0 z-[900] h-[68px] flex items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white transition-shadow duration-300",
          navStuck
            ? "shadow-[0_1px_0_#dde8df,0_4px_16px_rgba(0,0,0,0.05)]"
            : "border-b border-[#e8ede9]",
        ].join(" ")}
      >
        {/* Logo */}
        <a href="#" className="flex flex-col gap-[2px] shrink-0" onClick={(e) => ss(e, "#hero")}>
          <div className="font-serif text-[17px] font-semibold text-green-900 tracking-[-0.01em] leading-[1.15]">
            {content.company.name}
          </div>
          <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-green-500 leading-none">
            {content.company.nav_subtitle}
          </div>
        </a>

        {/* Center links */}
        <div className="hidden md:flex gap-1">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => ss(e, `#${id}`)}
              className="font-sans text-[13.5px] font-medium text-gray-500 px-3 py-2 rounded-[6px] transition-all duration-150 hover:text-green-800 hover:bg-green-50"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right CTA buttons */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="#projects"
            onClick={(e) => ss(e, "#projects")}
            className="font-mono text-[11.5px] font-semibold tracking-[0.06em] uppercase px-4 py-[8px] border border-[#c5dcc9] text-green-700 rounded-[6px] transition-all duration-150 hover:bg-green-50 hover:border-green-400"
          >
            {content.cta.work}
          </a>
          <a
            href="#contact"
            onClick={(e) => ss(e, "#contact")}
            className="font-mono text-[11.5px] font-semibold tracking-[0.06em] uppercase px-5 py-[9px] bg-green-800 text-white rounded-[6px] transition-all duration-150 hover:bg-green-700 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(26,92,53,0.25)]"
          >
            {content.cta.quote_arrow}
          </a>
        </div>

        {/* Burger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-[6px] ml-2"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={`block w-[22px] h-[1.5px] bg-green-900 rounded-sm transition-all duration-300${drawerOpen ? " rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-green-900 rounded-sm transition-all duration-300${drawerOpen ? " opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-green-900 rounded-sm transition-all duration-300${drawerOpen ? " -rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </nav>

      {/* ── MOBILE DRAWER ───────────────────────────────────────────────── */}
      <div
        className={[
          "fixed top-[68px] left-0 right-0 bg-white border-b border-gray-100 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-6 pt-4 flex-col gap-0 z-[899] shadow-[0_8px_24px_rgba(0,0,0,0.07)]",
          drawerOpen ? "flex" : "hidden",
        ].join(" ")}
      >
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => ss(e, `#${id}`)}
            className="text-[15px] font-medium text-gray-600 py-[12px] border-b border-gray-100 last:border-b-0 transition-colors duration-150 hover:text-green-800 hover:pl-1"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => ss(e, "#contact")}
          className="mt-4 text-center font-mono text-[11.5px] font-semibold tracking-[0.06em] uppercase px-5 py-[11px] bg-green-800 text-white rounded-[6px] hover:bg-green-700 transition-colors duration-150"
        >
          {content.cta.quote_arrow}
        </a>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      {/*
        Redesigned: White background. Two-column layout — left text, right illustration.
        Clean typography hierarchy. Green stats bar. Light green bottom strip.
        No dark background. All text reads perfectly on white.
      */}
      <section id="hero" className="bg-white pt-[68px] lg:min-h-[100svh] lg:flex lg:flex-col">
        {/* Main hero content */}
        <div className={`${pageX} lg:flex-1 lg:flex lg:items-center`}>
          <div className="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] gap-9 md:gap-12 xl:gap-16 2xl:gap-20 items-center py-10 sm:py-12 lg:py-8 xl:py-10">

            {/* Left — Text */}
            <div>
              {/* Eyebrow */}
              <div className="reveal inline-flex items-center gap-3 mb-4 lg:mb-5">
                <span className="block w-7 h-[2px] bg-green-500 rounded-full" />
                <span className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-green-600">
                  {content.hero.eyebrow}
                </span>
              </div>

              {/* Heading */}
              <h1 className="reveal d1 font-serif text-[42px] sm:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[78px] font-medium leading-[0.98] tracking-[-0.01em] text-[#111c16] mb-5">
                {content.hero.heading[0]}<br />
                <em className="italic text-green-600">{content.hero.heading[1]}</em><br />
                {content.hero.heading[2]}
              </h1>

              {/* Subtext */}
              <p className="reveal d2 text-[15px] sm:text-[16px] text-gray-500 max-w-[48rem] lg:max-w-[34rem] leading-[1.7] mb-7">
                {content.hero.paragraph}
              </p>

              {/* Buttons */}
              <div className="reveal d3 flex gap-3 flex-wrap mb-8 lg:mb-9">
                <a
                  href="#projects"
                  onClick={(e) => ss(e, "#projects")}
                  className="font-mono text-[12px] font-semibold tracking-[0.07em] uppercase px-7 py-[13px] bg-green-800 text-white rounded-[7px] inline-flex items-center gap-2 transition-all duration-200 hover:bg-green-700 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(26,92,53,0.22)]"
                >
                  {content.cta.view_projects}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => ss(e, "#contact")}
                  className="font-mono text-[12px] font-medium tracking-[0.07em] uppercase px-7 py-[13px] border border-[#c5dcc9] text-green-700 rounded-[7px] inline-flex items-center gap-2 transition-all duration-200 hover:bg-green-50 hover:border-green-500"
                >
                  {content.cta.quote}
                </a>
              </div>

              {/* Stats bar */}
              <div className="reveal d4 grid grid-cols-4 border border-[#dde8df] rounded-[10px] overflow-hidden">
                {content.hero.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="px-3 sm:px-4 xl:px-5 py-4 sm:py-[18px] border-r border-[#dde8df] last:border-r-0"
                  >
                    <div className="font-serif text-[clamp(22px,2.8vw,34px)] font-medium text-green-700 leading-none mb-1">
                      {stat.number}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Illustration */}
            <div className="reveal d2 hidden lg:flex items-center justify-end">
              <div className="w-auto max-w-full lg:h-[min(56svh,520px)] xl:h-[min(58svh,560px)] aspect-[1/1.05] rounded-[18px] overflow-hidden bg-[#f0f7f2] relative">
                <svg viewBox="0 0 480 504" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Terrain layers */}
                  <polygon points="0,504 480,504 480,280 380,180 280,260 180,140 80,240 0,200" fill="#d4eadb" opacity="0.5"/>
                  <polygon points="0,504 480,504 480,320 400,240 300,310 200,210 100,290 0,250" fill="#c2e0cc" opacity="0.6"/>
                  {/* Road ribbon */}
                  <path d="M20,504 Q100,420 180,370 Q260,320 300,280 Q340,240 420,160" stroke="#1a5c35" strokeWidth="18" strokeLinecap="round" opacity="0.12"/>
                  <path d="M20,504 Q100,420 180,370 Q260,320 300,280 Q340,240 420,160" stroke="#1a5c35" strokeWidth="5" strokeLinecap="round" strokeDasharray="14,12" opacity="0.45"/>
                  {/* Bridge */}
                  <rect x="150" y="250" width="200" height="6" rx="3" fill="#1a5c35" opacity="0.65"/>
                  <line x1="180" y1="256" x2="180" y2="310" stroke="#1a5c35" strokeWidth="4" strokeLinecap="round" opacity="0.55"/>
                  <line x1="320" y1="256" x2="320" y2="310" stroke="#1a5c35" strokeWidth="4" strokeLinecap="round" opacity="0.55"/>
                  <path d="M150 250 Q250 195 350 250" stroke="#2a8a52" strokeWidth="3" fill="none" opacity="0.6"/>
                  <line x1="190" y1="200" x2="190" y2="250" stroke="#2a8a52" strokeWidth="1.5" opacity="0.35"/>
                  <line x1="210" y1="197" x2="210" y2="250" stroke="#2a8a52" strokeWidth="1.5" opacity="0.35"/>
                  <line x1="230" y1="195" x2="230" y2="250" stroke="#2a8a52" strokeWidth="1.5" opacity="0.35"/>
                  <line x1="250" y1="194" x2="250" y2="250" stroke="#2a8a52" strokeWidth="1.5" opacity="0.35"/>
                  <line x1="270" y1="195" x2="270" y2="250" stroke="#2a8a52" strokeWidth="1.5" opacity="0.35"/>
                  <line x1="290" y1="197" x2="290" y2="250" stroke="#2a8a52" strokeWidth="1.5" opacity="0.35"/>
                  <line x1="310" y1="200" x2="310" y2="250" stroke="#2a8a52" strokeWidth="1.5" opacity="0.35"/>
                  {/* Building */}
                  <rect x="340" y="295" width="62" height="125" rx="3" fill="#1a5c35" opacity="0.1"/>
                  <rect x="350" y="305" width="12" height="10" rx="1" fill="#1a5c35" opacity="0.22"/>
                  <rect x="370" y="305" width="12" height="10" rx="1" fill="#1a5c35" opacity="0.22"/>
                  <rect x="350" y="325" width="12" height="10" rx="1" fill="#1a5c35" opacity="0.22"/>
                  <rect x="370" y="325" width="12" height="10" rx="1" fill="#1a5c35" opacity="0.22"/>
                  <rect x="350" y="345" width="12" height="10" rx="1" fill="#1a5c35" opacity="0.22"/>
                  <rect x="370" y="345" width="12" height="10" rx="1" fill="#1a5c35" opacity="0.22"/>
                  <rect x="356" y="375" width="28" height="45" rx="2" fill="#1a5c35" opacity="0.12"/>
                  {/* Cross */}
                  <rect x="365" y="288" width="5" height="16" rx="1" fill="#2a8a52" opacity="0.45"/>
                  <rect x="360" y="293" width="15" height="5" rx="1" fill="#2a8a52" opacity="0.45"/>
                  {/* Trees */}
                  <circle cx="60" cy="368" r="26" fill="#2a8a52" opacity="0.16"/>
                  <circle cx="80" cy="352" r="18" fill="#2a8a52" opacity="0.2"/>
                  <circle cx="420" cy="338" r="20" fill="#2a8a52" opacity="0.15"/>
                  {/* Mountains */}
                  <polygon points="40,310 120,160 200,310" fill="#1a5c35" opacity="0.09"/>
                  <polygon points="120,160 140,210 100,210" fill="#fff" opacity="0.5"/>
                  <polygon points="200,310 290,150 380,310" fill="#1a5c35" opacity="0.1"/>
                  <polygon points="290,150 315,205 265,205" fill="#fff" opacity="0.45"/>
                  {/* Grid lines */}
                  <line x1="0" y1="168" x2="480" y2="168" stroke="#1a5c35" strokeWidth="0.5" opacity="0.07"/>
                  <line x1="0" y1="336" x2="480" y2="336" stroke="#1a5c35" strokeWidth="0.5" opacity="0.07"/>
                  <line x1="160" y1="0" x2="160" y2="504" stroke="#1a5c35" strokeWidth="0.5" opacity="0.07"/>
                  <line x1="320" y1="0" x2="320" y2="504" stroke="#1a5c35" strokeWidth="0.5" opacity="0.07"/>
                  {/* Badge — est */}
                  <rect x="24" y="24" width="148" height="52" rx="10" fill="#fff" opacity="0.88"/>
                  <text x="40" y="47" fontFamily="monospace" fontSize="10" fill="#5a9a6e" fontWeight="600" letterSpacing="1">EST. 2006</text>
                  <text x="40" y="64" fontFamily="Georgia,serif" fontSize="14" fill="#1a3d2b" fontWeight="500">18+ years active</text>
                  {/* Badge — certified */}
                  <rect x="290" y="418" width="164" height="52" rx="10" fill="#1a5c35" opacity="0.9"/>
                  <text x="306" y="441" fontFamily="monospace" fontSize="10" fill="#7ad49a" fontWeight="600" letterSpacing="1">CERTIFIED</text>
                  <text x="306" y="458" fontFamily="Georgia,serif" fontSize="14" fill="#fff" fontWeight="500">Govt. Approved</text>
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom strip */}
        <div className="bg-[#f5faf6] border-t border-[#dde8df] px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-[14px] hidden sm:flex flex-wrap items-center gap-0 overflow-x-auto">
          {content.hero.strip.map((item, i) => (
            <div
              key={i}
              className="font-mono text-[10px] font-medium tracking-[0.12em] uppercase text-[#5a7a62] px-5 border-r border-[#dde8df] last:border-r-0 first:pl-0 flex items-center gap-[7px] whitespace-nowrap py-1"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-green-500 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────────── */}
      <section id="about" className="bg-white ">
        <div className={pageX}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 2xl:gap-24 items-center">
            {/* Image area */}
            <div className="reveal relative order-first">
              <div className="aspect-[4/5] md:aspect-[4/5] rounded-[12px] overflow-hidden bg-gradient-to-br from-green-800 to-green-950 relative about-img-frame-inner" />
              <div className="absolute bottom-6 left-6 bg-white rounded-[8px] px-5 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.12)] z-10">
                <div className="font-serif text-[36px] font-semibold text-green-800 leading-none">
                  {content.about.badge_number}
                </div>
                <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-gray-600 mt-1">
                  {content.about.badge_label}
                </div>
              </div>
            </div>
            {/* Text */}
            <div>
              <div className={`${eyebrow} reveal`}>Who We Are</div>
              <h2 className={`${secTitle} reveal d1`}>
                A Legacy Built<br />in <em className="italic text-green-600">Concrete</em><br />&amp; Character.
              </h2>
              <div className="mt-0">
                <p className="reveal d2 text-[15px] text-gray-600 leading-[1.8] mb-[18px]">{content.about.paragraph1}</p>
                <p className="reveal d3 text-[15px] text-gray-600 leading-[1.8] mb-[18px]">{content.about.paragraph2}</p>
              </div>
              <div className="reveal d3 flex flex-col border border-gray-200 rounded-[10px] overflow-hidden mt-8">
                {content.about.pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="flex gap-[18px] items-start px-6 py-[22px] border-b border-gray-100 last:border-b-0 transition-colors duration-200 hover:bg-green-50"
                  >
                    <div className="font-serif text-[28px] text-green-200 leading-none shrink-0 mt-[2px] font-medium">
                      {pillar.number}
                    </div>
                    <div>
                      <h3 className="font-sans text-[14px] font-semibold text-green-900 mb-1">{pillar.title}</h3>
                      <p className="text-[13px] text-gray-600 leading-[1.65]">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section id="services" className={`bg-gray-50 border-t border-gray-100 ${sectionY}`}>
        <div className={pageX}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-end mb-[52px]">
            <div>
              <div className={`${eyebrow} reveal`}>{sectionCopy.services.eyebrow}</div>
              <h2 className={`${secTitle} reveal d1`}>
                {sectionCopy.services.title}<br /><em className="italic text-green-600">{sectionCopy.services.highlight}</em>
              </h2>
            </div>
            <p className="reveal d2 text-[15px] text-gray-600 leading-[1.8]">
              {sectionCopy.services.paragraph}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-px bg-gray-200 rounded-[12px] overflow-hidden border border-gray-200">
            {content.services.map((service, i) => (
              <div
                key={i}
                className={`reveal${SVC_DELAYS[i] ? ` ${SVC_DELAYS[i]}` : ""} bg-white px-7 pt-8 pb-7 transition-colors duration-200 hover:bg-green-50 relative`}
              >
                <div className="w-11 h-11 bg-green-50 rounded-[10px] flex items-center justify-center mb-5">
                  {serviceIcons[i]}
                </div>
                <div className="font-serif text-[22px] font-medium text-green-950 mb-[10px] leading-[1.2]">
                  {service.name}
                </div>
                <div className="text-[13px] text-gray-600 leading-[1.7] mb-5">{service.description}</div>
                <div className="flex flex-wrap gap-[6px]">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="font-mono text-[10px] tracking-[0.06em] px-[10px] py-1 bg-green-50 border border-green-100 text-green-700 rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────────── */}
      <section id="projects" className={`bg-white ${sectionY}`}>
        <div className={pageX}>
          <div className="flex justify-between items-end mb-10 flex-wrap gap-5">
            <div>
              <div className={`${eyebrow} reveal`}>{sectionCopy.projects.eyebrow}</div>
              <h2 className={`${secTitle} reveal d1`}>
                {sectionCopy.projects.title}<br /><em className="italic text-green-600">{sectionCopy.projects.highlight}</em>
              </h2>
            </div>
            <div className="reveal d2 hidden xs:flex gap-[6px] flex-wrap sm:flex">
              {Object.entries(filterLabels).map(([f, label]) => (
                <button
                  key={f}
                  className={[
                    "font-mono text-[11px] font-medium tracking-[0.07em] uppercase px-4 py-2 border rounded-[6px] transition-all duration-200",
                    activeFilter === f
                      ? "bg-green-800 border-green-800 text-white"
                      : "border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700",
                  ].join(" ")}
                  onClick={() => setActiveFilter(f)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {content.projects.map((project, i) => (
              <div
                key={i}
                className={[
                  `reveal${project.delay ? ` ${project.delay}` : ""}`,
                  "border border-gray-200 rounded-[12px] overflow-hidden bg-white transition-[box-shadow,transform] duration-[250ms] hover:shadow-[0_8px_32px_rgba(27,58,39,0.1)] hover:-translate-y-[3px] group",
                  activeFilter !== "all" && activeFilter !== project.category ? "hidden" : "",
                ].join(" ")}
              >
                <div className="aspect-video relative overflow-hidden bg-green-900">
                  <div
                    className={[
                      "absolute inset-0 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] relative",
                      project.imgClass === "proj-img-roads"    ? "bg-gradient-to-br from-[#1a3d2b] via-[#2d6040] to-[#4a8060]"
                      : project.imgClass === "proj-img-bridge"   ? "bg-gradient-to-br from-[#162e2f] via-[#1e4a4b] to-[#2d6e70]"
                      : project.imgClass === "proj-img-building" ? "bg-gradient-to-br from-[#2a1e3d] via-[#3d2d5a] to-[#5a4070]"
                      : "bg-gradient-to-br from-[#1a2d3d] via-[#1e4060] to-[#2d6080]",
                      "proj-img-inner",
                    ].join(" ")}
                  >
                    <ProjectIllustration svgKey={project.svgKey} />
                  </div>
                  <span
                    className={[
                      "absolute top-3 right-3 z-10 font-mono text-[9px] font-medium tracking-[0.1em] uppercase px-[10px] py-1 rounded-[4px] flex items-center gap-[5px] bg-white/92",
                      project.status === "done" ? "text-[#2a7040]" : "text-[#b86a10]",
                    ].join(" ")}
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-current" />
                    {project.statusLabel}
                  </span>
                  <span className="absolute bottom-3 left-3 z-10 font-mono text-[9px] tracking-[0.14em] uppercase text-white/60 bg-black/35 backdrop-blur-[6px] px-[10px] py-1 rounded-[4px]">
                    {project.sectionLabel} · {project.year}
                  </span>
                </div>
                <div className="px-[22px] pt-[22px] pb-5">
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-green-500 mb-[6px]">
                    {project.displayCategory}
                  </div>
                  <div className="font-serif text-[20px] font-medium text-green-950 leading-[1.25] mb-[6px]">
                    {project.title}
                  </div>
                  <div className="font-mono text-[12px] text-gray-400 mb-[10px]">
                    📍 {project.location}
                  </div>
                  <div className="text-[13px] text-gray-600 leading-[1.65] mb-4">
                    {project.description}
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-[14px]">
                    <div>
                      <div className="font-serif text-[22px] font-medium text-green-700">{project.value}</div>
                      <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-gray-400">{sectionCopy.projects.value_label}</div>
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-[14px] transition-all duration-200 group-hover:bg-green-800 group-hover:border-green-800 group-hover:text-white">
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal text-center mt-[52px]">
            <p className="font-mono text-[12px] tracking-[0.06em] text-gray-400 mb-5">
              {sectionCopy.projects.summary}
            </p>
            <a href="#contact" className={btnGreen} onClick={(e) => ss(e, "#contact")}>
              {content.cta.discuss_project}
            </a>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────────────────── */}
      <section id="certs" className={`bg-green-950 ${sectionY}`}>
        <div className={pageX}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[60px] items-end mb-14">
            <div>
              <div className={`${eyebrowDark} reveal`}>{sectionCopy.certifications.eyebrow}</div>
              <h2 className={`${secTitle.replace("text-green-950", "text-white")} reveal d1`}>
                {sectionCopy.certifications.title}<br />
                <em className="italic text-green-400">{sectionCopy.certifications.highlight}</em>
              </h2>
            </div>
            <p className="reveal d2 text-[15px] text-white/45 leading-[1.8]">
              {sectionCopy.certifications.paragraph}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-[12px] overflow-hidden border border-white/[0.06] mb-12">
            {content.certifications.map((cert, i) => (
              <div
                key={i}
                className={`reveal${CERT_DELAYS[i] ? ` ${CERT_DELAYS[i]}` : ""} bg-white/[0.03] px-7 py-7 transition-colors duration-200 hover:bg-white/[0.06]`}
              >
                <div className="font-mono text-[18px] font-semibold text-green-400 mb-2 tracking-[-0.01em]">
                  {cert.badge}
                </div>
                <div className="font-serif text-[18px] font-medium text-white leading-[1.2] mb-1">
                  {cert.name}
                </div>
                <div className="font-mono text-[12px] text-white/40 mb-3">{cert.org}</div>
                <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/20">
                  {cert.since}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal">
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/25 mb-4">
              {sectionCopy.certifications.clients_label}
            </div>
            <div className="flex flex-wrap gap-2">
              {content.clients.map((client, i) => (
                <span
                  key={i}
                  className="font-sans text-[13px] px-4 py-2 border border-white/[0.1] text-white/50 rounded-[6px] transition-all duration-200 hover:border-green-500 hover:text-white/80 cursor-default"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contact" className={`bg-white ${sectionY}`}>
        <div className={pageX}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 2xl:gap-24 items-start">
            <div>
              <div className={`${eyebrow} reveal`}>{sectionCopy.contact.eyebrow}</div>
              <h2 className={`${secTitle} reveal d1`}>
                {sectionCopy.contact.title}<br /><em className="italic text-green-600">{sectionCopy.contact.highlight}</em>
              </h2>
              <p className="reveal d2 text-[15px] text-gray-600 leading-[1.8] max-w-[42rem] mt-4">
                {sectionCopy.contact.paragraph}
              </p>
              <div className="reveal d3 mt-8 flex flex-col border border-gray-200 rounded-[10px] overflow-hidden">
                {content.contact.details.map((item, i) => {
                  const value = content.contact[item.field as "address" | "phone" | "email" | "hours"];

                  return (
                  <div key={i} className="flex gap-4 items-start px-[22px] py-[18px] border-b border-gray-100 last:border-b-0">
                    <div className="w-9 h-9 bg-green-50 rounded-[8px] flex items-center justify-center shrink-0 text-[15px]">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-gray-400 mb-[3px]">
                        {item.label}
                      </div>
                      <div className="text-[14px] text-green-900 font-medium leading-[1.4]">
                        {item.field === "email"
                          ? <a href={`mailto:${value}`} className="hover:underline">{value}</a>
                          : value
                        }
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            <div className="reveal d2">
              <div className="bg-gray-50 border border-gray-200 rounded-[12px] p-6 sm:p-8 xl:p-10">
                {!formSubmitted ? (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="mb-[18px]">
                        <label className="block font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-gray-600 mb-2">
                          {contactForm.full_name} <span className="text-green-600">*</span>
                        </label>
                        <input type="text" placeholder={contactForm.full_name_placeholder} required className={inputBase} />
                      </div>
                      <div className="mb-[18px]">
                        <label className="block font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-gray-600 mb-2">
                          {contactForm.organization}
                        </label>
                        <input type="text" placeholder={contactForm.organization_placeholder} className={inputBase} />
                      </div>
                    </div>
                    <div className="mb-[18px]">
                      <label className="block font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-gray-600 mb-2">
                        {contactForm.email} <span className="text-green-600">*</span>
                      </label>
                      <input type="email" placeholder={contactForm.email_placeholder} required className={inputBase} />
                    </div>
                    <div className="mb-[18px]">
                      <label className="block font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-gray-600 mb-2">
                        {contactForm.project_type}
                      </label>
                      <select
                        defaultValue=""
                        className={`${inputBase} appearance-none cursor-pointer text-gray-400 pr-[38px]`}
                      >
                        <option value="" disabled>{contactForm.project_type_placeholder}</option>
                        {contactForm.project_type_options.map((option) => (
                          <option key={option} className="text-green-900">{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-[18px]">
                      <label className="block font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-gray-600 mb-2">
                        {contactForm.message} <span className="text-green-600">*</span>
                      </label>
                      <textarea
                        placeholder={contactForm.message_placeholder}
                        required
                        className={`${inputBase} resize-y min-h-[110px]`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-[14px] bg-green-800 text-white font-mono text-[12px] font-semibold tracking-[0.1em] uppercase rounded-[7px] cursor-pointer border-0 transition-all duration-200 hover:bg-green-700 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(27,58,39,0.2)]"
                    >
                      {contactForm.submit}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-[52px] h-[52px] bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-green-600 fill-none stroke-[2.5] [stroke-linecap:round] [stroke-linejoin:round]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-[26px] text-green-950 mb-2">{contactForm.success_title}</h3>
                    <p className="text-[14px] text-gray-600">{contactForm.success_message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer id="footer" className="bg-green-950 pt-14 sm:pt-16 lg:pt-20 xl:pt-22 pb-9">
        <div className={pageX}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 xl:gap-14 mb-[52px]">
            <div>
              <div className="font-serif text-[22px] font-medium text-white mb-1">{content.company.name}</div>
              <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-green-500 mb-[14px]">
                {content.company.footer_subtitle}
              </div>
              <p className="text-[13px] text-white/[0.38] leading-[1.7] mb-[18px]">
                {content.footer.description}
              </p>
              <div className="flex flex-wrap gap-[6px]">
                {content.footer.badges.map((b, i) => (
                  <span
                    key={i}
                    className="font-mono text-[9px] tracking-[0.1em] uppercase px-[10px] py-1 border border-white/[0.1] text-white/30 rounded-[4px]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
            {content.footer.columns.map(({ title, links }) => (
              <div key={title}>
                <h5 className="font-mono text-[10px] font-medium tracking-[0.14em] uppercase text-white/25 mb-4">{title}</h5>
                <ul className="flex flex-col gap-[10px]">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        onClick={href.startsWith("#") ? (e) => ss(e as React.MouseEvent<HTMLAnchorElement>, href) : undefined}
                        className="text-[13px] text-white/45 transition-colors duration-200 hover:text-white/80"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/[0.07] pt-7 flex justify-between items-center flex-wrap gap-[10px]">
            <div className="font-mono text-[11px] text-white/20">{content.footer.copyright}</div>
            <div className="flex gap-5">
              {content.footer.legal_links.map(({ label, href }) => (
                <a key={label} href={href} className="font-mono text-[11px] text-white/20 transition-colors duration-200 hover:text-white/50">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
