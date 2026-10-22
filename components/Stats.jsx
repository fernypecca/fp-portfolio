import { toolSummary, formatCount } from "@/lib/tool-summary";

const stats = [
  { value: formatCount(toolSummary.total), label: "Tools built" },
  { value: formatCount(toolSummary.live), label: "Live tools" },
  { value: formatCount(toolSummary.concept), label: "Concept experiments" },
  { value: formatCount(toolSummary.internal), label: "Internal tools" },
];

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
