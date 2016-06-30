import {Component} from '@angular/core';
import {ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Page2} from './pages/page-2/page-2';
import {Page4} from './pages/page-4/page-4';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {

  rootPage: any = Page2;

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
