import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LostCashPage} from '../../pages/lost-cash/lost-cash';

@Component({
  	templateUrl: 'build/pages/you-lost/you-lost.html',
})

export class YouLostPage {
  	constructor(private nav: NavController) {}

  	navigate() {
    	this.nav.push(LostCashPage, {});
  	}
}