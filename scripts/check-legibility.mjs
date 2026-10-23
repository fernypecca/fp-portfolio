import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.env.AUDIT_URL || "http://localhost:3000";
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const result = await page.locator(".tool-grid").evaluate((grid) => {
      const small = [];
      const clipped = [];
      for (const card of grid.querySelectorAll(".tool")) {
        const bounds = card.getBoundingClientRect();
        const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const node = walker.currentNode;
          if (!node.textContent.trim()) continue;
          const element = node.parentElement;
          const style = getComputedStyle(element);
          if (style.display === "none" || style.visibility === "hidden") continue;
          const scale = element instanceof SVGElement ? element.getScreenCTM()?.a || 1 : 1;
          const size = parseFloat(style.fontSize) * scale;
          if (size < 11.98) small.push({ text: node.textContent.trim(), size });
          const range = document.createRange();
          range.selectNodeContents(node);
          if ([...range.getClientRects()].some((r) => r.left < bounds.left - 1 || r.right > bounds.right + 1)) clipped.push(node.textContent.trim());
        }
      }
      return { small, clipped, cards: grid.querySelectorAll(".tool").length, previews: grid.querySelectorAll(".tool-demo").length, overflow: document.documentElement.scrollWidth > innerWidth };
    });
    assert.deepEqual(result.small, [], `${width}px: card labels must remain at least 12 rendered pixels`);
    assert.deepEqual(result.clipped, [], `${width}px: text must remain inside its card`);
    assert.equal(result.cards, 9);
    assert.equal(result.previews, 9);
    assert.equal(result.overflow, false);
    console.log(`PASS legible tool cards at ${width}px: no microtext or clipping`);
  }
} finally { await browser.close(); }
