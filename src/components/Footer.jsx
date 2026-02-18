import "../styles/Footer.css";
import logo from "../assets/logo.png";
import { FaLinkedinIn, FaPhone, FaEnvelope, } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
  
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <img src={logo} alt="Euroasiann" />
          <div className="footer-modules">
            <span>3rd Floor, A321, Master Mind 4, Royal Palms, Goregaon East, Mumbai-400065, India </span>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/euroasiann-group/ "><FaLinkedinIn /></a>
            <a href="tel:+49 15219712961"><FaPhone/></a>
            <a href="mailto:info@euroasiann.com"><FaEnvelope/></a>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/contact">Request a Demo</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <h4>Discover Our Modules</h4>
          <div className="footer-modules">
            <span>Accounting</span>
            <span>Chartering</span>
            <span>Crew</span>
            <span>Operations</span>
            <span>Inspection</span>
            <span>Procurement</span>
            <span>Quality</span>
            <span>Technical</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Euroasiann ERP. All rights reserved.
      </div>
    </footer>
  );
}
