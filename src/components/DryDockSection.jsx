
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/DryDockSection.css";
 
gsap.registerPlugin(ScrollTrigger);
 
// ─── Image paths ────────────────────────────────────────────
const HERO_SLIDES = [
  "/src/assets/drydock/1.jpg",
  "/src/assets/drydock/2.jpg",
  "/src/assets/drydock/3.jpg",
];
 
// ─── ERP Modules ────────────────────────────────────────────
const ERP_MODULES = [
  { num: "01", label: "Dry Dock Scheduling" },
  { num: "02", label: "Vessel Maintenance" },
  { num: "03", label: "Asset & Equipment Tracking" },
  { num: "04", label: "Repair & Inspection Workflow" },
  { num: "05", label: "Inventory & Spare Parts" },
  { num: "06", label: "Workforce Management" },
];
 
// ─── Coverage / Brochure items (Section 2) ──────────────────
const COVERAGE = [
  { num: "01.", label: "Contract Logistics Bahrain" },
  { num: "02.", label: "Marine Operations" },
  { num: "03.", label: "Vessel Maintenance" },
];
 
// ─── Contact persons ────────────────────────────────────────
const CONTACTS = [
  {
    name: "Euroasiann Group",
    role: "Managing Director",
    email: "info@euroasianngroup.com",
  },
  {
    name: "Shipping / Marine",
    subname: "Euroasiann Group",
    role: "Business Manager, Shipping",
    email: "info@euroasianngroup.com",
  },
];
 
