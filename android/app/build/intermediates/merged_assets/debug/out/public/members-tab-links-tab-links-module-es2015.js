(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-tab-links-tab-links-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/tab-links/tab-links.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/tab-links/tab-links.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content   snInViewport\r\n(inViewportChange)=\"userViewChange($event)\">\r\n  <!-- <ion-header>\r\n    <ion-row class=\"ion-no-padding \">\r\n      <ion-col size=\"12\" class=\"ion-no-padding ion-padding-start ion-padding-end\">\r\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n                <ion-icon class=\"fs-14\" name=\"chevron-back-outline\"></ion-icon>&nbsp;&nbsp; Feed \r\n               \r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-label class=\"poppins-bold fs-12\" style=\"margin-top: 10px;\">Welcome, &nbsp; </ion-label>\r\n            <ion-note class=\"poppins fs-12\" style=\"margin-top: 10px;\">\r\n              Alfred\r\n            </ion-note>\r\n          </ion-row>\r\n          <ion-icon slot=\"end\" name=\"reorder-three-outline\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-header> -->\r\n  <ion-tabs name=\"bottom\">\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n      <!-- <ion-tab-button tab=\"my-schools\" *ngIf=\"isAuthenticated()\">\r\n        <ion-icon name=\"school-outline\" size=\"small\"></ion-icon>\r\n      </ion-tab-button> -->\r\n\r\n      <ion-tab-button tab=\"schools-location\">\r\n        <ion-icon name=\"locate-outline\" size=\"small\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n\r\n      <ion-tab-button tab=\"schools-search\">\r\n        <ion-icon name=\"search-outline\" size=\"small\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"home\">\r\n        <ion-icon name=\"home\" size=\"large\"></ion-icon>\r\n        <!-- <ion-badge color=\"danger\">6</ion-badge> -->\r\n      </ion-tab-button>\r\n\r\n      <!-- <ion-tab-button tab=\"profile\" *ngIf=\"isAuthenticated()\">\r\n        <ion-icon name=\"person-outline\" size=\"small\"></ion-icon>\r\n      </ion-tab-button> -->\r\n\r\n      <ion-tab-button tab=\"users-search\">\r\n        <ion-icon name=\"people-outline\" size=\"small\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"settings\">\r\n        <ion-icon name=\"cog-outline\" size=\"small\"></ion-icon>\r\n      </ion-tab-button>\r\n      <!-- <ion-tab-button (click)=\"showLogs()\">\r\n        <ion-icon name=\"list-outline\" size=\"small\"></ion-icon>\r\n      </ion-tab-button> -->\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/members/tab-links/tab-links-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/members/tab-links/tab-links-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TabLinksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinksPageRoutingModule", function() { return TabLinksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab_links_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-links.page */ "./src/app/members/tab-links/tab-links.page.ts");
/* harmony import */ var src_app_shared_services_providers_authentication_screen_lock_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/providers/authentication/screen-lock-guard.service */ "./src/app/shared/services/providers/authentication/screen-lock-guard.service.ts");
/* harmony import */ var src_app_shared_services_providers_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/providers/authentication/auth-guard.service */ "./src/app/shared/services/providers/authentication/auth-guard.service.ts");






