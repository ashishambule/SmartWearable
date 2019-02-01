import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
	segment: 'tabs'
})
@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {
	tab1Root: any = 'DashboardPage';
	tab2Root: any = 'InfoPage';

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log(this);
	}

	ionViewDidLoad() {
		console.log(['ionViewDidLoad TabsPage',this]);
	}

}
