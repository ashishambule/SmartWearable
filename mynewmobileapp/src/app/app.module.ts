
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { BLE } from '@ionic-native/ble';
import { HttpModule } from '@angular/http';

import { RegisterPage } from './../pages/register/register';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BleconnectPage } from '../pages/bleconnect/bleconnect';
import { SidemenubarPage } from '../pages/sidemenubar/sidemenubar';

import { RegisterServiceProvider } from '../providers/register-service/register-service';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { DeviceServiceProvider } from '../providers/device-service/device-service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    BleconnectPage,
    SidemenubarPage,
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    BleconnectPage,
    SidemenubarPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BLE,
    RegisterServiceProvider,
    LoginServiceProvider,
    DeviceServiceProvider,
  ]
})
export class AppModule { }
