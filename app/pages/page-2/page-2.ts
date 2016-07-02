import {Page} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page-2/page-2.html'
})
export class Page2 {
	time: string;
	money: string;
	type: string;

	goButtonStatus = false;
	goBtn = true;

	startGame(money, type) {
		if(money != undefined && type != undefined)
		{
			this.goButtonStatus = true;
		}
		/* Timer here */
	}

	changedMoney(value, type) {
		console.log(value, type);
		if(value != undefined && type != undefined)
		{
			this.goBtn = null;
		}
	}

	changedType(value, money) {
		console.log(value, money);
		if(value != undefined && money != undefined)
		{
			this.goBtn = null;
		}
	}

  	constructor(private navController: NavController, navParams: NavParams) {

  		this.goButtonStatus = false;
  		this.goBtn = true;
	}
}
