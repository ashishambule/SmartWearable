import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { DeviceServiceProvider } from '../../providers/device-service/device-service';

let service_uuid = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
let heart_characteristic_uuid = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
// let service_uuid ="180d";
// let heart_characteristic_uuid ="2a8d";
let spo2_characteristic_uuid = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
let temp_characteristic_uuid = "beb5483e-36e1-4688-b7f5-ea07361b26a8";

@IonicPage()
@Component({
  selector: 'page-bleconnect',
  templateUrl: 'bleconnect.html',
})
export class BleconnectPage {

  peripheral: any = {};
  statusMessage: string;
  heartRate: number;
  o2level: number;
  temperature: number;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private ble: BLE,
    private toastCtrl: ToastController,
    private ngZone: NgZone,
    private deviceServiceProvider: DeviceServiceProvider,
    private loginServiceProvider: LoginServiceProvider) {

    let device = navParams.get('device');

    //connecting to BLE
    this.ble.connect(device.id).subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );
  }

  onConnected(peripheral) {
    this.ngZone.run(() => {
      this.peripheral = peripheral;
    });

    let deviceData = {
      macID: this.peripheral.id,
      userName: this.loginServiceProvider.getUserName()
    }
    this.deviceServiceProvider.postData(deviceData, 'addDevice').subscribe(res => {
      console.log(res);
      // this.navCtrl.push(LoginPage)
    });
    // To read and notification should use the same handler(heartrate)

    this.ble.startNotification(peripheral.id, service_uuid, heart_characteristic_uuid).subscribe(
      buffer => {
        var data = new Uint8Array(buffer);
        this.ngZone.run(() => {
          this.heartRate = data[0]
        });
      }
    );



  }

  onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'center'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      // TODO navigate back?
    });
    toast.present();
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.peripheral.id).then(
      () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
      () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
    )
  }

  showo2() {
    this.ble.read(this.peripheral.id, service_uuid, spo2_characteristic_uuid).then(
      data => this.onOxygenChange(data),
    )

  }

  showTemp() {
    this.ble.read(this.peripheral.id, service_uuid, temp_characteristic_uuid).then(
      data => this.onTemperatureChange(data),
    )
  }

  onOxygenChange(buffer: ArrayBuffer) {
    var data = new Uint8Array(buffer);
    this.ngZone.run(() => {
      this.o2level = data[0];
    });
  }

  onTemperatureChange(buffer: ArrayBuffer) {
    var data = new Uint8Array(buffer);
    this.ngZone.run(() => {
      this.temperature = data[0];
    });
  }
}
