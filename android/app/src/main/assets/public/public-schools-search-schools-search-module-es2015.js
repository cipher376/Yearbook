(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-schools-search-schools-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-search/schools-search.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-search/schools-search.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"top-row-header ion-no-padding\" style=\"box-shadow: 0px 2px 4px -4px;\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n        <ion-row slot=\"end\">\r\n          <ion-note class=\"fs-112 poppins-bold\" color=\"dark\"> Search &amp; Explore </ion-note>&nbsp;&nbsp;\r\n        </ion-row>\r\n        <!-- <ion-row class=\"ion-row\" (click)=\"goBack()\">\r\n          <ion-icon class=\"fs-25\" [src]=\"'../../../assets/icon/round-arrow_back.svg'\"></ion-icon>&nbsp;&nbsp;\r\n          <ion-note class=\"poppins-medium fs-12\" color=\"black \" style=\"margin-top: 4px;\">{{previousPage}}</ion-note>\r\n        </ion-row> -->\r\n        <ion-row slot=\"start\" (click)=\"presentPopover()\">\r\n          <ion-note class=\"fs-12 poppins-regular\" *ngIf=\"selectedSchools?.length>0\">@{{selectedSchools[0]?.name}}\r\n          </ion-note> &nbsp;&nbsp;\r\n          <ion-icon color=\"dark\" class=\"fs-14\" name=\"filter-outline\"></ion-icon> &nbsp;\r\n          <ion-note class=\"fs-12 poppins-regular\" *ngIf=\"selectedSchools?.length===0\"> Filter </ion-note>&nbsp;&nbsp;\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col>\r\n      <ion-searchbar animated showCancelButton=\"focus\" debounce=\"500\"\r\n        autocomplete=\"'on'|'name'|'country-name'|'email'|'organization'|'address-line1'|'address-line2'|'street-address'|'sex'|'tel-country-code'|'url'|'tel'\"\r\n        placeholder=\"Search schools\" (ionChange)=\"search()\" type=\"'search'|'email'|'tel'|'text'|'url'\"\r\n        inputmode=\"'text'|'tel'|'email'|'url'|'search'\" [(ngModel)]=\"searchKey\"></ion-searchbar>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\"></ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <!-- Main body content -->\r\n  <ion-row class=\"ion-padding-start ion-padding-end ion-activatable ripple-parent mt-5\">\r\n    <!-- <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n    <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"padding-top: 7px;\r\n      padding-bottom: 7px;border-bottom: thin dotted lightgray;\" [routerLink]=\"['/links/schools-search']\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <ion-note class=\"poppins-bold fs-12 ion-padding-top ion-padding-bottom\" color=\"dark\">\r\n        Become alumni<br>\r\n        <ion-label class=\"hind-regular fs-12\">+1000 has sign up</ion-label>\r\n      </ion-note>\r\n      <ion-button slot=\"end\" shape=\"round\" fill=\"outline\" class=\"poppins-bold fs-13\" style=\"--border-width: 2px;\">\r\n        Join a year group\r\n      </ion-button>\r\n      <ion-icon slot=\"end\" src=\"../../../assets/icon/member.svg\"></ion-icon>\r\n    </ion-item> -->\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngFor=\"let school of schools; let i=index;\">\r\n      <ion-row class=\"ion-padding-start ion-padding-end ion-activatable ripple-parent\">\r\n        <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n        <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"padding-top: 7px;\r\n          padding-bottom: 7px;border-bottom: thin dotted lightgray;\" (click)=\"gotoSchoolProfile(school)\"> \r\n          <ion-thumbnail class=\"ion-no-padding br-10\" slot=\"start\" \r\n            routerLinkActive=\"router-link-active\">\r\n            <img src=\"{{getProfilePhotoUrl(schoolsIdentityPhoto[i])}}\">\r\n          </ion-thumbnail>\r\n          <ion-note class=\"poppins-bold fs-12 ion-padding-top ion-padding-bottom\" color=\"dark\"\r\n           >{{school?.name}} <br>\r\n            <ion-label class=\"hind-regular fs-12\">{{school?.address?.city}} {{school?.address?.country}} </ion-label>\r\n          </ion-note>\r\n        </ion-item>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- Main body content ends -->\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreEvents($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading schools...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/public/schools-search/schools-search.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/public/schools-search/schools-search.module.ts ***!
  \****************************************************************/
/*! exports provided: SchoolsSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsSearchPageModule", function() { return SchoolsSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _schools_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schools-search.page */ "./src/app/public/schools-search/schools-search.page.ts");
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/widgets/widgets.module */ "./src/app/widgets/widgets.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _schools_search_page__WEBPACK_IMPORTED_MODULE_5__["SchoolsSearchPage"]
    }
];
let SchoolsSearchPageModule = class SchoolsSearchPageModule {
};
SchoolsSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"]
        ],
        declarations: [_schools_search_page__WEBPACK_IMPORTED_MODULE_5__["SchoolsSearchPage"]]
    })
], SchoolsSearchPageModule);



/***/ }),

/***/ "./src/app/public/schools-search/schools-search.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/public/schools-search/schools-search.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-content-top_correction {\n  margin-top: 88px !important;\n}\n\nion-activated {\n  background: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3NjaG9vbHMtc2VhcmNoL3NjaG9vbHMtc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL3NjaG9vbHMtc2VhcmNoL3NjaG9vbHMtc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tY29udGVudC10b3BfY29ycmVjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA4OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWFjdGl2YXRlZHtcclxuICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/public/schools-search/schools-search.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/public/schools-search/schools-search.page.ts ***!
  \**************************************************************/
