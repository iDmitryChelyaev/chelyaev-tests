import { Component } from '../../../../core/pageObjectModel/component/component';
import { timeout } from '../../../../core/utils/timeout';

type MonitoringPlaceholders = 'Организация для отслеживания' | 'ИНН' | 'ОГРН';
type MonitoringTopBlockTabs =
  | 'Настройка мониторинга'
  | 'Поставлено на мониторинг'
  | 'Снято с мониторинга';

export class ViewBlock extends Component {
  private LOCATORS = {
    getMonitoringPlaceholder: (value: MonitoringPlaceholders) =>
      this.locator.getByPlaceholder(`${value}`),
    organisationSelectArrow: this.locator.locator(
      '//div[contains(@class, "b-textfield-float_label") and contains(., "Организация")]//following-sibling::i',
    ),
    selectedOrganisation: (selectedValue: string) =>
      this.locator.locator(
        `//common-suggest-dropdown-item-for-suggest-with-replenishment[contains(., '${selectedValue}')]`,
      ),
    monitoringCheckbox: (value: string) =>
      this.locator.locator(`//common-checkbox[contains(., "${value}")]`),
    monitoringTopBlockTab: (value: MonitoringTopBlockTabs) =>
      this.locator.locator(
        `//div[@class="ui-steps-item-title g-textoverflow" and contains(., "${value}")]`,
      ),
    disabledMonitoringFields: (value: string) => this.locator.locator(`//div[contains(@class, "is-disabled") and contains(., "${value}")]`)
  };

  public async isFieldNotFilled(
    field: MonitoringPlaceholders,
  ): Promise<boolean> {
    const locator = this.LOCATORS.getMonitoringPlaceholder(field);
    const inputValue = await locator.inputValue();
    return inputValue.trim() === '';
  }

  public async isElementDisabled(value: string): Promise<boolean> {
    return await this.LOCATORS.disabledMonitoringFields(value).isVisible()
  }

  public async getFieldValue(
    fieldValue: MonitoringPlaceholders,
  ): Promise<string> {
    const locator = this.LOCATORS.getMonitoringPlaceholder(fieldValue);
    const inputValue = await locator.inputValue();
    return inputValue.trim();
  }

  public async selectOrganisation(organisationValue: string): Promise<void> {
    await this.LOCATORS.organisationSelectArrow.click();
    await this.LOCATORS.selectedOrganisation(organisationValue).click();
  }

  public async clickCheckbox(
    value: 'Является истцом' | 'Является ответчиком' | 'Любой иной тип участия',
  ): Promise<void> {
    await this.LOCATORS.monitoringCheckbox(value).click();
  }

  public async clickTopMonitoringTab(
    tab: MonitoringTopBlockTabs,
  ): Promise<void> {
    await this.LOCATORS.monitoringTopBlockTab(tab).click();
  }
}
