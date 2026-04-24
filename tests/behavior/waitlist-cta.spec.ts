import { expect, test } from "@playwright/test";

test("all waitlist CTAs point to the same external URL", async ({ page }) => {
  await page.goto("/en");
  await page.waitForLoadState("networkidle");
  const links = page.getByRole("link", { name: /join the waitlist/i });
  const count = await links.count();
  expect(count).toBeGreaterThanOrEqual(2); // nav, hero, waitlist section
  const urls = await links.evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
  expect(new Set(urls).size).toBe(1);
  expect(urls[0]).toMatch(/^https?:\/\//);
});
