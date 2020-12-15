(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/settings/settings.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/settings/settings.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"top-row-header ion-no-padding \" style=\"box-shadow: 0px 2px 4px -4px;\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n        <!-- <ion-row class=\"ion-row\" (click)=\"goBack()\" >\r\n          <ion-icon class=\"fs-25\" [src]=\"'../../../assets/icon/round-arrow_back.svg'\"></ion-icon>&nbsp;&nbsp;\r\n          <ion-note class=\"poppins-medium fs-12\" color=\"black \" style=\"margin-top: 4px;\">{{previousPage}}</ion-note>\r\n        </ion-row> -->\r\n        <ion-row slot=\"end\">\r\n          <ion-note class=\"fs-112 poppins-bold\" color=\"dark\"> Settings</ion-note>&nbsp;&nbsp;\r\n          <!-- <ion-icon color=\"dark\" class=\"fs-14\" name=\"cog-outline\"></ion-icon>  -->\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\">\r\n  </ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <ion-row class=\"feed-filter-container fs-13\">\r\n    <ion-col size=\"12\">\r\n      <ion-card>\r\n        <ion-item-group>\r\n          <ion-item lines=\"none\">\r\n            <ion-label class=\"fs-13\">Allow feeds from my schools only?</ion-label>\r\n            <ion-toggle [(ngModel)]=\"mySchoolOnlyFeed\"></ion-toggle>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\">\r\n            <ion-label class=\"fs-13\">Flag announcements?</ion-label>\r\n            <ion-toggle [(ngModel)]=\"flagAnnouncements\"></ion-toggle>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\">\r\n            <ion-label class=\"fs-13\">Search my country only?</ion-label>\r\n            <ion-toggle [(ngModel)]=\"countryOnly\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-item-group>\r\n      </ion-card>\r\n\r\n\r\n      <ion-col size=\"12\"></ion-col>\r\n      <ion-card>\r\n        <ion-item-group>\r\n          <ion-item lines=\"none\" class=\"ion-activatable ripple-parent\" [routerLink]=\"['/terms-of-service']\" routerLinkActive=\"router-link-active\" >\r\n            <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n            <ion-label slot=\"start\" class=\"fs-13\">Terms of service</ion-label>\r\n            <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"ion-activatable ripple-parent\" [routerLink]=\"['/privacy']\" routerLinkActive=\"router-link-active\">\r\n            <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n            <ion-label slot=\"start\" class=\"fs-13\">Privacy policy</ion-label>\r\n            <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"ion-activatable ripple-parent\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">\r\n            <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n            <ion-label slot=\"start\" class=\"fs-13\">About</ion-label>\r\n            <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"ion-activatable ripple-parent\" *ngIf=\"isAuthenticated()\" (click)=\"logout()\" >\r\n            <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n            <ion-label slot=\"start\" class=\"fs-13\">Log Out</ion-label>\r\n            <ion-icon slot=\"end\" name=\"log-out-outline\"></ion-icon>\r\n          </ion-item>\r\n        </ion-item-group>\r\n      </ion-card>\r\n\r\n      <!-- <ion-col size=\"12\"></ion-col>\r\n      <ion-card>\r\n        <ion-item-group>\r\n          <ion-item lines=\"none\" class=\"ion-activatable ripple-parent\">\r\n            <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n            <ion-label slot=\"start\" class=\"fs-13 poppins-bold ion-text-wrap\" color=\"danger\"> Deactivate my account </ion-label>\r\n            <ion-icon slot=\"end\" name=\"close\" color=\"danger\"></ion-icon>          \r\n          </ion-item>\r\n        </ion-item-group>\r\n      </ion-card> -->\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/members/settings/settings-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/members/settings/settings-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/members/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/members/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/members/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/members/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/members/settings/settings.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/settings/settings.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/members/settings/settings.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/settings/settings.page.ts ***!
  \***************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/providers/navigation/browser-history.service */ "./src/app/shared/services/providers/navigation/browser-history.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");






let SettingsPage = class SettingsPage {
    constructor(browserHistory, router, userService) {
        this.browserHistory = browserHistory;
        this.router = router;
        this.userService = userService;
        this.previousPage = '';
        this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
            this.previousPage = previousPage;
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        _shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].destroySubscription(this.history$);
    }
    goBack() {
        this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
    }
    logout() {
        this.userService.logout();
        setTimeout(() => {
            this.router.navigateByUrl('/login');
        }, 500);
    }
    isAuthenticated() {
        return this.userService.isAuthenticated();
    }
};
SettingsPage.ctorParameters = () => [
    { type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_3__["BrowserHistoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/members/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map