import "./tool-previews.css";

export function AudienceGraph() {
  return (
    <svg viewBox="0 0 280 170" aria-hidden="true" focusable="false" className="tool-demo__graph">
      <path d="M20 58 54 26 88 66 65 125 112 97 143 44 176 91 205 25 239 70 260 127 224 148 164 142 108 154 35 145M54 26 112 97M88 66 143 44M143 44 205 25M176 91 239 70M65 125 35 145M112 97 176 91" fill="none" stroke="var(--pv-line)" />
      {[[20,58],[54,26],[88,66],[65,125],[112,97],[143,44],[176,91],[205,25],[239,70],[260,127],[224,148],[164,142],[108,154],[35,145]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r={i % 3 === 1 ? 7 : 4} fill={i % 3 === 1 ? "var(--yellow)" : "var(--pv-soft)"} />)}
    </svg>
  );
}

function ReactorPreview() {
  return <>
    <p className="tool-demo__label">Audience simulation</p>
    <div className="tool-demo__reactor">
      <div><AudienceGraph /><p><strong>24–26 personas</strong><br /><span className="tool-demo__muted">Grouped by what they care about</span></p></div>
      <div className="tool-demo__verdict">
        <span className="tool-demo__label">Verdict</span>
        <strong>Too close to call</strong>
        <span className="tool-demo__chip">Inside the noise floor</span>
        <svg viewBox="0 0 200 44" aria-hidden="true" focusable="false"><path d="M2 9 32 22 59 13 91 31 121 36 151 22 198 29" fill="none" stroke="var(--yellow)" strokeWidth="2" /></svg>
        <span>Explore a hypothesis before a real audience test.</span>
      </div>
    </div>
  </>;
}

function TeardownPreview() {
  return <>
    <p className="tool-demo__label">Competitive research</p>
    <div className="tool-demo__sources">{["Site", "Reviews", "Ads", "Press"].map(x => <span key={x}>{x}</span>)}</div>
    <div className="tool-demo__panel">
      <div className="tool-demo__row"><strong>Competitor report</strong><span className="tool-demo__chip">Cited</span></div>
      <ul className="tool-demo__list"><li>Find the positioning gap</li><li>Trace each claim to a source</li><li>Separate evidence from inference</li></ul>
    </div>
    <p className="tool-demo__muted">4 sources. No claims without evidence.</p>
  </>;
}

function GapPreview() {
  return <>
    <p className="tool-demo__label">Gap analysis</p>
    <div className="tool-demo__row"><div className="tool-demo__score"><strong>38</strong><span>Gap score / 100</span></div><p>Compare your profile with premium vendors.</p></div>
    <div className="tool-demo__bars" aria-hidden="true"><i style={{height:"42%"}} /><i style={{height:"68%"}} /><i style={{height:"88%"}} /></div>
    <p className="tool-demo__muted">Reviews · Photos · Pricing · Awards</p>
  </>;
}

function EarningsPreview() {
  return <>
    <p className="tool-demo__label">Spain · Market estimator</p>
    <div className="tool-demo__panel">
      <span className="tool-demo__muted">Photography · Example province</span>
      <p className="tool-demo__metric">€54,500<span> / year</span></p>
      <p>Annual earnings estimate</p>
    </div>
    <div className="tool-demo__sources"><span className="is-selected">Photography</span><span>Catering</span><span>Venues</span></div>
    <p className="tool-demo__muted">52 provinces · 6 categories · No signup</p>
  </>;
}

function StorefrontPreview() {
  return <>
    <p className="tool-demo__label">Profile diagnostic</p>
    <div className="tool-demo__row"><div className="tool-demo__score"><strong>62</strong><span>Profile score</span></div><p>One priority.<br />A clearer next step.</p></div>
    <ol className="tool-demo__ranked"><li>Fix pricing clarity</li><li>Add 6+ recent photos</li><li>Respond to 3 reviews</li></ol>
  </>;
}

function QAPreview() {
  return <>
    <p className="tool-demo__label">Campaign · Market checks</p>
    <div className="tool-demo__checks"><span>Landing ✓</span><span>Form ✓</span><span>UTM ✓</span></div>
    <div className="tool-demo__panel"><div className="tool-demo__row"><strong>Launch checklist</strong><span className="tool-demo__chip">1 pending</span></div><ul className="tool-demo__list"><li>Language and offer match</li><li>Tracking parameters present</li><li>Confirm the form destination</li></ul></div>
  </>;
}

function ProductKitPreview() {
  return <>
    <p className="tool-demo__label">One product URL → channel-ready kit</p>
    <div className="tool-demo__formats">{[["1:1", "Social"], ["4:5", "Catalog"], ["9:16", "Stories"]].map(([ratio,label],i) => <div key={ratio}><div className={`tool-demo__format tool-demo__format--${i}`} aria-hidden="true"><i /></div><strong>{ratio}</strong><span>{label}</span></div>)}</div>
    <p className="tool-demo__muted">One input. Directions for every surface.</p>
  </>;
}

function BackgroundPreview() {
  return <>
    <p className="tool-demo__label">Deterministic background generator</p>
    <div className="tool-demo__backgrounds">{["A", "B", "C"].map((x,i) => <div key={x}><div className={`tool-demo__art tool-demo__art--${i}`} aria-hidden="true" /><span>Variant {x}</span></div>)}</div>
    <div className="tool-demo__row tool-demo__muted"><span>Seed 4417</span><span>1200 × 628 · SVG export</span></div>
  </>;
}

function PopupPreview() {
  return <>
    <p className="tool-demo__label">Campaign popup</p>
    <div className="tool-demo__popup"><span className="tool-demo__label">Your next campaign</span><strong>Get the offer.</strong><span className="tool-demo__chip">Campaign CTA ↗</span></div>
    <div className="tool-demo__checks"><span>Desktop + mobile</span><span>UTM capture</span><span>HTML output</span></div>
  </>;
}

const previews = {
  "Reactor": ReactorPreview,
  "Competitor Teardowns": TeardownPreview,
  "Competitor Gap Analyzer": GapPreview,
  "Wedding Earnings Estimator": EarningsPreview,
  "Storefront Analyzer": StorefrontPreview,
  "Landing QA Tool": QAPreview,
  "Product Kit Generator": ProductKitPreview,
  "Background Generator": BackgroundPreview,
  "Popup HTML Generator": PopupPreview,
};

export default function ToolPreview({ tool }) {
  const Preview = previews[tool.name];
  return <figure className="tool-demo"><figcaption className="tool-demo__sample">Illustrative preview</figcaption><Preview /></figure>;
}
