(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-tutorial-tutorial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/tutorial/tutorial.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/tutorial/tutorial.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color='primary' (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"false\">\r\n    <ion-slide>\r\n      <img src=\"assets/icon/logo.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">\r\n        Welcome to\r\n        <b>Fame</b>\r\n      </h2>\r\n      <p>\r\n        Create, track, find and attend all events around you.\r\n        Publish your personal events and invite people to attend.\r\n      </p>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <img src=\"assets/background/party/5.jpg\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">What is fame?</h2>\r\n      <p>\r\n        Fame is an app intended to help you advertise your events to the world for free. Let your wedding, funeral and other  gatherings  known to million of users. Don't miss\r\n        out your friends birthday, use the reminder to keep track of your booked events.\r\n      </p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/social_network.jpg\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">Social life</h2>\r\n      <p>\r\n        Make new friends and connect with people who have booked for events you are interested in.\r\n        Chat with your new friends or join the event public room. Comment, like, dislike and share events with your\r\n        friends.\r\n      </p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/tickets/3.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">The digital tickets!</h2>\r\n      <p>\r\n        Are you an event organizer? If yes then fame is for you, just create electronic tickets and sell them online\r\n        with just a few clicks.\r\n      </p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/news.png\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">And...! the news</h2>\r\n      <p>\r\n        Don't miss the juicy gossips about the last event you attended. Its all live on\r\n        fame news.\r\n      </p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/yourway.jpg\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">Don't miss your way!</h2>\r\n      <p>\r\n        Fame is to remind you and give you the location of that important events you really don't want to miss. Find\r\n        that wedding, funeral, birthday party on google map that is happening live in your vicinity.\r\n      </p>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/how.jpg\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">How do I get started?</h2>\r\n      <p>\r\n        Its so easy, just register and start booking for events but don't forget to complete your profile if you want to stay connected with friends.\r\n        That's it.\r\n      </p>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/party.jpg\" class=\"slide-image\" />\r\n      <h2 class=\"slide-title\">Now check it out!</h2>\r\n      <ion-button fill=\"clear\" (click)=\"startApp()\">\r\n        Continue\r\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n      </ion-button>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/public/tutorial/tutorial.module.ts":
/*!****************************************************!*\
  !*** ./src/app/public/tutorial/tutorial.module.ts ***!
  \****************************************************/
/*! exports provided: TutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial */ "./src/app/public/tutorial/tutorial.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const routes = [
    {
        path: '',
        component: _tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]
    }
];
let TutorialModule = class TutorialModule {
};
TutorialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
        entryComponents: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
    })
], TutorialModule);



/***/ }),

/***/ "./src/app/public/tutorial/tutorial.scss":
/*!***********************************************!*\
  !*** ./src/app/public/tutorial/tutorial.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n}\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646b;\n}\n\np b {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3R1dG9yaWFsL3R1dG9yaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx5QkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFRTtFQUNFLGNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy90dXRvcmlhbC90dXRvcmlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC8vIFRPRE8gdGVzdCB0cmFuc3BhcmVudCBhbmQgZnVsbHNjcmVlblxyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNsaWRlLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbn1cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIG1heC13aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMzZweCAwO1xyXG59XHJcblxyXG5iIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM2MDY0NmI7XHJcblxyXG4gIGIge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/public/tutorial/tutorial.ts":
/*!*********************************************!*\
  !*** ./src/app/public/tutorial/tutorial.ts ***!
  \*********************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/providers/storage/my-storage.service */ "./src/app/shared/services/providers/storage/my-storage.service.ts");





let TutorialPage = class TutorialPage {
    constructor(menu, router, store) {
        this.menu = menu;
        this.router = router;
        this.store = store;
        this.showSkip = true;
    }
    startApp() {
        this.router
            .navigateByUrl('/home')
            .then(() => this.store.set('ion_did_tutorial', true));
    }
    onSlideChangeStart(event) {
        event.target.isEnd().then(isEnd => {
            this.showSkip = !isEnd;
        });
    }
    ionViewWillEnter() {
        this.store.get('ion_did_tutorial').then(res => {
            if (res === true) {
                this.router.navigateByUrl('/home');
            }
        });
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    }
};
TutorialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_4__["MyStorage"] }
];
TutorialPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides',] }]
};
TutorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-tutorial',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tutorial.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/tutorial/tutorial.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tutorial.scss */ "./src/app/public/tutorial/tutorial.scss")).default]
    })
], TutorialPage);



/***/ })

}]);
//# sourceMappingURL=public-tutorial-tutorial-module-es2015.js.map