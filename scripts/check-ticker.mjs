import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.env.AUDIT_URL || "http://localhost:3000";
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 2560, height: 900 } });
  await page.goto(base, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".ticker").evaluate((node) => !!(node.compareDocumentPosition(document.querySelector(".stats")) & Node.DOCUMENT_POSITION_FOLLOWING)), true, "The disciplines strip should come before the inventory");
  await page.locator(".ticker").scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector(".ticker")?.dataset.moving === "true");
  assert.equal(await page.locator(".ticker").evaluate((node) => node.querySelector(".ticker__group").getBoundingClientRect().width >= node.querySelector(".ticker__window").clientWidth), true, "Each repeated group must cover an ultrawide window");
  await page.setViewportSize({ width: 1440, height: 900 });
  const track = page.locator(".ticker-track");
  const x = () => track.evaluate((node) => node.getBoundingClientRect().x);
  const first = await x();
  await page.waitForTimeout(500);
  assert.ok(Math.abs(await x() - first) > 3, "The track must visibly move");
  console.log("PASS animated disciplines strip precedes inventory");

  await page.getByRole("button", { name: "Pause disciplines animation", exact: true }).click();
  await page.waitForFunction(() => document.querySelector(".ticker").dataset.moving === "false");
  const paused = await x();
  await page.waitForTimeout(500);
  assert.ok(Math.abs(await x() - paused) < 0.25, "Pause freezes the track");
  await page.getByRole("button", { name: "Play disciplines animation", exact: true }).click();
  await page.waitForFunction(() => document.querySelector(".ticker").dataset.moving === "true");
  const resumed = await x();
  await page.waitForTimeout(500);
  assert.ok(Math.abs(await x() - resumed) > 3);
  console.log("PASS disciplines pause and resume");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(() => document.querySelector(".ticker__control").disabled);
  await page.waitForTimeout(150);
  assert.equal(await track.evaluate((node) => node.getAnimations().filter((animation) => animation.playState === "running").length), 0);
  const staticWindow = page.locator(".ticker__window");
  assert.equal(await staticWindow.getAttribute("tabindex"), "0");
  assert.equal(await staticWindow.evaluate((node) => {
    node.scrollLeft = node.scrollWidth;
    const last = node.querySelector(".ticker__group").lastElementChild.getBoundingClientRect();
    return node.scrollLeft > 0 && last.right <= node.getBoundingClientRect().right + 1;
  }), true, "All disciplines remain reachable in reduced motion");
  console.log("PASS reduced motion disables the disciplines animation");

  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 844 } });
  const staticPage = await noJS.newPage();
  await staticPage.goto(base);
  assert.equal(await staticPage.locator(".ticker").getAttribute("data-moving"), "false");
  assert.equal(await staticPage.locator(".ticker__window").getAttribute("tabindex"), "0");
  assert.equal(await staticPage.locator(".tool").count(), 9);
  assert.equal(await staticPage.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  console.log("PASS static strip and tool cards remain available without JS");
  await noJS.close();
} finally { await browser.close(); }
