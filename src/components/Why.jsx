import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "../styles/Why.css";

function LottieIcon({ path }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });

    return () => anim.destroy();
  }, [path]);

  return <div className="lottie-box" ref={containerRef}></div>;
}

export default function WhyWeDifferent() {
  const items = [
    {
      path: "/lottie/ship.json",
      title: "Built for Maritime Operations",
      desc: "Purpose-built ERP designed specifically for fleet and vessel workflows.",
    },
    {
      path: "/lottie/analytics.json",
      title: "AI-Driven Intelligence",
      desc: "Real-time insights and predictive analytics for smarter decisions.",
    },
    {
      path: "/lottie/Certificate.json",
      title: "Regulatory Compliance & Certification",
      desc: "QHSE, audits, inspections, and regulations built-in by design.",
    },
    {
      path: "/lottie/compliance.json",
      title: "Enterprise-Grade Scalability",
      desc: "Secure, modular platform that scales from one vessel to global fleets.",
    },
  ];

  return (
    <section className="why-section">
      <h2 className="why-subheading">
        Why We’re <span>Different</span>
      </h2>

      <p className="why-p">
  Purpose-built maritime ERP designed to simplify complex operations,
  ensure compliance, and deliver real-time operational intelligence.
</p>

      <div className="why-grid">
        {items.map((item, i) => (
          <div className="why-card" key={i}>
            <LottieIcon path={item.path} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
