import { ArrowRight, Radar, Ship } from "lucide-react";
import "../styles/FleetCTA.css";

export default function FleetCTA() {
  return (
    <section className="cta-wrap">
      <div className="cta-card">
        <div className="cta-left">
          <div className="cta-badge">
            <span className="dot" />
            Live Demo Available
          </div>

          <h2>
            Ready to monitor your fleet with <span>Euroasiann</span>?
          </h2>

          <p>
            Get a guided walkthrough of live fleet tracking, vessel insights,
            and operational dashboards—built for real maritime workflows.
          </p>

          <div className="cta-actions">
            <a href="/Contact" className="cta-btn">
              <span className="btn-icon">
                <Radar size={18} />
              </span>
              Request a Live Demo
              <ArrowRight className="arrow" size={18} />
            </a>

            <a href="/Features" className="cta-link">
              Explore Features
            </a>
          </div>
        </div>

        <div className="cta-right">
          <div className="icon-orbit">
            <div className="orbit-ring" />
            <div className="orbit-ring ring-2" />

            <div className="floating-icon icon-1">
              <Radar size={20} />
            </div>
            <div className="floating-icon icon-2">
              <Ship size={20} />
            </div>
            <div className="floating-icon icon-3">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
