import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function NotFound() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/404.json",
    });

    return () => anim.destroy();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        marginTop: "100px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        overflow: "hidden",
      }}
    />
  );
}
