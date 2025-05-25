import { Container } from '../../../core/pageObjectModel/container/container';
import { LoginForm } from './loginForm';

export class LoginPage extends Container {
  private LOCATORS = {
    loginForm: this.page.locator('//form[contains(@name, "LoginForm")]')
  };

  public async open(): Promise<void> {
    await this.page.goto('/');
  }

  public LoginForm = new LoginForm(this.LOCATORS.loginForm, this.page);
}
