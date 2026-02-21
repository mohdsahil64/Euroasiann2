import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import CardNav from "./components/CardNav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/404";
import Footer from "./components/Footer";
import Logo from "/logo1.png";
import Flash from "./components/FlashScreen";

const navItems = [
  {
    label: "Solutions",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Home", href: "/", ariaLabel: "Euroasiann Home" },
      { label: "QHSE", href: "/services", ariaLabel: "QHSE Solutions" },
      { label: "Crew Managed", href: "/services", ariaLabel: "Crew Management" },
      { label: "Procurement", href: "/services", ariaLabel: "Procurement" }
    ]
  },
  {
    label: "Services",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Vessels Managed", href: "/services", ariaLabel: "Vessels Management" },
      { label: "Global Ports Integrated", href: "/services", ariaLabel: "Global Ports" },
      { label: "Members Coordinated", href: "/services", ariaLabel: "Members Coordination" },
      { label: "Maintenance & Dry Dock", href: "/services", ariaLabel: "Maintenance Services" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", href: "mailto:info@euroasiann.com", ariaLabel: "Email us" },
      { label: "Twitter", href: "https://twitter.com/euroasiann", ariaLabel: "Twitter" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/euroasiann-group/", ariaLabel: "LinkedIn" }
    ]
  }
];

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const is404 =
    location.pathname !== "/" &&
    location.pathname !== "/contact" &&
    location.pathname !== "/services";

  const [showFlash, setShowFlash] = useState(isHome);

  useEffect(() => {
    if (!isHome) return; // ❌ only home page allowed

    const timer = setTimeout(() => {
      setShowFlash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isHome]);

  // 🔥 ONLY home page splash
  if (showFlash && isHome) {
    return <Flash />;
  }

  return (
    <>
      <CardNav
        logo={Logo}
        logoAlt="Euroasiann Group"
        items={[]}
        baseColor="transparent"
        menuColor="#ffffff"
        buttonBgColor="#fff"
        buttonTextColor="#000000"
        ease="back.out(1.7)"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!is404 && <Footer />}
    </>
  );
}