import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/services.css";
import SEO from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {

   <SEO
        title="Maritime ERP Services | Fleet, Crew, Procurement & Analytics"
        description="Explore enterprise-grade maritime ERP services including fleet operations, crew management, procurement automation, compliance and performance intelligence."
      />
   

  const counters = {
    vessels: useRef(null),
    uptime: useRef(null),
    crew: useRef(null),
    ports: useRef(null)
  };

  const lotties = {
    fleet: useRef(null),
    analytics: useRef(null),
    compliance: useRef(null),
    procurement: useRef(null),
    maintenance: useRef(null),
    dashboard: useRef(null)
  };

  useEffect(() => {

    // KPI Animation
    const counterData = [
      { ref: counters.vessels, val: 245 },
      { ref: counters.uptime, val: 99 },
      { ref: counters.crew, val: 1200 },
      { ref: counters.ports, val: 38 }
    ];

    counterData.forEach(item => {
      gsap.fromTo(
        item.ref.current,
        { innerText: 0 },
        {
          innerText: item.val,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: item.ref.current,
            start: "top 85%"
          }
        }
      );
    });

    // Lottie Loader
    const loadLottie = (ref, path) => {
      lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path
      });
    };

    loadLottie(lotties.fleet, "lottie/enterprice.json");
    loadLottie(lotties.analytics, "/lottie/analytics.json");
    loadLottie(lotties.compliance, "/lottie/Certificate.json");
    loadLottie(lotties.procurement, "/lottie/procurement.json");
    loadLottie(lotties.maintenance, "/lottie/maintenance.json");
    loadLottie(lotties.dashboard, "/lottie/fleet.json");

    // Scroll Animation
    gsap.from(".service-block", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".services-container",
        start: "top 70%"
      }
    });

  }, []);

  return (
    <section className="services-section">

      <div className="services-header">
        <h2>Enterprise Maritime ERP Solutions</h2>
        <p>
          A comprehensive digital platform engineered for modern maritime enterprises,
          delivering operational visibility, automation, and data intelligence across fleets worldwide.
        </p>
      </div>

      {/* KPI SECTION */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <h3><span ref={counters.vessels}>0</span>+</h3>
          <p>Active Vessels Managed</p>
        </div>

        <div className="kpi-card">
          <h3><span ref={counters.uptime}>0</span>%</h3>
          <p>Platform Uptime Reliability</p>
        </div>

        <div className="kpi-card">
          <h3><span ref={counters.crew}>0</span>+</h3>
          <p>Crew Members Coordinated</p>
        </div>

        <div className="kpi-card">
          <h3><span ref={counters.ports}>0</span>+</h3>
          <p>Global Ports Integrated</p>
        </div>
      </div>

      {/* SERVICES BLOCKS */}
      <div className="services-container">

        <ServiceBlock
          title="Fleet Operations & Voyage Intelligence"
          desc="Manage your entire fleet from a centralized maritime control system built for real-world shipping operations. Monitor vessel positions in real time, track voyage progress across international routes, and analyze fuel performance and operational efficiency. The platform enables fleet managers to detect delays, optimize routing decisions, and maintain consistent vessel performance standards. By combining tracking, analytics, and operational insights in one dashboard, this module ensures better coordination, lower operational risk, and improved voyage profitability."
          lottieRef={lotties.fleet}
        />

        <ServiceBlock
          title="Advanced Data & Predictive Analytics"
          desc="Leverage AI-powered forecasting models to anticipate operational risks, optimize fuel consumption, and drive cost efficiency."
          lottieRef={lotties.analytics}
          reverse
        />

        <ServiceBlock
          title="Crew Management & Certification Control"
          desc="Digitally manage crew records, contracts, certifications, travel arrangements, and onboard assignments through a secure and structured system. Automated alerts notify management teams about expiring certifications, training renewals, and compliance requirements. The system reduces paperwork, improves administrative accuracy, and ensures that every crew member meets international maritime standards before deployment. This module improves crew coordination while maintaining regulatory compliance and operational readiness."
          lottieRef={lotties.compliance}
        />

        <ServiceBlock
          title="Smart Procurement & RFQ Automation"
          desc="Streamline procurement operations with automated RFQ management, vendor communication, quotation comparisons, and purchase approval workflows. This module allows maritime enterprises to manage spare parts, inventory requirements, and supplier performance from a single integrated system. By reducing manual processes and improving transparency, the procurement module accelerates purchasing cycles, lowers operational delays, and ensures better vendor accountability across global supply chains."
          lottieRef={lotties.procurement}
          reverse
        />

        <ServiceBlock
          title="Maintenance & Dry Dock Lifecycle Management"
          desc="Streamline procurement operations with automated RFQ management, vendor communication, quotation comparisons, and purchase approval workflows. This module allows maritime enterprises to manage spare parts, inventory requirements, and supplier performance from a single integrated system. By reducing manual processes and improving transparency, the procurement module accelerates purchasing cycles, lowers operational delays, and ensures better vendor accountability across global supply chains."
          lottieRef={lotties.maintenance}
        />

        <ServiceBlock
          title="Executive Dashboards & Reporting"
          desc="Empower leadership teams with consolidated real-time dashboards that provide visibility into fleet performance, operational costs, compliance status, and financial indicators. The system transforms operational data into actionable insights, enabling strategic decision-making at both operational and executive levels. With automated reporting and customizable KPIs, management can quickly evaluate performance trends, identify improvement areas, and drive data-driven growth across maritime operations."
          lottieRef={lotties.dashboard}
          reverse
        />

      </div>

    </section>
  );
}

function ServiceBlock({ title, desc, lottieRef, reverse }) {
  return (
    <div className={`service-block ${reverse ? "reverse" : ""}`}>
      <div className="service-text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="service-lottie" ref={lottieRef}></div>
    </div>
  );
}
