import { test, expect } from '../customTest';
import { urls } from '../constants/mainData';

test.describe('Sections', () => {
  test('Check sections quantity. Setting section should not be exist', async ({
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

    const sideBarMenu = customPage.SideBarMenu;

    await test.step('Check sections quantity', async () => {
      expect(await sideBarMenu.getSectionQuantity()).toBe(13);
    });

    await test.step('Setting sections should not be exist', async () => {
      await expect(async () => {
        expect(await sideBarMenu.isSectionExist('Настройки')).toBeFalsy();
      }).toPass();
    });
  });
});
