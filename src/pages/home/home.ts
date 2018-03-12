import { Component } from '@angular/core';
import { Mixpanel } from '@ionic-native/mixpanel';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private mixpanel: Mixpanel) {
    this.mixpanel = mixpanel;
  }
  logMixpanelEvent(event) {
    console.log('Mixpanel Track Button Clicked');
    this.mixpanel.track('Mixpanel Integrated in Ionic 3 Hi Deezy');
  }
}
