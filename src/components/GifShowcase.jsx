import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/GifShowcase.css";

gsap.registerPlugin(ScrollTrigger);

export default function DashboardGifShowcase() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const [gifSrc, setGifSrc] = useState(null); // ← GIF loads only when visible

  useEffect(() => {
    // IntersectionObserver — set GIF src only when section enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGifSrc("/gif/Dashboard.gif");
          observer.disconnect(); // load once, done
        }
      },
      { rootMargin: "200px" } // start loading 200px before it comes into view
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      <h2 className="gif-heading">
        Dynamic Panel of <span>Euroasiann ERP</span>
      </h2>

      <div className="gif-wrapper">
        {gifSrc ? (
          <img
            ref={imgRef}
            src={gifSrc}
            alt="Euroasiann ERP Dashboard Preview"
            className="gif-image"
          />
        ) : (
          // Placeholder shown before GIF loads
          <div className="gif-placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="gif-cta">
        <a href="/contact" className="gif-cta-btn">
          Request For Free Demo →
        </a>
      </div>
    </section>
  );
}