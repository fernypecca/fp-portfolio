"use client";

import { useEffect, useId, useRef, useState } from "react";

const PHASES = [
  { name: "Diagnose", detail: "Find the constraint.", top: "Find the", bottom: "constraint." },
  { name: "Build", detail: "Ship a focused experiment.", top: "Build the", bottom: "next test." },
  { name: "Measure", detail: "Read the signal. Iterate.", top: "Read the", bottom: "signal." },
];
const STEP_DURATION = 2400;

export default function HeroSystem() {
  const id = useId();
  const ref = useRef(null);
  const [phase, setPhase] = useState(0);
  const [ready, setReady] = useState(false);
  const [running, setRunning] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const playing = ready && running && !reduced && inView && pageVisible;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReduced(preference.matches);
      setRunning(!preference.matches);
    };
    const updateVisibility = () => setPageVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    setReady(true);
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = window.IntersectionObserver
      ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 })
      : null;
    if (observer && ref.current) observer.observe(ref.current);
    else setInView(true);

    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setPhase((value) => (value + 1) % PHASES.length), STEP_DURATION);
    return () => window.clearInterval(timer);
  }, [playing]);

  const current = PHASES[phase];

  return (
    <figure className="hero-system" ref={ref} data-playing={playing} data-phase={phase} aria-labelledby={`${id}-caption`}>
      <div className="hero-system__header">
        <span className="hero-system__eyebrow">The growth loop</span>
        <span className="hero-system__tag"><i aria-hidden="true" /> Strategy → execution</span>
      </div>

      <svg className="hero-system__canvas" viewBox="0 0 520 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
        <title id={`${id}-title`}>From attention to pipeline</title>
        <desc id={`${id}-desc`}>An illustration of Fernando&apos;s approach: diagnose a bottleneck, build an experiment and measure the signal. This is a workflow illustration, not performance data.</desc>
        <defs>
          <pattern id={`${id}-grid`} width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" className="hero-system__grid-dot" />
          </pattern>
        </defs>
        <rect x="12" y="10" width="496" height="328" rx="16" fill={`url(#${id}-grid)`} />

        <g className="hero-system__labels">
          <text x="28" y="43">ATTENTION</text>
          <text x="260" y="43" textAnchor="middle">THE SYSTEM</text>
          <text x="492" y="43" textAnchor="end">PIPELINE</text>
        </g>

        <g className="hero-system__wires" fill="none">
          <path d="M78 108H122Q144 108 144 130V154Q144 176 166 176H200" />
          <path d="M78 176H200" />
          <path d="M78 244H122Q144 244 144 222V198Q144 176 166 176H200" />
          <path d="M320 176H348Q372 176 372 152V130Q372 108 394 108H408" />
          <path d="M320 176H408" />
          <path d="M320 176H348Q372 176 372 200V222Q372 244 394 244H408" />
          <path className="hero-system__return" d="M446 266V294Q446 308 432 308H92Q56 308 56 272" />
        </g>

        <g className="hero-system__signals" fill="none" aria-hidden="true">
          <path className="hero-system__signal hero-system__signal--one" pathLength="1" d="M78 108H122Q144 108 144 130V154Q144 176 166 176H200" />
          <path className="hero-system__signal hero-system__signal--two" pathLength="1" d="M78 176H200" />
          <path className="hero-system__signal hero-system__signal--three" pathLength="1" d="M78 244H122Q144 244 144 222V198Q144 176 166 176H200" />
          <path className="hero-system__signal hero-system__signal--out" pathLength="1" d="M320 176H348Q372 176 372 152V130Q372 108 394 108H408" />
          <path className="hero-system__signal hero-system__signal--out hero-system__signal--two" pathLength="1" d="M320 176H408" />
          <path className="hero-system__signal hero-system__signal--out hero-system__signal--three" pathLength="1" d="M320 176H348Q372 176 372 200V222Q372 244 394 244H408" />
        </g>

        <g className="hero-system__sources">
          {[108, 176, 244].map((y, index) => (
            <g key={y}>
              <rect x="28" y={y - 22} width="50" height="44" rx="12" />
              {index === 0 ? <path d={`M43 ${y + 7}V${y - 3}M53 ${y + 7}V${y - 9}M63 ${y + 7}V${y - 1}`} />
                : index === 1 ? <><circle cx="53" cy={y} r="9" /><circle className="hero-system__source-dot" cx="53" cy={y} r="3" /></>
                  : <><path d={`M43 ${y + 7}L53 ${y - 8}L63 ${y + 7}Z`} /><path d={`M48 ${y}H58`} /></>}
            </g>
          ))}
        </g>

        <g className="hero-system__core">
          <rect className="hero-system__core-outline" x="191" y="101" width="138" height="150" rx="25" />
          <rect className="hero-system__core-body" x="200" y="110" width="120" height="132" rx="18" />
          <g className="hero-system__crosshair" aria-hidden="true">
            <path d="M246 140V132H254M266 132H274V140M274 151V159H266M254 159H246V151" />
            <circle cx="260" cy="145" r="3" />
          </g>
          <text x="260" y="185" textAnchor="middle" className="hero-system__core-top">{current.top}</text>
          <text x="260" y="207" textAnchor="middle" className="hero-system__core-bottom">{current.bottom}</text>
          <circle className="hero-system__port" cx="200" cy="176" r="4" />
          <circle className="hero-system__port" cx="320" cy="176" r="4" />
        </g>

        <g className="hero-system__outputs">
          {[[108, "Signal"], [176, "Intent"], [244, "Next step"]].map(([y, label], index) => (
            <g key={label} className={`hero-system__output hero-system__output--${index}`}>
              <rect x="408" y={y - 21} width="86" height="42" rx="11" />
              <circle cx="422" cy={y} r="3" />
              <text x="433" y={y + 4}>{label}</text>
            </g>
          ))}
        </g>
        <text x="260" y="330" textAnchor="middle" className="hero-system__loop-label">LEARN. ADAPT. REPEAT.</text>
      </svg>

      <div className="hero-system__footer">
        <figcaption id={`${id}-caption`}>
          <span className="hero-system__phase" aria-hidden="true">0{phase + 1} / 03</span>
          <span className="hero-system__step"><b>{current.name}.</b><span>{current.detail}</span></span>
        </figcaption>
        <button
          type="button"
          className="hero-system__control"
          disabled={!ready || reduced}
          aria-label={reduced ? "Animation disabled for reduced motion" : running ? "Pause animation" : "Play animation"}
          onClick={() => setRunning((value) => !value)}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            {running && !reduced ? <path d="M3 2V10M9 2V10" fill="none" stroke="currentColor" strokeWidth="2" /> : <path d="M3 1L11 6L3 11Z" fill="currentColor" />}
          </svg>
          <span>{reduced ? "Still view" : running ? "Pause" : "Play"}</span>
        </button>
      </div>
      <div className="hero-system__progress" aria-hidden="true">
        {PHASES.map((step, index) => <span key={step.name} className={index === phase ? "is-active" : ""} />)}
      </div>
    </figure>
  );
}
