import "../styles/Search.css";
import { useEffect, useRef } from "react";

export default function SearchVisibilityVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // 👈 slow motion
    }
  }, []);

  return (
    <section className="search-video-section">
      <div className="search-video-grid">
        <div className="search-video-content">
          <h2>
            <span> Euroasiann Maritime ERP ‎ ‎ ‎ ‎ ‎ ‎ </span> A Top-Ranked Industry Choice
          </h2>
          <p>
            When businesses search for the best maritime ERP solutions,
            Euroasiann consistently stands out—trusted for fleet, crew,
            compliance, and operational management worldwide.
          </p>
        </div>

        <div className="search-video-wrapper">
          <video
            ref={videoRef}
            className="search-video"
            src="https://res.cloudinary.com/depjmtq3g/video/upload/v1772961728/Search_wmtjcv.webm"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}