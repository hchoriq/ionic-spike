import { Pro } from '@ionic/pro';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Mixpanel } from '@ionic-native/mixpanel';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private mixpanel: Mixpanel) {
    this.mixpanel = mixpanel;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      Pro.monitoring.exception(new Error('test error'))
      statusBar.styleDefault();
      splashScreen.hide();
    });
    const token = 'ccad90a41aed70fbcd9dbd223a430759';
    this.mixpanel.init(token)
      .then((resp) => console.log(resp));
  }
}

