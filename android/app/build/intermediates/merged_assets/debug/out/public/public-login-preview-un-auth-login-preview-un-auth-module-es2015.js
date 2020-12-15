(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-preview-un-auth-login-preview-un-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login-preview-un-auth/login-preview-un-auth.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login-preview-un-auth/login-preview-un-auth.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>loginPreviewUnAuth</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content padding>\r\n  <ion-grid style=\"margin-top: 10vh;\">\r\n    <ion-row size=\"12\"></ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row  class=\"ion-text-center\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-note color=\"secondary\" class=\"poppins-extra-bold fs-37\">\r\n          alma-mata\r\n        </ion-note>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-text-center ion-no-margin ion-no-padding\">\r\n      <ion-col size=\"12\" class=\"ion-no-margin ion-no-padding\">\r\n        <ion-note class=\"fs-12\">Don't forget the good old days</ion-note>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row></ion-row>\r\n  </ion-grid>\r\n  <ion-grid style=\"margin-top: 40vh;\">\r\n    <ion-row>\r\n     <ion-col size=\"2\"></ion-col> \r\n     <ion-col size=\"8\">\r\n       <ion-button shape=\"round\" expand=\"block\" color=\"white\" class=\"fc-primary fs-16 poppins-bold\" (click)=\"register()\">S<span class=\"ion-text-lowercase\">ign up</span></ion-button>\r\n     </ion-col>\r\n     <ion-col size=\"2\"></ion-col> \r\n     \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"2\"></ion-col> \r\n      <ion-col size=\"8\">\r\n        <ion-button shape=\"round\" expand=\"block\" class=\"fs-16 poppins-bold\" (click)=\"login()\">L<span class=\"ion-text-lowercase\">og in</span></ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col> \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/public/login-preview-un-auth/login-preview-un-auth.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/public/login-preview-un-auth/login-preview-un-auth.module.ts ***!
  \******************************************************************************/
/*! exports provided: LoginPreviewUnAuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPreviewUnAuthPageModule", function() { return LoginPreviewUnAuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_preview_un_auth_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-preview-un-auth.page */ "./src/app/public/login-preview-un-auth/login-preview-un-auth.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [
    {
        path: '',
        component: _login_preview_un_auth_page__WEBPACK_IMPORTED_MODULE_5__["LoginPreviewUnAuthPage"]
    }
];
let LoginPreviewUnAuthPageModule = class LoginPreviewUnAuthPageModule {
};
LoginPreviewUnAuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_preview_un_auth_page__WEBPACK_IMPORTED_MODULE_5__["LoginPreviewUnAuthPage"]]
    })
], LoginPreviewUnAuthPageModule);



/***/ }),

/***/ "./src/app/public/login-preview-un-auth/login-preview-un-auth.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/public/login-preview-un-auth/login-preview-un-auth.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi1wcmV2aWV3LXVuLWF1dGgvbG9naW4tcHJldmlldy11bi1hdXRoLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/public/login-preview-un-auth/login-preview-un-auth.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/public/login-preview-un-auth/login-preview-un-auth.page.ts ***!
  \****************************************************************************/
/*! exports provided: LoginPreviewUnAuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPreviewUnAuthPage", function() { return LoginPreviewUnAuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let LoginPreviewUnAuthPage = class LoginPreviewUnAuthPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigateByUrl('/login');
    }
    register() {
        this.router.navigateByUrl('/register');
    }
};
LoginPreviewUnAuthPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginPreviewUnAuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-preview-un-auth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-preview-un-auth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login-preview-un-auth/login-preview-un-auth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-preview-un-auth.page.scss */ "./src/app/public/login-preview-un-auth/login-preview-un-auth.page.scss")).default]
    })
], LoginPreviewUnAuthPage);



/***/ })

}]);
//# sourceMappingURL=public-login-preview-un-auth-login-preview-un-auth-module-es2015.js.map