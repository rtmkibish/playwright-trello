import { test, expect } from "@fixtures/ui/login.fixture.ts";

test.describe("Trello login test", () => {
  test("Should show error log in from welcome page", async ({
    welcomePage,
    loginCredentials: { email, password },
  }) => {
    const loginPage = await welcomePage.login();
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
    loginPage,
    loginCredentials: { email, password },
  }) => {
    await loginPage.emailInput.fill(email);
    await loginPage.submitBtn.click();
    await loginPage.passwordInput.fill(password);
    await loginPage.submitBtn.click();

    await expect(loginPage.loginErrorSection).toHaveText(
      loginPage.LOGIN_ERROR_MESSAGE
    );
  });
});
