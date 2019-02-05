webpackJsonp([0],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePageModule", function() { return UserprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userprofile__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserprofilePageModule = /** @class */ (function () {
    function UserprofilePageModule() {
    }
    UserprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userprofile__["a" /* UserprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userprofile__["a" /* UserprofilePage */]),
            ],
        })
    ], UserprofilePageModule);
    return UserprofilePageModule;
}());

//# sourceMappingURL=userprofile.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_updatepassword_updatepassword__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { EditprofilePage } from '../editprofile/editprofile';
/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserprofilePage = /** @class */ (function () {
    function UserprofilePage(navCtrl, navParams, updatepasswordProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.updatepasswordProvider = updatepasswordProvider;
    }
    UserprofilePage.prototype.openPage = function () {
        var _this = this;
        var UpdateUserPassword = {
            userName: this.userName,
            password: this.password
        };
        this.updatepasswordProvider.postData(UpdateUserPassword, 'updatePassword').subscribe(function (res) {
            console.log(res);
            if (res.success === true) {
                console.log("Password Change");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("wrong credentials");
            }
        });
    };
    UserprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserprofilePage');
    };
    UserprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userprofile',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/userprofile/userprofile.html"*/'<!--\n  Generated template for the UserprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">\n        <ion-nav></ion-nav>\n        <div text-center>\n          <h4>Change Password</h4>\n        </div>\n        <div padding>\n          <ion-item>\n              <ion-label floating>Username</ion-label>\n            <ion-input type="text" [(ngModel)]="userName"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>Old Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>New Password</ion-label>\n            <ion-input type="password"  [(ngModel)]="newPassword"></ion-input>\n          </ion-item>\n          <p>Password minimum length is 6</p>\n        </div>\n  \n        <div padding>\n          <button ion-button block class="submit-btn" (click)="openPage()">Change Password</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/userprofile/userprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_updatepassword_updatepassword__["a" /* UpdatepasswordProvider */]])
    ], UserprofilePage);
    return UserprofilePage;
}());

//# sourceMappingURL=userprofile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map