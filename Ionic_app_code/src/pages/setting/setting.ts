import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {LoginPage} from '../login/login';


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'template.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  fun2() {
		this.navCtrl.setRoot(HomePage);
  }
  fun3() {
		this.navCtrl.setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
// @Component({
//   template: `
// <ion-header>
//   <ion-toolbar>
//     <ion-title>
//       Description
//     </ion-title>
//     <ion-buttons start>
//       <button ion-button (click)="dismiss()">
//         <span ion-text color="primary" showWhen="ios">Cancel</span>
//         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//       </button>
//     </ion-buttons>
//   </ion-toolbar>
// </ion-header>
// <ion-content>
//   <ion-list>
//       <ion-item>
//         <ion-avatar item-start>
//           <img src="{{character.image}}">
//         </ion-avatar>
//         <h2>{{character.name}}</h2>
//         <p>{{character.quote}}</p>
//       </ion-item>
//       <ion-item *ngFor="let item of character['items']">
//         {{item.title}}
//         <ion-note item-end>
//           {{item.note}}
//         </ion-note>
//       </ion-item>
//   </ion-list>
// </ion-content>
// `
// })
// export class ModalContentPage {
//   character;

  
// }
