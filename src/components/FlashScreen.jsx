import { useState, useEffect } from "react";

export default function FlashScreen() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    wrap: {
      position: "fixed",
      inset: 0,
      background: "#000", // Black background to match GIF
      zIndex: 999999,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    img: {
      width: isMobile ? "100%" : "85%",    // Mobile: Full, Laptop: Slightly smaller
      height: isMobile ? "100%" : "85%",   // Mobile: Full, Laptop: Slightly smaller
      objectFit: "contain",                // Consistent look
      display: "block"
    }
  };

  return (
    <div style={styles.wrap}>
      <img
        src="/gif/flash.gif"
        alt="Loading"
        style={styles.img}
      />
    </div>
  );
}