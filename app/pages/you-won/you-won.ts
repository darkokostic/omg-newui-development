import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NeedUpdatePage} from '../../pages/need-update/need-update';

@Component({
  	templateUrl: 'build/pages/you-won/you-won.html',
})

export class YouWonPage {
  	constructor(private nav: NavController) {}

  	navigate() {
    	this.nav.push(NeedUpdatePage, {});
  	}
}
