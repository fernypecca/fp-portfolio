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
- **Colour** — neutral greys (`#ffffff` / `#f5f5f7` / `#1d1d1f` / `#6e6e73`) with a single blue accent (`#0071e3`, links `#0066cc`).
- **Radii** — 8 / 14 / 20 / 28px plus pill.

All text/background pairs are at or above WCAG AA (4.5:1).

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
