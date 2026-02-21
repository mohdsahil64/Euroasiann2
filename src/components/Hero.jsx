import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

import "../styles/Hero.css";
import FloatingLines from "../components/FloatingLines";

const homeImg = "/home.jpg";
const home1Img = "/home1.jpg";

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
      {/* FloatingLines Background */}
      <div className="hero-bg-floating">
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

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

  <p className="hero-text-anim" style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.42)", maxWidth: "500px" }}>
   All in One Euroasiann ERP platform built to simplify maritime operations and deliver complete operational control. Everything maritime teams need fleet, crew, compliance in ERP system.
</p>
  

  <div className="hero-actions hero-btn-anim">
    <a href="/contact" className="primary-btn">
      Request Free Demo <ArrowRight size={20} style={{ marginLeft: "0.5rem", display: "inline" }} />
    </a>
    <button className="secondary-btn">Learn More</button>
  </div>
</div>

<div className="hero-right">
  <div className="mock-card main-card hero-img-anim">
    <img src={homeImg} alt="ERP Dashboard" />
  </div>

  <div className="mock-card small-card hero-img-anim">
    <img src={home1Img} alt="ERP Platform Demo" />
  </div>
</div>


      </div>
     
    </section>
    
  );
}
