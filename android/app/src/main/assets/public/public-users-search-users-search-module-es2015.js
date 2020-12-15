(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-users-search-users-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/users-search/users-search.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/users-search/users-search.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"top-row-header ion-no-padding\" style=\"box-shadow: 0px 2px 4px -4px;\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n        <ion-row slot=\"end\">\r\n          <ion-note class=\"fs-112 poppins-bold\" color=\"dark\"> Search &amp; Explore </ion-note>&nbsp;&nbsp;\r\n        </ion-row>\r\n        <ion-row slot=\"start\" (click)=\"presentPopover()\">\r\n          <ion-note class=\"fs-12 poppins-regular\" *ngIf=\"selectedUsers?.length>0\">\r\n             @{{ selectedUsers[0]?.firstName }} {{ selectedUsers[0]?.otherName}} {{ selectedUsers[0]?.lastName }}\r\n          </ion-note> &nbsp;&nbsp;\r\n          <ion-icon color=\"dark\" class=\"fs-14\" name=\"filter-outline\"></ion-icon> &nbsp;\r\n          <ion-note class=\"fs-12 poppins-regular\" *ngIf=\"selectedUsers?.length===0\"> Filter </ion-note>&nbsp;&nbsp;\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col>\r\n      <ion-searchbar animated showCancelButton=\"focus\" debounce=\"500\"\r\n        autocomplete=\"'on'|'name'|'country-name'|'email'|'organization'|'address-line1'|'address-line2'|'street-address'|'sex'|'tel-country-code'|'url'|'tel'\"\r\n        placeholder=\"Search users\" (ionChange)=\"search()\" type=\"'search'|'email'|'tel'|'text'|'url'\"\r\n        inputmode=\"'text'|'tel'|'email'|'url'|'search'\" [(ngModel)]=\"searchKey\"></ion-searchbar>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\"></ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <!-- Main body content -->\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\" *ngFor=\"let user of users; let i=index;\">\r\n      <app-user-list-item [user]=\"user\" [profilePhotoUrl]=\"getProfilePhotoUrl(usersIdentityPhoto[i])\"></app-user-list-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- Main body content ends -->\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreEvents($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading users...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/public/users-search/users-search.module.ts":
/*!************************************************************!*\
  !*** ./src/app/public/users-search/users-search.module.ts ***!
  \************************************************************/
/*! exports provided: UsersSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersSearchPageModule", function() { return UsersSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/widgets/widgets.module */ "./src/app/widgets/widgets.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _users_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-search.page */ "./src/app/public/users-search/users-search.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _users_search_page__WEBPACK_IMPORTED_MODULE_6__["UsersSearchPage"]
    }
];
let UsersSearchPageModule = class UsersSearchPageModule {
};
UsersSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__["WidgetsModule"]
        ],
        declarations: [_users_search_page__WEBPACK_IMPORTED_MODULE_6__["UsersSearchPage"]]
    })
], UsersSearchPageModule);



/***/ }),

/***/ "./src/app/public/users-search/users-search.page.scss":
/*!************************************************************!*\
  !*** ./src/app/public/users-search/users-search.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-content-top_correction {\n  margin-top: 110px !important;\n}\n\nion-activated {\n  background: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3VzZXJzLXNlYXJjaC91c2Vycy1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvdXNlcnMtc2VhcmNoL3VzZXJzLXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNvbnRlbnQtdG9wX2NvcnJlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTEwcHggIWltcG9ydGFudDtcclxufVxyXG5pb24tYWN0aXZhdGVke1xyXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/public/users-search/users-search.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/public/users-search/users-search.page.ts ***!
  \**********************************************************/
/*! exports provided: UsersSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersSearchPage", function() { return UsersSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");
/* harmony import */ var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/providers/navigation/browser-history.service */ "./src/app/shared/services/providers/navigation/browser-history.service.ts");
/* harmony import */ var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");
/* harmony import */ var src_app_widgets_feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/widgets/feed-filter-popover/feed-filter-popover.component */ "./src/app/widgets/feed-filter-popover/feed-filter-popover.component.ts");








let UsersSearchPage = class UsersSearchPage {
    constructor(browserHistory, router, filterPopover, userService, loadingController) {
        this.browserHistory = browserHistory;
        this.router = router;
        this.filterPopover = filterPopover;
        this.userService = userService;
        this.loadingController = loadingController;
        this.previousPage = '';
        this.selectedUsers = [];
        this.users = [];
        this.usersIdentityPhoto = [];
        this.userAlumni = [];
        this.sub$ = [];
        this.searchOffset = 0; // Begin search at zero index;
        this.searchLimit = 10; // pull 20 users at a time
        this.searchKey = '';
        this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
            this.previousPage = previousPage;
        }));
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.search(false);
    }
    ngOnDestroy() {
        src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].destroySubscription(this.sub$);
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.filterPopover.create({
                component: src_app_widgets_feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__["FeedFilterPopoverComponent"],
                cssClass: 'filter-feed',
                event: ev,
                translucent: true,
                showBackdrop: false
            });
            return yield popover.present();
        });
    }
    // goBack() {
    //   this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
    // }
    isAuthenticated() {
        return this.userService.isAuthenticated();
    }
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
        // if ( this.users.length === 0 ) {
        //   this.presentLoading().then((res: any) => {
        //     this.users.length === 0 ? res.dismiss() : this.toast.toast('Sorry, something went wrong!')
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
        this.userService.searchUser(this.searchKey, pageInfo).subscribe(users => {
            var _a;
            if (keyTrigger) {
                console.log(users);
                this.users = users;
                this.usersIdentityPhoto = src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].getIdentityPhotos(users);
            }
            else {
                this.users = this.users.concat(users);
                this.searchOffset = this.users.length;
                (_a = this.infiniteScrollTarget) === null || _a === void 0 ? void 0 : _a.complete();
            }
        });
    }
    loadMoreEvents(event) {
        this.infiniteScrollTarget = event.target;
        this.search(false);
    }
    getProfilePhotoUrl(identityPhoto) {
        return src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"].getUserProfilePhotoUrl(identityPhoto);
    }
};
UsersSearchPage.ctorParameters = () => [
    { type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_5__["BrowserHistoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
UsersSearchPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"],] }]
};
UsersSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/users-search/users-search.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users-search.page.scss */ "./src/app/public/users-search/users-search.page.scss")).default]
    })
], UsersSearchPage);



/***/ })

}]);
//# sourceMappingURL=public-users-search-users-search-module-es2015.js.map