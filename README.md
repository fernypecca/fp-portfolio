# Fernando Peccatiello — Growth & Demand Lead

Professional portfolio built with Next.js App Router and React. Public copy is in English. Read CLIENT.md before changing brand, positioning or claims.

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

The check uses Playwright and Axe to verify visible content without JavaScript and with reduced motion, the five responsive sizes, contrast and common accessibility rules, skip-link focus, the case-study loop, permanent redirects, security headers and 404 status. It also checks the native hero illustration, phase progression, pause/resume and pausing outside the viewport. The disciplines strip is checked for movement, placement above the inventory, pause/resume, ultrawide coverage and manual scrolling with reduced motion or without JavaScript. Card legibility checks cover six widths from 320 to 1440 px, checking a 12 px minimum rendered label size, all nine previews and text clipping. This minimum is a project design guardrail, not an accessibility certification. It does not submit forms or call external tool-generation APIs. Automated checks do not replace screen-reader or physical-device testing.

Verification builds use .next-check so they do not overwrite assets held by an existing server on port 3000. The normal npm run build / npm start workflow still uses .next for deployment. The checker covers five widths: 375, 390, 768, 1024 and 1440 px.

The home leads with three case studies and keeps the other six tools in a native disclosure. `check:journey` verifies this case-study path, case-first CTAs, the mobile menu, Escape/focus behavior, no-JS disclosure, readable case diagrams at five widths and full-width mobile scope rows. The main accessibility pass opens the wider collection so all nine tools remain covered.

## Project structure

- app/: home, case routes, 404, sitemap, robots and global styles.
- components/: shared server-rendered UI; Reveal adds optional native browser animation after hydration. It never hides content. HeroSystem is a small React/SVG workflow illustration with play/pause, reduced-motion support and no image or animation-library dependency.
- lib/tools.js: source of truth for nine tools, states and links.
- components/ToolPreview.jsx and components/tool-previews.css: server-rendered illustrative previews with responsive HTML labels and decorative SVG/CSS graphics. Text stays readable instead of shrinking with an SVG viewBox.
- components/MobileNav.jsx: native details navigation with Escape, outside-click and link closing after hydration. Native disclosure remains usable without JavaScript.
- components/CaseDiagram.jsx: HTML labels and decorative geometry for the case galleries. Concept heroes share ToolPreview; Reactor keeps its real screenshot.
- lib/tool-summary.js: counts derived from the inventory.
- lib/cases.js: case content, product-scope metrics, validation limits and case sequence.
- lib/case-visuals.js: structured data for illustrative case diagrams, not production screenshots or campaign results.
- lib/site.js: canonical origin, contact/social links and versioned social-image path.
- public/images/: actual interface screenshots used by the app.
- og.svg and scripts/generate-og.mjs: social-card source and renderer.
- scripts/check-portfolio.mjs: repeatable browser checks.
- scripts/check-hero.mjs and scripts/check-ticker.mjs: animated component and static fallback checks.
- scripts/check-legibility.mjs: minimum card label size and clipping checks.
- scripts/check-journey.mjs: case-study path, mobile navigation and case illustration checks.
- work/: implementation notes and handoff.

## Content and accessibility

The portfolio presents Growth & Demand Lead work and invites professional conversation. Public copy does not advertise job availability or freelance services. Keep live tools, concepts and internal workflows distinct. Case metrics describe product scope; business impact is not documented and must not be invented. Reactor is synthetic exploration, not evidence of human conversion lift.

The app has one main landmark per page, a keyboard skip link, visible focus rings on both surface colors, descriptive image/SVG labels and progressive animation that respects prefers-reduced-motion. No JavaScript is required to read content or use ordinary links. There are no lead forms or time-limited offers; form UTMs/countdowns are not applicable.

## Social preview

```sh
npm run og
```

This renders the 1200×630 source SVG to public/og-growth-demand-v3.png and the compatibility paths public/og-growth-demand-v2.png, public/og.png and root og.png. Metadata uses the versioned path to avoid the former image's long cache. If the image content changes again, bump the filename in lib/site.js, scripts/generate-og.mjs and next.config.mjs. Update the SVG inventory line when tools change. Compatibility copies use the current neutral professional copy.

The production domain also uses Cloudflare. Its cache rule “Revalidate portfolio OG compatibility image” matches only `/og.png` on the apex and www hosts and sets Browser TTL to Respect origin TTL. This lets the `max-age=0, must-revalidate` header in next.config.mjs take effect despite the zone's four-hour browser-cache default. Versioned social images retain their one-year immutable cache. Verify the public response headers after changing either configuration.

## Redirects and deployment configuration

next.config.mjs is the single source for the four legacy .html redirects (308) and security headers, both locally and on Vercel. The CSP limits base URLs, objects, framing and form actions; it is not a nonce-based script policy. vercel.json selects the Next.js framework and does not duplicate routing rules.

Routes: /, /work/reactor, /work/storefront-analyzer, /work/product-kit-generator, /robots.txt, /sitemap.xml and the custom 404.

Root index.html, work/*.html and the HTML design concepts are legacy/reference sources outside public/ and app/. Next.js does not serve them. Keep them as references; do not deploy the repository as a static HTML directory or treat those files as the current UI.

Vercel deployment is a separate, explicitly authorized action. No deployment is needed to run these checks. External LinkedIn/Claude anti-bot challenges and third-party tool backends cannot be validated by the local checker.
