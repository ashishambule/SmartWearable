webpackJsonp([6],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { BlePage } from './ble';





var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__dashboard__["a" /* DashboardPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bleconnect_bleconnect__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { LoginPage } from './../login/login';





// import {LoginPage}
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, toastCtrl, ble, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.devices = [];
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.scan = function () {
        var _this = this;
        this.setStatus('Scanning for Bluetooth LE Devices');
        this.devices = []; // clear list
        this.ble.scan([], 300).subscribe(function (device) { return _this.onDeviceDiscovered(device); }, function (error) { return _this.scanError(error); });
        setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
    };
    DashboardPage.prototype.onDeviceDiscovered = function (device) {
        var _this = this;
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(function () {
            _this.devices.push(device);
        });
    };
    // If location permission is denied, you'll end up here
    DashboardPage.prototype.scanError = function (error) {
        this.setStatus('Error ' + error);
        var toast = this.toastCtrl.create({
            message: 'Please Turn On the device location',
            position: 'middle',
            duration: 5000
        });
        toast.present();
    };
    DashboardPage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    DashboardPage.prototype.deviceSelected = function (device) {
        console.log(JSON.stringify(device) + 'selected');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__bleconnect_bleconnect__["a" /* BleconnectPage */], {
            device: device
        });
        //Api connection
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n  <!-- <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Dashboard\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="scan()">\n          Scan\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let device of devices" (click)="deviceSelected(device)">\n        <h2>Your Health Monitoring Device </h2>\n        <h2>{{ device.name || \'Unnamed\' }}</h2>\n        <!-- <p>{{ device.id }}</p> -->\n			<!-- <p>RSSI: {{ device.rssi }}</p> -->\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=6.js.map