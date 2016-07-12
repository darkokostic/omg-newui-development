import { Component } from '@angular/core';
import {Alert, NavController } from 'ionic-angular';
import {YouLostPage} from '../../pages/you-lost/you-lost';

@Component({
  	templateUrl: 'build/pages/you-won/you-won.html',
})

export class YouWonPage {
  	constructor(private nav: NavController) {}

  	navigate() {
    	this.nav.push(YouLostPage, {});
  	}

  	doAlert() {
	    let alert = Alert.create({
	      title: 'New Friend!',
	      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!'
	    });

    	this.nav.present(alert);
  }
}
