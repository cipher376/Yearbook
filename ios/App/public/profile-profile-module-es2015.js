(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/profile/profile.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/profile/profile.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"ion-padding\" class=\"tag\">\r\n    <ion-col size=\"6\" (click)=\"goBack()\">\r\n      <ion-icon name=\"chevron-back-outline\" class=\"fs-20\" color=\"medium\"></ion-icon>&nbsp;\r\n      <ion-label style=\"margin-top: 1px; position: absolute; font-size:12px\"></ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"ion-float-right\">\r\n      <!-- <ion-label class=\"ion-float-right fs-12\" (click)=\"connect()\" style=\"    color: white !important;\">Connect\r\n      </ion-label> -->\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row appWatchElement [elementId]=\"'profileMenu'\" id=\"profileMenu\" (isOut)=\"profileFixedMenu=$event\">\r\n    <ion-card class=\" w-100\" style=\"height: 250px;\">\r\n      <div class=\"backdrop h-100 w-100\"></div>\r\n      <ion-card-header [background-image]=\"identityPhoto?.cover?.fileUrl || '../../../assets/images/ACOPROM1.jpg'\"\r\n        class=\"card-header-bg ion-no-padding ion-padding-top\">\r\n        <ion-row style=\"z-index:4;\">\r\n          <ion-col class=\"ion-no-padding ion-no-margin\" size=\"5\"></ion-col>\r\n          <ion-col class=\"ion-no-padding ion-no-margin\" size=\"2\" style=\"z-index: 4;\">\r\n            <ion-avatar>\r\n              <img [src]=\"identityPhoto?.profile?.fileUrl\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n          <ion-col class=\"ion-no-padding ion-no-margin\" size=\"5\"></ion-col>\r\n          <ion-col size=\"12\" class=\"text-center\" color=\"white\" style=\"z-index: 4; color: white\">\r\n            <h5> {{ selectedUser?.firstName }} {{ selectedUser?.otherName}} {{ selectedUser?.lastName }} </h5>\r\n            <small class=\"mx-auto w-50\" *ngIf=\"highestDegreeEnrolled?.degree\">\r\n              {{highestDegreeEnrolled?.degree?.type}} {{highestDegreeEnrolled?.degree?.programme}}<br>\r\n              @{{highestDegreeEnrolled?.school?.name}}\r\n            </small>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </ion-row>\r\n  <ion-row class=\"\">\r\n    <ion-card class=\"w-100 ion-padding-top ion-padding-bottom main\">\r\n      <ion-row class=\"ion-no-padding\" style=\"height: 90px;\" [ngClass]=\"{'fixed-profile-menu-atop': profileFixedMenu}\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding ion-no-margin\" style=\"    \r\n          margin-top: -16px;\r\n          margin-bottom: 8px;\r\n          padding-top: 6px;; background:var(--ion-color-medium-shade)\">\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"text-center\">\r\n              <ion-note class=\"poppins-regular fs-13 min-menu\">Profile</ion-note>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"text-center\">\r\n              <ion-note class=\"poppins-regular fs-13 min-menu\">Edit</ion-note>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"text-center\">\r\n              <ion-note class=\"poppins-regular fs-13 min-menu\">Media</ion-note>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"text-center\">\r\n              <ion-note class=\"poppins-regular fs-13 min-menu\">Timeline</ion-note>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-row class=\"ion-no-padding ion-no-margin w-100\" *ngIf=\"!profileFixedMenu\" >\r\n          <ion-col size=\"4\" class=\"ion-align-items-center ion-text-center ion-no-padding separator-vertical\">\r\n            <ion-note color=\"dark\" class=\"poppins-bold fs-16\" (click)=\"currentSegment='posts'\">Posts</ion-note><br>\r\n            <ion-note class=\"poppins-regular fs-12\" (click)=\"currentSegment='posts'\">{{totalPost}}</ion-note>\r\n\r\n            <ion-col class=\"ion-no-padding\" size=\"12\">\r\n              <hr style=\"background: #e8e9ed; margin-top: 5px;\" width=\"70%\" *ngIf=\"currentSegment=='posts'\">\r\n            </ion-col>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\" class=\"ion-align-items-center ion-text-center ion-no-padding\">\r\n            <ion-note color=\"dark\" class=\"poppins-bold fs-16\" (click)=\"currentSegment='schools'\">Schools</ion-note><br>\r\n            <ion-note class=\"poppins-regular fs-12\" (click)=\"currentSegment='schools'\">{{selectedUserSchools?.length}}\r\n            </ion-note>\r\n\r\n            <ion-col class=\"ion-no-padding\" size=\"12\" *ngIf=\"currentSegment=='schools'\">\r\n              <hr style=\"background: #e8e9ed; margin-top: 5px;\" width=\"70%\">\r\n            </ion-col>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\" class=\"ion-align-items-center ion-text-center ion-no-padding separator-vertical\">\r\n            <ion-note color=\"dark\" class=\"poppins-bold fs-16\" (click)=\"currentSegment='following'\">Following</ion-note>\r\n            <br>\r\n            <ion-note class=\"poppins-regular fs-12\" (click)=\"currentSegment='following'\">\r\n              {{selectedUserFollowedSchools?.length}}</ion-note>\r\n\r\n            <ion-col class=\"ion-no-padding\" size=\"12\" *ngIf=\"currentSegment=='following'\">\r\n              <hr style=\"background: #e8e9ed; margin-top: 5px;\" width=\"70%\">\r\n            </ion-col>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"{{user?.id !== selectedUser?.id ? 12: 8}}\" *ngIf=\"user?.id !== selectedUser?.id\">\r\n          <app-follow [LeaderId]=\"selectedUser?.id\" [FollowerId]=\"user?.id\" [color]=\"'primary'\" [modelName]=\"'user'\"\r\n            (reload)=\"countFollowers(true)\"></app-follow>\r\n        </ion-col>\r\n\r\n        <ion-col *ngIf=\"user?.id === selectedUser?.id\" size=\"{{user?.id === selectedUser?.id ? 12: 4}}\">\r\n          <ion-button size=\"small\" expand=\"block\" class=\"mx-2 mb-1\" color=\"medium\" (click)=\"edit()\">\r\n            <ion-icon name=\"create-outline\"></ion-icon> Edit\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-no-padding ion-no-margin\" *ngIf=\"currentSegment=='posts'\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ng-template ngFor let-post [ngForOf]=\"selectedUserPosts\">\r\n            <app-post-widget1 [Post]=\"post\"></app-post-widget1>\r\n          </ng-template>\r\n\r\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMorePosts($event)\">\r\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading ...\">\r\n            </ion-infinite-scroll-content>\r\n          </ion-infinite-scroll>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-no-padding\" *ngIf=\"currentSegment=='schools'\">\r\n        <ng-template ngFor let-school [ngForOf]=\"selectedUserSchools\">\r\n          <app-school-card [School]=\"school\"></app-school-card>\r\n        </ng-template>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-padding school-image-tiles w-100\" *ngIf=\"currentSegment=='following'\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ng-template ngFor let-school [ngForOf]=\"selectedUserFollowedSchools\">\r\n            <app-school-card [School]=\"school\"></app-school-card>\r\n          </ng-template>\r\n\r\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreFollowedUsers($event)\">\r\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"searching ...\">\r\n            </ion-infinite-scroll-content>\r\n          </ion-infinite-scroll>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card>\r\n  </ion-row>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/members/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/members/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/members/profile/profile.page.ts");
/* harmony import */ var src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/widgets/widgets.module */ "./src/app/widgets/widgets.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/members/profile/profile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/members/profile/profile.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header-bg {\n  background-attachment: fixed;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  max-width: 100vw;\n  height: 35vh;\n  min-height: 250px;\n}\n\nion-avatar {\n  width: 80px;\n  height: 80px;\n  background: white;\n  text-align: center;\n  z-index: 4;\n  margin-top: 50px;\n  color: white;\n  margin-left: calc(50% - 40px);\n}\n\nion-avatar img {\n  width: 80px;\n  height: 80px;\n}\n\n.backdrop {\n  top: 0;\n  position: absolute;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.main {\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  box-shadow: none;\n  z-index: 4;\n}\n\n.bio {\n  text-align: center;\n  width: 80%;\n  max-width: 400px;\n  margin: 0 auto;\n}\n\n.fixed-profile-menu-atop {\n  position: fixed;\n  z-index: 10001;\n  background: white;\n  width: 100%;\n  margin-top: -260px !important;\n  padding-top: 10px;\n  height: 46px !important;\n}\n\n.min-menu {\n  color: var(--ion-color-light);\n}\n\n.tag {\n  position: absolute !important;\n  width: 100% !important;\n  z-index: 10;\n  background: transparent;\n  padding: 0 !important;\n  margin: 0 !important;\n  padding-top: 8px !important;\n  padding-right: 5px !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBREo7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUlBO0VBQ0ksTUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFFSSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlci1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuXHJcbiAgICBcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAuNCk7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbi5iaW8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZpeGVkLXByb2ZpbGUtbWVudS1hdG9we1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTI2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogNDZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWluLW1lbnV7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLnRhZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/members/profile/profile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/members/profile/profile.page.ts ***!
  \*************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/model-service/social.service */ "./src/app/shared/services/model-service/social.service.ts");
