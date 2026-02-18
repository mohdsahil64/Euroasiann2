import { useEffect, useRef } from "react";
import {
  Ship,
  Users,
  Anchor,
  Boxes,
  ClipboardCheck,
  FileText,
  Globe,
  BarChart3,
  ShieldCheck,
  Settings,
  ArrowRight
} from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/Services.css";


gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Ship,
    title: "Vessel Management",
    desc: "Monitor vessel operations, voyages, and performance from a unified ERP system."
  },
  {
    icon: Users,
    title: "Crew Management",
    desc: "Manage crew profiles, certifications, assignments, and onboard planning."
  },
  {
    icon: Anchor,
    title: "Port & Agency Operations",
    desc: "Coordinate port calls, agents, and port services with structured workflows."
  },
  {
    icon: Boxes,
    title: "Vendor & Supplier Network",
    desc: "Connect and manage maritime vendors and suppliers through a single platform."
  },
  {
    icon: ClipboardCheck,
    title: "Maintenance & PMS",
    desc: "Plan and track vessel maintenance, inspections, and preventive schedules."
  },
  {
    icon: FileText,
    title: "Documentation & Compliance",
    desc: "Digitize maritime documents, certificates, and compliance processes."
  },
  {
    icon: Globe,
    title: "Live Fleet Tracking",
    desc: "Track vessel movements globally with real-time fleet visibility."
  },
  {
    icon: BarChart3,
    title: "Operational Analytics",
    desc: "Analyze operational performance, costs, and efficiency metrics."
  },
  {
    icon: ShieldCheck,
    title: "Risk & Safety Oversight",
    desc: "Enhance maritime safety and manage operational risks proactively."
  },
  {
    icon: Settings,
    title: "Unified ERP Dashboard",
    desc: "Manage all maritime operations from one secure ERP dashboard."
  }
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 85%"
          }
        }
      );
    });
  }, []);

  return (
    <section className="services-cards-section" id="services">
      {/* HEADER */}
      <div className="services-cards-header">
        <h2>
          Euroasiann Provides <span>Maritime ERP Services</span>
        </h2>
        <p>
          A comprehensive ERP platform designed to manage vessels, crew, ports,
          vendors, and maritime operations from a single intelligent dashboard.
        </p>
      </div>
   

      {/* CARDS */}
      <div className="services-cards-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="service-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="service-icon">
                <Icon size={26} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <a href="#contact" className="service-cta">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
