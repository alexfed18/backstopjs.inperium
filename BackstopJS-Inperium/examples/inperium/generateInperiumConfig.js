#!/usr/bin/env node
/*
 Generates BackstopJS config comparing https://inperium.org (reference) vs https://test.inperium.org (test)
 by reading both sitemap.xml files and selecting up to 50 shared paths.
*/

const https = require("https");
const fs = require("fs");
const path = require("path");

const PROD_BASE = "https://inperium.org";
const TEST_BASE = "https://test.inperium.org";
const PROD_SITEMAP = "https://inperium.org/sitemap.xml";
const TEST_SITEMAP = "https://test.inperium.org/sitemap.xml";
const OUTPUT_PATH = path.join(__dirname, "backstop.config.js");
const MAX_URLS = 50;

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          // follow redirects
          fetchText(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      })
      .on("error", reject);
  });
}

function parseLocUrlsFromSitemap(xml) {
  const urls = [];
  const regex = /<loc>\s*([^<\s][^<]*)\s*<\/loc>/gi;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    const raw = match[1].trim();
    // Basic validation
    if (/^https?:\/\//i.test(raw)) {
      urls.push(raw);
    }
  }
  return urls;
}

function getPathname(urlString) {
  try {
    const u = new URL(urlString);
    return u.pathname.replace(/\/$/, "") || "/";
  } catch {
    return null;
  }
}

function filterHost(urls, host) {
  return urls.filter((u) => {
    try {
      return new URL(u).host === host;
    } catch {
      return false;
    }
  });
}

async function main() {
  console.log("Fetching sitemaps...");
  const [prodXml, testXml] = await Promise.all([
    fetchText(PROD_SITEMAP),
    fetchText(TEST_SITEMAP),
  ]);

  const prodAll = parseLocUrlsFromSitemap(prodXml);
  const testAll = parseLocUrlsFromSitemap(testXml);

  const prodHost = new URL(PROD_BASE).host;
  const testHost = new URL(TEST_BASE).host;

  const prodUrls = filterHost(prodAll, prodHost);
  const testUrls = filterHost(testAll, testHost);

  const prodPaths = prodUrls.map(getPathname).filter(Boolean);
  const testPaths = new Set(testUrls.map(getPathname).filter(Boolean));

  // Keep prod order, intersect with test
  const intersectPaths = [];
  const seen = new Set();
  for (const p of prodPaths) {
    if (testPaths.has(p) && !seen.has(p)) {
      intersectPaths.push(p);
      seen.add(p);
    }
    if (intersectPaths.length >= MAX_URLS) break;
  }

  if (intersectPaths.length === 0) {
    throw new Error("No shared URLs found between prod and test sitemaps.");
  }

  console.log(`Selected ${intersectPaths.length} shared paths.`);

  const scenarios = intersectPaths.map((p, idx) => {
    const label = p === "/" ? "home" : p.replace(/^\//, "").replace(/\//g, "_");
    return {
      label: `${String(idx + 1).padStart(3, "0")}_${label}`,
      url: `${TEST_BASE}${p}`,
      referenceUrl: `${PROD_BASE}${p}`,
      selectors: ["document"],
      selectorExpansion: true,
      requireSameDimensions: true,
      misMatchThreshold: 0.1,
    };
  });

  const config = {
    id: "inperium-prod-vs-test",
    viewports: [
      { label: "phone", width: 375, height: 800 },
      { label: "tablet", width: 768, height: 1024 },
      { label: "desktop", width: 1366, height: 800 },
    ],
    engine: "playwright",
    engineOptions: {
      browser: "chromium",
      headless: true,
      args: ["--no-sandbox"],
      waitTimeout: 90000,
      actionTimeout: 120000,
      gotoParameters: { waitUntil: "networkidle" },
    },
    scenarios,
    paths: {
      bitmaps_reference: "examples/inperium/backstop_data/bitmaps_reference",
      bitmaps_test: "examples/inperium/backstop_data/bitmaps_test",
      engine_scripts: "capture/engine_scripts/playwright",
      html_report: "examples/inperium/backstop_data/html_report",
      ci_report: "examples/inperium/backstop_data/ci_report",
    },
    report: ["browser", "CI"],
    asyncCaptureLimit: 3,
    asyncCompareLimit: 20,
    debug: false,
  };

  const output = `module.exports = ${JSON.stringify(config, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_PATH, output, "utf8");
  console.log(`Wrote Backstop config to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
