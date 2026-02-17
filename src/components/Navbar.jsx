import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";

import logo from "../assets/logo.png";
import "../styles/Header.css";
import {
  FiUsers,
  FiShield,
  FiShoppingCart,
  FiDollarSign,
  FiTool,
  
  FiClipboard,
  FiLayers
} from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  useEffect(() => {
  if (!window._solutions) return;

  const dropdown = window._solutions.querySelector(".solutions-dropdown");

  window._solutions.addEventListener("mouseenter", () => {
    gsap.fromTo(
      dropdown,
      { y: 12, scale: 0.96, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.6)"
      }
    );
  });

  window._solutions.addEventListener("mouseleave", () => {
    gsap.to(dropdown, {
      y: 10,
      opacity: 0,
      duration: 0.25,
      ease: "power2.out"
    });
  });
}, []);


  return (
    <>
      <header className={`header ${hidden ? "header--hidden" : ""}`}>
        <div className="header-pill">

          {/* LOGO */}
          <div className="logo">
            <img src={logo} alt="Euroasian" />
            <span className="logo-text"></span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/services">Services</a>
            <a href="/Features">Features</a>

            <div
  className="solutions-wrapper"
  ref={el => (window._solutions = el)}
>

              <span className="solutions-link">Solutions</span>

              <div className="solutions-dropdown">
                <div className="solutions-grid">

                  <a href="/contact" className="solution-item">
                    <FiShield /> <span>QHSE</span>
                  </a>

                  <a href="/contact" className="solution-item">
                    <FiUsers /> <span>Crew</span>
                  </a>

                  <a href="/contact" className="solution-item">
                    <FiShoppingCart /> <span>Procurement</span>
                  </a>

                  <a href="/contact" className="solution-item">
                    <FiDollarSign /> <span>Commercial</span>
                  </a>

                  <a href="/contact" className="solution-item">
                    <FiClipboard /> <span>Inspection</span>
                  </a>

                  <a href="/contact" className="solution-item">
                    <FiTool /> <span>Technical</span>
                  </a>

                  <a href="/contact" className="solution-item highlight">
                    <AiOutlineRobot /> <span>Computer Vision</span>
                  </a>

                </div>
              </div>
            </div>
          </nav>

          <a href="/contact" className="cta-btn">Contact Us</a>

          {/* MOBILE TOGGLE */}
          <div className="menu-btn" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>
      </header>


    </>
  );
}
