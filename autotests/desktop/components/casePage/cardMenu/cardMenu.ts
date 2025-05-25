import { Component } from '../../../../core/pageObjectModel/component/component';

type Tabs =
  | 'Основное'
  | 'События'
  | 'Участники'
  | 'Задачи'
  | 'Документы'
  | 'Время'
  | 'Заметки'
  | 'Настройки';

export class CardMenu extends Component {
  private LOCATORS = {
    tab: (value: Tabs) => this.locator.locator(`//a[@class="item" and contains(., "${value}")]`),
  };

  public async clickTab(tab: Tabs): Promise<void> {
    await this.LOCATORS.tab(tab).click();
  }
}
