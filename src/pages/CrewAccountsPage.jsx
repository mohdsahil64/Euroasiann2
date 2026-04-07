import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users2,
  Landmark,
  ReceiptText,
  ClipboardCheck,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import "../styles/CrewAccountsPage.css";

// ✅ Replace file names with your actual asset names from src/assets
import crewHeroImg from "../assets/crews/crewbank.jpg";
import crewBankImg from "../assets/crews/crewbill.jpg";
import crewBillImg from "../assets/crews/crewhero.jpg";
import crewStreamlinedImg from "../assets/crews/crewbill.jpg";
import crewInsightsImg from "../assets/crews/crewanalyse.jpg";
import crewComplianceImg from "../assets/crews/crewcompliance.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function CrewAccountsPage() {
  const pageRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: 1,
      eyebrow: "CREW ACCOUNTS",
      title: "Bank Payments",
      icon: Landmark,
      image: crewHeroImg,
      description:
        "Enable a structured payment flow for crew-related financial activity from vessel submission to office validation and final banking action. This module helps finance and operations teams reduce delays, improve payment visibility, and maintain a clear chain of approval for every transaction that moves through the process.",
      bullets: [
        "Controlled payout flow from ship to office and onward to bank processing",
        "Approval visibility for each transaction stage and payment batch",
        "Clear audit history for dispute resolution and financial review",
        "Faster payment execution without fragmented manual follow-up",
      ],
    },
    {
      id: 2,
      eyebrow: "CREW ACCOUNTS",
      title: "MGA / Portage Bill",
      icon: ReceiptText,
      image: crewBankImg,
      description:
        "Maintain a real-time understanding of crew payroll positions, advances, onboard cash balances, and settlement records with a process that stays synchronized between vessel and shore office. This module improves confidence in calculations, keeps records aligned, and helps teams manage crew account movements with greater operational accuracy.",
      bullets: [
        "Continuous synchronization between ship entries and shore-side review",
        "Reliable visibility into payroll movement and cash-related activity",
        "Structured approval checkpoints for cleaner financial control",
        "Improved accuracy for day-to-day crew account reconciliation",
      ],
    },
    {
      id: 3,
      eyebrow: "CREW ACCOUNTS",
      title: "Streamlined Crew Processing",
      icon: ClipboardCheck,
      image: crewStreamlinedImg,
      description:
        "Bring consistency to onboarding, sign-on, settlements, allotments, and wage-linked crew transactions with one connected workflow. Instead of handling critical finance actions across scattered sheets and disconnected updates, this module keeps each step organized and attached to the correct crew profile and operational event.",
      bullets: [
        "Organized sign-on and sign-off transaction flow for crew accounts",
        "Linked records for allotments, bonuses, and onboard adjustments",
        "Reduced manual dependency through guided approval workflows",
        "Cleaner crew-linked history for finance, payroll, and review teams",
      ],
    },
    {
      id: 4,
      eyebrow: "CREW ACCOUNTS",
      title: "Insightful Reporting",
      icon: BarChart3,
      image: crewInsightsImg,
      description:
        "Transform raw crew account activity into decision-ready visibility for finance and management teams. Track recurring cost patterns, monitor payroll-related trends, and produce summaries that support better planning, faster reviews, and more accurate operational forecasting across fleets and departments.",
      bullets: [
        "Dashboard-style visibility into payroll and crew cost behaviour",
        "Trend monitoring across advances, settlements, and payment activity",
        "Export-ready summaries for management and internal finance reviews",
        "Stronger forecasting support through better transaction consistency",
      ],
    },
    {
      id: 5,
      eyebrow: "CREW ACCOUNTS",
      title: "Compliance & Financial Control",
      icon: ShieldCheck,
      image: crewComplianceImg,
      description:
        "Support accountable operations with clear approval structures, access control, and traceable financial history across crew accounts. This module helps teams stay audit-ready, reduce compliance risks, and ensure that every critical financial action can be reviewed with context and confidence when needed.",
      bullets: [
        "Action-level traceability for audits and internal accountability",
        "Access control for sensitive crew finance processes and approvals",
        "Organized documentation support for review and compliance checks",
        "Reduced risk through standardized handling of financial workflows",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".crew-hero-left > *", { opacity: 0, y: 22 });
      gsap.set(".crew-hero-right", { opacity: 0, x: 24 });

      gsap.to(".crew-hero-left > *", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".crew-hero-right", {
        opacity: 1,
        x: 0,
        duration: 0.95,
        ease: "power3.out",
        delay: 0.15,
      });

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const content = section.querySelector(".crew-section-content");
        const visual = section.querySelector(".crew-section-visual");
        const listItems = section.querySelectorAll(".crew-feature-points li");
        const isReverse = index % 2 === 1;

        gsap.set(content, { opacity: 0, x: isReverse ? 30 : -30 });
        gsap.set(visual, { opacity: 0, x: isReverse ? -30 : 30, y: 16 });
        gsap.set(listItems, { opacity: 0, y: 10 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
        });

        tl.to(content, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        })
          .to(
            visual,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .to(
            listItems,
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.35"
          );
      });
    }, pageRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="crew-accounts-page" ref={pageRef}>
      <section className="crew-hero">
        <div className="crew-hero-left">
          <div className="crew-page-tag">
            <span className="crew-tag-icon">
              <Users2 size={18} />
            </span>
            <span>Crew Accounts</span>
          </div>

          <h1 className="crew-main-title">Crew Accounts</h1>

          <p className="crew-main-description">
            Manage crew financial workflows through a single connected experience
            that links shipboard activity, shore-side validation, and financial
            control. Improve payment clarity, reduce manual reconciliation, and
            create a more structured operational flow for payroll-linked crew
            account management.
          </p>

          <div className="crew-hero-actions">
            <button onClick={() => window.location.href = "/contact"} className="crew-demo-btn">Request a Demo</button>
            <button onClick={() => window.location.href = "/services"} className="crew-outline-btn">
              Explore Process <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="crew-hero-right">
          <div className="crew-hero-image-wrap">
            <img src={crewBillImg} alt="Crew Accounts Hero" />
          </div>
        </div>
      </section>

      <section className="crew-sections-wrap">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const reverse = index % 2 === 1;

          return (
            <article
              key={section.id}
              className={`crew-feature-section ${reverse ? "reverse" : ""}`}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <div className="crew-section-visual">
                <div className="crew-image-shell">
                  <img src={section.image} alt={section.title} />
                </div>
              </div>

              <div className="crew-section-content">
                <div className="crew-section-tag">
                  <span className="crew-tag-icon small">
                    <Icon size={17} />
                  </span>
                  <span>{section.eyebrow}</span>
                </div>

                <h2 className="crew-section-title">{section.title}</h2>

                <p className="crew-section-description">{section.description}</p>

                <ul className="crew-feature-points">
                  {section.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}