(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-privacy-privacy-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/public/privacy/privacy.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/privacy/privacy.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPublicPrivacyPrivacyHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  privacy works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./src/app/public/privacy/privacy .ts":
    /*!********************************************!*\
      !*** ./src/app/public/privacy/privacy .ts ***!
      \********************************************/

    /*! exports provided: PrivacyPage */

    /***/
    function srcAppPublicPrivacyPrivacyTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPage", function () {
        return PrivacyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PrivacyPage = function PrivacyPage() {
        _classCallCheck(this, PrivacyPage);
      };

      PrivacyPage.ctorParameters = function () {
        return [];
      };

      PrivacyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-privacy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./privacy.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/public/privacy/privacy.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./privacy.scss */
        "./src/app/public/privacy/privacy.scss"))["default"]]
      })], PrivacyPage);
      /***/
    },

    /***/
    "./src/app/public/privacy/privacy.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/public/privacy/privacy.module.ts ***!
      \**************************************************/

    /*! exports provided: PrivacyModule */

    /***/
    function srcAppPublicPrivacyPrivacyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyModule", function () {
        return PrivacyModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _privacy___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./privacy  */
      "./src/app/public/privacy/privacy .ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var routes = [{
        path: '',
        component: _privacy___WEBPACK_IMPORTED_MODULE_4__["PrivacyPage"]
      }];

      var PrivacyModule = function PrivacyModule() {
        _classCallCheck(this, PrivacyModule);
      };

      PrivacyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        declarations: [_privacy___WEBPACK_IMPORTED_MODULE_4__["PrivacyPage"]],
        entryComponents: [_privacy___WEBPACK_IMPORTED_MODULE_4__["PrivacyPage"]]
      })], PrivacyModule);
      /***/
    },

    /***/
    "./src/app/public/privacy/privacy.scss":
    /*!*********************************************!*\
      !*** ./src/app/public/privacy/privacy.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPublicPrivacyPrivacyScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wcml2YWN5L3ByaXZhY3kuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=public-privacy-privacy-module-es5.js.map