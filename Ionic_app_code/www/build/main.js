webpackJsonp([15],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenubarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidemenubarPage = /** @class */ (function () {
    function SidemenubarPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'Dashboard', component: 'DashboardPage', index: 0 },
            { title: 'Device Info', component: 'InfoPage', index: 1 },
            { title: 'Change Password', component: 'UserprofilePage' },
            { title: 'Setting', component: 'SettingPage' },
            { title: 'Help', component: 'HelpPage', notab: true },
        ];
    }
    SidemenubarPage.prototype.openPage = function (page) {
        if (page.component == 'StartPage') {
            this.app.getRootNavs()[0].setRoot(page.component);
        }
        else {
            if (page.notab != undefined && page.notab) {
                console.log(['Help', this.nav]);
                this.nav.push(page.component);
            }
            else {
                console.log(['check', this.nav.getActiveChildNavs()[0]]);
                if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
                    console.log(['load tab', this.nav.getActiveChildNavs()[0]]);
                    this.nav.getActiveChildNavs()[0].select(page.index);
                }
                else {
                    console.log(['Setting', this.nav.getActiveChildNavs()[0]]);
                    // Tabs are not active, so reset the root page 
                    // In this case: moving to or from SpecialPage
                    this.nav.getActiveChildNavs()[0].getSelected().push(page.component);
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], SidemenubarPage.prototype, "nav", void 0);
    SidemenubarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sidemenubar',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/sidemenubar/sidemenubar.html"*/'<ion-menu [content]="content" persistent="true">\n	<ion-header>\n		<ion-toolbar>\n			<button ion-button menuToggle right>\n				<ion-icon name="menu"></ion-icon>\n			</button>\n			<ion-title>Menu</ion-title>\n		</ion-toolbar>\n	</ion-header>\n	<ion-content>\n		<ion-list>\n			<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n				{{p.title}}\n			</button>\n		</ion-list>\n	</ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/sidemenubar/sidemenubar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], SidemenubarPage);
    return SidemenubarPage;
}());

//# sourceMappingURL=sidemenubar.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.navigateToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.navigateToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/home/home.html"*/'<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  \n    <h1 align="center"> Health Monitoring </h1>\n    <!-- <button (click)="navigateToOtherPage()">Next Page<button> -->\n\n    \n    \n\n\n    <!-- <button ion-button block (click)="navigateToBlePage()">BLE scan</button> -->\n  \n</ion-header>\n\n\n<ion-content padding>\n  <br>\n  <br>\n  <br>\n    <button ion-button block (click)="navigateToLoginPage()">Sign in</button>\n    <br>\n    <button ion-button block (click)="navigateToRegisterPage()">Register</button>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		283,
		14
	],
	"../pages/bleconnect/bleconnect.module": [
		284,
		13
	],
	"../pages/contactus/contactus.module": [
		285,
		12
	],
	"../pages/dashboard/dashboard.module": [
		286,
		6
	],
	"../pages/faq/faq.module": [
		287,
		11
	],
	"../pages/help/help.module": [
		288,
		5
	],
	"../pages/howoperate/howoperate.module": [
		289,
		10
	],
	"../pages/info/info.module": [
		290,
		4
	],
	"../pages/login/login.module": [
		291,
		9
	],
	"../pages/register/register.module": [
		292,
		8
	],
	"../pages/setting/setting.module": [
		293,
		3
	],
	"../pages/sidemenubar/sidemenubar.module": [
		294,
		7
	],
	"../pages/tabless/tabless.module": [
		297,
		2
	],
	"../pages/tabs/tabs.module": [
		296,
		1
	],
	"../pages/userprofile/userprofile.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "http://13.234.29.121:3000/devices/";
