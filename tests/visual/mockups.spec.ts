import { expect, test } from "@playwright/test";
test("mockups showcase", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/_dev/mockups");
  await expect(page).toHaveScreenshot("mockups.png", { fullPage: true });
});
