(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/home.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/home.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"refreshPosts($event)\">\r\n    <ion-refresher-content pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <!-- Page header -->\r\n  <ion-row class=\"top-row-header ion-no-padding \">\r\n    <ion-col size=\"12\" class=\"ion-no-padding \">\r\n      <ion-item class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-row\">\r\n          <ion-label class=\"fs-13 pl-2 poppins\" *ngIf=\"isAuthenticated()\"> Welcome, </ion-label>\r\n          <ion-text class=\"fs-13 pl-2 poppins\" *ngIf=\"isAuthenticated()\"> {{ user?.firstName }} </ion-text>\r\n\r\n          <ion-label class=\"fs-13 pl-2 poppins\" *ngIf=\"!isAuthenticated()\" (click)=\"gotoLogin()\">Log In</ion-label>\r\n\r\n        </ion-row>\r\n        <!-- <ion-icon slot=\"end\" name=\"reorder-three-outline\" *ngIf=\"isAuthenticated()\"></ion-icon> -->\r\n        <ion-label slot=\"end\" class=\"ion-float-right fs-13 poppins-bold ion-text-right\" *ngIf=\"isAuthenticated()&&!showPost\"> Home </ion-label>\r\n        <ion-label slot=\"end\" class=\"ion-float-right fs-13 poppins-bold ion-text-right\" *ngIf=\"isAuthenticated()&&showPost\" (click)=\"showPostModal()\"> Post </ion-label>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- Page header ends -->\r\n\r\n\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\">\r\n  </ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n\r\n\r\n  <!-- <ion-row>\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <app-trending></app-trending>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n  <ion-row class=\"mt-1\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <app-create-post appWatchElement [elementId]=\"'create-post'\" id=\"create-post\" (isOut)=\"showPost=$event\"></app-create-post>\r\n      <ng-template ngFor let-post [ngForOf]=\"posts\" >\r\n        <app-post-widget1 [Post]=\"post\"></app-post-widget1>\r\n      </ng-template>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- Main body content ends -->\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMorePosts($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading ...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/public/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/public/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../widgets/widgets.module */ "./src/app/widgets/widgets.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/public/home/home.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__["WidgetsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/public/home/home.page.scss":
/*!********************************************!*\
  !*** ./src/app/public/home/home.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9ob21lL2hvbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/public/home/home.page.ts":
/*!******************************************!*\
  !*** ./src/app/public/home/home.page.ts ***!
  \******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _widgets_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../widgets/create-post/create-post.component */ "./src/app/widgets/create-post/create-post.component.ts");
/* harmony import */ var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/my-signals */ "./src/app/shared/services/my-signals.ts");
/* harmony import */ var _shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/model-service/post.service */ "./src/app/shared/services/model-service/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");









let HomePage = class HomePage {
    constructor(userService, router, postService, signals, modalController) {
        this.userService = userService;
        this.router = router;
        this.postService = postService;
        this.signals = signals;
        this.modalController = modalController;
        this.postCount = 0; // Total post fetched
        this.pageNumber = 1;
        this.limit = 10;
        this.posts = [];
        this.sub$ = [];
        this.showPost = false;
    }
    ngOnDestroy() {
        src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"].destroySubscription(this.sub$);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sub$.push(this.signals.reloadPostsSource$.subscribe(_ => {
                this.loadRecentPost(true);
            }));
            this.user = yield this.userService.getUserLocal();
        });
    }
    ngAfterViewInit() {
        this.loadRecentPost();
    }
    getUsername() {
    }
    isAuthenticated() {
        return this.userService.isAuthenticated();
    }
    gotoLogin() {
        this.router.navigateByUrl('/login');
    }
    loadRecentPost(refresh = false) {
        if (refresh) {
            this.postCount = 0; // reset post count
        }
        const pageInfo = {
            offset: this.postCount,
            limit: this.limit,
        };
        this.postService.getPost(pageInfo).subscribe(posts => {
            var _a, _b;
            this.postCount += posts === null || posts === void 0 ? void 0 : posts.length;
            (_a = this.infiniteScrollTarget) === null || _a === void 0 ? void 0 : _a.complete();
            (_b = this.refresherTarget) === null || _b === void 0 ? void 0 : _b.complete();
            console.log(posts);
            if (refresh) {
                this.posts = posts;
                return;
            }
            this.posts = [...this.posts, ...posts];
        });
    }
    loadMorePosts(event) {
        this.infiniteScrollTarget = event.target;
        this.loadRecentPost();
    }
    refreshPosts(event) {
        this.refresherTarget = event.target;
        this.loadRecentPost(true);
    }
    showPostModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.userService.isAuthenticated()) {
                this.router.navigateByUrl('/login');
                return;
            }
            this.modal = yield this.modalController.create({
                component: _widgets_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__["CreatePostComponent"],
                cssClass: 'my-custom-class',
                componentProps: {
                    showHeader: true,
                    mediaPage: 'photos'
                }
            });
            this.signals.closeModalSource$.subscribe(log => {
                this.modal.dismiss();
            });
            return yield this.modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_2__["MySignals"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
HomePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"],] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/public/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=public-home-home-module-es2015.js.map