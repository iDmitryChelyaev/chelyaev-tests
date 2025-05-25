import { Container } from '../../../core/pageObjectModel/container/container';
import { ViewBlock } from './viewBlock/viewBlock';
import { CardMenu } from './cardMenu/cardMenu';
import { timeout } from '../../../core/utils/timeout';

export const viewBlocks = {
  mainInfoBlock: 'common-system-block',
  parametersOfMonitoringBlock: 'common-meta-block',
  monitoringTopBlock: 'common-steps-component',
};

export class CasePage extends Container {
  private LOCATORS = {
    viewBlock: (value: string) => this.page.locator(`//${value}`),
    saveButton: this.page.locator('//div[@class="b-floating_button save"]'),
    monitoringBlock:  this.page.locator('//div[@class="l-card-container ui-steps-container"]'),
    saveAlert: this.page.locator('//div[@title="Данные сохранены"]'),
    cardMenu: this.page.locator('//objects-object-card-menu'),
    eventsTable: this.page.locator('//div[@class="b-events-group"]//'),
  };

  public CardMenu = new CardMenu(this.LOCATORS.cardMenu, this.page);

  public async getViewBlock(blockValue: string): Promise<ViewBlock> {
    return new ViewBlock(this.LOCATORS.viewBlock(blockValue), this.page);
  }


  public async clickSaveButton(): Promise<void> {
    await this.LOCATORS.saveButton.click()
    await timeout(1000);
  }

  public async isSaveAlertExist(): Promise<boolean> {
    return await this.LOCATORS.saveAlert.isVisible();
  }

  public async isMonitoringTopBlockExist(): Promise<boolean> {
    return await this.LOCATORS.monitoringBlock.isVisible();
  }
}
