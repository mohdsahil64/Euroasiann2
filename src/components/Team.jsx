import { useEffect, useRef, useState } from "react";
import { Linkedin, Globe, ShieldCheck, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/Team.css";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const founderRef = useRef(null);
  const cardRefs = useRef([]);
  const [showMCA, setShowMCA] = useState(false);

  useEffect(() => {
    // Founder spotlight
    gsap.fromTo(
      founderRef.current,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: founderRef.current,
          start: "top 80%",
        },
      }
    );

    // Other cards
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="team-section">
      {/* HEADER */}
      <div className="team-header">
        <h2>Meet Our Leadership</h2>
        <p>
          Experienced leaders driving Euroasiann with maritime expertise,
          compliance discipline, and operational clarity.
        </p>

        {/* MCA Badge */}
        <button className="company-badge" onClick={() => setShowMCA(true)}>
          <ShieldCheck size={16} />
          Verified MCA Registration
        </button>
      </div>

      {/* CARDS */}
      <div className="team-cards">
        {/* Founder Spotlight */}
        <div className="team-card spotlight" ref={founderRef}>
          <div className="avatar">SP</div>
          <h3>Sravann Pabbaraju</h3>
          <span className="role">Founder</span>
          <p className="bio">
            Maritime professional with 10+ years of experience in global
            shipping operations, fleet management, and ERP-driven workflows.
          </p>

          <div className="team-links">
            <a href="#"><Linkedin size={18} /></a>
            <a href="https://www.euroasianngroup.com/"><Globe size={18} /></a>
          </div>
        </div>

        {/* Co-Founder */}
        <div
          className="team-card"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="avatar">SK</div>
          <h3>Sreenu Kambala</h3>
          <span className="role">Co-Founder</span>
          <p className="bio">
            Leads administration and internal governance, ensuring smooth
            execution and regulatory compliance across the organization.
          </p>

          <div className="team-links">
            <a href="#"><Linkedin size={18} /></a>
            <a href="https://www.euroasianngroup.com/"><Globe size={18} /></a>
          </div>
        </div>
      </div>

      {/* MCA MODAL */}
      {showMCA && (
        <div className="mca-overlay" onClick={() => setShowMCA(false)}>
          <div className="mca-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowMCA(false)}>
              <X size={18} />
            </button>

            <h4>Company Registration Details</h4>
            <p>
              <strong>CIN:</strong> U33121TS2024PTC190815
            </p>
            <p>
              <strong>Status:</strong> Active
            </p>
            <p>
              <strong>Registered Under:</strong> Ministry of Corporate Affairs
            </p>
            <p className="note">
              Verified as per public MCA records.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
