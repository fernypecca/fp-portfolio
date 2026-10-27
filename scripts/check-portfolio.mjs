import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { chromium } from "playwright";

const base = process.env.AUDIT_URL || "http://localhost:3000";
const routes = ["/", "/work/reactor", "/work/storefront-analyzer", "/work/product-kit-generator"];
const browser = await chromium.launch();
const failures = [];
const check = async (name, fn) => {
  try { await fn(); console.log(`PASS ${name}`); }
  catch (error) { failures.push(name); console.error(`FAIL ${name}: ${error.message}`); }
};
const scrollAll = (page) => page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    scrollTo({ top: y, behavior: "instant" });
    await new Promise((resolve) => setTimeout(resolve, 60));
  }
});
const hiddenHeadings = (page) => page.locator("h1,h2,h3").evaluateAll((headings) => headings.filter((heading) => {
  if (heading.closest("details:not([open])")) return false;
  for (let node = heading; node; node = node.parentElement) {
    const style = getComputedStyle(node);
    if (style.opacity === "0" || style.visibility === "hidden" || style.display === "none") return true;
  }
  return false;
}).map((heading) => heading.textContent));

try {
  for (const mode of ["no-js", "reduced-motion"]) {
    const context = await browser.newContext({ javaScriptEnabled: mode !== "no-js", reducedMotion: mode === "reduced-motion" ? "reduce" : "no-preference", viewport: { width: 375, height: 844 } });
    const page = await context.newPage();
    for (const route of routes) await check(`${mode}: ${route} remains readable`, async () => {
      await page.goto(base + route, { waitUntil: "networkidle" });
      if (mode !== "no-js") await scrollAll(page);
      await page.waitForTimeout(1000);
      assert.deepEqual(await hiddenHeadings(page), []);
    });
    await context.close();
  }
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const axeSource = await readFile(new URL("../node_modules/axe-core/axe.min.js", import.meta.url), "utf8");
  for (const [width, height] of [[375,844], [390,844], [768,1024], [1024,768], [1440,900]]) {
    await page.setViewportSize({ width, height });
    for (const route of routes) await check(`${width}x${height}: ${route}`, async () => {
      const response = await page.goto(base + route, { waitUntil: "networkidle" });
      assert.equal(response.status(), 200);
      if (route === "/" && await page.locator(".tool-collection").count()) await page.locator(".tool-collection summary").click();
      await scrollAll(page);
      await page.waitForTimeout(1000);
      assert.deepEqual(await hiddenHeadings(page), []);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, "horizontal overflow");
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.locator("a a,a button,button a,button button").count(), 0);
      await page.addScriptTag({ content: axeSource });
      const violations = await page.evaluate(async () => (await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"] } })).violations.map((v) => ({ rule: v.id, nodes: v.nodes.map((n) => ({ target: n.target, reason: n.failureSummary })) })));
      assert.deepEqual(violations, []);
    });
  }
  await check("skip link moves keyboard focus to main", async () => {
    await page.goto(base);
    await page.keyboard.press("Tab");
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute("href")), "#main-content");
    await page.keyboard.press("Enter");
    assert.equal(await page.evaluate(() => document.activeElement.id), "main-content");
  });
  await check("case study loop", async () => {
    await page.goto(base + "/work/reactor");
    for (const slug of ["storefront-analyzer", "product-kit-generator", "reactor"]) {
      await page.locator(".next a").click();
      await page.waitForURL(`**/work/${slug}`);
    }
  });
  await check("legacy URLs redirect permanently", async () => {
    for (const path of ["/index", "/work/reactor", "/work/storefront-analyzer", "/work/product-kit-generator"]) {
      const response = await context.request.get(base + path + ".html", { maxRedirects: 0 });
      assert.equal(response.status(), 308, path);
      assert.equal(new URL(response.headers().location, base).pathname, path === "/index" ? "/" : path);
    }
  });
  await check("unique metadata and structured data", async () => {
    const canonicalUrls = new Set();
    for (const route of routes) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      const metadata = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        image: document.querySelector('meta[property="og:image"]')?.content,
        twitter: document.querySelector('meta[name="twitter:card"]')?.content,
        types: [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((s) => JSON.parse(s.textContent)["@graph"].map((node) => node["@type"])),
      }));
      assert.ok(metadata.title.length <= 65, metadata.title);
      assert.ok(metadata.description);
      assert.equal(new URL(metadata.canonical).pathname, route);
      canonicalUrls.add(metadata.canonical);
      assert.ok(metadata.image.endsWith("/og-growth-demand-v3.png"));
      assert.equal(metadata.twitter, "summary_large_image");
      assert.deepEqual(metadata.types, route === "/" ? ["Person", "WebSite", "ProfilePage"] : ["SoftwareApplication", "BreadcrumbList"]);
    }
    assert.equal(canonicalUrls.size, routes.length);
  });
  await check("security headers and 404", async () => {
    const response = await context.request.get(base);
    assert.equal(response.headers()["x-content-type-options"], "nosniff");
    assert.equal(response.headers()["x-frame-options"], "DENY");
    assert.ok(response.headers()["content-security-policy"].includes("frame-ancestors 'none'"));
    assert.equal((await context.request.get(base + "/missing-page")).status(), 404);
  });
  await check("no browser errors", async () => assert.deepEqual(errors, []));
  await context.close();
} finally { await browser.close(); }
if (failures.length) { console.error(`${failures.length} checks failed`); process.exitCode = 1; }
