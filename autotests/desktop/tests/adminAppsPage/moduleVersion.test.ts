import { test, expect } from '../../customTest';
import { urls } from '../../constants/mainData';

test.describe('Module version', () => {
  test('Check module version', async ({
    loginPage,
    customPage,
    adminAppsPage,
    page,
  }) => {
    await test.step('Authorization from login form', async () => {
      await loginPage.open();
      const loginForm = loginPage.LoginForm;
      await loginForm.fill();
      await loginForm.clickLoginButton();
      await expect(() => {
        expect(page.url().includes(urls.customPage)).toBeTruthy();
      }).toPass();
    });

    await test.step('Go to admin apps page', async () => {
      const sideBarMenu = customPage.SideBarMenu;
      await sideBarMenu.clickSideBarButton('Администрирование');
      await expect(() => {
        expect(page.url().includes(urls.adminApps)).toBeTruthy();
      }).toPass();
    });

    await test.step('Check module version', async () => {
      const modulesBlock = await adminAppsPage.getBlock('Модули');
      expect(await modulesBlock.getModuleVersion()).toBe('6.0.35');
    });
  });
});