/* harmony import */ var _shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/model-service/school.service */ "./src/app/shared/services/model-service/school.service.ts");
/* harmony import */ var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/my-signals */ "./src/app/shared/services/my-signals.ts");
/* harmony import */ var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/providers/navigation/browser-history.service */ "./src/app/shared/services/providers/navigation/browser-history.service.ts");
/* harmony import */ var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");
/* harmony import */ var src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/model-service/alumni.service */ "./src/app/shared/services/model-service/alumni.service.ts");
/* harmony import */ var src_app_shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/model-service/post.service */ "./src/app/shared/services/model-service/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");












let ProfilePage = class ProfilePage {
    constructor(userService, alumniService, postService, schoolService, browserHistory, router, signals, socialService, route) {
        this.userService = userService;
        this.alumniService = alumniService;
        this.postService = postService;
        this.schoolService = schoolService;
        this.browserHistory = browserHistory;
        this.router = router;
        this.signals = signals;
        this.socialService = socialService;
        this.route = route;
        this.currentSegment = 'posts';
        this.selectedUserSchools = [];
        this.selectedUserFollowedSchools = [];
        this.schoolsIdentityPhotos = [];
        this.selectedUserPosts = [];
        this.totalPost = 0;
        this.selectedUserAlumni = [];
        this.degrees = [];
        this.selectedUserComments = [];
        this.postLimit = 5;
        this.postOffset = 0;
        this.followedSchoolsLimit = 5;
        this.followedSchoolsOffset = 0;
        this.profileFixedMenu = false;
        this.sub$ = [];
        this.previousPage = '';
        this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
            this.previousPage = previousPage;
        }));
    }
    ngOnInit() {
        this.profileFixedMenu = false;
    }
    ngOnDestroy() {
        src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"].destroySubscription(this.sub$);
    }
    ngAfterContentInit() {
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sub$.push(this.signals.selectedUserSource$.subscribe(_ => {
                this.init();
            }));
            this.init();
        });
    }
    init() {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postOffset = 0;
            this.selectedUserPosts = [];
            this.user = yield this.userService.getUserLocal();
            if ((_c = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.params) === null || _c === void 0 ? void 0 : _c.user) { // check if its current login user
                this.selectedUser = this.user;
                yield this.userService.setSelectedUserLocal(this.user);
                window.location.href = '/links/profile';
            }
            else {
                this.selectedUser = yield this.userService.getSelectedUserLocal();
            }
            console.log(this.selectedUser);
            // if (!this.selectedUser) {
            //   this.selectedUser = this.user;
            // }
            const filter = {
                include: [
                    { relation: 'photos' },
                    { relation: 'address' },
                    { relation: 'userConfig' },
                    { relation: 'post' }
                ]
            };
            this.sub$.push(this.userService.getUserDetails((_d = this.selectedUser) === null || _d === void 0 ? void 0 : _d.id, filter).subscribe(u => {
                if (u === null || u === void 0 ? void 0 : u.id) {
                    this.selectedUser = u;
                    console.log(u);
                    this.identityPhoto = _shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"].getUserIdentityPhoto(u);
                    console.log(this.identityPhoto);
                }
            }));
            this.sub$.push(this.alumniService.getUserAlumni((_e = this.selectedUser) === null || _e === void 0 ? void 0 : _e.id).subscribe(a => {
                var _a, _b;
                this.selectedUserAlumni = a;
                console.log(a);
                this.degrees = [];
                (_a = this.selectedUserAlumni) === null || _a === void 0 ? void 0 : _a.forEach(alu => {
                    var _a;
                    if (alu === null || alu === void 0 ? void 0 : alu.degree) {
                        (_a = this.degrees) === null || _a === void 0 ? void 0 : _a.push(alu.degree);
                    }
                });
                this.degrees = src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"].SortDegree(this.degrees);
                if (((_b = this.degrees) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    this.highestDegreeEnrolled = this.getAlumniByDegree(this.degrees[0]);
                }
            }));
            this.sub$.push(this.signals.followSource$.subscribe(isFollowing => {
                this.loadFollowedSchools();
            }));
            this.loadSchools();
            this.loadFollowedSchools();
            this.getUserPost();
            this.countPost();
        });
    }
    set FixedMenu(value) {
        this.profileFixedMenu = value;
    }
    getAlumniByDegree(degree) {
        for (const alu of this.selectedUserAlumni) {
            if (alu.degree === degree) {
                return alu;
            }
        }
    }
    getUserPost() {
        var _a;
        const pageInfo = {
            limit: this.postLimit,
            offset: this.postOffset
        };
        this.sub$.push(this.postService.getUserPosts((_a = this.selectedUser) === null || _a === void 0 ? void 0 : _a.id, pageInfo).subscribe(posts => {
            var _a;
            console.log(posts);
            this.selectedUserPosts = [...this.selectedUserPosts, ...posts];
            this.postOffset += posts === null || posts === void 0 ? void 0 : posts.length;
            (_a = this.infiniteScrollTarget) === null || _a === void 0 ? void 0 : _a.complete();
        }));
    }
    loadMorePosts(event) {
        this.infiniteScrollTarget = event.target;
        this.getUserPost();
    }
    countPost() {
        var _a;
        this.sub$.push(this.postService.countUserPost((_a = this.selectedUser) === null || _a === void 0 ? void 0 : _a.id).subscribe(count => {
            // console.log(count);
            this.totalPost = count;
        }));
    }
    loadSchools() {
        var _a;
        if (this.selectedUser) {
            this.sub$.push(this.schoolService.getUserSchools((_a = this.selectedUser) === null || _a === void 0 ? void 0 : _a.id).subscribe(schools => {
                this.selectedUserSchools = schools;
                console.log(schools);
                this.schoolsIdentityPhotos = src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"].getIdentityPhotos(schools);
            }));
        }
    }
    goBack() {
        this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
    }
    loadFollowedSchools(reset = false) {
        var _a;
        if (reset) {
            this.followedSchoolsOffset = 0;
        }
        const pageInfo = {
            limit: this.followedSchoolsLimit,
            offset: this.followedSchoolsOffset
        };
        this.sub$.push(this.socialService.getUserFollowedSchools((_a = this.selectedUser) === null || _a === void 0 ? void 0 : _a.id, pageInfo).subscribe(fs => {
            var _a;
            this.selectedUserFollowedSchools = [...this.selectedUserFollowedSchools, ...fs];
            this.followedSchoolsOffset += fs === null || fs === void 0 ? void 0 : fs.length;
            (_a = this.infiniteScrollTarget) === null || _a === void 0 ? void 0 : _a.complete();
        }));
    }
    loadMoreFollowedUsers(event) {
        this.infiniteScrollTarget = event.target;
        this.loadFollowedSchools();
    }
    loadFollowedUsers() {
    }
    countFollowers() {
        this.loadFollowedSchools(true);
    }
    edit() {
    }
    follow() {
    }
};
ProfilePage.ctorParameters = () => [
    { type: _shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_9__["AlumniService"] },
    { type: src_app_shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"] },
    { type: src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_5__["SchoolService"] },
    { type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_7__["BrowserHistoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_6__["MySignals"] },
    { type: src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_1__["SocialService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProfilePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonInfiniteScroll"],] }]
};
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/members/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map