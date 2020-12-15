(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-schools-profile-schools-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-profile/schools-profile.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-profile/schools-profile.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"ion-padding\" class=\"tag\">\r\n    <ion-col size=\"6\" (click)=\"goBack()\">\r\n      <ion-icon name=\"chevron-back-outline\" class=\"fs-20\" color=\"medium\"></ion-icon>\r\n      <!-- <ion-icon name=\"git-network-outline\" class=\"fs-20\" style=\"color: white !important;\" color=\"medium\"></ion-icon>\r\n      &nbsp;\r\n      <ion-label style=\"margin-top: 1px; position: absolute; font-size:12px; color: white !important;\">Follow\r\n      </ion-label> -->\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"ion-float-right\">\r\n      <!-- <ion-label class=\"ion-float-right fs-12\" (click)=\"connect()\" style=\"color: white !important;\">Join old students\r\n      </ion-label> -->\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"height: 250px;\" appWatchElement [elementId]=\"'school-menu'\" id=\"school-menu\" (isOut)=\"schoolFixedMenu=$event\">\r\n    <ion-card class=\" w-100\" style=\"height: 250px;\">\r\n      <div class=\"backdrop h-100 w-100\"></div>\r\n      <ion-card-header [background-image]=\"getCoverPhotoUrl() || '../../../assets/images/ACOPROM1.jpg'\"\r\n        class=\"card-header-bg ion-no-padding ion-padding-top \">\r\n        <ion-row style=\"z-index:4;\">\r\n          <ion-col class=\"ion-no-padding ion-no-margin\" size=\"5\"></ion-col>\r\n          <ion-col class=\"ion-no-padding ion-no-margin\" size=\"2\" style=\"z-index: 4;\">\r\n            <ion-avatar>\r\n              <img [src]=\"getProfilePhotoUrl()\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n          <ion-col class=\"ion-no-padding ion-no-margin\" size=\"5\"></ion-col>\r\n          <ion-col size=\"12\" class=\"text-center\" color=\"white\" style=\"z-index: 4; color: white\">\r\n            <h5> {{ school?.name }} </h5>\r\n            <small class=\"mx-auto w-50\" *ngIf=\"school?.address\">\r\n              <span *ngIf=\"school?.address?.city\">#{{school?.address?.city}}</span>\r\n              <span *ngIf=\"school?.address?.state\"> #{{school?.address?.state}}</span>\r\n              <span *ngIf=\"school?.address?.country\"> #{{school?.address?.country}}</span>\r\n            </small>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </ion-row>\r\n  <ion-row class=\"\">\r\n    <ion-card class=\"w-100 ion-padding-top ion-padding-bottom main\">\r\n      <ion-row class=\"ion-no-padding\" style=\"height: 90px;\" [ngClass]=\"{'fixed-profile-menu-atop': fixedMenu}\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding ion-no-margin menu-col\" style=\"padding-bottom: 8px;\" >\r\n          <ion-row> \r\n            <ion-col size=\"3\" class=\"text-center\">\r\n              <ion-note class=\"poppins-regular fs-13 min-menu\" (click)=\"showPost=false; showAbout = true;\">About\r\n              </ion-note>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"text-center\">\r\n              <ion-note class=\"poppins-regular fs-13 min-menu\" (click)=\"showPost=false; showLocation = true;\">Location\r\n              </ion-note>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"text-center\">\r\n              <ion-note class=\"poppins-regular fs-13 min-menu\" (click)=\"showPost=false; showMedia = true;\">Media\r\n              </ion-note>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"text-center\">\r\n              <ion-note class=\"poppins-regular fs-13 min-menu\" (click)=\"showPost=false; showDocument = true;\">Timeline\r\n              </ion-note>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-row class=\"ion-no-padding ion-no-margin w-100\" *ngIf=\"!fixedMenu\">\r\n          <ion-col size=\"4\" class=\"ion-align-items-center ion-text-center ion-no-padding separator-vertical\">\r\n            <ion-note color=\"dark\" class=\"poppins-bold fs-16\" (click)=\"currentSegment='posts'\">Posts</ion-note><br>\r\n            <ion-note class=\"poppins-regular fs-12\" (click)=\"currentSegment='posts'\">{{totalPost}}</ion-note>\r\n\r\n            <ion-col class=\"ion-no-padding\" size=\"12\">\r\n              <hr style=\"background: #e8e9ed; margin-top: 5px;\" width=\"70%\" *ngIf=\"currentSegment=='posts'\">\r\n            </ion-col>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\" class=\"ion-align-items-center ion-text-center ion-no-padding\">\r\n            <ion-note color=\"dark\" class=\"poppins-bold fs-16\" (click)=\"currentSegment='alumni'\">Alumni</ion-note><br>\r\n            <ion-note class=\"poppins-regular fs-12\" (click)=\"currentSegment='alumni'\">{{totalAlumni}}\r\n            </ion-note>\r\n\r\n            <ion-col class=\"ion-no-padding\" size=\"12\" *ngIf=\"currentSegment=='alumni'\">\r\n              <hr style=\"background: #e8e9ed; margin-top: 5px;\" width=\"70%\">\r\n            </ion-col>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"4\" class=\"ion-align-items-center ion-text-center ion-no-padding separator-vertical\">\r\n            <ion-note color=\"dark\" class=\"poppins-bold fs-16\" (click)=\"currentSegment='followers'\">Followers</ion-note>\r\n            <br>\r\n            <ion-note class=\"poppins-regular fs-12\" (click)=\"currentSegment='followers'\">\r\n              {{totalFollowers}}</ion-note>\r\n\r\n            <ion-col class=\"ion-no-padding\" size=\"12\" *ngIf=\"currentSegment=='followers'\">\r\n              <hr style=\"background: #e8e9ed; margin-top: 5px;\" width=\"70%\">\r\n            </ion-col>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"8\">\r\n          <ion-button size=\"small\" expand=\"block\" class=\"mx-2 mb-1\" (click)=\"join()\" *ngIf=\"!isAlumni\">\r\n            <ion-icon name=\"git-network-outline\"></ion-icon> Join old students\r\n          </ion-button>\r\n\r\n          <!-------------------------------- \r\n              unfollow\r\n              -------------------------------->\r\n\r\n          <ion-button size=\"small\" expand=\"block\" class=\"mx-2 mb-1\" (click)=\"leave()\" *ngIf=\"isAlumni\">\r\n            <ion-icon name=\"remove\"></ion-icon> &nbsp;&nbsp; Leave school\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <app-follow [LeaderId]=\"school?.id\" [FollowerId]=\"user?.id\" [modelName]=\"'School'\"\r\n            (reload)=\"getFollowers(true)\"></app-follow>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-no-padding ion-no-margin\" *ngIf=\"currentSegment=='posts'\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ng-template ngFor let-post [ngForOf]=\"schoolPosts\">\r\n            <app-post-widget1 [Post]=\"post\"></app-post-widget1>\r\n          </ng-template>\r\n\r\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMorePosts($event)\">\r\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading ...\">\r\n            </ion-infinite-scroll-content>\r\n          </ion-infinite-scroll>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-no-padding\" *ngIf=\"currentSegment=='alumni'\">\r\n        <ng-template ngFor let-alu [ngForOf]=\"alumni\">\r\n          <app-user-card [User]=\"alu?.user\" [Alumni]=\"alu\"></app-user-card>\r\n        </ng-template>\r\n\r\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreAlumni($event)\">\r\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"searching ...\">\r\n          </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-padding school-image-tiles w-100\" *ngIf=\"currentSegment=='followers'\">\r\n        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n          <ng-template ngFor let-follower [ngForOf]=\"followers\">\r\n            <!-- <app-user-card [User]=\"follower\"></app-user-card> -->\r\n          </ng-template>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n\r\n    </ion-card>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<!-- <app-image-gallery class=\"w-100\"></app-image-gallery> -->");

