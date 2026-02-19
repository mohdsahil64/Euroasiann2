import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Ship, Users, Package, Wrench } from "lucide-react";
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
      title: "Route Planning & Tracking",
      desc: "Monitor vessels, voyages, fuel usage, and performance in real time.",
      icon: "/lottie/ship.json",
      lucideIcon: Ship,
      points: [
  "Optimized voyage route planning",
  "Real-time vessel position tracking",
  "Fuel consumption analysis",
  "Weather & sea condition insights",
  "Performance comparison by voyage",

]

    },
    {
      title: "Ship & Crew Management",
      desc: "Manage crew profiles, certifications, rotations, and payroll centrally.",
      icon: "/lottie/crew.json",
      lucideIcon: Users,
      points: [
  "Centralized vessel profile management",
  "Crew certification and compliance tracking",
  "Crew rotation and contract management",
  "Payroll and onboard allowances",

  "Crew performance monitoring",

]

    },
    {
      title: "Spare Parts & Procurement",
      desc: "Control purchasing, spare parts, stock levels, and vendor workflows.",
      icon: "/lottie/procurement.json",
      lucideIcon: Package,
      points: [
  "Spare parts inventory control",
  "Automated RFQ generation",

  "Purchase order management",
  "Budget and cost tracking",
  "Delivery status monitoring",

]

    },
    {
      title: "Dry Dock & Maintenance",
      desc: "Planned maintenance, defect tracking, and asset lifecycle management.",
      icon: "/lottie/maintenance.json",
      lucideIcon: Wrench,
      points: [
  "Dry dock planning and scheduling",
  "Planned maintenance system (PMS)",
  "Maintenance cost control",
  "Asset lifecycle management",
  "Spare parts linkage with jobs",

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
        {items.map((item, i) => {
          const IconComponent = item.lucideIcon;
          return (
            <div className="whatwedo-card" key={i}>
              <LottieIcon path={item.icon} />
              <div className="whatwedo-card-header">
                <IconComponent size={24} className="whatwedo-icon" />
                <h3>{item.title}</h3>
              </div>
          
              <ul className="card-points">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
