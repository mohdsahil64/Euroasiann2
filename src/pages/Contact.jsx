import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
  Users,
  Briefcase,
  Send,
  CheckCircle2,
  AlertCircle,
  X
} from "lucide-react";
import FloatingLines from "../components/FloatingLines";
import "../styles/Contact.css";

export default function Contact() {
  const lottieRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    position: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ fullName: "", email: "", phone: "", companyName: "", companySize: "", position: "", message: "" });
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.details || data.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMsg("Network error. Make sure the backend server is running on port 5001.");
    } finally {
      setIsLoading(false);
    }
  };

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

      <AnimatePresence>
        {isSubmitted && (
          <div className="contact-modal-overlay">
            <motion.div 
              className="contact-modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="modal-close-btn" onClick={resetForm}>
                <X size={24} />
              </button>
              
              <div className="modal-icon-wrap">
                <div className="success-pulse"></div>
                <CheckCircle2 size={64} color="#1ea7ff" />
              </div>
              
              <h2>Submission Success!</h2>
              <p>
                Thank you, <strong>{formData.fullName}</strong>. Your request for the Euroasiann ERP demonstration has been received. 
                Our specialists will get in touch with you at <strong>{formData.email}</strong> shortly.
              </p>
              
              <button className="modal-action-btn" onClick={resetForm}>
                Great, Thank You
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <h2>
            Talk to our <span>Euroasiann</span> ERP Specialists
          </h2>

          <p>
            Share your requirements and our experts will contact you shortly.
          </p>

          {errorMsg && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255, 60, 60, 0.1)", color: "#ff4d4f", padding: "12px", borderRadius: "8px", marginBottom: "20px" }}>
              <AlertCircle size={18} />
              <span>{errorMsg}</span>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="input-group">
                <User size={18} />
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full name *" required />
              </div>

                  <div className="input-group">
                    <Mail size={18} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Work email *" required />
                  </div>

                  <div className="input-group">
                    <Phone size={18} />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile number *" required />
                  </div>

                  <div className="input-group">
                    <Building2 size={18} />
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company name *" required />
                  </div>

                  <div className="input-group">
                    <Users size={18} />
                    <select name="companySize" value={formData.companySize} onChange={handleChange} required>
                      <option value="" disabled>Company size *</option>
                      <option>1–10 employees</option>
                      <option>11–50 employees</option>
                      <option>51–200 employees</option>
                      <option>201–500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <Briefcase size={18} />
                    <select name="position" value={formData.position} onChange={handleChange} required>
                      <option value="" disabled>Your position *</option>
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
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements (optional)" />
                </div>

                <button type="submit" className="submit-btn" disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? "not-allowed" : "pointer" }}>
                  <Send size={18} />
                  {isLoading ? "Submitting..." : "Submit Request"}
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
