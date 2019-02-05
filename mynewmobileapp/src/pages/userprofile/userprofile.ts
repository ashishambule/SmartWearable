import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UpdatepasswordProvider} from '../../providers/updatepassword/updatepassword';

//import { EditprofilePage } from '../editprofile/editprofile';

/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public updatepasswordProvider:UpdatepasswordProvider) {
  }
  userName: String;
  password: String;
  newPassword:String;
  openPage() {
    
    let UpdateUserPassword = {
      userName: this.userName,
      password: this.password
    };
    this.updatepasswordProvider.postData(UpdateUserPassword, 'updatePassword').subscribe(res => {
      console.log(res);
      if (res.success === true) {
        console.log("Password Change");
        this.navCtrl.push(LoginPage)
      }
      else{
        console.log("wrong credentials");
        
      }
    });}
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');
  }

}
