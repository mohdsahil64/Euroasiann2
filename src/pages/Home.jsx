import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Maritime from "../components/MaritimeModules";
import SEO from "../components/Seo";

export default function Home() {
  return (
    <>
    <SEO
        title="Euroasian Maritime ERP | Fleet, Crew & Compliance Management Platform"
        description="Enterprise maritime ERP solution for fleet operations, crew management, compliance, procurement, maintenance and real-time shipping analytics."
      />
      <Hero />
      <TrustedBy />
       <Maritime />
    </>
  );
}
