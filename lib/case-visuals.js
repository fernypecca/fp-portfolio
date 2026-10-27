// Illustrative UI states, not screenshots or measured campaign outcomes.
export const caseVisuals = {
  reactor: {
    gallery: [
      { kind: "audience", label: "Shared audience", title: "24–26 personas", detail: "Clustered by intent. Safeguards on." },
      { kind: "variants", label: "Same clones · Both variants", variants: ["We help teams launch faster without the manual work.", "Launch day without the busywork."] },
      { kind: "verdict", label: "Verdict", title: "Too close to call", detail: "Gap inside noise", movement: "7 moved A → B · 2 moved B → A · 17 held" },
    ],
  },
  "storefront-analyzer": {
    gallery: [
      { kind: "score", label: "Profile score", score: "62", detail: "Compared with the top 10 in the category" },
      { kind: "priorities", label: "Suggested priorities", items: ["Cover photos: generic → venue-led", "Reviews order", "CTA placement"] },
      { kind: "next-step", label: "Next step", title: "Swap cover 2 → venue", detail: "Replace the stock shot. One change to investigate first." },
    ],
  },
  "product-kit-generator": {
    gallery: [
      { kind: "format", label: "Social", ratio: "1:1", detail: "Center crop · Alt text", shape: "square" },
      { kind: "format", label: "Catalog", ratio: "4:5", detail: "SEO title · Bullets", shape: "portrait" },
      { kind: "format", label: "Stories", ratio: "9:16", detail: "Hook · CTA", shape: "story" },
    ],
  },
};
