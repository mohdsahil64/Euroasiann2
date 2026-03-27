import { Ship, Building2, Boxes, Landmark, ArrowRight } from "lucide-react";
import "../styles/ProcessFlowMap.css";

// ✅ Replace with your actual logo file
import companyLogo from "../assets/logo1.png";

export default function ProcessFlowMap() {
  return (
    <section className="pfm-diamond-section">
  

      <div className="pfm-diamond-stage">
        {/* CONNECTOR SVG */}
        <svg
          className="pfm-diamond-svg"
          viewBox="0 0 1200 760"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* top to center */}
          <path className="pfm-diamond-line" d="M600 150 L600 300" />
          {/* left to center */}
          <path className="pfm-diamond-line" d="M285 380 L470 380" />
          {/* right to center */}
          <path className="pfm-diamond-line" d="M915 380 L730 380" />
          {/* bottom to center */}
          <path className="pfm-diamond-line" d="M600 610 L600 460" />
        </svg>

        {/* MOVING PULSES */}
        <span className="pfm-diamond-pulse pulse-top" />
        <span className="pfm-diamond-pulse pulse-left" />
        <span className="pfm-diamond-pulse pulse-right" />
        <span className="pfm-diamond-pulse pulse-bottom" />

        {/* TOP */}
        <div className="pfm-diamond-node node-top">
          <div className="pfm-diamond-icon">
            <Building2 size={20} />
          </div>
          <h4>Port Agents</h4>
          <p>
Port Agents coordinate multiple moving parts during vessels.
          </p>
          <div className="pfm-diamond-foot">
            <span>Approval Layer</span>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* LEFT */}
        <div className="pfm-diamond-node node-left">
          <div className="pfm-diamond-icon">
            <Ship size={20} />
          </div>
          <h4>Ship Managers</h4>
          <p>
            Ship Managers need a single digital command center to monitor vessel health, operational performance
          </p>
          <div className="pfm-diamond-foot">
            <span>Onboard Input</span>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* CENTER */}
        <div className="pfm-diamond-core">

          <div className="pfm-diamond-core-logo">
            <img src={companyLogo} alt="Euroasiann Logo" />
          </div>
        </div>


        {/* RIGHT */}
        <div className="pfm-diamond-node node-right">
          <div className="pfm-diamond-icon">
            <Boxes size={20} />
          </div>
          <h4>Vendors & Suppliers</h4>
          <p>
            Vendors and suppliers can use this module to handle maritime RFQs, quotations, order updates.
          </p>
          <div className="pfm-diamond-foot">
            <span>Fulfilment</span>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pfm-diamond-node node-bottom">
          <div className="pfm-diamond-icon">
            <Landmark size={20} />
          </div>
          <h4>Bank / Ledger</h4>
          <p>
            Enable a structured payment flow for crew-related financial activity.
          </p>
          <div className="pfm-diamond-foot">
            <span>Financial Close</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}