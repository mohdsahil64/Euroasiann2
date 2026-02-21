import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/GifShowcase.css";

gsap.registerPlugin(ScrollTrigger);

export default function DashboardGifShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="gif-showcase" ref={sectionRef}>
      {/* Heading */}
      <h2 className="gif-heading">
        Dynamic Panel of <span>Euroasiann ERP</span>
      </h2>

      {/* GIF */}
      <div className="gif-wrapper">
        <img
          src="/gif/Dashboard.gif"
          alt="Euroasiann ERP Dashboard Preview"
          className="gif-image"
        />
      </div>

      {/* Small CTA */}
      <div className="gif-cta">
        <a href="/contact" className="gif-cta-btn">
         Request For Free Demo →
        </a>
      </div>
    </section>
  );
}