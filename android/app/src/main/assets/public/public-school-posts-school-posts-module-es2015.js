(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-school-posts-school-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/school-posts/school-posts.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/school-posts/school-posts.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"refreshPosts($event)\">\r\n    <ion-refresher-content pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <!-- Page header -->\r\n  <ion-row class=\"top-row-header ion-no-padding \">\r\n    <ion-col size=\"12\" class=\"ion-no-padding \">\r\n      <ion-item class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-row\">\r\n          <!-- <ion-label class=\"fs-13 pl-2 poppins\" *ngIf=\"isAuthenticated()\"> Welcome, </ion-label> -->\r\n          <!-- <ion-text class=\"fs-13 pl-2 poppins\" *ngIf=\"isAuthenticated()\"> {{ firstname }} </ion-text> -->\r\n\r\n          <ion-label class=\"fs-13 pl-2 poppins\" *ngIf=\"!isAuthenticated()\" (click)=\"gotoLogin()\">Log In</ion-label>\r\n\r\n        </ion-row>\r\n        <!-- <ion-icon slot=\"end\" name=\"reorder-three-outline\" *ngIf=\"isAuthenticated()\"></ion-icon> -->\r\n        <ion-label slot=\"end\" class=\"ion-float-right fs-13 poppins-bold ion-text-right\"> @OpokuWare </ion-label>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- Page header ends -->\r\n\r\n\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\">\r\n  </ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <ion-row class=\"mt-1\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <div style=\"height: 20vh\">\r\n        <app-my-slider [slideObjects]=\"schoolPhotos\" [mediaType]=\"mediaType\"></app-my-slider>\r\n      </div>\r\n      <app-create-post></app-create-post>\r\n      <ng-template ngFor let-post [ngForOf]=\"posts\" >\r\n        <app-post-widget1 [Post]=\"post\"></app-post-widget1>\r\n      </ng-template>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/public/school-posts/school-posts.module.ts":
/*!************************************************************!*\
  !*** ./src/app/public/school-posts/school-posts.module.ts ***!
  \************************************************************/
/*! exports provided: SchoolPostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolPostsPageModule", function() { return SchoolPostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _school_posts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./school-posts.page */ "./src/app/public/school-posts/school-posts.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/widgets/widgets.module */ "./src/app/widgets/widgets.module.ts");








const routes = [
    {
        path: '',
        component: _school_posts_page__WEBPACK_IMPORTED_MODULE_5__["SchoolPostsPage"]
    }
];
let SchoolPostsPageModule = class SchoolPostsPageModule {
};
SchoolPostsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsModule"]
        ],
        declarations: [_school_posts_page__WEBPACK_IMPORTED_MODULE_5__["SchoolPostsPage"]]
    })
], SchoolPostsPageModule);



/***/ }),

/***/ "./src/app/public/school-posts/school-posts.page.scss":
/*!************************************************************!*\
  !*** ./src/app/public/school-posts/school-posts.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zY2hvb2wtcG9zdHMvc2Nob29sLXBvc3RzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/public/school-posts/school-posts.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/public/school-posts/school-posts.page.ts ***!
  \**********************************************************/
/*! exports provided: SchoolPostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolPostsPage", function() { return SchoolPostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/model-service/school.service */ "./src/app/shared/services/model-service/school.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_my_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/my-media */ "./src/app/models/my-media.ts");
/* harmony import */ var src_app_shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/model-service/post.service */ "./src/app/shared/services/model-service/post.service.ts");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");








let SchoolPostsPage = class SchoolPostsPage {
    constructor(userService, router, postService, schoolService) {
        this.userService = userService;
        this.router = router;
        this.postService = postService;
        this.schoolService = schoolService;
        this.schoolPhotos = [{
                fileName: '1605080601901.jpg',
                fileUrl: '/1605080601901.jpg',
                id: 1,
            }];
        this.mediaType = src_app_models_my_media__WEBPACK_IMPORTED_MODULE_5__["MediaType"].PHOTO;
        this.postCount = 0; // Total post fetched
        this.pageNumber = 1;
        this.limit = 20;
        this.posts = [];
        this.sub$ = [];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.schoolService.getSchoolLocal().then(school => {
            this.school = school;
            this.loadSchoolPosts();
        });
    }
    isAuthenticated() {
        return this.userService.isAuthenticated();
    }
    gotoLogin() {
        this.router.navigateByUrl('/login');
    }
    loadSchoolPosts(refresh = false) {
        var _a;
        const pageInfo = {
            offset: this.postCount,
            limit: this.limit,
        };
        this.postService.getSchoolPosts((_a = this.school) === null || _a === void 0 ? void 0 : _a.id, pageInfo).subscribe(posts => {
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
        this.loadSchoolPosts();
    }
    refreshPosts(event) {
        this.postCount = 0; // reset post count
        this.refresherTarget = event.target;
        this.loadSchoolPosts(true); //true -> start from the beginning
    }
};
SchoolPostsPage.ctorParameters = () => [
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] },
    { type: src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_1__["SchoolService"] }
];
SchoolPostsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }]
};
SchoolPostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-school-posts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./school-posts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/school-posts/school-posts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./school-posts.page.scss */ "./src/app/public/school-posts/school-posts.page.scss")).default]
    })
], SchoolPostsPage);



/***/ })

}]);
//# sourceMappingURL=public-school-posts-school-posts-module-es2015.js.map