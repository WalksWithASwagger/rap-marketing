// Sprint 6 accessibility audit.
//
// Requires puppeteer + @axe-core/puppeteer locally:
//   npm install --no-save puppeteer @axe-core/puppeteer
//
// Then start the production server and run:
//   npm run build && npm run start &
//   node scripts/run-axe.mjs
//
// Expected: 0 violations across all 12 routes.

import puppeteer from "puppeteer";
import { AxePuppeteer } from "@axe-core/puppeteer";

const ROUTES = [
  "/",
  "/program",
  "/program/m1",
  "/program/m2",
  "/program/m3",
  "/program/m4",
  "/methodology",
  "/instructors",
  "/cohorts",
  "/pricing",
  "/faq",
  "/enroll",
];

const BASE = process.env.AXE_BASE_URL || "http://localhost:3000";

const browser = await puppeteer.launch({ headless: true });
let total = 0;
const failures = [];

for (const route of ROUTES) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  try {
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
  } catch (e) {
    console.log(`! ${route} navigation error: ${e.message}`);
    failures.push({ route, error: e.message });
    await page.close();
    continue;
  }
  const results = await new AxePuppeteer(page)
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
    .analyze();
  const v = results.violations;
  total += v.length;
  if (v.length === 0) {
    console.log(`OK   ${route}`);
  } else {
    console.log(`FAIL ${route}  (${v.length} violations)`);
    for (const violation of v) {
      console.log(
        `   - [${violation.impact}] ${violation.id}: ${violation.help} (${violation.nodes.length} nodes)`
      );
      for (const n of violation.nodes.slice(0, 3)) {
        console.log(`        target: ${n.target.join(" ")}`);
        if (n.failureSummary) console.log(`        ${n.failureSummary.replace(/\n/g, " | ")}`);
      }
    }
    failures.push({ route, violations: v });
  }
  await page.close();
}

await browser.close();
console.log(`\nTotal violations across ${ROUTES.length} routes: ${total}`);
process.exit(total === 0 && failures.length === 0 ? 0 : 1);
