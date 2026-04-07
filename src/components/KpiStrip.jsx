import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ship, Users, FileText, MapPin } from "lucide-react";
import "../styles/KpiStrip.css";

gsap.registerPlugin(ScrollTrigger);

export default function KpiStrip() {
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const valueRefs = useRef([]);

  const stats = useMemo(
    () => [
      {
        id: 1,
        value: 0,
        suffix: "+",
        label: "Vessels Implemented",
        Icon: Ship,
      },
      {
        id: 2,
        value: 0,
        suffix: "+",
        label: "Global Clients Onboarded",
        Icon: Users,
      },
      {
        id: 3,
        value: 0,
        suffix: "+",
        label: "Global Resources",
        Icon: FileText,
      },
      {
        id: 4,
        value: 195,
        suffix: "+",
        label: "Countries Available",
        Icon: MapPin,
      },
    ],
    []
  );

  useEffect(() => {
    if (!wrapRef.current) return;

    // Reset to 0 on mount
    valueRefs.current.forEach((el) => {
      if (el) el.textContent = "0";
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Cards reveal (subtle)
    tl.fromTo(
      cardRefs.current.filter(Boolean),
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" }
    );

    // Count-up (smooth)
    stats.forEach((s, i) => {
      const el = valueRefs.current[i];
      if (!el) return;

      const counter = { val: 0 };

      tl.to(
        counter,
        {
          val: s.value,
          duration: 1.6, // smooth long
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = Math.floor(counter.val).toString();
          },
        },
        0.15 // start almost with reveal
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [stats]);

  return (
    <section className="kpi-strip" ref={wrapRef}>
      <div className="kpi-grid">
        {stats.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <div
              key={item.id}
              className="kpi-card"
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <div className="kpi-main">
                <div className="kpi-value">
                  <span
                    className="kpi-number"
                    ref={(el) => (valueRefs.current[idx] = el)}
                  >
                    0
                  </span>
                  <span className="kpi-suffix">{item.suffix}</span>
                </div>
                <div className="kpi-label">{item.label}</div>
              </div>

              {/* faint icon like screenshot */}
              <div className="kpi-bg-icon" aria-hidden="true">
                <Icon size={72} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}