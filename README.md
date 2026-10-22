# Fernando Peccatiello — Growth & Demand Lead

Hiring portfolio built with Next.js App Router and React. Public copy is in English. Read CLIENT.md before changing brand, positioning or claims.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. If a development server is already running there, reuse it.

## Production verification

```sh
npm run build:check
npm run preview:check
```

In a second terminal:

```sh
npx playwright install chromium
AUDIT_URL=http://localhost:3001 npm run check
npm audit
```

The check uses Playwright and Axe to verify visible content without JavaScript and with reduced motion, the five responsive sizes, contrast and common accessibility rules, skip-link focus, the case-study loop, permanent redirects, security headers and 404 status. It also checks the native hero illustration, phase progression, pause/resume and pausing outside the viewport. It does not submit forms or call external tool-generation APIs. Automated checks do not replace screen-reader or physical-device testing.

Verification builds use .next-check so they do not overwrite assets held by an existing server on port 3000. The normal npm run build / npm start workflow still uses .next for deployment. The checker covers five widths: 375, 390, 768, 1024 and 1440 px.

## Project structure

- app/: home, case routes, 404, sitemap, robots and global styles.
- components/: shared server-rendered UI; Reveal adds optional native browser animation after hydration. It never hides content. HeroSystem is a small React/SVG workflow illustration with play/pause, reduced-motion support and no image or animation-library dependency.
- lib/tools.js: source of truth for nine tools, states, links and SVG previews.
- lib/tool-summary.js: counts derived from the inventory.
- lib/cases.js: case content, product-scope metrics, validation limits and case sequence.
- lib/case-visuals.js: illustrative case diagrams, not production screenshots.
- lib/site.js: canonical origin, contact/social links and versioned social-image path.
- public/images/: actual interface screenshots used by the app.
- og.svg and scripts/generate-og.mjs: social-card source and renderer.
- scripts/check-portfolio.mjs: repeatable browser checks.
- work/: implementation notes and handoff.

## Content and accessibility

The portfolio seeks Growth & Demand Lead interviews, not freelance projects. Keep live tools, concepts and internal workflows distinct. Case metrics describe product scope; business impact is not documented and must not be invented. Reactor is synthetic exploration, not evidence of human conversion lift.

The app has one main landmark per page, a keyboard skip link, visible focus rings on both surface colors, descriptive image/SVG labels and progressive animation that respects prefers-reduced-motion. No JavaScript is required to read content or use ordinary links. There are no lead forms or time-limited offers; form UTMs/countdowns are not applicable.

## Social preview

```sh
npm run og
```

This renders the 1200×630 source SVG to public/og-growth-demand-v2.png, public/og.png and root og.png. Metadata uses the versioned path to avoid the former image's long cache. If the image content changes again, bump the filename in lib/site.js, scripts/generate-og.mjs and next.config.mjs. Update the SVG inventory line when tools change. The unversioned path remains available for existing links.

## Redirects and deployment configuration

next.config.mjs is the single source for the four legacy .html redirects (308) and security headers, both locally and on Vercel. The CSP limits base URLs, objects, framing and form actions; it is not a nonce-based script policy. vercel.json selects the Next.js framework and does not duplicate routing rules.

Routes: /, /work/reactor, /work/storefront-analyzer, /work/product-kit-generator, /robots.txt, /sitemap.xml and the custom 404.

Root index.html, work/*.html and the HTML design concepts are legacy/reference sources outside public/ and app/. Next.js does not serve them. Keep them as references; do not deploy the repository as a static HTML directory or treat those files as the current UI.

Vercel deployment is a separate, explicitly authorized action. No deployment is needed to run these checks. External LinkedIn/Claude anti-bot challenges and third-party tool backends cannot be validated by the local checker.
