import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Page2} from '../../pages/page-2/page-2';

@Component({
  	templateUrl: 'build/pages/you-lost/you-lost.html',
})

export class YouLostPage {
  	constructor(private nav: NavController) {}

  	navigate() {
    	this.nav.push(Page2, {});
  	}
}