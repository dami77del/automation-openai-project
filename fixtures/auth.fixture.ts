import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
export { expect } from '@playwright/test';
// Re-exportar expect desde Playwright

type AuthFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

export const authTest = base.extend<AuthFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});