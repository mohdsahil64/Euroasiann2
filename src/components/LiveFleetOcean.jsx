import { useEffect, useMemo, useRef, useState } from "react";
import {
  Ship,
  Anchor,
  Navigation,
  Fuel,
  MapPinned,
  Timer,
  Activity,
  AlertTriangle,
  CircleAlert,
} from "lucide-react";
import gsap from "gsap";
import "../styles/LiveFleetOcean.css";

const routePairs = [
  { from: "Singapore", to: "Dubai" },
  { from: "Mumbai", to: "Rotterdam" },
  { from: "Busan", to: "Jeddah" },
  { from: "Shanghai", to: "Hamburg" },
  { from: "Colombo", to: "Athens" },
  { from: "Jakarta", to: "Suez" },
  { from: "Chennai", to: "Doha" },
  { from: "Kochi", to: "Antwerp" },
  { from: "Manila", to: "Istanbul" },
  { from: "Tokyo", to: "Port Said" },
];

const vesselTypes = [
  "Bulk Carrier",
  "Container Vessel",
  "Tanker",
  "Offshore Support Vessel",
  "General Cargo Vessel",
  "Ro-Ro Vessel",
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}
function randInt(min, max) {
  return Math.floor(rand(min, max + 1));
}

function computeAlert({ fuelValue, etaHours, speedValue }) {
  if (fuelValue <= 45) {
    return {
      level: "high",
      label: "Low Fuel Alert",
      reason: `Fuel reserve at ${fuelValue}%`,
    };
  }
  if (etaHours >= 78 || speedValue < 12.4) {
    return {
      level: "medium",
      label: "Delay Risk",
      reason:
        etaHours >= 78
          ? `Extended ETA (${etaHours} hrs)`
          : `Reduced speed (${speedValue.toFixed(1)} kn)`,
    };
  }
  return {
    level: "none",
    label: "Normal",
    reason: "Route and telemetry stable",
  };
}

function createVessels() {
  return Array.from({ length: 10 }).map((_, i) => {
    const rp = routePairs[i % routePairs.length];
    const speedValue = Number(rand(11.8, 16.4).toFixed(1)); // smoother realistic range
    const fuelValue = randInt(34, 92);
    const etaHours = randInt(14, 96);
    const alert = computeAlert({ fuelValue, etaHours, speedValue });

    return {
      id: i,
      name: `EA-${100 + i} ${
        [
          "Orion",
          "Astra",
          "Mariner",
          "Voyager",
          "Atlas",
          "Nexus",
          "Pacific",
          "Odyssey",
          "Titan",
          "Aurora",
        ][i]
      }`,
      type: vesselTypes[i % vesselTypes.length],
      from: rp.from,
      to: rp.to,
      status: ["Underway", "On Schedule", "Optimized Route", "Monitoring Active"][i % 4],
      speed: `${speedValue} kn`,
      speedValue,
      fuel: `${fuelValue}%`,
      fuelValue,
      eta: `${etaHours} hrs`,
      etaHours,
      heading: `${randInt(12, 358)}°`,
      draft: `${rand(7.5, 14.8).toFixed(1)} m`,
      size: 0.92 + (i % 3) * 0.08,
      priority: i % 5 === 0 ? "high" : i % 3 === 0 ? "medium" : "normal",
      alert,
      lastPort: ["Singapore", "Fujairah", "Colombo", "Muscat", "Busan"][i % 5],
      cargo: ["Dry Bulk", "Containers", "Crude", "Machinery", "Mixed Cargo"][i % 5],
    };
  });
}

