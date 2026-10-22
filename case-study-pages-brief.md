# Brief: dedicated case-study pages for fp-portfolio

Hand this whole file to the executing AI as its instructions. It should read
`index.html` in this repo before writing anything — that file is the single
source of truth for copy, palette, and design system. Do not invent facts,
metrics, or results that aren't already in `index.html` or in the tool's own
README (ask Fernando for it if it's not in the repo).

## Why this exists

Fernando Peccatiello's portfolio (fp-portfolio, deployed at
www.fernandopeccatiello.com) currently presents each tool as a card + modal
on a single page. That's fine for a visitor scrolling the whole site, but it
means no individual tool has its own indexable, linkable URL — a recruiter,
hiring manager, or (this matters specifically) a USCIS O-1A adjudicator
reviewing evidence of extraordinary ability has nothing to cite directly
except "scroll down and click."

The goal: give each important tool its own page that (a) Google can index,
(b) explains the tool from the marketing/demand-gen angle — not just what it
does technically, but who it's for, why it's built the way it is, and what
growth thinking went into it — and (c) stays visually and structurally
identical to the rest of the site.

## Scope: which tools, in what order

Pilot with these three first, in this order:

1. **Reactor** (`reactor-chi-seven.vercel.app`) — flagship, `featured: true`
   in `PROJECTS`, status "Live tool."
2. **Product Kit Generator** (`photoroom-kit-generator.vercel.app`) — the
   one Fernando refers to as "the Photoroom one." Status "Concept
   experiment" — the page must say so plainly, not imply it's live.
3. **Storefront Analyzer** (`storefront-analyzer.vercel.app`) — status
   "Concept experiment," same honesty requirement.

Do not build pages for the other six tools yet. If this pilot works, the
same template extends to them later — don't over-build now.

## Non-negotiable content rule

**Never invent a metric, a user count, a result, a testimonial, or a
"before/after" number that isn't already stated in `index.html`'s `PROJECTS`
array or the tool's own README.** This portfolio's entire credibility rests
on not overstating — see the existing `problem` / `solution` / `demonstrates`
fields in `PROJECTS` for the level of specificity and honesty to match. If a
section calls for a number that doesn't exist yet (e.g., "how many reports
has Competitor Teardowns generated"), leave it out or flag it as a question
back to Fernando — do not estimate one.

## Technical setup: extract shared CSS first

`index.html` is currently a single self-contained file with ~950 lines of
`<style>` in the `<head>` (design tokens, layout, components). Before writing
any case-study page:

1. Create `/assets/site.css` and move the entire `<style>...</style block
   content from `index.html` into it verbatim (the `:root` tokens, `.header`,
   `.btn`, `.card`, `.tags`, `.footer`, etc. — everything).
2. Replace it in `index.html` with `<link rel="stylesheet" href="/assets/site.css">`.
3. Verify the homepage still renders identically (it will — same CSS, just
   relocated) before touching anything else.

This matters because three new pages are about to need the exact same header,
footer, buttons, card, and color tokens. Duplicating ~950 lines of CSS into
each new file means the next palette or component tweak has to be applied
four times by hand and will drift. One shared stylesheet is the only
version of this that stays maintainable.

Each case-study page is still a plain static HTML file (no build step, no
framework) — this project intentionally has none. Only the CSS becomes
shared; markup and page-specific JS (if any) stay inline per page, consistent
with how the rest of this project works.

## File structure and URLs

```
fp-portfolio/
├── assets/
│   └── site.css              ← extracted shared styles
├── work/
│   ├── reactor.html           → /work/reactor
│   ├── product-kit-generator.html → /work/product-kit-generator
│   └── storefront-analyzer.html   → /work/storefront-analyzer
├── index.html
├── sitemap.xml                ← add the 3 new URLs
└── robots.txt                 ← no change needed, already Allow: /
```

Vercel serves clean extensionless URLs automatically for static `.html`
files in a subdirectory. Confirm `/work/reactor` resolves (not just
`/work/reactor.html`) before calling this done — if it doesn't, add a
`vercel.json` rewrite rule.

## Per-page template

Every case-study page uses the **exact same header and footer** as
`index.html` (same brand mark, same nav — add no new nav items; these pages
are reached via the project cards, not global nav). Content sections, in
order:

### 1. Hero
- Small "Case study" or "Concept" eyebrow (match the tool's actual `status`
  field — "Live tool" pages can say "Case study," concept-stage pages should
  say something honest like "Concept exploration," not implying a shipped
  product).
- Tool name as `<h1>`.
- One-sentence positioning line pulled/adapted from the `description` field
  in `PROJECTS` — don't rewrite the facts, just adapt tone for a standalone
  page (the modal version assumes surrounding context; this page doesn't).
- Two CTAs: primary "Open the tool" (the real `url` from `PROJECTS`,
  `target="_blank" rel="noopener"`) and secondary "← Back to all work"
  linking to `/#work`.

### 2. The problem
Expand the `problem` field from `PROJECTS` into 2-3 sentences. This section
answers: what real situation, for what kind of person or team, made this
worth building? Ground it in specifics already established (e.g. Reactor's
problem statement about not knowing audience reaction until a post is
already live) — don't add invented context.

