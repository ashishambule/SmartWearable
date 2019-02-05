webpackJsonp([5],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__howoperate_howoperate__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aboutus_aboutus__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactus_contactus__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__faq_faq__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    HelpPage.prototype.fun1 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__howoperate_howoperate__["a" /* HowoperatePage */]);
    };
    HelpPage.prototype.fun2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__aboutus_aboutus__["a" /* AboutusPage */]);
    };
    HelpPage.prototype.fun3 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__contactus_contactus__["a" /* ContactusPage */]);
    };
    HelpPage.prototype.fun4 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__faq_faq__["a" /* FaqPage */]);
    };
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/help/template.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Help</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <ion-list>\n      <a ion-item (click)="fun1()">\n        How to Operate\n      </a>\n      <a ion-item (click)="fun2()">\n        About Us\n      </a>\n      <a ion-item (click)="fun3()">\n        Contact Us\n      </a>\n      <a ion-item (click)="fun4()">\n            FAQ\n          </a>\n    </ion-list>\n  \n  </ion-content>'/*ion-inline-end:"/home/acs/cdac/final_project/SmartWearable/mynewmobileapp/src/pages/help/template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HelpPage);
    return HelpPage;
}());

// @Component({
//   template: `
// <ion-header>
//   <ion-toolbar>
//     <ion-title>
//       Description
//     </ion-title>
//     <ion-buttons start>
//         <span ion-text color="primary" showWhen="ios">Cancel</span>
//         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
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
// })
// export class ModalContentPage {
//   character;
// } 
//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=5.js.map