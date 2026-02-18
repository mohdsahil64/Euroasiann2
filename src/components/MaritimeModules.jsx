import { Ship, Box, MapPin, Users } from "lucide-react";
import "../styles/MaritimeModules.css";
export default function MaritimeStakeholderCards() {
  return (
    <section className="stakeholder-section">
      <div className="stakeholder-header">
        <h2>For Every Maritime Stakeholder</h2>
        <p>
          Euroasiann enables seamless collaboration across the maritime
          ecosystem with role-focused digital solutions.
        </p>
      </div>

      <div className="stakeholder-grid four">
        <div className="stakeholder-card">
          <div className="icon-box">
            <Ship size={26} />
          </div>
          <h3>Ship Managers</h3>
          <p>
            Full operational visibility across fleet performance, maintenance,
            and compliance from a single control layer.
          </p>
          <ul>
            <li>Fleet performance monitoring</li>
            <li>Maintenance & compliance</li>
            <li>Cost optimization insights</li>
          </ul>
        </div>

        <div className="stakeholder-card">
          <div className="icon-box">
            <Box size={26} />
          </div>
          <h3>Vendors</h3>
          <p>
            Direct access to maritime demand with faster RFQ handling and
            simplified order management.
          </p>
          <ul>
            <li>Live RFQ visibility</li>
            <li>Quick quotation workflow</li>
            <li>Order tracking dashboard</li>
          </ul>
        </div>

        <div className="stakeholder-card">
          <div className="icon-box">
            <MapPin size={26} />
          </div>
          <h3>Port Agents</h3>
          <p>
            Coordinate port calls, vessel movements, and documentation with
            real-time operational clarity.
          </p>
          <ul>
            <li>Vessel schedule management</li>
            <li>Digital document exchange</li>
            <li>Service coordination tools</li>
          </ul>
        </div>

        <div className="stakeholder-card">
          <div className="icon-box">
            <Users size={26} />
          </div>
          <h3>Charterers & Operators</h3>
          <p>
            Improve voyage planning, operational decisions, and collaboration
            across stakeholders.
          </p>
          <ul>
            <li>Voyage planning support</li>
            <li>Operational transparency</li>
            <li>Stakeholder collaboration</li>
          </ul>
        </div>
      </div>
    </section>
    
  );
}
