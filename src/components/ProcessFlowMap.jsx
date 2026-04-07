import { Ship, Building2, Boxes, Landmark, ArrowRight } from "lucide-react";
import "../styles/ProcessFlowMap.css";

import companyLogo from "../assets/logo1.png";

function handlePdfDownload(pdfPath, e) {
  e.preventDefault();
  fetch(pdfPath, { method: "HEAD" })
    .then((res) => {
      if (res.ok) {
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      // silently do nothing if PDF not found
    })
    .catch(() => {
      // silently do nothing on network error
    });
}

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
          {/* top node bottom ~220px → core top ~330px */}
          <path className="pfm-diamond-line" d="M600 220 L600 330" />
          {/* left to center */}
          <path className="pfm-diamond-line" d="M285 380 L470 380" />
          {/* right to center */}
          <path className="pfm-diamond-line" d="M915 380 L730 380" />
          {/* core bottom ~430px → bottom node top ~520px */}
          <path className="pfm-diamond-line" d="M600 430 L600 520" />
        </svg>

        {/* MOVING PULSES — blue */}
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
          <p>Port Agents coordinate multiple moving parts during vessels.</p>
          <a
            className="pfm-diamond-foot"
            href="/pdfs/port-agents.pdf"
            onClick={(e) => handlePdfDownload("/pdfs/port-agents.pdf", e)}
          >
            <span>Approval Layer</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* LEFT */}
        <div className="pfm-diamond-node node-left">
          <div className="pfm-diamond-icon">
            <Ship size={20} />
          </div>
          <h4>Ship Managers</h4>
          <p>Ship Managers need a single digital command center to monitor vessel health, operational performance.</p>
          <a
            className="pfm-diamond-foot"
            href="/pdfs/ship-managers.pdf"
            onClick={(e) => handlePdfDownload("/pdfs/ship-managers.pdf", e)}
          >
            <span>Onboard Input</span>
            <ArrowRight size={14} />
          </a>
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
          <h4>Vendors &amp; Suppliers</h4>
          <p>Vendors and suppliers can use this module to handle maritime RFQs.</p>
          <a
            className="pfm-diamond-foot"
            href="/pdfs/vendors-suppliers.pdf"
            onClick={(e) => handlePdfDownload("/pdfs/vendors-suppliers.pdf", e)}
          >
            <span>Fulfilment</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* BOTTOM — Coming Soon */}
        <div className="pfm-diamond-node node-bottom">
          <div className="pfm-node-top-row">
            <div className="pfm-diamond-icon">
              <Landmark size={20} />
            </div>
            <span className="pfm-coming-soon">Coming Soon</span>
          </div>
          <h4>Bank / Ledger</h4>
          <p>Enable a structured payment flow for crew-related financial activity.</p>
          <div className="pfm-diamond-foot pfm-foot-disabled">
            <span>Financial Close</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}