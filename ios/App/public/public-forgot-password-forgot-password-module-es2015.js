(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/forgot-password/forgot-password.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/forgot-password/forgot-password.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n  <ion-row class=\"ion-padding\" style=\"margin-top: 2vh;\">\r\n    <ion-col size=\"6\"  (click)=\"goBack()\">\r\n      <ion-icon name=\"chevron-back-outline\" class=\"fs-20\"></ion-icon>&nbsp;\r\n      <ion-label style=\"margin-top: 1px; position: absolute; font-size:12px\">back</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"ion-float-right\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-padding-bottom ion-padding-end ion-padding-start\">\r\n    <ion-col size=\"1\"></ion-col>\r\n    <ion-col size=\"10\">\r\n      <ion-note color=\"dark\" class=\"poppins-extra-bold fs-30 ion-no-padding\">Recover your account</ion-note>\r\n    </ion-col>\r\n    <ion-col size=\"1\"></ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <form class=\"mt-10\">\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-item [ngClass]=\"{ 'invalid-item-md': '!loginForm.controls.email.valid' }\" lines=\"none\">\r\n          <ion-input class=\"input-w-icon\" type=\"email\" placeholder=\"Enter email or phone number\">\r\n          </ion-input>\r\n          <!-- <ion-icon color=\"success\" size=\"small\" name=\"checkmark-circle-outline\" *ngIf=\"\r\n            !loginForm.get('email').errors && loginForm.get('email').dirty&& this.loginForm.value.email!==''\r\n          \"></ion-icon>\r\n          <ion-icon color=\"danger\" size=\"small\" name=\"close-circle-outline\" *ngIf=\"\r\n            loginForm.get('email').errors && loginForm.get('email').dirty&& this.loginForm.value.email!==''\r\n          \"></ion-icon> -->\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row class=\"mt-5\">\r\n      <ion-col size=\"12\" class=\"ion-align-items-center ion-text-center\">\r\n        <ion-button shape=\"round\" fill=\"outline\" class=\"fs-16 poppins-bold\">N<span class=\"ion-text-lowercase\">ext</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/public/forgot-password/forgot-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/public/forgot-password/forgot-password.module.ts ***!
  \******************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/public/forgot-password/forgot-password.page.ts");







const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/public/forgot-password/forgot-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/public/forgot-password/forgot-password.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/public/forgot-password/forgot-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/public/forgot-password/forgot-password.page.ts ***!
  \****************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/providers/widgets/toaster.service */ "./src/app/shared/services/providers/widgets/toaster.service.ts");
/* harmony import */ var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/providers/navigation/browser-history.service */ "./src/app/shared/services/providers/navigation/browser-history.service.ts");









// import { InAppBrowserObject, InAppBrowser } from '@ionic-native/in-app-browser/ngx';
let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(fb, alertController, router, toaster, alertCtrl, util, browserHistory, loadCtrl) {
        this.fb = fb;
        this.alertController = alertController;
        this.router = router;
        this.toaster = toaster;
        this.alertCtrl = alertCtrl;
        this.util = util;
        this.browserHistory = browserHistory;
        this.loadCtrl = loadCtrl;
        // _browserOption = 'location=yes,hidden=no,clearcache=yes,clearsessioncache=yes,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=no';
        this._isEmail = false;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
    }
    ngOnInit() {
        // Initialize local variables
        this.resetForm = this.fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]
            ]
        });
    }
    // async onReset() {
    //   if (!this.resetForm.valid) {
    //     this.presentAlertPrompt();
    //     return;
    //   }
    //   this.loading = await this.loadCtrl.create({
    //     message: 'Processing ...'
    //   });
    //   this.util.stopLoading(this.loading);
    //   // Perform reset here
    //   this.userService.RequestResetLink(this.resetForm.value.email).subscribe(res => {
    //     this.loading.dismiss();
    //     this.alertController.create({
    //       header: 'Info',
    //       message:
    //         'Reset link has been sent to your email',
    //       buttons: [
    //         {
    //           text: 'Ok',
    //           handler: () => {
    //             this.router.navigate([
    //               '/login'
    //             ]);
    //           }
    //         }
    //       ]
    //     }).then(_ => _.present());
    //   }, error => {
    //     this.loading.dismiss();
    //     if (error.search('verified') > -1) {
    //       this._auth.requestVerificationLink(this.resetForm.value.email).subscribe(res => {
    //         this.toaster.toast('Email is not verified! Check your email for verification link', 60);
    //       }, error => {
    //         this.alertCtrl.create({
    //           header: `Email is not verified. A verification link is sent to ` + this.resetForm.value.email +
    //             ` but it may take up 10min to show up. check spam if not in your In-box Verify your email now?`,
    //           message: '',
    //           buttons: [
    //             {
    //               text: 'No',
    //               role: 'cancel',
    //               cssClass: 'secondary',
    //               handler: (blah) => {
    //                 this.toaster.toast('Email is not verified! Check your email for verification link', 60);
    //               }
    //             }, {
    //               text: 'Yes',
    //               handler: () => {
    //                 const temp = this.resetForm.value.email.split('@');
    //                 if (temp.length > 1) {
    //                   this.emailBrowser('https://www.' + temp[1]);
    //                 }
    //               }
    //             }
    //           ],
    //           translucent: true,
    //         }).then(alert => alert.present());
    //       });
    //     } else {
    //       this.toaster.toast(error, 60);
    //     }
    //   });
    // }
    // async emailBrowser(url: string) {
    //   const browserRef: InAppBrowserObject = this._browser.create(url,
    //     '_system', this._browserOption);
    //   browserRef.on('loadstop').subscribe(event => {
    //     this.loading.dismiss();
    //   });
    //   browserRef.on('exit').subscribe(event => {
    //     this.loading.dismiss();
    //   });
    // }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Please check your email!',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            // console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onValidate(email) {
    }
    goBack() {
        this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_8__["BrowserHistoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/forgot-password/forgot-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/public/forgot-password/forgot-password.page.scss")).default]
    })
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=public-forgot-password-forgot-password-module-es2015.js.map