/*! exports provided: SchoolsSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsSearchPage", function() { return SchoolsSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/model-service/school.service */ "./src/app/shared/services/model-service/school.service.ts");
/* harmony import */ var _shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/model-service/alumni.service */ "./src/app/shared/services/model-service/alumni.service.ts");
/* harmony import */ var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/providers/navigation/browser-history.service */ "./src/app/shared/services/providers/navigation/browser-history.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");
/* harmony import */ var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/my-signals */ "./src/app/shared/services/my-signals.ts");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");
/* harmony import */ var src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/providers/storage/my-storage.service */ "./src/app/shared/services/providers/storage/my-storage.service.ts");
/* harmony import */ var src_app_widgets_feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/widgets/feed-filter-popover/feed-filter-popover.component */ "./src/app/widgets/feed-filter-popover/feed-filter-popover.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/providers/widgets/toaster.service */ "./src/app/shared/services/providers/widgets/toaster.service.ts");













let SchoolsSearchPage = class SchoolsSearchPage {
    constructor(browserHistory, router, filterPopover, alumniService, schoolService, userService, signal, store, loadingController, toast) {
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
        this.previousPage = '';
        this.selectedSchools = [];
        // userSchools: School[] = [];
        this.schools = [];
        this.schoolsIdentityPhoto = [];
        this.userAlumni = [];
        this.sub$ = [];
        this.searchOffset = 0; // Begin search at zero index;
        this.searchLimit = 10; // pull 20 schools at a time
        this.searchKey = '';
        this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
            this.previousPage = previousPage;
        }));
    }
    ngOnInit() {
        // this.store.getObject<Alumni[]>('user-alumni').then(alumni => {
        //   if (alumni) {
        //     this.userAlumni = alumni;
        //     this.userAlumni.forEach(alu => {
        //       this.userSchools.push(alu.school);
        //     });
        //   }
        // });
    }
    ngAfterViewInit() {
        this.search(false);
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.filterPopover.create({
                component: src_app_widgets_feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_10__["FeedFilterPopoverComponent"],
                cssClass: 'filter-feed',
                event: ev,
                translucent: true,
                showBackdrop: false
            });
            return yield popover.present();
        });
    }
    ngOnDestroy() {
        src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].destroySubscription(this.sub$);
    }
    goBack() {
        this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
    }
    gotoSchoolProfile(school) {
        this.schoolService.setSchoolLocal(school).then(_ => this.router.navigateByUrl('/links/school-profile'));
    }
    isAuthenticated() {
        return this.userService.isAuthenticated();
    }
    // async join(school: School) {
    //   if (await this.schoolService.setSchoolLocal(school)) {
    //     // navigate to join school page
    //     this.router.navigateByUrl('/links/schools-join');
    //   }
    //   // console.log(school.name);
    // }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    // if search term change, it means key
    // trigger is true
    search(keyTrigger = true) {
        // if ( this.schools.length === 0 ) {
        //   this.presentLoading().then((res: any) => {
        //     this.schools.length === 0 ? res.dismiss() : this.toast.toast('Sorry, something went wrong!')
        //   });
        // }
        console.log('searching');
        // refresh search
        if (keyTrigger) {
            this.searchOffset = 0;
        }
        const pageInfo = {
            offset: this.searchOffset,
            limit: this.searchLimit
        };
        this.schoolService.searchSchool(this.searchKey, pageInfo).subscribe(schools => {
            var _a;
            if (keyTrigger) {
                console.log(schools);
                this.schools = schools;
                this.schoolsIdentityPhoto = src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].getIdentityPhotos(schools);
            }
            else {
                this.schools = this.schools.concat(schools);
                this.searchOffset = this.schools.length;
                (_a = this.infiniteScrollTarget) === null || _a === void 0 ? void 0 : _a.complete();
            }
        });
        // this.schoolService.getSchools(pageInfo).subscribe(schools => {
        //   this.schools = this.schools.concat(schools);
        //   this.searchOffset = this.schools.length;
        //   console.log(this.schools.length);
        // });
    }
    loadMoreEvents(event) {
        this.infiniteScrollTarget = event.target;
        this.search(false);
    }
    getProfilePhotoUrl(identityPhoto) {
        return _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_1__["SchoolService"].getSchoolProfilePhotoUrl(identityPhoto);
    }
};
SchoolsSearchPage.ctorParameters = () => [
    { type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_3__["BrowserHistoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["PopoverController"] },
    { type: _shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_2__["AlumniService"] },
    { type: _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_1__["SchoolService"] },
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_7__["MySignals"] },
    { type: src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_9__["MyStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["LoadingController"] },
    { type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_12__["ToasterService"] }
];
SchoolsSearchPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonInfiniteScroll"],] }]
};
SchoolsSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-schools-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./schools-search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-search/schools-search.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./schools-search.page.scss */ "./src/app/public/schools-search/schools-search.page.scss")).default]
    })
], SchoolsSearchPage);



/***/ })

}]);
//# sourceMappingURL=public-schools-search-schools-search-module-es2015.js.map