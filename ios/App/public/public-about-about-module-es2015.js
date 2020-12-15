(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/about/about.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/about/about.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  about works!\r\n</p>\r\n");

/***/ }),

/***/ "./src/app/public/about/about.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/about/about.module.ts ***!
  \**********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/app/public/about/about.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_1__["AboutPage"]
    }
];
let AboutModule = class AboutModule {
};
AboutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_about__WEBPACK_IMPORTED_MODULE_1__["AboutPage"]],
        entryComponents: [_about__WEBPACK_IMPORTED_MODULE_1__["AboutPage"]],
    })
], AboutModule);



/***/ }),

/***/ "./src/app/public/about/about.scss":
/*!*****************************************!*\
  !*** ./src/app/public/about/about.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hYm91dC9hYm91dC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/public/about/about.ts":
/*!***************************************!*\
  !*** ./src/app/public/about/about.ts ***!
  \***************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AboutPage = class AboutPage {
    constructor() { }
};
AboutPage.ctorParameters = () => [];
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/about/about.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.scss */ "./src/app/public/about/about.scss")).default]
    })
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=public-about-about-module-es2015.js.map