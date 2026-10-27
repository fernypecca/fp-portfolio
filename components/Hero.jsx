import HeroSystem from "./HeroSystem";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <span className="eyebrow">
            Growth &amp; Demand Lead
          </span>
          <h1>
            I turn attention into <span className="mark">pipeline</span>.
          </h1>
          <p className="hero-sub">
            Growth &amp; Demand Lead. I find the bottleneck between demand and revenue, then
            build the <strong>tools, funnels and experiments</strong> that close it — and ship
            them myself.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#work">
              See selected work <span className="arrow">↗</span>
            </a>
            <a className="textlink" href="#contact">
              Get in touch
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <HeroSystem />
        </div>
      </div>
    </section>
  );
}
