import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.env.AUDIT_URL || "http://localhost:3000";
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".hero img").count(), 0, "Hero must use the native illustration, not screenshots");
  assert.equal(await page.locator(".hero-note").count(), 0, "Remove the inventory line from the hero");
  assert.equal(await page.locator(".stats .stat").count(), 4, "Keep the separate inventory section");
  const figure = page.locator(".hero-system");
  await figure.waitFor();
  await page.waitForFunction(() => document.querySelector(".hero-system")?.dataset.playing === "true");
  const initial = await figure.getAttribute("data-phase");
  await page.waitForFunction((phase) => document.querySelector(".hero-system").dataset.phase !== phase, initial);
  await page.getByRole("button", { name: "Pause animation", exact: true }).click();
  const paused = await figure.getAttribute("data-phase");
  await page.waitForTimeout(2600);
  assert.equal(await figure.getAttribute("data-playing"), "false");
  assert.equal(await figure.getAttribute("data-phase"), paused, "Pausing freezes the React loop");
  assert.equal(await figure.evaluate((node) => node.getAnimations({ subtree: true }).filter((animation) => animation.playState === "running").length), 0);
  await page.getByRole("button", { name: "Play animation", exact: true }).click();
  await page.waitForFunction(() => document.querySelector(".hero-system").dataset.playing === "true");
  console.log("PASS hero composition, animated phases, pause and resume");

  await page.evaluate(() => scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
  await page.waitForFunction(() => document.querySelector(".hero-system").dataset.playing === "false");
  console.log("PASS animation pauses outside the viewport");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForFunction(() => document.querySelector(".hero-system__control").disabled);
  await page.waitForTimeout(150);
  assert.equal(await figure.evaluate((node) => node.getAnimations({ subtree: true }).filter((animation) => animation.playState === "running").length), 0);
  assert.equal(await figure.getAttribute("data-playing"), "false");
  console.log("PASS reduced motion keeps the illustration still");
  await page.close();

  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 844 } });
  const staticPage = await noJS.newPage();
  await staticPage.goto(base);
  const state = await staticPage.locator(".hero-system").evaluate((node) => ({
    opacity: getComputedStyle(node).opacity,
    svg: node.querySelector("svg[role=img]")?.getBoundingClientRect().width,
    caption: node.querySelector("figcaption")?.textContent,
  }));
  assert.equal(state.opacity, "1");
  assert.ok(state.svg > 0 && state.caption.includes("Diagnose"));
  console.log("PASS static hero remains readable without JavaScript");
  await noJS.close();
} finally { await browser.close(); }
