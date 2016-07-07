import {Component} from '@angular/core';
import {ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {YouWonPage} from './pages/you-won/you-won';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {

  rootPage: any = YouWonPage;

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

ionicBootstrap(MyApp);
