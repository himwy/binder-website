import { expect, test } from "@playwright/test";

test("primitives showcase renders", async ({ page }) => {
  await page.goto("/dev/primitives");
  await expect(page).toHaveScreenshot("primitives.png", { fullPage: true });
});
