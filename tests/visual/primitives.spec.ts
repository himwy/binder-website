import { expect, test } from "@playwright/test";

// The locale prefix is required: "/dev/primitives" lands on the 404 page.
test("primitives showcase renders", async ({ page }) => {
  const resp = await page.goto("/en/dev/primitives");
  expect(resp?.status()).toBe(200);
  await expect(page.getByRole("link", { name: /app store/i }).first()).toBeVisible();
  await expect(page).toHaveScreenshot("primitives.png", { fullPage: true });
});
