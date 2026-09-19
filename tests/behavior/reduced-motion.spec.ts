import { expect, test } from "@playwright/test";

test("reduced motion keeps the hero scene and copy visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  await page.waitForLoadState("networkidle");
  await expect(page.locator('img[src*="/scenes/hero"]').first()).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const opacity = await page
    .getByRole("heading", { level: 1 })
    .evaluate((el) => getComputedStyle(el).opacity);
  expect(opacity).toBe("1");
});
