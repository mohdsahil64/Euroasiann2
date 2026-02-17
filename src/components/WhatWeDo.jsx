import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "../styles/Why.css";

function LottieIcon({ path }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });

    return () => anim.destroy();
  }, [path]);

  return <div className="lottie-icon" ref={ref}></div>;
}

export default function WhatWeDo() {
  const items = [
    {
      title: "🚢 Route Planning & Tracking",
      desc: "Monitor vessels, voyages, fuel usage, and performance in real time.",
      icon: "/lottie/ship.json",
      points: [
  "Optimized voyage route planning",
  "Real-time vessel position tracking",
  "Fuel consumption analysis",
  "Weather & sea condition insights",
  "ETA prediction and alerts",
  "Deviation and delay monitoring",
  "Performance comparison by voyage",
]

    },
    {
      title: "⚓ Ship & Crew Management",
      desc: "Manage crew profiles, certifications, rotations, and payroll centrally.",
      icon: "/lottie/crew.json",
      points: [
  "Centralized vessel profile management",
  "Crew certification and compliance tracking",
  "Crew rotation and contract management",
  "Payroll and onboard allowances",
  "Medical and document validity tracking",
  "Crew performance monitoring",
  "Regulatory-ready crew records",
]

    },
    {
      title: "📦 Spare Parts & Procurement",
      desc: "Control purchasing, spare parts, stock levels, and vendor workflows.",
      icon: "/lottie/procurement.json",
      points: [
  "Spare parts inventory control",
  "Automated RFQ generation",
  "Vendor quotation comparison",
  "Purchase order management",
  "Budget and cost tracking",
  "Delivery status monitoring",
  "Procurement audit trail",
]

    },
    {
      title: "🛠 Dry Dock & Maintenance",
      desc: "Planned maintenance, defect tracking, and asset lifecycle management.",
      icon: "/lottie/maintenance.json",
      points: [
  "Dry dock planning and scheduling",
  "Planned maintenance system (PMS)",
  "Defect and job tracking",
  "Maintenance cost control",
  "Asset lifecycle management",
  "Spare parts linkage with jobs",
  "Maintenance history and analytics",
]
    },
   
  ];

  return (
    <section className="whatwedo">
      <div className="whatwedo-head">
        <h2>Comprehensive Maritime Modules</h2>
        <p>
    A complete suite of integrated modules designed to manage fleet operations,
    crew, procurement, and maintenance with precision. Our platform offers seamlessly integrated modules to optimize every aspect of your maritime operations.
  </p>
      </div>

      <div className="whatwedo-grid">
        {items.map((item, i) => (
          <div className="whatwedo-card" key={i}>
            <LottieIcon path={item.icon} />
            <h3>{item.title}</h3>
          
            <ul className="card-points">
  {item.points.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
