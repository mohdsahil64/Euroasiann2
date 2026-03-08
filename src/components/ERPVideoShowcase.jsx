import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import {
  Ship,
  Users,
  PackageSearch,
  ShieldCheck,
  BadgeCheck,
  ArrowLeft,
  ArrowRight,
  MonitorPlay,
} from "lucide-react";
import "../styles/ERPVideoShowcase.css";

const vesselVideo =
  "https://res.cloudinary.com/depjmtq3g/video/upload/v1772961728/vessel_o74aad.mp4";
const crewVideo =
  "https://res.cloudinary.com/depjmtq3g/video/upload/v1772961598/crew_gjs5al.mp4";
const rfqVideo =
  "https://res.cloudinary.com/depjmtq3g/video/upload/v1772961601/rfq_pn1y5k.mp4";
const complianceVideo =
  "https://res.cloudinary.com/depjmtq3g/video/upload/v1772961598/certifications_iw4n3r.mp4";
const certificationsVideo =
  "https://res.cloudinary.com/depjmtq3g/video/upload/v1772961598/certifications_iw4n3r.mp4";

const SLIDE_DURATION = 8;

export default function ERPVideoShowcase() {
  const slides = useMemo(
    () => [
      {
        title: "Vessel Management",
        desc: "Track voyage status, vessel KPIs, documents, and operational visibility in one place.",
        video: vesselVideo,
        icon: Ship,
        short: "Vessel",
      },
      {
        title: "Crew Management",
        desc: "Manage crew profiles, schedules, certifications, and onboard readiness with full control.",
        video: crewVideo,
        icon: Users,
        short: "Crew",
      },
      {
        title: "RFQ & Procurement",
        desc: "Automate RFQs, compare vendor quotes, approvals, and purchase orders seamlessly.",
        video: rfqVideo,
        icon: PackageSearch,
        short: "Procurement",
      },
      {
        title: "Compliance & Audits",
        desc: "Stay audit-ready with smart compliance tracking, logs, and structured reporting.",
        video: complianceVideo,
        icon: ShieldCheck,
        short: "Compliance",
      },
      {
        title: "Certificates & Documentation",
        desc: "Centralize vessel and crew certificates with expiry alerts and secure storage.",
        video: certificationsVideo,
        icon: BadgeCheck,
        short: "Certificates",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const textRef = useRef(null);
  const videoShellRef = useRef(null);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const timerRef = useRef(null);
  const progressTweenRef = useRef(null);
  const animTlRef = useRef(null);

  const clearAutoTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const killProgressTween = () => {
    if (progressTweenRef.current) {
      progressTweenRef.current.kill();
      progressTweenRef.current = null;
    }
  };

  const scheduleNext = () => {
    clearAutoTimer();
    timerRef.current = setTimeout(() => {
      setActive((p) => (p + 1) % slides.length);
    }, SLIDE_DURATION * 1000);
  };

  const playActiveVideo = async () => {
    const vid = videoRef.current;
    if (!vid) return;

    try {
      vid.pause();
      vid.currentTime = 0;
      await vid.play();
    } catch {
      // autoplay block ignore
    }
  };

  const runProgress = () => {
    killProgressTween();
    gsap.set(progressBarRef.current, {
      transformOrigin: "left center",
      scaleX: 0,
    });

    progressTweenRef.current = gsap.to(progressBarRef.current, {
      scaleX: 1,
      duration: SLIDE_DURATION,
      ease: "none",
    });
  };

  const runTransition = () => {
    animTlRef.current?.kill();

    const tl = gsap.timeline();
    animTlRef.current = tl;

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }
    ).fromTo(
      videoShellRef.current,
      { opacity: 0, y: 16, scale: 0.988 },
      { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: "power3.out" },
      "-=0.35"
    );
  };

  useEffect(() => {
    playActiveVideo();
    runTransition();
    runProgress();
    scheduleNext();

    return () => {
      clearAutoTimer();
      killProgressTween();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    return () => {
      clearAutoTimer();
      killProgressTween();
      animTlRef.current?.kill();
    };
  }, []);

  const goNext = () => setActive((p) => (p + 1) % slides.length);
  const goPrev = () => setActive((p) => (p - 1 + slides.length) % slides.length);

  const onHover = (pause) => {
    if (pause) {
      clearAutoTimer();
      progressTweenRef.current?.pause();
    } else {
      progressTweenRef.current?.play();
      scheduleNext();
    }
  };

  const ActiveIcon = slides[active].icon;

  return (
    <section className="evs2-section">
      <div className="evs2-container">
        {/* LEFT */}
        <div className="evs2-left" ref={textRef}>
          <div className="evs2-eyebrow-row">
            <div className="evs2-eyebrow">
              <span className="evs2-eyebrow-icon">
                <MonitorPlay size={16} />
              </span>
              PRODUCT WALKTHROUGH
            </div>

            <div className="evs2-counter">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>
          </div>

          <h2 className="evs2-title">{slides[active].title}</h2>
          <p className="evs2-desc">{slides[active].desc}</p>

          <div className="evs2-controls">
            <button className="evs2-btn" onClick={goPrev}>
              <ArrowLeft size={16} />
              Previous
            </button>

            <button className="evs2-btn primary" onClick={goNext}>
              Next
              <ArrowRight size={16} />
            </button>
          </div>

          

          <div className="evs2-mini">
            {slides.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.title}
                  className={`evs2-pill ${i === active ? "active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className="evs2-pill-icon">
                    <Icon size={15} />
                  </span>
                  <span className="evs2-pill-text">{s.title}</span>
                  {i === active && <span className="evs2-pill-line" />}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="evs2-right"
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
          ref={videoShellRef}
        >
          <div className="evs2-video-shell">
            <div className="evs2-topbar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="evs2-topbar-label">Euroasiann Module Preview</span>
            </div>

            <div className="evs2-video-frame">
              <video
                ref={videoRef}
                className="evs2-video"
                src={slides[active].video}
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
              />

              <div className="evs2-video-overlay" />
              <div className="evs2-video-title">
                <ActiveIcon size={18} />
                {slides[active].short}
              </div>
            </div>

             

            <div className="evs2-bottom-strip">
              <span className="evs2-status-dot" />
              <span>Auto-playing module previews with synchronized title updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}