import { caseVisuals } from "@/lib/case-visuals";
import { AudienceGraph } from "./ToolPreview";

export default function CaseDiagram({ slug, index }) {
  const state = caseVisuals[slug].gallery[index];
  return (
    <div className={`case-diagram case-diagram--${state.kind}`}>
      <p className="case-diagram__label">{state.label}</p>
      {state.kind === "audience" ? <AudienceGraph /> : null}
      {state.kind === "variants" ? <div className="case-diagram__variants">{state.variants.map((text, i) => <div key={text}><span>Variant {i === 0 ? "A" : "B"}</span><p>{text}</p></div>)}</div> : null}
      {state.kind === "score" ? <strong className="case-diagram__score">{state.score}</strong> : null}
      {state.kind === "priorities" ? <ol>{state.items.map((item) => <li key={item}>{item}</li>)}</ol> : null}
      {state.kind === "format" ? <><div className={`case-diagram__format case-diagram__format--${state.shape}`} aria-hidden="true"><span /></div><strong>{state.ratio}</strong></> : null}
      {state.title ? <strong>{state.title}</strong> : null}
      {state.detail ? <p className="case-diagram__detail">{state.detail}</p> : null}
      {state.movement ? <p>{state.movement}</p> : null}
    </div>
  );
}
