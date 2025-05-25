import {test as base, expect} from "@playwright/test"
import { LoginPage } from './components/loginPage/loginPage';
import { CustomPage } from './components/customPage/customPage';
import { AdminAppsPage } from './components/adminAppsPage/adminAppsPage';
import { SubscriptionsPage } from './components/subscriptionsPage/subscriptionsPage';
import { CasePage } from './components/casePage/casePage';

type Options = {
  loginPage: LoginPage;
  customPage: CustomPage;
  adminAppsPage: AdminAppsPage;
  subscriptionsPage: SubscriptionsPage;
  casePage: CasePage;
};

export const test = base.extend<Options>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  customPage: async ({ page }, use) => {
    await use(new CustomPage(page));
  },
  adminAppsPage: async ({ page }, use) => {
    await use(new AdminAppsPage(page));
  },
  subscriptionsPage: async ({ page }, use) => {
    await use(new SubscriptionsPage(page));
  },
  casePage: async ({ page }, use) => {
    await use(new CasePage(page));
  },
});

export {expect};