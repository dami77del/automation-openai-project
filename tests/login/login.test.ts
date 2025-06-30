import { test, expect } from '../fixtures';

test.describe('Login Tests en OrangeHRM', () => {
  test('Login exitoso con credenciales válidas', async ({ 
    loginPage, 
    dashboardPage,
    ai // Ahora está disponible
  }) => {
    const testData = await ai.generateLoginTestData();
    
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await dashboardPage.assertLoginSuccess();
  });

  test('Login fallido con credenciales inválidas', async ({ 
    loginPage,
    ai // Correctamente tipado
  }) => {
    const testData = await ai.generateLoginTestData();
    
    for (const invalidUser of testData.invalidUsers.slice(0, 2)) {
      await loginPage.login(invalidUser.username, invalidUser.password);
      await loginPage.assertErrorMessage('Invalid credentials');
      await loginPage.navigate();
    }
  });
});

test('Generar nuevos casos de prueba con AI', async ({ ai }) => {
  const prompt = `Genera 3 casos de prueba adicionales para el login de OrangeHRM...`;
  const newTestCases = await ai.generateTestScenarios(prompt);
  console.log('Casos generados por AI:', newTestCases);
});