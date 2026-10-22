import ToolCard from "./ToolCard";
import { tools } from "@/lib/tools";
import { toolSummary, formatCount } from "@/lib/tool-summary";

export default function ToolsGrid() {
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
        <span>{toolSummary.total} projects · live tools, prototypes and internal workflows</span>
      </div>

      <div className="tool-grid">
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool.name} />
        ))}
      </div>
    </>
  );
}
