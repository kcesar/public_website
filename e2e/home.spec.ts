import { test, expect } from "@playwright/test";

test("home page loads with branding and navigation", async ({ page }) => {
  await page.goto("/");

  // Title is set by the root metadata.
  await expect(page).toHaveTitle(/King County Explorer Search & Rescue/);

  // Hero heading is rendered.
  await expect(
    page.getByRole("heading", { name: /King County Explorer/i }).first()
  ).toBeVisible();

  // The primary "Join Us" call-to-action links to /join-us.
  const joinUs = page.getByRole("link", { name: "Join Us" }).first();
  await expect(joinUs).toBeVisible();
  await joinUs.click();
  await expect(page).toHaveURL(/\/join-us$/);
});
