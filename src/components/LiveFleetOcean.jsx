import { useEffect, useRef } from "react";
import { Ship } from "lucide-react";
import gsap from "gsap";
import "../styles/LiveFleetOcean.css";

const vessels = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: `Vessel ${i + 1}`,
  speed: `${(11 + Math.random() * 6).toFixed(1)} kn`
}));

export default function LiveFleetOcean() {
  const shipsRef = useRef([]);

  useEffect(() => {
    shipsRef.current.forEach((ship) => {
      const move = () => {
        gsap.to(ship, {
          x: gsap.utils.random(40, 900),
          y: gsap.utils.random(40, 340),
          rotation: gsap.utils.random(-20, 20),
          duration: gsap.utils.random(18, 30), // slow movement
          ease: "sine.inOut",
          onComplete: move
        });
      };

      // start position
      gsap.set(ship, {
        x: gsap.utils.random(40, 900),
        y: gsap.utils.random(40, 340)
      });

      move();

      // ocean bobbing
      gsap.to(ship, {
        y: "+=6",
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  return (
    <section className="fleet-section">
      <div className="fleet-header">
        <h2>Euroasiann Live Fleet Monitoring</h2>
        <p>
          Euroasiann’s Live Fleet Monitoring platform delivers a real-time, visual overview of vessel movements across global waters.
           Track your fleet’s location, speed, and operational status with intuitive mapping and dynamic insights to optimize maritime operations. 
           Euroasiann helps shipping companies, operators, and managers improve situational awareness
        </p>
      </div>

      <div className="ocean-container">
        <div className="world-map" />

        {vessels.map((vessel, index) => (
          <div
            key={vessel.id}
            className="ship-wrapper"
            ref={(el) => (shipsRef.current[index] = el)}
          >
            <Ship size={26} />
            <span className="signal-dot" />

            <div className="tooltip">
              <strong>{vessel.name}</strong>
              <span>Speed: {vessel.speed}</span>
            </div>
          </div>
        ))}

        <div className="wave wave-1" />
        <div className="wave wave-2" />
      </div>

      <div className="fleet-footer">
        <strong>Live Fleet Status</strong>
        <span>10 vessels active</span>
      </div>
  
    </section>
  );
}
