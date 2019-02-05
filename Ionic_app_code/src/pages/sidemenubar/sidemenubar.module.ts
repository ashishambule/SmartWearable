import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SidemenubarPage } from './sidemenubar';

@NgModule({
  declarations: [
    SidemenubarPage,
  ],
  imports: [
    IonicPageModule.forChild(SidemenubarPage),
  ],
})
export class SidemenubarPageModule {}
