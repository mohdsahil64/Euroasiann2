import { Star } from "lucide-react";
import "../styles/Mini.css";

export default function TrustedBy() {
  return (
    <div className="trusted-by">
      <div className="trusted-left">
        <span className="trusted-label">Trusted by</span>
        <strong>500+ Companies</strong>

        <div className="trusted-rating">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={14} fill="#fbbf24" stroke="#fbbf24" />
          ))}
          <span className="rating-text">4.9/5 rating</span>
        </div>
      </div>

      {/* Replace src with your own PNG */}
      <div className="trusted-logo">
        <img src="../assets/trust.png" alt="euroasiann company logo" />
      </div>
    </div>
  );
}
