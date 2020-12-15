(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-schools-location-schools-location-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-location/schools-location.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-location/schools-location.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPublicSchoolsLocationSchoolsLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-row class=\"top-row-header ion-no-padding\" style=\"box-shadow: 0px 2px 4px -4px;\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n        <ion-row slot=\"end\">\r\n          <ion-note class=\"fs-112 poppins-bold\" color=\"dark\"> Don't get lost </ion-note>&nbsp;&nbsp;\r\n        </ion-row>\r\n        <!-- <ion-row class=\"ion-row\" (click)=\"goBack()\">\r\n          <ion-icon class=\"fs-25\" [src]=\"'../../../assets/icon/round-arrow_back.svg'\"></ion-icon>&nbsp;&nbsp;\r\n          <ion-note class=\"poppins-medium fs-12\" color=\"black \" style=\"margin-top: 4px;\">{{previousPage}}</ion-note>\r\n        </ion-row> -->\r\n        <!-- <ion-row slot=\"start\" (click)=\"presentPopover()\">\r\n          <ion-note class=\"fs-12 poppins-regular\" *ngIf=\"selectedSchools?.length>0\">@{{selectedSchools[0]?.name}}\r\n          </ion-note> &nbsp;&nbsp;\r\n          <ion-icon color=\"dark\" class=\"fs-14\" name=\"search-outline\"></ion-icon> &nbsp;\r\n          <ion-note class=\"fs-12 poppins-regular\" *ngIf=\"selectedSchools?.length===0\"> Filter </ion-note>&nbsp;&nbsp;\r\n        </ion-row> -->\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\"></ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <!-- Main body content --> \r\n  <app-map></app-map>\r\n  <!-- Main body content ends -->\r\n \r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/public/schools-location/schools-location.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/public/schools-location/schools-location.module.ts ***!
      \********************************************************************/

    /*! exports provided: SchoolsLocationPageModule */

    /***/
    function srcAppPublicSchoolsLocationSchoolsLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolsLocationPageModule", function () {
        return SchoolsLocationPageModule;
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


      var _schools_location_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./schools-location.page */
      "./src/app/public/schools-location/schools-location.page.ts");
      /* harmony import */


      var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/widgets/widgets.module */
      "./src/app/widgets/widgets.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _schools_location_page__WEBPACK_IMPORTED_MODULE_5__["SchoolsLocationPage"]
      }];

      var SchoolsLocationPageModule = function SchoolsLocationPageModule() {
        _classCallCheck(this, SchoolsLocationPageModule);
      };

      SchoolsLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes), src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"]],
        declarations: [_schools_location_page__WEBPACK_IMPORTED_MODULE_5__["SchoolsLocationPage"]]
      })], SchoolsLocationPageModule);
      /***/
    },

    /***/
    "./src/app/public/schools-location/schools-location.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/public/schools-location/schools-location.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPublicSchoolsLocationSchoolsLocationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-activated {\n  background: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3NjaG9vbHMtbG9jYXRpb24vc2Nob29scy1sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL3NjaG9vbHMtbG9jYXRpb24vc2Nob29scy1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNvbnRlbnQtdG9wX2NvcnJlY3Rpb24ge1xyXG4gICAgLy8gbWFyZ2luLXRvcDogODhweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1hY3RpdmF0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/public/schools-location/schools-location.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/public/schools-location/schools-location.page.ts ***!
      \******************************************************************/

    /*! exports provided: SchoolsLocationPage */

    /***/
    function srcAppPublicSchoolsLocationSchoolsLocationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolsLocationPage", function () {
        return SchoolsLocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/model-service/school.service */
      "./src/app/shared/services/model-service/school.service.ts");
      /* harmony import */


      var _shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/model-service/alumni.service */
      "./src/app/shared/services/model-service/alumni.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/providers/navigation/browser-history.service */
      "./src/app/shared/services/providers/navigation/browser-history.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/providers/widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");

      var SchoolsLocationPage = /*#__PURE__*/function () {
        function SchoolsLocationPage(browserHistory, router, filterPopover, alumniService, schoolService, userService, signal, store, loadingController, toast) {
          _classCallCheck(this, SchoolsLocationPage);

          this.browserHistory = browserHistory;
          this.router = router;
          this.filterPopover = filterPopover;
          this.alumniService = alumniService;
          this.schoolService = schoolService;
          this.userService = userService;
          this.signal = signal;
          this.store = store;
          this.loadingController = loadingController;
          this.toast = toast;
        }

        _createClass(SchoolsLocationPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return SchoolsLocationPage;
      }();

      SchoolsLocationPage.ctorParameters = function () {
        return [{
          type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_3__["BrowserHistoryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"]
        }, {
          type: _shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_2__["AlumniService"]
        }, {
          type: _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_1__["SchoolService"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_6__["MySignals"]
        }, {
          type: src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_8__["MyStorage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
        }, {
          type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"]
        }];
      };

      SchoolsLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-schools-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./schools-location.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-location/schools-location.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./schools-location.page.scss */
        "./src/app/public/schools-location/schools-location.page.scss"))["default"]]
      })], SchoolsLocationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=public-schools-location-schools-location-module-es5.js.map