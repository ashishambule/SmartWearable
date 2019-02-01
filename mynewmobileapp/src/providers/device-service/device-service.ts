import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://13.234.29.121:3000/devices/";
// let apiUrl = "http://localhost:3000/devices/";
@Injectable()
export class DeviceServiceProvider {

  constructor(public http: Http) {
    console.log('Hello DeviceServiceProvider Provider');
  }
  postData(devicejsondata, type) {
    let header = new Headers();
    header.append("ContentType", "application/json");
    return this.http.post(apiUrl + type, devicejsondata, { headers: header })
      .map(res => res.json());
  }

}
