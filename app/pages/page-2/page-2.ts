import {Page} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/page-2/page-2.html',
})
export class Page2 {

	upperClass: string;
	timeLineClass: string;
	goBtnClass: string;

	randomStatus: boolean;

	gameStatus: boolean;
	time: string;
	money: string;
	type: string;
	dotPosition: number = 50;

	goButtonStatus = false;
	goBtn = true;

	startGame(money, type, graphDot) {
		this.randomStatus = Math.random() >= 0.5;
		if(money != undefined && type != undefined)
		{
			this.goButtonStatus = true;
		}
		/* Fake Losing/winning */
	    setInterval(() => {
	    	if(this.gameStatus == this.randomStatus) {
	    		/* If user is winning here */
	    		this.upperClass = 'winning-light';
	    		this.timeLineClass = 'winning-dark';
	    		this.goBtnClass = 'winning-light';
	    		this.dotPosition  = this.dotPosition - 1;
	    		this.gameStatus = false;
	    	} else {
	    		this.dotPosition  = this.dotPosition + 1;
	    		this.gameStatus = true;
	    		/* If user is losing here */
	    		this.upperClass = 'losing-light';
	    		this.timeLineClass = 'losing-dark';
	    		this.goBtnClass = 'losing-light';
	    	}
	    	this.randomStatus = Math.random() >= 0.5;
	    	graphDot.style.marginTop = this.dotPosition + "%";
	    	
	    }, 500);
	}

	changedMoney(value, type) {
		if(value != undefined && type != undefined)
		{
			this.goBtn = null;
		}
	}

	changedType(value, money) {
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
