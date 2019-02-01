//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://13.234.29.121:3000/users/"; //ravi

/*
  Generated class for the UpdatepasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpdatepasswordProvider {

  constructor(public http: Http) {
    console.log('Hello UpdatepasswordProvider Provider');
  }
  postData(userjsondata, type) {
    let header = new Headers();
    header.append("ContentType","application/json");
    return this.http.put(apiUrl + type, userjsondata, { headers: header })
.map(res=>res.json());
}
}
