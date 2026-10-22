"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "Demand generation",
  "Growth strategy",
  "Conversion rate optimization",
  "AI workflows",
  "Lead magnets",
  "Multi-market execution",
  "Product thinking",
  "Marketing operations",
];

export default function Ticker() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(preference.matches);
    const updateVisibility = () => setTabVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    setReady(true);
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = window.IntersectionObserver
      ? new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
      : null;
    if (observer && ref.current) observer.observe(ref.current);
    else setVisible(true);
    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer?.disconnect();
    };
  }, []);

  const moving = ready && playing && !reduced && visible && tabVisible;
  const staticMode = !ready || reduced;

  return (
    <div className="ticker" ref={ref} data-moving={moving} data-static={staticMode}>
      <p className="sr-only">Areas of work: {items.join(", ")}.</p>
      <div
        className="ticker__window"
        tabIndex={staticMode ? 0 : undefined}
        role={staticMode ? "group" : undefined}
        aria-label={staticMode ? "Growth disciplines. Scroll horizontally to explore all." : undefined}
      >
        <div className="ticker-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="ticker__group" key={copy}>
              {items.map((item) => <span className="ticker-item" key={item}>{item}</span>)}
            </div>
          ))}
        </div>
      </div>
      <button
        className="ticker__control"
        type="button"
        disabled={!ready || reduced}
        aria-label={reduced ? "Disciplines animation disabled for reduced motion" : playing ? "Pause disciplines animation" : "Play disciplines animation"}
        title={reduced ? "Reduced motion enabled" : playing ? "Pause animation" : "Play animation"}
        onClick={() => setPlaying((value) => !value)}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          {playing && !reduced ? <path d="M3 2V10M9 2V10" fill="none" stroke="currentColor" strokeWidth="2" /> : <path d="M3 1L11 6L3 11Z" fill="currentColor" />}
        </svg>
      </button>
    </div>
  );
}
