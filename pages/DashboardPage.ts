import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  // Elementos
  private welcomeMessage = () => this.page.locator('.oxd-userdropdown-name');

  // Verificaciones
  async assertLoginSuccess() {
    await expect(this.welcomeMessage()).toContainText('Welcome');
  }
}