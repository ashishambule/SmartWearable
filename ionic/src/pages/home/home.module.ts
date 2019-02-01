import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';


// import {RegisterPage} from '../register/register';
// import {LoginPage} from '../login/login';
// import {BlePage} from '../ble/ble';
@NgModule({
  declarations: [
    HomePage,
    // RegisterPage,
    // LoginPage,
    // BlePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage,
    // RegisterPage,
    // LoginPage,
    // BlePage
  ]
})
export class HomePageModule {}
