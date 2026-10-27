import ToolCard from "./ToolCard";
import { tools } from "@/lib/tools";
import { toolSummary, formatCount } from "@/lib/tool-summary";

export default function ToolsGrid() {
  const selected = tools.filter((tool) => tool.caseHref);
  const collection = tools.filter((tool) => !tool.caseHref);
  const position = (index) => `${formatCount(index + 1)} / ${formatCount(toolSummary.total)}`;
  return (
    <>
      <div className="tools-bar">
        <div className="tools-key">
          <span>
            <i /> <b>{formatCount(toolSummary.live)}</b> Live tools
          </span>
          <span>
            <i className="is-concept" /> <b>{formatCount(toolSummary.concept)}</b> Concept experiments
          </span>
          <span>
            <i className="is-internal" /> <b>{formatCount(toolSummary.internal)}</b> Internal tools
          </span>
        </div>
        <span>{selected.length} case studies · {toolSummary.total} tools in the collection</span>
      </div>

      <p className="work-guide">Start with a case study for context, then explore the demo.</p>

      <div className="tool-grid">
        {selected.map((tool, index) => (
          <ToolCard tool={tool} key={tool.name} position={position(index)} />
        ))}
      </div>

      <details className="tool-collection">
        <summary>
          <span>Explore {collection.length} more tools</span>
          <span className="tool-collection__hint">Live tools and internal workflows</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 7L10 13L16 7" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
        </summary>
        <div className="tool-grid">
          {collection.map((tool, index) => <ToolCard key={tool.name} tool={tool} position={position(index + selected.length)} />)}
        </div>
      </details>
    </>
  );
}
