import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPinned,
  BookText,
  Anchor,
  FileCheck2,
} from "lucide-react";
import "../styles/Crew.css";

// ✅ Replace with your actual asset file names
import portEntryImg from "../assets/crews/Port.jpg";
import electronicLogbookImg from "../assets/crews/logbooks.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function CrewExtraSections() {
  const wrapperRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: 1,
      eyebrow: "Port Guidance",
      title: "Real Time Port Entry Guide",
      icon: MapPinned,
      image: portEntryImg,
      description:
        "Give ship and shore teams a more reliable way to manage port entry readiness with a real-time guide that keeps documents, operational steps, and coordination checkpoints visible in one workflow. Instead of depending on fragmented updates, teams can align faster on what is pending, what is approved, and what needs action before arrival.",
      bullets: [
        "Clear visibility into pre-arrival tasks, approvals, and readiness stages",
        "Stronger coordination between vessel crew, port agents, and shore office teams",
        "Reduced delays caused by missing documents or disconnected handovers",
        "A structured entry workflow that improves operational clarity at every port call",
      ],
    },
    {
      id: 2,
      eyebrow: "Operational Recordkeeping",
      title: "Electronic Logbooks",
      icon: BookText,
      image: electronicLogbookImg,
      description:
        "Digitize operational recordkeeping with electronic logbooks that make it easier to capture events, maintain historical accuracy, and review vessel activity without relying on paper-heavy processes. Teams can improve consistency, reduce manual errors, and ensure that critical entries remain searchable, traceable, and ready for compliance review whenever required.",
      bullets: [
        "Digital capture of vessel activity with cleaner, more consistent records",
        "Searchable log history for faster internal review and operational follow-up",
        "Reduced manual paperwork and lower risk of incomplete record entries",
        "Improved traceability for inspections, audits, and performance analysis",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const content = section.querySelector(".crew-extra-content");
        const visual = section.querySelector(".crew-extra-visual");
        const listItems = section.querySelectorAll(".crew-extra-points li");
        const reverse = index % 2 === 1;

        gsap.set(content, {
          opacity: 0,
          x: reverse ? 38 : -38,
          y: 18,
        });

        gsap.set(visual, {
          opacity: 0,
          x: reverse ? -38 : 38,
          y: 18,
        });

        gsap.set(listItems, {
          opacity: 0,
          y: 14,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            end: "top 38%",
            toggleActions: "play none none none",
          },
        });

        tl.to(content, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.05,
          ease: "power3.out",
        })
          .to(
            visual,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1.15,
              ease: "power3.out",
            },
            "-=0.72"
          )
          .to(
            listItems,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.11,
              ease: "power2.out",
            },
            "-=0.55"
          );
      });
    }, wrapperRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="crew-extra-wrap" ref={wrapperRef}>
      {sections.map((section, index) => {
        const Icon = section.icon;
        const reverse = index % 2 === 1;

        return (
          <article
            key={section.id}
            className={`crew-extra-section ${reverse ? "reverse" : ""}`}
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <div className="crew-extra-visual">
              <div className="crew-extra-image-shell">
                <img src={section.image} alt={section.title} />
              </div>
            </div>

            <div className="crew-extra-content">
              <div className="crew-extra-tag">
                <span className="crew-extra-tag-icon">
                  <Icon size={17} />
                </span>
                <span>{section.eyebrow}</span>
              </div>

              <h2 className="crew-extra-title">{section.title}</h2>

              <p className="crew-extra-description">{section.description}</p>

              <ul className="crew-extra-points">
                {section.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className="crew-extra-note">
                <span className="crew-extra-note-icon">
                  {index === 0 ? <Anchor size={15} /> : <FileCheck2 size={15} />}
                </span>
                <span>
                  {index === 0
                    ? "Helps teams stay aligned before vessel arrival and port-side execution."
                    : "Supports cleaner documentation, long-term traceability, and easier compliance review."}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}