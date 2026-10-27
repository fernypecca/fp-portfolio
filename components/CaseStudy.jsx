import { site, emailHref, contactHref } from "@/lib/site";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";
import { getNextCase } from "@/lib/cases";
import { tools } from "@/lib/tools";
import ToolPreview from "./ToolPreview";
import CaseDiagram from "./CaseDiagram";

export default function CaseStudy({ data }) {
  const tool = tools.find((item) => item.caseHref === `/work/${data.slug}`);
  const decision = data.slug === "reactor" ? data.steps[1].text : data.build.copy;
  const nextCase = getNextCase(data.slug);
  const number = String(data.order).padStart(2, "0");
  const total = String(data.total).padStart(2, "0");
  const nextName = nextCase.name.split(" ");
  const nextLast = nextName.pop();
  const openLabel = data.status === "Live tool" ? "Open the live tool" : "Open the concept";

  return (
    <>
      <Nav />
      <main className="case-page" id="main-content" tabIndex={-1}>
        <section className="case-hero">
          <div className="wrap">
            <Reveal className="crumb">
              <Link href="/#work">Work</Link>
              <span className="sep">/</span>
              <span>{data.name}</span>
            </Reveal>

            <div className="case-hero__grid">
              <Reveal>
                <div className="kicker">
                  <b>Case study</b> {number} / {total}
                </div>
                <h1>{data.name}</h1>
                <p className="case-hero__lede">{data.lede}</p>
                <div className="case-hero__actions">
                  <a className="btn" href={data.url} target="_blank" rel="noopener noreferrer">
                    {openLabel} <span className="arrow">↗</span>
                  </a>
                  <Link className="textlink" href="/#work">
                    All work
                  </Link>
                </div>
              </Reveal>

              <Reveal>
                <dl className="case-meta">
                  <div className="case-meta__row">
                    <dt>Role</dt>
                    <dd>{data.role}</dd>
                  </div>
                  <div className="case-meta__row">
                    <dt>Type</dt>
                    <dd>{data.type}</dd>
                  </div>
                  <div className="case-meta__row">
                    <dt>Stack</dt>
                    <dd>{data.stack}</dd>
                  </div>
                  <div className="case-meta__row">
                    <dt>Status</dt>
                    <dd>
                      <span className="live">{data.status}</span>
                    </dd>
                  </div>
                </dl>
                <div className="case-decision">
                  <p className="case-decision__label">Key decision</p>
                  <p>{decision}</p>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <figure className="case-shot">
                <div className="shot-frame">
                  <div className="shot-chrome">
                    <i />
                    <i />
                    <i />
                    <span className="url">{data.hero.displayUrl}</span>
                    <span className="badge">{data.hero.badge}</span>
                  </div>
                  {data.hero.kind === "image" ? (
                    <Image
                      src={data.hero.src}
                      alt={data.hero.alt}
                      width={1440}
                      height={900}
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority
                    />
                  ) : (
                    <div className="case-preview case-preview--dark"><ToolPreview tool={tool} /></div>
                  )}
                </div>
                <figcaption className="shot-note">
                  <span>{data.hero.noteLeft}</span>
                  <span>{data.hero.noteRight}</span>
                </figcaption>
              </figure>
            </Reveal>

          </div>
        </section>

        <section className="problem">
          <div className="wrap">
            <Reveal>
              <div className="kicker">
                <b>01</b> The problem
              </div>
              <h2 className="display">
                {data.problem.heading} <em>{data.problem.accent}</em>
              </h2>
              <div className="problem__copy">
                {data.problem.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="build">
          <div className="wrap">
            <Reveal className="build__head">
              <div>
                <div className="kicker">
                  <b>02</b> The build
                </div>
                <h2>{data.build.heading}</h2>
              </div>
              <p>{data.build.copy}</p>
            </Reveal>

            <Reveal className="steps">
              {data.steps.map((step) => (
                <div className="step" key={step.label}>
                  <div className="step__num">{step.label}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="flow" role="group" aria-label={`${data.name} product logic`}>
              {data.flow.map((item, index) => (
                <Fragment key={item.title}>
                  <div className={`flow__step${item.accent ? " is-last" : ""}`}>
                    <span>{item.label}</span>
                    <b>{item.title}</b>
                  </div>
                  {index < data.flow.length - 1 ? <div className="flow__arrow">→</div> : null}
                </Fragment>
              ))}
            </Reveal>

            <Reveal className="gallery">
              {data.gallery.map((item, index) => (
                <article className="gcard" key={item.title}>
                  <div className="gcard__media"><CaseDiagram slug={data.slug} index={index} /></div>
                  <div className="gcard__body">
                    <div className="mono">{item.label}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="proof">
          <div className="wrap">
            <Reveal className="proof__head">
              <div>
                <div className="kicker">
                  <b>03</b> What it proves
                </div>
                <h2>{data.proof.heading}</h2>
              </div>
              <p>{data.proof.copy}</p>
            </Reveal>

            <Reveal className="proof-context">
              <p>{data.proof.limitations}</p>
              <div className="mono">{data.proof.metricsLabel}</div>
            </Reveal>

            <Reveal className="metrics">
              {data.proof.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <b>{metric.value}</b>
                  <span>{metric.label}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="proof__grid">
              {data.proof.items.map((item) => (
                <div className="proof__item" key={item.title}>
                  <div className="mono">{item.label}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="proof__foot">
              <div className="tags">
                {data.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="case-hero__actions" style={{ marginTop: 0 }}>
                <a className="btn" href={data.url} target="_blank" rel="noopener noreferrer">
                  Open {data.name} <span className="arrow">↗</span>
                </a>
                <Link className="textlink" href="/#work">
                  See the rest of the work
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="next">
          <div className="wrap">
            <div>
              <div className="mono">
                Next case study · {String(nextCase.order).padStart(2, "0")} / {total}
              </div>
              <h2>
                {nextName.join(" ")} <span>{nextLast}.</span>
              </h2>
            </div>
            <Link className="btn btn--yellow" href={`/work/${nextCase.slug}`}>
              Read next <span className="arrow">↗</span>
            </Link>
          </div>
        </section>

        <section className="case-cta">
          <div className="wrap">
            <Reveal>
              <div className="kicker">
                <b>04</b> Next
              </div>
              <h2>Have a question about this project?</h2>
              <div className="case-cta__row">
                <a
                  className="btn btn--yellow"
                  href={contactHref}
                >
                  Let&apos;s talk <span className="arrow">↗</span>
                </a>
                <a className="case-cta__mail" href={emailHref}>
                  {site.email}
                </a>
                <Link className="textlink" href="/">
                  Back to home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer variant="light" caseItem={data} />
    </>
  );
}
