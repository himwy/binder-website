import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000/en",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
  },
  projects: [{ name: "desktop", use: { viewport: { width: 1440, height: 900 } } }],
  expect: { toHaveScreenshot: { threshold: 0.1, maxDiffPixelRatio: 0.01 } },
});
