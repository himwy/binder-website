import { expect, test } from "@playwright/test";

test("toggle flips URL and html lang", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("link", { name: /繁/i }).click();
  await expect(page).toHaveURL(/\/zh\/?$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-Hant");
  await page.getByRole("link", { name: /EN/i }).click();
  // localePrefix "as-needed": the default locale lives at "/" (or "/en" in dev)
  await expect(page).toHaveURL(/^https?:\/\/[^/]+\/(en)?\/?$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});
