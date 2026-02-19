import { Ship, Radar, ArrowRight } from "lucide-react";
import "../styles/CTA2.css";

export default function MiniCTA() {
  return (
    <div className="mini-cta">
      <div className="mini-cta-icons">
        <Ship className="icon icon-1" size={22} />
        <Radar className="icon icon-2" size={22} />
      </div>

      <p className="mini-cta-text">
        Manage maritime operations smarter with <span>Euroasiann ERP</span>
      </p>

      <a href="/contact" className="mini-cta-btn">
        Get Demo <ArrowRight size={16} />
      </a>
    </div>
  );
}
