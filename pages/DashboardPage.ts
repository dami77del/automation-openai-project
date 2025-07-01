import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  // Elementos
  private welcomeMessage = () => this.page.locator("//h6[normalize-space()='Dashboard']");

  // Verificaciones
  async assertLoginSuccess() {
    await expect(this.welcomeMessage()).toContainText('Dashboard');
  }
}