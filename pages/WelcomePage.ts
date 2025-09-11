import type { Locator, Page } from "@playwright/test";
import LoginPage from "@pages/LoginPage.ts";

export default class WelcomePage {
  private readonly page: Page;

  private readonly loginBtn: Locator;

  static async open(page: Page): Promise<WelcomePage> {
    await page.goto("https://trello.com");
    await page.waitForLoadState();
    return new WelcomePage(page);
  }

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = this.page.getByRole("link", {
      name: "Log in",
      exact: true,
    });
  }

  async login(): Promise<LoginPage> {
    await this.loginBtn.click();
    return new LoginPage(this.page);
  }
}