/***/ }),

/***/ "./src/app/public/schools-profile/schools-profile.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/public/schools-profile/schools-profile.module.ts ***!
  \******************************************************************/
/*! exports provided: SchoolsProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsProfilePageModule", function() { return SchoolsProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../widgets/widgets.module */ "./src/app/widgets/widgets.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _schools_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schools-profile.page */ "./src/app/public/schools-profile/schools-profile.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        component: _schools_profile_page__WEBPACK_IMPORTED_MODULE_6__["SchoolsProfilePage"]
    }
];
let SchoolsProfilePageModule = class SchoolsProfilePageModule {
};
SchoolsProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_1__["WidgetsModule"]
        ],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        declarations: [_schools_profile_page__WEBPACK_IMPORTED_MODULE_6__["SchoolsProfilePage"]],
    })
], SchoolsProfilePageModule);



/***/ }),

/***/ "./src/app/public/schools-profile/schools-profile.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/public/schools-profile/schools-profile.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header-bg {\n  background-attachment: fixed;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  max-width: 100vw;\n  height: 35vh;\n  min-height: 250px;\n}\n\nion-avatar {\n  width: 80px;\n  height: 80px;\n  background: white;\n  text-align: center;\n  z-index: 4;\n  margin-top: 50px;\n  color: white;\n  margin-left: calc(50% - 40px);\n}\n\nion-avatar img {\n  width: 80px;\n  height: 80px;\n}\n\n.backdrop {\n  top: 0;\n  position: absolute;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.main {\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  box-shadow: none;\n  z-index: 4;\n}\n\n.bio {\n  text-align: center;\n  width: 80%;\n  max-width: 400px;\n  margin: 0 auto;\n}\n\n.fixed-profile-menu-atop {\n  position: fixed !important;\n  z-index: 10001 !important;\n  background: white !important;\n  width: 100% !important;\n  margin-top: -260px !important;\n  padding-top: 10px !important;\n  height: 38px !important;\n}\n\n.menu-col {\n  margin-top: -16px !important;\n  margin-bottom: 8px;\n  padding-top: 6px !important;\n  background: var(--ion-color-medium) !important;\n}\n\n.min-menu {\n  color: var(--ion-color-light);\n}\n\n.tag {\n  position: absolute !important;\n  width: 100% !important;\n  z-index: 10;\n  background: transparent;\n  padding: 0 !important;\n  margin: 0 !important;\n  padding-top: 8px !important;\n  padding-right: 5px !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3NjaG9vbHMtcHJvZmlsZS9zY2hvb2xzLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBREo7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtBO0VBQ0ksTUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBRko7O0FBS0E7RUFFSSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBSEo7O0FBT0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4Q0FBQTtBQUpKOztBQU9BO0VBQ0ksNkJBQUE7QUFKSjs7QUFPQTtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvc2Nob29scy1wcm9maWxlL3NjaG9vbHMtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXItYmcge1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcblxyXG5cclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJhY2tkcm9wIHtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogLjQpO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG4uYmlvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5maXhlZC1wcm9maWxlLW1lbnUtYXRvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yNjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLm1lbnUtY29sIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNnB4ICAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDZweCAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWluLW1lbnUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/public/schools-profile/schools-profile.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/public/schools-profile/schools-profile.page.ts ***!
  \****************************************************************/
