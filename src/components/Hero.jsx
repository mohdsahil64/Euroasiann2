import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hyperspeed from "../components/Hyperspeed";
import "../styles/Hero.css";






export default function Hero() {
  const headingRef = useRef(null);
  const actionsRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.from(".hero-text-anim", {
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(".hero-btn-anim", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.6,
      ease: "power3.out"
    });

    gsap.from(".hero-img-anim", {
      x: 80,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      delay: 0.4,
      ease: "power3.out"
    });

  });

  return () => ctx.revert();
}, []);

  return (
    <section className="hero">
      {/* BACKGROUND (UNCHANGED) */}
      <Hyperspeed
        className="hero-bg"
        dotSize={5}
        gap={15}
        baseColor="#494799"
        activeColor="#6149e9"
        proximity={150}
        shockRadius={350}
        shockStrength={5}
        resistance={750}
        returnDuration={3}
      />

      {/* CONTENT */}
      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
  <span className="hero-badge hero-text-anim">Euroasiann Maritime ERP</span>

  <h1 className="hero-text-anim">The Future</h1>
  <h1 className="hero-text-anim">of Maritime</h1>
  <h1 className="hero-text-anim">Operations All in</h1>
  <h1 className="hero-text-anim">
    <span>One ERP Platform</span>
  </h1>

  <div className="hero-actions hero-btn-anim">
    <a href="/contact" className="primary-btn">Request Free Demo</a>
    <button className="secondary-btn">Learn More</button>
  </div>
</div>

<div className="hero-right">
  <div className="mock-card main-card hero-img-anim">
    <img src="./src/assets/home.jpg" />
  </div>

  <div className="mock-card small-card hero-img-anim">
    <img src="./src/assets/home1.jpg" />
  </div>
</div>


      </div>
     
    </section>
    
  );
}
