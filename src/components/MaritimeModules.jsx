import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/MaritimeModules.css";

gsap.registerPlugin(ScrollTrigger);

export default function MaritimeStakeholderCards() {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);
  const lottieRefs = useRef([]);

  const modules = [
    {
      id: 1,
      title: "Ship Managers",
      accent: "ship",
      animationLabel: "Ship manager operations animation",
      animationPath: "/lottie/Dashboardd.json",
      description:
        "Ship Managers need a single digital command center to monitor vessel health, operational performance, technical maintenance, safety compliance, and cost efficiency across the fleet. bring all critical decisions into one connected ERP workflow so teams can act faster with confidence.",
      points: [
        "Live fleet performance dashboards across vessels, routes, and operating cycles",
        "Planned vs reactive maintenance visibility with task scheduling and service history",
        "Compliance checkpoints for inspections, certifications, and technical documentation",
        "Operational cost trend tracking for fuel, services, spares, and voyage-linked expenses",
      ],
      kpiTitle: "Primary Outcome",
      kpiText:
        "Stronger fleet control, fewer delays, and more predictable technical planning.",
    },
    {
      id: 2,
      title: "Vendors & Suppliers",
      accent: "vendor",
      animationLabel: "Vendor maritime supply workflow animation",
      animationPath: "/lottie/venderdashboard.json",
      description:
        "Vendors and suppliers can use this module to handle maritime RFQs, quotations, order updates, and communication with greater speed and transparency. Instead of managing requests through scattered emails and calls, suppliers get a structured workflow that helps them respond quickly and improve conversion on high-value maritime opportunities.",
      points: [
        "Centralized RFQ feed with filters by vessel, category, urgency, and delivery window",
        "Faster quotation submission with itemized response structure and version tracking",
        "Order status updates with acknowledgement, dispatch, and delivery milestone visibility",
        "Stronger buyer communication through a single shared procurement interaction timeline",
      ],
      kpiTitle: "Primary Outcome",
      kpiText:
        "Faster RFQ response cycles and smoother order execution with maritime buyers.",
    },
    {
      id: 3,
      title: "Port Agents",
      accent: "port",
      animationLabel: "Port agent vessel coordination animation",
      animationPath: "/lottie/portdashboard.json",
      description:
        "Port Agents coordinate multiple moving parts during vessel calls including schedules, service requests, local documentation, and on-ground communication. This module helps agents manage each call digitally, reduce coordination friction, and keep all stakeholders aligned through real-time operational updates and document exchange.",
      points: [
        "Port call planning and vessel movement tracking with real-time operational context",
        "Digital documentation flow for clearances, service requests, and status updates",
        "Task coordination for local services, boarding support, and port-side execution teams",
        "Shared communication timeline to minimize missed updates and repetitive follow-ups",
      ],
      kpiTitle: "Primary Outcome",
      kpiText:
        "More reliable port call execution with better visibility for all involved teams.",
    },
    {
      id: 4,
      title: "Charterers & Operators",
      accent: "charter",
      animationLabel: "Chartering and voyage planning animation",
      animationPath: "/lottie/maintenance.json",
      description:
        "Charterers and vessel operators need transparency in voyage planning, execution milestones, and cross-party communication to avoid delays and commercial risk. This module connects operations data with planning workflows so teams can track progress, manage changes, and make informed voyage decisions without relying on disconnected updates.",
      points: [
        "Voyage planning support with operational milestones and dependency awareness",
        "Execution visibility across schedules, port activities, and service coordination steps",
        "Stakeholder collaboration layer for agent, vendor, and vessel-side communication",
        "Operational event tracking for quicker response when delays or changes occur",
      ],
      kpiTitle: "Primary Outcome",
      kpiText:
        "Better voyage planning decisions and improved operational predictability.",
    },
    {
      id: 5,
      title: "Crew & Managing Teams",
      accent: "crew",
      animationLabel: "Crew planning and manning workflow animation",
      animationPath: "/lottie/crewdashboard.json",
      description:
        "Crew and manning teams require a structured process for crew rotation, readiness checks, document validation, and deployment planning. This module gives HR, crewing, and operations teams a shared workspace where crew status, assignment timelines, and compliance-related readiness can be monitored without manual confusion.",
      points: [
        "Crew rotation planning with assignment timelines and replacement preparedness",
        "Document readiness tracking for passports, certificates, visas, and joining requirements",
        "Coordination workflows between crewing, operations, and onboard management teams",
        "Centralized crew status visibility to reduce last-minute deployment bottlenecks",
      ],
      kpiTitle: "Primary Outcome",
      kpiText:
        "Smoother crew deployment planning with fewer readiness-related delays.",
    },
    {
      id: 6,
      title: "Procurement & Purchasing Teams",
      accent: "procurement",
      animationLabel: "Procurement process automation animation",
      animationPath: "/lottie/purchasing.json",
      description:
        "Procurement teams manage a high volume of vessel requests, supplier quotes, approvals, and fulfilment timelines. This module helps standardize purchasing workflows, improve cost control, and build a more transparent approval chain so procurement decisions are faster, auditable, and aligned with operational urgency.",
      points: [
        "Requisition-to-order workflow management with approval routing and prioritization",
        "Supplier comparison support for pricing, availability, and response turnaround",
        "Purchase order tracking from issuance to delivery confirmation and closure",
        "Procurement history and spend visibility for stronger budgeting and negotiation decisions",
      ],
      kpiTitle: "Primary Outcome",
      kpiText:
        "Higher procurement efficiency with improved cost visibility and control.",
    },
    {
      id: 7,
      title: "Technical, Safety & Compliance Teams",
      accent: "compliance",
      animationLabel: "Safety compliance and audit readiness animation",
      animationPath: "/lottie/compliance.json",
      description:
        "Technical and compliance teams need traceable records, scheduled checks, and timely visibility into risk-sensitive tasks. This module supports inspection planning, documentation tracking, and compliance workflow follow-up so teams can stay audit-ready while maintaining operational continuity across vessels and shore teams.",
      points: [
        "Inspection and checklist scheduling for technical and safety-related processes",
        "Certification and document tracking with expiry awareness and follow-up workflows",
        "Issue logging and corrective action visibility with assigned accountability",
        "Audit readiness support through organized records and historical task traceability",
      ],
      kpiTitle: "Primary Outcome",
      kpiText:
        "Stronger compliance discipline with better visibility into safety-critical actions.",
    },
    {
      id: 8,
      title: "Management Reporting & Analytics",
      accent: "analytics",
      animationLabel: "Maritime analytics dashboard animation",
      animationPath: "/lottie/dashboard.json",
      description:
        "Leadership teams need reliable reports and operational intelligence to make decisions on performance, costs, turnaround time, procurement efficiency, and stakeholder responsiveness. This module transforms day-to-day operational activity into decision-grade dashboards and analytics views for management review and planning.",
      points: [
        "Role-based dashboards for operations, procurement, crewing, and executive leadership",
        "KPI trend analysis across fleet activity, request handling, service timelines, and spend",
        "Custom management reporting with export-ready summaries for internal reviews",
        "Data-backed decision support for planning improvements and operational optimization",
      ],
      kpiTitle: "Primary Outcome",
      kpiText:
        "Clear executive visibility into performance, risks, and improvement opportunities.",
    },
  ];

  useEffect(() => {
    const lottieInstances = [];

    // Lottie init
    lottieRefs.current.forEach((container, index) => {
      if (!container) return;
      const module = modules[index];
      if (!module) return;

      container.innerHTML = "";

      const anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: module.animationPath,
      });

      lottieInstances.push(anim);
    });

    // GSAP reveal animations
    const ctx = gsap.context(() => {
      gsap.set(".stakeholder-header-premium > *", {
        opacity: 0,
        y: 24,
      });

      gsap.to(".stakeholder-header-premium > *", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });

      rowRefs.current.forEach((row, idx) => {
        if (!row) return;

        const content = row.querySelector(".stakeholder-content-premium");
        const visual = row.querySelector(".stakeholder-visual-premium");
        const points = row.querySelectorAll(".stakeholder-points-premium li");
        const reverse = idx % 2 === 1;

        gsap.set([content, visual], {
          opacity: 0,
          y: 50,
        });

        gsap.set(points, {
          opacity: 0,
          x: reverse ? 18 : -18,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            end: "top 35%",
            toggleActions: "play none none none",
          },
        });

        tl.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
          .to(
            visual,
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            "-=0.55"
          )
          .to(
            points,
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.35"
          );
      });
    }, sectionRef);

    return () => {
      lottieInstances.forEach((i) => i.destroy());
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="stakeholder-section-premium"
      id="maritime-stakeholders"
      ref={sectionRef}
    >
      <div className="stakeholder-bg-grid" />
      <div className="stakeholder-bg-glow glow-a" />
      <div className="stakeholder-bg-glow glow-b" />

      <div className="stakeholder-header-premium">
        <span className="eyebrow-premium">Maritime ERP Stakeholder Modules</span>
        <h2>Built for Every Function in the Maritime Ecosystem</h2>
        <p>
          Euroasiann’s maritime ERP dashboard is not just a software interface —
          it is a collaborative operating layer for ship management, procurement,
          port coordination, chartering, compliance, and leadership reporting.
          Each module is designed around real stakeholder workflows
        </p>
      </div>

      <div className="stakeholder-flow-premium">
        {modules.map((item, index) => {
          const reverse = index % 2 === 1;

          return (
            <article
              key={item.id}
              className={`stakeholder-row-premium ${reverse ? "reverse" : ""}`}
              ref={(el) => (rowRefs.current[index] = el)}
            >
              {/* Text */}
              <div className="stakeholder-content-premium">
                <div className="content-topline">
                  <span className={`module-chip ${item.accent}`}>
                    Module {String(item.id).padStart(2, "0")}
                  </span>
                  <span className="module-line" />
                </div>

                <h3>{item.title}</h3>
                <p className="stakeholder-description-premium">
                  {item.description}
                </p>

                <ul className="stakeholder-points-premium">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className={`stakeholder-kpi-panel ${item.accent}`}>
                  <div className="kpi-label">{item.kpiTitle}</div>
                  <div className="kpi-value">{item.kpiText}</div>
                </div>
              </div>

              {/* Visual / Lottie */}
              <div className="stakeholder-visual-premium">
                <div className={`visual-shell-premium ${item.accent}`}>
                  <div className="mesh mesh-1" />
                  <div className="mesh mesh-2" />
                  <div className="mesh mesh-3" />

                  <div className="visual-header">
                    <span className="visual-dot" />
                    <span className="visual-dot" />
                    <span className="visual-dot" />
                    <p>{item.title} Dashboard View</p>
                  </div>

                  <div className="visual-stage">
                    <div
                      className="lottie-box-premium"
                      ref={(el) => (lottieRefs.current[index] = el)}
                      role="img"
                      aria-label={item.animationLabel}
                    />

                    {!item.animationPath && (
                      <div className="lottie-fallback-premium">
                        <div className="fallback-icon">⚓</div>
                        <h4>{item.title}</h4>
                        <p>
                          Add a Lottie JSON animation here to visually represent
                          this stakeholder workflow in the ERP dashboard.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="visual-footer">
                    <div className="signal-bar" />
                    <div className="signal-bar" />
                    <div className="signal-bar" />
                    <div className="signal-text">Live Operational Sync</div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}