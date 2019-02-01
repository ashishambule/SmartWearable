import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://13.234.29.121:3000/users/";
// let apiUrl = "http://localhost:3000/users/";

@Injectable()
export class LoginServiceProvider {
  userName:String;
  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
    this.userName='';
  }
  postData(userjsondata, type) {
    this.userName=userjsondata.userName;
    let header = new Headers();
    header.append("ContentType","application/json");
    return this.http.post(apiUrl + type, userjsondata, { headers: header })
.map(res=>res.json());
}

getUserName(){
  return this.userName;
}

}
