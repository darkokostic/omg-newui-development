import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {YouLostPage} from '../../pages/you-lost/you-lost';

@Component({
  	templateUrl: 'build/pages/you-won/you-won.html',
})

export class YouWonPage {
  	constructor(private nav: NavController) {}

  	navigate() {
    	this.nav.push(YouLostPage, {});
  	}
}
