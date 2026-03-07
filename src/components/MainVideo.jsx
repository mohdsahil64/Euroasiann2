
import { useEffect, useRef, useState } from "react";
import {
  MonitorPlay,
  Volume2,
  VolumeX,
  Play,
  Pause,
  BadgeCheck,
  BriefcaseBusiness,
  Layers3,
  Workflow,
} from "lucide-react";
import "../styles/MainVideo.css";

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {
      setIsPlaying(false);
    });
  }, []);

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="video-showcase-section">
      <div className="video-showcase-wrap">
        {/* Left content */}
        <div className="video-showcase-content">
          <div className="video-badge">
            <span className="video-badge-icon">
              <MonitorPlay size={17} />
            </span>
            <span>Company Walkthrough</span>
          </div>

          <h2>See Euroasiann in Action</h2>

          <p>
            Watch a quick overview of Euroasiann, our services, and the workflow
            behind our maritime ERP solutions.
          </p>

          <div className="video-mini-points">
            <div className="video-mini-point">
              <BriefcaseBusiness size={16} />
              <span>Company Overview</span>
            </div>

            <div className="video-mini-point">
              <Layers3 size={16} />
              <span>Core Services</span>
            </div>

            <div className="video-mini-point">
              <Workflow size={16} />
              <span>Workflow Showcase</span>
            </div>
          </div>

          <div className="video-actions">
            <button className="video-primary-btn" onClick={togglePlay}>
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? "Pause Video" : "Play Video"}
            </button>

            <button className="video-secondary-btn" onClick={toggleMute}>
              {isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
              {isMuted ? "Enable Sound" : "Mute Sound"}
            </button>
          </div>

          <div className="video-note">
            <BadgeCheck size={15} />
            <span>Autoplay preview starts muted for the best browser support.</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="video-showcase-visual">
          <div className="laptop-shell">
            <div className="laptop-topbar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <div className="topbar-label">Euroasiann Walkthrough</div>
            </div>

            <div className="laptop-screen">
              <video
                ref={videoRef}
                className="showcase-video"
                autoPlay
                muted
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/mainvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="video-overlay-glow" />

              <div className="floating-tag tag-1">Maritime ERP</div>
              <div className="floating-tag tag-2">Company Overview</div>
             
            </div>

            <div className="laptop-base" />
          </div>
        </div>
      </div>
    </section>
  );
}