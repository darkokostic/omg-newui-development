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
	dotPosition2: number = 30;
	dotPosition3: number = 33;
	dotPosition4: number = 60;
	dotPosition5: number = 70;

	goButtonStatus = false;
	goBtn = true;

	startGame(money, type, graphDot, graphDot2, graphDot3, graphDot4, graphDot5) {
		
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
	    		this.dotPosition2  = this.dotPosition2 - 1;
	    		this.dotPosition3 = this.dotPosition3 - 1;
	    		this.dotPosition4  = this.dotPosition4 - 1;
	    		this.dotPosition5  = this.dotPosition5 - 1;
	    		this.gameStatus = false;
	    	} else {
	    		this.dotPosition  = this.dotPosition + 1;
	    		this.dotPosition2  = this.dotPosition2 + 1;
	    		this.dotPosition3 = this.dotPosition3 + 1;
	    		this.dotPosition4  = this.dotPosition4 + 1;
	    		this.dotPosition5  = this.dotPosition5 + 1;
	    		this.gameStatus = true;
	    		/* If user is losing here */
	    		this.upperClass = 'losing-light';
	    		this.timeLineClass = 'losing-dark';
	    		this.goBtnClass = 'losing-light';
	    	}
	    	this.randomStatus = Math.random() >= 0.5;
	    	graphDot.style.marginTop = this.dotPosition + "%";

	    	graphDot2.style.marginTop = this.dotPosition2 + "%";
	    	graphDot3.style.marginTop = this.dotPosition3 + "%";
	    	graphDot4.style.marginTop = this.dotPosition4 + "%";
	    	graphDot5.style.marginTop = this.dotPosition5 + "%";
	    	
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
