(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"ion-padding\" style=\"margin-top: 2vh;\">\r\n    <ion-col size=\"6\" (click)=\"goBack()\" >\r\n      <ion-icon name=\"chevron-back-outline\" class=\"fs-20\" ></ion-icon>&nbsp;\r\n      <ion-label style=\"margin-top: 1px; position: absolute; font-size:12px\" >back</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"ion-float-right\" >\r\n      <ion-label class=\"ion-float-right fs-12\" (click)=\"gotoRegister()\">Sign up</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <form [formGroup]=\"loginForm\" padding >\r\n    <ion-row >\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\" >\r\n        <ion-item [ngClass]=\"{ 'invalid-item-md': '!loginForm.controls.email.valid' }\" lines=\"none\">\r\n          <!-- <ion-icon name=\"person\" padding size=\"small\"></ion-icon>  &nbsp; -->\r\n          <ion-input class=\"input-w-icon\" formControlName=\"email\" type=\"email\" \r\n          (keyup)=\"onValidate('email')\" placeholder=\"Email\">\r\n          </ion-input>\r\n          <ion-icon color=\"success\" size=\"small\" name=\"checkmark-circle-outline\" *ngIf=\"\r\n            !loginForm.get('email').errors && loginForm.get('email').dirty&& this.loginForm.value.email!==''\r\n          \"></ion-icon>\r\n          <ion-icon color=\"danger\" size=\"small\" name=\"close-circle-outline\" *ngIf=\"\r\n            loginForm.get('email').errors && loginForm.get('email').dirty&& this.loginForm.value.email!==''\r\n          \"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <!-- <ion-icon name=\"key\" padding size=\"small\"></ion-icon>  &nbsp; -->\r\n          <ion-input class=\"input-w-icon\" placeholder=\"Password\"  type=\"{{isShow?'text':'password'}}\" formControlName=\"password\"\r\n            (keyup)=\"onValidate('password')\" >\r\n          </ion-input>\r\n          <ion-icon color=\"success\" size=\"small\" name=\"checkmark-circle-outline\" *ngIf=\"\r\n            !loginForm.get('password').errors &&\r\n            loginForm.get('password').dirty&& this.loginForm.value.password!==''\r\n          \"></ion-icon>\r\n          <ion-icon color=\"danger\" size=\"small\" name=\"close-circle-outline\" *ngIf=\"\r\n            loginForm.get('password').errors &&\r\n            loginForm.get('password').dirty&& this.loginForm.value.password!==''\r\n          \"></ion-icon>\r\n          <ion-icon size=\"small\" name=\"eye-outline\" \r\n          *ngIf=\"loginForm.get('password').dirty && this.loginForm.value.password!==''\" (click)=\"isShow=!isShow\"></ion-icon> \r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n\r\n      <ion-col size=\"10\" class=\"ion-align-items-right\">\r\n        <ion-note style=\"margin-right: 5.5%;\" (click)=\"gotoForgotPassword()\"\r\n        class=\"ion-float-right poppins-bold fs-12 fc-primary \">\r\n          Forget Password?</ion-note>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n\r\n    </ion-row>\r\n\r\n\r\n    <ion-row style=\"margin-top: 10vh;\">\r\n      <ion-col size=\"2\"></ion-col> \r\n      <ion-col size=\"8\">\r\n        <ion-button shape=\"round\" expand=\"block\" class=\"fs-16 poppins-bold\" (click)=\"onLogin()\">L<span class=\"ion-text-lowercase\">og in</span></ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col> \r\n    </ion-row>\r\n\r\n  </form>\r\n  <!-- <section padding style=\"padding-top:0\">\r\n    <ion-row padding style=\"padding-top:0\">\r\n      <ion-col size=\"5\">\r\n        <hr />\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <span class=\"text-color\" style=\"width: 100%;\">\r\n          <ion-text style=\"margin-left: 32%;\"></ion-text>\r\n        </span>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button color='none' expand=\"full\" style=\"margin:0;\r\n        padding: 0; background: #1953b7;\">Facebook</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button color=\"google\" expand=\"full\" style=\"background: #902b22; margin:0;\r\n        padding: 0;\">Google</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </section>\r\n  <section padding>\r\n    <ion-row padding>\r\n      <ion-col padding size=\"12\"></ion-col>\r\n    </ion-row>\r\n    <ion-row padding>\r\n      <ion-col size=\"3\"> </ion-col>\r\n      <ion-col size=\"3\" (click)=\"gotoForgotPassword()\" style=\"text-align:right\">\r\n        <ion-label  color='primary' >Forgot password?</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" (click)=\"gotoRegister()\" style=\"text-align:left !important;\">\r\n        <ion-label color='primary' >Register\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"3\"> </ion-col>\r\n\r\n    </ion-row>\r\n  </section> -->\r\n\r\n  <!-- <ion-row padding style=\"text-align: center;\">\r\n    <ion-col size=\"12\">\r\n       <ion-label style=\"text-align:left\" (click)=\"showPrivacyNote()\"> <a href=\"\">Privacy Note</a> </ion-label><br><br>\r\n      <ion-label style=\"text-align:right\"> <a href=\"\" (click)=\"showFameWebsite()\">#natlink.xyz </a> <br>All rights\r\n        reserved.</ion-label> \r\n    </ion-col> \r\n  </ion-row>-->\r\n</ion-content>");

