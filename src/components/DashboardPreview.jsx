import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/DashboardPreview.css";

gsap.registerPlugin(ScrollTrigger);

export default function DashboardPreview() {
  const sectionRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    // GSAP entry animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Load lottie animation
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/dashboard.json",
    });

    // Cleanup function to destroy animation on unmount
    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  return (
    <section className="dashboard-preview" ref={sectionRef}>
      <div className="dashboard-header">
        <h2>
          Inside <span>Euroasiann ERP</span> A Unified Dashboard
        </h2>
        <p>
          A unified dashboard to manage users, payroll, vessels, compliance,
          and real-time maritime operations from one intelligent system.
        </p>
      </div>
  <div className="dashboard-animation">
        <div ref={lottieRef} className="lottie-box" />
      </div>
    
    </section>
  );
}