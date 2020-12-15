(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-schools-my-schools-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/members/my-schools/my-schools.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/my-schools/my-schools.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMembersMySchoolsMySchoolsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-row class=\"top-row-header ion-no-padding \" style=\"box-shadow: 0px 2px 4px -4px;\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n        <ion-row class=\"ion-row\" (click)=\"goBack()\">\r\n          <ion-icon class=\"fs-25\" [src]=\"'../../../assets/icon/round-arrow_back.svg'\"></ion-icon>&nbsp;&nbsp;\r\n          <!-- <ion-note class=\"poppins-medium fs-12\" color=\"black \" style=\"margin-top: 4px;\">{{previousPage}}</ion-note> -->\r\n        </ion-row>\r\n        <ion-row slot=\"end\">\r\n          <ion-toggle color=\"danger\" (click)=\"toggleEdit()\"></ion-toggle>\r\n          <ion-note class=\"fs-12 poppins-regular\" style=\"margin-top: 10px;\">Edit schools</ion-note>&nbsp;&nbsp;\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\">\r\n  </ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <ion-row class=\"ion-padding-start ion-padding-end \"\r\n    *ngFor=\"let school of userSchools; let i = index\" width=\"100%\">\r\n    <app-school-list-item style=\"width: 100%\"[isEdit]=\"isEdit\" [school]=\"school\" [user]=\"user\" [profilePhotoUrl]=\"getProfilePhotoUrl(schoolsIdentityPhoto[i])\"></app-school-list-item>\r\n  </ion-row>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/members/my-schools/my-schools-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/members/my-schools/my-schools-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MySchoolsPageRoutingModule */

    /***/
    function srcAppMembersMySchoolsMySchoolsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySchoolsPageRoutingModule", function () {
        return MySchoolsPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _my_schools_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-schools.page */
      "./src/app/members/my-schools/my-schools.page.ts");

      var routes = [{
        path: '',
        component: _my_schools_page__WEBPACK_IMPORTED_MODULE_3__["MySchoolsPage"]
      }];

      var MySchoolsPageRoutingModule = function MySchoolsPageRoutingModule() {
        _classCallCheck(this, MySchoolsPageRoutingModule);
      };

      MySchoolsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MySchoolsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/members/my-schools/my-schools.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/members/my-schools/my-schools.module.ts ***!
      \*********************************************************/

    /*! exports provided: MySchoolsPageModule */

    /***/
    function srcAppMembersMySchoolsMySchoolsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySchoolsPageModule", function () {
        return MySchoolsPageModule;
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


      var _my_schools_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-schools-routing.module */
      "./src/app/members/my-schools/my-schools-routing.module.ts");
      /* harmony import */


      var _my_schools_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-schools.page */
      "./src/app/members/my-schools/my-schools.page.ts");
      /* harmony import */


      var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/widgets/widgets.module */
      "./src/app/widgets/widgets.module.ts");

      var MySchoolsPageModule = function MySchoolsPageModule() {
        _classCallCheck(this, MySchoolsPageModule);
      };

      MySchoolsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_schools_routing_module__WEBPACK_IMPORTED_MODULE_5__["MySchoolsPageRoutingModule"], src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsModule"]],
        declarations: [_my_schools_page__WEBPACK_IMPORTED_MODULE_6__["MySchoolsPage"]]
      })], MySchoolsPageModule);
      /***/
    },

    /***/
    "./src/app/members/my-schools/my-schools.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/members/my-schools/my-schools.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMembersMySchoolsMySchoolsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbXktc2Nob29scy9teS1zY2hvb2xzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/members/my-schools/my-schools.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/members/my-schools/my-schools.page.ts ***!
      \*******************************************************/

    /*! exports provided: MySchoolsPage */

    /***/
    function srcAppMembersMySchoolsMySchoolsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySchoolsPage", function () {
        return MySchoolsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/services/model-service/school.service */
      "./src/app/shared/services/model-service/school.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/providers/navigation/browser-history.service */
      "./src/app/shared/services/providers/navigation/browser-history.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");

      var MySchoolsPage = /*#__PURE__*/function () {
        function MySchoolsPage(browserHistory, router, userService, schoolService, signals) {
          var _this = this;

          _classCallCheck(this, MySchoolsPage);

          this.browserHistory = browserHistory;
          this.router = router;
          this.userService = userService;
          this.schoolService = schoolService;
          this.signals = signals;
          this.isEdit = false;
          this.previousPage = '';
          this.alumni = [];
          this.userSchools = [];
          this.schoolsIdentityPhoto = [];
          this.sub$ = [];
          this.sub$.push(this.browserHistory.previousPageSource$.subscribe(function (previousPage) {
            _this.previousPage = previousPage;
          }));
        }

        _createClass(MySchoolsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.sub$.push(this.signals.reloadUserSchoolsSource$.subscribe(function (_) {
              _this2.loadSchools();
            }));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            this.userService.getUserLocal().then(function (user) {
              _this3.user = user;

              _this3.loadSchools();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"].destroySubscription(this.sub$);
          }
        }, {
          key: "loadSchools",
          value: function loadSchools() {
            var _this4 = this;

            var _a;

            if (this.user) {
              this.sub$.push(this.schoolService.getUserSchools((_a = this.user) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (schools) {
                _this4.userSchools = schools;
                _this4.schoolsIdentityPhoto = src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_7__["UtilityService"].getIdentityPhotos(schools);
              }));
            }
          }
        }, {
          key: "toggleEdit",
          value: function toggleEdit() {
            this.isEdit = !this.isEdit;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
          }
        }, {
          key: "getProfilePhotoUrl",
          value: function getProfilePhotoUrl(identityPhoto) {
            return _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"].getSchoolProfilePhotoUrl(identityPhoto);
          }
        }]);

        return MySchoolsPage;
      }();

      MySchoolsPage.ctorParameters = function () {
        return [{
          type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_5__["BrowserHistoryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"]
        }];
      };

      MySchoolsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-my-schools',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-schools.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/members/my-schools/my-schools.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-schools.page.scss */
        "./src/app/members/my-schools/my-schools.page.scss"))["default"]]
      })], MySchoolsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-schools-my-schools-module-es5.js.map