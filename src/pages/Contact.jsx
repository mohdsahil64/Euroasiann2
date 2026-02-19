import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import {
  User,
  Mail,
  Phone,
  Building2,
  Users,
  Briefcase,
  MessageSquare,
  Send
} from "lucide-react";
import FloatingLines from "../components/FloatingLines";
import "../styles/Contact.css";

export default function Contact() {
  const lottieRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/contact.json" // public folder
    });

    return () => anim.destroy();
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-floating">
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <h2>
            Talk to our <span>Euroasiann</span> ERP Specialists
          </h2>

          <p>
            Share your requirements and our experts will contact you shortly.
          </p>

          <form className="contact-form">
            <div className="form-grid">
              <div className="input-group">
                <User size={18} />
                <input type="text" placeholder="Full name" />
              </div>

              <div className="input-group">
                <Mail size={18} />
                <input type="email" placeholder="Work email" />
              </div>

              <div className="input-group">
                <Phone size={18} />
                <input type="tel" placeholder="Mobile number" />
              </div>

              <div className="input-group">
                <Building2 size={18} />
                <input type="text" placeholder="Company name" />
              </div>

              <div className="input-group">
                <Users size={18} />
                <select>
                  <option value="">Company size</option>
                  <option>1–10 employees</option>
                  <option>11–50 employees</option>
                  <option>51–200 employees</option>
                  <option>201–500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>

              <div className="input-group">
                <Briefcase size={18} />
                <select>
                  <option value="">Your position</option>
                  <option>Owner / Founder</option>
                  <option>Operations Manager</option>
                  <option>Fleet Manager</option>
                  <option>Technical Manager</option>
                  <option>Procurement</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="input-group textarea">
            
              <textarea placeholder="Tell us about your requirements (optional)" />
            </div>

            <button type="submit" className="submit-btn">
              <Send size={18} />
              Submit Request
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <div ref={lottieRef} className="contact-lottie" />
        </div>
      </div>
    </section>
  );
}
