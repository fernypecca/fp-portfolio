const items = [
  "Demand generation",
  "Growth strategy",
  "Conversion rate optimization",
  "AI workflows",
  "Lead magnets",
  "Multi-market execution",
  "Product thinking",
  "Marketing operations",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item) => (
          <span className="ticker-item" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
