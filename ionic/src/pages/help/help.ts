import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController,Platform,ViewController} from 'ionic-angular';
import { HowoperatePage } from '../howoperate/howoperate';
import { AboutusPage } from '../aboutus/aboutus';
import { ContactusPage } from '../contactus/contactus';
import { FaqPage } from '../faq/faq';


@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'template.html'
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  
  fun1() {
		this.navCtrl.setRoot(HowoperatePage);
  }
  fun2() {
		this.navCtrl.setRoot(AboutusPage);
  }
  fun3() {
		this.navCtrl.setRoot(ContactusPage);
  }
  fun4() {
		this.navCtrl.setRoot(FaqPage);
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-end>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;

  
}