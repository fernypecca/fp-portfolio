export const cases = [
  {
    slug: "reactor",
    order: 1,
    total: 3,
    name: "Reactor",
    lede: "Two copy variants. A synthetic audience. Questions to explore before a real test.",
    seoTitle: "Reactor — Synthetic copy exploration",
    seoDescription:
      "Explore two copy variants with 24–26 AI-generated personas. A streaming simulation for forming hypotheses, not predicting campaign performance.",
    role: "Growth & Demand Lead",
    type: "AI lead magnet",
    stack: "Next.js · Claude API · Data viz",
    status: "Live tool",
    url: "https://reactor-chi-seven.vercel.app/",
    hero: {
      kind: "image",
      src: "/images/reactor.png",
      alt: "Reactor interface showing two copy variants, a simulated audience graph and a verdict panel",
      displayUrl: "reactor-chi-seven.vercel.app",
      badge: "Live tool",
      noteLeft: "Reactor / audience simulation",
      noteRight: "Two variants · 24–26 persona clones · one verdict",
    },
    stats: [
      { value: "24–26", label: "Synthetic personas per run" },
      { value: "2", label: "Variants in parallel" },
      { value: "1", label: "Simulated audience" },
    ],
    problem: {
      heading: "You only know if copy works",
      accent: "after it's already live.",
      copy: [
        "By the time likes and comments tell you something, the weaker version has already gone out. You lose the first impression with the very people you wanted to reach.",
        "Before testing with real people, it can help to explore how different audience assumptions change the questions you ask. Reactor provides a synthetic rehearsal for that exploration.",
      ],
    },
    build: {
      heading: "A simulation you can inspect.",
      copy: "The interface streams AI-generated reactions one persona at a time and compares the two variants. It makes the simulated response visible so you can challenge the assumptions behind it.",
    },
    steps: [
      {
        label: "01 — Audience",
        title: "Pick the room.",
        text: "Use a preset or generate 24–26 synthetic personas from a segment brief. They represent prompted assumptions, not a sample of real customers.",
      },
      {
        label: "02 — Test",
        title: "Paste A and B.",
        text: "Compare A and B against the same synthetic audience. This keeps the setup consistent; it does not establish how real customers will respond.",
      },
      {
        label: "03 — Watch",
        title: "Let the graph light up.",
        text: "AI-generated reactions appear progressively. Inspect differences between the simulated responses rather than relying on a single summary score.",
      },
      {
        label: "04 — Decide",
        title: "Read the verdict.",
        text: "Review the simulated comparison and its uncertainty message. Use it to form questions for a real audience test, not to declare a campaign winner.",
      },
    ],
    flow: [
      { label: "Input", title: "Audience brief" },
      { label: "Test", title: "Variant A + B" },
      { label: "Signal", title: "Synthetic reactions" },
      { label: "Output", title: "Test hypotheses", accent: true },
    ],
    gallery: [
      {
        label: "01 · Audience",
        title: "Pick the room",
        text: "Preset or generated synthetic personas, anchored to an audience brief.",
      },
      {
        label: "02 · Test",
        title: "Parallel, not sequential",
        text: "The same simulated audience compares A and B under a shared setup.",
      },
      {
        label: "03 · Verdict",
        title: "Honest by default",
        text: "Inspect the simulated response. Validate any hypothesis with real people.",
      },
    ],
    proof: {
      heading: "Make the assumptions visible.",
      copy: "This build demonstrates a streaming comparison workflow and a way to inspect synthetic responses. The figures below describe product scope, not marketing results.",
      metricsLabel: "Product scope",
      limitations: "AI-generated personas are not observed customers. This case does not establish statistical validity or predictive accuracy against human responses. No campaign lift, pipeline impact or conversion improvement has been measured for this case.",
      metrics: [
        { value: "24–26", label: "Synthetic personas per run" },
        { value: "2", label: "Variants compared" },
        { value: "1", label: "Shared audience brief" },
      ],
      items: [
        {
          label: "Streaming",
          title: "Watch it happen.",
          text: "The graph renders progressively, making the generated responses easier to inspect. Visibility helps review the simulation; it does not validate its accuracy.",
        },
        {
          label: "Uncertainty",
          title: "Hold the call.",
          text: "The interface can report an inconclusive comparison. That is a prompt to investigate further, not a statistical claim about a real audience.",
        },
        {
          label: "Guardrails",
          title: "Useful, not theatrical.",
          text: "A defined audience brief gives the simulation a consistent starting point. Generated personas still reflect the model and the assumptions in that brief.",
        },
      ],
    },
    tags: ["Audience simulation", "Claude API", "Data viz", "Streaming"],
    next: "storefront-analyzer",
  },
  {
    slug: "storefront-analyzer",
    order: 2,
    total: 3,
    name: "Storefront Analyzer",
    lede: "Paste a profile URL. Get the score. Fix one thing first.",
    seoTitle: "Storefront Analyzer — CRO concept",
    seoDescription:
      "A concept diagnostic that turns a marketplace profile URL into a score, ranked friction points, and the single next fix worth shipping.",
    role: "Growth & Demand Lead",
    type: "AI lead magnet",
    stack: "Next.js · Claude API · Marketplace UX",
    status: "Concept experiment",
    url: "https://storefront-analyzer.vercel.app/",
    hero: {
      kind: "svg",
      displayUrl: "storefront-analyzer.vercel.app",
      badge: "Concept",
      noteLeft: "Storefront Analyzer / profile diagnostic",
      noteRight: "One URL · ranked friction · one next step",
    },
    stats: [
      { value: "1", label: "URL in" },
      { value: "3", label: "Fixes ranked" },
      { value: "1", label: "Next step" },
    ],
    problem: {
      heading: "Your profile isn't converting.",
      accent: "You can't see why.",
      copy: [
        "On a marketplace, your profile is the landing page. Photos, reviews, pricing, trust signals — all in one scroll.",
        "When inquiries stall, nothing tells you which gap is costing you most. The concept starts with the URL you already have and returns a scannable answer, not a 20-page report.",
      ],
    },
    build: {
      heading: "A diagnosis, not a dump.",
      copy: "The concept uses a profile score to suggest a next move. It orders potential friction points by estimated priority, then highlights one change to investigate.",
    },
    steps: [
      {
        label: "01 — Input",
        title: "Paste the URL.",
        text: "Start where the vendor already lives. No long form about the business, no generic audit questionnaire.",
      },
      {
        label: "02 — Score",
        title: "Read the number.",
        text: "One profile score against the top of the category. Context first, vanity second.",
      },
      {
        label: "03 — Prioritise",
        title: "See what costs most.",
        text: "Photos, reviews, pricing and CTA placement become a shortlist of potential friction points. Their actual effect on conversion would need testing.",
      },
      {
        label: "04 — Fix",
        title: "Ship one thing.",
        text: "A concrete next action small enough to finish today, with a suggested replacement already drafted.",
      },
    ],
    flow: [
      { label: "Input", title: "Profile URL" },
      { label: "Signal", title: "Profile score" },
      { label: "Rank", title: "Suggested priorities" },
      { label: "Output", title: "One next fix", accent: true },
    ],
    gallery: [
      {
        label: "01 · Score",
        title: "One number with context",
        text: "A profile score against the top vendors in the category.",
      },
      {
        label: "02 · Priorities",
        title: "Ranked, not exhaustive",
        text: "The friction points that matter most, in order.",
      },
      {
        label: "03 · Next step",
        title: "Small enough to ship",
        text: "One concrete fix, not a 20-point checklist.",
      },
    ],
    proof: {
      heading: "The next step is the product.",
      copy: "The concept explores how to turn a profile review into one suggested next action. These figures describe the proposed workflow, not measured conversion results.",
      metricsLabel: "Product scope",
      limitations: "This is a concept experiment. Scores and priorities are illustrative recommendations, not measured causes of lost inquiries. No conversion lift or lead-generation impact has been measured for this case.",
      metrics: [
        { value: "3", label: "Ranked priorities in concept" },
        { value: "1", label: "URL required" },
        { value: "1", label: "Fix recommended" },
      ],
      items: [
        {
          label: "Framing",
          title: "Start at the URL.",
          text: "The diagnostic begins with the surface the vendor already owns instead of generic best practices.",
        },
        {
          label: "Marketplace UX",
          title: "The profile is the funnel.",
          text: "Photos, reviews, pricing and CTA placement are treated as one conversion surface.",
        },
        {
          label: "Prioritisation",
          title: "One fix, not twenty.",
          text: "The output is scoped to a single next action that can realistically ship today.",
        },
      ],
    },
    tags: ["Marketplace", "CRO", "UX", "AI concept"],
    next: "product-kit-generator",
  },
  {
    slug: "product-kit-generator",
    order: 3,
    total: 3,
    name: "Product Kit Generator",
    lede: "One URL in. A kit that fits every channel.",
    seoTitle: "Product Kit Generator — AI concept",
    seoDescription:
      "A concept that turns one product URL into channel-ready image directions, SEO copy, and social assets for 1:1, 4:5, and 9:16.",
    role: "Growth & Demand Lead",
    type: "AI lead magnet",
    stack: "Next.js · Claude API · Generative AI",
    status: "Concept experiment",
    url: "https://photoroom-kit-generator.vercel.app/",
    hero: {
      kind: "svg",
      displayUrl: "photoroom-kit-generator.vercel.app",
      badge: "Concept",
      noteLeft: "Product Kit Generator / channel kit",
      noteRight: "One URL · three formats · one bundled kit",
    },
    stats: [
      { value: "1", label: "Product URL" },
      { value: "3", label: "Channel formats" },
      { value: "1", label: "Bundled kit" },
    ],
    problem: {
      heading: "One product. Three specs.",
      accent: "Every time.",
      copy: [
        "Merchants need the same product in 1:1, 4:5 and 9:16. Plus a title, a description, and alt text.",
        "Today that means re-briefing the same SKU for every surface. The work repeats. The decisions repeat. The URL already holds the signals — the concept starts there.",
      ],
    },
    build: {
      heading: "Packaging beats generating.",
      copy: "The value is not another image generator. It is turning one product URL into a bundled, channel-ready kit with the copy and format decisions already made.",
    },
    steps: [
      {
        label: "01 — Source",
        title: "Paste the product URL.",
        text: "The page already holds the image, title, category and buying context. Start with what exists.",
      },
      {
        label: "02 — Extract",
        title: "Pull the signals.",
        text: "Product image, title, category and key selling points become the source of truth for every output.",
      },
      {
        label: "03 — Package",
        title: "Build the kit.",
        text: "Image directions, SEO copy and social assets are bundled together instead of generated one prompt at a time.",
      },
      {
        label: "04 — Ship",
        title: "Use it per channel.",
        text: "1:1 for social, 4:5 for catalog, 9:16 for stories. Each format arrives with the copy already framed for it.",
      },
    ],
    flow: [
      { label: "Input", title: "Product URL" },
      { label: "Extract", title: "Image + copy signals" },
      { label: "Package", title: "Channel-ready kit" },
      { label: "Output", title: "Three formats", accent: true },
    ],
    gallery: [
      {
        label: "01 · Social",
        title: "1:1, ready to post",
        text: "Square crop with alt text and title ready to paste.",
      },
      {
        label: "02 · Catalog",
        title: "4:5 with room to sell",
        text: "Vertical format with space for SEO copy and bullets.",
      },
      {
        label: "03 · Stories",
        title: "9:16 with a hook",
        text: "Full vertical with the hook and CTA baked in.",
      },
    ],
    proof: {
      heading: "One output, every surface.",
      copy: "The concept explores bundling image directions, SEO copy and social assets from one product source. These figures describe the proposed output, not measured production savings.",
      metricsLabel: "Product scope",
      limitations: "This is a concept experiment. Outputs need human review for product accuracy, brand fit and channel requirements. Time saved, rework avoided and commercial impact have not been measured for this case.",
      metrics: [
        { value: "1", label: "URL in" },
        { value: "3", label: "Formats out" },
        { value: "1", label: "Bundled kit" },
      ],
      items: [
        {
          label: "URL-to-kit",
          title: "Start from the source.",
          text: "The product page is the brief. No blank prompt, no re-describing the SKU.",
        },
        {
          label: "Channel thinking",
          title: "Formats follow distribution.",
          text: "Every output reflects the spec of the surface it is meant for, not a generic aspect ratio.",
        },
        {
          label: "Packaging",
          title: "One output, bundled.",
          text: "Image directions, SEO copy and social assets are designed as one bundle. The aim is to reuse the source context across channels; any reduction in rework still needs measuring.",
        },
      ],
    },
    tags: ["Generative AI", "E-commerce", "SEO", "Lead magnet"],
    next: "reactor",
  },
];

export const getCase = (slug) => cases.find((item) => item.slug === slug);

export const caseSlugs = cases.map((item) => item.slug);

export const getNextCase = (slug) => {
  const current = getCase(slug);
  return current ? getCase(current.next) : null;
};
