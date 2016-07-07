import {Page} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';
import {Page2} from '../../pages/page-2/page-2';

@Page({
  templateUrl: 'build/pages/login-page/login-page.html',
})
export class LoginPagePage {
  constructor(private nav: NavController) {}

  navigate() {
        this.nav.push(Page2, {});
  }
}
