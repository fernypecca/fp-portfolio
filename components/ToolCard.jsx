import Link from "next/link";
import ToolPreview from "./ToolPreview";

export default function ToolCard({ tool }) {
  const statusClass = tool.status.concept
    ? "status status--concept"
    : tool.status.internal
      ? "status status--internal"
      : "status";

  return (
    <article className={`tool${tool.featured ? " tool--featured" : ""}`}>
      <div className="tool__preview">
        <div className="tool__chrome">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="url">{tool.url}</span>
          <span className="mini">{tool.mini}</span>
        </div>
        <div
          className={`tool__stage${tool.dark ? " tool__stage--dark" : ""}`}
        >
          <ToolPreview tool={tool} />
        </div>
        <div className="tool__caption">
          <span>{tool.caption[0]}</span>
          <span>{tool.caption[1]}</span>
        </div>
      </div>

      <div className="tool__body">
        <div className="tool__top">
          {tool.pills.map((pill) => (
            <span className={`pill${pill.yellow ? " pill--yellow" : ""}`} key={pill.text}>
              {pill.text}
            </span>
          ))}
          <span className={statusClass}>{tool.status.text}</span>
          <span className="tool__num">{tool.num}</span>
        </div>
        <h3>{tool.name}</h3>
        {tool.tagline ? <p className="tool__tagline">{tool.tagline}</p> : null}
        <p className="tool__desc">{tool.desc}</p>
        <div className="tool__shows">
          <b>{tool.showsLabel}</b> {tool.shows}
        </div>
        <div className="tool__tags">
          {tool.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="tool__foot">
          <div className="tool__actions">
            <a
              className="tool__open"
              href={tool.openHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tool.openText} <span className="arrow">↗</span>
            </a>
            {tool.caseHref ? (
              <Link className="tool__case" href={tool.caseHref}>
                {tool.caseText} ↗
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
