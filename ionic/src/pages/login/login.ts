import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SidemenubarPage } from '../sidemenubar/sidemenubar';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loginServiceProvider: LoginServiceProvider) { }
  userName: String;
  password: String;

  toLogin() {
    let LoginUserData = {
      userName: this.userName,
      password: this.password
    };
    this.loginServiceProvider.postData(LoginUserData, 'authenticate').subscribe(res => {
      console.log(res);
      if (res.success === true) {
        this.navCtrl.push(SidemenubarPage)
        
      }
      else{
        console.log("wrong credentials");
        
      }
    });
}
  register(){
      this.navCtrl.push(RegisterPage)
  }

}