/***/ }),

/***/ "./src/app/public/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/public/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  width: 100%;\n  height: auto;\n}\n\n.social {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.text-center p {\n  margin: 0px;\n}\n\np {\n  padding: 0px;\n}\n\nform {\n  margin-top: 4vh !important;\n}\n\n.invalid.item-md.item-block .item-inner {\n  border-bottom: 1px solid red !important;\n}\n\n.item-md.item-block .item-inner {\n  border-bottom: 1px solid red !important;\n}\n\n.invalid.item-ios.item-block .item-inner {\n  border-bottom: 1px solid red !important;\n}\n\n.item-ios.item-block .item-inner {\n  border-bottom: 1px solid red !important;\n}\n\n.invalid-item-md .invalid.item-md.item-block .item-inner {\n  border-bottom: 1px solid red !important;\n}\n\n.invalid-item-md .item-md.item-block .item-inner {\n  border-bottom: 1px solid red !important;\n}\n\n.invalid-item-ios .invalid.item-ios.item-block .item-inner {\n  border-bottom: 1px solid red !important;\n}\n\n.invalid-item-ios .item-ios.item-block .item-inner {\n  border-bottom: 1px solid black !important;\n}\n\n.google-button button {\n  background: #902b22 !important;\n  margin: 0;\n  padding: 0;\n  margin-top: 5px;\n}\n\n.facebook-button button {\n  background: #902b22 !important;\n  margin: 0;\n  padding: 0;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSEY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBVUU7RUFDRSxXQUFBO0FBUEo7O0FBV0E7RUFDRSxZQUFBO0FBUkY7O0FBV0E7RUFDRSwwQkFBQTtBQVJGOztBQWVBO0VBQ0UsdUNBQUE7QUFaRjs7QUFlQTtFQUNFLHVDQUFBO0FBWkY7O0FBZ0JBO0VBQ0UsdUNBQUE7QUFiRjs7QUFnQkE7RUFDRSx1Q0FBQTtBQWJGOztBQWlCRTtFQUNFLHVDQUFBO0FBZEo7O0FBaUJFO0VBQ0UsdUNBQUE7QUFmSjs7QUFxQkU7RUFDRSx1Q0FBQTtBQWxCSjs7QUFxQkU7RUFDRSx5Q0FBQTtBQW5CSjs7QUF3Q0U7RUFDRSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXJDSjs7QUEyQ0U7RUFDRSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXhDSiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cclxuXHJcblxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5zb2NpYWwge1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuXHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwcHhcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogNHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIEFORFJPSURcclxuLmludmFsaWQuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9JT1NcclxuLmludmFsaWQuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW52YWxpZC1pdGVtLW1kIHtcclxuICAuaW52YWxpZC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaW52YWxpZC1pdGVtLWlvcyB7XHJcblxyXG4gIC5pbnZhbGlkLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gaW9uLWl0ZW0ge1xyXG4vLyAgIC0tYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbi8vICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmVkO1xyXG5cclxuLy8gICBpb24taW5wdXQge1xyXG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjMzM2YmQ4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAtLWNvbG9yOiAkbGlnaHQtY29sb3I7XHJcbi8vICAgfVxyXG5cclxuLy8gICBpb24taWNvbiB7XHJcbi8vICAgICAtLWNvbG9yOiAkcHJpbWFyeS1kYXJrO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLmdvb2dsZS1idXR0b24ge1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzkwMmIyMiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG59XHJcbi5mYWNlYm9vay1idXR0b24ge1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzkwMmIyMiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG59XHJcbi5pbnB1dCB7XHJcbiAgXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/public/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/providers/storage/my-storage.service */ "./src/app/shared/services/providers/storage/my-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");
/* harmony import */ var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/providers/widgets/toaster.service */ "./src/app/shared/services/providers/widgets/toaster.service.ts");
/* harmony import */ var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");
/* harmony import */ var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/providers/navigation/browser-history.service */ "./src/app/shared/services/providers/navigation/browser-history.service.ts");










