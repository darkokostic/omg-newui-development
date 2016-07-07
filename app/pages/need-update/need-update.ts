import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPagePage} from '../../pages/login-page/login-page';

@Component({
  templateUrl: 'build/pages/need-update/need-update.html',
})
export class NeedUpdatePage {
  constructor(private nav: NavController) {}
  
  navigate() {
        this.nav.push(LoginPagePage, {});
  }
}
