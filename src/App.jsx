import { Routes, Route } from "react-router-dom";
import CardNav from "./components/CardNav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Logo from "./assets/logo.png";

const navItems = [
  {
    label: "Solutions",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "QHSE", ariaLabel: "About Company" },
      { label: "Crew Managed", ariaLabel: "About Careers" },
      { label: "Procurement", ariaLabel: "About Careers" },
      { label: "Inspection", ariaLabel: "About Careers" }
      
  
    ]
  },
  {
    label: "Services",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Vessels Managed", ariaLabel: "Featured Projects" },
      { label: "Global Ports Integrated", ariaLabel: "Project Case Studies" },
      { label: "Members Coordinated", ariaLabel: "Project Case Studies" },
      { label: "Maintenance & Dry Dock", ariaLabel: "Project Case Studies" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", ariaLabel: "Email us" },
      { label: "Twitter", ariaLabel: "Twitter" },
      { label: "LinkedIn", ariaLabel: "LinkedIn" }
    ]
  }
];

export default function App() {
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
        </Routes>
        <Footer />
      </div>
    </>
  );
}
