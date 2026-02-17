import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/MaritimeModules.css";



gsap.registerPlugin(ScrollTrigger);

function LottieBlock({ path }) {
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

  return <div className="stake-lottie" ref={ref}></div>;
}

export default function ForEveryStakeholder() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".stake-row", {
      opacity: 0,
      y: 70,
      duration: 1,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section className="stake-section" ref={sectionRef}>
      <div className="stake-header">

        <h2 className="stake-title">For Every Maritime Stakeholder</h2>
      
   
        <p>
          A unified maritime ERP platform built to serve every role
          across the global shipping ecosystem.
        </p>
      </div>

      {/* 1 */}
      <div className="stake-row">
        <div className="stake-content">
          <h3>🚢 Ship Owners</h3>
          <ul>
            <li>Real-time fleet-wide performance overview</li>
            <li>Voyage profitability and cost intelligence</li>
            <li>Fuel efficiency and operational optimization</li>
            <li>Risk management and regulatory compliance oversight</li>
            <li>Executive-level dashboards and KPIs</li>
            <li>Data-driven decision support for investments</li>
            <li>Centralized reporting across all vessels</li>
          </ul>
        </div>
        <LottieBlock path="/lottie/owner.json" />
      </div>

      {/* 2 */}
      <div className="stake-row reverse">
        <LottieBlock path="/lottie/fleet.json" />
        <div className="stake-content">
          <h3>🚢 Fleet Managers</h3>
          <ul>
            <li>Multi-vessel monitoring from a single platform</li>
            <li>Route planning and voyage performance analysis</li>
            <li>Fuel consumption tracking and optimization</li>
            <li>Real-time vessel status and performance metrics</li>
            <li>Weather-aware operational insights</li>
            <li>Deviation, delay, and exception alerts</li>
          </ul>
        </div>
      </div>

      {/* 3 */}
      <div className="stake-row">
        <div className="stake-content">
          <h3>⚓ Ship Managers</h3>
          <ul>
            <li>Centralized vessel and crew administration</li>
            <li>Audit-ready compliance and inspection records</li>
            <li>Maintenance coordination and scheduling</li>
            <li>Asset lifecycle management</li>
            <li>Incident and performance reporting</li>
            <li>Crew certification and document tracking</li>
          </ul>
        </div>
        <LottieBlock path="/lottie/ship-manager.json" />
      </div>

      {/* 4 */}
      <div className="stake-row reverse">
        <LottieBlock path="/lottie/port.json" />
        <div className="stake-content">
          <h3>🏗 Port Agents</h3>
          <ul>
            <li>Port call planning and vessel scheduling</li>
            <li>Arrival and departure coordination</li>
            <li>Digital documentation and approvals</li>
            <li>Digital documentation and approvals</li>
            <li>Service request and status tracking</li>
            <li>Reduced turnaround time at ports</li>
          </ul>
        </div>
      </div>

      {/* 5 */}
      <div className="stake-row">
        <div className="stake-content">
          <h3>📦 Vendors & Suppliers</h3>
          <ul>
            <li>Direct access to RFQs and requirements</li>
            <li>Purchase order visibility and tracking</li>
            <li>Simplified quotation and negotiation process</li>
            <li>Performance-based vendor evaluation</li>
            <li>Supplier risk and compliance monitoring</li>
            <li>Collaborative procurement and contract management</li>
          </ul>
        </div>
        <LottieBlock path="/lottie/vendor.json" />
      </div>
    </section>
  );
}
