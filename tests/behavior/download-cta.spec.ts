import { expect, test } from "@playwright/test";

const APP_STORE = "https://apps.apple.com/hk/app/id6794384936";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=tech.nearmint.binder";

test("the nav CTA goes to the download band, not to one store", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("link", { name: /get the app/i }).first()).toHaveAttribute(
    "href",
    "#get",
  );
});

test("every iOS CTA points at the App Store listing", async ({ page }) => {
  await page.goto("/en");
  const links = page.getByRole("link", { name: /app store/i });
  const count = await links.count();
  expect(count).toBeGreaterThanOrEqual(2); // hero, download band
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toHaveAttribute("href", APP_STORE);
  }
});

test("every Android CTA points at the Play listing, with nothing left saying soon", async ({
  page,
}) => {
  await page.goto("/en");
  const links = page.getByRole("link", { name: /google play/i });
  const count = await links.count();
  expect(count).toBeGreaterThanOrEqual(2); // hero, download band
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toHaveAttribute("href", PLAY_STORE);
  }
  await expect(page.getByText(/coming soon|快將推出/i)).toHaveCount(0);
});

test("both stores are named in 繁體中文 too", async ({ page }) => {
  await page.goto("/zh");
  await expect(page.getByRole("link", { name: /App Store/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Google Play/i }).first()).toBeVisible();
});

test("the old waitlist URL forwards to the store", async ({ page }) => {
  await page.goto("/en/waitlist");
  await expect(page.getByRole("link", { name: /click here to download/i })).toHaveAttribute(
    "href",
    APP_STORE,
  );
});
