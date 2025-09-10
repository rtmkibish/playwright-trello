import type { Locator, Page } from "@playwright/test";

export default class LoginPage {
  private readonly page: Page;

  readonly emailInput: Locator;
  readonly submitBtn: Locator;
  readonly passwordInput: Locator;
  private readonly otpVerifyBtn: Locator;

  readonly loginErrorSection: Locator;

  readonly LOGIN_ERROR_MESSAGE =
    "Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.";

  static async open(page: Page): Promise<LoginPage> {
    await page.goto("https://id.atlassian.com/login?application=trello");
    await page.waitForLoadState();
    return new LoginPage(page);
  }

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.locator("#username-uid1");
    this.submitBtn = this.page.locator("#login-submit");
    this.passwordInput = this.page.locator("#password");
    this.otpVerifyBtn = this.page.locator("#otp-submit");
    this.loginErrorSection = this.page.getByTestId("form-error");
  }

  // TODO: Learn about snapshot testing
  // get productLabel(): Promise<> {}
}
