import { Component } from '../../../core/pageObjectModel/component/component';

export class Block extends Component {
  private LOCATORS = {
    appDescription: this.locator.locator('//div[@class="b-shell_applications-description"]')
  }

  public async getModuleVersion(): Promise<string> {
    const descriptionText = await this.LOCATORS.appDescription.textContent();
    if(!descriptionText) {
      throw new Error('Text not found');
    }
    return descriptionText.split('/')[0].replace('Версия', '').trim();
  }
}