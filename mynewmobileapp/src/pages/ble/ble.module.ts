import { BleconnectPage } from './../bleconnect/bleconnect';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlePage } from './ble';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ErrorHandler} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@NgModule({
  declarations: [
    BlePage,
    BleconnectPage
  ],
  imports: [
    IonicPageModule.forChild(BlePage),
  ],
  entryComponents:[
    BlePage,
    BleconnectPage
  ],
  providers: [
    BLE,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class BlePageModule {}
