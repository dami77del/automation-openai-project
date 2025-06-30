import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Elementos del DOM
  private usernameInput = () => this.page.locator('input[name="username"]');
  private passwordInput = () => this.page.locator('input[name="password"]');
  private loginButton = () => this.page.locator('button[type="submit"]');
  private errorMessage = () => this.page.locator('.oxd-alert-content-text');

  // Acciones
  async navigate() {
    await this.page.goto('/');
    await expect(this.usernameInput()).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  async assertErrorMessage(message: string) {
    await expect(this.errorMessage()).toContainText(message);
  }
}