export default function LiveFleetOcean() {
  const oceanRef = useRef(null);
  const shipsRef = useRef([]);
  const iconInnerRefs = useRef([]);
  const trailRefs = useRef([]);
  const routeLineRefs = useRef([]);
  const moveTweensRef = useRef([]);
  const pulseTimelineRef = useRef(null);
  const panelRef = useRef(null);

  const vessels = useMemo(() => createVessels(), []);
  const [selectedVessel, setSelectedVessel] = useState(vessels[0]);
  const [activeCount, setActiveCount] = useState(10);
  const [avgSpeed, setAvgSpeed] = useState(
    (vessels.reduce((a, v) => a + v.speedValue, 0) / vessels.length).toFixed(1)
  );
  const [lastUpdate, setLastUpdate] = useState("Just now");

  const alertCount = vessels.filter((v) => v.alert.level !== "none").length;

  // Side panel click animation
  useEffect(() => {
    if (!panelRef.current || !selectedVessel) return;

    const tl = gsap.timeline();
    tl.fromTo(
      panelRef.current,
      { x: 14, opacity: 0.72, scale: 0.992 },
      { x: 0, opacity: 1, scale: 1, duration: 0.42, ease: "power3.out" }
    );
    tl.fromTo(
      panelRef.current.querySelectorAll(".panel-anim"),
      { y: 8, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.03, duration: 0.22, ease: "power2.out" },
      "-=0.24"
    );

    return () => tl.kill();
  }, [selectedVessel]);

  useEffect(() => {
    const ocean = oceanRef.current;
    if (!ocean) return;

    let mounted = true;

    const cleanupTweens = () => {
      moveTweensRef.current.forEach((t) => t && t.kill && t.kill());
      moveTweensRef.current = [];
      gsap.killTweensOf(iconInnerRefs.current);
      gsap.killTweensOf(shipsRef.current);
      gsap.killTweensOf(trailRefs.current);
      gsap.killTweensOf(routeLineRefs.current);
    };

    const startAnimations = () => {
      cleanupTweens();

      const rect = ocean.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const padX = Math.max(34, Math.min(66, width * 0.05));
      const padY = Math.max(26, Math.min(48, height * 0.08));

      const laneYs = [
        height * 0.20,
        height * 0.34,
        height * 0.50,
        height * 0.66,
        height * 0.80,
      ];

      shipsRef.current.forEach((shipEl, index) => {
        if (!shipEl) return;

        const innerEl = iconInnerRefs.current[index];
        const trailEl = trailRefs.current[index];
        const lineEl = routeLineRefs.current[index];

        const lane = laneYs[index % laneYs.length];
        const dir = index % 2 === 0 ? 1 : -1;

        const startX =
          dir === 1 ? rand(-18, width * 0.18) : rand(width * 0.82, width + 14);
        const endX =
          dir === 1 ? rand(width * 0.82, width + 14) : rand(-20, width * 0.18);

        const startY = lane + rand(-14, 14);
        const cpY1 = lane + rand(-30, 30);
        const cpY2 = lane + rand(-24, 24);
        const cpY3 = lane + rand(-20, 20);
        const endY = lane + rand(-14, 14);

        const duration = rand(30, 44); // slower smoother

        gsap.set(shipEl, {
          x: startX,
          y: Math.max(padY, Math.min(height - padY, startY)),
          rotation: dir === 1 ? rand(-4, 4) : rand(176, 184),
          transformOrigin: "50% 50%",
          zIndex: 10 + (index % 4),
        });

        if (lineEl) {
          const y = Math.max(padY, Math.min(height - padY, lane));
          gsap.set(lineEl, {
            x: 0,
            y,
            width: width,
            opacity: 0.1 + (index % 3) * 0.03,
          });
        }

        // gentle bobbing (only inner icon)
        if (innerEl) {
          gsap.to(innerEl, {
            y: "+=" + rand(2.5, 5),
            duration: rand(3.8, 6.2),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(innerEl, {
            rotate: rand(-2.5, 2.5),
            duration: rand(4.4, 7.0),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        if (trailEl) {
          gsap.to(trailEl, {
            opacity: 0.28,
            scaleX: 1.08,
            duration: rand(2.2, 3.1),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        const motionPath = [
          { x: startX, y: startY },
          { x: width * 0.22 + rand(-40, 40), y: cpY1 },
          { x: width * 0.46 + rand(-44, 44), y: cpY2 },
          { x: width * 0.72 + rand(-40, 40), y: cpY3 },
          { x: endX, y: endY },
        ];

        const tween = gsap.to(shipEl, {
          keyframes: motionPath.map((p) => ({
            x: Math.max(padX * -0.3, Math.min(width - padX * -0.3, p.x)),
            y: Math.max(padY, Math.min(height - padY, p.y)),
            duration: duration / motionPath.length,
            ease: "sine.inOut",
          })),
          repeat: -1,
          onRepeat: () => {
            gsap.to(shipEl, {
              rotation: dir === 1 ? rand(-6, 6) : rand(174, 186),
              duration: 2.4,
              ease: "sine.out",
              overwrite: "auto",
            });
          },
        });

        moveTweensRef.current.push(tween);
      });

      const sweep = ocean.querySelector(".scan-sweep");
      if (sweep) {
        gsap.fromTo(
          sweep,
          { xPercent: -110, opacity: 0.12 },
          { xPercent: 120, opacity: 0.2, duration: 10, ease: "none", repeat: -1 }
        );
      }

      const pings = ocean.querySelectorAll(".data-ping");
      pulseTimelineRef.current = gsap.timeline({ repeat: -1 });
      pings.forEach((ping, i) => {
        pulseTimelineRef.current.to(
          ping,
          {
            scale: 1.18,
            opacity: 0.9,
            duration: 0.75,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
          },
          i * 0.28
        );
      });
      pulseTimelineRef.current.to({}, { duration: 1.6 });
    };

    startAnimations();

    const onResize = () => {
      if (!mounted) return;
      startAnimations();
    };
    window.addEventListener("resize", onResize);

    const statsInterval = setInterval(() => {
      setActiveCount(9 + randInt(0, 1));
      setAvgSpeed(rand(12.3, 15.9).toFixed(1));
      setLastUpdate(`${randInt(3, 28)}s ago`);
    }, 3600);

    return () => {
      mounted = false;
      window.removeEventListener("resize", onResize);
      clearInterval(statsInterval);
      if (pulseTimelineRef.current) pulseTimelineRef.current.kill();
      cleanupTweens();
    };
  }, [vessels]);

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

      <div className="fleet-live-layout">
        {/* Ocean Visual */}
        <div className="ocean-container" ref={oceanRef}>
          <div className="world-map" />
          <div className="scan-sweep" />
          <div className="ocean-noise" />

          <span className="data-ping ping-1" />
          <span className="data-ping ping-2" />
          <span className="data-ping ping-3" />
          <span className="data-ping ping-4" />

          {vessels.map((vessel, index) => (
            <div
              key={`route-${vessel.id}`}
              className={`route-line ${index % 2 ? "rtl" : "ltr"}`}
              ref={(el) => (routeLineRefs.current[index] = el)}
            />
          ))}

          {vessels.map((vessel, index) => {
            const alertLevel = vessel.alert.level;
            return (
              <button
                type="button"
                key={vessel.id}
                className={`ship-wrapper ship-variant-${(index % 4) + 1} ${
                  selectedVessel?.id === vessel.id ? "is-selected" : ""
                } ${alertLevel !== "none" ? `is-alert ${alertLevel}` : ""}`}
                ref={(el) => (shipsRef.current[index] = el)}
                onClick={() => setSelectedVessel(vessel)}
                aria-label={`${vessel.name} - ${vessel.type}`}
              >
                <span
                  className="ship-trail"
                  ref={(el) => (trailRefs.current[index] = el)}
                />
                <span className="ship-core">
                  <span
                    className="ship-icon-inner"
                    ref={(el) => (iconInnerRefs.current[index] = el)}
                    style={{ transform: `scale(${vessel.size})` }}
                  >
                    <Ship size={24 + (index % 2)} />
                  </span>

                  <span className="signal-dot" />
                  <span
                    className={`status-ring ${
                      vessel.priority === "high"
                        ? "high"
                        : vessel.priority === "medium"
                        ? "medium"
                        : ""
                    }`}
                  />

                  {alertLevel !== "none" && (
                    <span className={`alert-badge ${alertLevel}`} title={vessel.alert.label}>
                      <AlertTriangle size={10} />
                    </span>
                  )}
                </span>

                <div className="tooltip">
                  <strong>{vessel.name}</strong>
                  <span>{vessel.type}</span>
                  <span>
                    {vessel.from} → {vessel.to}
                  </span>
                  {alertLevel !== "none" && (
                    <span className={`tooltip-alert ${alertLevel}`}>
                      {vessel.alert.label}
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          <div className="wave wave-1" />
          <div className="wave wave-2" />
          <div className="wave wave-3" />
        </div>

        {/* Right Panel (same height as left box) */}
        <aside className="fleet-info-panel" aria-live="polite" ref={panelRef}>
          <div className="panel-head panel-anim">
            <div className="panel-title-wrap">
              <span className="panel-pill">Live Tracking</span>
              <h3>{selectedVessel?.name}</h3>
              <p>{selectedVessel?.type}</p>
            </div>
            <div className="panel-ship-icon">
              <Ship size={24} />
            </div>
          </div>

          {selectedVessel?.alert?.level !== "none" && (
            <div className={`panel-alert panel-anim ${selectedVessel.alert.level}`}>
              <CircleAlert size={15} />
              <div>
                <strong>{selectedVessel.alert.label}</strong>
                <span>{selectedVessel.alert.reason}</span>
              </div>
            </div>
          )}

          <div className="panel-route-card panel-anim">
            <div className="route-label">
              <MapPinned size={15} />
              <span>Current Route</span>
            </div>
            <div className="route-value">
              <strong>{selectedVessel?.from}</strong>
              <span className="route-arrow">→</span>
              <strong>{selectedVessel?.to}</strong>
            </div>
            <div className="route-status">
              <Activity size={14} />
              <span>{selectedVessel?.status}</span>
            </div>
          </div>

          <div className="panel-stats-grid panel-anim">
            <div className="stat-card">
              <div className="stat-label">
                <Navigation size={14} />
                <span>Speed</span>
              </div>
              <div className="stat-value">{selectedVessel?.speed}</div>
            </div>

            <div
              className={`stat-card ${
                selectedVessel?.alert?.label === "Low Fuel Alert" ? "stat-alert" : ""
              }`}
            >
              <div className="stat-label">
                <Fuel size={14} />
                <span>Fuel</span>
              </div>
              <div className="stat-value">{selectedVessel?.fuel}</div>
            </div>

            <div
              className={`stat-card ${
                selectedVessel?.alert?.label === "Delay Risk" ? "stat-alert" : ""
              }`}
            >
              <div className="stat-label">
                <Timer size={14} />
                <span>ETA</span>
              </div>
              <div className="stat-value">{selectedVessel?.eta}</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">
                <Anchor size={14} />
                <span>Heading</span>
              </div>
              <div className="stat-value">{selectedVessel?.heading}</div>
            </div>
          </div>

          <div className="panel-meta panel-anim">
            <div className="meta-row">
              <span>Draft</span>
              <strong>{selectedVessel?.draft}</strong>
            </div>
            <div className="meta-row">
              <span>Cargo</span>
              <strong>{selectedVessel?.cargo}</strong>
            </div>
            <div className="meta-row">
              <span>Last Port</span>
              <strong>{selectedVessel?.lastPort}</strong>
            </div>
            <div className="meta-row">
              <span>Monitoring State</span>
              <strong>GPS + Telemetry Active</strong>
            </div>
            <div className="meta-row">
              <span>Last Sync</span>
              <strong>{lastUpdate}</strong>
            </div>
          </div>

        
        </aside>
      </div>

      <div className="fleet-footer">
        <div className="footer-chip">
          <span className="pulse-live" />
          <strong>Live Fleet Status</strong>
        </div>

        <div className="footer-stats">
          <span>{activeCount} vessels active</span>
          <span>Avg Speed {avgSpeed} kn</span>
          <span className={`alerts-chip ${alertCount > 0 ? "has-alerts" : ""}`}>
            {alertCount} alert{alertCount !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </section>
  );
}