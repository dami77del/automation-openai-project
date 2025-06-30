import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { AITestHelper } from '../../utils/ai-helper';

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  ai: typeof AITestHelper;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  ai: async ({}, use) => {
    await use(AITestHelper);
  },
});

// Solo exportamos expect si realmente se va a usar
export { expect } from '@playwright/test';