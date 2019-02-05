webpackJsonp([3],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(52);
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.fun2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SettingPage.prototype.fun3 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/setting/template.html"*/'<ion-header>\n        <ion-navbar>\n          <ion-title>Settings</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content>\n      \n        <ion-list>\n          <a ion-item (click)="fun2()">\n            Delete Account\n          </a>\n          <a ion-item (click)="fun3()">\n            Sign Out\n          </a>\n          \n        </ion-list>\n      \n      </ion-content>'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/setting/template.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

// @Component({
//   template: `
// <ion-header>
//   <ion-toolbar>
//     <ion-title>
//       Description
//     </ion-title>
//     <ion-buttons start>
//       <button ion-button (click)="dismiss()">
//         <span ion-text color="primary" showWhen="ios">Cancel</span>
//         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//       </button>
//     </ion-buttons>
//   </ion-toolbar>
// </ion-header>
// <ion-content>
//   <ion-list>
//       <ion-item>
//         <ion-avatar item-start>
//           <img src="{{character.image}}">
//         </ion-avatar>
//         <h2>{{character.name}}</h2>
//         <p>{{character.quote}}</p>
//       </ion-item>
//       <ion-item *ngFor="let item of character['items']">
//         {{item.title}}
//         <ion-note item-end>
//           {{item.note}}
//         </ion-note>
//       </ion-item>
//   </ion-list>
// </ion-content>
// `
// })
// export class ModalContentPage {
//   character;
// }
//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=3.js.map