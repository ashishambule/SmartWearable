
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
import { HowoperatePage } from '../pages/howoperate/howoperate';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';
import { FaqPage } from '../pages/faq/faq';
import { UpdatepasswordProvider } from '../providers/updatepassword/updatepassword';
import { DeviceServiceProvider } from '../providers/device-service/device-service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
 
    BleconnectPage,
    SidemenubarPage,
    HowoperatePage,
    AboutusPage,
    ContactusPage,
    FaqPage

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
    HowoperatePage,
    AboutusPage,
    ContactusPage,
    FaqPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BLE,
    RegisterServiceProvider,
    LoginServiceProvider,
    UpdatepasswordProvider,
    DeviceServiceProvider,
    LoginServiceProvider,
    LoginServiceProvider,


  ]
})
export class AppModule { }
