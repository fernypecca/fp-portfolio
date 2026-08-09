# Fernando Peccatiello — Portfolio

Single-page personal portfolio. One standalone `index.html`: embedded CSS, vanilla JS, no build step, no npm, no backend.

## Editing

Everything editable lives in the first `<script>` block of `index.html`, between
`EDITABLE DATA` and `END EDITABLE DATA`:

| Constant | What it controls |
| --- | --- |
| `SITE` | Name, role, email, LinkedIn, headline, intro, capability markers, approach principles, about copy, skills, footer |
| `FILTERS` | The filter buttons in Selected work |
| `PROJECTS` | Project cards and modals — order in this array is the order on the page |

Each project takes: `name`, `category`, `status` (`Live tool` / `Internal tool` /
`Concept experiment`), `url`, `visual`, `description`, `problem`, `solution`,
`demonstrates`, `tags`.

`visual` maps to a key in the `VISUALS` object further down the file — each one is
a hand-written inline SVG (`roi`, `analyzer`, `qa`, `kit`, `background`, `popup`).
Add a new key there to give a new project its own illustration.

## Design system

- **Type** — San Francisco on Apple platforms via `-apple-system`, [Onest](https://fonts.google.com/specimen/Onest) everywhere else.
- **Colour** — neutral greys (`#ffffff` / `#f5f5f7` / `#1d1d1f` / `#6e6e73`) with a single Pacific Blue accent (`#2A6F8A`, accent text `#215A72`), taken from Apple's hardware finish palette rather than their web link blue.
- **Radii** — 8 / 14 / 20 / 28px plus pill.

Status chips differentiate by fill weight, not by hue, so the page stays
single-accent: *Live tool* is a solid accent fill, *Internal tool* a grey fill,
*Concept experiment* an outlined chip.

All text/background pairs are at or above WCAG AA (4.5:1) — lowest is 5.07:1.

## SEO

`index.html` carries a canonical URL, Open Graph / Twitter cards, and a JSON-LD
`@graph` (`Person` + `WebSite` + `ProfilePage`). The `Person` node with its
`sameAs` links to LinkedIn and GitHub is what carries ranking for name queries.

`og.png` (1200×630) is generated from `og.svg`:

```bash
qlmanage -t -s 1200 -o . og.svg && mv og.svg.png og.png && sips -c 630 1200 og.png --out og.png
```

`robots.txt` and `sitemap.xml` sit at the root.

### Domain

Live at `www.fernandopeccatiello.com` — Vercel 308-redirects the apex there,
so www is the canonical URL used in `index.html`, `sitemap.xml`, and
`robots.txt`.

To repoint to a different domain, every absolute URL lives in those three
files. Swap them in one command, then redeploy:

```bash
sed -i '' 's|https://www.fernandopeccatiello.com|https://YOURDOMAIN.com|g' index.html sitemap.xml robots.txt
```

Then point the domain at Vercel (`vercel domains add YOURDOMAIN.com`), verify the
property in Google Search Console, submit the sitemap, and add the domain to the
Website field of the LinkedIn and GitHub profiles.

## Accessibility

Skip link, semantic landmarks, visible `:focus-visible` rings, `aria-pressed`
filters with a live region announcing the result count, native `<dialog>` for the
project modal (Esc to close, focus returns to the trigger), and full
`prefers-reduced-motion` support. Responsive down to 375px.

## Local preview

```bash
npx serve .
```

Or just open `index.html` in a browser.

## Deploy

Static site on Vercel — no framework, no build command. Push to `main` and Vercel
redeploys.
