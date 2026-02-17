import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/ERPVideoShowcase.css";

const SLIDE_DURATION = 8; // seconds (5–10s as you want)

export default function ERPVideoShowcase() {
  const slides = useMemo(
    () => [
      {
        title: "Vessel Management",
        desc: "Track voyage status, vessel KPIs, documents, and operational visibility in one place.",
        video: "/src/assets/videos/vessel.mp4",
      },
      {
        title: "Crew Management",
        desc: "Manage crew profiles, schedules, certifications, and onboard readiness with full control.",
        video: "/src/assets/videos/crew.mp4",
      },
      {
        title: "RFQ & Procurement",
        desc: "Automate RFQs, compare vendor quotes, approvals, and purchase orders seamlessly.",
        video: "/src/assets/videos/rfq.mp4",
      },
      {
        title: "Compliance & Audits",
        desc: "Stay audit-ready with smart compliance tracking, logs, and structured reporting.",
        video: "/src/assets/videos/compliance.mp4",
      },
      {
        title: "Certificates & Documentation",
        desc: "Centralize vessel/crew certificates with expiry alerts and secure storage.",
        video: "/src/assets/videos/certifications.mp4",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const timerRef = useRef(null);
  const tlRef = useRef(null);

  const playActiveVideo = async () => {
    const vid = videoRef.current;
    if (!vid) return;

    try {
      vid.pause();
      vid.currentTime = 0;
      await vid.play();
    } catch {
      // autoplay block ho to user first interaction ke baad play ho jayega
    }
  };

  const animateIn = () => {
    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.fromTo(
      textRef.current,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    ).fromTo(
      videoRef.current,
      { y: 18, opacity: 0, scale: 0.985 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" },
      "-=0.35"
    );

    // progress bar animate (fills in SLIDE_DURATION sec)
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: SLIDE_DURATION, ease: "none" }
    );
  };

  const goNext = () => {
    setActive((p) => (p + 1) % slides.length);
  };

  useEffect(() => {
    // reset progress
    gsap.set(progressRef.current, { transformOrigin: "left center", scaleX: 0 });

    // play video
    playActiveVideo();

    // animate in
    animateIn();

    // auto-next
    clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, SLIDE_DURATION * 1000);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Pause on hover (premium feel)
  const onHover = (pause) => {
    if (pause) {
      videoRef.current?.pause();
      clearInterval(timerRef.current);
      tlRef.current?.pause();
      gsap.globalTimeline.pause();
    } else {
      playActiveVideo();
      tlRef.current?.play();
      gsap.globalTimeline.play();
      timerRef.current = setInterval(goNext, SLIDE_DURATION * 1000);
    }
  };

  return (
    <section className="evs-section" ref={wrapRef}>
      <div className="evs-container">
        <div className="evs-left" ref={textRef}>
          <div className="evs-eyebrow">PRODUCT WALKTHROUGH</div>

          <h2 className="evs-title">{slides[active].title}</h2>

          <p className="evs-desc">{slides[active].desc}</p>

                    <div className="evs-controls">
            <button className="evs-btn" onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}>
            ⇦ Previous
            </button>

            <button className="evs-btn primary" onClick={goNext}>
              Next ⇨
            </button>
          </div>

          <div className="evs-progress">
            <div className="evs-progress-bar" ref={progressRef} />
          </div>
           

          

          <div className="evs-mini">
            {slides.map((s, i) => (
              <button
                key={s.title}
                className={`evs-pill ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="evs-right" onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
          <div className="evs-laptop">
            <video
              ref={videoRef}
              className="evs-video"
              src={slides[active].video}
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
