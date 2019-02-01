import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterServiceProvider } from '../../providers/register-service/register-service';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private registerServiceProvider: RegisterServiceProvider
  ) { }
  firstName: String;
  lastName: String;
  dateOfBirth: Date;
  userName: String;
  emailadd: String;
  mobileNumber: Number;
  address: String;
  password: String;
  altNumber: Number;
  bloodgroup: String;
  allergies: ArrayBuffer;
  priorsurgeries: ArrayBuffer;
  familyhistory: ArrayBuffer;
  econtacts: ArrayBuffer;
  dcontacts: ArrayBuffer;
  deleted: Boolean;
  activeTab: string = 'userDetails';

  register() {
    //Api connection
    let userData = {
      name: this.firstName,
      surname: this.lastName,
      dob: this.dateOfBirth,
      userName: this.userName,
      password: this.password,
      address: this.address,
      mobNumber: this.mobileNumber,
      altNumber: this.altNumber,
      bloodGroup: this.bloodgroup,
      emailadd: this.emailadd,
      allergies: this.allergies,
      priorSurgeries: this.priorsurgeries,
      familyHistory: this.familyhistory,
      emergencyContacts: this.econtacts,
      doctorContacts: this.dcontacts,
      deleted: this.deleted,
     
    };
    
    this.registerServiceProvider.postData(userData, 'addUser').subscribe(res => {
      console.log(res);
      this.navCtrl.push(LoginPage)
    })
  }

  onTabChange(tab) {
    this.activeTab = tab;
  }
}
