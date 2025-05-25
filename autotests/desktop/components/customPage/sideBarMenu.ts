import { Component } from '../../../core/pageObjectModel/component/component';

export type SideBarValues =
  | 'Пульс'
  | 'Задачи'
  | 'События'
  | 'Календарь'
  | 'Дела'
  | 'Корреспонденция'
  | 'Мониторинг'
  | 'Подписки'
  | 'Финансы'
  | 'Отчеты'
  | 'Документы'
  | 'Контакты'
  | 'Администрирование'
  | 'Настройки'

export class SideBarMenu extends Component {
  private LOCATORS = {
    sideBarButton: (value: SideBarValues) => this.locator.locator(`//span[contains(., "${value}")]`),
    section: this.locator.locator('//span')
  };

  public async clickSideBarButton(buttonValue: SideBarValues): Promise<void> {
    await this.LOCATORS.sideBarButton(buttonValue).click();
  }

  public async isSectionExist(sectionValue: SideBarValues): Promise<boolean> {
    return await this.LOCATORS.sideBarButton(sectionValue).isVisible();
  }

  public async getSectionQuantity(): Promise<number> {
    const locators = await this.LOCATORS.section.all();
    return locators.length;
  }

  public async getAllSectionTexts(): Promise<string[]> {
    const sectionLocator = this.LOCATORS.section;
    const allTexts = await sectionLocator.allTextContents();
    return allTexts.map(text => text.trim());
  }
}
