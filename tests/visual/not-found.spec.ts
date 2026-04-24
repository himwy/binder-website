import { expect, test } from "@playwright/test";

test("404 page renders editorial treatment (EN)", async ({ page }) => {
  const resp = await page.goto("/does-not-exist");
  expect(resp?.status()).toBe(404);
  await expect(page).toHaveScreenshot("not-found-en.png", { fullPage: true });
});

test("404 page renders editorial treatment (zh)", async ({ page }) => {
  await page.goto("/zh/does-not-exist");
  await expect(page).toHaveScreenshot("not-found-zh.png", { fullPage: true });
});
