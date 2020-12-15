(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schools-schools-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/schools/schools.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/schools/schools.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"top-row-header ion-no-padding \" style=\"box-shadow: 0px 2px 4px -4px;\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n        <ion-row slot=\"end\">\r\n          <ion-note class=\"fs-112 poppins-bold\" color=\"dark\"> Create a Post </ion-note>&nbsp;&nbsp;\r\n        </ion-row>\r\n        <!-- <ion-row class=\"ion-row\" slot=\"start\" (click)=\"goBack()\"  >\r\n          <ion-icon class=\"fs-25\" [src]=\"'../../../assets/icon/round-arrow_back.svg'\" ></ion-icon>&nbsp;&nbsp;\r\n          <ion-note class=\"poppins-medium fs-12\" color=\"black \" style=\"margin-top: 4px;\">{{previousPage}}</ion-note>\r\n        </ion-row> -->\r\n<!-- old pos -->\r\n      </ion-item>\r\n    </ion-col>\r\n    <!-- <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"!isAuthenticated()\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col size=\"6\" class=\"ion-align-items-center ion-text-center ion-activatable ripple-parent\">\r\n         \r\n          <ion-label class=\"popping-medium fs-12 ion-text-center\" [routerLink]=\"['/links/schools']\" routerLinkActive=\"router-link-active\">Your school's feed</ion-label> \r\n          <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-align-items-center ion-text-center ion-activatable ripple-parent\"\r\n          style=\"border-bottom: thick inset var(--ion-color-secondary);\">\r\n          <ion-label class=\"popping-medium fs-12 ion-text-center\"  [routerLink]=\"['/links/schools-search']\">Find school</ion-label>\r\n          <ion-ripple-effect  type=\"unbounded\"></ion-ripple-effect>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col> -->\r\n  </ion-row>\r\n\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\">\r\n  </ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <ion-row class=\"ion-padding-start ion-padding-end ion-activatable ripple-parent\" *ngFor=\"let school of schools\">\r\n    <ion-ripple-effect  type=\"unbounded\"></ion-ripple-effect>\r\n    <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"padding-top: 7px;\r\n      padding-bottom: 7px;border-bottom: thin dotted lightgray;\">\r\n      <ion-thumbnail class=\"ion-no-padding br-10\" slot=\"start\" (click)=\"gotoSchoolProfile()\" >\r\n        <img src=\"{{school.thumbnailUrl}}\">\r\n      </ion-thumbnail>\r\n      <ion-note class=\"poppins-bold fs-12 ion-padding-top ion-padding-bottom\" color=\"dark\"\r\n      [routerLink]=\"['/links/school-profile']\" routerLinkActive=\"router-link-active\" >\r\n        {{school?.name}}<br>\r\n        <ion-label class=\"hind-regular fs-12\">+{{school?.alumniCount || 100 }} alumni</ion-label>\r\n      </ion-note>\r\n      <ion-button (click)=\"join(school)\" slot=\"end\" shape=\"round\" fill=\"outline\" class=\"poppins-bold fs-13\" style=\"--border-width: 2px;\">J<span\r\n          class=\"ion-text-lowercase\">oin</span></ion-button>\r\n      <!-- <ion-icon slot=\"end\" src=\"../../../assets/icon/member.svg\"></ion-icon> -->\r\n    </ion-item>\r\n  </ion-row>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/members/schools/schools.module.ts":
/*!***************************************************!*\
  !*** ./src/app/members/schools/schools.module.ts ***!
  \***************************************************/
/*! exports provided: SchoolsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsPageModule", function() { return SchoolsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../widgets/widgets.module */ "./src/app/widgets/widgets.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _schools_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schools.page */ "./src/app/members/schools/schools.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _schools_page__WEBPACK_IMPORTED_MODULE_6__["SchoolsPage"]
    }
];
let SchoolsPageModule = class SchoolsPageModule {
};
SchoolsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__["WidgetsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        declarations: [_schools_page__WEBPACK_IMPORTED_MODULE_6__["SchoolsPage"]]
    })
], SchoolsPageModule);



/***/ }),

/***/ "./src/app/members/schools/schools.page.scss":
/*!***************************************************!*\
  !*** ./src/app/members/schools/schools.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-content-top_correction {\n  margin-top: 88px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9zY2hvb2xzL3NjaG9vbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvc2Nob29scy9zY2hvb2xzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW9uLWNvbnRlbnQtdG9wX2NvcnJlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogODhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/members/schools/schools.page.ts":
/*!*************************************************!*\
  !*** ./src/app/members/schools/schools.page.ts ***!
  \*************************************************/
/*! exports provided: SchoolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsPage", function() { return SchoolsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/providers/storage/my-storage.service */ "./src/app/shared/services/providers/storage/my-storage.service.ts");
/* harmony import */ var _shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/model-service/alumni.service */ "./src/app/shared/services/model-service/alumni.service.ts");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");
/* harmony import */ var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/providers/navigation/browser-history.service */ "./src/app/shared/services/providers/navigation/browser-history.service.ts");
/* harmony import */ var _widgets_feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../widgets/feed-filter-popover/feed-filter-popover.component */ "./src/app/widgets/feed-filter-popover/feed-filter-popover.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");










let SchoolsPage = class SchoolsPage {
    constructor(filterPopover, browserHistory, router, userService, alumniService, store) {
        this.filterPopover = filterPopover;
        this.browserHistory = browserHistory;
        this.router = router;
        this.userService = userService;
        this.alumniService = alumniService;
        this.store = store;
        this.previousPage = '';
        this.userSchools = [];
        this.selectedSchools = [];
        this.userAlumni = [];
        this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
            this.previousPage = previousPage;
        });
    }
    ngOnInit() {
        this.store.getObject('user-alumni').then(alumni => {
            if (alumni) {
                this.userAlumni = alumni;
                this.userAlumni.forEach(alu => {
                    this.userSchools.push(alu.school);
                });
            }
        });
    }
    ngAfterViewInit() {
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.filterPopover.create({
                component: _widgets_feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_5__["FeedFilterPopoverComponent"],
                cssClass: 'filter-feed',
                event: ev,
                translucent: true,
                showBackdrop: false
            });
            return yield popover.present();
        });
    }
    ngOnDestroy() {
        src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"].destroySubscription(this.history$);
    }
    goBack() {
        this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
    }
    gotoSchoolProfile() {
        if (this.userService.isAuthenticated) {
            this.router.navigateByUrl('/links/schools');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    isAuthenticated() {
        return this.userService.isAuthenticated();
    }
    join(school) {
    }
};
SchoolsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_4__["BrowserHistoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_2__["AlumniService"] },
    { type: src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__["MyStorage"] }
];
SchoolsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-schools',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./schools.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/schools/schools.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./schools.page.scss */ "./src/app/members/schools/schools.page.scss")).default]
    })
], SchoolsPage);



/***/ })

}]);
//# sourceMappingURL=schools-schools-module-es2015.js.map