const routes = [
    {
        path: 'links',
        component: _tab_links_page__WEBPACK_IMPORTED_MODULE_3__["TabLinksPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | public-home-home-module */ "public-home-home-module").then(__webpack_require__.bind(null, /*! ../../public/home/home.module */ "./src/app/public/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                canActivate: [src_app_shared_services_providers_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"], src_app_shared_services_providers_authentication_screen_lock_guard_service__WEBPACK_IMPORTED_MODULE_4__["ScreenLockGuardService"]],
                canActivateChild: [src_app_shared_services_providers_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/members/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                canActivate: [src_app_shared_services_providers_authentication_screen_lock_guard_service__WEBPACK_IMPORTED_MODULE_4__["ScreenLockGuardService"]],
                path: 'schools',
                loadChildren: () => __webpack_require__.e(/*! import() | schools-schools-module */ "schools-schools-module").then(__webpack_require__.bind(null, /*! ../schools/schools.module */ "./src/app/members/schools/schools.module.ts")).then(m => m.SchoolsPageModule)
            },
            {
                path: 'schools-search',
                loadChildren: () => __webpack_require__.e(/*! import() | public-schools-search-schools-search-module */ "public-schools-search-schools-search-module").then(__webpack_require__.bind(null, /*! ../../public/schools-search/schools-search.module */ "./src/app/public/schools-search/schools-search.module.ts")).then(m => m.SchoolsSearchPageModule)
            },
            {
                path: 'schools-location',
                loadChildren: () => __webpack_require__.e(/*! import() | public-schools-location-schools-location-module */ "public-schools-location-schools-location-module").then(__webpack_require__.bind(null, /*! ../../public/schools-location/schools-location.module */ "./src/app/public/schools-location/schools-location.module.ts")).then(m => m.SchoolsLocationPageModule)
            },
            {
                path: 'school-profile',
                loadChildren: () => __webpack_require__.e(/*! import() | public-schools-profile-schools-profile-module */ "public-schools-profile-schools-profile-module").then(__webpack_require__.bind(null, /*! ../../public/schools-profile/schools-profile.module */ "./src/app/public/schools-profile/schools-profile.module.ts")).then(m => m.SchoolsProfilePageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ../settings/settings.module */ "./src/app/members/settings/settings.module.ts")).then(m => m.SettingsPageModule)
            },
            {
                path: 'my-schools',
                loadChildren: () => __webpack_require__.e(/*! import() | my-schools-my-schools-module */ "my-schools-my-schools-module").then(__webpack_require__.bind(null, /*! ../my-schools/my-schools.module */ "./src/app/members/my-schools/my-schools.module.ts")).then(m => m.MySchoolsPageModule)
            },
            {
                path: 'school-posts',
                loadChildren: () => __webpack_require__.e(/*! import() | public-school-posts-school-posts-module */ "public-school-posts-school-posts-module").then(__webpack_require__.bind(null, /*! ../../public/school-posts/school-posts.module */ "./src/app/public/school-posts/school-posts.module.ts")).then(m => m.SchoolPostsPageModule)
            },
            {
                path: 'timeline',
                loadChildren: () => __webpack_require__.e(/*! import() | time-line-time-line-module */ "time-line-time-line-module").then(__webpack_require__.bind(null, /*! ../time-line/time-line.module */ "./src/app/members/time-line/time-line.module.ts")).then(m => m.TimeLinePageModule)
            },
            {
                path: 'users-search',
                loadChildren: () => __webpack_require__.e(/*! import() | public-users-search-users-search-module */ "public-users-search-users-search-module").then(__webpack_require__.bind(null, /*! ../../public/users-search/users-search.module */ "./src/app/public/users-search/users-search.module.ts")).then(m => m.UsersSearchPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/links/home',
        pathMatch: 'full'
    }
];
let TabLinksPageRoutingModule = class TabLinksPageRoutingModule {
};
TabLinksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabLinksPageRoutingModule);



/***/ }),

/***/ "./src/app/members/tab-links/tab-links.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/tab-links/tab-links.module.ts ***!
  \*******************************************************/
/*! exports provided: TabLinksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinksPageModule", function() { return TabLinksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab_links_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-links-routing.module */ "./src/app/members/tab-links/tab-links-routing.module.ts");
/* harmony import */ var _tab_links_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-links.page */ "./src/app/members/tab-links/tab-links.page.ts");







let TabLinksPageModule = class TabLinksPageModule {
};
TabLinksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab_links_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabLinksPageRoutingModule"]
        ],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        declarations: [_tab_links_page__WEBPACK_IMPORTED_MODULE_6__["TabLinksPage"]]
    })
], TabLinksPageModule);



/***/ }),

/***/ "./src/app/members/tab-links/tab-links.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/tab-links/tab-links.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvdGFiLWxpbmtzL3RhYi1saW5rcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/members/tab-links/tab-links.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/tab-links/tab-links.page.ts ***!
  \*****************************************************/
/*! exports provided: TabLinksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLinksPage", function() { return TabLinksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/my-signals */ "./src/app/shared/services/my-signals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/model-service/user.service */ "./src/app/shared/services/model-service/user.service.ts");





let TabLinksPage = class TabLinksPage {
    constructor(userService, modalController, signals) {
        this.userService = userService;
        this.modalController = modalController;
        this.signals = signals;
    }
    ngOnInit() {
    }
    isAuthenticated() {
        return this.userService.isAuthenticated();
    }
    // async showLogs() {
    //   if (this.modal) {
    //     this.modal.hidden = false;
    //     return;
    //   }
    //   this.modal = await this.modalController.create({
    //     component: CreatePostPage1,
    //     cssClass: 'my-custom-class'
    //   });
    //   this.signals.closeModalSource$.subscribe(log => {
    //     this.modal.hidden = true;
    //   });
    //   return await this.modal.present();
    // }
    userViewChange($event) {
        console.log($event);
    }
};
TabLinksPage.ctorParameters = () => [
    { type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"] }
];
TabLinksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab-links',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab-links.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/tab-links/tab-links.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab-links.page.scss */ "./src/app/members/tab-links/tab-links.page.scss")).default]
    })
], TabLinksPage);



/***/ })

}]);
//# sourceMappingURL=members-tab-links-tab-links-module-es2015.js.map