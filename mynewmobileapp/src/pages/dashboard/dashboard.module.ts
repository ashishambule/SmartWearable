import { DashboardPage } from './dashboard';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { BlePage } from './ble';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ErrorHandler} from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';


@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
  providers: [
    BLE,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class DashboardPageModule {}
