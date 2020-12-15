(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-preview-auth-login-preview-auth-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login-preview-auth/login-preview-auth.page.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login-preview-auth/login-preview-auth.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPublicLoginPreviewAuthLoginPreviewAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-grid class=\"ion-align-items-center\">\r\n    <ion-row style=\"margin-top: 10vh;\">\r\n      <ion-col size=\"12\" class=\"ion-text-center ion-align-items-center\">\r\n        <ion-note color=\"dark\" class=\"ion-text-center poppins-bold fs-20\">alma-mata&nbsp;\r\n          <ion-icon color=\"primary\" class=\"ion-text-center poppins-extra-bold name-tag-icon \" [src]=\"'../../../assets/icon/circle-button-thick-outline.svg'\">\r\n          </ion-icon>\r\n        </ion-note>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"margin-top: 30vh;\" class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-note color=\"dark\" class=\"ion-text-center poppins-bold fs-12\">Welcome back</ion-note>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-text-center ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <!-- <ion-avatar  class=\"ion-text-center\">\r\n          <ion-img  class=\"ion-text-center\" [src]=\"'../../../assets/images/me.jpg'\"></ion-img>\r\n        </ion-avatar> -->\r\n        <br>\r\n        <img class=\"round-avatar\" src='../../../assets/images/me.jpg'>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-text-center ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-note color=\"dark\" class=\"ion-text-center poppins-bold fs-12\">Alfred</ion-note>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-text-center ion-align-items-center\">\r\n      <ion-col size=\"12\">\r\n        <br>\r\n        <ion-icon class=\"fs-25\" name=\"finger-print-outline\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-text-center ion-align-items-center\" style=\"margin-top: 1vh;\">\r\n      <ion-col size=\"12\">\r\n        <ion-label (click)=\"login()\" class=\"ion-text-center poppins-regular fs-12\">Not you?</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/public/login-preview-auth/login-preview-auth.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/public/login-preview-auth/login-preview-auth.module.ts ***!
      \************************************************************************/

    /*! exports provided: LoginPreviewAuthPageModule */

    /***/
    function srcAppPublicLoginPreviewAuthLoginPreviewAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPreviewAuthPageModule", function () {
        return LoginPreviewAuthPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_preview_auth_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-preview-auth.page */
      "./src/app/public/login-preview-auth/login-preview-auth.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _login_preview_auth_page__WEBPACK_IMPORTED_MODULE_5__["LoginPreviewAuthPage"]
      }];

      var LoginPreviewAuthPageModule = function LoginPreviewAuthPageModule() {
        _classCallCheck(this, LoginPreviewAuthPageModule);
      };

      LoginPreviewAuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_login_preview_auth_page__WEBPACK_IMPORTED_MODULE_5__["LoginPreviewAuthPage"]]
      })], LoginPreviewAuthPageModule);
      /***/
    },

    /***/
    "./src/app/public/login-preview-auth/login-preview-auth.page.scss":
    /*!************************************************************************!*\
      !*** ./src/app/public/login-preview-auth/login-preview-auth.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPublicLoginPreviewAuthLoginPreviewAuthPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi1wcmV2aWV3LWF1dGgvbG9naW4tcHJldmlldy1hdXRoLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/public/login-preview-auth/login-preview-auth.page.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/public/login-preview-auth/login-preview-auth.page.ts ***!
      \**********************************************************************/

    /*! exports provided: LoginPreviewAuthPage */

    /***/
    function srcAppPublicLoginPreviewAuthLoginPreviewAuthPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPreviewAuthPage", function () {
        return LoginPreviewAuthPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoginPreviewAuthPage = /*#__PURE__*/function () {
        function LoginPreviewAuthPage(router) {
          _classCallCheck(this, LoginPreviewAuthPage);

          this.router = router;
        }

        _createClass(LoginPreviewAuthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            // call logout first;
            // TODO: call logout;
            this.router.navigateByUrl('/login');
          }
        }]);

        return LoginPreviewAuthPage;
      }();

      LoginPreviewAuthPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      LoginPreviewAuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login-preview-auth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login-preview-auth.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login-preview-auth/login-preview-auth.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login-preview-auth.page.scss */
        "./src/app/public/login-preview-auth/login-preview-auth.page.scss"))["default"]]
      })], LoginPreviewAuthPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=public-login-preview-auth-login-preview-auth-module-es5.js.map