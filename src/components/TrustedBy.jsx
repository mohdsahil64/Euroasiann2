import "../styles/TrustedBy.css";
import { useState } from "react";
import WhyWeDifferent from "../components/Why";
import What from "../components/WhatWeDo";

import FleetCTA from "../components/FleetCTA";
import LiveFleetOcean from "../components/LiveFleetOcean";
import CardSwap, { Card } from "../components/CardSwap";
import Video from "../components/ERPVideoShowcase";
import logo1 from "../assets/trusted/logo1.png";
import logo2 from "../assets/trusted/logo2.png";
import logo3 from "../assets/trusted/logo3.png";
import logo4 from "../assets/trusted/logo4.png";
import logo5 from "../assets/trusted/logo5.png";
import logo6 from "../assets/trusted/logo6.jpg";
import logo7 from "../assets/trusted/logo7.jpg";
import logo8 from "../assets/trusted/logo8.jpg";
import logo9 from "../assets/trusted/logo9.jpg";

/* ✅ YOUR SCREENSHOTS (put these files in src/assets/screens/) */
import analyticsShot from "../assets/secreen/1.png";
import crewShot from "../assets/secreen/2.png";
import procurementShot from "../assets/secreen/3.png";

export default function TrustedBy() {
  const [speed] = useState(50);
  const handleAnimationComplete = () => {
    // Animation completed - production ready
  };

  const logos = [
    logo1, logo2, logo3, logo4,
    logo1, logo2, logo3, logo4,
    logo5, logo6, logo7, logo8, logo9,
  ];

  return (
    <section className="trusted">
      {/* ✅ Trusted logos (as you already had) */}
      <div className="trusted-slider">
        <div className="trusted-track">
          {logos.map((logo, index) => (
            <div className="trusted-logo" key={index}>
              <img src={logo} alt="Trusted Company" />
            </div>
          ))}
        </div>
      </div>
     
     <WhyWeDifferent />
     <FleetCTA />
      <Video />
       <What />
      <LiveFleetOcean />
       
     


  

      {/* ✅ CardSwap Showcase Section (NEW) */}
      <div
        style={{
          background: "#ffffff",
          padding: "90px 8%",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "60px",
            alignItems: "center"
          }}
        >
          {/* Left content */}
          <div>
            <h2 style={{ fontSize: "36px", color: "#1a123a", fontWeight: "700", marginTop: "-60px", marginBottom: "40px" }}>
              Real-Time Fleet & Crew Management
            </h2>
            <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
              Our ERP platform provides a centralized command dashboard for real-time monitoring of vessel performance, crew status, fuel usage, and voyage KPIs. With alert-driven anomaly tracking and role-based approvals, you can ensure operational efficiency and safety across your fleet.
            </p>
            
          </div>

          {/* Right CardSwap */}
          <div
            style={{
              position: "relative",
              minHeight: "520px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           
            <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={true}>
              <Card customClass="cs-card">
                <div className="cs-badge">
                  <span className="cs-badge-dot" />
                 Real-Time
                </div>
                <div className="cs-media">
                  <img src={analyticsShot} alt="Fleet & Vessel Analytics" />
                </div>
                <div className="cs-body">
                  <h3 className="cs-title">Fleet Operations Overview</h3>
                  <p className="cs-desc">
                    Monitor vessel performance, crew status, fuel usage,
                     and voyage KPIs in real-time from a centralized command dashboard.
                  </p>
                  <div className="cs-divider" />
                  <ul className="cs-points">
                    <li>Live performance snapshots</li>
                    <li>Alert-driven anomaly tracking</li>
                    
                  </ul>
                </div>
              </Card>

              <Card customClass="cs-card">
                <div className="cs-badge">
                  <span className="cs-badge-dot" />
                  Real-Time
                </div>
                <div className="cs-media">
                  <img src={crewShot} alt="Ship & Crew Management" />
                </div>
                <div className="cs-body">
                  <h3 className="cs-title">Ship & Crew Management</h3>
                  <p className="cs-desc">
                    Centralized crew schedules, certifications and vessel documents—fully controlled.
                  </p>
                  <div className="cs-divider" />
                  <ul className="cs-points">
                    <li>Certification & expiry tracking</li>
                    <li>Role-based approvals</li>
                
                  </ul>
                </div>
              </Card>

              <Card customClass="cs-card">
                <div className="cs-badge">
                  <span className="cs-badge-dot" />
                  Real-Time
                </div>
                <div className="cs-media">
                  <img src={procurementShot} alt="Spare Parts & Procurement" />
                </div>
                <div className="cs-body">
                  <h3 className="cs-title">Spare Parts & Procurement</h3>
                  <p className="cs-desc">
                    RFQs to vendor comparisons—procurement that’s fast, auditable, and efficient.
                  </p>
                  <div className="cs-divider" />
                  <ul className="cs-points">
    
                    <li>PO & delivery tracking</li>
                    <li>Vendor performance visibility</li>
                  </ul>

                  <style>{`
          @media (max-width: 900px) {
            .trusted > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
              text-align: center;
            }
          } `
          }
          </style>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>


    </section>
  );
}
