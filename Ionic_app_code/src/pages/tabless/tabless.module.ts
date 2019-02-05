import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablessPage } from './tabless';

@NgModule({
  declarations: [
    TablessPage,
  ],
  imports: [
    IonicPageModule.forChild(TablessPage),
  ],
})
export class TablessPageModule {}
