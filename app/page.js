import { site, emailHref, contactHref } from "@/lib/site";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Ticker from "@/components/Ticker";
import ToolsGrid from "@/components/ToolsGrid";
import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { toolSummary } from "@/lib/tool-summary";

const siteUrl = site.url;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Fernando Peccatiello",
      url: siteUrl,
      jobTitle: "Growth & Demand Lead",
      email: emailHref,
      sameAs: [
        site.linkedin,
        site.github,
      ],
      knowsAbout: [
        "Demand generation",
        "Growth strategy",
        "Conversion rate optimization",
        "AI workflows",
        "Multi-market execution",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Fernando Peccatiello",
      author: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Fernando Peccatiello — Growth & Demand Lead",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
};

const approach = [
  {
    n: "01 — DIAGNOSE",
    title: "Start with the number that's stuck.",
    text: "Traffic without pipeline, leads without calls, launches without learning. Find the real constraint before choosing the fix.",
  },
  {
    n: "02 — BUILD",
    title: "Ship the smallest system that moves it.",
    text: "A calculator, a diagnostic, a QA workflow, a funnel. Built fast, in the open, and useful on day one.",
  },
  {
    n: "03 — MEASURE",
    title: "Measure. Kill. Or scale.",
    text: "Instrument the outcome, read the signal honestly, and double down only when the number earns it.",
  },
];

const skills = [
  "Growth strategy",
  "Demand gen",
  "CRO",
  "AI workflows",
  "Lead magnets",
  "Marketing ops",
  "Product thinking",
  "Multi-market",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Ticker />
        <Stats />

        <section className="section work" id="work">
          <div className="wrap">
            <Reveal className="sec-head">
              <div>
                <div className="kicker">
                  <b>01</b> Selected work
                </div>
                <h2>Tools built around real growth problems.</h2>
              </div>
              <p>
                Each project starts with a growth bottleneck. The collection includes live tools,
                concept experiments and internal workflows. Explore what I built, the decisions
                behind it, and the limits of what each example demonstrates.
              </p>
            </Reveal>

            <Reveal amount="some">
              <ToolsGrid />
            </Reveal>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="wrap">
            <Reveal className="kicker">
              <b>02</b> How I work
            </Reveal>
            <Reveal>
              <h2>
                Find the leak. Build the system. <em>Prove the lift.</em>
              </h2>
              <p className="lead">
                The tools are the visible part. The job underneath is the same every time: locate
                the constraint, remove it with the smallest useful system, then instrument it so
                the result is not a story.
              </p>
            </Reveal>

            <Reveal className="steps">
              {approach.map((step) => (
                <div className="step" key={step.n}>
                  <div className="n">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="approach-note">
              <p>Growth strategy · Demand generation · CRO · AI workflows · Multi-market execution</p>
              <a href="#about">More about how I work ↗</a>
            </Reveal>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="wrap">
            <Reveal>
              <div className="kicker">
                <b>03</b> About
              </div>
              <h2>
                Growth-minded. Product-curious. <span className="mark">AI-native.</span>
              </h2>
              <p className="about-copy">
                I&apos;m Fernando, a Growth &amp; Demand Lead based in Barcelona. I&apos;ve spent my
                career in the part of marketing where strategy meets execution: finding demand,
                fixing conversion, and turning repeatable work into systems.
              </p>
              <p className="about-copy">
                What makes me different is that I don&apos;t stop at the brief. I build the{" "}
                <strong>calculator, the workflow, the diagnostic, the tool</strong> — usually with
                AI in the loop. This collection includes {toolSummary.live} live tools, {toolSummary.concept} concept experiments
                and {toolSummary.internal} internal tools. The case studies distinguish product capabilities from
                business outcomes that still need to be measured.
              </p>
            </Reveal>

            <Reveal className="profile">
              <div className="profile-top">
                <div className="avatar">FP</div>
                <div>
                  <h3>Fernando Peccatiello</h3>
                  <p>Growth &amp; Demand Lead</p>
                </div>
              </div>
              <dl className="profile-rows">
                <div className="prow">
                  <dt>Based in</dt>
                  <dd>Barcelona, Spain</dd>
                </div>
                <div className="prow">
                  <dt>Focus</dt>
                  <dd>Demand generation, conversion, AI-native growth systems</dd>
                </div>
                <div className="prow">
                  <dt>Mode</dt>
                  <dd>Strategy and hands-on execution, in the same seat</dd>
                </div>
                <div className="prow">
                  <dt>Open to</dt>
                  <dd>Growth &amp; Demand Lead roles</dd>
                </div>
              </dl>
              <div className="skills">
                {skills.map((skill) => (
                  <span className="skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <Reveal className="kicker">
              <b>04</b> Contact
            </Reveal>
            <Reveal>
              <h2>
                Hiring a <em>growth</em> &amp; demand lead?
              </h2>
              <p>
                I&apos;m looking for a role where strategy and hands-on execution sit in the same
                seat. If you&apos;re hiring for one, I&apos;d like to hear about the problem
                you&apos;re trying to move.
              </p>
              <div className="contact-actions">
                <a
                  className="btn"
                  href={contactHref}
                >
                  Let&apos;s talk <span className="arrow">↗</span>
                </a>
                <a className="contact-email" href={emailHref}>
                  {site.email}
                </a>
              </div>
              <div className="contact-links">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
                <a href="#work">Case studies ↗</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
