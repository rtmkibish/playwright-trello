import { test as baseTest, expect } from "@fixtures/common.fixture.ts";
import LoginPage from "@pages/LoginPage.ts";
import WelcomePage from "@pages/WelcomePage.ts";

import type { TrelloCredentials } from "../../types/credentials.ts";

interface LoginFixture {
  welcomePage: WelcomePage;
  loginPage: LoginPage;
  loginCredentials: TrelloCredentials;
}

const test = baseTest.extend<LoginFixture>({
  welcomePage: async ({ page }, use) => {
    const welcomePage = await WelcomePage.open(page);
    await use(welcomePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = await LoginPage.open(page);
    await use(loginPage);
  },
  loginCredentials: async ({ credentialsManager }, use) => {
    const trelloCredentials =
      await credentialsManager.getCredentialsFor<TrelloCredentials>("TRELLO");
    await use(trelloCredentials);
  },
});

export { test, expect };
