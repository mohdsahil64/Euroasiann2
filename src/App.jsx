import { Routes, Route, useLocation } from "react-router-dom";
import CardNav from "./components/CardNav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/404";
import Footer from "./components/Footer";
import Logo from "/logo1.png";

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
      { label: "LinkedIn", href: "https://linkedin.com/company/euroasiann", ariaLabel: "LinkedIn" }
    ]
  }
];

export default function App() {
  const location = useLocation();
  const is404 = location.pathname !== "/" && location.pathname !== "/contact" && location.pathname !== "/services";

  return (
    <>
      <CardNav
        logo={Logo}
        logoAlt="Euroasiann Group"
        items={navItems}
        baseColor="transparent"
        menuColor="#ffffff"
        buttonBgColor="#fff"
        buttonTextColor="#000000"
        ease="back.out(1.7)"
      />
      <div style={{ paddingTop: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!is404 && <Footer />}
      </div>
    </>
  );
}