/*! exports provided: SchoolsProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsProfilePage", function() { return SchoolsProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/model-service/social.service */ "./src/app/shared/services/model-service/social.service.ts");
/* harmony import */ var _shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/model-service/alumni.service */ "./src/app/shared/services/model-service/alumni.service.ts");
/* harmony import */ var _widgets_school_join_school_join_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../widgets/school-join/school-join.component */ "./src/app/widgets/school-join/school-join.component.ts");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");
/* harmony import */ var _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/services/model-service/school.service */ "./src/app/shared/services/model-service/school.service.ts");
/* harmony import */ var _shared_services_my_signals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/services/my-signals */ "./src/app/shared/services/my-signals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/providers/utility.service */ "./src/app/shared/services/providers/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/providers/navigation/browser-history.service */ "./src/app/shared/services/providers/navigation/browser-history.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/model-service/post.service */ "./src/app/shared/services/model-service/post.service.ts");













let SchoolsProfilePage = class SchoolsProfilePage {
    constructor(signals, router, browserHistory, schoolService, postService, userService, modalController, alumniService, alert, socialService) {
        this.signals = signals;
        this.router = router;
        this.browserHistory = browserHistory;
        this.schoolService = schoolService;
        this.postService = postService;
        this.userService = userService;
        this.modalController = modalController;
        this.alumniService = alumniService;
        this.alert = alert;
        this.socialService = socialService;
        this.currentSegment = 'posts';
        this.totalAlumni = 0;
        this.alumni = [];
        this.schoolPosts = [];
        this.totalPost = 0;
        this.followers = [];
        this.totalFollowers = 0;
        this.previousPage = '';
        this.sub$ = [];
        this.isAlumni = false;
        this.fixedMenu = false;
        this.postLimit = 5;
        this.postOffset = 0;
        this.alumniLimit = 5;
        this.alumniOffset = 0;
        this.followersLimit = 5;
        this.followersOffset = 0;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this.userService.getUserLocal();
            this.sub$.push(this.signals.selectedSchoolSource$.subscribe(school => {
                this.school = school;
                // console.log(this.school);
                this.identityPhoto = _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_5__["SchoolService"].getSchoolIdentityPhoto(school);
                this.init();
            }));
            this.school = yield this.schoolService.getSchoolLocal();
            // console.log(this.school);
            this.identityPhoto = _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_5__["SchoolService"].getSchoolIdentityPhoto(this.school);
            console.log(this.identityPhoto);
            this.init();
        });
    }
    ngOnInit() {
        this.sub$.push(this.signals.reloadUserSchoolsSource$.subscribe(_ => {
            this.init();
        }));
    }
    ngOnDestroy() {
        src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"].destroySubscription(this.sub$);
    }
    init() {
        this.countAlumni();
        this.getSchoolAlumni(true);
        this.getSchoolPosts();
        this.userIsAlumni();
        this.getFollowers();
        this.countFollowers();
    }
    goBack() {
        this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
    }
    set schoolFixedMenu(value) {
        this.fixedMenu = value;
    }
    join() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.userService.isAuthenticated()) {
                this.router.navigateByUrl('/login');
                return;
            }
            this.modal = yield this.modalController.create({
                component: _widgets_school_join_school_join_component__WEBPACK_IMPORTED_MODULE_3__["SchoolJoinComponent"],
                cssClass: 'my-custom-class',
                componentProps: {
                    alumniCount: this.totalAlumni
                }
            });
            this.signals.closeModalSource$.subscribe(name => {
                if (name === 'join-school') {
                    this.modal.dismiss();
                    this.userIsAlumni();
                    this.countAlumni();
                }
            });
            return yield this.modal.present();
        });
    }
    leave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure to leave school?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            var _a, _b;
                            // delete alumni object from the database
                            this.sub$.push(this.alumniService.deleteAlumni((_a = this.user) === null || _a === void 0 ? void 0 : _a.id, (_b = this.school) === null || _b === void 0 ? void 0 : _b.id).subscribe(_ => {
                                this.userIsAlumni();
                                this.countAlumni();
                                this.signals.announceUserSchoolsReload();
                            }));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    userIsAlumni() {
        var _a, _b;
        this.alumniService.isUserAlumni((_a = this.user) === null || _a === void 0 ? void 0 : _a.id, (_b = this.school) === null || _b === void 0 ? void 0 : _b.id).subscribe(alu => {
            if (alu === null || alu === void 0 ? void 0 : alu.id) {
                this.isAlumni = true;
            }
            else {
                this.isAlumni = false;
            }
        });
    }
    userIsFollowing($event) {
        this.isFollowing = $event;
    }
    getProfilePhotoUrl() {
        return _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_5__["SchoolService"].getSchoolProfilePhotoUrl(this.identityPhoto);
    }
    getCoverPhotoUrl() {
        return _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_5__["SchoolService"].getSchoolCoverPhotoUrl(this.identityPhoto);
    }
    countAlumni() {
        var _a;
        this.sub$.push(this.alumniService.countAlumni((_a = this.school) === null || _a === void 0 ? void 0 : _a.id).subscribe(count => {
            this.totalAlumni = count;
        }));
    }
    getSchoolPosts() {
        var _a;
        const pageInfo = {
            limit: this.postLimit,
            offset: this.postOffset
        };
        this.sub$.push(this.postService.getSchoolPosts((_a = this.school) === null || _a === void 0 ? void 0 : _a.id, pageInfo).subscribe(posts => {
            var _a;
            this.schoolPosts = [...this.schoolPosts, ...posts];
            this.postOffset += posts === null || posts === void 0 ? void 0 : posts.length;
            (_a = this.infiniteScrollTarget) === null || _a === void 0 ? void 0 : _a.complete();
        }));
    }
    loadMorePosts(event) {
        this.infiniteScrollTarget = event.target;
        this.getSchoolPosts();
    }
    countPost() {
        var _a;
        this.sub$.push(this.postService.countSchoolPost((_a = this.school) === null || _a === void 0 ? void 0 : _a.id).subscribe(count => {
            console.log(count);
            this.totalPost = count;
        }));
    }
    getSchoolAlumni(reset = false) {
        var _a;
        if (reset) {
            this.alumniOffset = 0;
            this.alumni = [];
        }
        const pageInfo = {
            limit: this.alumniLimit,
            offset: this.alumniOffset
        };
        this.sub$.push(this.alumniService.getSchoolAlumni((_a = this.school) === null || _a === void 0 ? void 0 : _a.id, pageInfo).subscribe(alu => {
            var _a;
            this.alumni = [...this.alumni, ...alu];
            console.log(alu);
            this.alumniOffset += alu === null || alu === void 0 ? void 0 : alu.length;
            (_a = this.infiniteScrollTarget) === null || _a === void 0 ? void 0 : _a.complete();
        }));
    }
    loadMoreAlumni(event) {
        this.infiniteScrollTarget = event.target;
        this.getSchoolAlumni();
    }
    getFollowers(reset = false) {
        var _a;
        if (reset) {
            this.followersOffset = 0;
            this.followers = [];
            this.countFollowers();
        }
        const pageInfo = {
            limit: this.followersLimit,
            offset: this.followersOffset
        };
        // followers
        this.socialService.getSchoolFollowers((_a = this.school) === null || _a === void 0 ? void 0 : _a.id, pageInfo).subscribe(users => {
            var _a;
            this.followers = users;
            this.alumniOffset += users === null || users === void 0 ? void 0 : users.length;
            (_a = this.infiniteScrollTarget) === null || _a === void 0 ? void 0 : _a.complete();
        });
    }
    loadMoreFollowers(event) {
        this.infiniteScrollTarget = event.target;
        this.getFollowers();
    }
    countFollowers() {
        var _a;
        this.socialService.countSchoolFollower((_a = this.school) === null || _a === void 0 ? void 0 : _a.id).subscribe(count => {
            this.totalFollowers = count;
        });
    }
};
SchoolsProfilePage.ctorParameters = () => [
    { type: _shared_services_my_signals__WEBPACK_IMPORTED_MODULE_6__["MySignals"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_10__["BrowserHistoryService"] },
    { type: _shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_5__["SchoolService"] },
    { type: src_app_shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_12__["PostService"] },
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: _shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_2__["AlumniService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_1__["SocialService"] }
];
SchoolsProfilePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonInfiniteScroll"],] }]
};
SchoolsProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-schools-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./schools-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/schools-profile/schools-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./schools-profile.page.scss */ "./src/app/public/schools-profile/schools-profile.page.scss")).default]
    })
], SchoolsProfilePage);



/***/ })

}]);
//# sourceMappingURL=public-schools-profile-schools-profile-module-es2015.js.map