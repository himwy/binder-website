import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

type ScreenSpec = { name: string; selector: string };

const screens: ScreenSpec[] = [
  { name: "browse-feed", selector: "#phone-browse" },
  { name: "new-listing", selector: "#phone-new-listing" },
  { name: "chat-offer", selector: "#phone-chat" },
  { name: "listing-detail", selector: "#phone-listing-detail" },
  { name: "district", selector: "#phone-district" },
];

async function main() {
  const outDir = path.resolve("public/screens");
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 600, height: 1200 },
    deviceScaleFactor: 2,
  });
  await page.goto("http://localhost:3000/en/_dev/bake");
  for (const { name, selector } of screens) {
    const el = page.locator(selector);
    await el.screenshot({ path: path.join(outDir, `${name}.png`), omitBackground: true });
    console.log(`baked ${name}`);
  }
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
