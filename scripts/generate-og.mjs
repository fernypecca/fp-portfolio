import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

// One source for the versioned social card and the backward-compatible URL.
const svg = await readFile(new URL("../og.svg", import.meta.url));
const png = await sharp(svg).png().toBuffer();
for (const file of ["../public/og-growth-demand-v3.png", "../public/og-growth-demand-v2.png", "../public/og.png", "../og.png"]) {
  await writeFile(new URL(file, import.meta.url), png);
}
console.log("Generated 1200×630 social card and compatibility copies.");