let LoginPage = class LoginPage {
    // _browserOption = 'location=yes,hidden=no,clearcache=yes,clearsessioncache=yes,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=no';
    // _socialToken: any;
    constructor(router, route, userService, fb, store, menu, toaster, util, loadCtrl, 
    // private platform: Platform,
    alertCtrl, 
    // private _browser: InAppBrowser,
    browserHistory) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.fb = fb;
        this.store = store;
        this.menu = menu;
        this.toaster = toaster;
        this.util = util;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.browserHistory = browserHistory;
        this.previousPage = '';
        this._isName = false;
        this._isEmail = false;
        this._isPhone = false;
        this._isPassword = false;
        this.isShow = false;
        // this.fb.logout().then(_ => {
        //   console.log(_);
        // });
        this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
            this.previousPage = previousPage;
        });
        this.store.getObject('user').then(user => {
            this.user = user;
            console.log(this.user);
        });
    }
    ngAfterViewInit() {
        var _a, _b, _c;
        if ((_c = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.params) === null || _c === void 0 ? void 0 : _c.clear) {
            // clear data from store 
            this.userService.logout();
        }
    }
    ngOnInit() {
        // disable the menu
        // this.enablePublicMenu();
        // this._fameIdentity = <FameIdentity>{};
        this.loginForm = this.fb.group({
            email: [
                'fslinn0@xinhuanet.com',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]
            ],
            password: [
                'T775Vp15P',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]
            ],
            remember: [false]
        });
        // this._fstore.set('is_login', false).then(_ => { });
        // try {
        //   this.route.queryParamMap.subscribe(params => {
        //     this._socialToken = { token: params.get('access-token'), userId: params.get('user-id') };
        //     if (this._socialToken) {
        //       this._fstore.setObject('social_token', this._socialToken).then(_ => { });
        //     } else {
        //       this._fstore.remove('social_token').then(_ => { });
        //     }
        //     // alert(this.router.url);
        //     // valid token exist
        //     if (this._socialToken.token) {
        //       // store the token for future access
        //       this._auth.setSocialSDKToken(this._socialToken.token, this._socialToken.userId);
        //     } else {
        //       // this._auth.logout();
        //       // this._fstore.remove('user').then(_ => { });
        //       if (this._loading) {
        //         this._loading.dismiss();
        //       }
        //     }
        //   });
        // } catch (e) {
        //   console.log(e);
        // }
        // Get social user from database if exist
        // this.socialAuthentication();
    }
    ngOnDestroy() {
        src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"].destroySubscription(this.history$);
        try {
            this._loading.dismiss();
        }
        catch (error) {
        }
    }
    // Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"),
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.loginForm.valid) {
                this.toaster.toast('Provide valid credentials');
                return;
            }
            this._loading = yield this.loadCtrl.create({
                message: 'Welcome to YEARBOOK'
            });
            src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"].stopLoading(this._loading);
            yield this._loading.present();
            yield this.userService.login(this.loginForm.value).subscribe(res => {
                if (res) {
                    // fetch user details
                    this.userService.getMyProfile().subscribe(user => {
                        var _a;
                        this.user = user;
                        console.log(this.user);
                        if ((_a = this.user) === null || _a === void 0 ? void 0 : _a.phone) {
                            this.router.navigateByUrl('/links/home');
                        }
                        else {
                            this.router.navigateByUrl('/phone-number');
                        }
                    });
                }
                this._loading.dismiss();
            }, error => {
                console.log(error);
                this.toaster.toast(error.message, 4000);
                this._loading.dismiss();
                // if (error.search('verified') > -1) {
                //   this.alertCtrl.create({
                //     header: `Email is not verified. A verification link is sent to the email provided but it may take up 10min to show up. check spam if not in your In-box Verify your email now?`,
                //     message: '',
                //     buttons: [
                //       {
                //         text: 'No',
                //         role: 'cancel',
                //         cssClass: 'secondary',
                //         handler: (blah) => {
                //           this.toaster.toast('Email is not verified! Check your email for verification link or reset password', 60);
                //         }
                //       }, {
                //         text: 'Yes',
                //         handler: () => {
                //           const temp = this.loginForm.value.email.split('@');
                //           if (temp.length > 1) {
                //             // this.emailBrowser('https://www.' + temp[1]);
                //           }
                //         }
                //       }
                //     ],
                //     translucent: true,
                //   }).then(alert => alert.present());
                // } else {
                //   this.toaster.toast('Check Credentials | Network');
                // }
            });
        });
    }
    // async emailBrowser(url: string) {
    //   this._loading = await this.loadCtrl.create({
    //     message: 'Accessing privacy statement ... '
    //   });
    //   this._loading.present();
    //   const browserRef: InAppBrowserObject = this._browser.create(url,
    //     '_system', this._browserOption);
    //   browserRef.on('loadstop').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    //   browserRef.on('exit').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    // }
    onValidate(value) {
        // console.log(value);
        switch (value) {
            case 'email':
                this._isEmail = true;
                break;
            case 'phone':
                this._isPhone = true;
                break;
            case 'password':
                this._isPassword = true;
                break;
        }
    }
    // async socialAuthentication() {
    //   this._socialToken = await this._fstore.getObject('social_token');
    //   if (this._socialToken && this._socialToken.token) {
    //     this._loading = await this.loadCtrl.create({
    //       message: 'Authenticating ... '
    //     });
    //     await this._loading.present();
    //     this._user.getSocialFameIdentityById(this._socialToken.userId).subscribe((fameIdentity: FameIdentity) => {
    //       if (fameIdentity) {
    //         this._user.getSocialUserIdentityById(this._socialToken.userId)
    //           .subscribe((userIdentity: UserIdentity) => {
    //             console.log(userIdentity);
    //             const user = new FameUser();
    //             user.dateCreated = userIdentity.created;
    //             user.dateModified = userIdentity.modified;
    //             user.name = new Name();
    //             user.name.first = userIdentity.profile.name.familyName;
    //             user.name.last = userIdentity.profile.name.givenName;
    //             // Create client side identity
    //             if (userIdentity.profile && userIdentity.profile._json && userIdentity.profile._json.email) {
    //               fameIdentity.email = userIdentity.profile._json.email;
    //             }
    //             fameIdentity.fameUser = user;
    //             // fameIdentity.fameUser.identity = fameIdentity;
    //             this._fameIdentity = fameIdentity;
    //             // save profile image to disk
    //             if (userIdentity.profile._json.picture) {
    //               this._fstore.set('social_profile_image', userIdentity.profile._json.picture)
    //                 .then(_ => {  // redirect to the correct page
    //                   this.redirectUserToPage();
    //                 });
    //             } else {
    //               this._fstore.set('social_profile_image', 'https://graph.facebook.com/' +
    //                 userIdentity.externalId + '/picture?type=large')
    //                 .then(_ => {  // redirect to the correct page
    //                   this.redirectUserToPage();
    //                 });
    //             }
    //           }, error => {
    //             console.log(error);
    //             this._loading.dismiss();
    //             this._fstore.set('is_login', false).then(_ => { });
    //           });
    //       } else {
    //         this._loading.dismiss();
    //         this._fstore.set('is_login', false).then(_ => { });
    //       }
    //     }, error => {
    //       console.log(error);
    //       this._loading.dismiss();
    //       this._fstore.set('is_login', false).then(_ => { });
    //     });
    //   } else {
    //     await this._fstore.set('is_login', false).then(_ => { });
    //   }
    // }
    // async getFacebookToken() {
    //   this._loading = await this.loadCtrl.create({
    //     message: 'Accessing Facebook ... '
    //   });
    //   this._loading.present();
    //   const browserRef: InAppBrowserObject = this._browser.create(environment.fb_auth_url,
    //     '_self', this._browserOption);
    //   browserRef.on('loadstop').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    //   browserRef.on('exit').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    // }
    // async getGoogleToken() {
    //   this._loading = await this.loadCtrl.create({
    //     message: 'Accessing GooglePlus ... '
    //   });
    //   this._loading.present();
    //   const browserRef: InAppBrowserObject = this._browser.create(environment.google_auth_url,
    //     '_self', this._browserOption);
    //   browserRef.on('loadstop').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    //   browserRef.on('exit').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    // }
    // async showPrivacyNote() {
    //   this._loading.present();
    //   const browserRef: InAppBrowserObject = this._browser.create('https://fame.natlink.xyz#privacy',
    //     '_system', this._browserOption);
    //   browserRef.on('loadstop').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    //   browserRef.on('exit').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    // }
    // async showFameWebsite() {
    //   const browserRef: InAppBrowserObject = this._browser.create('https://fame.natlink.xyz',
    //     '_system', this._browserOption);
    //   browserRef.on('loadstop').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    //   browserRef.on('exit').subscribe(event => {
    //     this._loading.dismiss();
    //   });
    // }
    // async redirectUserToPage() {
    //   this.enableAuthenticatedMenu();
    //   this._auth.isAuthenticated(); // broadcast login successful
    //   this._fstore.set('is_login', true).then(_ => { });
    //   // if social update the current user object
    //   await this._fstore.setObject('user', this._fameIdentity);
    //   // console.log(this._fameIdentity.fameUser);
    //   if (this._fameIdentity.fameUser && this._fameIdentity.fameUser.id) {
    //     // User details exist
    //     // route due to how much information you have
    //     this.router.navigateByUrl('/home');
    //     if (this._loading) {
    //       this._loading.dismiss();
    //     }
    //   } else {
    //     // no details in profile
    //     // this._navCtrl.setDirection('root');
    //     // this._navCtrl.navigateRoot(['/edit-profile']);
    //     this.router.navigateByUrl('/edit-profile');
    //   }
    //   if (this._loading) {
    //     this._loading.dismiss();
    //   }
    // }
    // enableAuthenticatedMenu() {
    //   this._menu.enable(true, 'private');
    //   this._menu.enable(false, 'public');
    //   this._menu.close();
    // }
    // enablePublicMenu() {
    //   this._menu.enable(true, 'public');
    //   this._menu.enable(false, 'private');
    //   this._menu.close();
    // }
    gotoForgotPassword() {
        this.router.navigateByUrl('/forgot-password');
    }
    gotoRegister() {
        this.router.navigateByUrl('/register');
    }
    goBack() {
        this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__["MyStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
    { type: src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_9__["BrowserHistoryService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=public-login-login-module-es2015.js.map