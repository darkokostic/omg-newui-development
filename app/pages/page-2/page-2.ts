import {Page} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';
import {Page4} from '../page-4/page-4';


@Page({
  templateUrl: 'build/pages/page-2/page-2.html'
})
export class Page2 {
  	
  	constructor(private navController: NavController, navParams: NavParams) {
  		
	}

  	itemTapped(event) {
  		this.navController.push(Page4);
  	}
}
