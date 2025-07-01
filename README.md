# 🚀 IA Automation Project

![Playwright](https://img.shields.io/badge/Playwright-Testing-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![Status](https://img.shields.io/badge/status-active-brightgreen)

Welcome to the **IA Automation Project**!  
This repository contains robust and scalable end-to-end web automation tests using [Playwright](https://playwright.dev/) and TypeScript.

---

## ✨ Features

- ⚡ **Fast & Reliable**: Automated tests for web applications using Playwright.
- 🔒 **Authentication Flows**: Includes login verification and dashboard checks.
- 🧩 **Modular Structure**: Page Object Model for maintainable and reusable code.
- 🛠️ **Easy to Extend**: Add new tests and pages with minimal effort.

---

## ✨ Features

- ⚡ **Fast & Reliable**: Automated browser testing with Playwright.
- 🤖 **AI Integration**: Uses OpenAI for intelligent test data generation and advanced validations.
- 🔒 **Authentication Flows**: Includes login verification and dashboard checks.
- 🧩 **Modular Structure**: Page Object Model for maintainable and reusable code.
- 📸 **Screenshots & Reporting**: Automatically captures screenshots on test failures for easy debugging.
- 🛠️ **Easy to Extend**: Add new tests and pages with minimal effort.

---
```

---

## 🚦 Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/ia-automation-project.git
   cd ia-automation-project
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run tests**
   ```sh
   npx playwright test
   ```

---

## 📝 Example: Dashboard Login Assertion

```typescript
// DashboardPage.ts
async assertLoginSuccess() {
  await expect(this.welcomeMessage()).toContainText('Dashboard');
}
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📧 Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).

---

## ⭐️ Show your support

If you like this project, give it a ⭐️ on GitHub!

---

Happy Testing! 🚀
