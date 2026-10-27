import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.env.AUDIT_URL || "http://localhost:3000";
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".tool-grid").first().locator(".tool").count(), 3, "Lead with the three case studies");
  for (const card of await page.locator(".tool-grid").first().locator(".tool").all()) {
    assert.match(await card.locator(".tool__actions a").first().getAttribute("href"), /^\/work\//);
    assert.ok((await card.locator(".tool__case").boundingBox()).height >= 44);
  }
  assert.equal(await page.locator(".tool-collection").getAttribute("open"), null);
  assert.equal(await page.locator(".tool-collection .tool").count(), 6);
  await page.locator(".tool-collection summary").click();
  assert.equal(await page.locator(".tool:visible").count(), 9);
  console.log("PASS case-study path leads with cases and expands the full collection");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  const menu = page.locator(".mobile-nav");
  const summary = menu.locator("summary");
  await summary.click();
  await menu.getByRole("link", { name: "About", exact: true }).click();
  await page.waitForURL("**/#about");
  assert.equal(await menu.getAttribute("open"), null);
  assert.ok(await page.locator("#about").evaluate((node) => node.getBoundingClientRect().top >= 90));
  await summary.click();
  await summary.press("Escape");
  assert.equal(await menu.getAttribute("open"), null);
  assert.equal(await summary.evaluate((node) => document.activeElement === node), true);
  for (const selector of [".mobile-nav summary", ".brand", ".ticker__control"]) {
    const rect = await page.locator(selector).boundingBox();
    assert.ok(rect.width >= 44 && rect.height >= 44, selector);
  }
  console.log("PASS mobile navigation supports section links, Escape and touch targets");

  for (const slug of ["reactor", "storefront-analyzer", "product-kit-generator"]) {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${base}/work/${slug}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator(".case-decision").count(), 1);
      assert.equal(await page.locator(".case-diagram").count(), 3);
      const small = await page.locator(".case-diagram,.case-preview").evaluateAll((roots) => roots.flatMap((root) => [...root.querySelectorAll("*")].filter((node) => [...node.childNodes].some((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim())).map((node) => ({ text: node.textContent, size: parseFloat(getComputedStyle(node).fontSize) * (node instanceof SVGElement ? node.getScreenCTM().a : 1) })).filter((item) => item.size < 11.98)));
      assert.deepEqual(small, [], `${slug}: illustration labels remain readable at ${width}px`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      if (width < 760) assert.equal(await page.locator(".metric").evaluateAll((items) => new Set(items.map((item) => item.getBoundingClientRect().x)).size), 1);
    }
    console.log(`PASS readable case illustrations and mobile scope rows: ${slug}`);
  }

  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noJS.newPage();
  await staticPage.goto(base);
  await staticPage.locator(".mobile-nav summary").click();
  assert.equal(await staticPage.locator(".mobile-nav nav").isVisible(), true);
  await staticPage.locator(".mobile-nav summary").click();
  await staticPage.locator(".tool-collection summary").click();
  assert.equal(await staticPage.locator(".tool:visible").count(), 9);
  await noJS.close();
  console.log("PASS native menu and collection disclosure work without JavaScript");
} finally { await browser.close(); }
