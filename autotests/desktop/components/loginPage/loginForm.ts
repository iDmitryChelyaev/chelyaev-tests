import { Component } from '../../../core/pageObjectModel/component/component';
import { createFormFiller } from '../../../core/utils/createFormFiller';

export class LoginForm extends Component {
  private LOCATORS = {
    loginField: this.locator.getByPlaceholder('Логин'),
    passwordField: this.locator.getByPlaceholder('Пароль'),
    loginButton: this.locator.locator('//button[contains(., "Войти")]'),
  }

  public fill = createFormFiller({
    loginField: [this.LOCATORS.loginField, 'dawn87@cancer-treatment.xyz'],
    passwordField: [this.LOCATORS.passwordField, '@test123'],
  });

  public async clickLoginButton(): Promise<void> {
    await this.LOCATORS.loginButton.click();
  }
}