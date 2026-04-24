import { expect, test } from "@playwright/test";

test("reduced motion keeps the static hero fallback visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  await page.waitForLoadState("networkidle");
  const img = page.locator('img[alt*="Binder app"]');
  await expect(img).toBeVisible();
});
