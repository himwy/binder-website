import { expect, test } from "@playwright/test";

const APP_STORE = "https://apps.apple.com/hk/app/id6794384936";

test("every download CTA points at the App Store listing", async ({ page }) => {
  await page.goto("/en");
  const links = page.getByRole("link", { name: /app store|get the app/i });
  const count = await links.count();
  expect(count).toBeGreaterThanOrEqual(3); // nav, hero, download band
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toHaveAttribute("href", APP_STORE);
  }
});

test("Android is announced as coming soon, with no dead Play link", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByText(/android · coming soon/i).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /google play/i })).toHaveCount(0);
});

test("the old waitlist URL forwards to the store", async ({ page }) => {
  await page.goto("/en/waitlist");
  await expect(page.getByRole("link", { name: /click here to download/i })).toHaveAttribute(
    "href",
    APP_STORE,
  );
});
