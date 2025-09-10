import { test as baseTest, expect } from "@playwright/test";
import { credentialsManager } from "../services/CredentialsManager.ts";

interface BaseFixture {
  credentialsManager: typeof credentialsManager;
}

const test = baseTest.extend<BaseFixture>({
  credentialsManager,
});

export { test, expect };
