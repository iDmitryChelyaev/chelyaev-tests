import { Container } from '../../../core/pageObjectModel/container/container';
import { NewBusinessPopup } from './newBusinessPopup';

export class SubscriptionsPage extends Container {
  private LOCATORS = {
    addButton: this.page.locator('//div[@class="b-floating_button"]'),
    addButtonWithIconList: this.page.locator(
      '//div[contains(@class, "b-floating_button--icon_list_opened")]',
    ),
    createBusinessButton: this.page.locator('//div[contains(@class, "b-floating_button-icon_list-item-wrapper") and contains(., "Создать дело (Д)")]//div[contains(@class, "b-floating_button-icon_list-item-content")]'),
    newBusinessPopup: this.page.locator('//div[contains(@class, "b-popup--show")]'),
  };


  public NewBusinessPopup = new NewBusinessPopup(this.LOCATORS.newBusinessPopup, this.page);

  public async clickAddButton(): Promise<void> {
    await this.LOCATORS.addButton.click();
  }

  public async isIconListOpened(): Promise<boolean> {
    return await this.LOCATORS.addButtonWithIconList.isVisible();
  }

  public async clickCreateBusinessButton(): Promise<void> {
    await this.LOCATORS.createBusinessButton.click();
  }
}
