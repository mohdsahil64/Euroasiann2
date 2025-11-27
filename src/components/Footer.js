import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Euroasiann Group</h3>
            <p className="footer-description">
              Global industrial sourcing, marine engineering, and technology services. 
              Connecting businesses worldwide since 1989.
            </p>
            <div className="footer-contact">
              <p>📧 info@euroasiann.com</p>
              <p>📞 +86-21-1234-5678</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-links">
              <li>
                <span className="footer-link">Global Sourcing</span>
              </li>
              <li>
                <span className="footer-link">Marine Spares</span>
              </li>
              <li>
                <span className="footer-link">Engineering Support</span>
              </li>
              <li>
                <span className="footer-link">International Logistics</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Legal</h4>
            <ul className="footer-links">
              <li>
                <span className="footer-link">Privacy Policy</span>
              </li>
              <li>
                <span className="footer-link">Terms of Service</span>
              </li>
              <li>
                <span className="footer-link">Cookie Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Euroasiann Group. All rights reserved.
            </p>
            <div className="footer-social">
              <span className="social-text">Follow us:</span>
              <div className="social-links">
                <span className="social-link" aria-label="LinkedIn">
                  💼
                </span>
                <span className="social-link" aria-label="Twitter">
                  🐦
                </span>
                <span className="social-link" aria-label="Facebook">
                  📘
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
