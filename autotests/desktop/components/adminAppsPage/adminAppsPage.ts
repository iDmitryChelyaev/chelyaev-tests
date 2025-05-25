import { Container } from '../../../core/pageObjectModel/container/container';
import { Block } from './block';

type BlocksValues =
  | 'Звонки'
  | 'Интеграции'
  | 'Внешние данные'
  | 'Почта'
  | 'Электронно-цифровая подпись'
  | 'Модули';

export class AdminAppsPage extends Container {
  private LOCATORS = {
    getBlock: (value: BlocksValues) =>
      this.page.locator(`//div[@class="ui-table" and contains(., "${value}")]`),
  };

  public async getBlock(blockValue: BlocksValues): Promise<Block> {
    return new Block(this.LOCATORS.getBlock(blockValue), this.page);
  }
}
