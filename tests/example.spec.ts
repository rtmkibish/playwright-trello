import { test, expect } from "@playwright/test";

test.describe("Trello login test", () => {
  test("Login page is visible", async ({ page }) => {
    await page.goto("https://trello.com/");
    const loginBtn = page.getByRole("link", {
      name: "Log in",
      exact: true,
    });
    await loginBtn.click();
    const emailInput = page.locator("#username-uid1");

    await expect(emailInput).toBeVisible();
  });
});
