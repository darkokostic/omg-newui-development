import {Page} from 'ionic-angular';
import {NavController, NavParams, Alert} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/page-2/page-2.html',
})
export class Page2 {

	hidePage: any;
	upperClass: string;
	infoBtnClass: string;
	timeLineClass: string;
	goBtnClass: string;
	randomStatus: boolean;
	isTutorial: boolean;

	gameStatus: boolean;
	time: string;
	money: string;
	type: string;
	/* Dots position top */
	dotPositionTop: number = 40;
	dotPositionTop2: number = 10 + Math.floor(Math.random() * 80);
	dotPositionTop3: number = 10 + Math.floor(Math.random() * 80);
	dotPositionTop4: number = 10 + Math.floor(Math.random() * 80);
	dotPositionTop5: number = 10 + Math.floor(Math.random() * 80);
	/* Dot Position from left */
	dotPositionLeft2: number = 70;
	dotPositionLeft3: number = 50;
	dotPositionLeft4: number =  46;
	dotPositionLeft5: number = 15;
	/* Dots opacity */
	dotOpacity2: number = 0.7;
	dotOpacity3: number = 0.6;
	dotOpacity4: number = 0.5;
	dotOpacity5: number = 0.7;


	goButtonStatus = false;
	goBtn = true;

	startGame(money, type, graphDot, graphDot2, graphDot3, graphDot4, graphDot5) {
		if(this.isTutorial === true) {

		} else {
			this.randomStatus = Math.random() >= 0.5;
			if(money != undefined && type != undefined)
			{
				this.goButtonStatus = true;
			}
			/* Fake Losing/winning */
		    setInterval(() => {

		    	if( this.dotOpacity2 <= 0) {
		    		this.dotOpacity2 = 0.7;
		    		graphDot2.style.marginLeft = (10 + Math.floor(Math.random() * 20)) + "%";
		    	}
		    	if( this.dotOpacity3 <= 0) {
		    		this.dotOpacity3 = 0.6;
		    		graphDot3.style.marginLeft = (35 + Math.floor(Math.random() * 20)) + "%";
		    	}
		    	if( this.dotOpacity4 <= 0) {
		    		this.dotOpacity4 = 0.5;
		    		graphDot4.style.marginLeft = (55 + Math.floor(Math.random() * 20)) + "%";
		    	}
		    	if( this.dotOpacity5 <= 0) {
		    		this.dotOpacity5 = 0.7;
		    		graphDot5.style.marginLeft = (75 + Math.floor(Math.random() * 5)) + "%";
		    	}
				graphDot2.style.opacity = this.dotOpacity2;
			   	graphDot3.style.opacity = this.dotOpacity3;
			   	graphDot4.style.opacity = this.dotOpacity4;
			   	graphDot5.style.opacity = this.dotOpacity5;

		    	if(this.gameStatus == this.randomStatus) {
		    		/* If user is winning here */
		    		this.upperClass = 'winning-light';
		    		this.infoBtnClass = 'winning-light-color';
		    		this.timeLineClass = 'winning-dark';
		    		this.goBtnClass = 'winning-light';
		    		this.dotPositionTop  = this.dotPositionTop - 1;
		    		this.dotPositionTop2  = this.dotPositionTop2 - 1;
		    		this.dotPositionTop3 = this.dotPositionTop3 - 1;
		    		this.dotPositionTop4  = this.dotPositionTop4 - 1;
		    		this.dotPositionTop5  = this.dotPositionTop5 - 1;
		    		this.gameStatus = false;
		    	} else {
		    		this.dotPositionTop  = this.dotPositionTop + 1;
		    		this.dotPositionTop2  = this.dotPositionTop2 + 1;
		    		this.dotPositionTop3 = this.dotPositionTop3 + 1;
		    		this.dotPositionTop4  = this.dotPositionTop4 + 1;
		    		this.dotPositionTop5  = this.dotPositionTop5 + 1;
		    		this.gameStatus = true;
		    		/* If user is losing here */
		    		this.upperClass = 'losing-light';
		    		this.infoBtnClass = 'losing-light-color';
		    		this.timeLineClass = 'losing-dark';
		    		this.goBtnClass = 'losing-light';
		    	}
		    	this.randomStatus = Math.random() >= 0.5;
		    	graphDot.style.marginTop = this.dotPositionTop + "%";
		    	graphDot2.style.marginTop = this.dotPositionTop2 + "%";
		    	graphDot3.style.marginTop = this.dotPositionTop3 + "%";
		    	graphDot4.style.marginTop = this.dotPositionTop4 + "%";
		    	graphDot5.style.marginTop = this.dotPositionTop5 + "%";


		    	this.dotOpacity2 = this.dotOpacity2 - 0.1;
		   		this.dotOpacity3 = this.dotOpacity3 - 0.1;
		   		this.dotOpacity4 = this.dotOpacity4 - 0.1;
		   		this.dotOpacity5 = this.dotOpacity5 - 0.1;
		    }, 200);
		}
	}

	fakeLosing() {
		if(this.isTutorial == true) {
			if(this.upperClass != '' && this.upperClass != undefined) {
				this.upperClass = '';
				this.infoBtnClass = 'infoBtnBlue';
				this.timeLineClass = '';
				this.goBtnClass = '';
			} else {
				this.upperClass = 'losing-light';
				this.infoBtnClass = 'losing-light-color';
				this.timeLineClass = 'losing-dark';
				this.goBtnClass = 'losing-light';
			}
		}
	}

	fakeWinning() {
		if(this.isTutorial == true) {
			this.upperClass = 'winning-light';
			this.infoBtnClass = 'winning-light-color';
			this.timeLineClass = 'winning-dark';
			this.goBtnClass = 'winning-light';		
		}
	}

	naturalStatus() {
		if(this.isTutorial == true) {
			this.upperClass = '';
			this.infoBtnClass = '';
			this.timeLineClass = '';
			this.goBtnClass = '';
		}
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

	doAlert() {
	let alert = Alert.create({
		title: 'Sorry,',
		subTitle: 'The market is closed.',
		message: '<ion-row class="row-img"><ion-col width-10></ion-col><ion-col width-80><img src="img/George_losing_5x.png"/></ion-col><ion-col width-10></ion-col></ion-row><div class="message-footer-text1"><ion-label>it reopens Monday</ion-label></div><div class="message-footer-text2"><ion-label><b>04:</b>19:18</ion-label></div>'
		});
		alert.setCssClass('customMarketAlert');
		this.navController.present(alert);
	}

  	constructor(private navController: NavController, navParams: NavParams) {
  		this.isTutorial = false;
  		this.hidePage = document.querySelector('#hideLostCash');
  		setInterval(() => {
	    	this.hidePage.style.display = 'none';
	    }, 1000);
  		this.infoBtnClass = 'infoBtnBlue';
  		this.goButtonStatus = false;
  		this.goBtn = true;
	}
}