// let apiUrl = "http://localhost:3000/devices/";
var DeviceServiceProvider = /** @class */ (function () {
    function DeviceServiceProvider(http) {
        this.http = http;
        console.log('Hello DeviceServiceProvider Provider');
    }
    DeviceServiceProvider.prototype.postData = function (devicejsondata, type) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("ContentType", "application/json");
        return this.http.post(apiUrl + type, devicejsondata, { headers: header })
            .map(function (res) { return res.json(); });
    };
    DeviceServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DeviceServiceProvider);
    return DeviceServiceProvider;
}());

//# sourceMappingURL=device-service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "http://13.234.29.121:3000/users/";
// let apiUrl = "http://localhost:3000/users/";
var RegisterServiceProvider = /** @class */ (function () {
    function RegisterServiceProvider(http) {
        this.http = http;
        console.log('Hello RegisterServiceProvider Provider');
    }
    RegisterServiceProvider.prototype.postData = function (userjsondata, type) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("ContentType", "application/json");
        return this.http.post(apiUrl + type, userjsondata, { headers: header })
            .map(function (res) { return res.json(); });
    };
    RegisterServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RegisterServiceProvider);
    return RegisterServiceProvider;
}());

//# sourceMappingURL=register-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = /** @class */ (function () {
    function AboutusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/aboutus/aboutus.html"*/'<!--\n  Generated template for the AboutusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n          <h2>About The App</h2>\n          <p>\n              Infographic:\n              Whether you’re traveling or just away from home,\n               the Health app keeps your health information within reach, \n               wherever you go. It’s the IONIC mobile\n                app – and it’s one more way it’s easier to manage your UnitedHealthcare health plan.\n          </p>\n          \n          <p>\n              Instant access:\n              Download Health App to your smartphone and \n              you’ll get instant access to view your health plan details,\n              check claims or find a doctor. \n              It gives you your health records.\n          </p>\n</ion-content>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/aboutus/aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BleconnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_login_service_login_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_device_service_device_service__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// let service_uuid = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
// let heart_characteristic_uuid = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
var service_uuid = "180d";
var heart_characteristic_uuid = "2a8d";
// let spo2_characteristic_uuid = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
// let temp_characteristic_uuid = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
var spo2_characteristic_uuid = "2a62";
var temp_characteristic_uuid = "2a20";
var BleconnectPage = /** @class */ (function () {
    function BleconnectPage(navCtrl, navParams, ble, toastCtrl, ngZone, deviceServiceProvider, loginServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.deviceServiceProvider = deviceServiceProvider;
        this.loginServiceProvider = loginServiceProvider;
        this.peripheral = {};
        var device = navParams.get('device');
        //connecting to BLE
        this.ble.connect(device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.onDeviceDisconnected(peripheral); });
    }
    BleconnectPage.prototype.onConnected = function (peripheral) {
        var _this = this;
        this.ngZone.run(function () {
            _this.peripheral = peripheral;
        });
        var deviceData = {
            macID: this.peripheral.id,
            userName: this.loginServiceProvider.getUserName()
        };
        this.deviceServiceProvider.postData(deviceData, 'addDevice').subscribe(function (res) {
            console.log(res);
            // this.navCtrl.push(LoginPage)
        });
        // To read and notification should use the same handler(heartrate)
        this.ble.startNotification(peripheral.id, service_uuid, heart_characteristic_uuid).subscribe(function (buffer) {
            var data = new Uint8Array(buffer);
            _this.ngZone.run(function () {
                _this.heartRate = data[0];
            });
        });
    };
    BleconnectPage.prototype.onDeviceDisconnected = function (peripheral) {
        var toast = this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'center'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
            // TODO navigate back?
        });
        toast.present();
    };
    BleconnectPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        console.log('ionViewWillLeave disconnecting Bluetooth');
        this.ble.disconnect(this.peripheral.id).then(function () { return console.log('Disconnected ' + JSON.stringify(_this.peripheral)); }, function () { return console.log('ERROR disconnecting ' + JSON.stringify(_this.peripheral)); });
    };
    BleconnectPage.prototype.showo2 = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, service_uuid, spo2_characteristic_uuid).then(function (data) { return _this.onOxygenChange(data); });
    };
    BleconnectPage.prototype.showTemp = function () {
        var _this = this;
        this.ble.read(this.peripheral.id, service_uuid, temp_characteristic_uuid).then(function (data) { return _this.onTemperatureChange(data); });
    };
    BleconnectPage.prototype.onOxygenChange = function (buffer) {
        var _this = this;
        var data = new Uint8Array(buffer);
        this.ngZone.run(function () {
            _this.o2level = data[0];
        });
    };
    BleconnectPage.prototype.onTemperatureChange = function (buffer) {
        var _this = this;
        var data = new Uint8Array(buffer);
        this.ngZone.run(function () {
            _this.temperature = data[0];
        });
    };
    BleconnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-bleconnect',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/bleconnect/bleconnect.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ peripheral.name || \'Device\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="padding">\n\n  <ion-card>\n\n    <h1> Heart Rate:\n      {{heartRate}}</h1>\n\n  </ion-card>\n\n  <ion-card>\n      <div padding>\n          <button ion-button block class="submit-btn" (click)="showo2()">SpO2 Level</button>\n          <h1> Oxygen Level:\n              {{o2level}}</h1>\n        </div>\n    \n\n  </ion-card>\n\n  <ion-card>\n      <div padding>\n          <button ion-button block class="submit-btn" (click)="showTemp()">Temperature</button>\n          <h1> Body Temperature:\n              {{temperature}}</h1>\n        </div>\n   \n\n  </ion-card>\n\n  <!-- <ion-card>\n    <ion-card-header>\n      Services\n    </ion-card-header>\n\n    <ion-list>\n      <ion-item *ngFor="let service of peripheral.services">\n        {{service.SERVICE_UUID}}\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Details\n    </ion-card-header>\n    <ion-card-content>\n      <pre>{{peripheral| json }}</pre>\n    </ion-card-content>\n  </ion-card>  -->\n</ion-content>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/bleconnect/bleconnect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_device_service_device_service__["a" /* DeviceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
    ], BleconnectPage);
    return BleconnectPage;
}());

