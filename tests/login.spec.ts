import { test, expect } from "../fixtures/common.ts";
import WelcomePage from "../pages/WelcomePage";
import LoginPage from "../pages/LoginPage";

import type { TrelloCredentials } from "../types/credentials.ts";

test.describe("Trello login test", () => {
  test("Should show error log in from welcome page", async ({
    page,
    credentialsManager,
  }) => {
    const welcomePage = await WelcomePage.open(page);
    const loginPage = await welcomePage.login();
    const { email, password }: TrelloCredentials =
      await credentialsManager.getCredentialsFor("TRELLO");
    await loginPage.emailInput.fill(email);
    await loginPage.submitBtn.click();
    await loginPage.passwordInput.fill(password);
    await loginPage.submitBtn.click();

    await expect(
      loginPage.loginErrorSection,
      "Filed to get proper error message"
    ).toHaveText(loginPage.LOGIN_ERROR_MESSAGE);
  });

  test("Should show error log in from login page", async ({
    page,
    credentialsManager,
  }) => {
    const loginPage = await LoginPage.open(page);
    const { email, password }: TrelloCredentials =
      await credentialsManager.getCredentialsFor("TRELLO");
    await loginPage.emailInput.fill(email);
    await loginPage.submitBtn.click();
    await loginPage.passwordInput.fill(password);
    await loginPage.submitBtn.click();

    await expect(loginPage.loginErrorSection).toHaveText(
      loginPage.LOGIN_ERROR_MESSAGE
    );
  });
});
