import { Component } from '../../../core/pageObjectModel/component/component';
import { createFormFiller } from '../../../core/utils/createFormFiller';

type TypesOfBusiness =
  | 'Подписка на дела судов общей юрисдикции'
  | 'Подписка на исполнительные производства';

export class NewBusinessPopup extends Component {
  private LOCATORS = {
    nameInput: this.locator.getByPlaceholder('Название дела'),
    selectTypeOfBusiness: this.page.locator(
      '//div[contains(@class, "b-textfield-float_label") and contains(., "Тип дела")]//following-sibling::i',
    ),
    typeOfBusinessValue: (selectedValue: TypesOfBusiness) =>
      this.locator.locator(
        `//common-suggest-dropdown-item[contains(., "${selectedValue}")]`,
      ),
    appliedTypeOfBusiness: (value: TypesOfBusiness) =>
      this.locator.locator(
        `//div[contains(., "Тип дела")]//input[contains(@title, "${value}")]`,
      ),
    addButton: this.locator.locator('//button[contains(., "Добавить")]'),
  };

  public fill = createFormFiller({
    name: [this.LOCATORS.nameInput, 'name'],
  });

  public async selectTypeOfBusiness(typeValue: TypesOfBusiness): Promise<void> {
    await this.LOCATORS.selectTypeOfBusiness.click();
    await this.LOCATORS.typeOfBusinessValue(typeValue).click();
  }

  public async isTypeOfBusinessApplied(
    valueOfType: TypesOfBusiness,
  ): Promise<boolean> {
    return await this.LOCATORS.appliedTypeOfBusiness(valueOfType).isVisible();
  }

  public async clickAddButton(): Promise<void> {
    await this.LOCATORS.addButton.click();
    await this.page.waitForLoadState("load");
  }
}
