import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BleconnectPage } from './bleconnect';

@NgModule({
  declarations: [
    BleconnectPage,
  ],
  imports: [
    IonicPageModule.forChild(BleconnectPage),
  ],
})
export class BleconnectPageModule {}
