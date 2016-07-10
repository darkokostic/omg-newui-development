import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {YouWonPage} from '../../pages/you-won/you-won';

@Component({
  templateUrl: 'build/pages/need-update/need-update.html',
})
export class NeedUpdatePage {
  constructor(private nav: NavController) {}
  
  navigate() {
        this.nav.push(YouWonPage, {});
  }
}