//# sourceMappingURL=bleconnect.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/contactus/contactus.html"*/'<!--\n  Generated template for the ContactusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>This App is meantained by- Shivalika Gupta</h3>\n  <p>Support Team:<br>\n  Ashish<br>\n  Ravi<br>\n  Saquib<br>\n  Prajkta\n  </p>\n  <h6>Contact Us :</h6>\n      <ul>\n          <li>shivalikagupta97@gmail.com</li>\n          <li>ambule.ashish06@gmail.com</li>\n          <li>ghadge.prajkta9925@gmail.com</li>\n        </ul>\n  \n</ion-content>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/contactus/contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/faq/faq.html"*/'<!--\n  Generated template for the FaqPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FAQ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ul>\n        <li>Q1-> Does It Give Real Data?<br>Ans-> Yes, it gives the real data.</li>\n        <li>Q2-> Can i change the doctor\'s number?<br>Ans-> Yes, you can change the doctor\'s number.</li>\n        <li>Q3-> Can i use it for other purpose?<br>Ans-> No, you can\'t use it for other purpose.</li>\n        <li>Q4-> Can i got my old profile records?<br>Ans-> No, because you update your profile records.</li>\n        <li>Q5-> Can i change my passord?<br>Ans-> Yes, you can change it.</li>\n      </ul>\n      <h6>If you have a query, email your query in this email-id <br>\n      shivalikagupta97@gmail.com<br>ambule.ashish06@gmail.com\n      </h6>\n\n</ion-content>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowoperatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HowoperatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HowoperatePage = /** @class */ (function () {
    function HowoperatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HowoperatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowoperatePage');
    };
    HowoperatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-howoperate',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/howoperate/howoperate.html"*/'<!--\n  Generated template for the HowoperatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>How Operate This App</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ol type="1">\n        <li>Install the Health Monitor App</li>\n        <li>Register in this App</li>\n        <li>After registration Login in this App</li>\n        <li>After Login you entered in the Dashboard and you got your health data</li>\n        <li>If you want to your health records go to records button</li>\n        <li>If you want to cheange your profile go to User Profile page</li>\n        <li>If you ask any problem go to Help page</li>\n        <li>If you want to any changes go to setting page</li>\n      </ol>\n</ion-content>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/howoperate/howoperate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HowoperatePage);
    return HowoperatePage;
}());

