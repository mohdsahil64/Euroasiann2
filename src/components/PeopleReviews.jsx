import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, BadgeCheck } from "lucide-react";
import "../styles/PeopleReviews.css";

import r32 from "../assets/review/32.jpg";
import r44 from "../assets/review/44.jpg";
import r46 from "../assets/review/46.jpg";
import r68 from "../assets/review/68.jpg";
import r52 from "../assets/review/52.jpg";
import r24 from "../assets/review/24.jpg";
import r71 from "../assets/review/71.jpg";
import r57 from "../assets/review/57.jpg";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "Daniel Foster",
    role: "Fleet Operations Director",
    image: r32,
    review:
      "Euroasiann ERP has made our vessel coordination far more transparent. Our operations team now tracks approvals, costs, and movement updates in one place instead of jumping between emails, spreadsheets, and disconnected reports.",
  },
  {
    id: 2,
    name: "Olivia Bennett",
    role: "Marine Finance Manager",
    image: r44,
    review:
      "What impressed us most is the clarity in transaction workflows. Crew accounts, settlements, and approval trails are much easier to verify now, and month-end reviews take significantly less time than before.",
  },
  {
    id: 3,
    name: "Marcus Allen",
    role: "Port Agency Coordinator",
    image: r46,
    review:
      "We needed better coordination between vessel, office, and port-side teams. Euroasiann helped us build a more structured process, especially for document readiness and operational follow-ups during tight port schedules.",
  },
  {
    id: 4,
    name: "Sophia Reed",
    role: "Procurement Lead",
    image: r68,
    review:
      "The ERP brought discipline into our purchasing and vendor communication process. Request handling, approvals, and tracking are much more organized, which gives our team faster turnaround and fewer missed actions.",
  },
  {
    id: 5,
    name: "James Carter",
    role: "Technical Superintendent",
    image: r52,
    review:
      "From technical visibility to maintenance-related coordination, the platform gives us cleaner oversight across our fleet. We can see task progress faster and resolve follow-ups before they become operational delays.",
  },
  {
    id: 6,
    name: "Emma Collins",
    role: "Crew Accounts Specialist",
    image: r24,
    review:
      "Our payroll and crew account process feels much more controlled now. The system gives us confidence because every key step is recorded properly and the approval structure is visible to the right teams.",
  },
  {
    id: 7,
    name: "Nathan Brooks",
    role: "Shipping Compliance Officer",
    image: r71,
    review:
      "Euroasiann improved our audit readiness by making records easier to access and review. The compliance side of operations is no longer dependent on scattered files, which has reduced risk in internal checks.",
  },
  {
    id: 8,
    name: "Grace Mitchell",
    role: "Chartering & Voyage Planner",
    image: r57,
    review:
      "We now have stronger visibility into voyage planning inputs, approvals, and operational updates. It has helped our commercial and operations teams collaborate better without losing track of critical milestones.",
  },
];

export default function PeopleReviews() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sliderWrapRef = useRef(null);
  const trackRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [cardStep, setCardStep] = useState(0);

  const extendedReviews = useMemo(() => {
    return [...reviews, ...reviews.slice(0, 4)];
  }, []);

  useEffect(() => {
    const updateStep = () => {
      if (!trackRef.current) return;
      const firstCard = trackRef.current.querySelector(".review-card");
      if (!firstCard) return;

      const cardStyles = window.getComputedStyle(firstCard);
      const gap =
        parseFloat(window.getComputedStyle(trackRef.current).columnGap || 0) ||
        parseFloat(window.getComputedStyle(trackRef.current).gap || 0) ||
        0;

      const width =
        firstCard.getBoundingClientRect().width +
        parseFloat(cardStyles.marginRight || 0) +
        gap;

      setCardStep(width);
    };

    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
      setEnableTransition(true);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (index >= reviews.length) {
      setEnableTransition(false);
      setIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reviews-header > *", { opacity: 0, y: 24 });
      gsap.set(".reviews-slider-shell", { opacity: 0, y: 28 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          end: "top 35%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".reviews-header > *", {
        opacity: 1,
        y: 0,
        duration: 0.95,
        stagger: 0.12,
        ease: "power3.out",
      }).to(
        ".reviews-slider-shell",
        {
          opacity: 1,
          y: 0,
          duration: 1.05,
          ease: "power3.out",
        },
        "-=0.45"
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="people-reviews-section" ref={sectionRef}>
      <div className="reviews-header" ref={headerRef}>
        <div className="reviews-kicker">
          <span className="reviews-kicker-icon">
            <BadgeCheck size={16} />
          </span>
          <span className="reviews-kicker-text">Trusted Clients</span>
        </div>

        <h2>Clients Say After Switching to <span>Euroasiann</span></h2>

        <p>
          Teams across fleet operations, finance, crew accounts, procurement,
          and compliance rely on Euroasiann ERP
        </p>
      </div>

      <div className="reviews-slider-shell" ref={sliderWrapRef}>
        <div className="reviews-soft-glow glow-left" />
        <div className="reviews-soft-glow glow-center" />
        <div className="reviews-soft-glow glow-right" />

        <div
          className="reviews-track"
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${index * cardStep}px)`,
            transition: enableTransition ? "transform 1.15s ease" : "none",
          }}
        >
          {extendedReviews.map((item, idx) => (
            <article className="review-card" key={`${item.id}-${idx}`}>
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <div className="review-quote-icon">
                <Quote size={18} />
              </div>

              <p className="review-text">“{item.review}”</p>

              <div className="review-user">
                <img src={item.image} alt={item.name} />
                <div className="review-user-info">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}