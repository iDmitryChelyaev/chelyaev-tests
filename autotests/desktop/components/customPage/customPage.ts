import { Container } from '../../../core/pageObjectModel/container/container';
import { SideBarMenu } from './sideBarMenu';


export class CustomPage extends Container {
  private LOCATORS = {
    sideBarMenu: this.page.locator('//menu[@class="b-sidebar-menu"]')
  };

    public SideBarMenu =  new SideBarMenu(this.LOCATORS.sideBarMenu, this.page);
}