//# sourceMappingURL=howoperate.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatepasswordProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';



var apiUrl = "http://13.234.29.121:3000/users/"; //ravi
/*
  Generated class for the UpdatepasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UpdatepasswordProvider = /** @class */ (function () {
    function UpdatepasswordProvider(http) {
        this.http = http;
        console.log('Hello UpdatepasswordProvider Provider');
    }
    UpdatepasswordProvider.prototype.postData = function (userjsondata, type) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("ContentType", "application/json");
        return this.http.put(apiUrl + type, userjsondata, { headers: header })
            .map(function (res) { return res.json(); });
    };
    UpdatepasswordProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UpdatepasswordProvider);
    return UpdatepasswordProvider;
}());

//# sourceMappingURL=updatepassword.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_ble__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bleconnect_bleconnect__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sidemenubar_sidemenubar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_register_service_register_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_howoperate_howoperate__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_aboutus_aboutus__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contactus_contactus__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_faq_faq__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_updatepassword_updatepassword__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_device_service_device_service__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bleconnect_bleconnect__["a" /* BleconnectPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sidemenubar_sidemenubar__["a" /* SidemenubarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_howoperate_howoperate__["a" /* HowoperatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_faq_faq__["a" /* FaqPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bleconnect/bleconnect.module#BleconnectPageModule', name: 'BleconnectPage', segment: 'bleconnect', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/howoperate/howoperate.module#HowoperatePageModule', name: 'HowoperatePage', segment: 'howoperate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sidemenubar/sidemenubar.module#SidemenubarPageModule', name: 'SidemenubarPage', segment: 'buy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabless/tabless.module#TablessPageModule', name: 'TablessPage', segment: 'tabless', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bleconnect_bleconnect__["a" /* BleconnectPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sidemenubar_sidemenubar__["a" /* SidemenubarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_howoperate_howoperate__["a" /* HowoperatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_faq_faq__["a" /* FaqPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_13__providers_register_service_register_service__["a" /* RegisterServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__["a" /* LoginServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_updatepassword_updatepassword__["a" /* UpdatepasswordProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_device_service_device_service__["a" /* DeviceServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__["a" /* LoginServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidemenubar_sidemenubar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_service_login_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loginServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginServiceProvider = loginServiceProvider;
    }
    LoginPage.prototype.toLogin = function () {
        var _this = this;
        var LoginUserData = {
            userName: this.userName,
            password: this.password
        };
        this.loginServiceProvider.postData(LoginUserData, 'authenticate').subscribe(function (res) {
            console.log(res);
            if (res.success === true) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sidemenubar_sidemenubar__["a" /* SidemenubarPage */]);
            }
            else {
                console.log("wrong credentials");
            }
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/login/login.html"*/'<ion-grid>\n  <ion-row justify-content-center>\n    <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n      <ion-nav></ion-nav>\n      <div text-center>\n        <h4>Log in to Health Monitoring App </h4>\n      </div>\n      <div padding>\n        <ion-item>\n          <ion-input type="text" placeholder="Username" [(ngModel)]="userName"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </div>\n\n      <div padding>\n        <button ion-button block class="submit-btn" (click)="toLogin()">Login</button>\n      </div>\n      <div>\n		New to Health Monitoring App ?\n		<a href="#" (click)="register()">Register Here</a>\n      </div>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_service_register_service__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, registerServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerServiceProvider = registerServiceProvider;
        this.activeTab = 'userDetails';
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        //Api connection
        var userData = {
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
        this.registerServiceProvider.postData(userData, 'addUser').subscribe(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        });
    };
    RegisterPage.prototype.onTabChange = function (tab) {
        this.activeTab = tab;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/register/register.html"*/'<div class="register">\n  \n  <a class="tab-item" [ngClass]="{\'active\':activeTab === \'userDetails\'}" (click)="onTabChange(\'userDetails\')"> </a>\n  <a class="tab-item" [ngClass]="{\'active\':activeTab === \'medicalHistory\'}" (click)="onTabChange(\'medicalHistory\')"></a>\n  <a class="tab-item" [ngClass]="{\'active\':activeTab === \'contactInfo\'}" (click)="onTabChange(\'contactInfo\')"></a>\n\n  <div *ngIf="activeTab === \'userDetails\'">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n\n          <div text-center>\n            <h4>Personal Details</h4>\n          </div>\n\n          <div padding>\n\n            <ion-item>\n              <ion-input type="text" placeholder="First Name" [(ngModel)]="firstName"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Last Name" [(ngModel)]="lastName"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="User Name" [(ngModel)]="userName"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="email Id" [(ngModel)]="emailadd"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Date of Birth" [(ngModel)]="dateOfBirth"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="number" placeholder="Mobile Number" [(ngModel)]="mobileNumber"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="number" placeholder="Alternate Mobile Number" [(ngModel)]="altNumber"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Address" [(ngModel)]="address"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            \n            <div padding>\n              <button ion-button block class="submit-btn" (click)="onTabChange(\'medicalHistory\')">Next</button>\n            </div>\n          </div>\n          <div padding>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n<!-- ----------------------------------------------------------------------- -->\n<div *ngIf="activeTab === \'medicalHistory\'">\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n\n        <div text-center>\n          <h4>Medical Details and History</h4>\n        </div>\n\n        <div padding>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Blood Group" [(ngModel)]="bloodgroup"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Alergies" [(ngModel)]="allergies"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Prior Surgeries" [(ngModel)]="priorsurgeries"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Any Family Medical History" [(ngModel)]="familyhistory"></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button ion-button block class="submit-btn" (click)="onTabChange(\'contactInfo\')">Next</button>\n          </div>\n\n        </div>\n        <div padding>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n<!-- ----------------------------------------------------- -->\n<div *ngIf="activeTab === \'contactInfo\'">\n\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n        <div text-center>\n          <h4>Emergency Contact Details</h4>\n        </div>\n\n        <div padding>\n\n          <ion-item>\n            <ion-input type="number" placeholder="Emergency Contact Number " [(ngModel)]="econtacts"></ion-input>\n          </ion-item>\n\n          <!-- <ion-item>\n            <ion-input type="number" placeholder="Emergency Contact Number 2" [(ngModel)]="econtacts"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="number" placeholder="Emergency Contact Number 3" [(ngModel)]="econtacts"></ion-input>\n          </ion-item> -->\n\n          <ion-item>\n            <ion-input type="number" placeholder="Doctor\'s Contact Number 1" [(ngModel)]="dcontacts"></ion-input>\n          </ion-item>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div padding>\n    <button ion-button block class="submit-btn" (click)="register()">Register</button>\n  </div>\n</div>\n\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_register_service_register_service__["a" /* RegisterServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "http://13.234.29.121:3000/users/";
// let apiUrl = "http://localhost:3000/users/";
var LoginServiceProvider = /** @class */ (function () {
    function LoginServiceProvider(http) {
        this.http = http;
        console.log('Hello LoginServiceProvider Provider');
        this.userName = '';
    }
    LoginServiceProvider.prototype.postData = function (userjsondata, type) {
        this.userName = userjsondata.userName;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("ContentType", "application/json");
        return this.http.post(apiUrl + type, userjsondata, { headers: header })
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider.prototype.getUserName = function () {
        return this.userName;
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map