import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Ship, Brain, ShieldCheck, Layers } from "lucide-react";
import "../styles/Why1.css";

function LottieIcon({ path }) {
  const ref = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });

    return () => anim.destroy();
  }, [path]);

  return <div className="why-lottie" ref={ref} />;
}

export default function WhyWeDifferent() {
  const items = [
    {
      path: "/lottie/ship.json",
      icon: Ship,
      title: "Built for Maritime Operations",
      desc: "Purpose-built ERP designed specifically for fleet and vessel workflows.",
    },
    {
      path: "/lottie/analytics.json",
      icon: Brain,
      title: "AI-Driven Intelligence",
      desc: "Real-time insights and predictive analytics for smarter decisions.",
    },
    {
      path: "/lottie/Certificate.json",
      icon: ShieldCheck,
      title: "Regulatory Compliance & Certification",
      desc: "QHSE, audits, inspections, and regulations built-in by design.",
    },
    {
      path: "/lottie/compliance.json",
      icon: Layers,
      title: "Enterprise-Grade Scalability",
      desc: "Secure, modular platform that scales from one vessel to global fleets.",
    },
  ];

  return (
    <section className="why-clean">
      <header className="why-header">
        <h2>
          Why We’re <span>Different</span>
        </h2>
        <p>
          Purpose-built maritime ERP designed to simplify complex operations,
          ensure compliance, and deliver real-time operational intelligence.
        </p>
      </header>

      <div className="why-cards">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <article className="why-card-clean" key={i}>
              <div className="why-media">
                <LottieIcon path={item.path} />
              </div>

              <div className="why-card-head">
                <Icon size={18} />
                <h3>{item.title}</h3>
              </div>

              <p>{item.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}