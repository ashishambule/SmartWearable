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
  ) {
  }
  firstName: String;
  response: String;
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
  econtacts1: number;
  econtacts2: number;
  econtacts3: number;
  dcontacts: ArrayBuffer;
  deleted: Boolean;
  activeTab: string = 'userDetails';

  register(curtab) {
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
      emergencyContacts: this.econtacts1+","+this.econtacts1+","+this.econtacts1,
      doctorContacts: this.dcontacts,
      deleted: this.deleted,

    };
    if (curtab == 'contactInfo') {
      if (!this.econtacts1 || !this.dcontacts) {
        this.response = "field required";
      } else {
        this.registerServiceProvider.postData(userData, 'addUser').subscribe(res => {
          console.log(res);
          this.navCtrl.push(LoginPage)
        })      }
    }
    

  }

  onTabChange(curtab,nexttab) {

    if (curtab == 'userDetails') {
      console.log(this.firstName,"  ",this.dateOfBirth)
      if (!this.firstName || !this.dateOfBirth || !this.userName || !this.password || !this.mobileNumber || !this.emailadd || !this.address) {
        this.response = "field required";
      } else {
        this.activeTab = nexttab;
      }
    }
    if (curtab == 'medicalHistory') {
      if (!this.bloodgroup) {
        this.response = "field required";
      } else {
        this.activeTab = nexttab;
      }
    }
    if (curtab == 'contactInfo') {
      if (!this.econtacts1 || !this.dcontacts) {
        this.response = "field required";
      } else {
        this.activeTab = nexttab;
      }
    }
  }
}