// ════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ════════════════════════════════════════════════════════════
const DryDockSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide]     = useState(null);
 
  // Refs
  const heroRef        = useRef(null);
  const scrollIndRef   = useRef(null);
  const heroImageRef   = useRef(null);
  const heroLeftRef    = useRef(null);
  const heroRightRef   = useRef(null);
 
  const sec2Ref        = useRef(null);
  const sec2ImgRef     = useRef(null);
  const sec2TextRef    = useRef(null);
 
  const sec3Ref        = useRef(null);
  const sec3ImgRef     = useRef(null);
  const sec3GridRef    = useRef(null);
 
  const ctaRef         = useRef(null);
  const ctaTextRef     = useRef(null);
  const ctaGridRef     = useRef(null);
 
  // ── Auto slide every 4.5s ─────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setPrevSlide(activeSlide);
      setActiveSlide((p) => (p + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, [activeSlide]);
 
  // ── HERO entrance animations ──────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(heroLeftRef.current,  { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.1 })
        .fromTo(heroImageRef.current, { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.3 }, "-=0.9")
        .fromTo(heroRightRef.current, { x: 60, opacity: 0 },  { x: 0, opacity: 1, duration: 1.1 }, "-=1.0")
        .fromTo(scrollIndRef.current, { opacity: 0, y: 16 },  { opacity: 1, y: 0, duration: 0.7 }, "-=0.6");
    }, heroRef);
    return () => ctx.revert();
  }, []);
 
  // ── ScrollTrigger for each section ───────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
 
      // Section 2 — image from left, text from right
      gsap.fromTo(sec2ImgRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: sec2Ref.current, start: "top 75%" } });
 
      gsap.fromTo(sec2TextRef.current,
        { x: 70, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: sec2Ref.current, start: "top 72%" } });
 
      // Section 3 — image fades in, grid items stagger up
      gsap.fromTo(sec3ImgRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sec3Ref.current, start: "top 75%" } });
 
      gsap.fromTo(sec3GridRef.current.querySelectorAll(".module-card"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sec3Ref.current, start: "top 70%" } });
 
      // CTA section
      gsap.fromTo(ctaTextRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 78%" } });
 
      gsap.fromTo(ctaGridRef.current.querySelectorAll(".contact-card"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 72%" } });
 
    });
    return () => ctx.revert();
  }, []);
 
  return (
    <div className="dd-root">
 
      {/* ══════════════════════════════════════════
          SECTION 1 — HERO  (GAC layout)
          Left panel | Center image | Right content
      ══════════════════════════════════════════ */}
      <section className="dd-hero" ref={heroRef}>
 
        {/* LEFT BLUE PANEL */}
        <div className="dd-hero__left" ref={heroLeftRef}>
          <div className="dd-scroll-ind" ref={scrollIndRef}>
            <div className="dd-scroll-ind__line">
              <span className="dd-scroll-ind__pulse" />
            </div>
            <span className="dd-scroll-ind__label">SCROLL</span>
          </div>
        </div>
 
        {/* CENTER — Full-height image slider */}
        <div className="dd-hero__image" ref={heroImageRef}>
          {HERO_SLIDES.map((src, i) => (
            <div
              key={i}
              className={`dd-slide ${i === activeSlide ? "dd-slide--on" : ""} ${i === prevSlide ? "dd-slide--off" : ""}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          {/* Dots */}
          <div className="dd-hero__dots">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`dd-dot ${i === activeSlide ? "dd-dot--on" : ""}`}
                onClick={() => { setPrevSlide(activeSlide); setActiveSlide(i); }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
 
        {/* RIGHT CONTENT PANEL */}
        <div className="dd-hero__right" ref={heroRightRef}>
          <div className="dd-hero__right-inner">
            <span className="dd-eyebrow">Maritime ERP Platform</span>
            <h1 className="dd-hero__heading">
              Smart Maritime ERP for Dry Dock &amp; Ship Maintenance
            </h1>
            <p className="dd-hero__para">
              Enhance operational efficiency with integrated solutions for dry
              docking, vessel maintenance, asset tracking, and repair workflows
              designed for modern maritime businesses.
            </p>
            <button className="dd-btn dd-btn--primary">
              <a href="/services">Explore Services</a>
              <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </section>
 
      {/* ══════════════════════════════════════════
          SECTION 2 — WE HAVE YOU COVERED
          (GAC style: left image | right text)
      ══════════════════════════════════════════ */}
      <section className="dd-covered" ref={sec2Ref}>
        <div className="dd-covered__image-wrap" ref={sec2ImgRef}>
          <img
            src="/src/assets/drydock/6.jpg"
            alt="Dry dock worker on vessel"
            className="dd-covered__image"
          />
          <div className="dd-covered__img-tag">
            <span>25+</span>
            <small>Years Maritime<br/>Expertise</small>
          </div>
        </div>
 
        <div className="dd-covered__text" ref={sec2TextRef}>
          <span className="dd-eyebrow dd-eyebrow--dark">End-to-End Coverage</span>
          <h2 className="dd-section-heading">We Have You Covered</h2>
          <p className="dd-section-para">
            From dry docking operations to full lifecycle vessel management, our
            maritime ERP platform provides everything you need to streamline
            logistics, maintenance, and operational workflows. All the
            additional resources you need to get started.
          </p>
 
          <div className="dd-covered__label">Brochures</div>
          <ul className="dd-numlist">
            {COVERAGE.map(({ num, label }) => (
              <li key={num} className="dd-numlist__item">
                <span className="dd-numlist__num">{num}</span>
                <span className="dd-numlist__text">{label}</span>
                <span className="dd-numlist__hover-line" />
              </li>
            ))}
          </ul>
 
          <button className="dd-btn dd-btn--outline">
            <a href="/services">Learn More</a>
            <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>
 
      {/* ══════════════════════════════════════════
          SECTION 3 — ERP MODULES GRID
          (Full-width image + grid cards overlay)
      ══════════════════════════════════════════ */}
      <section className="dd-modules" ref={sec3Ref}>
        {/* Background image */}
        <div className="dd-modules__bg" ref={sec3ImgRef}>
          <img src="/src/assets/drydock/3.jpg" alt="Dry dock aerial view" />
          <div className="dd-modules__overlay" />
        </div>
 
        <div className="dd-modules__content">
          <div className="dd-modules__header">
            <span className="dd-eyebrow dd-eyebrow--light">Integrated Solutions</span>
            <h2 className="dd-section-heading dd-section-heading--white">
              Core ERP Modules
            </h2>
            <p className="dd-section-para dd-section-para--muted">
              Purpose-built modules that cover every dimension of maritime
              operations — from scheduling to compliance.
            </p>
          </div>
 
          <div className="dd-modules__grid" ref={sec3GridRef}>
            {ERP_MODULES.map(({ num, label }) => (
              <div className="module-card" key={num}>
                <span className="module-card__num">{num}</span>
                <h4 className="module-card__title">{label}</h4>
                <div className="module-card__line" />
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ══════════════════════════════════════════
          SECTION 4 — LET'S START A CONVERSATION
          (Contact section — GAC style)
      ══════════════════════════════════════════ */}
      <section className="dd-cta" ref={ctaRef}>
        <div className="dd-cta__inner">
          <div className="dd-cta__header" ref={ctaTextRef}>
            <span className="dd-eyebrow dd-eyebrow--light">Get In Touch</span>
            <h2 className="dd-section-heading dd-section-heading--white">
              Let's start a conversation
            </h2>
            <p className="dd-section-para dd-section-para--muted">
              We are here and ready to help you achieve your business needs.
              Let's start a conversation today.
            </p>
 
            <div className="dd-cta__office">
              <strong>Maritime ERP Global</strong><br />
              <span>Hidd Main Office</span><br />
              <span>
Hyderabad, Telangana 500040, IN</span>
            </div>
            <div className="dd-cta__contact-info">
           
              <a href="mailto:info@euroasianngroup.com">
                <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5"/></svg>
                info@euroasianngroup.com
              </a>
              <a href="https://euroasianngroup.com" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8" stroke="currentColor" strokeWidth="1.5"/></svg>
                www.euroasianngroup.com
              </a>
            </div>
          </div>
 
          <div className="dd-cta__cards" ref={ctaGridRef}>
            {CONTACTS.map((c, i) => (
              <div className="contact-card" key={i}>
                <div className="contact-card__avatar">
                  {(c.subname || c.name).charAt(0)}
                </div>
                <div className="contact-card__info">
                  {c.subname && <span className="contact-card__dept">{c.name}</span>}
                  <strong className="contact-card__name">{c.subname || c.name}</strong>
                  <span className="contact-card__role">{c.role}</span>
                 
                  <a href={`mailto:${c.email}`} className="contact-card__detail">
                    <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4"/></svg>
                    {c.email}
                  </a>
                  <button href="/contact" className="contact-card__btn">Contact Us</button>
                 
        
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
    </div>
  );
};
 
export default DryDockSection;