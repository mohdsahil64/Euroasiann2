import { useEffect, useRef } from "react";
import "../styles/Contact.css";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/Seo";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

  <SEO
        title="Contact Euroasian Maritime ERP | Request Demo & Consultation"
        description="Contact Euroasian Maritime ERP to request a demo, schedule a consultation, or learn how our platform can optimize your shipping operations."
      />

  const lottieRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {

    /* LOTTIE LOAD */

    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/contact.json",
    });

    /* GSAP ANIMATION */

    gsap.from(".contact-form", {
      x: -80,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(".contact-lottie", {
      x: 80,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    return () => anim.destroy();

  }, []);

  return (
    <section className="contact-page" ref={sectionRef}>

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-form">

          <span className="contact-tag">REQUEST A DISCUSSION</span>

          <h1>Talk to our Euroasiann ERP Specialists</h1>

          <p className="contact-note">
            Share your requirements and our experts will contact you shortly.
          </p>

          <form>

            <div className="form-row">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>

            <div className="form-row">
              <input placeholder="Company Name" />
              <input placeholder="Position" />
          
            </div>
            <div className="gmail">
            <input placehder="Business Email" />
            <textarea placeholder="Describe requirement"></textarea>
            </div>

            <button type="submit">Submit Request</button>

          </form>

        </div>

        {/* RIGHT */}

        <div className="contact-visual">
          <div ref={lottieRef} className="contact-lottie"></div>
        </div>

      </div>

    </section>
  );
}