### 3. Who it's for / positioning
This is the section that's currently *missing* from the modal and is the
main reason this page exists. Answer, using only what's inferable from the
tool's actual mechanics and the wedding-marketplace / B2B SaaS domains
Fernando already works in (per his CLAUDE.md context):
- Who would actually use this (role, situation).
- What channel/moment it'd naturally be distributed through as a growth
  asset — is it a lead magnet, an internal efficiency tool, a sales-enablement
  aid? (`category` field in `PROJECTS` already classifies this: "AI Lead
  Magnets," "Internal Tools," "Conversion & Revenue" — use that
  classification honestly, don't reframe an internal tool as a lead magnet.)
- If it's a lead-magnet-category tool: what makes someone actually finish
  using it and convert (e.g. "URL-first, no signup" reducing friction) —
  this is real growth/CRO thinking, state it as design intent, not as a
  proven outcome unless a real result exists.

### 4. How it works / the execution
Expand the `solution` field into a short walkthrough — what happens when
someone uses it, step by step. This is where the "demand gen execution"
angle shows: not just the feature list, but why it's built this way (e.g.
Competitor Teardowns' citation-validation-in-code as a trust mechanic aimed
at a specific objection: "AI research sounds plausible and might be wrong").
Pull this reasoning from the tool's own README where it exists — do not
speculate about internals that aren't documented.

### 5. What it demonstrates
Use the `demonstrates` field directly — this is already written in the
"skills/capabilities shown" register the rest of the portfolio uses. Expand
each item into a short phrase if useful, but don't add capabilities that
aren't in that field.

### 6. Visual
Reuse the tool's existing inline SVG illustration from the `VISUALS` object
in `index.html` (same `visual` key referenced in its `PROJECTS` entry) so the
page doesn't need new assets. If Fernando provides a real screenshot later,
that can replace it — don't fabricate one now.

### 7. Footer CTA
"See the rest of the work" → `/#work`, plus the same contact CTA
(`mailto:` link) used site-wide, pulled from `SITE.email` /
`SITE.emailSubject` in `index.html`.

## SEO requirements per page

Match the pattern already established in `index.html`'s `<head>` exactly —
same structure, page-specific values:

- Unique `<title>`: `{Tool Name} — {one-line positioning} | Fernando Peccatiello`
- Unique `<meta name="description">` (under ~155 chars, drawn from the
  `description` field, not generic).
- `<link rel="canonical" href="https://www.fernandopeccatiello.com/work/{slug}">`
- Open Graph + Twitter Card tags (`og:type="article"` is more accurate here
  than `profile`), reusing the same `og.png`-style approach — either the
  existing site-wide `og.png` or a per-tool one if time allows (not required
  for the pilot).
- JSON-LD: a `CreativeWork` (or `SoftwareApplication` for the live tools)
  node with `isPartOf` pointing at the existing `#website` node, and
  `author`/`creator` pointing at the existing `#person` node — don't
  duplicate the Person schema, reference it.
- `color-scheme: dark`, `theme-color: #151312` — same as the homepage.

## sitemap.xml

Add the three new URLs with `changefreq: monthly`, `priority: 0.8` (below
the homepage's `1.0`).

## Linking it back into the homepage

In `index.html`, for these three `PROJECTS` entries only, add a second link
next to the existing "Open tool" link/CTA (both in the card and in the
modal): **"Read the case study →"** pointing at `/work/{slug}`. Don't touch
the other six project entries yet.

## Design constraints (must match the live site)

- Dark warm-charcoal + amber theme already live: `--bg:#151312`,
  `--surface:#262019`, `--accent:#ff7a1a`, `--accent-ink:#ff9c56`, on-accent
  text `#1a0f06` — these all come from `/assets/site.css` once extracted, so
  this should be automatic as long as the page links that stylesheet and
  reuses the existing class names (`.hero`, `.card`, `.btn`, `.eyebrow`,
  `.t-hero`, `.t-lede`, etc.) rather than writing new ones.
- Same fonts (system font stack + Onest fallback via Google Fonts), same
  button styles, same spacing scale (the `--gutter`, `--maxw` tokens).
- Mobile-checked at 375px viewport before calling any page done — this is a
  hard requirement Fernando enforces on everything in this project.
- No new colors, no gradients beyond what's already defined in
  `/assets/site.css`, no invented components — every visual element on
  these pages should already exist somewhere in `index.html`.

## Definition of done (per page)

- [ ] Renders identically in header/footer/typography to the homepage
- [ ] All content traceable to `PROJECTS`/README, nothing invented
- [ ] Status (Live tool vs. Concept experiment) stated honestly, not implied
      otherwise anywhere on the page
- [ ] Unique title/description/canonical/OG/JSON-LD, no duplicate content
      warnings
- [ ] Checked at 375px, 768px, and desktop width
- [ ] Added to `sitemap.xml`
- [ ] Linked from the homepage card + modal for that tool
- [ ] `/work/{slug}` resolves without the `.html` extension
