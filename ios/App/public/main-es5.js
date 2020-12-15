(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
      var map = {
        "./public/forgot-password/forgot-password.module": ["./src/app/public/forgot-password/forgot-password.module.ts", "public-forgot-password-forgot-password-module"],
        "./public/home/home.module": ["./src/app/public/home/home.module.ts", "public-home-home-module"],
        "./public/login/login.module": ["./src/app/public/login/login.module.ts", "public-login-login-module"],
        "./public/register/register.module": ["./src/app/public/register/register.module.ts", "public-register-register-module"],
        "./public/tutorial/tutorial.module": ["./src/app/public/tutorial/tutorial.module.ts", "public-tutorial-tutorial-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\" *ngIf=\"checkAuthentication()\">\r\n          <!-- <ion-list-header>Inbox</ion-list-header>-->\r\n          <ion-note>Welcome, {{user?.firstName||'user'}}! </ion-note>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url, p.params]\" lines=\"none\"\r\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n        <ion-list id=\"labels-list\">\r\n          <ion-list-header *ngIf=\"checkAuthentication()\">Other</ion-list-header>\r\n          <!-- <ion-note>hi@ionicframework.com</ion-note> -->\r\n\r\n          <ion-note *ngIf=\"!checkAuthentication()\">Welcome, user! </ion-note>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of otherPages; let i = index\">\r\n            <ion-item (click)=\"selectedIndex = i+3\" routerDirection=\"root\" [routerLink]=\"[p.url, p.params]\" lines=\"none\"\r\n              detail=\"false\" [class.selected]=\"selectedIndex == i+3\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n\r\n</ion-app>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/audio-recorder/audio-recorder.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/audio-recorder/audio-recorder.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsAudioRecorderAudioRecorderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"\r\nheight: 50vh;\r\n\">\r\n  <ion-button fill=\"outline\" shape=\"round\" color=\"danger\" (click)=\"closeModals()\" size=\"small\"\r\n    style=\"--border-width: 0px;float: right;\">\r\n    <ion-icon name=\"close\"></ion-icon>\r\n  </ion-button>\r\n  \r\n  <ion-label>\r\n    <ion-text>\r\n      <h1>{{status}}</h1>\r\n    </ion-text>\r\n  </ion-label>\r\n  <ion-button (click)=\"start()\">Start recording\r\n\r\n  </ion-button>\r\n  <ion-button (click)=\"stop()\">Stop recording</ion-button>\r\n  <ion-button (click)=\"play()\">Play</ion-button>\r\n  <ion-button (click)=\"stopPlay()\">stop playing</ion-button>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/audio-thumbnail/audio-thumbnail.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/audio-thumbnail/audio-thumbnail.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsAudioThumbnailAudioThumbnailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ion-no-padding ion-no-margin image-container \" [style.background-color]=\"'ffffff5c'\"\r\n[ngClass]=\"{'thumbnail-selected': selected}\"\r\n  (click)=\"select()\" >\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"fs-12\" style=\"padding-right: 27px;\r\n    margin-top: 0px;\r\n    color: var(--ion-color-light);\">{{thumb?.fileName}}</ion-label>\r\n  </ion-item>\r\n  <!-- <ion-button fill=\"outline\" shape=\"round\" color=\"light\" size=\"small\" class=\"thumbnailPlay\" (click)=\"preview()\">\r\n    <ion-icon name=\"headset-outline\"></ion-icon>\r\n  </ion-button> -->\r\n\r\n  <ion-row class=\"ion-text-center ion-align-items-center ion-no-padding\" style=\"width: 100%;\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"8\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n        <ion-fab-button color=\"light\" class=\"play-button\"(click)=\"preview()\">\r\n          <ion-icon class=\"white fs-25\" style=\"margin-right: -0.5px;\" color=\"dark\" \r\n            name=\"headset-outline\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"2\"></ion-col>\r\n  </ion-row>\r\n\r\n  <ion-button fill=\"outline\" shape=\"round\" color=\"danger\" size=\"small\" class=\"thumbnailClose\" (click)=\"onDelete()\">\r\n    <ion-icon name=\"close\"></ion-icon>\r\n  </ion-button>\r\n  <ion-note class=\"time-label\"  (click)=\"onDelete()\">{{thumb?.length}}</ion-note>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/comments/comments.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/comments/comments.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsCommentsCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"content-container \" [ngClass]=\"{'h-100': showHeader, 'w-100': showHeader}\" id=\"content-container\">\r\n  <ion-list *ngIf=\"showHeader\">\r\n    <ion-item>\r\n      <ion-text class=\"fs-12\" *ngIf=\"comments?.length>0\">{{comments?.length}} Comments</ion-text>\r\n      <ion-text *ngIf=\"comments?.length<=0\" class=\"fs-12\">No Comments</ion-text>\r\n      <ion-icon name=\"close-circle-outline\" slot=\"end\" (click)=\"close()\"\r\n        style=\"margin: 0px;  margin-top: -12px; color: #8e8e8e;\">\r\n      </ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-col size=\"12\" class=\"inner-container ion-no-padding\"\r\n    [ngClass]=\"{'inner-container-mini': !showHeader, 'inner-collapse': (!showHeader&&comments?.length<1)}\"\r\n    id=\"inner-container\">\r\n    <ion-row class=\"ion-no-padding pb-1 fs-12\" *ngFor=\"let comment of comments; let i=index;\">\r\n      <!-- <ion-col size='2' class=\"ion-no-padding \">\r\n        <ion-avatar class=\"\" style=\"width: 45px;\r\n        height: 30px;\">\r\n            <img [src]=\"creatorPhotoUrls[i]\">\r\n        </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size='10' class=\"ion-no-padding \">\r\n        <ion-text class=\"poppins-semi-bold \">{{getCommentUser(comment)?.firstName}}</ion-text>\r\n        <p class=\"ion-no-margin\">\r\n          <ion-text>{{comment?.message}}</ion-text>\r\n        </p>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-align-items-center\" style=\"height: 40px;\">\r\n          <ion-row slot=\"start\">\r\n            <ion-avatar class=\"\" style=\"\r\n            width: 30px;\r\n            height: 30px;\r\n            padding: 0;\r\n            border-radius: 1000px;\r\n            border: solid thin #2125291f;\r\n            margin-right: 2vw;\" (click)=\"gotoProfile(getCommentUser(comment))\">\r\n              <img [src]=\"creatorPhotoUrls[i]\">\r\n            </ion-avatar>\r\n            <ion-note>\r\n              <span color=\"dark\" class=\"poppins-semi-bold fs-12 \">{{getCommentUser(comment)?.firstName}}</span>\r\n            </ion-note>\r\n          </ion-row>\r\n          <ion-label slot=\"end\" class=\"fs-10 ion-text-right ion-no-margin ion-no-padding\" style=\"padding-right: 2vw;\">\r\n            {{comment?.dateCreated | toEventTime}} </ion-label>\r\n        </ion-item>\r\n        <ion-col size=\"12\">\r\n          <p class=\"ion-no-margin fs-11\" [innerHTML]=\"comment?.message |safeHtml\">\r\n          </p>\r\n        </ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-col>\r\n  <div class=\"send-btn\">\r\n    <ion-item lines=\"none\">\r\n      <ion-row slot=\"start\" class=\"ion-no-padding ion-no-margin\" style=\"width: 80%\">\r\n        <!-- <ngx-emoji style=\"background: transparent;\" [emoji]=\"'grinning'\" \r\n         size=\"24\" set=\"apple\" >\r\n        </ngx-emoji> -->\r\n        <ion-avatar (click)=\"toggleEmojiSheet()\" style=\"\r\n        margin-top: 9px;\r\n        margin-right: 4px;\r\n        z-index: 8;\r\n        height: 27px;\r\n        width: 26px;\" class=\"ion-activatable ripple-parent\">\r\n          <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n          <span>😀</span>\r\n        </ion-avatar>\r\n        <ion-input placeholder=\"  Write a comment\" [(ngModel)]=\"comment.message\"></ion-input>\r\n      </ion-row>\r\n      <ion-icon slot=\"end\" name=\"send-outline\" class=\"fs-20\" (click)=\"send()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/create-post/create-post.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/create-post/create-post.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsCreatePostCreatePostComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-row class=\"top-row-header ion-no-padding \" style=\"box-shadow: 0px 2px 4px -4px;\" *ngIf=\"showHeader\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n        <ion-row class=\"ion-row\" (click)=\"closeModal()\">\r\n          <ion-icon class=\"fs-25\" [src]=\"'../../../assets/icon/round-arrow_back.svg'\"></ion-icon>&nbsp;&nbsp;\r\n          <!-- <ion-note class=\"poppins-medium fs-12\" color=\"black \" style=\"margin-top: 4px;\">{{previousPage}}</ion-note> -->\r\n        </ion-row>\r\n        <!-- <ion-button slot=\"end\" fill=\"outline\" shape=\"round\" color=\"danger\"  size=\"small\"\r\n          style=\"--border-width: 0px;float: right;\">\r\n          <ion-icon name=\"close\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\" *ngIf=\"showHeader\">\r\n  </ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <app-my-photo-picker #myPhotoPicker *ngIf=\"mediaPage === 'photos'\"></app-my-photo-picker>\r\n  <app-my-video-picker #myVideoPicker *ngIf=\"mediaPage === 'videos'\"></app-my-video-picker>\r\n  <app-my-audio-picker #myAudioPicker *ngIf=\"mediaPage === 'audios'\"></app-my-audio-picker>\r\n  <!-- <app-audio-recorder *ngIf=\"mediaPage === 'audios'\"> </app-audio-recorder> -->\r\n  <ion-row size=\"12\" class=\"text-center p-1 fint-line-under\">\r\n    <ion-col size=\"3\" class=\" ion-no-padding ion-no-margin\">\r\n      <ion-button size=\"small\" fill=\"outline\" style=\"--border-width:0px; --color:var(--ion-color-medium-shade)\"\r\n        (click)=\"takePhoto()\">\r\n        <ion-icon name=\"images-outline\" size=\"small\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\" ion-no-padding ion-no-margin\">\r\n      <ion-button size=\"small\" fill=\"outline\" style=\"--border-width:0px; --color:var(--ion-color-medium-shade)\"\r\n        (click)=\" recordVideo()\">\r\n        <ion-icon name=\"film-outline\" size=\"small\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\" ion-no-padding ion-no-margin\">\r\n      <ion-button size=\"small\" fill=\"outline\" style=\"--border-width:0px; --color:var(--ion-color-medium-shade)\"\r\n        (click)=\"recordAudio()\">\r\n        <ion-icon name=\"pulse-outline\" size=\"small\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\" ion-no-padding ion-no-margin\">\r\n      <ion-button size=\"small\" fill=\"outline\" style=\"--border-width:0px; --color:var(--ion-color-medium-shade)\"\r\n        (click)=\"clear()\">\r\n        <ion-icon name=\"remove-circle-outline\" color=\"danger\" size=\"small\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-segment class=\"ion-no-padding ion-no-margin\">\r\n    <ion-item>\r\n      <ion-row class=\"ion-no-padding ion-no-margin\" style=\"height: 40px;\">\r\n        <ion-col size=\"9\" class=\"ion-no-padding ion-no-margin\">\r\n          <ion-label position=\"stacked\"> What's on your mind? </ion-label>\r\n        </ion-col>\r\n        <ion-col siz=\"3\" class=\"ion-no-padding ion-no-margin ion-activatable ripple-parent\" (click)=\"post()\">\r\n          <ion-button class=\" ion-text-right fs-20 poppins-bold\" size=\"small\" style=\"--border-width:0px; float:right\"\r\n            fill=\"outline\" shape=\"round\">\r\n            <ion-icon class=\"\" name=\"send-outline\" size=\"small\"></ion-icon>\r\n            <!-- Post -->\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-textarea rows=\"3\" maxlength=\"2000\" [(ngModel)]=\"message\"></ion-textarea>\r\n    </ion-item>\r\n  </ion-segment>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/emoji-modal/emoji-modal.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/emoji-modal/emoji-modal.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsEmojiModalEmojiModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"width: 100vw;     border-top: solid thin #0000001f; \">\r\n  <ion-item lines=\"none\" style=\"margin-bottom: -14px;background: var(--ion-color-light)\">\r\n    <span>{{char}}</span>\r\n    <ion-icon name=\"close-circle-outline\" slot=\"end\" (click)=\"close()\"\r\n      style=\"    margin: 0px;\r\n      color: #8e8e8e;\r\n      margin-top: -16px;\r\n      margin-right: -13px;\">\r\n    </ion-icon>\r\n  </ion-item>\r\n  <emoji-mart (emojiClick)=\"addEmoji($event)\" skin=\"6\" sheetSize=\"16\" totalFrequentLines=\"5\" \r\n  perLine=\"4\" emojiSize=\"20\" enableSearch=\"false\"\r\n    set=\"apple\" isNative=\"true\" showPreview=\"false\" title=\"Yearbook\" color=\"#ae65c5\"></emoji-mart>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/feed-filter-popover/feed-filter-popover.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/feed-filter-popover/feed-filter-popover.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsFeedFilterPopoverFeedFilterPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"w-100\" style=\"\">\r\n\r\n  <!-- <ion-icon name=\"caret-up-outline\" class=\"fs-25 poppins-bold\" style=\"\r\nposition: absolute;\r\n    float: right;\r\n    text-align: right;\r\n    width: 160%;\r\n    margin-top: -22px;\r\n    z-index: 20921;\r\n    \"></ion-icon> -->\r\n  <ion-row class=\"feed-filter-container fs-13\">\r\n    <ion-col size=\"12\" *ngIf=\"schools?.length>0\">\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label class=\"fs-13\">#Opoku ware school</ion-label>\r\n          <!-- <ion-toggle [(ngModel)]=\"pepperoni\"></ion-toggle> -->\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"fs-13\">#Prempeh college</ion-label>\r\n          <!-- <ion-toggle [(ngModel)]=\"sausage\" disabled=\"true\"></ion-toggle> -->\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"fs-13\"> #Presbyterian boys shs</ion-label>\r\n          <!-- <ion-toggle [(ngModel)]=\"mushrooms\"></ion-toggle> -->\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col size=\"12\" *ngIf=\"schools?.length<=0\">\r\n      <ion-row size=\"12\" class=\"ion-text-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-label class=\"fs-14\">Your mates are waiting.</ion-label><br>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-label class=\"fs-12\" color='primary' [routerLink]=\"['/links/schools-search']\"\r\n            routerLinkActive=\"router-link-active\">Find your school(s)\r\n          </ion-label>\r\n        </ion-col>\r\n        <!-- <ion-toggle [(ngModel)]=\"pepperoni\"></ion-toggle> -->\r\n\r\n      </ion-row>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/follow/follow.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/follow/follow.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsFollowFollowComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button size=\"small\" expand=\"block\" class=\"mx-2 mb-1\" [color]=\"color\" (click)=\"follow()\" *ngIf=\"!isFollowing\">\r\n  <ion-icon name=\"add\"></ion-icon> Follow\r\n</ion-button>\r\n<ion-button size=\"small\" expand=\"block\" class=\"mx-2 mb-1\" color=\"medium\" (click)=\"follow()\" *ngIf=\"isFollowing\">\r\n  <ion-icon name=\"remove\"></ion-icon> Unfollow\r\n</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/image-gallery/image-gallery.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/image-gallery/image-gallery.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsImageGalleryImageGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-grid class=\"w-100\">\r\n    <ion-row class=\"w-100\">\r\n      <ion-col size=\"4\" *ngFor=\"let image of images\">\r\n        <ion-card class=\"image-container\" [style.background-image]=\"'url('+image+')'\" imageViewer=\"{{image}}\" ></ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n\r\n<!-- More Pinterest floating gallery style -->\r\n<div class=\"images\">\r\n  <ion-card class=\"one-image\" *ngFor=\"let image of images\">\r\n    <img src=\"{{image}}\" (click)=\"openViewer(image, '', 'long text for you image')\">\r\n  </ion-card>\r\n</div>\r\n\r\n\r\n<!-- </div> -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/like/like.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/like/like.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsLikeLikeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-col  class=\"ion-align-items-start ion-text-start fs-20 ion-no-padding ion-no-margin\" (click)=\"like()\">\r\n  <ion-icon name=\"thumbs-up-outline\"  [ngClass]=\"{'liked': affection?.rate}\"></ion-icon>\r\n</ion-col>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/map/map.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/map/map.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<google-map #googleMap\r\n   height=\"100%\"\r\n   width=\"100%\"\r\n   [zoom]=\"zoom\"\r\n   [center]=\"center\"\r\n   [options]=\"options\"\r\n   (centerChanged)=\"centerChanged(_$)\">\r\n\r\n   <map-marker\r\n    *ngFor=\"let marker of markers\"\r\n    [position]=\"marker.position\"\r\n    [label]=\"marker.label\"\r\n    [title]=\"marker.title\"\r\n    [options]=\"marker.options\"\r\n  >\r\n  </map-marker>\r\n</google-map>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-audio-picker/my-audio-picker.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-audio-picker/my-audio-picker.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsMyAudioPickerMyAudioPickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-segment [(ngModel)]=\"galleryType\" color=\"primary\" class=\"pt-2\">\r\n  <ion-segment-button value=\"cloud\">\r\n    <ion-icon class=\"ion-no-margin\" name=\"cloudy-outline\" size=\"small\"></ion-icon>\r\n    <ion-row class=\"fs-10\">M<span class=\"ion-text-lowercase\">y recordings</span></ion-row>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"local\">\r\n    <ion-icon class=\"ion-no-margin\" name=\"phone-portrait-outline\" size=\"small\"></ion-icon>\r\n    <ion-row class=\"fs-10\">D<span class=\"ion-text-lowercase\">evice gallery</span></ion-row>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n<div [ngSwitch]=\"galleryType\">\r\n  <div *ngSwitchCase=\"'cloud'\" id=\"cloud\">\r\n    <ion-row class=\" ion-no-padding ion-no-margin\">\r\n      <ion-col class=\"col-6 col-sm-4 col-md-4 col-xl-3   px-1 \" *ngFor=\"let aud of cloudAudios\">\r\n        <!-- <div class=\"image-container\" [style.background-image]=\"'url(https://via.placeholder.com/200)'\">\r\n          <ion-button fill=\"outline\" shape=\"round\" color=\"danger\" (click)=\"deleteFromCloudPhotos(image)\" size=\"small\"\r\n            style=\"--border-width: 0px;float: right;background:#ffffff5c;\">\r\n            <ion-icon name=\"close\"></ion-icon>\r\n          </ion-button>\r\n        </div> -->\r\n        <app-audio-thumbnail [thumb]='aud' (delete)=\"deleteFromCloudAudios(aud)\" \r\n        (isSelected)=\"selectFromCloudAudios($event)\" [location]=\"'cloud'\"> </app-audio-thumbnail>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <ion-grid *ngSwitchCase=\"'local'\" id=\"device\">\r\n    <ion-row class=\"col-12 add-btn-row\">\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 ion-no-padding\">\r\n        <div class=\"\" (click)=\"selectAudio()\">\r\n          <ion-icon name=\"folder-open-outline\" size=\"small\" class=\"add-btn\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 ion-no-padding\">\r\n        <div class=\"\" (click)=\"recordAudio()\">\r\n          <ion-icon name=\"mic-outline\" size=\"small\" class=\"add-btn\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"image-container-row\">\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 px-1 mt-1\" *ngFor=\"let aud of deviceAudios\">\r\n        <app-audio-thumbnail [thumb]='aud' (delete)=\"deleteFromCloudAudios(aud)\" \r\n       [location]=\"'local'\"> </app-audio-thumbnail>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <ion-button expand=\"block\" class=\"mt-4 mx-2\">\r\n  Post &nbsp; <ion-icon name=\"arrow-forward\"></ion-icon>\r\n</ion-button> -->\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-photo-picker/my-photo-picker.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-photo-picker/my-photo-picker.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsMyPhotoPickerMyPhotoPickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-segment [(ngModel)]=\"galleryType\" color=\"primary\" class=\"pt-2\">\r\n  <ion-segment-button value=\"cloud\">\r\n    <ion-icon class=\"ion-no-margin\" name=\"cloudy-outline\" size=\"small\"></ion-icon>\r\n    <ion-row class=\"fs-10\">M<span class=\"ion-text-lowercase\">y photos</span></ion-row>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"local\">\r\n    <ion-icon class=\"ion-no-margin\" name=\"phone-portrait-outline\" size=\"small\"></ion-icon>\r\n    <ion-row class=\"fs-10\">D<span class=\"ion-text-lowercase\">evice gallery</span></ion-row>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n<div [ngSwitch]=\"galleryType\">\r\n  <ion-grid *ngSwitchCase=\"'cloud'\" id=\"cloud\">\r\n    <ion-row>\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 px-1\" *ngFor=\"let ph of cloudPhotos\">\r\n        <app-photo-thumbnail [thumb]='ph' (delete)=\"deleteFromCloudPhotos(ph)\" \r\n        (isSelected)=\"selectFromCloudPhotos($event)\" [location]=\"'cloud'\"> </app-photo-thumbnail>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngSwitchCase=\"'local'\" id=\"device\">\r\n    <ion-row class=\"col-12 add-btn-row\">\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 ion-no-padding\">\r\n        <div class=\"\" (click)=\"selectPhoto()\">\r\n          <ion-icon name=\"folder-open-outline\" size=\"small\" class=\"add-btn\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 ion-no-padding\">\r\n        <div class=\"\" (click)=\"takePhoto()\">\r\n          <ion-icon name=\"camera-outline\" size=\"small\" class=\"add-btn\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"image-container-row\">\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 px-1\" *ngFor=\"let image of devicePhotos\">\r\n        <app-photo-thumbnail [thumb]='image' (delete)=\"deleteFromDevicePhotos(image)\"  [location]=\"'local'\"> </app-photo-thumbnail>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <ion-button expand=\"block\" class=\"mt-4 mx-2\">\r\n  Post &nbsp; <ion-icon name=\"arrow-forward\"></ion-icon>\r\n</ion-button> -->\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-share/my-share.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-share/my-share.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsMyShareMyShareComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-slider/my-slider.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-slider/my-slider.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsMySliderMySliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding ion-padding-bottom h-100\" >\r\n  <ion-col size=\"12\" class=\"ion-no-padding\"  >\r\n    <!-- Video player -->\r\n    <div id=\"{{sliderId}}\" *ngIf=\"playVideo\" style=\"\r\n        height: auto;\r\n        width: 100%;\r\n        background: #6c757d1c;\r\n        z-index: 3;\" >\r\n      <app-video-player [Items]=\"slideObjects\" [mediaType]=\"mediaType\"></app-video-player>\r\n    </div>\r\n    <!-- Video player ends -->\r\n\r\n    <ion-slides [pager]='slideObjects?.length>1' class=\"ion-no-padding h-100\" [options]=\"slideOptions\" #slideWithNav\r\n      (ionSlideDidChange)=\"SlideDidChange(slider,slideWithNav)\">\r\n      <ion-slide class=\"ion-no-padding h-100\" *ngFor=\"let obj of slideObjects\" >\r\n        <ion-row class=\"ion-no-margin ion-no-padding h-100\" *ngIf=\"!playVideo\">\r\n          <ion-card class=\"card-header-bg\"\r\n            [background-image]=\"getObjPhoto(obj)\"\r\n            style=\"width: 100vw;\">\r\n            <div style=\"position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        background: #6c757d1c;\r\n        z-index: 1;\" (click)=\"play(obj)\"></div>\r\n            <ion-row *ngIf=\"mediaType===1 || mediaType===2\"\r\n              class=\"ion-text-center ion-align-items-center ion-no-padding\" style=\"width: 100%; z-index: 1\">\r\n              <ion-col size=\"3\"></ion-col>\r\n              <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n                  <ion-fab-button color=\"light\" class=\"play-button\" (click)=\"play(obj)\">\r\n                    <ion-icon class=\"white fs-25\" style=\"margin-right: -4px;\" color=\"dark\" name=\"caret-forward-outline\">\r\n                    </ion-icon>\r\n                    <!-- <ion-icon *ngIf=\"mediaType===2\" class=\"white fs-25\" style=\"margin-right: -1px;\" color=\"dark\" name=\"headset\">\r\n                  </ion-icon> -->\r\n                  </ion-fab-button>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"3\"></ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-row>\r\n\r\n\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-col>\r\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-video-picker/my-video-picker.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-video-picker/my-video-picker.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsMyVideoPickerMyVideoPickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-segment [(ngModel)]=\"galleryType\" color=\"primary\" class=\"pt-2\">\r\n  <ion-segment-button value=\"cloud\">\r\n    <ion-icon class=\"ion-no-margin\" name=\"cloudy-outline\" size=\"small\"></ion-icon>\r\n    <ion-row class=\"fs-10\">M<span class=\"ion-text-lowercase\">y videos</span></ion-row>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"local\">\r\n    <ion-icon class=\"ion-no-margin\" name=\"phone-portrait-outline\" size=\"small\"></ion-icon>\r\n    <ion-row class=\"fs-10\">D<span class=\"ion-text-lowercase\">evice gallery</span></ion-row>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n<div [ngSwitch]=\"galleryType\">\r\n  <ion-grid *ngSwitchCase=\"'cloud'\" id=\"cloud\">\r\n    <ion-row>\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 px-1 mb-1\" *ngFor=\"let vid of cloudVideos\">\r\n        <app-video-thumbnail [thumb]='vid' (delete)=\"deleteFromCloudVideos(vid)\" \r\n        (isSelected)=\"selectFromCloudVideos($event)\" [location]=\"'cloud'\"> </app-video-thumbnail>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngSwitchCase=\"'local'\" id=\"device\">\r\n    <ion-row class=\"col-12 add-btn-row\">\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 ion-no-padding\">\r\n        <div class=\"\" (click)=\"selectVideo()\">\r\n          <ion-icon name=\"folder-open-outline\" size=\"small\" class=\"add-btn\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 ion-no-padding\">\r\n        <div class=\"\" (click)=\"recordVideo()\">\r\n          <ion-icon name=\"videocam-outline\" size=\"small\" class=\"add-btn\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"image-container-row\" *ngIf=\"deviceVideos?.length>0\">\r\n      <ion-col class=\"col-6 col-md-4 col-xl-3 px-1 mt-1\" *ngFor=\"let vid of deviceVideos\">\r\n        <app-video-thumbnail [thumb]='vid' (delete)=\"deleteFromCloudVideos(vid)\" \r\n        [location]=\"'local'\"> </app-video-thumbnail>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <ion-button expand=\"block\" class=\"mt-4 mx-2\">\r\n  Post &nbsp; <ion-icon name=\"arrow-forward\"></ion-icon>\r\n</ion-button> -->\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/photo-thumbnail/photo-thumbnail.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/photo-thumbnail/photo-thumbnail.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsPhotoThumbnailPhotoThumbnailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- photo -->\r\n<div #photoThumbnail  class=\"image-container\" [ngClass]=\"{'thumbnail-selected': selected}\"\r\n  [style.background-image]=\"'url(\\''+getThumbnailUrl()+'\\')'\" (click)=\"select()\">\r\n  <ion-button fill=\"outline\" shape=\"round\" color=\"danger\" size=\"small\"\r\n    style=\"--border-width: 0px;float: right;background:transparent\" (click)=\"onDelete()\">\r\n    <ion-icon name=\"close\" (click)=\"onDelete()\"></ion-icon>\r\n  </ion-button>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/popular-schools/popular-schools.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/popular-schools/popular-schools.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsPopularSchoolsPopularSchoolsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  popular-schools works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget1/post-widget1.component.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget1/post-widget1.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsPostWidget1PostWidget1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding ion-padding-bottom\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-align-items-center\">\r\n            <ion-row slot=\"start\" style=\"height:30px\">\r\n                <ion-avatar class=\"ion-padding-end\" style=\"width: 45px;\r\n                height: 30px;\" (click)=\" gotoProfile()\">\r\n                    <img [src]=\"postUserImage\">\r\n                </ion-avatar>\r\n                <ion-note color=\"dark\" class=\"poppins-semi-bold fs-14 \" style=\" margin-top: 5px\">\r\n                    {{postUser?.firstName}}\r\n                </ion-note>\r\n            </ion-row>\r\n            <ion-label slot=\"end\" class=\"fs-10 ion-text-right\"> {{Post?.dateCreated | toEventTime}} </ion-label>\r\n        </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-card class=\" ion-align-items-center\">\r\n            <div style=\"height: 50vh;\" *ngIf=\"objects?.length>0\">\r\n                <app-my-slider [slideObjects]=\"objects\" [mediaType]=\"mediaType\"></app-my-slider>\r\n            </div>\r\n            <ion-row class=\"ion-no-padding\" style=\"margin-top: -105px;\">\r\n                <ion-item lines=\"none\">\r\n                    <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12\"\r\n                        style=\"text-shadow: 0px 0px 3px black !important;color: white;\" *ngIf=\"school\">\r\n                        @{{school?.name}}\r\n                    </ion-note>\r\n                </ion-item>\r\n            </ion-row>\r\n            <ion-card-content class=\"fs-12\" style=\"\r\n            z-index: 1;\r\n            padding-top: 54px;\r\n            padding-bottom: 0;\r\n            padding-left: 1vw;\r\n            padding-right: 1vw;\">\r\n                <ion-row class=\"ion-no-padding ion-no-margin fs-10 mb-2\">\r\n                    <ion-col size=\"6\">\r\n                        <ion-note class=\"w-100 fs-11    \"> {{likes?.length}} likes </ion-note>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\">\r\n                        <ion-note class=\"w-100 fs-11 text-right float-right\"> {{totalComments}} comments </ion-note>\r\n                    </ion-col>\r\n                    <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n                        <ion-col size=\"4\" slot=\"start\"\r\n                            class=\"ion-align-items-start ion-text-start fs-20 ion-no-padding\">\r\n                            <app-like style=\"margin-left: 4vw;\"      [InitiatorId]=\"postUser?.id\" [ReceiverId]=\"Post?.id\" [ReceiverName]=\"'post'\"\r\n                                (reload)=\"getLikes()\"></app-like>\r\n                        </ion-col>\r\n                        <ion-col size=\"4\" class=\"fs-20 ion-no-padding ion-align-items-start text-center\">\r\n                            <ion-icon name=\"chatbubbles-outline\" (click)=\"comment()\"></ion-icon>\r\n                        </ion-col>\r\n                        <ion-col size=\"4\" slot=\"end\" class=\"fs-20 ion-no-padding ion-align-items-start text-center\">\r\n                            <ion-icon name=\"share-social-outline\" style=\"float:right;\" (click)=\"share()\"></ion-icon>\r\n                        </ion-col>\r\n                    </ion-item>\r\n                </ion-row>\r\n\r\n                <ion-note class=\"fs-12\" color=\"dark\">\r\n                    <ion-text>\r\n                        {{Post?.message}}\r\n                    </ion-text>\r\n                </ion-note>\r\n                <ion-row>\r\n                    <ion-note class=\"fs-12 ion-no-padding ion-padding-top\">\r\n                        <ul class=\"tags ion-no-margin ion-no-padding \">\r\n                            <li *ngFor=\"let tag of tags\"> {{ \"#\" + tag }} </li>\r\n                        </ul>\r\n                    </ion-note>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-no-padding\" size=\"12\">\r\n                        <hr style=\"background: #e8e9ed; margin-bottom:0;\">\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"height: 178px\" [ngClass]=\"{'tempHeight': totalComments<1}\">\r\n                    <app-comments [showHeader]=\"false\" [Post]=\"post\" (totalComments)=\"TotalComments = $event\">\r\n                    </app-comments>\r\n                </ion-row>\r\n\r\n\r\n\r\n                <!-- <ion-row class=\"ion-no-padding\">\r\n                    <ion-item lines=\"none\">\r\n                        <ion-input placeholder=\"  Write a comment\"></ion-input>\r\n                        <ion-icon name=\"send-outline\" (click)=\"send()\"></ion-icon>\r\n                    </ion-item>\r\n                </ion-row> -->\r\n            </ion-card-content>\r\n\r\n        </ion-card>\r\n    </ion-col>\r\n</ion-row>\r\n\r\n<app-my-share></app-my-share>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget2/post-widget2.component.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget2/post-widget2.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsPostWidget2PostWidget2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding ion-padding-bottom\">\r\n  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"ion-align-items-center\">\r\n          <ion-row slot=\"start\" style=\"height:30px; margin: 0;\" (click)=\"goToSchool()\">\r\n              <ion-avatar class=\"ion-padding-end\" style=\"width: 45px;\r\n              height: 30px;\">\r\n                  <img src=\"{{getProfilePhotoUrl()}}\">\r\n              </ion-avatar>\r\n              <ion-note color=\"dark\" class=\"poppins-semi-bold fs-14 \" style=\" margin-top: 5px\">\r\n                  {{school?.name}}\r\n              </ion-note>\r\n          </ion-row>\r\n          <ion-label slot=\"end\" class=\"fs-10 ion-text-right ion-no-padding ion-no-margin\"> {{totalAlumni}}+ alumni </ion-label>\r\n      </ion-item>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"12\" class=\"ion-no-padding ion-padding-end ion-padding-start\">\r\n      <ion-card class=\" ion-align-items-center\">\r\n          <!-- <ng-template #singleImg> -->\r\n                  <ion-img src=\"{{getCoverPhotoUrl()}}\"></ion-img>\r\n          <!-- </ng-template> -->\r\n\r\n          <ion-row class=\"ion-no-padding\" style=\"margin-top: -50px;\">\r\n              <ion-item lines=\"none\">\r\n                  <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12\" \r\n                  style=\"text-shadow: 0px 0px 3px black !important;color: white;\" \r\n                  *ngIf=\"school?.alias\">\r\n                      @{{school?.alias}}\r\n                  </ion-note>\r\n              </ion-item>\r\n          </ion-row>\r\n          <ion-card-content class=\"fs-12\" style=\"padding-top: 14px;\r\n          padding-bottom: 19px;\">\r\n              <ion-note class=\"fs-12\" color=\"dark\">\r\n                  <!-- <p class=\"fs-12\" color=\"dark\">\r\n                      <b> Location </b> &nbsp; <b>  </b>\r\n                  </p> -->\r\n                  <ion-text>\r\n                    <span *ngIf=\"school?.address?.city\">#{{school?.address?.city}}</span>\r\n                    <span *ngIf=\"school?.address?.state\">#{{school?.address?.state}}</span>\r\n                    <span *ngIf=\"school?.address?.country\">#{{school?.address?.country}}</span>\r\n                  </ion-text>\r\n              </ion-note>\r\n          </ion-card-content>\r\n\r\n      </ion-card>\r\n  </ion-col>\r\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget3/post-widget3.component.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget3/post-widget3.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsPostWidget3PostWidget3ComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding ion-padding-bottom\">\r\n  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"ion-align-items-center\">\r\n          <ion-row slot=\"start\" style=\"height:30px\">\r\n              <ion-avatar class=\"ion-padding-end\" style=\"width: 45px;\r\n              height: 30px;\">\r\n                  <img src=\"../../../assets/images/me.jpg\">\r\n              </ion-avatar>\r\n              <ion-note color=\"dark\" class=\"poppins-semi-bold fs-14 \" style=\" margin-top: 5px\">Jennifer\r\n              </ion-note>\r\n          </ion-row>\r\n          <!-- <img [src]=\"'../../../assets/images/me.jpg'\"  style=\"width: 35px !important;\r\n          height: 35px !important;\r\n          padding: 5px;\" class=\"round-avatar\"> -->\r\n\r\n          <ion-label slot=\"end\" class=\"fs-10 ion-text-right\">2 seconds ago</ion-label>\r\n      </ion-item>\r\n  </ion-col>\r\n  <ion-col size=\"12\" class=\"ion-no-padding ion-padding-end ion-padding-start\">\r\n      <ion-card class=\" ion-align-items-center\">\r\n          <ion-row class=\"ion-no-padding\" style=\"margin-top: -50px;\">\r\n              <ion-item lines=\"none\">\r\n                  <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12\"\r\n                      style=\"text-shadow: 0px 0px 3px black !important;color: white;\">\r\n                      @Kumasi\r\n                  </ion-note>\r\n                  <ion-row slot=\"end\" class=\"avatar-group ion-align-items-end ion-text-right\">\r\n                      <ion-avatar class=\"avatar-group-img avatar-count-icon\" color=\"secondary\">+2</ion-avatar>\r\n                  </ion-row>\r\n              </ion-item>\r\n          </ion-row>\r\n          <ion-card-content class=\"fs-12\" style=\"z-index: 1000; padding-top: 12px; padding-bottom: 0;\">\r\n              <ion-note class=\"fs-12\">\r\n                  Keep close to Nature's heart... and break clear away, once in awhile,\r\n                  and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n              </ion-note>\r\n              <ion-row>\r\n                  <ion-col class=\"ion-no-padding\" size=\"12\">\r\n                      <hr style=\"background: #e8e9ed;\">\r\n                  </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"ion-no-padding\">\r\n                  <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n                      <ion-row slot=\"start\" class=\"ion-align-items-start ion-text-start fs-25 ion-no-padding\">\r\n                          <ion-icon name=\"heart-outline\"></ion-icon> &nbsp;&nbsp;\r\n                          <ion-icon name=\"share-social-outline\"></ion-icon>\r\n                      </ion-row>\r\n                      <ion-row slot=\"end\" class=\"fs-25 ion-no-padding\">\r\n                          <ion-icon name=\"bookmark-outline\" style=\"margin-right: -20px;\"></ion-icon>\r\n                      </ion-row>\r\n                  </ion-item>\r\n              </ion-row>\r\n          </ion-card-content>\r\n\r\n      </ion-card>\r\n  </ion-col>\r\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-card/school-card.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-card/school-card.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsSchoolCardSchoolCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding ion-padding-bottom\">\r\n  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"ion-align-items-center\">\r\n          <ion-row slot=\"start\" style=\"height:30px; margin: 0;\" (click)=\"goToSchool()\">\r\n              <ion-avatar class=\"ion-padding-end\" style=\"width: 45px;\r\n              height: 30px;\">\r\n                  <img src=\"{{getProfilePhotoUrl()}}\">\r\n              </ion-avatar>\r\n              <ion-note color=\"dark\" class=\"poppins-semi-bold fs-14 \" style=\" margin-top: 5px\">\r\n                  {{school?.name}}\r\n              </ion-note>\r\n          </ion-row>\r\n          <ion-label slot=\"end\" class=\"fs-10 ion-text-right ion-no-padding ion-no-margin\"> {{totalAlumni}}+ alumni </ion-label>\r\n      </ion-item>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"12\" class=\"ion-no-padding ion-padding-end ion-padding-start\">\r\n      <ion-card class=\" ion-align-items-center\">\r\n          <!-- <ng-template #singleImg> -->\r\n                  <ion-img src=\"{{getCoverPhotoUrl()}}\"></ion-img>\r\n          <!-- </ng-template> -->\r\n\r\n          <ion-row class=\"ion-no-padding\" style=\"margin-top: -50px;\">\r\n              <ion-item lines=\"none\">\r\n                  <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12\" \r\n                  style=\"text-shadow: 0px 0px 3px black !important;color: white;\" \r\n                  *ngIf=\"school?.alias\">\r\n                      @{{school?.alias}}\r\n                  </ion-note>\r\n              </ion-item>\r\n          </ion-row>\r\n          <ion-card-content class=\"fs-12\" style=\"padding-top: 14px;\r\n          padding-bottom: 19px;\">\r\n              <ion-note class=\"fs-12\" color=\"dark\">\r\n                  <!-- <p class=\"fs-12\" color=\"dark\">\r\n                      <b> Location </b> &nbsp; <b>  </b>\r\n                  </p> -->\r\n                  <ion-text>\r\n                    <span *ngIf=\"school?.address?.city\">#{{school?.address?.city}}</span>\r\n                    <span *ngIf=\"school?.address?.state\">#{{school?.address?.state}}</span>\r\n                    <span *ngIf=\"school?.address?.country\">#{{school?.address?.country}}</span>\r\n                  </ion-text>\r\n              </ion-note>\r\n          </ion-card-content>\r\n\r\n      </ion-card>\r\n  </ion-col>\r\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-join/school-join.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-join/school-join.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsSchoolJoinSchoolJoinComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-row class=\"top-row-header ion-no-padding \" style=\"box-shadow: 0px 2px 4px -4px;\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n        <ion-row class=\"ion-row\" (click)=\"closeModals()\">\r\n          <ion-icon class=\"fs-25\" [src]=\"'../../../assets/icon/round-arrow_back.svg'\"></ion-icon>&nbsp;&nbsp;\r\n          <ion-note class=\"poppins-medium fs-12\" color=\"black \" style=\"margin-top: 4px;\">{{previousPage}}</ion-note>\r\n        </ion-row>\r\n        <!-- <ion-button slot=\"end\" fill=\"outline\" shape=\"round\" color=\"danger\"  size=\"small\"\r\n          style=\"--border-width: 0px;float: right;\">\r\n          <ion-icon name=\"close\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n  <!-- Top correction -->\r\n  <ion-row class=\"ion-content-top_correction\">\r\n  </ion-row>\r\n  <!-- Top correction ends -->\r\n\r\n  <!-- Main body content -->\r\n  <ion-row class=\"ion-padding-start ion-padding-end ion-activatable ripple-parent\">\r\n    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n    <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"padding-top: 7px;\r\n      padding-bottom: 7px;border-bottom: thin dotted lightgray;\" [routerLink]=\"['/links/schools-search']\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <ion-note class=\"poppins-bold fs-13 ion-padding-top ion-padding-bottom\" color=\"dark\">\r\n        Become alumni of {{school?.name}}<br>\r\n        <ion-label class=\"hind-regular fs-12\">{{alumniCount}}+ alumni already</ion-label>\r\n      </ion-note>\r\n      <ion-avatar slot=\"end\"><img src=\"{{getProfilePhotoUrl()}}\"></ion-avatar>\r\n    </ion-item>\r\n  </ion-row>\r\n\r\n  <form [formGroup]=\"aluForm\">\r\n    <ion-row class=\"ion-no-padding ion-no-margin ion-text-left\">\r\n      <!-- <ion-col size=\"12\">\r\n        <ion-note class=\"poppins-bold fs-14\" color=\"dark\">Date of enrollment into {{school?.name}}?</ion-note>\r\n        <ion-datetime value=\"\" formControlName=\"yearStarted\" placeholder=\"09/12/2021\"  displayFormat=\"YYYY MM\">\r\n        </ion-datetime>\r\n      </ion-col> -->\r\n      <ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin poppins-bold fs-13\">\r\n        <ion-datetime lot=\"start\" value=\"\" formControlName=\"yearStarted\" placeholder=\"When did you start?*\"\r\n          displayFormat=\"YYYY MM\"></ion-datetime>\r\n        <ion-icon slot=\"end\" size=\"small\" name=\"calendar-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin poppins-bold fs-13\">\r\n        <ion-datetime slot=\"start\" value=\"\" formControlName=\"yearCompleted\" placeholder=\"When did/will you graduate?*\"\r\n          displayFormat=\"YYYY MM\"></ion-datetime>\r\n        <ion-icon slot=\"end\" size=\"small\" name=\"calendar-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-col size=\"12\"></ion-col>\r\n      <ion-item-group class=\"ion-no-padding  ion-no-margin ion-margin-start poppins-bold fs-13\"\r\n      style=\"width: 94% !important;\">\r\n        <ion-item-divider>\r\n          <ion-label color=\"dark\">Optional</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin poppins-bold fs-13\">\r\n          <ion-input class=\"input-w-icon\" formControlName=\"schoolIndexNumber\"\r\n            placeholder=\"Your school ID or INDEX NUMBER\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\" ion-no-padding ion-no-margin poppins-bold fs-13\">\r\n          <ion-label class=\"input-w-icon\">Certificate or degree (to be) earned</ion-label>\r\n          <ion-select class=\"input-w-icon\" value=\"\" okText=\"Ok\" cancelText=\"Cancel\" formControlName=\"degreeType\">\r\n            <ion-select-option *ngFor=\"let degree of degreeTypes\" value=\"{{degree}}\">{{degree}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"ion-no-padding  ion-no-margin poppins-bold fs-13\">\r\n          <ion-input class=\"input-w-icon\" formControlName=\"degreeName\"\r\n            placeholder=\"Enter the certificate or degree name if apply\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"ion-no-padding  ion-no-margin poppins-bold fs-13\">\r\n          <ion-input class=\"input-w-icon\" formControlName=\"degreeProgramme\"\r\n            placeholder=\"Your course of study if apply\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"ion-no-padding  ion-no-margin poppins-bold fs-13\">\r\n          <ion-input class=\"input-w-icon\" formControlName=\"degreeCgpa\" placeholder=\"Your aggregate or CGPA if any\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-item-group>\r\n    </ion-row>\r\n    <ion-row style=\"margin-top: 2vh;\">\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"5\">\r\n        <ion-button shape=\"round\" color=\"tertiary\" class=\"fs-13 \" (click)=\"save()\">S<span\r\n            class=\"ion-text-lowercase\">ave</span></ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"5\">\r\n        <ion-button shape=\"round\" color=\"medium\"  class=\"fs-16 \" (click)=\"cancel()\"><span\r\n            class=\"ion-text-lowercase\">X</span></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <!-- 0596750590 -->\r\n\r\n  <!-- Main body content ends -->\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-list-item/school-list-item.component.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-list-item/school-list-item.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsSchoolListItemSchoolListItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding ion-no-margin ion-activatable ripple-parent\" width=\"100%\">\r\n  <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n  <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"padding-top: 7px;\r\n      padding-bottom: 7px;border-bottom: thin dotted lightgray;\">\r\n    <ion-thumbnail class=\"ion-no-padding br-10\" slot=\"start\"  (click)=\"view(school)\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <img src=\"{{profilePhotoUrl}}\">\r\n    </ion-thumbnail>\r\n    <ion-note class=\"poppins-bold fs-12 ion-padding-top ion-padding-bottom\" color=\"dark\" (click)=\"view(school)\">\r\n      {{school?.name}}<br>\r\n      <ion-label class=\"hind-regular fs-12\">{{totalAlumni}} alumni</ion-label>\r\n    </ion-note>\r\n    <!-- <ion-button slot=\"end\" shape=\"round\" fill=\"outline\" color='danger' class=\"poppins-bold fs-13\" style=\"--border-width: 2px;\">R<span\r\n          class=\"ion-text-lowercase\">emove</span></ion-button> -->\r\n    <ion-icon slot=\"end\" name='trash-outline' color=\"danger\" *ngIf=\"isEdit\"\r\n      class=\"animate__animated animate__fadeInRight\" (click)=\"leaveSchool(school)\"></ion-icon>\r\n    <ion-icon slot=\"end\" name='chevron-forward-outline' *ngIf=\"!isEdit\" class=\"animate__animated animate__fadeInRight\">\r\n    </ion-icon>\r\n  </ion-item>\r\n</ion-row> ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/trending/trending.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/trending/trending.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsTrendingTrendingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row>\r\n  <ion-col>\r\n    <ion-item lines=\"none\" class=\"fs-12 poppins-bold ion-no-padding ion-text-nowrap\">\r\n      Trending schools &nbsp;&nbsp;\r\n      <ion-icon class=\"fs-14\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-col>\r\n\r\n</ion-row>\r\n<ion-row class=\"ion-no-padding ion-padding-bottom\">\r\n  <ion-col size=\"12\" class=\"ion-no-padding\">\r\n    <ion-slides class=\"ion-no-padding\" [options]=\"slideOptions\" #slideWithNav\r\n      (ionSlideDidChange)=\"SlideDidChange(slider,slideWithNav)\">\r\n      <ion-slide class=\"ion-no-padding\">\r\n        <ion-card class=\"card-header-bg \" style=\"background-image: url('../../../assets/images/car.jpg'); \">\r\n          <ion-row class=\"ion-no-padding\">\r\n            <ion-item lines=\"none\">\r\n              <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12 text-shadow ion-color-light\">\r\n                # Opoku ware school\r\n              </ion-note>\r\n            </ion-item>\r\n          </ion-row>\r\n          <ion-row class=\"ion-no-padding ion-padding-start\">\r\n            <ion-label class=\"fs-10 text-shadow ion-color-light\" color=\"white\">\r\n              1,400 alumni last week\r\n            </ion-label>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-slide>\r\n      \r\n      <ion-slide>\r\n        <ion-card class=\"card-header-bg\" style=\"background-image: url('../../../assets/images/me.jpg'); \">\r\n            <ion-row class=\"ion-no-padding\">\r\n              <ion-item lines=\"none\">\r\n                <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12 text-shadow ion-color-light\">\r\n                  # Opoku ware school\r\n                </ion-note>\r\n              </ion-item>\r\n            </ion-row>\r\n            <ion-row class=\"ion-no-padding ion-padding-start\">\r\n              <ion-label class=\"fs-10 text-shadow ion-color-light\" color=\"white\">\r\n                1,400 alumni last week\r\n              </ion-label>\r\n            </ion-row>\r\n        </ion-card>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <ion-card class=\"card-header-bg\" style=\"background-image: url('../../../assets/images/car.jpg'); \">\r\n            <ion-row class=\"ion-no-padding\">\r\n              <ion-item lines=\"none\">\r\n                <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12 ion-color-light\">\r\n                  # Opoku ware school\r\n                </ion-note>\r\n              </ion-item>\r\n            </ion-row>\r\n            <ion-row class=\"ion-no-padding ion-padding-start\">\r\n              <ion-label class=\"fs-10 ion-color-light\" color=\"white\">\r\n                1,400 alumni last week\r\n              </ion-label>\r\n            </ion-row>\r\n        </ion-card>\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        <ion-card class=\"card-header-bg\" style=\"background-image: url('../../../assets/images/me.jpg');\">\r\n            <ion-row class=\"ion-no-padding\">\r\n              <ion-item lines=\"none\">\r\n                <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12 text-shadow ion-color-light\">\r\n                  # Opoku ware school\r\n                </ion-note>\r\n              </ion-item>\r\n            </ion-row>\r\n            <ion-row class=\"ion-no-padding ion-padding-start\">\r\n              <ion-label class=\"fs-10 text-shadow ion-color-light\" color=\"white\">\r\n                1,400 alumni last week\r\n              </ion-label>\r\n            </ion-row>\r\n          </ion-card>\r\n      </ion-slide>\r\n\r\n    </ion-slides>\r\n  </ion-col>\r\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/user-card/user-card.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/user-card/user-card.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsUserCardUserCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding ion-padding-bottom\">\r\n    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-align-items-center\">\r\n            <ion-row slot=\"start\" style=\"height:30px; margin: 0;\" (click)=\"goToSchool()\">\r\n                <ion-avatar class=\"ion-padding-end\" style=\"width: 45px;\r\n              height: 30px;\">\r\n                    <img src=\"{{getProfilePhotoUrl()}}\">\r\n                </ion-avatar>\r\n                <ion-note color=\"dark\" class=\"poppins-semi-bold fs-14 \" style=\" margin-top: 5px\">\r\n                    {{ user?.firstName }} {{ user?.otherName}} {{ user?.lastName }}\r\n                </ion-note>\r\n            </ion-row>\r\n            <ion-label slot=\"end\" class=\"fs-10 ion-text-right ion-no-padding ion-no-margin\">\r\n                {{alumni?.yearStarted | date}}\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" class=\"ion-no-padding ion-padding-end ion-padding-start\">\r\n        <ion-card class=\" ion-align-items-center\">\r\n            <!-- <ng-template #singleImg> -->\r\n            <ion-img src=\"{{getCoverPhotoUrl()||'../../../assets/images/me.jpg'}} \"></ion-img>\r\n            <!-- </ng-template> -->\r\n\r\n            <ion-row class=\"ion-no-padding\" style=\"margin-top: -50px;\">\r\n                <ion-item lines=\"none\">\r\n                    <ion-note slot=\"start\" color=\"white\" class=\"poppins-bold fs-12\"\r\n                        style=\"text-shadow: 0px 0px 3px black !important;color: white;\" *ngIf=\"alumni?.degree\">\r\n                        @{{alumni?.degree?.type}} {{alumni?.degree?.programme}}\r\n                    </ion-note>\r\n                </ion-item>\r\n            </ion-row>\r\n            <ion-card-content class=\"fs-12\" style=\"padding-top: 14px;\r\n          padding-bottom: 19px;\">\r\n                <ion-note class=\"fs-12\" color=\"dark\">\r\n                    <!-- <p class=\"fs-12\" color=\"dark\">\r\n                      <b> Location </b> &nbsp; <b>  </b>\r\n                  </p> -->\r\n                    <ion-text>\r\n                        <span *ngIf=\"user?.address?.city\">#{{user?.address?.city}}</span>\r\n                        <span *ngIf=\"user?.address?.state\">#{{user?.address?.state}}</span>\r\n                        <span *ngIf=\"user?.address?.country\">#{{user?.address?.country}}</span>\r\n                    </ion-text>\r\n                </ion-note>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-col>\r\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/user-list-item/user-list-item.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/user-list-item/user-list-item.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsUserListItemUserListItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"ion-no-padding ion-no-margin ion-activatable ripple-parent\" width=\"100%\">\r\n  <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n  <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"padding-top: 7px;\r\n      padding-bottom: 7px;border-bottom: thin dotted lightgray;\">\r\n    <ion-thumbnail class=\"ion-no-padding br-10\" slot=\"start\" [routerLink]=\"['/links/school-profile']\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <img src=\"{{profilePhotoUrl}}\">\r\n    </ion-thumbnail>\r\n    <ion-note class=\"poppins-bold fs-12 ion-padding-top ion-padding-bottom\" color=\"dark\" (click)=\"view()\">\r\n      {{ user?.firstName }} {{ user?.otherName}} {{ user?.lastName }}<br>\r\n      <ion-label class=\"hind-regular fs-11\">\r\n          <span *ngIf=\"user?.address?.city\">#{{user?.address?.city}}</span>\r\n          <span *ngIf=\"user?.address?.state\">#{{user?.address?.state}}</span>\r\n          <span *ngIf=\"user?.address?.country\">#{{user?.address?.country}}</span>\r\n      </ion-label>\r\n    </ion-note>\r\n    <!-- <ion-button slot=\"end\" shape=\"round\" fill=\"outline\" color='danger' class=\"poppins-bold fs-13\" style=\"--border-width: 2px;\">R<span\r\n          class=\"ion-text-lowercase\">emove</span></ion-button> -->\r\n    <!-- <ion-icon slot=\"end\" name='trash-outline' color=\"danger\" *ngIf=\"isEdit\"\r\n      class=\"animate__animated animate__fadeInRight\" (click)=\"unfriend()\"></ion-icon>\r\n    <ion-icon slot=\"end\" name='chevron-forward-outline' *ngIf=\"!isEdit\" class=\"animate__animated animate__fadeInRight\">\r\n    </ion-icon> -->\r\n  </ion-item>\r\n</ion-row> ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/video-player/video-player.component.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/video-player/video-player.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsVideoPlayerVideoPlayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"video-player-wrapper\" *ngIf=\"items?.length>0\">\r\n\r\n  <vg-player (onPlayerReady)=\"videoPlayerInit($event)\" style=\"max-height: 50vh !important\">\r\n    <vg-overlay-play></vg-overlay-play>\r\n    <vg-buffering></vg-buffering>\r\n\r\n    <vg-scrub-bar>\r\n      <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r\n      <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n    </vg-scrub-bar>\r\n\r\n    <vg-controls>\r\n      <vg-play-pause></vg-play-pause>\r\n      <vg-playback-button></vg-playback-button>\r\n\r\n      <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n      <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n      <vg-mute></vg-mute>\r\n      <vg-volume></vg-volume>\r\n\r\n      <vg-fullscreen></vg-fullscreen>  \r\n    </vg-controls>\r\n\r\n    <video #media [vgMedia]=\"media\"  id=\"singleVideo\" preload=\"auto\" crossorigin>\r\n      <source [src]=\"currentVideo?.src\" [type]=\"currentVideo?.type\">\r\n    </video>\r\n  </vg-player>\r\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" style=\"z-index: 2;background: #000000bf;\" *ngIf=\"items?.length>1\">\r\n    <ion-slide *ngFor=\"let item of items; let i = index;\">\r\n      <div class=\"ion-no-padding ion-no-margin image-container \" style=\"height: 100%; width: 100%\"\r\n        [background-image]=\"itemPhotos[i]\" [style.background-color]=\"'ffffff5c'\"\r\n         (click)=\"startPlaylistVdo(i)\">\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/video-thumbnail/video-thumbnail.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/video-thumbnail/video-thumbnail.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWidgetsVideoThumbnailVideoThumbnailComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Video -->\r\n<ion-row  class=\"ion-no-padding ion-no-margin image-container \" #videoThumbnail \r\n [style.background-color]=\"'ffffff5c'\" [ngClass]=\"{'thumbnail-selected': selected}\"\r\n  (click)=\"select()\">\r\n  <ion-img [src]=\"getThumbnailUrl()\" style=\"height: 91%;\r\n  background: #495057;\r\n  position: absolute;\r\n  width: 91%;\"  > \r\n  </ion-img>\r\n  <!-- <ion-button fill=\"outline\" shape=\"round\" color=\"light\" size=\"small\"\r\n   class=\"thumbnailPlay\"  >\r\n    <ion-icon name=\"play-outline\"></ion-icon>\r\n  </ion-button> -->\r\n  <ion-button fill=\"outline\" shape=\"round\" color=\"danger\" size=\"small\" \r\n  (click)=\"onDelete()\" class=\"thumbnailClose\">\r\n    <ion-icon name=\"close\" (click)=\"onDelete()\"></ion-icon>\r\n  </ion-button>\r\n  <ion-row class=\"ion-text-center ion-align-items-center ion-no-padding\" style=\"width: 100%;\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"8\" class=\"ion-no-padding\">\r\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n        <ion-fab-button color=\"light\" class=\"play-button\"(click)=\"preview()\">\r\n          <ion-icon class=\"white fs-25\" style=\"margin-right: -4px;\" color=\"dark\" \r\n            name=\"caret-forward-outline\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"2\"></ion-col>\r\n  </ion-row>\r\n</ion-row>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_services_providers_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/services/providers/authentication/auth-guard.service */
      "./src/app/shared/services/providers/authentication/auth-guard.service.ts");
      /* harmony import */


      var _shared_services_providers_authentication_screen_lock_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/services/providers/authentication/screen-lock-guard.service */
      "./src/app/shared/services/providers/authentication/screen-lock-guard.service.ts");

      var routes = [// {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full'
      // },
      {
        path: 'login',
        loadChildren: './public/login/login.module#LoginPageModule'
      }, {
        path: 'register',
        loadChildren: './public/register/register.module#RegisterPageModule'
      }, {
        path: 'forgot-password',
        loadChildren: './public/forgot-password/forgot-password.module#ForgotPasswordPageModule'
      }, {
        path: 'tutorial',
        loadChildren: './public/tutorial/tutorial.module#TutorialModule'
      }, {
        path: 'login-unauth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | public-login-preview-un-auth-login-preview-un-auth-module */
          "public-login-preview-un-auth-login-preview-un-auth-module").then(__webpack_require__.bind(null,
          /*! ./public/login-preview-un-auth/login-preview-un-auth.module */
          "./src/app/public/login-preview-un-auth/login-preview-un-auth.module.ts")).then(function (m) {
            return m.LoginPreviewUnAuthPageModule;
          });
        }
      }, {
        canActivate: [_shared_services_providers_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"], _shared_services_providers_authentication_screen_lock_guard_service__WEBPACK_IMPORTED_MODULE_5__["ScreenLockGuardService"]],
        canActivateChild: [_shared_services_providers_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        path: 'login-auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | public-login-preview-auth-login-preview-auth-module */
          "public-login-preview-auth-login-preview-auth-module").then(__webpack_require__.bind(null,
          /*! ./public/login-preview-auth/login-preview-auth.module */
          "./src/app/public/login-preview-auth/login-preview-auth.module.ts")).then(function (m) {
            return m.LoginPreviewAuthPageModule;
          });
        }
      }, {
        canActivate: [_shared_services_providers_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"], _shared_services_providers_authentication_screen_lock_guard_service__WEBPACK_IMPORTED_MODULE_5__["ScreenLockGuardService"]],
        canActivateChild: [_shared_services_providers_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        path: 'phone-number',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | public-phone-number-phone-number-module */
          "public-phone-number-phone-number-module").then(__webpack_require__.bind(null,
          /*! ./public/phone-number/phone-number.module */
          "./src/app/public/phone-number/phone-number.module.ts")).then(function (m) {
            return m.PhoneNumberPageModule;
          });
        }
      }, {
        path: 'privacy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | public-privacy-privacy-module */
          "public-privacy-privacy-module").then(__webpack_require__.bind(null,
          /*! ./public/privacy/privacy.module */
          "./src/app/public/privacy/privacy.module.ts")).then(function (m) {
            return m.PrivacyModule;
          });
        }
      }, {
        canActivate: [_shared_services_providers_authentication_screen_lock_guard_service__WEBPACK_IMPORTED_MODULE_5__["ScreenLockGuardService"]],
        path: 'terms-of-service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | public-terms-of-service-terms-of-service-module */
          "public-terms-of-service-terms-of-service-module").then(__webpack_require__.bind(null,
          /*! ./public/terms-of-service/terms-of-service.module */
          "./src/app/public/terms-of-service/terms-of-service.module.ts")).then(function (m) {
            return m.TermsOfServiceModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | public-about-about-module */
          "public-about-about-module").then(__webpack_require__.bind(null,
          /*! ./public/about/about.module */
          "./src/app/public/about/about.module.ts")).then(function (m) {
            return m.AboutModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: './public/home/home.module#HomePageModule'
      }, // {
      //   canActivate: [AuthGuardService, ScreenLockGuardService],
      //   canActivateChild: [AuthGuardService],
      //   path: 'profile',
      //   loadChildren: () => import('./members/profile/profile.module').then( m => m.ProfilePageModule)
      // },
      {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | members-tab-links-tab-links-module */
          "members-tab-links-tab-links-module").then(__webpack_require__.bind(null,
          /*! ./members/tab-links/tab-links.module */
          "./src/app/members/tab-links/tab-links.module.ts")).then(function (m) {
            return m.TabLinksPageModule;
          });
        }
      }, // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full'
      // },
      // {
      //   canActivate: [AuthGuardService, ScreenLockGuardService],
      //   canActivateChild: [AuthGuardService],
      //   path: 'profile',
      //   loadChildren: () => import('./members/profile/profile.module').then( m => m.ProfilePageModule)
      // },
      {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | members-tab-links-tab-links-module */
          "members-tab-links-tab-links-module").then(__webpack_require__.bind(null,
          /*! ./members/tab-links/tab-links.module */
          "./src/app/members/tab-links/tab-links.module.ts")).then(function (m) {
            return m.TabLinksPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICM2MTZlN2U7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM3Mzg0OWE7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/services/providers/navigation/browser-history.service */
      "./src/app/shared/services/providers/navigation/browser-history.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var _shared_services_providers_permission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/services/providers/permission.service */
      "./src/app/shared/services/providers/permission.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, userService, history, store, permissions, signals, cdr) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.userService = userService;
          this.history = history;
          this.store = store;
          this.permissions = permissions;
          this.signals = signals;
          this.cdr = cdr;
          this.selectedIndex = 0;
          this.logs = [];
          this.appPages = [{
            title: 'Profile',
            url: '/links/profile',
            icon: 'person',
            params: {
              user: true
            }
          }, {
            title: 'Schools',
            url: '/links/my-schools',
            icon: 'school',
            params: {}
          }, {
            title: 'Timeline',
            url: '/links/timeline',
            icon: 'stopwatch',
            params: {}
          }, // {
          //   title: 'Find class mate',
          //   url: '/links/users-search',
          //   icon: 'people',
          //   params: {}
          // },
          {
            title: 'Find your way',
            url: '/links/schools-location',
            icon: 'trail-sign',
            params: {}
          }];
          this.publicPages = [{
            title: 'Home',
            url: '/links/home',
            icon: 'home',
            params: {}
          }, {
            title: 'Find your way',
            url: '/links/schools-location',
            icon: 'trail-sign',
            params: {}
          }, {
            title: 'Find year mate',
            url: '/links/users-search',
            icon: 'people',
            params: {}
          }, {
            title: 'Login',
            url: '/login',
            icon: 'person-circle',
            params: {}
          }, {
            title: 'Sign up',
            url: '/register',
            icon: 'person-add',
            params: {}
          }];
          this.otherPages = _toConsumableArray(this.publicPages);
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.history.loadRouting(); // tracking browsing history


              _this.statusBar.styleDefault();

              _this.splashScreen.hide();

              _this.permissions.initPermissions().then(function (_) {
                return _;
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var path = window.location.pathname.split('folder/')[1];

            if (path !== undefined) {
              this.selectedIndex = this.appPages.findIndex(function (page) {
                return page.title.toLowerCase() === path.toLowerCase();
              });
            }

            this.userService.userAuthenticatedSource$.subscribe(function (user) {
              _this2.setMenu();
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            setTimeout(function () {
              _this3.setMenu();

              _this3.cdr.detectChanges(); // console.log(this.otherPages);

            }, 100);
          }
        }, {
          key: "checkAuthentication",
          value: function checkAuthentication() {
            return this.userService.isAuthenticated();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {}
        }, {
          key: "setMenu",
          value: function setMenu(user) {
            var _this4 = this;

            this.store.getObject('user').then(function (localUser) {
              if (user || localUser) {
                _this4.otherPages = [{
                  title: 'Settings',
                  url: '/links/settings',
                  icon: 'cog',
                  params: {}
                }, {
                  title: 'Log out',
                  url: '/login',
                  icon: 'log-out',
                  params: {
                    clear: true
                  }
                }];
                _this4.user = user !== null && user !== void 0 ? user : localUser;
              } else {
                _this4.otherPages = _toConsumableArray(_this4.publicPages);
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }, {
          type: _shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_3__["BrowserHistoryService"]
        }, {
          type: src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_2__["MyStorage"]
        }, {
          type: _shared_services_providers_permission_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/photo-library/ngx */
      "./node_modules/@ionic-native/photo-library/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./widgets/widgets.module */
      "./src/app/widgets/widgets.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
      /* harmony import */


      var _shared_services_my_interceptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/services/my-interceptors */
      "./src/app/shared/services/my-interceptors.ts");
      /* harmony import */


      var _shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/services/providers/navigation/browser-history.service */
      "./src/app/shared/services/providers/navigation/browser-history.service.ts");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/streaming-media/ngx */
      "./node_modules/@ionic-native/streaming-media/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic-native/file-picker/ngx */
      "./node_modules/@ionic-native/file-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @ionic-native/video-editor/ngx */
      "./node_modules/@ionic-native/video-editor/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      "./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-core.js");
      /* harmony import */


      var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @videogular/ngx-videogular/controls */
      "./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-controls.js");
      /* harmony import */


      var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @videogular/ngx-videogular/overlay-play */
      "./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-overlay-play.js");
      /* harmony import */


      var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @videogular/ngx-videogular/buffering */
      "./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-buffering.js");
      /* harmony import */


      var _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @thisissoon/angular-inviewport */
      "./node_modules/@thisissoon/angular-inviewport/__ivy_ngcc__/fesm2015/thisissoon-angular-inviewport.js");
      /* harmony import */


      var _shared_directives_double_tap_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./shared/directives/double-tap.directive */
      "./src/app/shared/directives/double-tap.directive.ts");
      /* harmony import */


      var _shared_services_providers_customHammerConfig__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./shared/services/providers/customHammerConfig */
      "./src/app/shared/services/providers/customHammerConfig.ts");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @ctrl/ngx-emoji-mart */
      "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm2015/ctrl-ngx-emoji-mart.js");
      /* harmony import */


      var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @ctrl/ngx-emoji-mart/ngx-emoji */
      "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm2015/ctrl-ngx-emoji-mart-ngx-emoji.js");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js"); // Android only
      // IOS only


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _shared_directives_double_tap_directive__WEBPACK_IMPORTED_MODULE_37__["DoubleTapDirective"]],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["IonicStorageModule"].forRoot({
          name: '_Fdb',
          driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
        }), ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_16__["NgxIonicImageViewerModule"], _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_2__["WidgetsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_36__["InViewportModule"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_40__["PickerModule"], _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_41__["EmojiModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], Storage, _shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_18__["BrowserHistoryService"], _shared_services_my_interceptors__WEBPACK_IMPORTED_MODULE_17__["httpInterceptorProviders"], _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_1__["PhotoLibrary"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_20__["FilePath"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_21__["ImagePicker"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_22__["PhotoViewer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_23__["MediaCapture"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_24__["Media"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_25__["StreamingMedia"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_26__["AndroidPermissions"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_27__["FileTransfer"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_28__["FileChooser"], _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_29__["IOSFilePicker"], _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_30__["VideoEditor"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_31__["PreviewAnyFile"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_32__["VgCoreModule"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_33__["VgControlsModule"], _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_34__["VgOverlayPlayModule"], _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_35__["VgBufferingModule"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_39__["SocialSharing"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_42__["Keyboard"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }, {
          provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HAMMER_GESTURE_CONFIG"],
          useClass: _shared_services_providers_customHammerConfig__WEBPACK_IMPORTED_MODULE_38__["IonicGestureConfig"]
        }],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/models/address.ts":
    /*!***********************************!*\
      !*** ./src/app/models/address.ts ***!
      \***********************************/

    /*! exports provided: Address */

    /***/
    function srcAppModelsAddressTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Address", function () {
        return Address;
      });

      var Address =
      /**
       *
       */
      function Address(address) {
        _classCallCheck(this, Address);

        this.address = address;
        Object.assign(this, address);
      };
      /***/

    },

    /***/
    "./src/app/models/alumni.ts":
    /*!**********************************!*\
      !*** ./src/app/models/alumni.ts ***!
      \**********************************/

    /*! exports provided: PROGRAMME, Alumni */

    /***/
    function srcAppModelsAlumniTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PROGRAMME", function () {
        return PROGRAMME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Alumni", function () {
        return Alumni;
      });

      var PROGRAMME = ['Computer Engineering', 'Computer Science'];

      var Alumni = /*#__PURE__*/function () {
        function Alumni(data) {
          _classCallCheck(this, Alumni);

          this.data = data;

          if (this.data) {
            this.id = data.id;
            this.userId = data.userId;
            this.schoolId = data.schoolId;
            this.yearCompleted = data.yearCompleted;
            this.yearStarted = data.yearStarted;
            this.schoolIndexNumber = data.schoolIndexNumber;
            this._degreeEarned = data.degree;
          }
        }

        _createClass(Alumni, [{
          key: "degree",
          get: function get() {
            return this._degreeEarned;
          },
          set: function set(degree) {
            this._degreeEarned = degree;
          }
        }, {
          key: "user",
          get: function get() {
            return this._user;
          },
          set: function set(user) {
            this._user = user;
            this.userId = user === null || user === void 0 ? void 0 : user.id;
          }
        }, {
          key: "school",
          get: function get() {
            return this._school;
          },
          set: function set(school) {
            this._school = school;
            this.schoolId = school === null || school === void 0 ? void 0 : school.id;
          }
        }, {
          key: "info",
          get: function get() {
            return {
              id: this.id,
              userId: this.userId,
              schoolId: this.schoolId,
              yearStarted: this.yearStarted,
              yearCompleted: this.yearCompleted,
              schoolIndexNumber: this.schoolIndexNumber
            };
          },
          set: function set(info) {
            this.id = info.id;
            this.userId = info.userId;
            this.schoolId = info.schoolId;
            this.yearStarted = info.yearStarted;
            this.yearCompleted = info.yearCompleted;
            this.schoolIndexNumber = info.schoolIndexNumber;
          }
        }]);

        return Alumni;
      }();
      /***/

    },

    /***/
    "./src/app/models/comment.ts":
    /*!***********************************!*\
      !*** ./src/app/models/comment.ts ***!
      \***********************************/

    /*! exports provided: Comment */

    /***/
    function srcAppModelsCommentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Comment", function () {
        return Comment;
      });

      var Comment = function Comment(data) {
        _classCallCheck(this, Comment);

        Object.assign(this, data);
      };
      /***/

    },

    /***/
    "./src/app/models/degree.ts":
    /*!**********************************!*\
      !*** ./src/app/models/degree.ts ***!
      \**********************************/

    /*! exports provided: DEGREE_TYPES, DegreeType, Degree */

    /***/
    function srcAppModelsDegreeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEGREE_TYPES", function () {
        return DEGREE_TYPES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DegreeType", function () {
        return DegreeType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Degree", function () {
        return Degree;
      });

      var DEGREE_TYPES = ['PhD', 'MSc', 'BSc', 'Deploma', 'Certificate'];
      var DegreeType;

      (function (DegreeType) {
        DegreeType["PHD"] = "PhD";
        DegreeType["MSC"] = "MSc";
        DegreeType["BSC"] = "BSc";
        DegreeType["DEPLOMA"] = "Deploma";
        DegreeType["CERTIFICATE"] = "Certificate";
      })(DegreeType || (DegreeType = {}));

      var Degree = function Degree(data) {
        _classCallCheck(this, Degree);

        this.data = data;
        Object.assign(this, data);
      };
      /***/

    },

    /***/
    "./src/app/models/follow.ts":
    /*!**********************************!*\
      !*** ./src/app/models/follow.ts ***!
      \**********************************/

    /*! exports provided: Follow */

    /***/
    function srcAppModelsFollowTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Follow", function () {
        return Follow;
      });

      var Follow = function Follow(data) {
        _classCallCheck(this, Follow);

        Object.assign(this, data);
      };
      /***/

    },

    /***/
    "./src/app/models/like.ts":
    /*!********************************!*\
      !*** ./src/app/models/like.ts ***!
      \********************************/

    /*! exports provided: Like */

    /***/
    function srcAppModelsLikeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Like", function () {
        return Like;
      });

      var Like = function Like(data) {
        _classCallCheck(this, Like);

        Object.assign(this, data);
      };
      /***/

    },

    /***/
    "./src/app/models/my-media.ts":
    /*!************************************!*\
      !*** ./src/app/models/my-media.ts ***!
      \************************************/

    /*! exports provided: MEDIA_TYPE, MediaType, PhotoType, Media, Photo, Video, Audio, Document, Website, PostPhotoLink, PostAudioLink, PostVideoLink, PostDocumentLink */

    /***/
    function srcAppModelsMyMediaTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MEDIA_TYPE", function () {
        return MEDIA_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaType", function () {
        return MediaType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoType", function () {
        return PhotoType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Media", function () {
        return Media;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Photo", function () {
        return Photo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Video", function () {
        return Video;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Audio", function () {
        return Audio;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Document", function () {
        return Document;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Website", function () {
        return Website;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostPhotoLink", function () {
        return PostPhotoLink;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostAudioLink", function () {
        return PostAudioLink;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostVideoLink", function () {
        return PostVideoLink;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostDocumentLink", function () {
        return PostDocumentLink;
      });

      var MEDIA_TYPE = ['Photo', 'Video', 'Audio', 'Document', 'Website'];
      var MediaType;

      (function (MediaType) {
        MediaType[MediaType["PHOTO"] = 0] = "PHOTO";
        MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
        MediaType[MediaType["AUDIO"] = 2] = "AUDIO";
        MediaType[MediaType["DOCUMENT"] = 3] = "DOCUMENT";
        MediaType[MediaType["WEBSITE"] = 4] = "WEBSITE";
      })(MediaType || (MediaType = {}));

      var PhotoType;

      (function (PhotoType) {
        PhotoType[PhotoType["profile"] = 0] = "profile";
        PhotoType[PhotoType["cover"] = 1] = "cover";
        PhotoType[PhotoType["flag"] = 2] = "flag";
      })(PhotoType || (PhotoType = {}));

      var Media =
      /**
       *
       */
      function Media(data) {
        _classCallCheck(this, Media);

        this.data = data;
        Object.assign(this, data);
      };

      var Photo = /*#__PURE__*/function (_Media) {
        _inherits(Photo, _Media);

        var _super = _createSuper(Photo);

        function Photo(data) {
          _classCallCheck(this, Photo);

          return _super.call(this, data);
        }

        _createClass(Photo, [{
          key: "Info",
          get: function get() {
            return {
              id: this.id,
              description: this.description,
              fileName: this.fileName,
              fileUrl: this.fileUrl,
              thumbnailUrl: this.thumbnailUrl,
              dateCreated: this.dateCreated,
              type: this.type,
              coverImage: this.coverImage,
              profile: this.profile,
              flag: this.flag
            };
          }
        }]);

        return Photo;
      }(Media);

      var Video = /*#__PURE__*/function (_Media2) {
        _inherits(Video, _Media2);

        var _super2 = _createSuper(Video);

        function Video(data) {
          _classCallCheck(this, Video);

          return _super2.call(this, data);
        }

        _createClass(Video, [{
          key: "Info",
          get: function get() {
            return {
              id: this.id,
              description: this.description,
              fileName: this.fileName,
              fileUrl: this.fileUrl,
              thumbnailUrl: this.thumbnailUrl,
              posterUrl: this.posterUrl,
              dateCreated: this.dateCreated,
              type: this.type,
              mimeType: this.mimeType
            };
          }
        }]);

        return Video;
      }(Media);

      var Audio = /*#__PURE__*/function (_Media3) {
        _inherits(Audio, _Media3);

        var _super3 = _createSuper(Audio);

        function Audio(data) {
          _classCallCheck(this, Audio);

          return _super3.call(this, data);
        }

        return Audio;
      }(Media);

      var Document = /*#__PURE__*/function (_Media4) {
        _inherits(Document, _Media4);

        var _super4 = _createSuper(Document);

        /**
           *
           */
        function Document(data) {
          _classCallCheck(this, Document);

          return _super4.call(this, data);
        }

        return Document;
      }(Media);

      var Website = /*#__PURE__*/function (_Media5) {
        _inherits(Website, _Media5);

        var _super5 = _createSuper(Website);

        /**
           *
           */
        function Website(data) {
          _classCallCheck(this, Website);

          return _super5.call(this, data);
        }

        return Website;
      }(Media);

      var PostPhotoLink = function PostPhotoLink() {
        _classCallCheck(this, PostPhotoLink);
      };

      var PostAudioLink = function PostAudioLink() {
        _classCallCheck(this, PostAudioLink);
      };

      var PostVideoLink = function PostVideoLink() {
        _classCallCheck(this, PostVideoLink);
      };

      var PostDocumentLink = function PostDocumentLink() {
        _classCallCheck(this, PostDocumentLink);
      };
      /***/

    },

    /***/
    "./src/app/models/school.ts":
    /*!**********************************!*\
      !*** ./src/app/models/school.ts ***!
      \**********************************/

    /*! exports provided: SCHOOL_TYPE, SchoolType, ACCOMMODATION_TYPE, AccommodationType, School */

    /***/
    function srcAppModelsSchoolTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCHOOL_TYPE", function () {
        return SCHOOL_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolType", function () {
        return SchoolType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ACCOMMODATION_TYPE", function () {
        return ACCOMMODATION_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccommodationType", function () {
        return AccommodationType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "School", function () {
        return School;
      });
      /* harmony import */


      var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./address */
      "./src/app/models/address.ts");

      var SCHOOL_TYPE = ['University', 'College', 'Senior high school', 'Seminary', 'Junior high school', 'Technical school', 'Vocational school', 'Basic/Primary School'];
      var SchoolType;

      (function (SchoolType) {
        SchoolType["UNIVERSITY"] = "University";
        SchoolType["COLLEGE"] = "College";
        SchoolType["SENIOR_HIGH_SCHOOL"] = "Senior high school";
        SchoolType["BASIC_SCHOOL"] = "Basic/Primary School";
        SchoolType["SEMINARY"] = "Seminary";
        SchoolType["JUNIOR_HIGH_SCHOOL"] = "Junior high school";
        SchoolType["TECHNICAL_SCHOOL"] = "Technical school";
        SchoolType["VOCATIONAL_SCHOOL"] = "Vocational school";
      })(SchoolType || (SchoolType = {}));

      var ACCOMMODATION_TYPE = ['Day', 'Hall', 'Hostel', 'Boarding', 'Rent', 'No accommodation'];
      var AccommodationType;

      (function (AccommodationType) {
        AccommodationType["DAY"] = "Day";
        AccommodationType["HALL"] = "Hall";
        AccommodationType["BOARDING"] = "Hostel";
        AccommodationType["HOSTEL"] = "Boarding";
        AccommodationType["RENT"] = "Rent";
        AccommodationType["NONE"] = "No accommodation";
      })(AccommodationType || (AccommodationType = {}));

      var School = /*#__PURE__*/function () {
        function School(data, details) {
          _classCallCheck(this, School);

          this.data = data;
          this.details = details;
          this._address = new _address__WEBPACK_IMPORTED_MODULE_0__["Address"]();

          if (data) {
            this.id = data.id;
            this.name = data.name;
            this.dateStarted = data.dateStarted;
            this.address = data.address || this.address;
            this.type = data.type;
            this.gender = data.gender;
            this.photos = data.photos;
            this.thumbnailUrl = data.thumbnailUrl;
            this.coverUrl = data.thumbnailUrl;
          }

          if (details) {
            this.detailsId = details.id;
            this.about = details.about;
            this.alias = details.alias;
            this.totalStudents = details.totalStudents;
            this.accommodationTypes = details.accommodationTypes;
            this.helpLines = details.helpLines;
            this.motto = details.motto;
            this.mission = details.mission;
            this.vision = details.vision;
            this.anthem = details.anthem;
            this.anthemAudio = details.anthemAudio;
            this.flag = details.flag;
            this.departments = details.departments;
            this.website = details.website;
            this.emblem = details.emblem;
            this.email = details.email;
            this.alumniCount = details.alumniCount;
          }
        }

        _createClass(School, [{
          key: "detail",
          get: function get() {
            return {
              id: this.detailsId,
              about: this.about,
              alias: this.alias,
              accommodationTypes: this.accommodationTypes,
              helpLines: this.helpLines,
              motto: this.motto,
              mission: this.mission,
              vision: this.vision,
              anthem: this.anthem,
              anthemAudio: this.anthemAudio,
              flag: this.flag,
              departments: this.departments,
              website: this.website,
              emblem: this.emblem,
              studentAlias: this.studentAlias,
              email: this.email,
              totalStudents: this.totalStudents,
              alumniCount: this.alumniCount
            };
          },
          set: function set(info) {
            this.detailsId = info.id;
            this.about = info.about;
            this.alias = info.alias;
            this.accommodationTypes = info.accommodationTypes;
            this.helpLines = info.helpLines;
            this.motto = info.motto;
            this.mission = info.mission;
            this.vision = info.vision;
            this.anthem = info.anthem;
            this.anthemAudio = info.anthemAudio;
            this.flag = info.flag;
            this.departments = info.departments;
            this.website = info.website;
            this.emblem = info.emblem;
            this.studentAlias = info.studentAlias;
            this.email = info.email;
            this.totalStudents = info.totalStudents;
            this.alumniCount = info.alumniCount;
          }
        }, {
          key: "info",
          get: function get() {
            return {
              id: this.id,
              name: this.name,
              dateStarted: this.dateStarted,
              type: this.type,
              gender: this.gender,
              photos: this.photos,
              thumbnailUrl: this.thumbnailUrl,
              coverUrl: this.coverUrl
            };
          },
          set: function set(school) {
            this.id = school.id;
            this.name = school.name;
            this.dateStarted = school.dateStarted;
            this.address = school.address;
            this.type = school.type;
            this.gender = school.gender;
            this.photos = school.photos;
          }
        }, {
          key: "address",
          set: function set(address) {
            this._address = address;
          },
          get: function get() {
            return this._address;
          }
        }]);

        return School;
      }();
      /***/

    },

    /***/
    "./src/app/models/user.ts":
    /*!********************************!*\
      !*** ./src/app/models/user.ts ***!
      \********************************/

    /*! exports provided: Credentials, User */

    /***/
    function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Credentials", function () {
        return Credentials;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var Credentials = function Credentials(cred) {
        _classCallCheck(this, Credentials);

        Object.assign(this, cred);
      };

      var User = /*#__PURE__*/function () {
        function User(userData, cred) {
          _classCallCheck(this, User);

          if (userData) {
            this.id = userData.id;
            this.fullName = userData.firstName + ' ' + userData.lastName;
            this.firstName = userData.firstName;
            this.lastName = userData.lastName;
            this.dateOfBirth = userData.dateOfBirth;
            this.nickName = userData.nickName;
            this.userName = userData.userName;
            this.photos = userData.photos || [];
            this.address = userData.address;
            this.alumni = userData.alumni || [];
          }

          if (cred) {
            this.password = cred.password;
            this.realm = cred.realm;
            this.remember = cred.remember;
            this.email = cred.email;
            this.realm = cred.realm;
            this.phone = cred.phone;
          }
        }

        _createClass(User, [{
          key: "FullName",
          get: function get() {
            this.fullName = '';
            this.fullName += this.firstName || '';
            this.fullName += ' ';
            this.fullName += this.lastName || '';
            this.fullName += ' ';
            this.fullName += this.otherName || '';
            console.log(this.fullName);

            if (this.fullName == ' ') {
              this.fullName = null;
            }

            return this.fullName;
          },
          set: function set(name) {
            this.fullName = name;

            try {
              var nameArray = this.fullName.split(' ');

              if ((nameArray === null || nameArray === void 0 ? void 0 : nameArray.length) > 0) {
                this.firstName = nameArray[0];
              }

              if ((nameArray === null || nameArray === void 0 ? void 0 : nameArray.length) > 1) {
                this.lastName = nameArray[1];
              }

              if ((nameArray === null || nameArray === void 0 ? void 0 : nameArray.length) > 2) {
                this.otherName = nameArray[2];
              }
            } catch (error) {}
          }
        }, {
          key: "Info",
          get: function get() {
            return {
              id: this.id,
              email: this.email,
              password: this.password,
              phone: this.phone,
              firstName: this.firstName,
              lastName: this.lastName,
              otherName: this.otherName,
              dateOfBirth: this.dateOfBirth,
              gender: this.gender
            };
          }
        }]);

        return User;
      }();
      /***/

    },

    /***/
    "./src/app/shared/config.ts":
    /*!**********************************!*\
      !*** ./src/app/shared/config.ts ***!
      \**********************************/

    /*! exports provided: API_PORT, API_ROOT_URL, SCHOOL_DEFAULT_PHOTO_URL, NO_SCHOOL_COVER_PHOTO_URL, USER_DEFAULT_PHOTO_URL, CREST_DEFAULT_PHOTO_URL, USER_DEFAULT_COVER_URL, SERVER_UPLOAD_PATH, SERVER_DOWNLOAD_PATH, UPLOAD_URL, DOWNLOAD_CONTAINER, DEFAULT_AUDIO_COVER, DEFAULT_AUDIO_ICON, DEFAULT_DOCUMENT_COVER */

    /***/
    function srcAppSharedConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_PORT", function () {
        return API_PORT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_ROOT_URL", function () {
        return API_ROOT_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCHOOL_DEFAULT_PHOTO_URL", function () {
        return SCHOOL_DEFAULT_PHOTO_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NO_SCHOOL_COVER_PHOTO_URL", function () {
        return NO_SCHOOL_COVER_PHOTO_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "USER_DEFAULT_PHOTO_URL", function () {
        return USER_DEFAULT_PHOTO_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CREST_DEFAULT_PHOTO_URL", function () {
        return CREST_DEFAULT_PHOTO_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "USER_DEFAULT_COVER_URL", function () {
        return USER_DEFAULT_COVER_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SERVER_UPLOAD_PATH", function () {
        return SERVER_UPLOAD_PATH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SERVER_DOWNLOAD_PATH", function () {
        return SERVER_DOWNLOAD_PATH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPLOAD_URL", function () {
        return UPLOAD_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOWNLOAD_CONTAINER", function () {
        return DOWNLOAD_CONTAINER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_AUDIO_COVER", function () {
        return DEFAULT_AUDIO_COVER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_AUDIO_ICON", function () {
        return DEFAULT_AUDIO_ICON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_DOCUMENT_COVER", function () {
        return DEFAULT_DOCUMENT_COVER;
      });
      /****API Configurations */


      var API_PORT = 8082;
      var API_ROOT_URL = "http://devtek-limited.tech:".concat(API_PORT || 80); // export const API_PORT = 3000;
      // export const API_ROOT_URL = `http://localhost:${API_PORT || 80}`;
      // export const API_PORT = 3000;
      // export const API_ROOT_URL = `http://192.168.0.101:${API_PORT || 80}`;

      /***
       * Default images for users and schools without profile photo
       */

      var SCHOOL_DEFAULT_PHOTO_URL = "".concat(API_ROOT_URL, "/media/download/school_default.png");
      var NO_SCHOOL_COVER_PHOTO_URL = "".concat(API_ROOT_URL, "/media/download/school_default_cover.jpg");
      var USER_DEFAULT_PHOTO_URL = "".concat(API_ROOT_URL, "/media/download/user_default.png");
      var CREST_DEFAULT_PHOTO_URL = "".concat(API_ROOT_URL, "/media/download/crest_default.png");
      var USER_DEFAULT_COVER_URL = '';
      var SERVER_UPLOAD_PATH = '/media/upload/';
      var SERVER_DOWNLOAD_PATH = '/media/download/';
      var UPLOAD_URL = API_ROOT_URL + SERVER_UPLOAD_PATH;
      var DOWNLOAD_CONTAINER = API_ROOT_URL + SERVER_DOWNLOAD_PATH;
      var DEFAULT_AUDIO_COVER = API_ROOT_URL + SERVER_DOWNLOAD_PATH + 'audio_cover.png';
      var DEFAULT_AUDIO_ICON = API_ROOT_URL + SERVER_DOWNLOAD_PATH + 'audioIcon.jpg';
      var DEFAULT_DOCUMENT_COVER = API_ROOT_URL + SERVER_DOWNLOAD_PATH + 'document_cover.png';
      /***/
    },

    /***/
    "./src/app/shared/directives/double-tap.directive.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/directives/double-tap.directive.ts ***!
      \***********************************************************/

    /*! exports provided: DoubleTapDirective */

    /***/
    function srcAppSharedDirectivesDoubleTapDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoubleTapDirective", function () {
        return DoubleTapDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DoubleTapDirective = /*#__PURE__*/function () {
        function DoubleTapDirective() {
          _classCallCheck(this, DoubleTapDirective);

          this.doubleTap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.tripleTap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(DoubleTapDirective, [{
          key: "onTap",
          value: function onTap(e) {
            if (e.tapCount === 2) {
              this.doubleTap.emit(e);
            }

            if (e.tapCount === 3) {
              this.tripleTap.emit(e);
            }
          }
        }]);

        return DoubleTapDirective;
      }();

      DoubleTapDirective.ctorParameters = function () {
        return [];
      };

      DoubleTapDirective.propDecorators = {
        doubleTap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tripleTap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onTap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['tap', ['$event']]
        }]
      };
      DoubleTapDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDoubleTap]'
      })], DoubleTapDirective);
      /***/
    },

    /***/
    "./src/app/shared/directives/image-background.directive.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/directives/image-background.directive.ts ***!
      \*****************************************************************/

    /*! exports provided: BackgroundImageDirective */

    /***/
    function srcAppSharedDirectivesImageBackgroundDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackgroundImageDirective", function () {
        return BackgroundImageDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BackgroundImageDirective = /*#__PURE__*/function () {
        function BackgroundImageDirective(el) {
          _classCallCheck(this, BackgroundImageDirective);

          this.el = el.nativeElement;
        }

        _createClass(BackgroundImageDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.el.style.backgroundImage = 'url(' + this.backgroundImage + ')';
            this.el.style.backgroundPosition = 'center';
            this.el.style.backgroundSize = 'cover';
            this.el.style.backgroundRepeat = 'no-repeat';
          }
        }]);

        return BackgroundImageDirective;
      }();

      BackgroundImageDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      BackgroundImageDirective.propDecorators = {
        backgroundImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['background-image']
        }],
        backgroundPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['background-position']
        }],
        backgroundSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['background-size']
        }],
        backgroundRepeat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['background-repeat']
        }]
      };
      BackgroundImageDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[background-image]'
      })], BackgroundImageDirective);
      /***/
    },

    /***/
    "./src/app/shared/directives/watch-element.directive.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/directives/watch-element.directive.ts ***!
      \**************************************************************/

    /*! exports provided: WatchElementDirective */

    /***/
    function srcAppSharedDirectivesWatchElementDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WatchElementDirective", function () {
        return WatchElementDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_providers_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");

      var WatchElementDirective = /*#__PURE__*/function () {
        function WatchElementDirective(renderer, el, cdr) {
          _classCallCheck(this, WatchElementDirective);

          this.cdr = cdr; // renderer: Renderer2;

          this.state = false;
          this.refreshCount = 0;
          this.isOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.el = el.nativeElement; // this.renderer = renderer;
        }

        _createClass(WatchElementDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.run();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.run();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// if (this.menuObserver) {
            //     this.menuObserver?.observer?.unobserve(this.menuObserver?.element);
            // }
          }
        }, {
          key: "run",
          value: function run() {
            var _this5 = this;

            // if (this.menuObserver) {
            //     this.menuObserver?.observer?.unobserve(this.menuObserver?.element);
            // }
            setTimeout(function () {
              _this5.menuObserver = _services_providers_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].monitorElementOutOfView(_this5.elementId, function () {
                if (_this5.refreshCount > 1) {
                  _this5.isOut.emit(!_this5.state);

                  _this5.cdr.detectChanges();
                }

                _this5.refreshCount += 1;
                console.log(_this5.refreshCount);
              }, function () {
                if (_this5.refreshCount > 1) {
                  _this5.isOut.emit(_this5.state);

                  _this5.cdr.detectChanges();
                }

                _this5.refreshCount += 1;
                console.log(_this5.refreshCount);
              }, 0.02);
            }, 100);
          }
        }]);

        return WatchElementDirective;
      }();

      WatchElementDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      WatchElementDirective.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        elementId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      WatchElementDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appWatchElement]'
      })], WatchElementDirective);
      /***/
    },

    /***/
    "./src/app/shared/pipes/pipes.module.ts":
    /*!**********************************************!*\
      !*** ./src/app/shared/pipes/pipes.module.ts ***!
      \**********************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppSharedPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _pipes_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipes.pipe */
      "./src/app/shared/pipes/pipes.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__["ToEventTime"], _pipes_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeHtmlPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__["ToEventTime"], _pipes_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeHtmlPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/shared/pipes/pipes.pipe.ts":
    /*!********************************************!*\
      !*** ./src/app/shared/pipes/pipes.pipe.ts ***!
      \********************************************/

    /*! exports provided: ToEventTime, SafeHtmlPipe */

    /***/
    function srcAppSharedPipesPipesPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToEventTime", function () {
        return ToEventTime;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
        return SafeHtmlPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var ToEventTime = /*#__PURE__*/function () {
        function ToEventTime() {
          _classCallCheck(this, ToEventTime);
        }

        _createClass(ToEventTime, [{
          key: "transform",
          value: function transform(date) {
            if (!date) {
              return '';
            }

            var conv_date_number = new Date(Date.now()).getTime() - new Date(date).getTime(); // in mill secs

            var secs = conv_date_number / 1000;
            var mins = secs / 60;
            var hrs = mins / 60;
            var days = hrs / 24;
            var weeks = days / 7;
            var months = weeks / 4;
            var years = months / 12;

            if (Math.floor(years) > 0) {
              return Math.floor(years) + ' years ago';
            } else if (Math.floor(months) > 0) {
              return Math.floor(months) + ' months ago';
            } else if (Math.floor(weeks) > 0) {
              return Math.floor(weeks) + ' weeks ago';
            } else if (Math.floor(days) > 0) {
              return Math.floor(days) + ' days ago';
            } else if (Math.floor(hrs) > 0) {
              return Math.floor(hrs) + ' hrs ago';
            } else if (Math.floor(mins) > 0) {
              return Math.floor(mins) + ' mins ago';
            } else if (Math.floor(secs) > 0) {
              return Math.floor(secs) + ' secs ago';
            } else {
              return 'now';
            }
          }
        }]);

        return ToEventTime;
      }();

      ToEventTime = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'toEventTime'
      })], ToEventTime);

      var SafeHtmlPipe = /*#__PURE__*/function () {
        function SafeHtmlPipe(domSanitizer) {
          _classCallCheck(this, SafeHtmlPipe);

          this.domSanitizer = domSanitizer;
        }

        _createClass(SafeHtmlPipe, [{
          key: "transform",
          value: function transform(html) {
            return this.domSanitizer.bypassSecurityTrustHtml(html);
          }
        }]);

        return SafeHtmlPipe;
      }();

      SafeHtmlPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeHtml'
      })], SafeHtmlPipe);
      /***/
    },

    /***/
    "./src/app/shared/services/model-service/alumni.service.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/model-service/alumni.service.ts ***!
      \*****************************************************************/

    /*! exports provided: AlumniService */

    /***/
    function srcAppSharedServicesModelServiceAlumniServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlumniService", function () {
        return AlumniService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _providers_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");

      var AlumniService = /*#__PURE__*/function () {
        function AlumniService(http, store, signals) {
          _classCallCheck(this, AlumniService);

          this.http = http;
          this.store = store;
          this.signals = signals;
        }

        _createClass(AlumniService, [{
          key: "createOrUpdateAlumni",
          value: function createOrUpdateAlumni(alumni) {
            var _this6 = this;

            if (alumni.id) {
              // perform update
              return this.http.patch("/alumni/".concat(alumni.id), alumni).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                // console.log(res);
                return alumni;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this6.handleError(e);
              }));
            } else {
              return this.http.post("/alumni/", alumni).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this6.handleError(e);
              }));
            }
          }
        }, {
          key: "getAlumni",
          value: function getAlumni(pageInfo, userId, schoolId) {
            var _this7 = this;

            var filter = {
              order: 'id DESC',
              include: [{
                relation: 'user'
              }, {
                relation: 'school',
                scope: {
                  include: [{
                    relation: 'address'
                  }, {
                    relation: 'schoolDetails'
                  }, {
                    relation: 'photos'
                  }]
                }
              }, {
                relation: 'degree'
              }]
            };

            if (pageInfo) {
              filter.offset = pageInfo.offset * pageInfo.limit;
              filter.limit = pageInfo.limit;
            }

            filter.where = {};

            if (schoolId) {
              filter.where.schoolId = schoolId;
            }

            if (userId) {
              filter.where.userId = userId;
            } // console.log(filter);


            var url = "/alumni?filter=" + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this7.handleError(e);
            }));
          }
        }, {
          key: "getUserAlumni",
          value: function getUserAlumni(userId, schoolId) {
            var _this8 = this;

            var filter = {
              order: 'id DESC',
              include: [{
                relation: 'degree'
              }, {
                relation: 'school',
                scope: {
                  include: [{
                    relation: 'address'
                  }, {
                    relation: 'schoolDetails'
                  }, {
                    relation: 'photos'
                  }]
                }
              } // { relation: 'post' }
              ],
              where: {
                userId: userId
              }
            };

            if (schoolId) {
              filter.where.schoolId = schoolId;
            } // console.log(filter);


            var url = "/alumni?filter=" + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this8.handleError(e);
            }));
          }
        }, {
          key: "isUserAlumni",
          value: function isUserAlumni(userId, schoolId) {
            var _this9 = this;

            var filter = {
              where: {
                and: [{
                  userId: userId
                }, {
                  schoolId: schoolId
                }]
              }
            }; // console.log(filter);

            var url = "/alumni?filter=" + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);

              if ((res === null || res === void 0 ? void 0 : res.length) > 0) {
                return res[0];
              } else {
                return null;
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this9.handleError(e);
            }));
          }
        }, {
          key: "getSchoolAlumni",
          value: function getSchoolAlumni(schoolId, pageInfo) {
            var _this10 = this;

            var filter = {
              order: 'id DESC',
              where: {
                schoolId: schoolId
              },
              include: [{
                relation: 'degree'
              }, {
                relation: 'user',
                scope: {
                  include: [{
                    relation: 'photos'
                  }, {
                    relation: 'address'
                  }]
                }
              }]
            };

            if (pageInfo) {
              filter.limit = pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.limit;
              filter.offset = pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.offset;
            } // console.log(filter);


            var url = "/alumni?filter=" + JSON.stringify(filter); // console.log(url);

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this10.handleError(e);
            }));
          }
        }, {
          key: "getAlumniByIds",
          value: function getAlumniByIds(ids, pageInfo) {
            var _this11 = this;

            var filter;

            if (pageInfo) {
              filter = {
                order: 'id DESC',
                offset: pageInfo.offset * pageInfo.limit,
                limit: pageInfo.limit,
                where: {
                  id: {
                    inq: ids
                  }
                }
              };
            }

            var url = '/alumni?filter=' + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this11.handleError(e);
            }));
          }
        }, {
          key: "getAlumniById",
          value: function getAlumniById(alumniId) {
            var _this12 = this;

            var filter = {// include: [
              //   { relation: 'photos' },
              //   { relation: 'address' },
              //   { relation: 'alumniConfig' },
              //   { relation: 'post' },
              //   {
              //     relation: 'alumni',
              //     scope: {
              //       include: [
              //         {
              //           relation: 'school',
              //           scope: {
              //             include: [
              //               { relation: 'photos' }]
              //           }
              //         }
              //       ]
              //     }
              //   }
              // ]
            };
            var url = "/alumni/".concat(alumniId, "?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this12.handleError(e);
            }));
          }
        }, {
          key: "countAlumni",
          value: function countAlumni(schoolId) {
            var _this13 = this;

            var filter = {};

            if (schoolId) {
              filter = {
                schoolId: schoolId
              };
            }

            return this.http.get('/alumni/count?where=' + JSON.stringify(filter)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              if (res) {
                _this13.signals.announceSelectedSchoolAlumniCount(res.count);

                return res.count;
              }

              return 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this13.handleError(e);
            }));
          }
        }, {
          key: "deleteAlumniById",
          value: function deleteAlumniById(alumnusId) {
            var _this14 = this;

            return this.http["delete"]('/alumni/' + alumnusId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this14.handleError(e);
            }));
          }
        }, {
          key: "deleteAlumni",
          value: function deleteAlumni(userId, schoolId) {
            var _this15 = this;

            return this.http["delete"]("/alumni/delete/".concat(userId, "/").concat(schoolId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this15.handleError(e);
            }));
          } /////////////////////////////////////////////////////////////////////////

          /*************Local alumni access*****/
          ///////////////////////////////////////////////////////////////////////////

        }, {
          key: "createOrUpdateDegree",
          value: function createOrUpdateDegree(alumniId, degree) {
            var _this16 = this;

            if (degree.id) {
              // perform update
              return this.http.patch("/alumni/".concat(alumniId, "/degree"), degree).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                // console.log(res);
                return degree;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this16.handleError(e);
              }));
            } else {
              return this.http.post("/alumni/".concat(alumniId, "/degree"), degree).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this16.handleError(e);
              }));
            }
          } /////////////////////////////////////////////////////////////////////////

          /*************Local alumni access*****/
          ///////////////////////////////////////////////////////////////////////////
          // Read alumni object from sesson storage

        }, {
          key: "getAlumniLocal",
          value: function getAlumniLocal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.store.getObject('alumni');

                    case 2:
                      return _context.abrupt("return", _context.sent);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteAlumniLocal",
          value: function deleteAlumniLocal() {
            this.store.remove('alumni');
          }
        }, {
          key: "handleError",
          value: function handleError(e) {
            // console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].myHttpErrorFormat(e, 'alumni'));
          }
        }]);

        return AlumniService;
      }();

      AlumniService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_7__["MyStorage"]
        }, {
          type: _my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"]
        }];
      };

      AlumniService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], AlumniService);
      /***/
    },

    /***/
    "./src/app/shared/services/model-service/media.service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/shared/services/model-service/media.service.ts ***!
      \****************************************************************/

    /*! exports provided: MediaService */

    /***/
    function srcAppSharedServicesModelServiceMediaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaService", function () {
        return MediaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _providers_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");

      var MediaService = /*#__PURE__*/function () {
        function MediaService(http, store) {
          _classCallCheck(this, MediaService);

          this.http = http;
          this.store = store;
          this.redirectUrl = '';
        }

        _createClass(MediaService, [{
          key: "createManyPhotos",
          value: function createManyPhotos(photos) {
            return this.http.post("/photos-createMany", photos).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
            }));
          }
        }, {
          key: "linkPostToVideo",
          value: function linkPostToVideo(links) {
            return this.http.post("/link-post-to-video-many", links).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'Video link'));
            }));
          }
        }, {
          key: "linkPostToAudio",
          value: function linkPostToAudio(links) {
            return this.http.post("/link-post-to-audio-many", links).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
            }));
          }
        }, {
          key: "linkPostToDocument",
          value: function linkPostToDocument(links) {
            return this.http.post("/link-post-to-document-many", links).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
            }));
          }
        }, {
          key: "linkPostToPhoto",
          value: function linkPostToPhoto(links) {
            return this.http.post("/link-post-to-photo-many", links).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
            }));
          }
        }, {
          key: "updatePhoto",
          value: function updatePhoto(photo) {
            return this.http.patch("/photos/".concat(photo.id), photo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
            }));
          }
        }, {
          key: "updateVideo",
          value: function updateVideo(video) {
            return this.http.patch("/videos/".concat(video.id), video).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
            }));
          }
        }, {
          key: "deletePhoto",
          value: function deletePhoto(photoId) {
            return this.http["delete"]("/photos/".concat(photoId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
            }));
          }
        }, {
          key: "createSchoolPhoto",
          value: function createSchoolPhoto(schoolId, photo) {
            if (!photo.id) {
              return this.http.post("/schools/".concat(schoolId, "/photos"), photo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
              }));
            } else {
              return this.http.patch("/schools/".concat(schoolId, "/photos"), photo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
              }));
            }
          }
        }, {
          key: "createSchoolVideo",
          value: function createSchoolVideo(schoolId, video) {
            if (!video.id) {
              return this.http.post("/schools/".concat(schoolId, "/videos"), video).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School video'));
              }));
            } else {
              return this.http.patch("/schools/".concat(schoolId, "/videos"), video).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School video'));
              }));
            }
          }
        }, {
          key: "getSchoolPhotos",
          value: function getSchoolPhotos(schoolId) {
            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!schoolId) {
              return;
            }

            if (!filter) {
              filter = {
                order: 'id DESC'
              };
            }

            var url = "/schools/".concat(schoolId, "/photos?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School photo'));
            }));
          }
        }, {
          key: "getSchoolVideos",
          value: function getSchoolVideos(schoolId) {
            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!schoolId) {
              return;
            }

            if (!filter) {
              filter = {
                order: 'id DESC'
              };
            }

            var url = "/schools/".concat(schoolId, "/videos?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'School video'));
            }));
          }
        }, {
          key: "createUserPhoto",
          value: function createUserPhoto(userId, photo) {
            if (!(photo === null || photo === void 0 ? void 0 : photo.id)) {
              return this.http.post("/users/".concat(userId, "/photos"), photo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(JSON.stringify(res));
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User photo'));
              }));
            } else {
              return this.http.patch("/users/".concat(userId, "/photos"), photo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User photo'));
              }));
            }
          }
        }, {
          key: "createUserVideo",
          value: function createUserVideo(userId, video) {
            if (!(video === null || video === void 0 ? void 0 : video.id)) {
              return this.http.post("/users/".concat(userId, "/videos"), video).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(JSON.stringify(res));
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User video'));
              }));
            } else {
              return this.http.patch("/users/".concat(userId, "/videos"), video).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User video'));
              }));
            }
          }
        }, {
          key: "getUserPhotos",
          value: function getUserPhotos(userId) {
            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!userId) {
              console.log('Invalid user id');
              return;
            }

            if (!filter) {
              filter = {
                order: 'id DESC'
              };
            }

            var url = "/users/".concat(userId, "/photos?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User photo'));
            }));
          }
        }, {
          key: "getUserVideos",
          value: function getUserVideos(userId) {
            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!userId) {
              console.log('Invalid user id');
              return;
            }

            if (!filter) {
              filter = {
                order: 'id DESC'
              };
            }

            var url = "/users/".concat(userId, "/videos?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User video'));
            }));
          }
        }, {
          key: "getUserAudios",
          value: function getUserAudios(userId) {
            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!userId) {
              console.log('Invalid user id');
              return;
            }

            if (!filter) {
              filter = {
                order: 'id DESC'
              };
            }

            var url = "/users/".concat(userId, "/audio?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User audio'));
            }));
          }
        }, {
          key: "getUserDocuments",
          value: function getUserDocuments(userId) {
            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!userId) {
              console.log('Invalid user id');
              return;
            }

            if (!filter) {
              filter = {
                order: 'id DESC'
              };
            }

            var url = "/users/".concat(userId, "/documents?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User audio'));
            }));
          }
        }, {
          key: "createUserAudio",
          value: function createUserAudio(userId, audio) {
            if (!(audio === null || audio === void 0 ? void 0 : audio.id)) {
              return this.http.post("/users/".concat(userId, "/audio"), audio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(JSON.stringify(res));
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User audio'));
              }));
            } else {
              return this.http.patch("/users/".concat(userId, "/audio"), audio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User audio'));
              }));
            }
          }
        }, {
          key: "createUserDocument",
          value: function createUserDocument(userId, document) {
            if (!(document === null || document === void 0 ? void 0 : document.id)) {
              return this.http.post("/users/".concat(userId, "/documents"), document).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(JSON.stringify(res));
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User document'));
              }));
            } else {
              return this.http.patch("/users/".concat(userId, "/documents"), document).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'User document'));
              }));
            }
          }
        }]);

        return MediaService;
      }();

      MediaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_3__["MyStorage"]
        }];
      };

      MediaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], MediaService);
      /***/
    },

    /***/
    "./src/app/shared/services/model-service/post.service.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/services/model-service/post.service.ts ***!
      \***************************************************************/

    /*! exports provided: PostService */

    /***/
    function srcAppSharedServicesModelServicePostServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostService", function () {
        return PostService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _providers_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");

      var PostService = /*#__PURE__*/function () {
        function PostService(http, store, signals) {
          _classCallCheck(this, PostService);

          this.http = http;
          this.store = store;
          this.signals = signals;
        }

        _createClass(PostService, [{
          key: "creatPost",
          value: function creatPost(post) {
            var _this17 = this;

            if (!(post === null || post === void 0 ? void 0 : post.message)) {
              return;
            }

            return this.http.post("/posts/", post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this17.handleError(e);
            }));
          }
        }, {
          key: "updatePost",
          value: function updatePost(post) {
            var _this18 = this;

            if (!(post === null || post === void 0 ? void 0 : post.id)) {
              return;
            }

            return this.http.patch("/posts/", post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this18.handleError(e);
            }));
          }
        }, {
          key: "deletePost",
          value: function deletePost(postId) {
            var _this19 = this;

            if (!postId) {
              return;
            }

            return this.http["delete"]("/posts/".concat(postId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this19.handleError(e);
            }));
          }
        }, {
          key: "getPost",
          value: function getPost(pageInfo, filter, schoolId, userId) {
            var _this20 = this;

            if (!filter) {
              filter = {
                order: 'id DESC',
                include: [{
                  relation: 'photos'
                }, {
                  relation: 'videos'
                }, {
                  relation: 'audios'
                }, {
                  relation: 'postConfig'
                }, {
                  relation: 'user',
                  scope: {
                    include: [{
                      relation: 'photos',
                      scope: {
                        where: {
                          profile: true
                        }
                      }
                    }, {
                      relation: 'address'
                    }]
                  }
                }]
              };
            }

            if (pageInfo) {
              filter = {
                order: 'id DESC',
                offset: pageInfo.offset,
                limit: pageInfo.limit,
                include: filter.include
              };
            }

            if (schoolId) {
              filter.where = {
                schoolId: schoolId
              };
            }

            if (userId) {
              filter.where = {
                userId: userId
              };
            }

            filter = filter ? 'filter=' + JSON.stringify(filter) : '';
            var url = '/posts?' + filter; // // console.log(url);

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this20.handleError(e);
            }));
          }
        }, {
          key: "getSchoolPosts",
          value: function getSchoolPosts(schoolId, pageInfo, filter) {
            return this.getPost(pageInfo, null, schoolId);
          }
        }, {
          key: "getUserPosts",
          value: function getUserPosts(userId, pageInfo, filter) {
            return this.getPost(pageInfo, null, null, userId);
          }
        }, {
          key: "countPost",
          value: function countPost(userId, schoolId) {
            var _this21 = this;

            var filter = {};

            if (userId) {
              filter.userId = userId;
            }

            if (schoolId) {
              filter.schoolId = {};
            }

            filter = filter ? 'where=' + JSON.stringify(filter) : '';
            var url = '/posts/count?' + filter; // console.log(url);

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this21.handleError(e);
            }));
          }
        }, {
          key: "countUserPost",
          value: function countUserPost(userId) {
            return this.countPost(userId);
          }
        }, {
          key: "countSchoolPost",
          value: function countSchoolPost(schoolId) {
            return this.countPost(null, schoolId);
          } /////////////////////////////////////////////////////////////////////////

          /*************Local Post access*****/
          ///////////////////////////////////////////////////////////////////////////
          // Read alumni object from session storage

        }, {
          key: "getAlumniLocal",
          value: function getAlumniLocal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.store.getObject('alumni');

                    case 2:
                      return _context2.abrupt("return", _context2.sent);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteAlumniLocal",
          value: function deleteAlumniLocal() {
            this.store.remove('alumni');
          }
        }, {
          key: "handleError",
          value: function handleError(e) {
            // console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].myHttpErrorFormat(e, 'alumni'));
          } /////////////////////////////////////////////////////////////////////////

          /*************Local user access*****/
          ///////////////////////////////////////////////////////////////////////////
          // Read post object from sesson storage

        }, {
          key: "getPostLocal",
          value: function getPostLocal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.store.getObject('post');

                    case 2:
                      return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "deleteUserLocal",
          value: function deleteUserLocal() {
            this.store.remove('user');
          }
        }, {
          key: "setPostLocal",
          value: function setPostLocal(post) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.store.setObject('post', post);

                    case 2:
                      return _context4.abrupt("return", _context4.sent);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return PostService;
      }();

      PostService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_7__["MyStorage"]
        }, {
          type: _my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"]
        }];
      };

      PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], PostService);
      /***/
    },

    /***/
    "./src/app/shared/services/model-service/school.service.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/model-service/school.service.ts ***!
      \*****************************************************************/

    /*! exports provided: SchoolService */

    /***/
    function srcAppSharedServicesModelServiceSchoolServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolService", function () {
        return SchoolService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _providers_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var _models_school__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../models/school */
      "./src/app/models/school.ts");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/my-media */
      "./src/app/models/my-media.ts");

      var SchoolService_1;

      var SchoolService = SchoolService_1 = /*#__PURE__*/function () {
        function SchoolService(http, store, signals) {
          _classCallCheck(this, SchoolService);

          this.http = http;
          this.store = store;
          this.signals = signals;
          this.redirectUrl = '';
        }

        _createClass(SchoolService, [{
          key: "createUpdateSchool",
          value: function createUpdateSchool(school) {
            var _this22 = this;

            if (school.id) {
              // perform update
              return this.http.patch('/schools', school).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                // console.log(res);
                return school;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
                return _this22.handleError(e);
              }));
            } else {
              return this.http.post('/schools', school).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
                return _this22.handleError(e);
              }));
            }
          }
        }, {
          key: "createUpdateSchoolDetails",
          value: function createUpdateSchoolDetails(schoolId, details) {
            var _this23 = this;

            if (details.id) {
              // perform update
              return this.http.patch("/schools/".concat(schoolId, "/school-details"), details).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                // console.log(res);
                return details;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
                return _this23.handleError(e);
              }));
            } else {
              return this.http.post("/schools/".concat(schoolId, "/school-details"), details).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
                return _this23.handleError(e);
              }));
            }
          }
        }, {
          key: "createUpdateSchoolAddress",
          value: function createUpdateSchoolAddress(schoolId, address) {
            var _this24 = this;

            if (address.id) {
              // perform update
              return this.http.patch("/schools/".concat(schoolId, "/address"), address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                // console.log(res);
                return address;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
                return _this24.handleError(e);
              }));
            } else {
              return this.http.post("/schools/".concat(schoolId, "/address"), address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
                return _this24.handleError(e);
              }));
            }
          }
        }, {
          key: "getSchools",
          value: function getSchools(pageInfo) {
            var _this25 = this;

            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              include: [{
                relation: 'address'
              }, {
                relation: 'schoolDetails'
              }]
            };

            if (pageInfo) {
              filter = {
                offset: pageInfo.offset * pageInfo.limit,
                limit: pageInfo.limit,
                // skip: pageInfo.count
                include: [{
                  relation: 'address'
                }, {
                  relation: 'schoolDetails'
                }]
              };
            }

            filter = filter ? 'filter=' + JSON.stringify(filter) : '';
            var url = '/schools?' + filter; // // console.log(url);

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
              return _this25.handleError(e);
            }));
          }
        }, {
          key: "searchSchool",
          value: function searchSchool() {
            var _this26 = this;

            var searchKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
            var pageInfo = arguments.length > 1 ? arguments[1] : undefined;

            var _a;

            var filter = {};

            if (pageInfo) {
              filter = {
                offset: pageInfo.offset,
                limit: pageInfo.limit
              };
            }

            if (!searchKey) {
              searchKey = 'all';
            }

            var url = (_a = '/schools-search/' + searchKey + '?filter=' + JSON.stringify(filter)) !== null && _a !== void 0 ? _a : '';
            console.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
              return _this26.handleError(e);
            }));
          }
        }, {
          key: "getSchoolDetails",
          value: function getSchoolDetails(schoolId) {
            var _this27 = this;

            var filter = {
              include: [// { relation: 'photos' },
              {
                relation: 'address'
              }, {
                relation: 'schoolConfig'
              }, {
                relation: 'post'
              }, {
                relation: 'alumni',
                scope: {
                  include: [{
                    relation: 'school',
                    scope: {
                      include: [{
                        relation: 'photos'
                      }]
                    }
                  }]
                }
              }]
            };
            var url = "/schools/".concat(schoolId, "?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
              return _this27.handleError(e);
            }));
          }
        }, {
          key: "countSchools",
          value: function countSchools() {
            var _this28 = this;

            return this.http.get('/schools/count').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              if (res) {
                _this28.signals.announceSchoolsCount(res.count);

                return res.count;
              }

              return 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
              return _this28.handleError(e);
            }));
          }
        }, {
          key: "deleteSchool",
          value: function deleteSchool(schoolId) {
            var _this29 = this;

            return this.http["delete"]("/schools/".concat(schoolId, "/school-details")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
              return _this29.handleError(e);
            }));
          }
        }, {
          key: "getUserSchools",
          value: function getUserSchools(userId) {
            var _this30 = this;

            var filter = {
              include: [{
                relation: 'address'
              }, {
                relation: 'schoolDetails'
              }, {
                relation: 'photos'
              }]
            }; // console.log(filter);

            var url = "/users/".concat(userId, "/schools?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              // console.log(res);
              return SchoolService_1.flattenSchools(res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
              return _this30.handleError(e);
            }));
          } /////////////////////////////////////////////////////////////////////////

          /*************Local school access*****/
          ///////////////////////////////////////////////////////////////////////////
          // Read school object from sesson storage

        }, {
          key: "getSchoolLocal",
          value: function getSchoolLocal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", this.store.getObject('selectedSchool'));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "setSchoolLocal",
          value: function setSchoolLocal(school) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.signals.announceSchool(school);
                      return _context6.abrupt("return", this.store.setObject('selectedSchool', school));

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "deleteSchoolLocal",
          value: function deleteSchoolLocal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.signals.announceSchool(null);
                      this.store.remove('selectedSchool');

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } ////////////////////////////////////////////////////////////

          /**********************Helper function ******************* */
          ////////////////////////////////////////////////////////////

        }, {
          key: "handleError",
          value: function handleError(e) {
            // console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].myHttpErrorFormat(e, 'school'));
          }
        }], [{
          key: "getSchoolIdentityPhoto",
          value: function getSchoolIdentityPhoto(school) {
            var _a, _b;

            var photo = {};
            (_a = school === null || school === void 0 ? void 0 : school.photos) === null || _a === void 0 ? void 0 : _a.forEach(function (ph) {
              var _a, _b, _c, _d;

              if (ph.profile) {
                ph.fileUrl = (_a = _config__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD_CONTAINER"] + ph.fileUrl) !== null && _a !== void 0 ? _a : _config__WEBPACK_IMPORTED_MODULE_4__["SCHOOL_DEFAULT_PHOTO_URL"];
                photo.profile = ph;
              }

              if (ph.coverImage) {
                ph.fileUrl = (_b = _config__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD_CONTAINER"] + ph.fileUrl) !== null && _b !== void 0 ? _b : _config__WEBPACK_IMPORTED_MODULE_4__["NO_SCHOOL_COVER_PHOTO_URL"];
                ph.fileUrl = (_c = _config__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD_CONTAINER"] + ph.thumbnailUrl) !== null && _c !== void 0 ? _c : _config__WEBPACK_IMPORTED_MODULE_4__["NO_SCHOOL_COVER_PHOTO_URL"];
                photo.cover = ph;
              }

              if (ph.flag) {
                ph.fileUrl = (_d = _config__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD_CONTAINER"] + ph.fileUrl) !== null && _d !== void 0 ? _d : _config__WEBPACK_IMPORTED_MODULE_4__["CREST_DEFAULT_PHOTO_URL"];
                photo.flag = ph;
              }
            });

            if (((_b = school === null || school === void 0 ? void 0 : school.photos) === null || _b === void 0 ? void 0 : _b.length) < 1) {
              photo.profile = new src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__["Photo"]();
              photo.profile.fileUrl = _config__WEBPACK_IMPORTED_MODULE_4__["SCHOOL_DEFAULT_PHOTO_URL"];
              photo.profile.thumbnailUrl = _config__WEBPACK_IMPORTED_MODULE_4__["SCHOOL_DEFAULT_PHOTO_URL"];
              photo.cover = new src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__["Photo"]();
              photo.cover.fileUrl = _config__WEBPACK_IMPORTED_MODULE_4__["NO_SCHOOL_COVER_PHOTO_URL"];
              photo.cover.thumbnailUrl = _config__WEBPACK_IMPORTED_MODULE_4__["NO_SCHOOL_COVER_PHOTO_URL"];
              photo.flag = new src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__["Photo"]();
              photo.flag.fileUrl = _config__WEBPACK_IMPORTED_MODULE_4__["CREST_DEFAULT_PHOTO_URL"];
              photo.flag.thumbnailUrl = _config__WEBPACK_IMPORTED_MODULE_4__["CREST_DEFAULT_PHOTO_URL"];
            }

            return photo;
          }
        }, {
          key: "getSchoolProfilePhotoUrl",
          value: function getSchoolProfilePhotoUrl(identityPhoto) {
            var _a, _b;

            return ((_a = identityPhoto === null || identityPhoto === void 0 ? void 0 : identityPhoto.profile) === null || _a === void 0 ? void 0 : _a.thumbnailUrl) || ((_b = identityPhoto === null || identityPhoto === void 0 ? void 0 : identityPhoto.flag) === null || _b === void 0 ? void 0 : _b.thumbnailUrl) || _config__WEBPACK_IMPORTED_MODULE_4__["CREST_DEFAULT_PHOTO_URL"];
          }
        }, {
          key: "getSchoolCoverPhotoUrl",
          value: function getSchoolCoverPhotoUrl(identityPhoto) {
            var _a;

            return ((_a = identityPhoto === null || identityPhoto === void 0 ? void 0 : identityPhoto.cover) === null || _a === void 0 ? void 0 : _a.thumbnailUrl) || _config__WEBPACK_IMPORTED_MODULE_4__["NO_SCHOOL_COVER_PHOTO_URL"];
          }
        }, {
          key: "flattenSchools",
          value: function flattenSchools(schools) {
            var returnSchools = [];
            schools.forEach(function (school) {
              returnSchools.push(new _models_school__WEBPACK_IMPORTED_MODULE_3__["School"](school, school === null || school === void 0 ? void 0 : school.schoolDetails));
            }); // console.log(returnSchools);

            return returnSchools;
          }
        }, {
          key: "flattenSchool",
          value: function flattenSchool(school) {
            return new _models_school__WEBPACK_IMPORTED_MODULE_3__["School"](school, school === null || school === void 0 ? void 0 : school.schoolDetails);
          }
        }]);

        return SchoolService;
      }();

      SchoolService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_9__["MyStorage"]
        }, {
          type: _my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"]
        }];
      };

      SchoolService = SchoolService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])({
        providedIn: 'root'
      })], SchoolService);
      /***/
    },

    /***/
    "./src/app/shared/services/model-service/social.service.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/model-service/social.service.ts ***!
      \*****************************************************************/

    /*! exports provided: SocialService */

    /***/
    function srcAppSharedServicesModelServiceSocialServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialService", function () {
        return SocialService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _providers_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var _school_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./school.service */
      "./src/app/shared/services/model-service/school.service.ts");

      var SocialService = /*#__PURE__*/function () {
        function SocialService(http, store) {
          _classCallCheck(this, SocialService);

          this.http = http;
          this.store = store;
          this.redirectUrl = '';
        }

        _createClass(SocialService, [{
          key: "likeOrDislike",
          value: function likeOrDislike(rate) {
            var _this31 = this;

            console.log(rate);

            if (rate.id) {
              // perform update
              return this.http.patch("/likes/".concat(rate.id), rate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this31.handleError(e);
              }));
            } else {
              return this.http.post('/likes/', rate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this31.handleError(e);
              }));
            }
          }
        }, {
          key: "getLikeById",
          value: function getLikeById(id) {
            var _this32 = this;

            return this.http.get("/likes/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this32.handleError(e);
            }));
          }
        }, {
          key: "getLike",
          value: function getLike(initiatorId, receiverId) {
            var _this33 = this;

            var filter = {
              where: {
                initiatorId: initiatorId,
                receiverId: receiverId
              }
            };
            filter = 'filter=' + JSON.stringify(filter);
            var url = '/likes?' + filter;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              var aff = res ? res[0] : null;
              return aff;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this33.handleError(e);
            }));
          }
        }, {
          key: "countLikes",
          value: function countLikes(receiverId, receiverName) {
            var _this34 = this;

            receiverName = receiverName.toLowerCase();
            var filter = {
              where: {
                receiverId: receiverId,
                receiverName: receiverName
              }
            };
            filter = 'filter=' + JSON.stringify(filter);
            var url = '/likes/count?' + filter;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              // const aff = res ? res[0] : null;
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this34.handleError(e);
            }));
          }
        }, {
          key: "getLikes",
          value: function getLikes(receiverId, receiverName) {
            var _this35 = this;

            var filter = {
              where: {
                receiverId: receiverId,
                receiverName: receiverName
              }
            };
            filter = 'filter=' + JSON.stringify(filter);
            var url = '/likes?' + filter;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              // const aff = res ? res[0] : null;
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this35.handleError(e);
            }));
          }
        }, {
          key: "getPostLikes",
          value: function getPostLikes(receiverId) {
            return this.getLikes(receiverId, 'post');
          }
        }, {
          key: "handleError",
          value: function handleError(e) {
            // console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].myHttpErrorFormat(e, 'Social'));
          }
        }, {
          key: "createUpdateComment",
          value: function createUpdateComment(comment) {
            var _this36 = this;

            if (!(comment.initiatorId && comment.postId)) {
              // console.log(comment);
              console.log('Invalid Post or Creator Id ');
              return;
            }

            if (comment.id) {
              // perform update
              return this.http.patch("/comments/".concat(comment.id), comment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this36.handleError(e);
              }));
            } else {
              return this.http.post('/comments/', comment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                // console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this36.handleError(e);
              }));
            }
          }
        }, {
          key: "getPostComments",
          value: function getPostComments(postId, pageInfo) {
            var _this37 = this;

            var filter = {
              order: 'id DESC',
              limit: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.limit
            };
            filter = "?filter=".concat(JSON.stringify(filter));
            return this.http.get("/posts/".concat(postId, "/comments").concat(filter)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this37.handleError(e);
            }));
          }
        }, {
          key: "countPostComments",
          value: function countPostComments(postId) {
            var _this38 = this;

            return this.http.get("/posts/".concat(postId, "/comments/count")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this38.handleError(e);
            }));
          }
        }, {
          key: "followOrUnfollow",
          value: function followOrUnfollow(follow) {
            var _this39 = this;

            console.log(follow);

            if (follow.id) {
              // perform update
              return this.http.patch("/follows/".concat(follow.id), follow).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return follow;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this39.handleError(e);
              }));
            } else {
              return this.http.post('/follows/', follow).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                console.log(res);
                return res;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
                return _this39.handleError(e);
              }));
            }
          }
        }, {
          key: "getFollow",
          value: function getFollow(leaderId, followerId) {
            var _this40 = this;

            var filter = {
              where: {
                leaderId: leaderId
              }
            };

            if (followerId) {
              filter.where.followerId = followerId;
            } // console.log(filter);


            filter = 'filter=' + JSON.stringify(filter);
            var url = '/follows?' + filter;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this40.handleError(e);
            }));
          }
        }, {
          key: "deleteFollow",
          value: function deleteFollow(followId) {
            var _this41 = this;

            return this.http["delete"]("/follows/".concat(followId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this41.handleError(e);
            }));
          }
        }, {
          key: "getSchoolFollowers",
          value: function getSchoolFollowers(schoolId, pageInfo, filter) {
            var _this42 = this;

            if (!filter) {
              filter = {
                order: 'id DESC',
                include: [{
                  relation: 'photos',
                  scope: {
                    where: {
                      or: [{
                        coverImage: true
                      }, {
                        profile: true
                      }, {
                        flat: true
                      }]
                    }
                  }
                }, {
                  relation: 'address'
                }]
              };
            }

            if (pageInfo) {
              filter.limit = pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.limit;
              filter.offset = pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.offset;
            }

            var url = "/schools/".concat(schoolId, "/followers?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this42.handleError(e);
            }));
          }
        }, {
          key: "countSchoolFollower",
          value: function countSchoolFollower(schoolId, where) {
            var _this43 = this;

            var filter = where ? "?where=" + JSON.stringify(where) : '';
            var url = "/schools/".concat(schoolId, "/followers/count") + filter;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this43.handleError(e);
            }));
          }
        }, {
          key: "getUserFollowedSchools",
          value: function getUserFollowedSchools(userId, pageInfo) {
            var _this44 = this;

            var filter = {
              order: 'id DESC',
              include: [{
                relation: 'address'
              }, {
                relation: 'schoolDetails'
              }, {
                relation: 'photos',
                scope: {
                  where: {
                    or: [{
                      coverImage: true
                    }, {
                      profile: true
                    }, {
                      flat: true
                    }]
                  }
                }
              }]
            };

            if (pageInfo) {
              filter.offset = pageInfo.offset;
              filter.limit = pageInfo.limit;
            } // console.log(filter);


            var url = "/users/".concat(userId, "/followed-schools?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return _school_service__WEBPACK_IMPORTED_MODULE_7__["SchoolService"].flattenSchools(res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this44.handleError(e);
            }));
          }
        }]);

        return SocialService;
      }();

      SocialService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_5__["MyStorage"]
        }];
      };

      SocialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], SocialService);
      /***/
    },

    /***/
    "./src/app/shared/services/model-service/user.service.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/services/model-service/user.service.ts ***!
      \***************************************************************/

    /*! exports provided: UserService */

    /***/
    function srcAppSharedServicesModelServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../models/user */
      "./src/app/models/user.ts");
      /* harmony import */


      var _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _providers_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/my-media */
      "./src/app/models/my-media.ts");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, store, router) {
          var _this45 = this;

          _classCallCheck(this, UserService);

          this.http = http;
          this.store = store;
          this.router = router;
          this.token = null;
          this.redirectUrl = '';
          this.userAuthenticatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.userAuthenticatedSource$ = this.userAuthenticatedSource.asObservable();
          this.getToken().then(function (token) {
            _this45.token = token;
          });
        }

        _createClass(UserService, [{
          key: "announceUserAuthenticated",
          value: function announceUserAuthenticated(user) {
            this.userAuthenticatedSource.next(user);
          }
        }, {
          key: "signUp",
          value: function signUp(user) {
            var _this46 = this;

            return this.http.post('/signup', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this46.handleError(e);
            }));
          }
        }, {
          key: "login",
          value: function login(data) {
            var _this47 = this;

            return this.http.post('/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              _this47.token = res;

              if (_this47.token.token) {
                _this47.saveToken(_this47.token); // console.log(res);
                // fetch user data


                _this47.getMyProfile().subscribe(function (_) {
                  return _;
                });
              }

              _this47.router.navigateByUrl(_this47.redirectUrl);

              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this47.handleError(e);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token = null;
            this.deleteToken(); // delete jwt auth token

            this.deleteUserLocal(); // clear user details

            this.announceUserAuthenticated(null); // send signal to log user out
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.store.getObject('token');

                    case 2:
                      return _context8.abrupt("return", _context8.sent);

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            /** Save the authentication token **/
            this.store.setObject('token', token);
          }
        }, {
          key: "deleteToken",
          value: function deleteToken() {
            this.store.remove('token');
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            if (this.token) {
              return true;
            }

            return false;
          }
        }, {
          key: "RequestResetLink",
          value: function RequestResetLink(email) {// return this.userIdentity.resetPassword({ email: email }).pipe(
            //   map(res => {
            //     return res;
            //   }),
            //   catchError(e => this.handleError(e))
            // );
          }
        }, {
          key: "requestVerificationLink",
          value: function requestVerificationLink(email) {// return this.userIdentity.verifyEmail(email).pipe(
            //   map(res => {
            //     return res;
            //   }),
            //   catchError(e => this.handleError(e))
            // );
          }
        }, {
          key: "updateUser",
          value: function updateUser(user) {
            var _this48 = this;

            return this.http.patch('/users/' + user.id, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              var user = new _models_user__WEBPACK_IMPORTED_MODULE_7__["User"](res, res);

              _this48.store.setObject('user', user).then(function (_) {
                return _;
              });

              return user;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this48.handleError(e);
            }));
          } // Quick user peep

        }, {
          key: "getMe",
          value: function getMe() {
            var _this49 = this;

            return this.http.get('/users/me').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              /** Save the authentication token **/
              _this49.store.setObject('user', res);

              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this49.handleError(e);
            }));
          } // Get user details

        }, {
          key: "getMyProfile",
          value: function getMyProfile() {
            var _this50 = this;

            return this.http.get('/users/my-profile').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              /** Save the authentication token **/
              _this50.store.setObject('user', res);

              _this50.announceUserAuthenticated(res);

              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this50.handleError(e);
            }));
          }
        }, {
          key: "getUsers",
          value: function getUsers(pageInfo) {
            var _this51 = this;

            var filter;

            if (pageInfo) {
              filter = {
                // order: 'id DESC',
                offset: pageInfo.offset * pageInfo.limit,
                limit: pageInfo.limit
              };
            }

            filter = filter ? '?filter=' + JSON.stringify(filter) : '';
            var url = '/users' + filter; // console.log(url);

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this51.handleError(e);
            }));
          }
        }, {
          key: "getUsersByIds",
          value: function getUsersByIds(ids, pageInfo) {
            var _this52 = this;

            var filter;

            if (pageInfo) {
              filter = {
                offset: pageInfo.offset * pageInfo.limit,
                limit: pageInfo.limit,
                where: {
                  id: {
                    inq: ids
                  }
                }
              };
            }

            filter.include = [{
              relation: 'photos'
            }, {
              relation: 'address'
            }];
            filter = filter ? '?filter=' + JSON.stringify(filter) : '';
            var url = '/users' + filter; // console.log(url);

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this52.handleError(e);
            }));
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails(userId, filter) {
            var _this53 = this;

            if (!filter) {
              filter = {
                include: [{
                  relation: 'photos'
                }, {
                  relation: 'address'
                }, {
                  relation: 'userConfig'
                }, {
                  relation: 'post'
                }, {
                  relation: 'alumni',
                  scope: {
                    include: [{
                      relation: 'school'
                    }]
                  }
                }]
              };
            }

            var url = "/users/".concat(userId, "?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this53.handleError(e);
            }));
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile(userId) {
            var _this54 = this;

            var filter = {
              include: [{
                relation: 'photos',
                scope: {
                  where: {
                    profile: true
                  }
                }
              }, {
                relation: 'address'
              }]
            };
            var url = "/users/".concat(userId, "?filter=") + JSON.stringify(filter);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              // console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this54.handleError(e);
            }));
          }
        }, {
          key: "countUsers",
          value: function countUsers() {
            var _this55 = this;

            return this.http.get('/users/count').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              if (res) {
                return res.count;
              }

              return 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this55.handleError(e);
            }));
          }
        }, {
          key: "searchUser",
          value: function searchUser() {
            var _this56 = this;

            var searchKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
            var pageInfo = arguments.length > 1 ? arguments[1] : undefined;

            var _a;

            var filter = {};

            if (pageInfo) {
              filter = {
                offset: pageInfo.offset,
                limit: pageInfo.limit
              };
            }

            if (!searchKey) {
              searchKey = 'all';
            }

            var url = (_a = '/users-search/' + searchKey + '?filter=' + JSON.stringify(filter)) !== null && _a !== void 0 ? _a : '';
            console.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              console.log(res);
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              return _this56.handleError(e);
            }));
          }
          /**************************************/

          /************Lock screen***************/

          /**************************************/

        }, {
          key: "lockScreen",
          value: function lockScreen() {
            // generate the number
            var max = 1000,
                min = 100;
            var code = Math.floor(Math.random() * (max - min) + min);
            this.store.set('lock_code', code);
            return code;
          }
        }, {
          key: "unlockScreen",
          value: function unlockScreen(code) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var stored_code;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.store.get('lock_code');

                    case 2:
                      stored_code = _context9.sent;

                      if (!(stored_code === code)) {
                        _context9.next = 9;
                        break;
                      }

                      _context9.next = 6;
                      return this.store.remove('lock_code');

                    case 6:
                      return _context9.abrupt("return", true);

                    case 9:
                      return _context9.abrupt("return", false);

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "isScreenLocked",
          value: function isScreenLocked() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var stored_code;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.store.get('lock_code');

                    case 2:
                      stored_code = _context10.sent;

                      if (!stored_code) {
                        _context10.next = 5;
                        break;
                      }

                      return _context10.abrupt("return", true);

                    case 5:
                      return _context10.abrupt("return", false);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } /////////////////////////////////////////////////////////////////////////

          /*************Local user access*****/
          ///////////////////////////////////////////////////////////////////////////
          // Read user object from sesson storage

        }, {
          key: "getUserLocal",
          value: function getUserLocal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.store.getObject('user');

                    case 2:
                      return _context11.abrupt("return", _context11.sent);

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "deleteUserLocal",
          value: function deleteUserLocal() {
            this.store.remove('user');
          }
        }, {
          key: "setUserLocal",
          value: function setUserLocal(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.store.setObject('user', user);

                    case 2:
                      return _context12.abrupt("return", _context12.sent);

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getOwnerImage",
          value: function getOwnerImage(user, photoType) {
            var _a, _b, _c, _d;

            var identityPhoto = {
              cover: null,
              profile: null,
              flag: null
            };

            if (((_a = user === null || user === void 0 ? void 0 : user.photos) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              var _iterator = _createForOfIteratorHelper(user.photos),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var photo = _step.value;

                  if (photo.coverImage) {
                    identityPhoto.cover = photo;

                    if (photoType === src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__["PhotoType"].cover) {
                      return _config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + ((_b = identityPhoto === null || identityPhoto === void 0 ? void 0 : identityPhoto.cover) === null || _b === void 0 ? void 0 : _b.fileName);
                    }
                  }

                  if (photo.profile) {
                    identityPhoto.profile = photo;

                    if (photoType === src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__["PhotoType"].profile) {
                      return _config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + ((_c = identityPhoto === null || identityPhoto === void 0 ? void 0 : identityPhoto.profile) === null || _c === void 0 ? void 0 : _c.fileName);
                    }
                  }

                  if (photo.flag) {
                    identityPhoto.flag = photo;

                    if (photoType === src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__["PhotoType"].flag) {
                      return _config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + ((_d = identityPhoto === null || identityPhoto === void 0 ? void 0 : identityPhoto.flag) === null || _d === void 0 ? void 0 : _d.fileName);
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return _config__WEBPACK_IMPORTED_MODULE_2__["USER_DEFAULT_PHOTO_URL"];
          }
        }, {
          key: "getSelectedUserLocal",
          value: function getSelectedUserLocal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.store.getObject('selected-user');

                    case 2:
                      return _context13.abrupt("return", _context13.sent);

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "deleteSelectedUserLocal",
          value: function deleteSelectedUserLocal() {
            this.store.remove('selected-user');
          }
        }, {
          key: "setSelectedUserLocal",
          value: function setSelectedUserLocal(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.store.setObject('selected-user', user);

                    case 2:
                      return _context14.abrupt("return", _context14.sent);

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(e) {
            // console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(_providers_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"].myHttpErrorFormat(e, 'user'));
          }
        }], [{
          key: "getUserIdentityPhoto",
          value: function getUserIdentityPhoto(user) {
            var _a;

            console.log(user === null || user === void 0 ? void 0 : user.photos);
            var photo = {};
            (_a = user === null || user === void 0 ? void 0 : user.photos) === null || _a === void 0 ? void 0 : _a.forEach(function (ph) {
              var _a, _b, _c;

              if (ph.profile) {
                ph.fileUrl = (_a = _config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + ph.fileUrl) !== null && _a !== void 0 ? _a : _config__WEBPACK_IMPORTED_MODULE_2__["USER_DEFAULT_PHOTO_URL"];
                photo.profile = ph;
              }

              if (ph.coverImage) {
                ph.fileUrl = (_b = _config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + ph.fileUrl) !== null && _b !== void 0 ? _b : '';
                ph.fileUrl = (_c = _config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + ph.thumbnailUrl) !== null && _c !== void 0 ? _c : '';
                photo.cover = ph;
              }
            });

            if (!photo.profile && !(photo === null || photo === void 0 ? void 0 : photo.cover)) {
              photo.profile = new src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__["Photo"]();
              photo.profile.fileUrl = _config__WEBPACK_IMPORTED_MODULE_2__["USER_DEFAULT_PHOTO_URL"];
              photo.profile.thumbnailUrl = _config__WEBPACK_IMPORTED_MODULE_2__["USER_DEFAULT_PHOTO_URL"];
              photo.cover = new src_app_models_my_media__WEBPACK_IMPORTED_MODULE_10__["Photo"]();
              photo.cover.fileUrl = '';
              photo.cover.thumbnailUrl = '';
            }

            return photo;
          }
        }, {
          key: "getUserProfilePhotoUrl",
          value: function getUserProfilePhotoUrl(identityPhoto) {
            var _a;

            return ((_a = identityPhoto === null || identityPhoto === void 0 ? void 0 : identityPhoto.profile) === null || _a === void 0 ? void 0 : _a.thumbnailUrl) || _config__WEBPACK_IMPORTED_MODULE_2__["USER_DEFAULT_PHOTO_URL"];
          }
        }, {
          key: "getUserCoverPhotoUrl",
          value: function getUserCoverPhotoUrl(identityPhoto) {
            var _a;

            return ((_a = identityPhoto === null || identityPhoto === void 0 ? void 0 : identityPhoto.cover) === null || _a === void 0 ? void 0 : _a.thumbnailUrl) || _config__WEBPACK_IMPORTED_MODULE_2__["USER_DEFAULT_COVER_URL"];
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_8__["MyStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "./src/app/shared/services/my-interceptors.ts":
    /*!****************************************************!*\
      !*** ./src/app/shared/services/my-interceptors.ts ***!
      \****************************************************/

    /*! exports provided: TokenInterceptor, RootUrlInterceptor, ErrorHandlerInterceptor, httpInterceptorProviders */

    /***/
    function srcAppSharedServicesMyInterceptorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RootUrlInterceptor", function () {
        return RootUrlInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function () {
        return ErrorHandlerInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
        return httpInterceptorProviders;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "./node_modules/rxjs/internal/operators/map.js");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var _model_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");

      var TokenInterceptor = /*#__PURE__*/function () {
        /**
         *
         */
        function TokenInterceptor(userService) {
          _classCallCheck(this, TokenInterceptor);

          this.userService = userService;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            // All HTTP requests are going to go through this method
            // console.log('INTERCEPTOR');
            // We retrieve the token, if any
            // const token = this.userService.getToken();
            var token = this.userService.token; // if content type is not set, default to  application/json

            var newHeaders = req.headers;

            if (newHeaders.get('Content-Type') == null && newHeaders.get('boundary') !== null) {// Uploading, don't append any headers;
            } else {
              // console.log('Setting content type')
              newHeaders = newHeaders.set('Content-Type', 'application/json');
            } // console.log(newHeaders.get('Content-Type'));


            if (token) {
              // If we have a token, we append it to our new headers
              newHeaders = newHeaders.set('Authorization', 'Bearer ' + token.token);
            } // Finally we have to clone our request with our new headers
            // This is required because HttpRequests are immutable


            var authReq = req.clone({
              headers: newHeaders
            }); // Then we return an Observable that will run the request
            // or pass it to the next interceptor if any

            return next.handle(authReq);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ctorParameters = function () {
        return [{
          type: _model_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }];
      };

      TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], TokenInterceptor);

      var RootUrlInterceptor = /*#__PURE__*/function () {
        /**
         *
         */
        function RootUrlInterceptor() {
          _classCallCheck(this, RootUrlInterceptor);
        }

        _createClass(RootUrlInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authReq = req.clone({
              url: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["API_ROOT_URL"] + req.url)
            }); // console.log(authReq);

            return next.handle(authReq);
          }
        }]);

        return RootUrlInterceptor;
      }();

      RootUrlInterceptor.ctorParameters = function () {
        return [];
      };

      RootUrlInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], RootUrlInterceptor);

      var ErrorHandlerInterceptor = /*#__PURE__*/function () {
        /**
         *
         */
        function ErrorHandlerInterceptor(router) {
          _classCallCheck(this, ErrorHandlerInterceptor);

          this.router = router;
        }

        _createClass(ErrorHandlerInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this57 = this;

            // console.log('Error handling: ');
            return next.handle(req).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              // onError
              console.log(err);
              var myError = err;

              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                console.log(err.status);
                console.log(err.statusText);

                if (err.status === 401) {
                  // redirect the user to login page
                  // 401 unauthorised user
                  console.log('Unauthenticated');
                  myError = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]({
                    status: 401,
                    statusText: 'Authentication failed'
                  });

                  _this57.router.navigateByUrl('/login-auth');
                } else if (err.status === 0) {
                  console.log('No connection');
                  myError = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]({
                    status: 0,
                    statusText: 'No internet connection'
                  });
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(myError); // forward error to service or component for proper handling
            }));
          }
        }]);

        return ErrorHandlerInterceptor;
      }();

      ErrorHandlerInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      ErrorHandlerInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], ErrorHandlerInterceptor);
      /** Http interceptor providers in outside-in order */

      var httpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: TokenInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: RootUrlInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: ErrorHandlerInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    "./src/app/shared/services/my-signals.ts":
    /*!***********************************************!*\
      !*** ./src/app/shared/services/my-signals.ts ***!
      \***********************************************/

    /*! exports provided: MySignals */

    /***/
    function srcAppSharedServicesMySignalsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySignals", function () {
        return MySignals;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var MySignals = /*#__PURE__*/function () {
        function MySignals(store) {
          _classCallCheck(this, MySignals);

          this.store = store;
          this.loggerSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.loggerSource$ = this.loggerSource.asObservable();
          this.closeModalSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.closeModalSource$ = this.closeModalSource.asObservable();
          this.uploadCompleteSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.uploadCompleteSource$ = this.uploadCompleteSource.asObservable();
          this.allUploadCompleteSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.allUploadCompleteSource$ = this.allUploadCompleteSource.asObservable();
          this.selectedUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.selectedUsersSource$ = this.selectedUsersSource.asObservable();
          this.selectedSchoolsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.selectedSchoolsSource$ = this.selectedSchoolsSource.asObservable();
          this.selectedSchoolSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.selectedSchoolSource$ = this.selectedSchoolSource.asObservable();
          this.countSchoolSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.countSchoolSource$ = this.countSchoolSource.asObservable();
          this.selectedAlumniSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.selectedAlumniSource$ = this.selectedAlumniSource.asObservable();
          this.selectedAlumnusSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.selectedAlumnusSource$ = this.selectedAlumnusSource.asObservable();
          this.selectedSchoolAlumniCountSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.selectedSchoolAlumniCountSource$ = this.selectedSchoolAlumniCountSource.asObservable();
          this.imagesLoadedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.imagesLoadedSource$ = this.imagesLoadedSource.asObservable();
          this.videosLoadedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.videosLoadedSource$ = this.videosLoadedSource.asObservable();
          this.profilePhotoChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.profilePhotoChangeSource$ = this.profilePhotoChangeSource.asObservable();
          this.flagPhotoChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.flagPhotoChangeSource$ = this.flagPhotoChangeSource.asObservable();
          this.coverPhotoChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.coverPhotoChangeSource$ = this.coverPhotoChangeSource.asObservable();
          this.locationChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.locationChangeSource$ = this.locationChangeSource.asObservable(); // private selectedPoliciesSource = new Subject<Policy[]>();
          // selectedPoliciesSource$ = this.selectedPoliciesSource.asObservable();
          // private selectedPolicySource = new Subject<Policy>();
          // selectedPolicySource$ = this.selectedPolicySource.asObservable();
          // private countPolicySource = new Subject<number>();
          // countPolicySource$ = this.countPolicySource.asObservable();
          // private policyChangeSource = new Subject<boolean>();
          // policyChangeSource$ = this.policyChangeSource.asObservable();
          // private selectedRolesSource = new Subject<Role[]>();
          // selectedRolesSource$ = this.selectedRolesSource.asObservable();
          // private selectedRoleSource = new Subject<Role>();
          // selectedRoleSource$ = this.selectedRoleSource.asObservable();
          // private countRoleSource = new Subject<number>();
          // countRoleSource$ = this.countRoleSource.asObservable();
          // private newRoleSource = new Subject<Policy>();
          // newRoleSource$ = this.newRoleSource.asObservable();

          this.audioRecordingCompleteSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.audioRecordingCompleteSource$ = this.audioRecordingCompleteSource.asObservable(); // announceSelectedPolicies(policy: Policy[]) {
          //   this.selectedPoliciesSource.next(policy);
          // }
          // announcePolicy(policy: Policy) {
          //   this.selectedPolicySource.next(policy);
          // }
          // announcePoliciesCount(total: number) {
          //   this.countPolicySource.next(total);
          // }
          // announcePolicyChange(changed: boolean) {
          //   this.policyChangeSource.next(changed);
          // }
          // announceSelectedRoles(role: Role[]) {
          //   this.selectedRolesSource.next(role);
          // }
          // announceRole(role: Role) {
          //   this.selectedRoleSource.next(role);
          // }
          // announceRolesCount(total: number) {
          //   this.countRoleSource.next(total);
          // }
          // announceNewRole(role: Policy) {
          //   this.newRoleSource.next(role);
          // }

          /***************************************************
           *  ****************Reload signals******************
           *  ************************************************/

          this.reloadSchoolsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.reloadSchoolsSource$ = this.reloadSchoolsSource.asObservable();
          this.reloadUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.reloadUsersSource$ = this.reloadUsersSource.asObservable();
          this.reloadUserSchoolsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.reloadUserSchoolsSource$ = this.reloadUserSchoolsSource.asObservable();
          this.selectedUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.selectedUserSource$ = this.selectedUserSource.asObservable();
          this.reloadPostsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.reloadPostsSource$ = this.reloadPostsSource.asObservable();
          this.emojiCharSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.emojiCharSource$ = this.emojiCharSource.asObservable();
          /****************FOLLOWING AND UNFOLLOWING USERS*********** */

          this.followSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.followSource$ = this.followSource.asObservable();
        }

        _createClass(MySignals, [{
          key: "announceAudioRecordingComplete",
          value: function announceAudioRecordingComplete(audioFile) {
            this.audioRecordingCompleteSource.next(audioFile);
          }
        }, {
          key: "log",
          value: function log(data) {
            this.loggerSource.next(data);
          }
        }, {
          key: "announceCloseModal",
          value: function announceCloseModal(modalName) {
            this.closeModalSource.next(modalName);
          }
        }, {
          key: "announceSelectedUsers",
          value: function announceSelectedUsers(users) {
            this.selectedUsersSource.next(users);
          }
        }, {
          key: "announceSelectedSchools",
          value: function announceSelectedSchools(schools) {
            this.selectedSchoolsSource.next(schools);
          }
        }, {
          key: "announceSchool",
          value: function announceSchool(school) {
            this.selectedSchoolSource.next(school);
          }
        }, {
          key: "announceSchoolsCount",
          value: function announceSchoolsCount(total) {
            this.countSchoolSource.next(total);
          }
        }, {
          key: "announceSelectedSchoolAlumniCount",
          value: function announceSelectedSchoolAlumniCount(total) {
            this.selectedSchoolAlumniCountSource.next(total);
          }
        }, {
          key: "announceAlumni",
          value: function announceAlumni(alumni) {
            this.selectedAlumniSource.next(alumni);
          }
        }, {
          key: "announceAlumnus",
          value: function announceAlumnus(alumnus) {
            this.selectedAlumnusSource.next(alumnus);
          }
        }, {
          key: "announceImagesLoaded",
          value: function announceImagesLoaded(photos) {
            this.imagesLoadedSource.next(photos);
          }
        }, {
          key: "announceVideosLoaded",
          value: function announceVideosLoaded(videos) {
            this.videosLoadedSource.next(videos);
          }
        }, {
          key: "announceProfilePhotoChange",
          value: function announceProfilePhotoChange(photo) {
            this.profilePhotoChangeSource.next(photo);
          }
        }, {
          key: "announceCoverPhotoChange",
          value: function announceCoverPhotoChange(photo) {
            this.coverPhotoChangeSource.next(photo);
          }
        }, {
          key: "announceFlagPhotoChange",
          value: function announceFlagPhotoChange(photo) {
            this.flagPhotoChangeSource.next(photo);
          }
        }, {
          key: "announceLocationChange",
          value: function announceLocationChange(latLng) {
            this.locationChangeSource.next(latLng);
          }
        }, {
          key: "announceAllUploadCompleteSource",
          value: function announceAllUploadCompleteSource(files) {
            this.allUploadCompleteSource.next(files);
          }
        }, {
          key: "announceUploadCompleteSource",
          value: function announceUploadCompleteSource(file) {
            this.uploadCompleteSource.next(file);
          }
        }, {
          key: "announceSchoolsReload",
          value: function announceSchoolsReload() {
            this.reloadSchoolsSource.next();
          }
        }, {
          key: "announceUsersReload",
          value: function announceUsersReload() {
            this.reloadUsersSource.next();
          }
        }, {
          key: "announceUserSchoolsReload",
          value: function announceUserSchoolsReload() {
            this.reloadUserSchoolsSource.next();
          }
        }, {
          key: "announceSelectedUserChange",
          value: function announceSelectedUserChange() {
            this.selectedUserSource.next();
          }
        }, {
          key: "announcePostReload",
          value: function announcePostReload() {
            this.reloadPostsSource.next();
          }
        }, {
          key: "announceEmojiChar",
          value: function announceEmojiChar(_char) {
            this.emojiCharSource.next(_char);
          }
        }, {
          key: "announceFollowed",
          value: function announceFollowed(isFollowed) {
            this.followSource.next(isFollowed);
          }
        }]);

        return MySignals;
      }();

      MySignals.ctorParameters = function () {
        return [{
          type: _providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__["MyStorage"]
        }];
      };

      MySignals = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], MySignals);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/authentication/auth-guard.service.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/services/providers/authentication/auth-guard.service.ts ***!
      \********************************************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function srcAppSharedServicesProvidersAuthenticationAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _model_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(userService, router) {
          _classCallCheck(this, AuthGuardService);

          this.userService = userService;
          this.router = router;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin(url) {
            if (this.userService.isAuthenticated()) {
              return true;
            } // Store the attempted URL for redirecting


            this.userService.redirectUrl = url; // Redirect to the login page

            return this.router.parseUrl('/login');
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(next, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _model_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuardService);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/authentication/screen-lock-guard.service.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/shared/services/providers/authentication/screen-lock-guard.service.ts ***!
      \***************************************************************************************/

    /*! exports provided: ScreenLockGuardService */

    /***/
    function srcAppSharedServicesProvidersAuthenticationScreenLockGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenLockGuardService", function () {
        return ScreenLockGuardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _model_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ScreenLockGuardService = /*#__PURE__*/function () {
        function ScreenLockGuardService(auth, router) {
          _classCallCheck(this, ScreenLockGuardService);

          this.auth = auth;
          this.router = router;
        }

        _createClass(ScreenLockGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.auth.isScreenLocked();

                    case 2:
                      if (_context15.sent) {
                        _context15.next = 7;
                        break;
                      }

                      console.log('Authenticated user');
                      return _context15.abrupt("return", true);

                    case 7:
                      // if its login dont reload
                      // alert("hello");
                      if (this.router.url.indexOf('login') < 0) {
                        this.router.navigate(['/auth/lock']);
                      }

                      return _context15.abrupt("return", false);

                    case 9:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return ScreenLockGuardService;
      }();

      ScreenLockGuardService.ctorParameters = function () {
        return [{
          type: _model_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ScreenLockGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ScreenLockGuardService);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/customHammerConfig.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/providers/customHammerConfig.ts ***!
      \*****************************************************************/

    /*! exports provided: IonicGestureConfig */

    /***/
    function srcAppSharedServicesProvidersCustomHammerConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IonicGestureConfig", function () {
        return IonicGestureConfig;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /**
       * @hidden
       * This class overrides the default Angular gesture config.
       */


      var IonicGestureConfig = /*#__PURE__*/function (_angular_platform_bro) {
        _inherits(IonicGestureConfig, _angular_platform_bro);

        var _super6 = _createSuper(IonicGestureConfig);

        function IonicGestureConfig() {
          _classCallCheck(this, IonicGestureConfig);

          return _super6.apply(this, arguments);
        }

        return IonicGestureConfig;
      }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"]);

      IonicGestureConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IonicGestureConfig);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/local-media.service.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/services/providers/local-media.service.ts ***!
      \******************************************************************/

    /*! exports provided: LocalMediaService */

    /***/
    function srcAppSharedServicesProvidersLocalMediaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalMediaService", function () {
        return LocalMediaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/photo-library/ngx */
      "./node_modules/@ionic-native/photo-library/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/streaming-media/ngx */
      "./node_modules/@ionic-native/streaming-media/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/video-editor/ngx */
      "./node_modules/@ionic-native/video-editor/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _permission_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./permission.service */
      "./src/app/shared/services/providers/permission.service.ts");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js"); // import { Media, MediaObject } from '@ionic-native/media/ngx';


      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"],
          CapacitorVideoPlayer = _capacitor_core__WEBP.CapacitorVideoPlayer,
          Device = _capacitor_core__WEBP.Device; // android
      // without types

      var VoiceRecorder = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].VoiceRecorder;
      var _capacitor_core__WEBP2 = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"],
          Camera = _capacitor_core__WEBP2.Camera,
          Filesystem = _capacitor_core__WEBP2.Filesystem,
          VideoRecorder = _capacitor_core__WEBP2.VideoRecorder;

      var LocalMediaService = /*#__PURE__*/function () {
        function LocalMediaService(userService, file, platform, filePath, signals, streamingMedia, androidPermissions, imagePicker, fileChooser, mediaCapture, videoEditor, photoLibrary, permissionService, fileTransfer, media) {
          var _this58 = this;

          _classCallCheck(this, LocalMediaService);

          this.userService = userService;
          this.file = file;
          this.platform = platform;
          this.filePath = filePath;
          this.signals = signals;
          this.streamingMedia = streamingMedia;
          this.androidPermissions = androidPermissions;
          this.imagePicker = imagePicker;
          this.fileChooser = fileChooser;
          this.mediaCapture = mediaCapture;
          this.videoEditor = videoEditor;
          this.photoLibrary = photoLibrary;
          this.permissionService = permissionService;
          this.fileTransfer = fileTransfer;
          this.media = media;
          this.redirectUrl = '';
          this.mediaFolderName = 'media';
          this.mediaPath = '';
          this.mediaFullPath = '';
          this.mediaPath = this.file.dataDirectory;
          this.mediaFullPath = this.mediaPath + this.mediaFolderName;
          this.createMediaDirectory().then(function (results) {
            console.log('Media directory created');
            console.log(results);
          })["catch"](function (e) {
            return console.error('Media directory creation failed');
          });
          this.getPermissions().then(function (_) {
            return _;
          })["catch"](function (error) {
            console.log(error);
          });
          this.userService.getUserLocal().then(function (user) {
            _this58.user = user;
          });
        }

        _createClass(LocalMediaService, [{
          key: "getPermissions",
          value: function getPermissions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.prev = 0;
                      _context16.next = 3;
                      return this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA);

                    case 3:
                      if (_context16.sent.hasPermission) {
                        _context16.next = 6;
                        break;
                      }

                      _context16.next = 6;
                      return this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);

                    case 6:
                      _context16.next = 10;
                      break;

                    case 8:
                      _context16.prev = 8;
                      _context16.t0 = _context16["catch"](0);

                    case 10:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this, [[0, 8]]);
            }));
          }
        }, {
          key: "learnFilePaths",
          value: function learnFilePaths() {// this.signals.log(this.file.applicationDirectory); //1
            // this.signals.log(this.file.applicationStorageDirectory);//2
            // this.signals.log(this.file.cacheDirectory);//3
            // this.signals.log(this.file.dataDirectory);//4
            // this.signals.log(this.file.documentsDirectory);//5
            // this.signals.log(this.file.externalApplicationStorageDirectory);//6
            // this.signals.log(this.file.externalCacheDirectory);//7
            // this.signals.log(this.file.externalDataDirectory);//8
            // this.signals.log(this.file.externalRootDirectory);//9
            // this.signals.log(this.file.sharedDirectory);//10
            // this.signals.log(this.file.syncedDataDirectory);//11
            // this.signals.log(this.file.tempDirectory);//12
            // this.signals.log('');//13
            // this.signals.log('');//14
            // this.signals.log(await (await this.file.resolveDirectoryUrl(this.file.dataDirectory)).fullPath);//15
            // this.signals.log(await (await this.file.resolveDirectoryUrl(this.file.dataDirectory)).nativeURL);//16
            // this.signals.log(await (await this.file.resolveDirectoryUrl(this.file.dataDirectory)).toInternalURL());//17
            // this.signals.log(await (await this.file.resolveDirectoryUrl(this.file.dataDirectory)).toURL());//18
            // this.signals.log(ph.id);//19
            // this.signals.log(ph.nativeURL);//20
            // this.signals.log(await this.localMediaService.convertPhotoLibraryPathToFullPath(ph));//22
            // this.signals.log(await this.localMediaService.convertPhotoLibraryPathToUrl(ph));//23
          }
        }, {
          key: "resolveFilePath",
          value: function resolveFilePath(nativePath) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!this.platform.is('ios')) {
                        _context17.next = 4;
                        break;
                      }

                      return _context17.abrupt("return", nativePath);

                    case 4:
                      if (!this.platform.is('android')) {
                        _context17.next = 10;
                        break;
                      }

                      _context17.next = 7;
                      return this.filePath.resolveNativePath(nativePath);

                    case 7:
                      return _context17.abrupt("return", _context17.sent);

                    case 10:
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Platform is not supported');

                    case 11:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          } // async getFileNameNative(nativePath: string) {
          //   const path = await this.resolveFilePath(nativePath);
          //   return path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('?'));
          // }

        }, {
          key: "getFileName",
          value: function getFileName(resolvedPath) {
            return resolvedPath.substring(resolvedPath.lastIndexOf('/') + 1);
          }
        }, {
          key: "getLocalFileUrl",
          value: function getLocalFileUrl(resolvedPath) {
            try {
              var url = resolvedPath.split(';')[0];
              console.log('My resolved url:', url);
              return url;
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "convertPhotoLibraryPathToNativeUrl",
          value: function convertPhotoLibraryPathToNativeUrl(ph) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.file.resolveLocalFilesystemUrl('file://' + ((_a = ph === null || ph === void 0 ? void 0 : ph.id) === null || _a === void 0 ? void 0 : _a.split(';')[1]));

                    case 2:
                      return _context18.abrupt("return", _context18.sent.nativeURL);

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "convertPhotoLibraryPathToInternalUrl",
          value: function convertPhotoLibraryPathToInternalUrl(ph) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.file.resolveLocalFilesystemUrl('file://' + ((_a = ph === null || ph === void 0 ? void 0 : ph.id) === null || _a === void 0 ? void 0 : _a.split(';')[1]));

                    case 2:
                      return _context19.abrupt("return", _context19.sent.toInternalURL());

                    case 3:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "convertPhotoLibraryPathToUrl",
          value: function convertPhotoLibraryPathToUrl(ph) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.file.resolveLocalFilesystemUrl('file://' + ((_a = ph === null || ph === void 0 ? void 0 : ph.id) === null || _a === void 0 ? void 0 : _a.split(';')[1]));

                    case 2:
                      return _context20.abrupt("return", _context20.sent.toURL());

                    case 3:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "convertPhotoLibraryPathToFullPath",
          value: function convertPhotoLibraryPathToFullPath(ph) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.file.resolveLocalFilesystemUrl('file://' + ((_a = ph === null || ph === void 0 ? void 0 : ph.id) === null || _a === void 0 ? void 0 : _a.split(';')[1]));

                    case 2:
                      return _context21.abrupt("return", _context21.sent.fullPath);

                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "createFileName",
          value: function createFileName(oldFileName) {
            var _a;

            var ext = oldFileName.split('.').pop();
            var d = Date.now();
            return "".concat((_a = this.user) === null || _a === void 0 ? void 0 : _a.id, "_").concat(d, ".").concat(ext);
          }
        }, {
          key: "createMediaDirectory",
          value: function createMediaDirectory() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var options;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      options = {
                        path: this.mediaFolderName,
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["FilesystemDirectory"].Data,
                        recursive: true // create any parent directory

                      };
                      _context22.prev = 1;
                      _context22.next = 4;
                      return Filesystem.mkdir(options);

                    case 4:
                      return _context22.abrupt("return", _context22.sent);

                    case 7:
                      _context22.prev = 7;
                      _context22.t0 = _context22["catch"](1);
                      console.log(_context22.t0);

                    case 10:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this, [[1, 7]]);
            }));
          }
        }, {
          key: "writeToMediaDirectory",
          value: function writeToMediaDirectory(data, filename) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.prev = 0;
                      _context23.next = 3;
                      return Filesystem.writeFile({
                        data: data,
                        path: this.mediaFolderName + '/' + filename,
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["FilesystemDirectory"].Data // sho

                      });

                    case 3:
                      return _context23.abrupt("return", _context23.sent);

                    case 6:
                      _context23.prev = 6;
                      _context23.t0 = _context23["catch"](0);
                      console.log(_context23.t0);

                    case 9:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this, [[0, 6]]);
            }));
          }
        }, {
          key: "getMediaUri",
          value: function getMediaUri(fileName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return Filesystem.getUri({
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["FilesystemDirectory"].Data,
                        path: this.mediaFolderName + '/' + fileName
                      });

                    case 2:
                      return _context24.abrupt("return", _context24.sent);

                    case 3:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          } // take photo, rename it and write to media folder
          // and return photoLocal object

        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var options, photo, fileName;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      options = {
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Uri,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraSource"].Camera,
                        correctOrientation: true,
                        preserveAspectRatio: true,
                        quality: 70,
                        allowEditing: true
                      }; // get the photo object

                      _context25.prev = 1;
                      _context25.next = 4;
                      return Camera.getPhoto(options);

                    case 4:
                      photo = _context25.sent;
                      // request to take Photo or select Photo
                      fileName = (_a = photo === null || photo === void 0 ? void 0 : photo.path) === null || _a === void 0 ? void 0 : _a.substr(((_b = photo === null || photo === void 0 ? void 0 : photo.path) === null || _b === void 0 ? void 0 : _b.lastIndexOf('/')) + 1); // create a local photo object and return

                      return _context25.abrupt("return", {
                        id: '0;' + (photo === null || photo === void 0 ? void 0 : photo.path),
                        nativeURL: photo === null || photo === void 0 ? void 0 : photo.path,
                        thumbnailNativeURL: photo === null || photo === void 0 ? void 0 : photo.path,
                        resolvedURL: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(photo === null || photo === void 0 ? void 0 : photo.path),
                        thumbnailResolvedURL: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(photo === null || photo === void 0 ? void 0 : photo.path),
                        fileName: fileName,
                        creationDate: new Date(Date.now())
                      });

                    case 9:
                      _context25.prev = 9;
                      _context25.t0 = _context25["catch"](1);
                      this.signals.log(_context25.t0);

                    case 12:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this, [[1, 9]]);
            }));
          }
        }, {
          key: "writePhotoToMediaDirectory",
          value: function writePhotoToMediaDirectory(fullPath) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var fileName, fileResult, uri, resolvedUri;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.prev = 0;
                      fileName = this.createFileName(fullPath); // create new unique file name; dummy file name as arg to generate new

                      _context26.next = 4;
                      return Filesystem.readFile({
                        path: fullPath
                      });

                    case 4:
                      fileResult = _context26.sent;
                      _context26.next = 7;
                      return this.writeToMediaDirectory(fileResult.data, fileName);

                    case 7:
                      _context26.next = 9;
                      return this.getMediaUri(fileName);

                    case 9:
                      uri = _context26.sent.uri;
                      // get full path of the file in the media folder
                      resolvedUri = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(uri); // create a local photo object and return

                      return _context26.abrupt("return", {
                        id: '0;' + uri,
                        nativeURL: uri,
                        thumbnailNativeURL: uri,
                        resolvedURL: resolvedUri,
                        thumbnailResolvedURL: resolvedUri,
                        fileName: fileName,
                        creationDate: new Date(Date.now())
                      });

                    case 14:
                      _context26.prev = 14;
                      _context26.t0 = _context26["catch"](0);
                      console.log(_context26.t0);

                    case 17:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this, [[0, 14]]);
            }));
          }
        }, {
          key: "selectPhotosFromDevice",
          value: function selectPhotosFromDevice() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var _this59 = this;

              var MAX_PHOTO_POST_COUNT, options, photos, results;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      MAX_PHOTO_POST_COUNT = 10;
                      options = {
                        // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
                        // selection of a single image, the plugin will return it.
                        maximumImagesCount: MAX_PHOTO_POST_COUNT,
                        // max width and height to allow the images to be.  Will keep aspect
                        // ratio no matter what.  So if both are 800, the returned image
                        // will be at most 800 pixels wide and 800 pixels tall.  If the width is
                        // 800 and height 0 the image will be 800 pixels wide if the source
                        // is at least that wide.
                        width: 800,
                        height: 800,
                        // quality of resized image, defaults to 100
                        quality: 70,
                        // output type, defaults to FILE_URIs.
                        // available options are
                        // window.imagePicker.OutputType.FILE_URI (0) or
                        // window.imagePicker.OutputType.BASE64_STRING (1)
                        outputType: 0,
                        allow_video: true,
                        allow_image: false,
                        allow_photo: false
                      };
                      photos = [];
                      _context27.prev = 3;
                      _context27.next = 6;
                      return this.imagePicker.getPictures(options);

                    case 6:
                      results = _context27.sent;
                      results.forEach(function (fileUri) {
                        photos.push({
                          id: '0;' + fileUri,
                          fileName: _this59.getFileName(fileUri),
                          nativeURL: fileUri,
                          thumbnailNativeURL: fileUri,
                          creationDate: new Date(Date.now()),
                          resolvedURL: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(fileUri),
                          thumbnailResolvedURL: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(fileUri)
                        });
                      });
                      return _context27.abrupt("return", photos);

                    case 11:
                      _context27.prev = 11;
                      _context27.t0 = _context27["catch"](3);
                      console.log(_context27.t0);

                    case 14:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this, [[3, 11]]);
            }));
          }
        }, {
          key: "recordVideo",
          value: function recordVideo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var data, uri, fileName, resolvedUri, vid, thumbUrl;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.prev = 0;
                      _context28.next = 3;
                      return this.mediaCapture.captureVideo();

                    case 3:
                      data = _context28.sent;

                      if (!((data === null || data === void 0 ? void 0 : data.length) > 0)) {
                        _context28.next = 18;
                        break;
                      }

                      console.log(data[0].fullPath);
                      uri = data[0].fullPath;
                      fileName = uri.substr(uri.lastIndexOf('/') + 1);
                      resolvedUri = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(uri);
                      console.log('working'); // create a local video object and return

                      vid = {
                        id: '0;' + uri,
                        nativeURL: uri,
                        posterNativeURL: uri,
                        resolvedURL: resolvedUri,
                        posterResolvedURL: resolvedUri,
                        fileName: fileName,
                        creationDate: new Date(Date.now())
                      };
                      _context28.next = 13;
                      return this.generateVideoThumbnail(vid, true);

                    case 13:
                      thumbUrl = _context28.sent;
                      console.log(thumbUrl);
                      vid.posterNativeURL = thumbUrl;
                      vid.posterResolvedURL = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(thumbUrl);
                      return _context28.abrupt("return", vid);

                    case 18:
                      _context28.next = 23;
                      break;

                    case 20:
                      _context28.prev = 20;
                      _context28.t0 = _context28["catch"](0);
                      console.log(_context28.t0);

                    case 23:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this, [[0, 20]]);
            }));
          }
        }, {
          key: "selectVideoFromDevice",
          value: function selectVideoFromDevice() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var path, vid, thumbUrl;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.prev = 0;
                      _context29.next = 3;
                      return this.fileChooser.open()["catch"](function (e) {
                        return console.log(e);
                      });

                    case 3:
                      path = _context29.sent;
                      _context29.next = 6;
                      return this.filePath.resolveNativePath(path)["catch"](function (e) {
                        return console.log(e);
                      });

                    case 6:
                      path = _context29.sent;

                      if (this.isVideo(path)) {
                        _context29.next = 9;
                        break;
                      }

                      return _context29.abrupt("return");

                    case 9:
                      path = this.correctNativeFilePath(path);
                      console.log(path);
                      vid = {
                        id: '0;' + path,
                        nativeURL: path,
                        posterNativeURL: path,
                        resolvedURL: '',
                        posterResolvedURL: '',
                        fileName: path.substr(path.lastIndexOf('/') + 1),
                        creationDate: new Date(Date.now())
                      };
                      vid.resolvedURL = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(vid.nativeURL);
                      _context29.next = 15;
                      return this.generateVideoThumbnail(vid);

                    case 15:
                      thumbUrl = _context29.sent;
                      console.log(thumbUrl);
                      vid.posterNativeURL = thumbUrl;
                      vid.posterResolvedURL = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(thumbUrl);
                      return _context29.abrupt("return", vid);

                    case 22:
                      _context29.prev = 22;
                      _context29.t0 = _context29["catch"](0);
                      console.log(_context29.t0);

                    case 25:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this, [[0, 22]]);
            }));
          }
        }, {
          key: "generateVideoThumbnail",
          value: function generateVideoThumbnail(vid) {
            var toMediaFolder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var outputFileName, option, thumbURL, fileResult, uri;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      outputFileName = 'thumb_' + vid.fileName.substr(0, vid.fileName.lastIndexOf('.'));
                      console.log(outputFileName);
                      _context30.prev = 2;
                      option = {
                        fileUri: vid.nativeURL,

                        /** The file name for the JPEG image */
                        outputFileName: outputFileName,

                        /** Location in the video to create the thumbnail (in seconds) */
                        atTime: 3,

                        /** Width of the thumbnail. */
                        width: 800,

                        /** Height of the thumbnail. */
                        height: 600,

                        /** Quality of the thumbnail (between 1 and 100). */
                        quality: 90
                      };
                      _context30.next = 6;
                      return this.videoEditor.createThumbnail(option)["catch"](function (e) {
                        return console.log(e);
                      });

                    case 6:
                      thumbURL = _context30.sent;
                      console.log(thumbURL);

                      if (!toMediaFolder) {
                        _context30.next = 27;
                        break;
                      }

                      _context30.next = 11;
                      return Filesystem.readFile({
                        path: this.correctNativeFilePath(thumbURL)
                      })["catch"](function (e) {
                        return console.log(e);
                      });

                    case 11:
                      fileResult = _context30.sent;
                      _context30.next = 14;
                      return this.writeToMediaDirectory(fileResult.data, outputFileName + '.jpg')["catch"](function (e) {
                        return console.log(e);
                      });

                    case 14:
                      _context30.next = 16;
                      return this.getMediaUri(outputFileName + '.jpg')["catch"](function (e) {
                        console.log(e);
                      });

                    case 16:
                      _context30.t1 = _a = _context30.sent;
                      _context30.t0 = _context30.t1 === null;

                      if (_context30.t0) {
                        _context30.next = 20;
                        break;
                      }

                      _context30.t0 = _a === void 0;

                    case 20:
                      if (!_context30.t0) {
                        _context30.next = 24;
                        break;
                      }

                      _context30.t2 = void 0;
                      _context30.next = 25;
                      break;

                    case 24:
                      _context30.t2 = _a.uri;

                    case 25:
                      uri = _context30.t2;
                      return _context30.abrupt("return", uri);

                    case 27:
                      return _context30.abrupt("return", thumbURL);

                    case 30:
                      _context30.prev = 30;
                      _context30.t3 = _context30["catch"](2);
                      console.log(_context30.t3);

                    case 33:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this, [[2, 30]]);
            }));
          }
        }, {
          key: "writeVideoToMediaDirectory",
          value: function writeVideoToMediaDirectory(fullPath) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var fileName, fileResult, uri, resolvedUri, mediaObject, vid, thumbUrl;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      fileName = this.createFileName(fullPath); // create new unique file name; dummy file name as arg to generate new

                      _context31.next = 3;
                      return Filesystem.readFile({
                        path: fullPath
                      });

                    case 3:
                      fileResult = _context31.sent;
                      _context31.next = 6;
                      return this.writeToMediaDirectory(fileResult.data, fileName);

                    case 6:
                      _context31.next = 8;
                      return this.getMediaUri(fileName);

                    case 8:
                      uri = _context31.sent.uri;
                      // get full path of the file in the media folder
                      resolvedUri = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(uri);
                      mediaObject = this.media.create(uri);
                      console.log('working'); // create a local video object and return

                      vid = {
                        id: '0;' + uri,
                        nativeURL: uri,
                        posterNativeURL: uri,
                        resolvedURL: resolvedUri,
                        posterResolvedURL: resolvedUri,
                        fileName: fileName,
                        creationDate: new Date(Date.now()),
                        length: mediaObject.getDuration()
                      };
                      _context31.next = 15;
                      return this.generateVideoThumbnail(vid, true);

                    case 15:
                      thumbUrl = _context31.sent;
                      console.log(thumbUrl);
                      vid.posterNativeURL = thumbUrl;
                      vid.posterResolvedURL = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(thumbUrl);
                      return _context31.abrupt("return", vid);

                    case 20:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          } // /***
          //  * Helper functions
          //  */

        }, {
          key: "correctNativeFilePath",
          value: function correctNativeFilePath(fullPath) {
            var myPath = fullPath; // Make sure we copy from the right location

            if (fullPath.indexOf('file://') < 0) {
              myPath = 'file://' + fullPath;
            }

            return myPath;
          } // async recordAudio() {
          //   try {
          //     return this.mediaCapture.captureAudio().then(data => {
          //       data = data as MediaFile[];
          //       console.log(JSON.stringify(data));
          //       if (data?.length > 0) {
          //         console.log(data[0].fullPath);
          //         const uri = data[0].fullPath;
          //         const fileName = uri.substr(uri.lastIndexOf('/') + 1);
          //         const resolvedUri = Capacitor.convertFileSrc(uri);
          //         console.log('working');
          //         // create a local video object and return
          //         const aud = {
          //           id: '0;' + uri,
          //           nativeURL: uri,
          //           posterNativeURL: '',
          //           resolvedURL: resolvedUri,
          //           posterResolvedURL: '',
          //           fileName,
          //           creationDate: new Date(Date.now())
          //         } as AudioLocal;
          //         return aud;
          //       }
          //     }, (error) => {
          //       console.log(JSON.stringify(error));
          //     });
          //   } catch (error) {
          //     console.log(JSON.stringify(error));
          //   }
          // }

        }, {
          key: "selectAudioFromDevice",
          value: function selectAudioFromDevice() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var path, aud;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.prev = 0;
                      _context32.next = 3;
                      return this.fileChooser.open()["catch"](function (e) {
                        return console.log(e);
                      });

                    case 3:
                      path = _context32.sent;
                      _context32.next = 6;
                      return this.filePath.resolveNativePath(path)["catch"](function (e) {
                        return console.log(e);
                      });

                    case 6:
                      path = _context32.sent;

                      if (this.isAudio(path)) {
                        _context32.next = 9;
                        break;
                      }

                      return _context32.abrupt("return");

                    case 9:
                      path = this.correctNativeFilePath(path);
                      console.log(path);
                      aud = {
                        id: '0;' + path,
                        nativeURL: path,
                        posterNativeURL: '',
                        resolvedURL: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(path),
                        posterResolvedURL: '',
                        fileName: path.substr(path.lastIndexOf('/') + 1),
                        creationDate: new Date(Date.now())
                      };
                      return _context32.abrupt("return", aud);

                    case 15:
                      _context32.prev = 15;
                      _context32.t0 = _context32["catch"](0);
                      console.log(_context32.t0);

                    case 18:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this, [[0, 15]]);
            }));
          }
        }, {
          key: "writeAudioToMediaDirectory",
          value: function writeAudioToMediaDirectory(fullPath) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var fileName, fileResult, uri, resolvedUri, mediaObject;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.prev = 0;
                      fileName = this.createFileName(fullPath); // create new unique file name; dummy file name as arg to generate new

                      _context33.next = 4;
                      return Filesystem.readFile({
                        path: fullPath
                      });

                    case 4:
                      fileResult = _context33.sent;
                      _context33.next = 7;
                      return this.writeToMediaDirectory(fileResult.data, fileName);

                    case 7:
                      _context33.next = 9;
                      return this.getMediaUri(fileName);

                    case 9:
                      uri = _context33.sent.uri;
                      // get full path of the file in the media folder
                      resolvedUri = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].convertFileSrc(uri);
                      mediaObject = this.media.create(uri); // create a local photo object and return

                      return _context33.abrupt("return", {
                        id: '0;' + uri,
                        nativeURL: uri,
                        resolvedURL: resolvedUri,
                        fileName: fileName,
                        creationDate: new Date(Date.now()),
                        length: mediaObject.getDuration()
                      });

                    case 15:
                      _context33.prev = 15;
                      _context33.t0 = _context33["catch"](0);
                      console.log(_context33.t0);

                    case 18:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this, [[0, 15]]);
            }));
          }
        }, {
          key: "isPhoto",
          value: function isPhoto(uri) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

            if (((_c = (_b = (_a = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b.pop()) !== null && _c !== void 0 ? _c : '').search('.png') > -1 || ((_f = (_e = (_d = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _d === void 0 ? void 0 : _d.split('/')) === null || _e === void 0 ? void 0 : _e.pop()) !== null && _f !== void 0 ? _f : '').search('.jpg') > -1 || ((_j = (_h = (_g = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _g === void 0 ? void 0 : _g.split('/')) === null || _h === void 0 ? void 0 : _h.pop()) !== null && _j !== void 0 ? _j : '').search('.jpeg') > -1 || ((_m = (_l = (_k = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _k === void 0 ? void 0 : _k.split('/')) === null || _l === void 0 ? void 0 : _l.pop()) !== null && _m !== void 0 ? _m : '').search('.bmp') > -1 || ((_q = (_p = (_o = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _o === void 0 ? void 0 : _o.split('/')) === null || _p === void 0 ? void 0 : _p.pop()) !== null && _q !== void 0 ? _q : '').search('.gif') > -1) {
              return true;
            }
          }
        }, {
          key: "isVideo",
          value: function isVideo(uri) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;

            if (((_c = (_b = (_a = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b.pop()) !== null && _c !== void 0 ? _c : '').search('.avi') > -1 || ((_f = (_e = (_d = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _d === void 0 ? void 0 : _d.split('/')) === null || _e === void 0 ? void 0 : _e.pop()) !== null && _f !== void 0 ? _f : '').search('.mov') > -1 || ((_j = (_h = (_g = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _g === void 0 ? void 0 : _g.split('/')) === null || _h === void 0 ? void 0 : _h.pop()) !== null && _j !== void 0 ? _j : '').search('.mp4') > -1 || ((_m = (_l = (_k = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _k === void 0 ? void 0 : _k.split('/')) === null || _l === void 0 ? void 0 : _l.pop()) !== null && _m !== void 0 ? _m : '').search('.3gp') > -1 || ((_q = (_p = (_o = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _o === void 0 ? void 0 : _o.split('/')) === null || _p === void 0 ? void 0 : _p.pop()) !== null && _q !== void 0 ? _q : '').search('.webm') > -1 || ((_t = (_s = (_r = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _r === void 0 ? void 0 : _r.split('/')) === null || _s === void 0 ? void 0 : _s.pop()) !== null && _t !== void 0 ? _t : '').search('.ogg') > -1 || ((_w = (_v = (_u = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _u === void 0 ? void 0 : _u.split('/')) === null || _v === void 0 ? void 0 : _v.pop()) !== null && _w !== void 0 ? _w : '').search('.mkv') > -1) {
              return true;
            }
          }
        }, {
          key: "isAudio",
          value: function isAudio(uri) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;

            if (((_c = (_b = (_a = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b.pop()) !== null && _c !== void 0 ? _c : '').search('.au') > -1 || ((_f = (_e = (_d = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _d === void 0 ? void 0 : _d.split('/')) === null || _e === void 0 ? void 0 : _e.pop()) !== null && _f !== void 0 ? _f : '').search('.m3u') > -1 || ((_j = (_h = (_g = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _g === void 0 ? void 0 : _g.split('/')) === null || _h === void 0 ? void 0 : _h.pop()) !== null && _j !== void 0 ? _j : '').search('.midi') > -1 || ((_m = (_l = (_k = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _k === void 0 ? void 0 : _k.split('/')) === null || _l === void 0 ? void 0 : _l.pop()) !== null && _m !== void 0 ? _m : '').search('.mod') > -1 || ((_q = (_p = (_o = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _o === void 0 ? void 0 : _o.split('/')) === null || _p === void 0 ? void 0 : _p.pop()) !== null && _q !== void 0 ? _q : '').search('.mp2') > -1 || ((_t = (_s = (_r = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _r === void 0 ? void 0 : _r.split('/')) === null || _s === void 0 ? void 0 : _s.pop()) !== null && _t !== void 0 ? _t : '').search('.mp3') > -1 || ((_w = (_v = (_u = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _u === void 0 ? void 0 : _u.split('/')) === null || _v === void 0 ? void 0 : _v.pop()) !== null && _w !== void 0 ? _w : '').search('.wav') > -1 || ((_z = (_y = (_x = uri === null || uri === void 0 ? void 0 : uri.toLocaleLowerCase()) === null || _x === void 0 ? void 0 : _x.split('/')) === null || _y === void 0 ? void 0 : _y.pop()) !== null && _z !== void 0 ? _z : '').search('.voc') > -1) {
              return true;
            }
          }
        }, {
          key: "upload",
          value: function upload(fileUri, fileName) {
            var createThumb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var fileTransfer = this.fileTransfer.create(); // const headers = new HttpHeaders();
            // headers.set('boundary', '---------------------------293582696224464');

            var options = {
              fileKey: 'file',
              fileName: fileName,
              headers: _defineProperty({}, 'Authorization', 'Bearer ' + this.userService.token.token)
            };
            console.log(JSON.stringify(options));
            return fileTransfer.upload(fileUri, _config__WEBPACK_IMPORTED_MODULE_19__["UPLOAD_URL"] + "/".concat(createThumb), options).then(function (data) {
              console.log(data);
              return data;
            }, function (e) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"].myHttpErrorFormat(e, 'Upload'));
            });
          }
        }]);

        return LocalMediaService;
      }();

      LocalMediaService.ctorParameters = function () {
        return [{
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_3__["MySignals"]
        }, {
          type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_12__["StreamingMedia"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["ImagePicker"]
        }, {
          type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["FileChooser"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"]
        }, {
          type: _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_16__["VideoEditor"]
        }, {
          type: _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoLibrary"]
        }, {
          type: _permission_service__WEBPACK_IMPORTED_MODULE_17__["PermissionsService"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_18__["FileTransfer"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__["Media"]
        }];
      };

      LocalMediaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"])({
        providedIn: 'root'
      })], LocalMediaService);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/navigation/browser-history.service.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/services/providers/navigation/browser-history.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: BrowserHistoryService */

    /***/
    function srcAppSharedServicesProvidersNavigationBrowserHistoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserHistoryService", function () {
        return BrowserHistoryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "./node_modules/rxjs/internal/Subject.js");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var BrowserHistoryService = /*#__PURE__*/function () {
        function BrowserHistoryService(router) {
          _classCallCheck(this, BrowserHistoryService);

          this.router = router;
          this.history = [];
          this.size = 10;
          this.historySource = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.historySource$ = this.historySource.asObservable();
          this.previousPageSource = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.previousPageSource$ = this.previousPageSource.asObservable();
        }

        _createClass(BrowserHistoryService, [{
          key: "loadRouting",
          value: function loadRouting() {
            var _this60 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            })).subscribe(function (_ref) {
              var urlAfterRedirects = _ref.urlAfterRedirects;
              _this60.history = [].concat(_toConsumableArray(_this60.history), [urlAfterRedirects]);
              var tmp = _this60.history; // keep browsing history minimal

              try {
                _this60.history = _this60.history.slice(_this60.history.length - _this60.size);
              } catch (e) {
                _this60.history = tmp;
              } // console.log(this.history);
              // announce previous page name


              var lastUrls = (_this60.history[_this60.history.length - 2] || '/link/home').split('/');

              _this60.announcePreviousPage(lastUrls[(lastUrls === null || lastUrls === void 0 ? void 0 : lastUrls.length) - 1]);
            });
          }
        }, {
          key: "announceHistory",
          value: function announceHistory(history) {
            this.historySource.next(history);
          }
        }, {
          key: "announcePreviousPage",
          value: function announcePreviousPage(pageName) {
            this.previousPageSource.next(pageName);
          }
        }, {
          key: "getHistory",
          value: function getHistory() {
            return this.history;
          }
        }, {
          key: "getPreviousUrl",
          value: function getPreviousUrl() {
            this.history.pop();
            var url = this.history[this.history.length - 1] || 'link/home';
            return '/' + url;
          }
        }, {
          key: "currentUrl",
          get: function get() {
            return '/' + this.history[this.history.length];
          }
        }]);

        return BrowserHistoryService;
      }();

      BrowserHistoryService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      BrowserHistoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BrowserHistoryService);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/navigation/geolocation.service.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/services/providers/navigation/geolocation.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: DEFAULT_LOCATION_LAT, DEFAULT_LOCATION_LNG, GeolocationService */

    /***/
    function srcAppSharedServicesProvidersNavigationGeolocationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_LOCATION_LAT", function () {
        return DEFAULT_LOCATION_LAT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_LOCATION_LNG", function () {
        return DEFAULT_LOCATION_LNG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeolocationService", function () {
        return GeolocationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _storage_my_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var DEFAULT_LOCATION_LAT = 11.1978503;
      var DEFAULT_LOCATION_LNG = 13.83478;

      var GeolocationService = /*#__PURE__*/function () {
        function GeolocationService(mapLoader, signals, store) {
          _classCallCheck(this, GeolocationService);

          this.mapLoader = mapLoader;
          this.signals = signals;
          this.store = store;
          this.location = {};
        }

        _createClass(GeolocationService, [{
          key: "initGeocoder",
          value: function initGeocoder() {
            console.log('Init geocoder!');
            this.geocoder = new google.maps.Geocoder();
          }
        }, {
          key: "waitForMapsToLoad",
          value: function waitForMapsToLoad() {
            var _this61 = this;

            if (!this.geocoder) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.mapLoader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
                return _this61.initGeocoder();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
                return true;
              }));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
          }
        }, {
          key: "geocodeAddress",
          value: function geocodeAddress(location) {
            var _this62 = this;

            console.log('Start geocoding!');
            return this.waitForMapsToLoad().pipe( // filter(loaded => loaded),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
              return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                _this62.geocoder.geocode({
                  'address': location
                }, function (results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    console.log('Geocoding complete!');
                    observer.next({
                      lat: results[0].geometry.location.lat(),
                      lng: results[0].geometry.location.lng()
                    });
                  } else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({
                      lat: 0,
                      lng: 0
                    });
                  }

                  observer.complete();
                });
              });
            }));
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 10 * 60 * 1000
            };
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                  if (position) {
                    console.log('Latitude: ' + position.coords.latitude + 'Longitude: ' + position.coords.longitude);
                    var location = {};
                    location.lat = position.coords.latitude;
                    location.lng = position.coords.longitude;
                    observer.next(location);
                  }
                }, function (error) {
                  console.log(error);
                  observer.next({
                    lat: 0,
                    lng: 0
                  });
                }, opts);
              } else {
                alert('Geolocation is not supported by this browser.');
                observer.next({
                  lat: 0,
                  lng: 0
                });
              }
            });
          }
        }, {
          key: "setLocationLocal",
          value: function setLocationLocal() {
            var _this63 = this;

            this.store.setObject('currentLocation', this.location).then(function (_) {
              _this63.signals.announceLocationChange(_this63.location);
            });
          }
        }, {
          key: "getLocationLocal",
          value: function getLocationLocal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.store.getObject('currentLocation');

                    case 2:
                      return _context34.abrupt("return", _context34.sent);

                    case 3:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "Location",
          set: function set(loc) {
            this.location = loc;
            this.setLocationLocal();
          },
          get: function get() {
            return this.location;
          }
        }]);

        return GeolocationService;
      }();

      GeolocationService.ctorParameters = function () {
        return [{
          type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"]
        }, {
          type: _my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"]
        }, {
          type: _storage_my_storage_service__WEBPACK_IMPORTED_MODULE_2__["MyStorage"]
        }];
      };

      GeolocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], GeolocationService);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/permission.service.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/providers/permission.service.ts ***!
      \*****************************************************************/

    /*! exports provided: PermissionsService */

    /***/
    function srcAppSharedServicesProvidersPermissionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsService", function () {
        return PermissionsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/photo-library/ngx */
      "./node_modules/@ionic-native/photo-library/__ivy_ngcc__/ngx/index.js");

      var PermissionsService = /*#__PURE__*/function () {
        function PermissionsService(store, photoLibrary) {
          _classCallCheck(this, PermissionsService);

          this.store = store;
          this.photoLibrary = photoLibrary;
          this.initPermissions().then(function (_) {
            return _;
          });
        }

        _createClass(PermissionsService, [{
          key: "initPermissions",
          value: function initPermissions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return this.isPermissions;

                    case 2:
                      if (!_context35.sent) {
                        _context35.next = 4;
                        break;
                      }

                      return _context35.abrupt("return");

                    case 4:
                      this.getCameraPermission();
                      this.getStorageDeviceAccessPermission();
                      this.getLocationPermission();
                      _context35.next = 9;
                      return this.getPhotolibraryPermission();

                    case 9:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "isPermissions",
          value: function isPermissions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return this.store.get('permissions_loaded');

                    case 2:
                      if (!_context36.sent) {
                        _context36.next = 4;
                        break;
                      }

                      return _context36.abrupt("return", true);

                    case 4:
                      return _context36.abrupt("return", false);

                    case 5:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          } // Trigger camera permission

        }, {
          key: "getCameraPermission",
          value: function getCameraPermission() {// this._fileSevx.takePicture();
          }
        }, {
          key: "getStorageDeviceAccessPermission",
          value: function getStorageDeviceAccessPermission() {}
        }, {
          key: "getLocationPermission",
          value: function getLocationPermission() {}
        }, {
          key: "getPhotolibraryPermission",
          value: function getPhotolibraryPermission() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      _context37.next = 2;
                      return this.photoLibrary.requestAuthorization().then(function (_) {
                        return _;
                      })["catch"](function (e) {
                        console.log('Access denied to access photo library');
                      });

                    case 2:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }]);

        return PermissionsService;
      }();

      PermissionsService.ctorParameters = function () {
        return [{
          type: _storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__["MyStorage"]
        }, {
          type: _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_3__["PhotoLibrary"]
        }];
      };

      PermissionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], PermissionsService);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/sharing.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/providers/sharing.service.ts ***!
      \**************************************************************/

    /*! exports provided: SocialSharingService */

    /***/
    function srcAppSharedServicesProvidersSharingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialSharingService", function () {
        return SocialSharingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _widgets_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");

      var SocialSharingService = /*#__PURE__*/function () {
        /**
         *
         */
        function SocialSharingService(platform, socialSharing, toaster) {
          _classCallCheck(this, SocialSharingService);

          this.platform = platform;
          this.socialSharing = socialSharing;
          this.toaster = toaster;
        }

        _createClass(SocialSharingService, [{
          key: "share",
          value: function share(packageName, appName, social, message, subject, image, url) {
            var _this64 = this;

            this.platform.ready().then(function () {
              if (social === 'facebook') {
                _this64.socialSharing.canShareVia(packageName, message, subject, image, url).then(function () {
                  _this64.socialSharing.shareViaFacebook(message, image, url)["catch"](function (err) {
                    _this64.showSuccesToast('There was a problem please try later');
                  });
                })["catch"](function (err) {
                  _this64.showFailToast(appName);
                });
              } else if (social === 'whatsapp') {
                _this64.socialSharing.canShareVia(packageName, message, subject, image, url).then(function () {
                  _this64.socialSharing.shareViaWhatsApp(message, image, url)["catch"](function (err) {
                    _this64.showSuccesToast('There was a problem please try later');
                  });
                })["catch"](function (err) {
                  _this64.showFailToast(appName);
                });
              } else if (social === 'instagram') {
                _this64.socialSharing.canShareVia(packageName, message, subject, image, url).then(function () {
                  _this64.socialSharing.shareViaInstagram(message, image)["catch"](function (err) {
                    _this64.showSuccesToast('There was a problem please try later');
                  });
                })["catch"](function (err) {
                  _this64.showFailToast(appName);
                });
              } else if (social === 'twitter') {
                _this64.socialSharing.canShareVia(packageName, message, subject, image, url).then(function () {
                  _this64.socialSharing.shareViaTwitter(message, image, url)["catch"](function (err) {
                    _this64.showSuccesToast('There was a problem please try later');
                  });
                })["catch"](function (err) {
                  _this64.showFailToast(appName);
                });
              } else {
                _this64.socialSharing.share(message, subject, image, url)["catch"](function (err) {
                  _this64.showSuccesToast('There was a problem please try later');
                });
              }
            });
          }
        }, {
          key: "showSuccesToast",
          value: function showSuccesToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      this.toaster.toast(message, 5000);

                    case 1:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "showFailToast",
          value: function showFailToast(appName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      this.toaster.toast("".concat(appName, " is not installed on your device"), 5000);

                    case 1:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }
        }]);

        return SocialSharingService;
      }();

      SocialSharingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"]
        }, {
          type: _widgets_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }];
      };

      SocialSharingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SocialSharingService);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/storage/my-storage.service.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/services/providers/storage/my-storage.service.ts ***!
      \*************************************************************************/

    /*! exports provided: MyStorage */

    /***/
    function srcAppSharedServicesProvidersStorageMyStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyStorage", function () {
        return MyStorage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // MOBILE BUILD


      var MyStorage = /*#__PURE__*/function () {
        function MyStorage(storage) {
          _classCallCheck(this, MyStorage);

          this.storage = storage;
        }
        /**************************ENABLE FOR WEB*********************** */
        // set(key: string, value) {
        //   return this.storage.store(key, value);
        // }
        // setObject(key: string, object: Object) {
        //   return this.storage.store(key, JSON.stringify(object));
        // }
        // get(key: string) {
        //   return this.storage.retrieve(key);
        // }
        // getObject(key: string) {
        //   const result = this.storage.retrieve(key);
        //   if (result) {
        //     return JSON.parse(result);
        //   }
        //   return null;
        // }
        // remove(key: string) {
        //   this.storage.clear(key);
        // }
        // clear() {
        //   this.storage.clear();
        // }

        /****************************ENABLE FOR MOBILE BUILD*********************/


        _createClass(MyStorage, [{
          key: "set",
          value: function set(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return this.storage.set(key, value).then(function (result) {
                        // console.log('set string in storage: ' + result);
                        return true;
                      })["catch"](function (reason) {
                        console.log(reason);
                        return false;
                      });

                    case 2:
                      return _context40.abrupt("return", _context40.sent);

                    case 3:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }, {
          key: "setObject",
          value: function setObject(key, object) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return this.storage.set(key, JSON.stringify(object)).then(function (result) {
                        // console.log('set Object in storage: ' + result);
                        return true;
                      })["catch"](function (reason) {
                        console.log(reason);
                        return false;
                      });

                    case 2:
                      return _context41.abrupt("return", _context41.sent);

                    case 3:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }, {
          key: "get",
          value: function get(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
                      return this.storage.get(key).then(function (result) {
                        // console.log('storageGET: ' + key + ': ' + result);
                        if (result != null) {
                          return result;
                        }

                        return null;
                      })["catch"](function (reason) {
                        console.log(reason);
                        return null;
                      });

                    case 2:
                      return _context42.abrupt("return", _context42.sent);

                    case 3:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "getObject",
          value: function getObject(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      _context43.next = 2;
                      return this.storage.get(key).then(function (result) {
                        if (result != null) {
                          return JSON.parse(result);
                        }

                        return null;
                      })["catch"](function (reason) {
                        console.log(reason);
                        return null;
                      });

                    case 2:
                      return _context43.abrupt("return", _context43.sent);

                    case 3:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "remove",
          value: function remove(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      _context44.next = 2;
                      return this.storage.remove(key);

                    case 2:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "clear",
          value: function clear() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      _context45.next = 2;
                      return this.storage.clear();

                    case 2:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this);
            }));
          }
        }]);

        return MyStorage;
      }();

      MyStorage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]
        }];
      };

      MyStorage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], MyStorage);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/utility.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/providers/utility.service.ts ***!
      \**************************************************************/

    /*! exports provided: UtilityService */

    /***/
    function srcAppSharedServicesProvidersUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
        return UtilityService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "./node_modules/rxjs/internal/Subject.js");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _models_degree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../models/degree */
      "./src/app/models/degree.ts");

      var UtilityService_1;

      var UtilityService = UtilityService_1 = /*#__PURE__*/function () {
        function UtilityService(store) {
          _classCallCheck(this, UtilityService);

          this.store = store;
        } //   calculateAge(dateOfBirth) {
        //     const dateToCalculate = new Date();
        //     const calculateYear = dateToCalculate.getFullYear();
        //     const calculateMonth = dateToCalculate.getMonth();
        //     const calculateDay = dateToCalculate.getDate();
        //     const birthYear = dateOfBirth.getFullYear();
        //     const birthMonth = dateOfBirth.getMonth();
        //     const birthDay = dateOfBirth.getDate();
        //     let age = calculateYear - birthYear;
        //     const ageMonth = calculateMonth - birthMonth;
        //     const ageDay = calculateDay - birthDay;
        //     if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        //       age = age - 1;
        //     }
        //     return age;
        //   }
        //   formatGender(gender: string): string {
        //     if (gender && gender.length > 1) {
        //       switch (gender) {
        //         case 'female':
        //           return 'f';
        //         case 'male':
        //           return 'm';
        //         case 'other':
        //           return 'o';
        //         default:
        //           console.error('Invalid gender');
        //           return 'o';
        //           break;
        //       }
        //     } else if (gender) {
        //       switch (gender) {
        //         case 'f':
        //           return 'female';
        //         case 'm':
        //           return 'male';
        //         case 'o':
        //           return 'other';
        //         default:
        //           console.error('Invalid gender');
        //           return 'other';
        //           break;
        //       }
        //     } else {
        //       return '';
        //     }
        //   }
        //   /***********Generate event IDs for easy sharing
        //    * Requires year, month, time, user id ********* */
        //   // generateEventId(userId: string) {
        //   //   const date = new Date(Date.now());
        //   //   const month = date.getMonth();
        //   //   const year = date.getFullYear();
        //   //   const day = date.getUTCDay();
        //   //   const time = date.getUTCHours() + date.getUTCMinutes() + date.getUTCSeconds();
        //   //   const date_string = date.toISOString().split('T')[0];
        //   //   return new Promise<string>(resolve => {
        //   //     this._eventService.countEvents().subscribe(count => {
        //   //       resolve('FEV' + date_string + time + (count + 1));
        //   //     }, error => {
        //   //       resolve('FEV' + date_string + time + 1)
        //   //     })
        //   //   })
        //   // }
        //   /**********Generate fame user id, composed from user id of
        //    * database
        //   */
        //   // generateFameId(phone: string) {
        //   //   const date = new Date(Date.now());
        //   //   const month = date.getMonth();
        //   //   const year = date.getFullYear();
        //   //   const day = date.getUTCDay();
        //   //   const time = date.getUTCHours() + date.getUTCMinutes() + date.getUTCSeconds();
        //   //   const date_string = date.toISOString().split('T')[0];
        //   //   return 'FUS' + year + '-' + time + '-' + phone.substring(6);
        //   // }
        //   /****** Search for object from and array and geit its index****/
        //   searchObjFromArrray(id: any, objs: any[]) {
        //     if (!id || !objs || objs.length < 1) {
        //       console.log('invalid args');
        //       return;
        //     }
        //     let i = 0;
        //     for (let obj of objs) {
        //       if (obj.id == id) {
        //         return [obj, i];
        //       }
        //       i = i + 1;
        //     }
        //     return undefined;
        //   }
        //   /***************Get observable of countries Json array*********************/


        _createClass(UtilityService, null, [{
          key: "getAllCountries",
          value: function getAllCountries() {
            return [{
              "name": "Afghanistan",
              "states": ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian", "Daykondi", "Farah", "Faryab", "Ghazni", "Ghowr", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Konar", "Kondoz", "Laghman", "Lowgar", "Nangarhar", "Nimruz", "Nurestan", "Oruzgan", "Paktia", "Paktika", "Panjshir", "Parvan", "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabol"],
              "callCode": ""
            }, {
              "name": "Albania",
              "states": ["Berat", "Dibres", "Durres", "Elbasan", "Fier", "Gjirokastre", "Korce", "Kukes", "Lezhe", "Shkoder", "Tirane", "Vlore"]
            }, {
              "name": "Algeria",
              "states": ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba", "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj", "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "Muaskar", "Medea", "Mila", "Mostaganem", "M'Sila", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane", "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras", "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen"]
            }, {
              "name": "Andorra",
              "states": ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julia de Loria"]
            }, {
              "name": "Angola",
              "states": ["Bengo", "Benguela", "Bie", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uige", "Zaire"]
            }, {
              "name": "Antarctica",
              "states": []
            }, {
              "name": "Antigua and Barbuda",
              "states": ["Barbuda", "Redonda", "Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"]
            }, {
              "name": "Argentina",
              "states": ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"]
            }, {
              "name": "Armenia",
              "states": ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'", "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"]
            }, {
              "name": "Australia",
              "states": ["Australian Capital Territory", "Northern Territory", "New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"]
            }, {
              "name": "Austria",
              "states": ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"]
            }, {
              "name": "Azerbaijan",
              "states": ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu", "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Astara Rayonu", "Balakan Rayonu", "Barda Rayonu", "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu", "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu", "Gadabay Rayonu", "Goranboy Rayonu", "Goycay Rayonu", "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu", "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu", "Lerik Rayonu", "Masalli Rayonu", "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu", "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu", "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu", "Samux Rayonu", "Siyazan Rayonu", "Susa Rayonu", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu", "Xacmaz Rayonu", "Xanlar Rayonu", "Xizi Rayonu", "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu", "Ali Bayramli Sahari", "Baki Sahari", "Ganca Sahari", "Lankaran Sahari", "Mingacevir Sahari", "Naftalan Sahari", "Saki Sahari", "Sumqayit Sahari", "Susa Sahari", "Xankandi Sahari", "Yevlax Sahari", "Naxcivan Muxtar"]
            }, {
              "name": "Bahamas",
              "states": ["Acklins and Crooked Islands", "Bimini", "Cat Island", "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour", "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua", "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana", "New Providence", "Nichollstown and Berry Islands", "Ragged Island", "Rock Sound", "Sandy Point", "San Salvador and Rum Cay"]
            }, {
              "name": "Bahrain",
              "states": ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah", "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq", "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Madinat Hamad", "Madinat 'Isa", "Juzur Hawar", "Sitrah"]
            }, {
              "name": "Bangladesh",
              "states": ["Barisal", "Chittagong", "Dhaka", "Khulna", "Rajshahi", "Sylhet"]
            }, {
              "name": "Barbados",
              "states": ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"]
            }, {
              "name": "Belarus",
              "states": ["Brest", "Homyel", "Horad Minsk", "Hrodna", "Mahilyow", "Minsk", "Vitsyebsk"]
            }, {
              "name": "Belgium",
              "states": ["Antwerpen", "Brabant Wallon", "Brussels", "Flanders", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams-Brabant", "Wallonia", "West-Vlaanderen"]
            }, {
              "name": "Belize",
              "states": ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"]
            }, {
              "name": "Benin",
              "states": ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Oueme", "Plateau", "Zou"]
            }, {
              "name": "Bermuda",
              "states": ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke", "Saint George", "Saint George's", "Sandys", "Smith's", "Southampton", "Warwick"]
            }, {
              "name": "Bhutan",
              "states": ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangste", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"]
            }, {
              "name": "Bolivia",
              "states": ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosi", "Santa Cruz", "Tarija"]
            }, {
              "name": "Bosnia and Herzegovina",
              "states": ["Una-Sana [Federation]", "Posavina [Federation]", "Tuzla [Federation]", "Zenica-Doboj [Federation]", "Bosnian Podrinje [Federation]", "Central Bosnia [Federation]", "Herzegovina-Neretva [Federation]", "West Herzegovina [Federation]", "Sarajevo [Federation]", " West Bosnia [Federation]", "Banja Luka [RS]", "Bijeljina [RS]", "Doboj [RS]", "Fo?a [RS]", "Sarajevo-Romanija [RS]", "Trebinje [RS]", "Vlasenica [RS]"]
            }, {
              "name": "Botswana",
              "states": ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North East", "North West", "South East", "Southern"]
            }, {
              "name": "Brazil",
              "states": ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"]
            }, {
              "name": "Brunei",
              "states": ["Belait", "Brunei and Muara", "Temburong", "Tutong"]
            }, {
              "name": "Bulgaria",
              "states": ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte", "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"]
            }, {
              "name": "Burkina Faso",
              "states": ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou", "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kenedougou", "Komondjari", "Kompienga", "Kossi", "Koulpelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passore", "Poni", "Sanguie", "Sanmatenga", "Seno", "Sissili", "Soum", "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundweogo"]
            }, {
              "name": "Burma",
              "states": ["Ayeyarwady", "Bago", "Magway", "Mandalay", "Sagaing", "Tanintharyi", "Yangon", "Chin State", "Kachin State", "Kayin State", "Kayah State", "Mon State", "Rakhine State", "Shan State"]
            }, {
              "name": "Burundi",
              "states": ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"]
            }, {
              "name": "Cambodia",
              "states": ["Banteay Mean Chey", "Batdambang", "Kampong Cham", "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal", "Koh Kong", "Kracheh", "Mondol Kiri", "Otdar Mean Chey", "Pouthisat", "Preah Vihear", "Prey Veng", "Rotanakir", "Siem Reab", "Stoeng Treng", "Svay Rieng", "Takao", "Keb", "Pailin", "Phnom Penh", "Preah Seihanu"]
            }, {
              "name": "Cameroon",
              "states": ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"]
            }, {
              "name": "Canada",
              "states": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"]
            }, {
              "name": "Cape Verde",
              "states": ['São Domingos', 'Brava', 'Maio Mosteiros', 'Paul', 'Praia', 'Ribeira Grande', 'Sal', 'Santa Catarina', 'Santa Cruz', 'São Filipe', 'São Miguel', 'Sao Nicolau', 'São Vicente', 'Boa Vista', 'Tarrafal']
            }, {
              "name": "Central African Republic",
              "states": ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kemo", "Lobaye", "Mambere-Kadei", "Mbomou", "Nana-Grebizi", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham", "Ouham-Pende", "Sangha-Mbaere", "Vakaga"]
            }, {
              "name": "Chad",
              "states": ["Batha", "Biltine", "Borkou-Ennedi-Tibesti", "Chari-Baguirmi", "Guéra", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mayo-Kebbi", "Moyen-Chari", "Ouaddaï", "Salamat", "Tandjile"]
            }, {
              "name": "Chile",
              "states": ["Aysen", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "O'Higgins", "Los Lagos", "Magallanes y la Antartica Chilena", "Maule", "Santiago Region Metropolitana", "Tarapaca", "Valparaiso"]
            }, {
              "name": "China",
              "states": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"]
            }, {
              "name": "Colombia",
              "states": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota District Capital", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres & Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"]
            }, {
              "name": "Comoros",
              "states": ["Grande Comore (Njazidja)", "Anjouan (Nzwani)", "Moheli (Mwali)"]
            }, {
              "name": "Congo, Democratic Republic",
              "states": ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental", "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu", "Orientale", "Sud-Kivu"]
            }, {
              "name": "Congo, Republic of the",
              "states": ["Bouenza", "Brazzaville", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lekoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"]
            }, {
              "name": "Costa Rica",
              "states": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"]
            }, {
              "name": "Cote d'Ivoire",
              "states": ["Abidjan	", "Agnéby- Tiassa ", "Bafing", "Bagoué", "Bélier", "Béré", "Bounkani", "Cavally", "Folon", "Gbeke", "Gbôkle", "Gôh", "Gontougo", "Grands Ponts", "Guémon", "Hambol", "Haut - Sassandra", "Iffou", "Indénié - Djuablin", "Kabadougou", "La Mé(Massan)", "Lôh - Djiboua", "Marahoué", "Moronou	", "Nawa	", "N'zi", "Poro", "San - Pédro", "Sud - Comoé", "Tchologo", "Tonkpi", "Worodougou", "Yamoussoukro"]
            }, {
              "name": "Croatia",
              "states": ["Bjelovarsko-Bilogorska", "Brodsko-Posavska", "Dubrovacko-Neretvanska", "Istarska", "Karlovacka", "Koprivnicko-Krizevacka", "Krapinsko-Zagorska", "Licko-Senjska", "Medimurska", "Osjecko-Baranjska", "Pozesko-Slavonska", "Primorsko-Goranska", "Sibensko-Kninska", "Sisacko-Moslavacka", "Splitsko-Dalmatinska", "Varazdinska", "Viroviticko-Podravska", "Vukovarsko-Srijemska", "Zadarska", "Zagreb", "Zagrebacka"]
            }, {
              "name": "Cuba",
              "states": ["Camaguey", "Ciego de Avila", "Cienfuegos", "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin", "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"]
            }, {
              "name": "Cyprus",
              "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"]
            }, {
              "name": "Czech Republic",
              "states": ["Jihocesky Kraj", "Jihomoravsky Kraj", "Karlovarsky Kraj", "Kralovehradecky Kraj", "Liberecky Kraj", "Moravskoslezsky Kraj", "Olomoucky Kraj", "Pardubicky Kraj", "Plzensky Kraj", "Praha", "Stredocesky Kraj", "Ustecky Kraj", "Vysocina", "Zlinsky Kraj"]
            }, {
              "name": "Denmark",
              "states": ["Arhus", "Bornholm", "Frederiksberg", "Frederiksborg", "Fyn", "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing", "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland", "Viborg"]
            }, {
              "name": "Djibouti",
              "states": ["Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"]
            }, {
              "name": "Dominica",
              "states": ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"]
            }, {
              "name": "Dominican Republic",
              "states": ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "Elias Pina", "El Seibo", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "Sanchez Ramirez", "San Cristobal", "San Jose de Ocoa", "San Juan", "San Pedro de Macoris", "Santiago", "Santiago Rodriguez", "Santo Domingo", "Valverde"]
            }, {
              "name": "East Timor",
              "states": ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova-Lima", "Dili", "Ermera", "Lautem", "Liquica", "Manatuto", "Manufahi", "Oecussi", "Viqueque"]
            }, {
              "name": "Ecuador",
              "states": ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"]
            }, {
              "name": "Egypt",
              "states": ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"]
            }, {
              "name": "El Salvador",
              "states": ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan", "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel", "San Salvador", "Santa Ana", "San Vicente", "Sonsonate", "Usulutan"]
            }, {
              "name": "Equatorial Guinea",
              "states": ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kie-Ntem", "Litoral", "Wele-Nzas"]
            }, {
              "name": "Eritrea",
              "states": ["Anseba", "Debub", "Debubawi K'eyih Bahri", "Gash Barka", "Ma'akel", "Semenawi Keyih Bahri"]
            }, {
              "name": "Estonia",
              "states": ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)", "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)", "Laanemaa (Haapsalu)", "Laane-Virumaa (Rakvere)", "Parnumaa (Parnu)", "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuressaare)", "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)", "Vorumaa (Voru)"]
            }, {
              "name": "Ethiopia",
              "states": ["Addis Ababa", "Afar", "Amhara", "Binshangul Gumuz", "Dire Dawa", "Gambela Hizboch", "Harari", "Oromia", "Somali", "Tigray", "Southern Nations, Nationalities, and Peoples Region"]
            }, {
              "name": "Fiji",
              "states": ["Central (Suva)", "Eastern (Levuka)", "Northern (Labasa)", "Rotuma", "Western (Lautoka)"]
            }, {
              "name": "Finland",
              "states": ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani", "Lansi-Suomen Laani", "Lappi", "Oulun Laani"]
            }, {
              "name": "France",
              "states": ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"]
            }, {
              "name": "Gabon",
              "states": ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie", "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime", "Woleu-Ntem"]
            }, {
              "name": "Gambia",
              "states": ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"]
            }, {
              "name": "Georgia",
              "states": ['Abkhazia', 'Ajaria', 'Guria', 'Imereti', 'Kakheti', 'Kvemo Kartli', 'Mtskheta-Mtianeti', 'Racha-Lochkhumi-Kvemo Svaneti', 'Samegrelo-Zemo Svaneti', 'Samtskhe-Javakheti', 'Shida Kartli', 'Tbilisi']
            }, {
              "name": "Germany",
              "states": ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"]
            }, {
              "name": "Ghana",
              "states": ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"]
            }, {
              "name": "Greece",
              "states": ["Agion Oros", "Achaia", "Aitolia kai Akarmania", "Argolis", "Arkadia", "Arta", "Attiki", "Chalkidiki", "Chanion", "Chios", "Dodekanisos", "Drama", "Evros", "Evrytania", "Evvoia", "Florina", "Fokidos", "Fthiotis", "Grevena", "Ileia", "Imathia", "Ioannina", "Irakleion", "Karditsa", "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Kilkis", "Korinthia", "Kozani", "Kyklades", "Lakonia", "Larisa", "Lasithi", "Lefkas", "Lesvos", "Magnisia", "Messinia", "Pella", "Pieria", "Preveza", "Rethynnis", "Rodopi", "Samos", "Serrai", "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi", "Zakynthos"]
            }, {
              "name": "Greenland",
              "states": ["Avannaa (Nordgronland)", "Tunu (Ostgronland)", "Kitaa (Vestgronland)"]
            }, {
              "name": "Grenada",
              "states": ["Carriacou and Petit Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"]
            }, {
              "name": "Guatemala",
              "states": ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez", "Totonicapan", "Zacapa"]
            }, {
              "name": "Guinea",
              "states": ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria", "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele", "Tougue", "Yomou"]
            }, {
              "name": "Guinea-Bissau",
              "states": ["Bafata", "Biombo", "Bissau", "Bolama", "Cacheu", "Gabu", "Oio", "Quinara", "Tombali"]
            }, {
              "name": "Guyana",
              "states": ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"]
            }, {
              "name": "Haiti",
              "states": ["Artibonite", "Centre", "Grand 'Anse", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"]
            }, {
              "name": "Honduras",
              "states": ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"]
            }, {
              "name": "Hong Kong",
              "states": ['Abkhazia', 'Adjara', 'Guria Region', 'Imereti Region', 'Kakheti Region', 'Mtskheta-Mtianeti Region', 'Racha-Lechkhumi Region', 'Samegrelo-Zemo Svaneti Region', 'Samtskhe-Javakheti Region', 'Kvemo Kartli Region', 'Shida Kartli Region']
            }, {
              "name": "Hungary",
              "states": ["Bacs-Kiskun", "Baranya", "Bekes", "Borsod-Abauj-Zemplen", "Csongrad", "Fejer", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Jasz-Nagykun-Szolnok", "Komarom-Esztergom", "Nograd", "Pest", "Somogy", "Szabolcs-Szatmar-Bereg", "Tolna", "Vas", "Veszprem", "Zala", "Bekescsaba", "Debrecen", "Dunaujvaros", "Eger", "Gyor", "Hodmezovasarhely", "Kaposvar", "Kecskemet", "Miskolc", "Nagykanizsa", "Nyiregyhaza", "Pecs", "Sopron", "Szeged", "Szekesfehervar", "Szolnok", "Szombathely", "Tatabanya", "Veszprem", "Zalaegerszeg"]
            }, {
              "name": "Iceland",
              "states": ["Austurland", "Hofudhborgarsvaedhi", "Nordhurland Eystra", "Nordhurland Vestra", "Sudhurland", "Sudhurnes", "Vestfirdhir", "Vesturland"]
            }, {
              "name": "India",
              "states": ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"]
            }, {
              "name": "Indonesia",
              "states": ["Aceh", "Bali", "Banten", "Bengkulu", "Gorontalo", "Irian Jaya Barat", "Jakarta Raya", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"]
            }, {
              "name": "Iran",
              "states": ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khorasan-e Janubi", "Khorasan-e Razavi", "Khorasan-e Shemali", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan", "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan", "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"]
            }, {
              "name": "Iraq",
              "states": ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah", "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad", "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa", "Salah ad Din", "Wasit"]
            }, {
              "name": "Ireland",
              "states": ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"]
            }, {
              "name": "Israel",
              "states": ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"]
            }, {
              "name": "Italy",
              "states": ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"]
            }, {
              "name": "Jamaica",
              "states": ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"]
            }, {
              "name": "Japan",
              "states": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"]
            }, {
              "name": "Jordan",
              "states": ["Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak", "Al Mafraq", "'Amman", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an", "Madaba"]
            }, {
              "name": "Kazakhstan",
              "states": ["Almaty Oblysy", "Almaty Qalasy", "Aqmola Oblysy", "Aqtobe Oblysy", "Astana Qalasy", "Atyrau Oblysy", "Batys Qazaqstan Oblysy", "Bayqongyr Qalasy", "Mangghystau Oblysy", "Ongtustik Qazaqstan Oblysy", "Pavlodar Oblysy", "Qaraghandy Oblysy", "Qostanay Oblysy", "Qyzylorda Oblysy", "Shyghys Qazaqstan Oblysy", "Soltustik Qazaqstan Oblysy", "Zhambyl Oblysy"]
            }, {
              "name": "Kenya",
              "states": ["Central", "Coast", "Eastern", "Nairobi Area", "North Eastern", "Nyanza", "Rift Valley", "Western"]
            }, {
              "name": "Kiribati",
              "states": ['Gilbert Islands', 'Line Islands', 'Phoenix Islands']
            }, {
              "name": "Korea North",
              "states": ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North P'yongan", "South P'yongan", "Yanggang", "Kaesong", "Najin", "Namp'o", "Pyongyang"]
            }, {
              "name": "Korea South",
              "states": ["Seoul", "Busan City", "Daegu City", "Incheon City", "Gwangju City", "Daejeon City", "Ulsan", "Gyeonggi Province", "Gangwon Province", "North Chungcheong Province", "South Chungcheong Province", "North Jeolla Province", "South Jeolla Province", "North Gyeongsang Province", "South Gyeongsang Province", "Jeju"]
            }, {
              "name": "Kuwait",
              "states": ["Al Ahmadi", "Al Farwaniyah", "Al Asimah", "Al Jahra", "Hawalli", "Mubarak Al-Kabeer"]
            }, {
              "name": "Kyrgyzstan",
              "states": ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty", "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty", "Ysyk-Kol Oblasty"]
            }, {
              "name": "Laos",
              "states": ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan", "Khammouan", "Louangnamtha", "Louangphrabang", "Oudomxai", "Phongsali", "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli", "Xaisomboun", "Xekong", "Xiangkhoang"]
            }, {
              "name": "Latvia",
              "states": ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons", "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons", "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava", "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons", "Liepaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons", "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne", "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons", "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons", "Ventspils", "Ventspils Rajons"]
            }, {
              "name": "Lebanon",
              "states": ["Beyrouth", "Beqaa", "Liban-Nord", "Liban-Sud", "Mont-Liban", "Nabatiye"]
            }, {
              "name": "Lesotho",
              "states": ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"]
            }, {
              "name": "Liberia",
              "states": ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"]
            }, {
              "name": "Libya",
              "states": ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar", "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'", "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan", "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus", "Tarhunah", "Tubruq", "Yafran", "Zlitan"]
            }, {
              "name": "Liechtenstein",
              "states": ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"]
            }, {
              "name": "Lithuania",
              "states": ["Alytaus", "Kauno", "Klaipedos", "Marijampoles", "Panevezio", "Siauliu", "Taurages", "Telsiu", "Utenos", "Vilniaus"]
            }, {
              "name": "Luxembourg",
              "states": ["Diekirch", "Grevenmacher", "Luxembourg"]
            }, {
              "name": "Macedonia",
              "states": ["Aerodrom", "Aracinovo", "Berovo", "Bitola", "Bogdanci", "Bogovinje", "Bosilovo", "Brvenica", "Butel", "Cair", "Caska", "Centar", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar", "Debartsa", "Delcevo", "Demir Hisar", "Demir Kapija", "Dojran", "Dolneni", "Drugovo", "Gazi Baba", "Gevgelija", "Gjorce Petrov", "Gostivar", "Gradsko", "Ilinden", "Jegunovce", "Karbinci", "Karpos", "Kavadarci", "Kicevo", "Kisela Voda", "Kocani", "Konce", "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kumanovo", "Lipkovo", "Lozovo", "Makedonska Kamenica", "Makedonski Brod", "Mavrovo i Rastusa", "Mogila", "Negotino", "Novaci", "Novo Selo", "Ohrid", "Oslomej", "Pehcevo", "Petrovec", "Plasnica", "Prilep", "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Saraj", "Skopje", "Sopiste", "Staro Nagoricane", "Stip", "Struga", "Strumica", "Studenicani", "Suto Orizari", "Sveti Nikole", "Tearce", "Tetovo", "Valandovo", "Vasilevo", "Veles", "Vevcani", "Vinica", "Vranestica", "Vrapciste", "Zajas", "Zelenikovo", "Zelino", "Zrnovci"]
            }, {
              "name": "Madagascar",
              "states": ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"]
            }, {
              "name": "Malawi",
              "states": ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Ntcheu", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"]
            }, {
              "name": "Malaysia",
              "states": ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Malacca", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Penang", "Sabah", "Sarawak", "Selangor", "Terengganu"]
            }, {
              "name": "Maldives",
              "states": ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu", "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu", "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu", "Shaviyani", "Thaa", "Vaavu"]
            }, {
              "name": "Mali",
              "states": ["Bamako (Capital)", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"]
            }, {
              "name": "Malta",
              "states": ['Central', 'Gozo', 'Northern', 'South', 'Southern Eastern']
            }, {
              "name": "Marshall Islands",
              "states": []
            }, {
              "name": "Mauritania",
              "states": ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"]
            }, {
              "name": "Mauritius",
              "states": ["Agalega Islands", "Black River", "Cargados Carajos Shoals", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Riviere du Rempart", "Rodrigues", "Savanne"]
            }, {
              "name": "Mexico",
              "states": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"]
            }, {
              "name": "Micronesia",
              "states": []
            }, {
              "name": "Moldova",
              "states": ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Cantemir", "Calarasi", "Causeni", "Cimislia", "Criuleni", "Donduseni", "Drochia", "Dubasari", "Edinet", "Falesti", "Floresti", "Glodeni", "Hincesti", "Ialoveni", "Leova", "Nisporeni", "Ocnita", "Orhei", "Rezina", "Riscani", "Singerei", "Soldanesti", "Soroca", "Stefan-Voda", "Straseni", "Taraclia", "Telenesti", "Ungheni", "Balti", "Bender", "Chisinau", "Gagauzia", "Stinga Nistrului"]
            }, {
              "name": "Mongolia",
              "states": ["Arhangay", "Bayanhongor", "Bayan-Olgiy", "Bulgan", "Darhan Uul", "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Govi-Altay", "Govi-Sumber", "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Orhon", "Ovorhangay", "Selenge", "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"]
            }, {
              "name": "Morocco",
              "states": ["Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Ben Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"]
            }, {
              "name": "Monaco",
              "states": []
            }, {
              "name": "Mozambique",
              "states": ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Cidade de Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"]
            }, {
              "name": "Namibia",
              "states": ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene", "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa"]
            }, {
              "name": "Nauru",
              "states": []
            }, {
              "name": "Nepal",
              "states": ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"]
            }, {
              "name": "Netherlands",
              "states": ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"]
            }, {
              "name": "New Zealand",
              "states": ["Auckland", "Bay of Plenty", "Canterbury", "Chatham Islands", "Gisborne", "Hawke's Bay", "Manawatu-Wanganui", "Marlborough", "Nelson", "Northland", "Otago", "Southland", "Taranaki", "Tasman", "Waikato", "Wellington", "West Coast"]
            }, {
              "name": "Nicaragua",
              "states": ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rio San Juan", "Rivas"]
            }, {
              "name": "Niger",
              "states": ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillaberi", "Zinder"]
            }, {
              "name": "Nigeria",
              "states": ["Abia", "Abuja Federal Capital", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"]
            }, {
              "name": "Norway",
              "states": ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "More og Romsdal", "Nordland", "Nord-Trondelag", "Oppland", "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag", "Telemark", "Troms", "Vest-Agder", "Vestfold"]
            }, {
              "name": "Oman",
              "states": ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah", "Az Zahirah", "Masqat", "Musandam", "Dhofar"]
            }, {
              "name": "Pakistan",
              "states": ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"]
            }, {
              "name": "Panama",
              "states": ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"]
            }, {
              "name": "Papua New Guinea",
              "states": ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern", "Sandaun", "Southern Highlands", "Western", "Western Highlands", "West New Britain"]
            }, {
              "name": "Paraguay",
              "states": ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion", "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion", "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari", "Presidente Hayes", "San Pedro"]
            }, {
              "name": "Peru",
              "states": ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"]
            }, {
              "name": "Philippines",
              "states": ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Biliran", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Compostela", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "Laguna", "Lanao del Norte", "Lanao del Sur", "La Union", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Palawan", "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"]
            }, {
              "name": "Poland",
              "states": ["Greater Poland (Wielkopolskie)", "Kuyavian-Pomeranian (Kujawsko-Pomorskie)", "Lesser Poland (Malopolskie)", "Lodz (Lodzkie)", "Lower Silesian (Dolnoslaskie)", "Lublin (Lubelskie)", "Lubusz (Lubuskie)", "Masovian (Mazowieckie)", "Opole (Opolskie)", "Podlasie (Podlaskie)", "Pomeranian (Pomorskie)", "Silesian (Slaskie)", "Subcarpathian (Podkarpackie)", "Swietokrzyskie (Swietokrzyskie)", "Warmian-Masurian (Warminsko-Mazurskie)", "West Pomeranian (Zachodniopomorskie)"]
            }, {
              "name": "Portugal",
              "states": ["Aveiro", "Acores", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu"]
            }, {
              "name": "Qatar",
              "states": ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr", "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal", "Umm Sa'id", "Umm Salal"]
            }, {
              "name": "Romania",
              "states": ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj", "Galati", "Gorj", "Giurgiu", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Vaslui", "Vilcea", "Vrancea"]
            }, {
              "name": "Russia",
              "states": ["Amur", "Arkhangel'sk", "Astrakhan'", "Belgorod", "Bryansk", "Chelyabinsk", "Chita", "Irkutsk", "Ivanovo", "Kaliningrad", "Kaluga", "Kamchatka", "Kemerovo", "Kirov", "Kostroma", "Kurgan", "Kursk", "Leningrad", "Lipetsk", "Magadan", "Moscow", "Murmansk", "Nizhniy Novgorod", "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Orel", "Penza", "Perm'", "Pskov", "Rostov", "Ryazan'", "Sakhalin", "Samara", "Saratov", "Smolensk", "Sverdlovsk", "Tambov", "Tomsk", "Tula", "Tver'", "Tyumen'", "Ul'yanovsk", "Vladimir", "Volgograd", "Vologda", "Voronezh", "Yaroslavl'", "Adygeya", "Altay", "Bashkortostan", "Buryatiya", "Chechnya", "Chuvashiya", "Dagestan", "Ingushetiya", "Kabardino-Balkariya", "Kalmykiya", "Karachayevo-Cherkesiya", "Kareliya", "Khakasiya", "Komi", "Mariy-El", "Mordoviya", "Sakha", "North Ossetia", "Tatarstan", "Tyva", "Udmurtiya", "Aga Buryat", "Chukotka", "Evenk", "Khanty-Mansi", "Komi-Permyak", "Koryak", "Nenets", "Taymyr", "Ust'-Orda Buryat", "Yamalo-Nenets", "Altay", "Khabarovsk", "Krasnodar", "Krasnoyarsk", "Primorskiy", "Stavropol'", "Moscow", "St. Petersburg", "Yevrey"]
            }, {
              "name": "Rwanda",
              "states": ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi", "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville", "Umutara", "Ruhengeri"]
            }, {
              "name": "Samoa",
              "states": ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gagaifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"]
            }, {
              "name": "San Marino",
              "states": ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino Citta", "Serravalle"]
            }, {
              "name": "Sao Tome",
              "states": []
            }, {
              "name": "Saudi Arabia",
              "states": ["Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf", "Al Madinah", "Al Qasim", "Ar Riyad", "Ash Sharqiyah", "'Asir", "Ha'il", "Jizan", "Makkah", "Najran", "Tabuk"]
            }, {
              "name": "Senegal",
              "states": ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"]
            }, {
              "name": "Serbia and Montenegro",
              "states": ["Kosovo", "Montenegro", "Serbia", "Vojvodina"]
            }, {
              "name": "Seychelles",
              "states": ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis", "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse", "Grand' Anse", "La Digue", "La Riviere Anglaise", "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Saint Louis", "Takamaka"]
            }, {
              "name": "Sierra Leone",
              "states": []
            }, {
              "name": "Singapore",
              "states": []
            }, {
              "name": "Slovakia",
              "states": ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky", "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"]
            }, {
              "name": "Slovenia",
              "states": ["Ajdovscina", "Beltinci", "Benedikt", "Bistrica ob Sotli", "Bled", "Bloke", "Bohinj", "Borovnica", "Bovec", "Braslovce", "Brda", "Brezice", "Brezovica", "Cankova", "Celje", "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Cerkvenjak", "Crensovci", "Crna na Koroskem", "Crnomelj", "Destrnik", "Divaca", "Dobje", "Dobrepolje", "Dobrna", "Dobrova-Horjul-Polhov Gradec", "Dobrovnik-Dobronak", "Dolenjske Toplice", "Dol pri Ljubljani", "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane", "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grad", "Grosuplje", "Hajdina", "Hoce-Slivnica", "Hodos-Hodos", "Horjul", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola-Isola", "Jesenice", "Jezersko", "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje", "Kocevje", "Komen", "Komenda", "Koper-Capodistria", "Kostel", "Kozje", "Kranj", "Kranjska Gora", "Krizevci", "Krsko", "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava-Lendva", "Litija", "Ljubljana", "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Lovrenc na Pohorju", "Luce", "Lukovica", "Majsperk", "Maribor", "Markovci", "Medvode", "Menges", "Metlika", "Mezica", "Miklavz na Dravskem Polju", "Miren-Kostanjevica", "Mirna Pec", "Mislinja", "Moravce", "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Oplotnica", "Ormoz", "Osilnica", "Pesnica", "Piran-Pirano", "Pivka", "Podcetrtek", "Podlehnik", "Podvelka", "Polzela", "Postojna", "Prebold", "Preddvor", "Prevalje", "Ptuj", "Puconci", "Race-Fram", "Radece", "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne na Koroskem", "Razkrizje", "Ribnica", "Ribnica na Pohorju", "Rogasovci", "Rogaska Slatina", "Rogatec", "Ruse", "Salovci", "Selnica ob Dravi", "Semic", "Sempeter-Vrtojba", "Sencur", "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana", "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec", "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah", "Smartno ob Paki", "Smartno pri Litiji", "Sodrazica", "Solcava", "Sostanj", "Starse", "Store", "Sveta Ana", "Sveti Andraz v Slovenskih Goricah", "Sveti Jurij", "Tabor", "Tisina", "Tolmin", "Trbovlje", "Trebnje", "Trnovska Vas", "Trzic", "Trzin", "Turnisce", "Velenje", "Velika Polana", "Velike Lasce", "Verzej", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik", "Vransko", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki", "Zetale", "Ziri", "Zirovnica", "Zuzemberk", "Zrece"]
            }, {
              "name": "Solomon Islands",
              "states": ["Central", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita", "Rennell and Bellona", "Temotu", "Western"]
            }, {
              "name": "Somalia",
              "states": ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"]
            }, {
              "name": "South Africa",
              "states": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North-West", "Northern Cape", "Western Cape"]
            }, {
              "name": "Spain",
              "states": ["Andalucia", "Aragon", "Asturias", "Baleares", "Ceuta", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y Leon", "Cataluna", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco"]
            }, {
              "name": "Sri Lanka",
              "states": ["Central", "North Central", "North Eastern", "North Western", "Sabaragamuwa", "Southern", "Uva", "Western"]
            }, {
              "name": "Sudan",
              "states": ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat", "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah", "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal", "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur", "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali", "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur", "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"]
            }, {
              "name": "Suriname",
              "states": ["Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"]
            }, {
              "name": "Swaziland",
              "states": ["Hhohho", "Lubombo", "Manzini", "Shiselweni"]
            }, {
              "name": "Sweden",
              "states": ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands", "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens", "Orebro", "Ostergotlands", "Skane", "Sodermanlands", "Stockholms", "Uppsala", "Varmlands", "Vasterbottens", "Vasternorrlands", "Vastmanlands", "Vastra Gotalands"]
            }, {
              "name": "Switzerland",
              "states": ["Aargau", "Appenzell Ausser-Rhoden", "Appenzell Inner-Rhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"]
            }, {
              "name": "Syria",
              "states": ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah", "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah", "Hims", "Idlib", "Rif Dimashq", "Tartus"]
            }, {
              "name": "Taiwan",
              "states": ["Chang-hua", "Chia-i", "Hsin-chu", "Hua-lien", "I-lan", "Kao-hsiung", "Kin-men", "Lien-chiang", "Miao-li", "Nan-t'ou", "P'eng-hu", "P'ing-tung", "T'ai-chung", "T'ai-nan", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin", "Chia-i", "Chi-lung", "Hsin-chu", "T'ai-chung", "T'ai-nan", "Kao-hsiung city", "T'ai-pei city"]
            }, {
              "name": "Tajikistan",
              "states": []
            }, {
              "name": "Tanzania",
              "states": ["Arusha", "Dar es Salaam", "Dodoma", "Iringa", "Kagera", "Kigoma", "Kilimanjaro", "Lindi", "Manyara", "Mara", "Mbeya", "Morogoro", "Mtwara", "Mwanza", "Pemba North", "Pemba South", "Pwani", "Rukwa", "Ruvuma", "Shinyanga", "Singida", "Tabora", "Tanga", "Zanzibar Central/South", "Zanzibar North", "Zanzibar Urban/West"]
            }, {
              "name": "Thailand",
              "states": ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Krung Thep Mahanakhon", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"]
            }, {
              "name": "Togo",
              "states": ["Kara", "Plateaux", "Savanes", "Centrale", "Maritime"]
            }, {
              "name": "Tonga",
              "states": []
            }, {
              "name": "Trinidad and Tobago",
              "states": ["Couva", "Diego Martin", "Mayaro", "Penal", "Princes Town", "Sangre Grande", "San Juan", "Siparia", "Tunapuna", "Port-of-Spain", "San Fernando", "Arima", "Point Fortin", "Chaguanas", "Tobago"]
            }, {
              "name": "Tunisia",
              "states": ["Ariana (Aryanah)", "Beja (Bajah)", "Ben Arous (Bin 'Arus)", "Bizerte (Banzart)", "Gabes (Qabis)", "Gafsa (Qafsah)", "Jendouba (Jundubah)", "Kairouan (Al Qayrawan)", "Kasserine (Al Qasrayn)", "Kebili (Qibili)", "Kef (Al Kaf)", "Mahdia (Al Mahdiyah)", "Manouba (Manubah)", "Medenine (Madanin)", "Monastir (Al Munastir)", "Nabeul (Nabul)", "Sfax (Safaqis)", "Sidi Bou Zid (Sidi Bu Zayd)", "Siliana (Silyanah)", "Sousse (Susah)", "Tataouine (Tatawin)", "Tozeur (Tawzar)", "Tunis", "Zaghouan (Zaghwan)"]
            }, {
              "name": "Turkey",
              "states": ["Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt", "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"]
            }, {
              "name": "Turkmenistan",
              "states": ["Ahal Welayaty (Ashgabat)", "Balkan Welayaty (Balkanabat)", "Dashoguz Welayaty", "Lebap Welayaty (Turkmenabat)", "Mary Welayaty"]
            }, {
              "name": "Uganda",
              "states": ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo", "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kampala", "Kamuli", "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi", "Kyenjojo", "Lira", "Luwero", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Moroto", "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakasongola", "Nebbi", "Ntungamo", "Pader", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Sironko", "Soroti", "Tororo", "Wakiso", "Yumbe"]
            }, {
              "name": "Ukraine",
              "states": ["Cherkasy", "Chernihiv", "Chernivtsi", "Crimea", "Dnipropetrovs'k", "Donets'k", "Ivano-Frankivs'k", "Kharkiv", "Kherson", "Khmel'nyts'kyy", "Kirovohrad", "Kiev", "Kyyiv", "Luhans'k", "L'viv", "Mykolayiv", "Odesa", "Poltava", "Rivne", "Sevastopol'", "Sumy", "Ternopil'", "Vinnytsya", "Volyn'", "Zakarpattya", "Zaporizhzhya", "Zhytomyr"]
            }, {
              "name": "United Arab Emirates",
              "states": ["Abu Dhabi", "'Ajman", "Al Fujayrah", "Sharjah", "Dubai", "Ra's al Khaymah", "Umm al Qaywayn"]
            }, {
              "name": "United Kingdom",
              "states": ["Aberconwy and Colwyn", "Aberdeen City", "Aberdeenshire", "Anglesey", "Angus", "Antrim", "Argyll and Bute", "Armagh", "Avon", "Ayrshire", "Bath and NE Somerset", "Bedfordshire", "Belfast", "Berkshire", "Berwickshire", "BFPO", "Blaenau Gwent", "Buckinghamshire", "Caernarfonshire", "Caerphilly", "Caithness", "Cambridgeshire", "Cardiff", "Cardiganshire", "Carmarthenshire", "Ceredigion", "Channel Islands", "Cheshire", "City of Bristol", "Clackmannanshire", "Clwyd", "Conwy", "Cornwall/Scilly", "Cumbria", "Denbighshire", "Derbyshire", "Derry/Londonderry", "Devon", "Dorset", "Down", "Dumfries and Galloway", "Dunbartonshire", "Dundee", "Durham", "Dyfed", "East Ayrshire", "East Dunbartonshire", "East Lothian", "East Renfrewshire", "East Riding Yorkshire", "East Sussex", "Edinburgh", "England", "Essex", "Falkirk", "Fermanagh", "Fife", "Flintshire", "Glasgow", "Gloucestershire", "Greater London", "Greater Manchester", "Gwent", "Gwynedd", "Hampshire", "Hartlepool", "Hereford and Worcester", "Hertfordshire", "Highlands", "Inverclyde", "Inverness-Shire", "Isle of Man", "Isle of Wight", "Kent", "Kincardinshire", "Kingston Upon Hull", "Kinross-Shire", "Kirklees", "Lanarkshire", "Lancashire", "Leicestershire", "Lincolnshire", "Londonderry", "Merseyside", "Merthyr Tydfil", "Mid Glamorgan", "Mid Lothian", "Middlesex", "Monmouthshire", "Moray", "Neath & Port Talbot", "Newport", "Norfolk", "North Ayrshire", "North East Lincolnshire", "North Lanarkshire", "North Lincolnshire", "North Somerset", "North Yorkshire", "Northamptonshire", "Northern Ireland", "Northumberland", "Nottinghamshire", "Orkney and Shetland Isles", "Oxfordshire", "Pembrokeshire", "Perth and Kinross", "Powys", "Redcar and Cleveland", "Renfrewshire", "Rhonda Cynon Taff", "Rutland", "Scottish Borders", "Shetland", "Shropshire", "Somerset", "South Ayrshire", "South Glamorgan", "South Gloucesteshire", "South Lanarkshire", "South Yorkshire", "Staffordshire", "Stirling", "Stockton On Tees", "Suffolk", "Surrey", "Swansea", "Torfaen", "Tyne and Wear", "Tyrone", "Vale Of Glamorgan", "Wales", "Warwickshire", "West Berkshire", "West Dunbartonshire", "West Glamorgan", "West Lothian", "West Midlands", "West Sussex", "West Yorkshire", "Western Isles", "Wiltshire", "Wirral", "Worcestershire", "Wrexham", "York"]
            }, {
              "name": "United States",
              "states": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
            }, {
              "name": "Uruguay",
              "states": ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres"]
            }, {
              "name": "Uzbekistan",
              "states": ["Andijon Viloyati", "Buxoro Viloyati", "Farg'ona Viloyati", "Jizzax Viloyati", "Namangan Viloyati", "Navoiy Viloyati", "Qashqadaryo Viloyati", "Qaraqalpog'iston Respublikasi", "Samarqand Viloyati", "Sirdaryo Viloyati", "Surxondaryo Viloyati", "Toshkent Shahri", "Toshkent Viloyati", "Xorazm Viloyati"]
            }, {
              "name": "Vanuatu",
              "states": ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"]
            }, {
              "name": "Venezuela",
              "states": ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico", "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"]
            }, {
              "name": "Vietnam",
              "states": ["An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dac Lak", "Dac Nong", "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Hai Duong", "Ha Nam", "Ha Tay", "Ha Tinh", "Hau Giang", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai", "Can Tho", "Da Nang", "Hai Phong", "Hanoi", "Ho Chi Minh"]
            }, {
              "name": "Yemen",
              "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"]
            }, {
              "name": "Zambia",
              "states": ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Northern", "North-Western", "Southern", "Western"]
            }, {
              "name": "Zimbabwe",
              "states": ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"]
            }];
          }
        }, {
          key: "getCountriesWithCode",
          value: function getCountriesWithCode() {
            return [{
              "Code": "AF",
              "Name": "Afghanistan"
            }, {
              "Code": "AX",
              "Name": "\xC5land Islands"
            }, {
              "Code": "AL",
              "Name": "Albania"
            }, {
              "Code": "DZ",
              "Name": "Algeria"
            }, {
              "Code": "AS",
              "Name": "American Samoa"
            }, {
              "Code": "AD",
              "Name": "Andorra"
            }, {
              "Code": "AO",
              "Name": "Angola"
            }, {
              "Code": "AI",
              "Name": "Anguilla"
            }, {
              "Code": "AQ",
              "Name": "Antarctica"
            }, {
              "Code": "AG",
              "Name": "Antigua and Barbuda"
            }, {
              "Code": "AR",
              "Name": "Argentina"
            }, {
              "Code": "AM",
              "Name": "Armenia"
            }, {
              "Code": "AW",
              "Name": "Aruba"
            }, {
              "Code": "AU",
              "Name": "Australia"
            }, {
              "Code": "AT",
              "Name": "Austria"
            }, {
              "Code": "AZ",
              "Name": "Azerbaijan"
            }, {
              "Code": "BS",
              "Name": "Bahamas"
            }, {
              "Code": "BH",
              "Name": "Bahrain"
            }, {
              "Code": "BD",
              "Name": "Bangladesh"
            }, {
              "Code": "BB",
              "Name": "Barbados"
            }, {
              "Code": "BY",
              "Name": "Belarus"
            }, {
              "Code": "BE",
              "Name": "Belgium"
            }, {
              "Code": "BZ",
              "Name": "Belize"
            }, {
              "Code": "BJ",
              "Name": "Benin"
            }, {
              "Code": "BM",
              "Name": "Bermuda"
            }, {
              "Code": "BT",
              "Name": "Bhutan"
            }, {
              "Code": "BO",
              "Name": "Bolivia, Plurinational State of"
            }, {
              "Code": "BQ",
              "Name": "Bonaire, Sint Eustatius and Saba"
            }, {
              "Code": "BA",
              "Name": "Bosnia and Herzegovina"
            }, {
              "Code": "BW",
              "Name": "Botswana"
            }, {
              "Code": "BV",
              "Name": "Bouvet Island"
            }, {
              "Code": "BR",
              "Name": "Brazil"
            }, {
              "Code": "IO",
              "Name": "British Indian Ocean Territory"
            }, {
              "Code": "BN",
              "Name": "Brunei Darussalam"
            }, {
              "Code": "BG",
              "Name": "Bulgaria"
            }, {
              "Code": "BF",
              "Name": "Burkina Faso"
            }, {
              "Code": "BI",
              "Name": "Burundi"
            }, {
              "Code": "KH",
              "Name": "Cambodia"
            }, {
              "Code": "CM",
              "Name": "Cameroon"
            }, {
              "Code": "CA",
              "Name": "Canada"
            }, {
              "Code": "CV",
              "Name": "Cape Verde"
            }, {
              "Code": "KY",
              "Name": "Cayman Islands"
            }, {
              "Code": "CF",
              "Name": "Central African Republic"
            }, {
              "Code": "TD",
              "Name": "Chad"
            }, {
              "Code": "CL",
              "Name": "Chile"
            }, {
              "Code": "CN",
              "Name": "China"
            }, {
              "Code": "CX",
              "Name": "Christmas Island"
            }, {
              "Code": "CC",
              "Name": "Cocos (Keeling) Islands"
            }, {
              "Code": "CO",
              "Name": "Colombia"
            }, {
              "Code": "KM",
              "Name": "Comoros"
            }, {
              "Code": "CG",
              "Name": "Congo"
            }, {
              "Code": "CD",
              "Name": "Congo, the Democratic Republic of the"
            }, {
              "Code": "CK",
              "Name": "Cook Islands"
            }, {
              "Code": "CR",
              "Name": "Costa Rica"
            }, {
              "Code": "CI",
              "Name": "C\xF4te d'Ivoire"
            }, {
              "Code": "HR",
              "Name": "Croatia"
            }, {
              "Code": "CU",
              "Name": "Cuba"
            }, {
              "Code": "CW",
              "Name": "Cura\xE7ao"
            }, {
              "Code": "CY",
              "Name": "Cyprus"
            }, {
              "Code": "CZ",
              "Name": "Czech Republic"
            }, {
              "Code": "DK",
              "Name": "Denmark"
            }, {
              "Code": "DJ",
              "Name": "Djibouti"
            }, {
              "Code": "DM",
              "Name": "Dominica"
            }, {
              "Code": "DO",
              "Name": "Dominican Republic"
            }, {
              "Code": "EC",
              "Name": "Ecuador"
            }, {
              "Code": "EG",
              "Name": "Egypt"
            }, {
              "Code": "SV",
              "Name": "El Salvador"
            }, {
              "Code": "GQ",
              "Name": "Equatorial Guinea"
            }, {
              "Code": "ER",
              "Name": "Eritrea"
            }, {
              "Code": "EE",
              "Name": "Estonia"
            }, {
              "Code": "ET",
              "Name": "Ethiopia"
            }, {
              "Code": "FK",
              "Name": "Falkland Islands (Malvinas)"
            }, {
              "Code": "FO",
              "Name": "Faroe Islands"
            }, {
              "Code": "FJ",
              "Name": "Fiji"
            }, {
              "Code": "FI",
              "Name": "Finland"
            }, {
              "Code": "FR",
              "Name": "France"
            }, {
              "Code": "GF",
              "Name": "French Guiana"
            }, {
              "Code": "PF",
              "Name": "French Polynesia"
            }, {
              "Code": "TF",
              "Name": "French Southern Territories"
            }, {
              "Code": "GA",
              "Name": "Gabon"
            }, {
              "Code": "GM",
              "Name": "Gambia"
            }, {
              "Code": "GE",
              "Name": "Georgia"
            }, {
              "Code": "DE",
              "Name": "Germany"
            }, {
              "Code": "GH",
              "Name": "Ghana"
            }, {
              "Code": "GI",
              "Name": "Gibraltar"
            }, {
              "Code": "GR",
              "Name": "Greece"
            }, {
              "Code": "GL",
              "Name": "Greenland"
            }, {
              "Code": "GD",
              "Name": "Grenada"
            }, {
              "Code": "GP",
              "Name": "Guadeloupe"
            }, {
              "Code": "GU",
              "Name": "Guam"
            }, {
              "Code": "GT",
              "Name": "Guatemala"
            }, {
              "Code": "GG",
              "Name": "Guernsey"
            }, {
              "Code": "GN",
              "Name": "Guinea"
            }, {
              "Code": "GW",
              "Name": "Guinea-Bissau"
            }, {
              "Code": "GY",
              "Name": "Guyana"
            }, {
              "Code": "HT",
              "Name": "Haiti"
            }, {
              "Code": "HM",
              "Name": "Heard Island and McDonald Islands"
            }, {
              "Code": "VA",
              "Name": "Holy See (Vatican City State)"
            }, {
              "Code": "HN",
              "Name": "Honduras"
            }, {
              "Code": "HK",
              "Name": "Hong Kong"
            }, {
              "Code": "HU",
              "Name": "Hungary"
            }, {
              "Code": "IS",
              "Name": "Iceland"
            }, {
              "Code": "IN",
              "Name": "India"
            }, {
              "Code": "ID",
              "Name": "Indonesia"
            }, {
              "Code": "IR",
              "Name": "Iran, Islamic Republic of"
            }, {
              "Code": "IQ",
              "Name": "Iraq"
            }, {
              "Code": "IE",
              "Name": "Ireland"
            }, {
              "Code": "IM",
              "Name": "Isle of Man"
            }, {
              "Code": "IL",
              "Name": "Israel"
            }, {
              "Code": "IT",
              "Name": "Italy"
            }, {
              "Code": "JM",
              "Name": "Jamaica"
            }, {
              "Code": "JP",
              "Name": "Japan"
            }, {
              "Code": "JE",
              "Name": "Jersey"
            }, {
              "Code": "JO",
              "Name": "Jordan"
            }, {
              "Code": "KZ",
              "Name": "Kazakhstan"
            }, {
              "Code": "KE",
              "Name": "Kenya"
            }, {
              "Code": "KI",
              "Name": "Kiribati"
            }, {
              "Code": "KP",
              "Name": "Korea, Democratic People's Republic of"
            }, {
              "Code": "KR",
              "Name": "Korea, Republic of"
            }, {
              "Code": "KW",
              "Name": "Kuwait"
            }, {
              "Code": "KG",
              "Name": "Kyrgyzstan"
            }, {
              "Code": "LA",
              "Name": "Lao People's Democratic Republic"
            }, {
              "Code": "LV",
              "Name": "Latvia"
            }, {
              "Code": "LB",
              "Name": "Lebanon"
            }, {
              "Code": "LS",
              "Name": "Lesotho"
            }, {
              "Code": "LR",
              "Name": "Liberia"
            }, {
              "Code": "LY",
              "Name": "Libya"
            }, {
              "Code": "LI",
              "Name": "Liechtenstein"
            }, {
              "Code": "LT",
              "Name": "Lithuania"
            }, {
              "Code": "LU",
              "Name": "Luxembourg"
            }, {
              "Code": "MO",
              "Name": "Macao"
            }, {
              "Code": "MK",
              "Name": "Macedonia, the Former Yugoslav Republic of"
            }, {
              "Code": "MG",
              "Name": "Madagascar"
            }, {
              "Code": "MW",
              "Name": "Malawi"
            }, {
              "Code": "MY",
              "Name": "Malaysia"
            }, {
              "Code": "MV",
              "Name": "Maldives"
            }, {
              "Code": "ML",
              "Name": "Mali"
            }, {
              "Code": "MT",
              "Name": "Malta"
            }, {
              "Code": "MH",
              "Name": "Marshall Islands"
            }, {
              "Code": "MQ",
              "Name": "Martinique"
            }, {
              "Code": "MR",
              "Name": "Mauritania"
            }, {
              "Code": "MU",
              "Name": "Mauritius"
            }, {
              "Code": "YT",
              "Name": "Mayotte"
            }, {
              "Code": "MX",
              "Name": "Mexico"
            }, {
              "Code": "FM",
              "Name": "Micronesia, Federated States of"
            }, {
              "Code": "MD",
              "Name": "Moldova, Republic of"
            }, {
              "Code": "MC",
              "Name": "Monaco"
            }, {
              "Code": "MN",
              "Name": "Mongolia"
            }, {
              "Code": "ME",
              "Name": "Montenegro"
            }, {
              "Code": "MS",
              "Name": "Montserrat"
            }, {
              "Code": "MA",
              "Name": "Morocco"
            }, {
              "Code": "MZ",
              "Name": "Mozambique"
            }, {
              "Code": "MM",
              "Name": "Myanmar"
            }, {
              "Code": "NA",
              "Name": "Namibia"
            }, {
              "Code": "NR",
              "Name": "Nauru"
            }, {
              "Code": "NP",
              "Name": "Nepal"
            }, {
              "Code": "NL",
              "Name": "Netherlands"
            }, {
              "Code": "NC",
              "Name": "New Caledonia"
            }, {
              "Code": "NZ",
              "Name": "New Zealand"
            }, {
              "Code": "NI",
              "Name": "Nicaragua"
            }, {
              "Code": "NE",
              "Name": "Niger"
            }, {
              "Code": "NG",
              "Name": "Nigeria"
            }, {
              "Code": "NU",
              "Name": "Niue"
            }, {
              "Code": "NF",
              "Name": "Norfolk Island"
            }, {
              "Code": "MP",
              "Name": "Northern Mariana Islands"
            }, {
              "Code": "NO",
              "Name": "Norway"
            }, {
              "Code": "OM",
              "Name": "Oman"
            }, {
              "Code": "PK",
              "Name": "Pakistan"
            }, {
              "Code": "PW",
              "Name": "Palau"
            }, {
              "Code": "PS",
              "Name": "Palestine, State of"
            }, {
              "Code": "PA",
              "Name": "Panama"
            }, {
              "Code": "PG",
              "Name": "Papua New Guinea"
            }, {
              "Code": "PY",
              "Name": "Paraguay"
            }, {
              "Code": "PE",
              "Name": "Peru"
            }, {
              "Code": "PH",
              "Name": "Philippines"
            }, {
              "Code": "PN",
              "Name": "Pitcairn"
            }, {
              "Code": "PL",
              "Name": "Poland"
            }, {
              "Code": "PT",
              "Name": "Portugal"
            }, {
              "Code": "PR",
              "Name": "Puerto Rico"
            }, {
              "Code": "QA",
              "Name": "Qatar"
            }, {
              "Code": "RE",
              "Name": "R\xE9union"
            }, {
              "Code": "RO",
              "Name": "Romania"
            }, {
              "Code": "RU",
              "Name": "Russian Federation"
            }, {
              "Code": "RW",
              "Name": "Rwanda"
            }, {
              "Code": "BL",
              "Name": "Saint Barth\xE9lemy"
            }, {
              "Code": "SH",
              "Name": "Saint Helena, Ascension and Tristan da Cunha"
            }, {
              "Code": "KN",
              "Name": "Saint Kitts and Nevis"
            }, {
              "Code": "LC",
              "Name": "Saint Lucia"
            }, {
              "Code": "MF",
              "Name": "Saint Martin (French part)"
            }, {
              "Code": "PM",
              "Name": "Saint Pierre and Miquelon"
            }, {
              "Code": "VC",
              "Name": "Saint Vincent and the Grenadines"
            }, {
              "Code": "WS",
              "Name": "Samoa"
            }, {
              "Code": "SM",
              "Name": "San Marino"
            }, {
              "Code": "ST",
              "Name": "Sao Tome and Principe"
            }, {
              "Code": "SA",
              "Name": "Saudi Arabia"
            }, {
              "Code": "SN",
              "Name": "Senegal"
            }, {
              "Code": "RS",
              "Name": "Serbia"
            }, {
              "Code": "SC",
              "Name": "Seychelles"
            }, {
              "Code": "SL",
              "Name": "Sierra Leone"
            }, {
              "Code": "SG",
              "Name": "Singapore"
            }, {
              "Code": "SX",
              "Name": "Sint Maarten (Dutch part)"
            }, {
              "Code": "SK",
              "Name": "Slovakia"
            }, {
              "Code": "SI",
              "Name": "Slovenia"
            }, {
              "Code": "SB",
              "Name": "Solomon Islands"
            }, {
              "Code": "SO",
              "Name": "Somalia"
            }, {
              "Code": "ZA",
              "Name": "South Africa"
            }, {
              "Code": "GS",
              "Name": "South Georgia and the South Sandwich Islands"
            }, {
              "Code": "SS",
              "Name": "South Sudan"
            }, {
              "Code": "ES",
              "Name": "Spain"
            }, {
              "Code": "LK",
              "Name": "Sri Lanka"
            }, {
              "Code": "SD",
              "Name": "Sudan"
            }, {
              "Code": "SR",
              "Name": "Suriname"
            }, {
              "Code": "SJ",
              "Name": "Svalbard and Jan Mayen"
            }, {
              "Code": "SZ",
              "Name": "Swaziland"
            }, {
              "Code": "SE",
              "Name": "Sweden"
            }, {
              "Code": "CH",
              "Name": "Switzerland"
            }, {
              "Code": "SY",
              "Name": "Syrian Arab Republic"
            }, {
              "Code": "TW",
              "Name": "Taiwan, Province of China"
            }, {
              "Code": "TJ",
              "Name": "Tajikistan"
            }, {
              "Code": "TZ",
              "Name": "Tanzania, United Republic of"
            }, {
              "Code": "TH",
              "Name": "Thailand"
            }, {
              "Code": "TL",
              "Name": "Timor-Leste"
            }, {
              "Code": "TG",
              "Name": "Togo"
            }, {
              "Code": "TK",
              "Name": "Tokelau"
            }, {
              "Code": "TO",
              "Name": "Tonga"
            }, {
              "Code": "TT",
              "Name": "Trinidad and Tobago"
            }, {
              "Code": "TN",
              "Name": "Tunisia"
            }, {
              "Code": "TR",
              "Name": "Turkey"
            }, {
              "Code": "TM",
              "Name": "Turkmenistan"
            }, {
              "Code": "TC",
              "Name": "Turks and Caicos Islands"
            }, {
              "Code": "TV",
              "Name": "Tuvalu"
            }, {
              "Code": "UG",
              "Name": "Uganda"
            }, {
              "Code": "UA",
              "Name": "Ukraine"
            }, {
              "Code": "AE",
              "Name": "United Arab Emirates"
            }, {
              "Code": "GB",
              "Name": "United Kingdom"
            }, {
              "Code": "US",
              "Name": "United States"
            }, {
              "Code": "UM",
              "Name": "United States Minor Outlying Islands"
            }, {
              "Code": "UY",
              "Name": "Uruguay"
            }, {
              "Code": "UZ",
              "Name": "Uzbekistan"
            }, {
              "Code": "VU",
              "Name": "Vanuatu"
            }, {
              "Code": "VE",
              "Name": "Venezuela, Bolivarian Republic of"
            }, {
              "Code": "VN",
              "Name": "Viet Nam"
            }, {
              "Code": "VG",
              "Name": "Virgin Islands, British"
            }, {
              "Code": "VI",
              "Name": "Virgin Islands, U.S."
            }, {
              "Code": "WF",
              "Name": "Wallis and Futuna"
            }, {
              "Code": "EH",
              "Name": "Western Sahara"
            }, {
              "Code": "YE",
              "Name": "Yemen"
            }, {
              "Code": "ZM",
              "Name": "Zambia"
            }, {
              "Code": "ZW",
              "Name": "Zimbabwe"
            }];
          }
        }, {
          key: "getCodeByCountryName",
          value: function getCodeByCountryName(country) {
            for (var i = 0; i < UtilityService_1.getCountriesWithCode().length; i++) {
              var data = UtilityService_1.getCountriesWithCode()[i];

              if (data.Name.toString().toLowerCase().search(country.toLowerCase()) > -1) {
                return data.Code;
              }
            }
          }
        }, {
          key: "getStatesByCountry",
          value: function getStatesByCountry(country) {
            if (!country) {
              return [];
            }

            var states = [];

            var _iterator2 = _createForOfIteratorHelper(UtilityService_1.getAllCountries()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var c = _step2.value;

                // console.log(c);
                if (c.name.toLowerCase().trim().search(country.toLowerCase().trim()) > -1) {
                  states = c.states; // console.log(states);

                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return states;
          }
        }, {
          key: "formatDateFormRebind",
          value: function formatDateFormRebind(date) {
            date = new Date(date);

            if (date) {
              var month = ('' + date.getMonth()).length == 1 ? '0' + date.getMonth() : date.getMonth();
              var day = ('' + date.getDay()).length == 1 ? '0' + date.getDay() : date.getDay();
              return '' + date.getFullYear() + '-' + month + '-' + day;
            }

            return undefined;
          }
        }, {
          key: "validatePhoneNumber",
          value: function validatePhoneNumber(number) {
            var re1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var re2 = /^\d{10}$/;
            var re3 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
            var re4 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

            if (number.match(re1) || number.match(re2) || number.match(re3) || number.match(re4)) {
              return true;
            }

            return false;
          }
        }, {
          key: "checkPasswordStrength",
          value: function checkPasswordStrength(password) {
            var strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');

            if (password.match(strongRegex)) {
              return true;
            }

            return false;
          }
        }, {
          key: "ValidateEmail",
          value: function ValidateEmail(email) {
            var emailRe = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;

            if (email.match(emailRe)) {
              return true;
            }

            return false;
          }
        }, {
          key: "myHttpErrorFormat",
          value: function myHttpErrorFormat(e) {
            var entityName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            console.log(JSON.stringify(e));
            var msg = {};
            var statusCode = 0;
            console.log(e.error);

            if (e && e.error) {
              statusCode = e.status;
            }

            switch (statusCode) {
              case 0:
                msg.title = 'No connection';
                msg.message = 'Check your internet connection and try again';
                break;

              case 422:
                msg.title = "Invalid ".concat(entityName, " data");
                msg.message = 'Check all required fields';
                break;

              default:
                if (JSON.stringify(e).search('401') > -1) {
                  // Authorization error, token expired
                  msg.title = 'Authorization error', msg.message = JSON.stringify(e);
                } else {
                  msg.title = 'Unknown error', msg.message = JSON.stringify(e);
                }

                break;
            }

            return msg;
          }
        }, {
          key: "generateUniqueFileName",
          value: function generateUniqueFileName(fileName) {
            var tem = fileName.split('.');
            var ext = tem[tem.length - 1];
            return tem[0] + new Date().getMilliseconds() + '_' + new Date().getSeconds() + '_' + new Date().getMinutes() + '_' + new Date().getHours() + '_' + new Date().getDay() + '_' + new Date().getMonth() + '_' + new Date().getFullYear() + '.' + ext;
          }
        }, {
          key: "stopLoading",
          value: function stopLoading(loading) {
            var after_secs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
            setTimeout(function (_) {
              try {
                loading.dismiss();
              } catch (error) {}
            }, after_secs * 1000);
          } // async saveNotification(message) {
          //     let notifications = await this._fstore.getObject('notifications'); // array of notification object
          // }
          //   escapeSpace(value: string) {
          //     if (value) {
          //       const value_ar = value.trim().split(" ");
          //       if (value.length > 0) {
          //         let temp = '';
          //         value_ar.forEach((el, index) => {
          //           if (index != value_ar.length - 1) {
          //             temp += (el + "\ ");
          //           } else {
          //             temp += (el);
          //           }
          //         });
          //         return temp
          //       }
          //       return value;
          //     }
          //     return '';
          //   }

        }, {
          key: "destroySubscription",
          value: function destroySubscription(subscription$) {
            if (Array.isArray(subscription$)) {
              subscription$.forEach(function (sub) {
                try {
                  sub.unsubscribe();
                } catch (error) {}
              });
            } else {
              try {
                subscription$.unsubscribe();
              } catch (error) {}
            }
          } // get all profile photo of each school and store
          // in the same index location as the school;
          // return array of photos

        }, {
          key: "getIdentityPhotos",
          value: function getIdentityPhotos(subjects) {
            var photos = [];
            subjects.forEach(function (sub) {
              var _a;

              var photo = {};
              (_a = sub === null || sub === void 0 ? void 0 : sub.photos) === null || _a === void 0 ? void 0 : _a.forEach(function (ph) {
                if (ph.profile) {
                  photo.profile = ph;
                }

                if (ph.coverImage) {
                  photo.cover = ph;
                }

                if (ph.flag) {
                  photo.flag = ph;
                }
              });
              photos.push(photo);
            });
            return photos;
          }
          /**
           * IonicNative.PhotoLibrary.getLibrary does not match CordovaPlugin.PhotoLibrary.getLibrary
           *    IonicNative: PhotoLibrary.getLibrary = (options?: GetLibraryOptions)=>Observable<LibraryItem[]>;
           * but `cordova-plugin-photo-library` expects:
           *    Cordova: PhotoLibrary.getLibrary = (success, error, options)=>void
           */

        }, {
          key: "patch_IonicNativePhotoLibrary",
          value: function patch_IonicNativePhotoLibrary(photoLibrary) {
            // force typescript type check to match cordova getLibrary()
            var native_getLibrary = photoLibrary.getLibrary;
            var done;

            if (!photoLibrary['getLibrary_0']) {
              native_getLibrary = photoLibrary.getLibrary;
              photoLibrary['getLibrary_0'] = native_getLibrary;
            }

            var resp$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var callbacks = {
              success: function success(resp) {
                resp$.next(resp.library);

                if (resp.isLastChunk) {
                  resp$.complete();
                  done.unsubscribe();
                }
              },
              error: function error(err) {
                resp$.error(err);
                resp$.complete();
                done.unsubscribe();
              }
            };

            photoLibrary['getLibrary_patched'] = function (options) {
              done = photoLibrary['getLibrary_0'](callbacks.success, callbacks.error, options).subscribe();
              return resp$.asObservable();
            };

            photoLibrary.getLibrary = photoLibrary['getLibrary_patched'];
          }
        }, {
          key: "log",
          value: function log(func, data) {
            console.log('****************************');
            console.log("".concat(func, ": "));
            console.log(data);
            console.log('******************************');
          }
        }, {
          key: "SortDegree",
          value: function SortDegree(degrees) {
            return degrees === null || degrees === void 0 ? void 0 : degrees.sort(function (a, b) {
              if (a.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].PHD && b.type !== _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].PHD) {
                return 1;
              } else if (a.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].PHD && b.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].PHD) {
                return 0;
              } else if (a.type !== _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].PHD && b.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].PHD) {
                return -1;
              } else if (a.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].MSC && b.type !== _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].MSC) {
                return 1;
              } else if (a.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].MSC && b.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].MSC) {
                return 0;
              } else if (a.type !== _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].MSC && b.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].MSC) {
                return -1;
              } else if (a.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].BSC && b.type !== _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].BSC) {
                return 1;
              } else if (a.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].BSC && b.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].BSC) {
                return 0;
              } else if (a.type !== _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].BSC && b.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].BSC) {
                return -1;
              } else if (a.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].DEPLOMA && b.type !== _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].DEPLOMA) {
                return 1;
              } else if (a.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].DEPLOMA && b.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].DEPLOMA) {
                return 0;
              } else if (a.type !== _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].DEPLOMA && b.type === _models_degree__WEBPACK_IMPORTED_MODULE_4__["DegreeType"].DEPLOMA) {
                return -1;
              }
            });
          } // NB: Remember to destroy the observer

        }, {
          key: "monitorElementOutOfView",
          value: function monitorElementOutOfView(elementId, outViewCB, inViewCB) {
            var threshold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.9;
            var element = document.querySelector('#' + elementId);
            var root = document.querySelector('#root'); // console.log(element);
            // console.log(this.sliderId);

            var options = {
              root: root,
              rootMargin: '0px',
              threshold: threshold,
              trackVisibility: true,
              delay: 100
            };
            var observer = new IntersectionObserver(function (entries, obsvr) {
              console.log(entries);
              var entry = entries[0]; // if element is out of view

              if (!entry.isIntersecting) {
                outViewCB();
              } else {
                // setTimeout(() => {
                inViewCB(); // }, 1000);
              } // console.log(obsvr);

            }, options);
            observer.observe(element);
            return {
              observer: observer,
              element: element
            };
          }
        }]);

        return UtilityService;
      }();

      UtilityService.ctorParameters = function () {
        return [{
          type: _storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__["MyStorage"]
        }];
      };

      UtilityService = UtilityService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], UtilityService);
      /***/
    },

    /***/
    "./src/app/shared/services/providers/widgets/toaster.service.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/services/providers/widgets/toaster.service.ts ***!
      \**********************************************************************/

    /*! exports provided: ToasterService */

    /***/
    function srcAppSharedServicesProvidersWidgetsToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
        return ToasterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ToasterService = /*#__PURE__*/function () {
        function ToasterService(_toast) {
          _classCallCheck(this, ToasterService);

          this._toast = _toast;
        }

        _createClass(ToasterService, [{
          key: "toast",
          value: function toast(msg, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
              var toast;
              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      if (!duration) {
                        duration = 2000;
                      }

                      _context46.next = 3;
                      return this._toast.create({
                        message: msg,
                        duration: 4000,
                        cssClass: 'my-custom-class'
                      });

                    case 3:
                      toast = _context46.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46, this);
            }));
          }
        }, {
          key: "toastOptions",
          value: function toastOptions(conf) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
              var toast;
              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      _context47.next = 2;
                      return this._toast.create(conf);

                    case 2:
                      toast = _context47.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47, this);
            }));
          }
        }]);

        return ToasterService;
      }();

      ToasterService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }];
      };

      ToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ToasterService);
      /***/
    },

    /***/
    "./src/app/widgets/audio-recorder/audio-recorder.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/audio-recorder/audio-recorder.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsAudioRecorderAudioRecorderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvYXVkaW8tcmVjb3JkZXIvYXVkaW8tcmVjb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/audio-recorder/audio-recorder.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/widgets/audio-recorder/audio-recorder.component.ts ***!
      \********************************************************************/

    /*! exports provided: AudioRecorderComponent */

    /***/
    function srcAppWidgetsAudioRecorderAudioRecorderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AudioRecorderComponent", function () {
        return AudioRecorderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_providers_local_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/providers/local-media.service */
      "./src/app/shared/services/providers/local-media.service.ts");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var AudioRecorderComponent = /*#__PURE__*/function () {
        function AudioRecorderComponent(media, file, signals, localMediaService) {
          _classCallCheck(this, AudioRecorderComponent);

          this.media = media;
          this.file = file;
          this.signals = signals;
          this.localMediaService = localMediaService;
          this.status = '';
          this.counter = 0;
          this.currentFile = '';
          this.filePath = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(AudioRecorderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "start",
          value: function start() {
            var _a;

            this.counter += 1;
            this.currentFile = this.file.dataDirectory + '/media/' + this.localMediaService.createFileName('temp.mp3');
            this.audioFile = this.media.create(this.currentFile);
            (_a = this.audioFile) === null || _a === void 0 ? void 0 : _a.startRecord();
            this.status = 'Recording...';
          }
        }, {
          key: "stop",
          value: function stop() {
            var _a;

            (_a = this.audioFile) === null || _a === void 0 ? void 0 : _a.stopRecord();
            this.status = 'stopped';
            this.filePath.emit(this.currentFile);
            var uri = this.currentFile;
            var fileName = uri.substr(uri.lastIndexOf('/') + 1);

            var resolvedUri = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Capacitor"].convertFileSrc(uri); // create a local audio object and return


            var aud = {
              id: '0;' + uri,
              nativeURL: uri,
              posterNativeURL: '',
              resolvedURL: resolvedUri,
              posterResolvedURL: '',
              fileName: fileName,
              creationDate: new Date(Date.now()),
              length: this.audioFile.getDuration()
            };
            this.signals.announceAudioRecordingComplete(aud); // this.closeModals(); // close the modal its used as a modal;
          }
        }, {
          key: "play",
          value: function play() {
            this.audioFile.play(); // this.previewAnyFile.preview(this.file.dataDirectory + '/media/audiofile' + this.counter + '.mp3'.replace('file//', ''))
          }
        }, {
          key: "stopPlay",
          value: function stopPlay() {
            this.audioFile.stop();
          }
        }, {
          key: "closeModals",
          value: function closeModals() {
            this.signals.announceCloseModal('audio-recorder');
          }
        }]);

        return AudioRecorderComponent;
      }();

      AudioRecorderComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__["Media"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_5__["MySignals"]
        }, {
          type: src_app_shared_services_providers_local_media_service__WEBPACK_IMPORTED_MODULE_1__["LocalMediaService"]
        }];
      };

      AudioRecorderComponent.propDecorators = {
        filePath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      AudioRecorderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-audio-recorder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./audio-recorder.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/audio-recorder/audio-recorder.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./audio-recorder.component.scss */
        "./src/app/widgets/audio-recorder/audio-recorder.component.scss"))["default"]]
      })], AudioRecorderComponent);
      /***/
    },

    /***/
    "./src/app/widgets/audio-thumbnail/audio-thumbnail.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/audio-thumbnail/audio-thumbnail.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsAudioThumbnailAudioThumbnailComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".image-container {\n  height: 150px;\n  /* background-size: cover; */\n  background-color: #495057;\n}\n\n.thumbnailPlay {\n  --border-width: 0px;\n  position: absolute;\n  margin-top: 9%;\n  right: 33%;\n  font-size: large;\n  font-weight: bold;\n  background: var(--ion-color-tertiary-tint);\n  border-radius: 1000px;\n}\n\n.time-label {\n  float: right;\n  position: absolute;\n  right: 10%;\n  margin-top: 23px;\n  color: var(--ion-color-light);\n}\n\n.thumbnailClose {\n  --border-width: 0px;\n  right: 2%;\n  position: absolute;\n  top: 4%;\n}\n\n.play-button {\n  height: 45px;\n  width: 45px;\n  box-shadow: none;\n  margin-left: 33%;\n  --border-style: solid;\n  --border-width: 0px;\n  --background-hover-opacity: 50%;\n  --background-hover: red;\n  --background: #ffffffa6;\n  --box-shadow: none;\n  --color: light;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9hdWRpby10aHVtYm5haWwvYXVkaW8tdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvYXVkaW8tdGh1bWJuYWlsL2F1ZGlvLXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4udGh1bWJuYWlsUGxheSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbiAgICByaWdodDogMzMlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG59XHJcbi50aW1lLWxhYmVse1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLnRodW1ibmFpbENsb3Nle1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgIHJpZ2h0OiAyJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNCU7XHJcbn1cclxuXHJcbi5wbGF5LWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiA1MCU7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJlZDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZmE2O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1jb2xvcjogbGlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/audio-thumbnail/audio-thumbnail.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/audio-thumbnail/audio-thumbnail.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AudioThumbnailComponent */

    /***/
    function srcAppWidgetsAudioThumbnailAudioThumbnailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AudioThumbnailComponent", function () {
        return AudioThumbnailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");

      var AudioThumbnailComponent = /*#__PURE__*/function () {
        function AudioThumbnailComponent(previewAnyFile) {
          _classCallCheck(this, AudioThumbnailComponent);

          this.previewAnyFile = previewAnyFile;
          this.location = 'cloud'; // cloud || local

          this.selected = false;
          this.count = 0;
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.isSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.downloadUrlRoot = src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"];
        }

        _createClass(AudioThumbnailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select() {
            this.selected = !this.selected;
            this.isSelected.emit(this.thumb);
          }
        }, {
          key: "onDoubleClickAudioThumbnail",
          value: function onDoubleClickAudioThumbnail() {
            this.preview();
          }
        }, {
          key: "preview",
          value: function preview() {
            var path = '';
            console.log(this.location);

            try {
              if (this.location == 'cloud') {
                console.log('cloud');
                path = this.downloadUrlRoot + this.thumb.fileName;
              } else if (this.location == 'local') {
                console.log('local');
                path = this.thumb.nativeURL;
                path = path.replace('file//', '');
              } else {
                console.log('Unknown location');
              }

              console.log(JSON.stringify(this.thumb));
              this.previewAnyFile.preview(path).then(function (res) {
                return console.log(JSON.stringify(res));
              })["catch"](function (error) {
                return console.error(JSON.stringify(error));
              });
            } catch (e) {
              console.log(JSON.stringify(e));
            }
          } // getThumbnailUrl() {
          //   if (this.location == 'cloud') {
          //     return this.downloadUrlRoot + (this.thumb as Audio).thumbnailUrl;
          //   } else if (this.location == 'local') {
          //     return (this.thumb as AudioLocal).posterResolvedURL;
          //   }
          // }

        }, {
          key: "onDelete",
          value: function onDelete() {
            this["delete"].emit(true);
          }
        }]);

        return AudioThumbnailComponent;
      }();

      AudioThumbnailComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_3__["PreviewAnyFile"]
        }];
      };

      AudioThumbnailComponent.propDecorators = {
        location: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        audioThumbnail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['audioThumbnail']
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      AudioThumbnailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audio-thumbnail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./audio-thumbnail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/audio-thumbnail/audio-thumbnail.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./audio-thumbnail.component.scss */
        "./src/app/widgets/audio-thumbnail/audio-thumbnail.component.scss"))["default"]]
      })], AudioThumbnailComponent);
      /***/
    },

    /***/
    "./src/app/widgets/comments/comments.component.scss":
    /*!**********************************************************!*\
      !*** ./src/app/widgets/comments/comments.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsCommentsCommentsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".my-backdrop {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n}\n\n.content-container {\n  position: absolute;\n  margin-left: -2vw;\n  background: white !important;\n  padding-top: 1vh;\n}\n\n.content-container ion-text {\n  font-size: 0.9em;\n}\n\n.content-container p {\n  width: 100vw;\n  float: right;\n  /* margin-right: 12px; */\n  padding-right: 18px;\n  padding-left: 53px;\n  margin-top: -23px;\n}\n\n.inner-container {\n  height: 73%;\n  width: 100vw !important;\n  overflow-y: scroll;\n}\n\n.inner-container-mini {\n  height: 120px !important;\n}\n\n.inner-collapse {\n  height: 0px !important;\n}\n\nion-item {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nion-list {\n  width: 100%;\n}\n\n.send-btn {\n  width: 100%;\n  padding-left: 2%;\n}\n\n.send-btn ion-item {\n  padding: 0;\n  margin: 0;\n  margin-left: -3px;\n}\n\n.send-btn ion-icon {\n  color: #3880ff;\n  margin-right: 7px;\n}\n\nion-modal {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUk7RUFFRSxnQkFBQTtBQUROOztBQUlJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZOOztBQVdFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFWSjs7QUFZRTtFQUNFLHdCQUFBO0FBVEo7O0FBV0U7RUFDRSxzQkFBQTtBQVJKOztBQVdFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBUko7O0FBV0U7RUFDRSxXQUFBO0FBUko7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFVSTtFQUVFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFUTjs7QUFpQkk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFmTjs7QUFtQkU7RUFDRSx5QkFBQTtBQWhCSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktYmFja2Ryb3Age1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzAwMDAwMDczO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ydnc7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgIFxyXG4gICAgaW9uLXRleHQge1xyXG4gICAgLy8gICBjb2xvcjogIzNjM2MzYztcclxuICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAvKiBtYXJnaW4tcmlnaHQ6IDEycHg7ICovXHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNTNweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTIzcHg7XHJcbiAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAvLyBjb2xvcjogIzc0NzQ3NDtcclxuICAgICAgICAvLyBmb250LXNpemU6IC44ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDczJTtcclxuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAuaW5uZXItY29udGFpbmVyLW1pbml7XHJcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbm5lci1jb2xsYXBzZXtcclxuICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZW5kLWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAvLyAgIC0tYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICBcclxuICBcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tbW9kYWwge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/widgets/comments/comments.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/widgets/comments/comments.component.ts ***!
      \********************************************************/

    /*! exports provided: CommentsComponent */

    /***/
    function srcAppWidgetsCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
        return CommentsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _emoji_modal_emoji_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../emoji-modal/emoji-modal.component */
      "./src/app/widgets/emoji-modal/emoji-modal.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/model-service/social.service */
      "./src/app/shared/services/model-service/social.service.ts");
      /* harmony import */


      var _models_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../models/comment */
      "./src/app/models/comment.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/model-service/post.service */
      "./src/app/shared/services/model-service/post.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/providers/widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CommentsComponent = /*#__PURE__*/function () {
        function CommentsComponent(signals, socialService, userService, postService, toaster, cdr, router, modalController, platform) {
          _classCallCheck(this, CommentsComponent);

          this.signals = signals;
          this.socialService = socialService;
          this.userService = userService;
          this.postService = postService;
          this.toaster = toaster;
          this.cdr = cdr;
          this.router = router;
          this.modalController = modalController;
          this.platform = platform;
          this.comments = [];
          this.creators = [];
          this.creatorPhotoUrls = [];
          this.comment = new _models_comment__WEBPACK_IMPORTED_MODULE_5__["Comment"]();
          this.showHeader = true;
          this.totalComments = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.emojiSheetToggle = false;
        }

        _createClass(CommentsComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {// console.log(this.comment);
            // if (this.comment?.postId) {
            //   this.loadPostComments();
            // }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this65 = this;

            this.userService.getUserLocal().then(function (user) {
              _this65.user = user;
            }); // this.postService.getPostLocal().then(post => {
            //   if (post) {
            //     this.post = post;
            //     this.comment.postId = post?.id;
            //     // this.loadPostComments();
            //   }
            // });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// console.log(this.comment);
            // if (this.comment?.postId) {
            //   this.loadPostComments();
            // } 
          }
        }, {
          key: "close",
          value: function close() {
            this.signals.announceCloseModal('comments');
          }
        }, {
          key: "send",
          value: function send() {
            var _a, _b, _c, _d;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var _this66 = this;

              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      console.log((_a = this.comment) === null || _a === void 0 ? void 0 : _a.message);
                      this.comment.initiatorId = (_b = this.user) === null || _b === void 0 ? void 0 : _b.id;

                      if (!(!((_c = this.comment) === null || _c === void 0 ? void 0 : _c.message) || !((_d = this.comment) === null || _d === void 0 ? void 0 : _d.postId))) {
                        _context48.next = 6;
                        break;
                      }

                      _context48.next = 5;
                      return this.toaster.toast('Please say something!');

                    case 5:
                      return _context48.abrupt("return");

                    case 6:
                      this.socialService.createUpdateComment(this.comment).subscribe(function (comment) {
                        if (comment) {
                          // reload comments
                          _this66.comments = [comment].concat(_toConsumableArray(_this66.comments));
                          _this66.comment.message = '';

                          _this66.loadPostComments();
                        }
                      });
                      this.signals.announceCloseModal('emoji'); // close all existing ones

                    case 8:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));
          }
        }, {
          key: "loadPostComments",
          value: function loadPostComments() {
            var _this67 = this;

            var _a, _b;

            if (!((_a = this.post) === null || _a === void 0 ? void 0 : _a.id)) {
              return;
            }

            var pageInfo = {
              offset: 0,
              limit: this.showHeader ? 100000 : 5
            };
            this.socialService.getPostComments((_b = this.post) === null || _b === void 0 ? void 0 : _b.id, pageInfo).subscribe(function (comments) {
              var _a;

              _this67.comments = _toConsumableArray(comments); // console.log(this.comments);

              _this67.countComments((_a = _this67.post) === null || _a === void 0 ? void 0 : _a.id);

              _this67.cdr.detectChanges();

              _this67.getCreators(); // delay loading users for performance

            }, function (error) {
              _this67.toaster.toast('Check your network');
            });
          }
        }, {
          key: "getCreatorPhoto",
          value: function getCreatorPhoto(userId) {
            return '';
          }
        }, {
          key: "getCreators",
          value: function getCreators() {
            var _this68 = this;

            var creatorIds = [];
            this.comments.forEach(function (comment) {
              if (!creatorIds.includes(comment === null || comment === void 0 ? void 0 : comment.initiatorId)) {
                creatorIds.push(comment === null || comment === void 0 ? void 0 : comment.initiatorId);
              }
            });
            var pageInfo = {
              offset: 0,
              limit: 100000
            };
            this.userService.getUsersByIds(creatorIds, pageInfo).subscribe(function (users) {
              _this68.creators = users;

              _this68.comments.forEach(function (c) {
                _this68.creatorPhotoUrls.push(_this68.userService.getOwnerImage(_this68.getCommentUser(c)));
              });
            });
          }
        }, {
          key: "getCommentUser",
          value: function getCommentUser(comment) {
            var _iterator3 = _createForOfIteratorHelper(this.creators),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var user = _step3.value;

                if ((user === null || user === void 0 ? void 0 : user.id) === comment.initiatorId) {
                  return user;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "countComments",
          value: function countComments(postId) {
            var _this69 = this;

            this.socialService.countPostComments(postId).subscribe(function (count) {
              _this69.totalComments.emit(count);
            });
          }
        }, {
          key: "gotoProfile",
          value: function gotoProfile(user) {
            var _this70 = this;

            this.userService.setSelectedUserLocal(user).then(function (_) {
              _this70.router.navigateByUrl('/links/profile');
            });
          }
        }, {
          key: "toggleEmojiSheet",
          value: function toggleEmojiSheet() {
            this.emojiSheetToggle = !this.emojiSheetToggle;

            if (this.emojiSheetToggle) {
              this.openEmojiModal();
            } else {
              this.modal.dismiss();
            }
          }
        }, {
          key: "openEmojiModal",
          value: function openEmojiModal() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
              var _this71 = this;

              return regeneratorRuntime.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      this.signals.announceCloseModal('emoji'); // close all existing ones

                      _context49.next = 3;
                      return this.modalController.create({
                        component: _emoji_modal_emoji_modal_component__WEBPACK_IMPORTED_MODULE_1__["EmojiModalComponent"],
                        cssClass: 'emoji-style',
                        backdropDismiss: true,
                        componentProps: {}
                      });

                    case 3:
                      this.modal = _context49.sent;
                      this.signals.closeModalSource$.subscribe(function (name) {
                        var _a, _b;

                        if (name === 'emoji') {
                          (_a = _this71.char$) === null || _a === void 0 ? void 0 : _a.unsubscribe(); // multiple subscription will produce mult chars

                          (_b = _this71.modal) === null || _b === void 0 ? void 0 : _b.dismiss();
                        }
                      });
                      this.char$ = this.signals.emojiCharSource$.subscribe(function (_char2) {
                        var _a;

                        _this71.comment.message = (_a = _this71.comment.message) !== null && _a !== void 0 ? _a : '';
                        _this71.comment.message += _char2;
                        console.log(_char2);
                      });
                      _context49.next = 8;
                      return (_a = this.modal) === null || _a === void 0 ? void 0 : _a.present();

                    case 8:
                      return _context49.abrupt("return", _context49.sent);

                    case 9:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49, this);
            }));
          }
        }, {
          key: "InitiatorId",
          set: function set(creatorId) {
            var _a;

            this.comment.initiatorId = creatorId !== null && creatorId !== void 0 ? creatorId : (_a = this.user) === null || _a === void 0 ? void 0 : _a.id;
          }
        }, {
          key: "Message",
          set: function set(message) {
            this.comment.message = message;
          }
        }, {
          key: "Post",
          set: function set(post) {
            var _a; // console.log(post);


            if ((post === null || post === void 0 ? void 0 : post.id) && !((_a = this.post) === null || _a === void 0 ? void 0 : _a.id)) {
              this.post = post;
              this.comment.postId = post === null || post === void 0 ? void 0 : post.id;
              this.loadPostComments();
            }
          }
        }]);

        return CommentsComponent;
      }();

      CommentsComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_3__["MySignals"]
        }, {
          type: src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_4__["SocialService"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: src_app_shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]
        }, {
          type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]
        }];
      };

      CommentsComponent.propDecorators = {
        showHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        totalComments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        InitiatorId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        Message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        Post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      CommentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-comments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comments.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/comments/comments.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comments.component.scss */
        "./src/app/widgets/comments/comments.component.scss"))["default"]]
      })], CommentsComponent);
      /***/
    },

    /***/
    "./src/app/widgets/create-post/create-post.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/create-post/create-post.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsCreatePostCreatePostComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/create-post/create-post.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/widgets/create-post/create-post.component.ts ***!
      \**************************************************************/

    /*! exports provided: CreatePostComponent */

    /***/
    function srcAppWidgetsCreatePostCreatePostComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function () {
        return CreatePostComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var _shared_services_model_service_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/services/model-service/media.service */
      "./src/app/shared/services/model-service/media.service.ts");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/providers/widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../shared/services/model-service/post.service */
      "./src/app/shared/services/model-service/post.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CreatePostComponent = /*#__PURE__*/function () {
        function CreatePostComponent(postService, store, userService, toaster, signals, mediaService, alertController) {
          _classCallCheck(this, CreatePostComponent);

          this.postService = postService;
          this.store = store;
          this.userService = userService;
          this.toaster = toaster;
          this.signals = signals;
          this.mediaService = mediaService;
          this.alertController = alertController;
          this.mediaPage = '';
          this.sub$ = []; // @ViewChild('myDocumentPicker') myDocumentPicker: MyDocumentPickerComponent;

          this.showHeader = false;
        }

        _createClass(CreatePostComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].destroySubscription(this.sub$);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
              return regeneratorRuntime.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      this.userPost = {};
                      _context50.next = 3;
                      return this.userService.getUserLocal();

                    case 3:
                      this.user = _context50.sent;

                    case 4:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));
          }
        }, {
          key: "takePhoto",
          value: function takePhoto() {
            this.mediaPage = 'photos';
          }
        }, {
          key: "recordVideo",
          value: function recordVideo() {
            this.mediaPage = 'videos';
          }
        }, {
          key: "recordAudio",
          value: function recordAudio() {
            this.mediaPage = 'audios';
          }
        }, {
          key: "clear",
          value: function clear() {
            this.mediaPage = '';
          }
        }, {
          key: "postWithPhotos",
          value: function postWithPhotos() {
            var _a, _b, _c;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
              var _this72 = this;

              var links;
              return regeneratorRuntime.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      if (!(((_a = this.myPhotoPicker.selectedCloudPhotos) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.myPhotoPicker.devicePhotos) === null || _b === void 0 ? void 0 : _b.length) > 0)) {
                        _context51.next = 6;
                        break;
                      }

                      _context51.next = 3;
                      return this.postMessage(true)["catch"](function (error) {
                        _this72.toaster.toast('No connection');
                      });

                    case 3:
                      this.userPost = _context51.sent;

                      if ((_c = this.userPost) === null || _c === void 0 ? void 0 : _c.id) {
                        _context51.next = 6;
                        break;
                      }

                      return _context51.abrupt("return");

                    case 6:
                      if (this.myPhotoPicker.galleryType === 'cloud') {
                        // Create post with cloud photos
                        // These are existing photos, so just create
                        // virtual links among them.
                        links = [];
                        this.myPhotoPicker.selectedCloudPhotos.forEach(function (ph) {
                          var _a;

                          links.push({
                            photoId: ph === null || ph === void 0 ? void 0 : ph.id,
                            postId: (_a = _this72.userPost) === null || _a === void 0 ? void 0 : _a.id
                          });
                        });
                        this.mediaService.linkPostToPhoto(links).subscribe(function (ln) {
                          _this72.myPhotoPicker.selectedCloudPhotos = [];

                          _this72.myPhotoPicker.loadCloudPhotos();

                          _this72.mediaPage = '';
                          console.log(ln);
                        }, function (error) {
                          console.log(error);
                        });
                      } else if (this.myPhotoPicker.galleryType === 'local') {
                        // subscribe to all Photo upload
                        // Signal generated by upload function in the my-photo-picker.component.ts file
                        //
                        this.uploadSub$ = this.signals.uploadCompleteSource$.subscribe(function (file) {
                          var _a, _b, _c;

                          console.log('Upload complete');
                          var temPhoto = file; // post the message object and further post the photos
                          // set owner Id
                          // set post Id

                          temPhoto.userId = (_a = _this72.user) === null || _a === void 0 ? void 0 : _a.id;
                          temPhoto.postId = (_b = _this72.userPost) === null || _b === void 0 ? void 0 : _b.id;
                          console.log(JSON.stringify(temPhoto));

                          _this72.mediaService.createUserPhoto((_c = _this72.user) === null || _c === void 0 ? void 0 : _c.id, temPhoto).subscribe(function (photo) {
                            console.log(JSON.stringify(photo)); // TODO: Save to local repository
                            //
                          }, function (e) {
                            console.log(JSON.stringify(e));
                          });
                        }); // when all upload complete, do house keeping

                        this.sub$.push(this.signals.allUploadCompleteSource$.subscribe(function (_) {
                          // reload cloud images
                          _this72.myPhotoPicker.loadCloudPhotos();

                          _this72.mediaPage = '';

                          _this72.signals.announcePostReload();
                        })); // Trigger upload event

                        this.myPhotoPicker.uploadPhotos();
                      }

                    case 7:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, this);
            }));
          }
        }, {
          key: "postWithAudios",
          value: function postWithAudios() {
            var _a, _b, _c;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
              var _this73 = this;

              var links;
              return regeneratorRuntime.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      if (!(((_a = this.myAudioPicker.selectedCloudAudios) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.myAudioPicker.deviceAudios) === null || _b === void 0 ? void 0 : _b.length) > 0)) {
                        _context52.next = 6;
                        break;
                      }

                      _context52.next = 3;
                      return this.postMessage(true)["catch"](function (error) {
                        _this73.toaster.toast('No connection');
                      });

                    case 3:
                      this.userPost = _context52.sent;

                      if ((_c = this.userPost) === null || _c === void 0 ? void 0 : _c.id) {
                        _context52.next = 6;
                        break;
                      }

                      return _context52.abrupt("return");

                    case 6:
                      if (this.myAudioPicker.galleryType === 'cloud') {
                        // Create post  with cloud Audio
                        // These are existing Audio, so just create
                        // virtual links among them.
                        links = [];
                        this.myAudioPicker.selectedCloudAudios.forEach(function (aud) {
                          var _a;

                          links.push({
                            audioId: aud === null || aud === void 0 ? void 0 : aud.id,
                            postId: (_a = _this73.userPost) === null || _a === void 0 ? void 0 : _a.id
                          });
                        });
                        this.mediaService.linkPostToAudio(links).subscribe(function (ln) {
                          _this73.myAudioPicker.selectedCloudAudios = [];

                          _this73.myAudioPicker.loadCloudAudios();

                          _this73.mediaPage = '';
                          console.log(ln);
                        }, function (error) {
                          console.log(error);
                        });
                      } else if (this.myAudioPicker.galleryType === 'local') {
                        // move audios to permanent storage folder
                        // subscribe to all Photo upload
                        // Signal generated by upload function in the my-photo-picker.component.ts file
                        //
                        this.uploadSub$ = this.signals.uploadCompleteSource$.subscribe(function (file) {
                          var _a, _b, _c;

                          console.log('Upload complete');
                          var temAudio = file; // post the message object and further post the photos
                          // set owner Id
                          // set post Id

                          temAudio.userId = (_a = _this73.user) === null || _a === void 0 ? void 0 : _a.id;
                          temAudio.postId = (_b = _this73.userPost) === null || _b === void 0 ? void 0 : _b.id;
                          console.log(JSON.stringify(temAudio));

                          _this73.mediaService.createUserAudio((_c = _this73.user) === null || _c === void 0 ? void 0 : _c.id, temAudio).subscribe(function (aud) {
                            console.log(JSON.stringify(aud)); // TODO: Save to local repository
                            //
                          }, function (e) {
                            console.log(JSON.stringify(e));
                          });
                        }); // when all upload complete, do house keeping

                        this.sub$.push(this.signals.allUploadCompleteSource$.subscribe(function (_) {
                          // reload cloud images
                          _this73.myAudioPicker.loadCloudAudios();

                          _this73.mediaPage = '';

                          _this73.signals.announcePostReload();
                        })); // Trigger upload event

                        this.myAudioPicker.uploadAudios();
                      }

                    case 7:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this);
            }));
          }
        }, {
          key: "postWithVideos",
          value: function postWithVideos() {
            var _a, _b, _c;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
              var _this74 = this;

              var links;
              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      if (!(((_a = this.myVideoPicker.selectedCloudVideos) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.myVideoPicker.deviceVideos) === null || _b === void 0 ? void 0 : _b.length) > 0)) {
                        _context53.next = 6;
                        break;
                      }

                      _context53.next = 3;
                      return this.postMessage(true)["catch"](function (error) {
                        _this74.toaster.toast('No connection');
                      });

                    case 3:
                      this.userPost = _context53.sent;

                      if ((_c = this.userPost) === null || _c === void 0 ? void 0 : _c.id) {
                        _context53.next = 6;
                        break;
                      }

                      return _context53.abrupt("return");

                    case 6:
                      if (this.myVideoPicker.galleryType === 'cloud') {
                        // Create post  with cloud videos
                        // These are existing videos, so just create
                        // virtual links among them.
                        links = [];
                        this.myVideoPicker.selectedCloudVideos.forEach(function (vid) {
                          var _a;

                          links.push({
                            videoId: vid === null || vid === void 0 ? void 0 : vid.id,
                            postId: (_a = _this74.userPost) === null || _a === void 0 ? void 0 : _a.id
                          });
                        });
                        this.mediaService.linkPostToVideo(links).subscribe(function (ln) {
                          _this74.myVideoPicker.selectedCloudVideos = [];

                          _this74.myVideoPicker.loadCloudVideos();

                          _this74.mediaPage = '';
                          console.log(ln);
                        }, function (error) {
                          console.log(error);
                        });
                      } else if (this.myVideoPicker.galleryType === 'local') {
                        // move videos to permanent storage folder
                        // subscribe to all Photo upload
                        // Signal generated by upload function in the my-photo-picker.component.ts file
                        //
                        this.uploadSub$ = this.signals.uploadCompleteSource$.subscribe(function (file) {
                          var _a, _b, _c;

                          console.log('Upload complete');
                          var temVideo = file; // post the message object and further post the photos
                          // set owner Id
                          // set post Id

                          temVideo.userId = (_a = _this74.user) === null || _a === void 0 ? void 0 : _a.id;
                          temVideo.postId = (_b = _this74.userPost) === null || _b === void 0 ? void 0 : _b.id;
                          console.log(JSON.stringify(temVideo));

                          _this74.mediaService.createUserVideo((_c = _this74.user) === null || _c === void 0 ? void 0 : _c.id, temVideo).subscribe(function (video) {
                            console.log(JSON.stringify(video)); // TODO: Save to local repository
                            //
                          }, function (e) {
                            console.log(JSON.stringify(e));
                          });
                        }); // when all upload complete, do house keeping

                        this.sub$.push(this.signals.allUploadCompleteSource$.subscribe(function (_) {
                          // reload cloud images
                          _this74.myVideoPicker.loadCloudVideos();

                          _this74.mediaPage = '';

                          _this74.signals.announcePostReload();
                        })); // Trigger upload event

                        this.myVideoPicker.uploadVideos();
                      }

                    case 7:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));
          }
        }, {
          key: "post",
          value: function post() {
            var _a, _b, _c, _d;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
              var _this75 = this;

              var _alert;

              return regeneratorRuntime.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      // cancel all upload subscription
                      src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].destroySubscription(this.uploadSub$);

                      if (!(this.mediaPage === 'photos')) {
                        _context54.next = 14;
                        break;
                      }

                      console.log('Posting with images');

                      if (!(((_b = (_a = this.myPhotoPicker) === null || _a === void 0 ? void 0 : _a.devicePhotos) === null || _b === void 0 ? void 0 : _b.length) < 1 && ((_d = (_c = this.myPhotoPicker) === null || _c === void 0 ? void 0 : _c.selectedCloudPhotos) === null || _d === void 0 ? void 0 : _d.length) < 1)) {
                        _context54.next = 11;
                        break;
                      }

                      _context54.next = 6;
                      return this.alertController.create({
                        cssClass: '',
                        header: 'Confirm',
                        subHeader: '',
                        message: 'Post message without photos?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            _this75.toaster.toast('Please select photos to post');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this75.postWithPhotos().then(function (_) {
                              return _;
                            }); // go ahead; post the message

                          }
                        }]
                      });

                    case 6:
                      _alert = _context54.sent;
                      _context54.next = 9;
                      return _alert.present();

                    case 9:
                      _context54.next = 12;
                      break;

                    case 11:
                      this.postWithPhotos().then(function (_) {
                        return _;
                      }); // go ahead; post the message

                    case 12:
                      _context54.next = 15;
                      break;

                    case 14:
                      if (this.mediaPage === 'videos') {
                        console.log('Posting with videos');
                        this.postWithVideos();
                      } else if (this.mediaPage === 'audios') {
                        console.log('Posting with audios');
                        this.postWithAudios();
                      } else {
                        // post message without media
                        this.postMessage().then(function (_) {
                          if (_) {
                            _this75.message = '';

                            _this75.toaster.toast('Your post is sent.');
                          }
                        });
                      }

                    case 15:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, this);
            }));
          }
        }, {
          key: "postMessage",
          value: function postMessage() {
            var allowEmpty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
              var _this76 = this;

              return regeneratorRuntime.wrap(function _callee55$(_context55) {
                while (1) {
                  switch (_context55.prev = _context55.next) {
                    case 0:
                      this.userPost = {};

                      if (!(!this.message && !allowEmpty)) {
                        _context55.next = 5;
                        break;
                      }

                      _context55.next = 4;
                      return this.toaster.toast('Please say something!');

                    case 4:
                      return _context55.abrupt("return");

                    case 5:
                      this.userPost.userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id;
                      this.userPost.message = this.message;
                      return _context55.abrupt("return", this.postService.creatPost(this.userPost).toPromise().then(function (post) {
                        _this76.userPost = post;

                        if (post) {
                          _this76.message = '';

                          _this76.toaster.toast('Your post is sent.');

                          _this76.signals.announcePostReload();
                        }

                        return post;
                      }));

                    case 8:
                    case "end":
                      return _context55.stop();
                  }
                }
              }, _callee55, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.signals.announceCloseModal('create-post');
          }
        }]);

        return CreatePostComponent;
      }();

      CreatePostComponent.ctorParameters = function () {
        return [{
          type: _shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]
        }, {
          type: src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_6__["MyStorage"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_3__["MySignals"]
        }, {
          type: _shared_services_model_service_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }];
      };

      CreatePostComponent.propDecorators = {
        mediaPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }],
        myPhotoPicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
          args: ['myPhotoPicker']
        }],
        myAudioPicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
          args: ['myAudioPicker']
        }],
        myVideoPicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
          args: ['myVideoPicker']
        }],
        showHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }]
      };
      CreatePostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-create-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-post.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/create-post/create-post.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-post.component.scss */
        "./src/app/widgets/create-post/create-post.component.scss"))["default"]]
      })], CreatePostComponent);
      /***/
    },

    /***/
    "./src/app/widgets/emoji-modal/emoji-modal.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/emoji-modal/emoji-modal.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsEmojiModalEmojiModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvZW1vamktbW9kYWwvZW1vamktbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/emoji-modal/emoji-modal.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/widgets/emoji-modal/emoji-modal.component.ts ***!
      \**************************************************************/

    /*! exports provided: EmojiModalComponent */

    /***/
    function srcAppWidgetsEmojiModalEmojiModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmojiModalComponent", function () {
        return EmojiModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var EmojiModalComponent = /*#__PURE__*/function () {
        function EmojiModalComponent(signals) {
          _classCallCheck(this, EmojiModalComponent);

          this.signals = signals;
          this.emoji = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(EmojiModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addEmoji",
          value: function addEmoji($evt) {
            console.log($evt);
            this["char"] = $evt.emoji["native"];
            this.emoji.emit($evt.emoji["native"]);
            this.signals.announceEmojiChar($evt.emoji["native"]); // broadcast all listeners
          }
        }, {
          key: "close",
          value: function close() {
            this.signals.announceCloseModal('emoji');
          }
        }]);

        return EmojiModalComponent;
      }();

      EmojiModalComponent.ctorParameters = function () {
        return [{
          type: _shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"]
        }];
      };

      EmojiModalComponent.propDecorators = {
        emoji: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      EmojiModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-emoji-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./emoji-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/emoji-modal/emoji-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./emoji-modal.component.scss */
        "./src/app/widgets/emoji-modal/emoji-modal.component.scss"))["default"]]
      })], EmojiModalComponent);
      /***/
    },

    /***/
    "./src/app/widgets/feed-filter-popover/feed-filter-popover.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/widgets/feed-filter-popover/feed-filter-popover.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsFeedFilterPopoverFeedFilterPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvZmVlZC1maWx0ZXItcG9wb3Zlci9mZWVkLWZpbHRlci1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/widgets/feed-filter-popover/feed-filter-popover.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/widgets/feed-filter-popover/feed-filter-popover.component.ts ***!
      \******************************************************************************/

    /*! exports provided: FeedFilterPopoverComponent */

    /***/
    function srcAppWidgetsFeedFilterPopoverFeedFilterPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedFilterPopoverComponent", function () {
        return FeedFilterPopoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FeedFilterPopoverComponent = /*#__PURE__*/function () {
        function FeedFilterPopoverComponent( // private schoolService: SchoolService,
        store) {
          _classCallCheck(this, FeedFilterPopoverComponent);

          this.store = store;
        }

        _createClass(FeedFilterPopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this77 = this;

            this.store.getObject('user-alumni').then(function (alumni) {
              alumni.forEach(function (alu) {
                _this77.schools.push(alu.school);
              });
            });
          }
        }]);

        return FeedFilterPopoverComponent;
      }();

      FeedFilterPopoverComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_1__["MyStorage"]
        }];
      };

      FeedFilterPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-feed-filter-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./feed-filter-popover.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/feed-filter-popover/feed-filter-popover.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./feed-filter-popover.component.scss */
        "./src/app/widgets/feed-filter-popover/feed-filter-popover.component.scss"))["default"]]
      })], FeedFilterPopoverComponent);
      /***/
    },

    /***/
    "./src/app/widgets/follow/follow.component.scss":
    /*!******************************************************!*\
      !*** ./src/app/widgets/follow/follow.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsFollowFollowComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvZm9sbG93L2ZvbGxvdy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/widgets/follow/follow.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/widgets/follow/follow.component.ts ***!
      \****************************************************/

    /*! exports provided: FollowComponent */

    /***/
    function srcAppWidgetsFollowFollowComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FollowComponent", function () {
        return FollowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _models_follow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../models/follow */
      "./src/app/models/follow.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/model-service/social.service */
      "./src/app/shared/services/model-service/social.service.ts");

      var FollowComponent = /*#__PURE__*/function () {
        function FollowComponent(socialService, signals) {
          _classCallCheck(this, FollowComponent);

          this.socialService = socialService;
          this.signals = signals;
          this.color = 'medium'; // event

          this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.isFollowing = false;
          this._follow = new _models_follow__WEBPACK_IMPORTED_MODULE_2__["Follow"]();
        }

        _createClass(FollowComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _a; // // check if follow exist


            if (!((_a = this._follow) === null || _a === void 0 ? void 0 : _a.id)) {
              // get follow
              this.getFollow();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "follow",
          value: function follow() {
            var _this78 = this;

            if (!this._follow.leaderId && !this._follow.followerId && !this.modelName) {
              return;
            }

            this._follow.isFollowing = !this._follow.isFollowing;
            this._follow.lastModified = new Date(Date.now());
            this._follow.leaderModelName = (this.modelName + '').toLowerCase();
            this.socialService.followOrUnfollow(this._follow).subscribe(function (follow) {
              if (follow === null || follow === void 0 ? void 0 : follow.id) {
                _this78._follow = follow;
                _this78.isFollowing = follow === null || follow === void 0 ? void 0 : follow.isFollowing;
              }

              if (follow.isFollowing) {
                _this78.signals.announceFollowed(true);
              } else {
                _this78.signals.announceFollowed(false);
              }

              _this78.reload.emit(true);
            });
          }
        }, {
          key: "getFollow",
          value: function getFollow() {
            var _this79 = this;

            var _a, _b;

            this.socialService.getFollow((_a = this._follow) === null || _a === void 0 ? void 0 : _a.leaderId, (_b = this._follow) === null || _b === void 0 ? void 0 : _b.followerId).subscribe(function (f) {
              var _a;

              if ((f === null || f === void 0 ? void 0 : f.length) > 0) {
                _this79._follow = f[0]; // console.log(this._follow);

                _this79.isFollowing = (_a = _this79._follow) === null || _a === void 0 ? void 0 : _a.isFollowing;
              } else {
                _this79.isFollowing = false;
              }
            });
          }
        }, {
          key: "LeaderId",
          set: function set(id) {
            var _a;

            this._follow.leaderId = id;

            if ((_a = this._follow) === null || _a === void 0 ? void 0 : _a.followerId) {
              this.getFollow();
            }
          }
        }, {
          key: "FollowerId",
          set: function set(id) {
            var _a;

            this._follow.followerId = id;

            if ((_a = this._follow) === null || _a === void 0 ? void 0 : _a.leaderId) {
              this.getFollow();
            }
          }
        }]);

        return FollowComponent;
      }();

      FollowComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_4__["SocialService"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_1__["MySignals"]
        }];
      };

      FollowComponent.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        modelName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        reload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        LeaderId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        FollowerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      FollowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-follow',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./follow.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/follow/follow.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./follow.component.scss */
        "./src/app/widgets/follow/follow.component.scss"))["default"]]
      })], FollowComponent);
      /***/
    },

    /***/
    "./src/app/widgets/image-gallery/image-gallery.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/widgets/image-gallery/image-gallery.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsImageGalleryImageGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".image-container {\n  min-height: 100px;\n  background-size: cover;\n}\n\n@media (min-width: 0px) {\n  .images {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n}\n\n.one-image {\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQUZOO0FBQ0Y7O0FBS0E7RUFDSSxXQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xyXG4gICAgLmltYWdlcyB7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAgIC5pbWFnZXMge1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgICAuaW1hZ2VzIHtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vbmUtaW1hZ2Uge1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/widgets/image-gallery/image-gallery.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/widgets/image-gallery/image-gallery.component.ts ***!
      \******************************************************************/

    /*! exports provided: ImageGalleryComponent */

    /***/
    function srcAppWidgetsImageGalleryImageGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function () {
        return ImageGalleryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");

      var ImageGalleryComponent = /*#__PURE__*/function () {
        function ImageGalleryComponent(modalController) {
          _classCallCheck(this, ImageGalleryComponent);

          this.modalController = modalController;
          this.galleryType = 'regular';
          this.prefersDark = true;
          this.images = ['../../../assets/images/me.jpg', '../../../assets/images/car.jpg', '../../../assets/images/bg1.jpg', '../../../assets/images/car.jpg', '../../../assets/images/me.jpg', '../../../assets/images/bg1.jpg', '../../../assets/images/car.jpg', '../../../assets/images/me.jpg', '../../../assets/images/me.jpg', '../../../assets/images/car.jpg', '../../../assets/images/bg1.jpg', '../../../assets/images/car.jpg'];
        }

        _createClass(ImageGalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              this.toggleTheme();
            }
          }
        }, {
          key: "toggleTheme",
          value: function toggleTheme() {
            this.prefersDark = !this.prefersDark;
            document.body.classList.toggle('dark', this.prefersDark);
          }
        }, {
          key: "openViewer",
          value: function openViewer(url) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
              var modal;
              return regeneratorRuntime.wrap(function _callee56$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      _context56.next = 2;
                      return this.modalController.create({
                        component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerModalComponent"],
                        componentProps: {
                          src: url,
                          title: title,
                          text: description // optional

                        },
                        cssClass: 'ion-img-viewer',
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context56.sent;
                      _context56.next = 5;
                      return modal.present();

                    case 5:
                      return _context56.abrupt("return", _context56.sent);

                    case 6:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee56, this);
            }));
          }
        }]);

        return ImageGalleryComponent;
      }();

      ImageGalleryComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      ImageGalleryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-gallery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./image-gallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/image-gallery/image-gallery.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./image-gallery.component.scss */
        "./src/app/widgets/image-gallery/image-gallery.component.scss"))["default"]]
      })], ImageGalleryComponent);
      /***/
    },

    /***/
    "./src/app/widgets/like/like.component.scss":
    /*!**************************************************!*\
      !*** ./src/app/widgets/like/like.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsLikeLikeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".liked {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9saWtlL2xpa2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9saWtlL2xpa2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlrZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/like/like.component.ts":
    /*!************************************************!*\
      !*** ./src/app/widgets/like/like.component.ts ***!
      \************************************************/

    /*! exports provided: LikeComponent */

    /***/
    function srcAppWidgetsLikeLikeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LikeComponent", function () {
        return LikeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/services/model-service/social.service */
      "./src/app/shared/services/model-service/social.service.ts");
      /* harmony import */


      var _models_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../models/like */
      "./src/app/models/like.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LikeComponent = /*#__PURE__*/function () {
        function LikeComponent(socialService) {
          _classCallCheck(this, LikeComponent);

          this.socialService = socialService; // event

          this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.affection = new _models_like__WEBPACK_IMPORTED_MODULE_2__["Like"]();
        }

        _createClass(LikeComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _a; // check if like exist


            if (!((_a = this.affection) === null || _a === void 0 ? void 0 : _a.id)) {
              // get like
              this.getLike();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "like",
          value: function like() {
            var _this80 = this;

            this.affection.rate = !this.affection.rate; // toggle

            this.socialService.likeOrDislike(this.affection).subscribe(function (affection) {
              if (affection === null || affection === void 0 ? void 0 : affection.id) {
                _this80.affection = affection;
              }

              _this80.reload.emit(true);
            });
          }
        }, {
          key: "getLike",
          value: function getLike() {
            var _this81 = this;

            var _a;

            this.socialService.getLike((_a = this.affection) === null || _a === void 0 ? void 0 : _a.initiatorId, this.affection.receiverId).subscribe(function (aff) {
              if (aff === null || aff === void 0 ? void 0 : aff.id) {
                _this81.affection = aff;
              }
            });
          }
        }, {
          key: "InitiatorId",
          set: function set(id) {
            this.affection.initiatorId = id;
          }
        }, {
          key: "ReceiverId",
          set: function set(id) {
            this.affection.receiverId = id;
          }
        }, {
          key: "ReceiverName",
          set: function set(name) {
            this.affection.receiverName = name.toLowerCase();
          }
        }]);

        return LikeComponent;
      }();

      LikeComponent.ctorParameters = function () {
        return [{
          type: _shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_1__["SocialService"]
        }];
      };

      LikeComponent.propDecorators = {
        reload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        InitiatorId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ReceiverId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ReceiverName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LikeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-like',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./like.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/like/like.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./like.component.scss */
        "./src/app/widgets/like/like.component.scss"))["default"]]
      })], LikeComponent);
      /***/
    },

    /***/
    "./src/app/widgets/map/map.component.scss":
    /*!************************************************!*\
      !*** ./src/app/widgets/map/map.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/widgets/map/map.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/widgets/map/map.component.ts ***!
      \**********************************************/

    /*! exports provided: MapComponent */

    /***/
    function srcAppWidgetsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
        return MapComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var src_app_shared_services_providers_navigation_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/providers/navigation/geolocation.service */
      "./src/app/shared/services/providers/navigation/geolocation.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");

      var MapComponent = /*#__PURE__*/function () {
        /**
         *
         */
        function MapComponent(geoLocation, signals) {
          var _this82 = this;

          _classCallCheck(this, MapComponent);

          this.geoLocation = geoLocation;
          this.signals = signals;
          this.zoom = 18;
          this.center = {
            lat: 51.673858,
            lng: 7.815982
          };
          this.options = {
            mapTypeId: 'hybrid',
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            maxZoom: 15,
            minZoom: 8
          };
          this.markers = [];
          this.sub$ = []; // subscribe to current user location

          this.sub$.push(this.geoLocation.getLocation().subscribe(function (position) {
            _this82.Center = position; // add new marker of user location

            _this82.addMarker(position);
          })); // subscribe to location change event

          this.sub$.push(this.signals.locationChangeSource$.subscribe(function (position) {
            _this82.Center = position;
            console.log('Location change in map component');
            console.log(_this82.center);
          }));
          this.options = {
            mapTypeId: 'hybrid',
            zoomControl: true,
            scrollwheel: true,
            rotateControl: true,
            panControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
            // zoomControlOptions:{},
            disableDoubleClickZoom: true,
            maxZoom: 15,
            minZoom: 8,
            zoom: 12,
            center: this.center
          };
        }

        _createClass(MapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"].destroySubscription(this.sub$);
          }
        }, {
          key: "addMarker",
          value: function addMarker(center) {
            var _a, _b;

            this.markers.push({
              position: {
                lat: center.lat,
                lng: center.lng
              },
              label: {
                color: 'red'
              },
              title: '',
              options: {
                animation: (_b = (_a = google === null || google === void 0 ? void 0 : google.maps) === null || _a === void 0 ? void 0 : _a.Animation) === null || _b === void 0 ? void 0 : _b.BOUNCE
              }
            });
          }
        }, {
          key: "mapClicked",
          value: function mapClicked($event) {}
        }, {
          key: "centerChanged",
          value: function centerChanged($event) {
            console.log($event); // panTo
          }
        }, {
          key: "Center",
          set: function set(center) {
            this.center = center;
            this.center.lat = parseFloat(center.lat + '');
            this.center.lng = parseFloat(center.lng + '');
            this.addMarker(center);
            this.googleMap.panTo(this.center);
          }
        }]);

        return MapComponent;
      }();

      MapComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_providers_navigation_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_2__["MySignals"]
        }];
      };

      MapComponent.propDecorators = {
        googleMap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['googleMap', {
            "static": false
          }]
        }],
        Center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      MapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./map.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/map/map.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./map.component.scss */
        "./src/app/widgets/map/map.component.scss"))["default"]]
      })], MapComponent);
      /***/
    },

    /***/
    "./src/app/widgets/my-audio-picker/my-audio-picker.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/my-audio-picker/my-audio-picker.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsMyAudioPickerMyAudioPickerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvbXktYXVkaW8tcGlja2VyL215LWF1ZGlvLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/widgets/my-audio-picker/my-audio-picker.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/my-audio-picker/my-audio-picker.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MyAudioPickerComponent */

    /***/
    function srcAppWidgetsMyAudioPickerMyAudioPickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAudioPickerComponent", function () {
        return MyAudioPickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_model_service_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/model-service/media.service */
      "./src/app/shared/services/model-service/media.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _audio_recorder_audio_recorder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../audio-recorder/audio-recorder.component */
      "./src/app/widgets/audio-recorder/audio-recorder.component.ts");
      /* harmony import */


      var src_app_models_my_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/my-media */
      "./src/app/models/my-media.ts");
      /* harmony import */


      var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/providers/widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_local_media_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/providers/local-media.service */
      "./src/app/shared/services/providers/local-media.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");

      var MyAudioPickerComponent = /*#__PURE__*/function () {
        function MyAudioPickerComponent(localMediaService, plt, signals, cdr, modalController, toaster, mediaService, userService) {
          _classCallCheck(this, MyAudioPickerComponent);

          this.localMediaService = localMediaService;
          this.plt = plt;
          this.signals = signals;
          this.cdr = cdr;
          this.modalController = modalController;
          this.toaster = toaster;
          this.mediaService = mediaService;
          this.userService = userService;
          this.galleryType = 'cloud';
          this.sub$ = [];
          this.deviceAudios = [];
          this.cloudAudios = [];
          this.selectedCloudAudios = [];
          this.uploadedAudios = [];
          this.isAccessDenied = false;
        }

        _createClass(MyAudioPickerComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
              return regeneratorRuntime.wrap(function _callee57$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee57);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
              var _this83 = this;

              return regeneratorRuntime.wrap(function _callee58$(_context58) {
                while (1) {
                  switch (_context58.prev = _context58.next) {
                    case 0:
                      _context58.next = 2;
                      return this.plt.ready();

                    case 2:
                      this.userService.getUserLocal().then(function (user) {
                        _this83.user = user;

                        _this83.loadCloudAudios(); // this.getLatestPhotos().then(_ => _);

                      });

                    case 3:
                    case "end":
                      return _context58.stop();
                  }
                }
              }, _callee58, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
              return regeneratorRuntime.wrap(function _callee59$(_context59) {
                while (1) {
                  switch (_context59.prev = _context59.next) {
                    case 0:
                      src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"].destroySubscription(this.sub$);

                    case 1:
                    case "end":
                      return _context59.stop();
                  }
                }
              }, _callee59, this);
            }));
          } // playAudio(aud: AudioLocal) {
          //   this.previewAnyFile.preview(aud.nativeURL.replace('file//', ''))
          //     .then((res: any) => console.log(res))
          //     .catch((error: any) => console.error(error));
          // }

        }, {
          key: "deleteFromCloudAudios",
          value: function deleteFromCloudAudios(aud) {
            this.deviceAudios = this.deviceAudios.filter(function (aud) {
              // console.log(aud?.id);
              // console.log(audios.id);
              return aud.id !== aud.id;
            });
          } // Does not remove permanently from the device
          // but from the application memory

        }, {
          key: "deleteFromDeviceAudios",
          value: function deleteFromDeviceAudios(aud) {
            this.deviceAudios = this.deviceAudios.filter(function (audio) {
              return audio.id !== aud.id;
            });
          }
        }, {
          key: "recordAudio",
          value: function recordAudio() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
              var _this84 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee60$(_context60) {
                while (1) {
                  switch (_context60.prev = _context60.next) {
                    case 0:
                      _context60.next = 2;
                      return this.modalController.create({
                        component: _audio_recorder_audio_recorder_component__WEBPACK_IMPORTED_MODULE_5__["AudioRecorderComponent"],
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      modal = _context60.sent;
                      this.sub$.push(this.signals.closeModalSource$.subscribe(function (modalName) {
                        if (modalName === 'audio-recorder') {
                          // check if its the recorded modal
                          modal === null || modal === void 0 ? void 0 : modal.dismiss();
                        }
                      })); // get the recorded file path

                      this.sub$.push(this.signals.audioRecordingCompleteSource$.subscribe(function (aud) {
                        _this84.deviceAudios = [].concat(_toConsumableArray(_this84.deviceAudios), [aud]);
                        console.log(JSON.stringify(_this84.deviceAudios));

                        _this84.cdr.detectChanges();

                        modal === null || modal === void 0 ? void 0 : modal.dismiss();
                      }));
                      _context60.next = 7;
                      return modal.present();

                    case 7:
                    case "end":
                      return _context60.stop();
                  }
                }
              }, _callee60, this);
            }));
          }
        }, {
          key: "uploadAudios",
          value: function uploadAudios() {
            var _this85 = this;

            // move audios to permanent storage folder
            var audios = [];
            this.deviceAudios.forEach(function (audio) {
              // copy audio to permanent location
              _this85.localMediaService.writeAudioToMediaDirectory(audio === null || audio === void 0 ? void 0 : audio.nativeURL).then(function (aud) {
                // upload audio and instruct to create thumbnail on server
                _this85.localMediaService.upload(aud === null || aud === void 0 ? void 0 : aud.nativeURL, aud === null || aud === void 0 ? void 0 : aud.fileName, true).then(function (result) {
                  var _a; // {"bytesSent":169025,
                  // "responseCode":200,
                  // "response":"{
                  //   \"files\":[{\"fieldname\":\"file\",\"originalname\":\"IMG_20201103_234610.jpg\",
                  //                \"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"size\":168907}],
                  //   \"fields\":{}}",
                  //    "objectId":""}


                  console.log(JSON.stringify(result));
                  result = result;

                  if (result) {
                    var fileName = aud.fileName.substr(0, aud.fileName.lastIndexOf('.'));
                    var uploadedAudio = {
                      description: '',
                      fileName: aud.fileName,
                      fileUrl: '/' + aud.fileName,
                      dateCreated: new Date(),
                      type: src_app_models_my_media__WEBPACK_IMPORTED_MODULE_6__["MediaType"].AUDIO,
                      length: aud.length
                    };
                    audios.push(uploadedAudio);

                    _this85.signals.announceUploadCompleteSource(uploadedAudio); // delete from device audios


                    _this85.deleteFromDeviceAudios(audio);

                    if (((_a = _this85.deviceAudios) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                      // Fire all upload complete
                      _this85.signals.announceAllUploadCompleteSource(audios); // Reload cloud audios

                    }
                  }
                });
              }, function (error) {
                _this85.toaster.toast('Uploading some audio files failed, Please check your network');
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "selectFromCloudAudios",
          value: function selectFromCloudAudios(aud$) {
            if (this.selectedCloudAudios.includes(aud$)) {
              // remove
              this.selectedCloudAudios = this.selectedCloudAudios.filter(function (aud) {
                return aud.id !== (aud$ === null || aud$ === void 0 ? void 0 : aud$.id);
              });
            } else {
              // add
              this.selectedCloudAudios.push(aud$);
            }

            console.log(JSON.stringify(this.selectedCloudAudios));
          }
        }, {
          key: "isSelected",
          value: function isSelected(aud) {
            return this.selectedCloudAudios.includes(aud);
          }
        }, {
          key: "selectAudio",
          value: function selectAudio() {
            var _this86 = this;

            this.localMediaService.selectAudioFromDevice().then(function (aud) {
              if (aud === null || aud === void 0 ? void 0 : aud.id) {
                console.log(JSON.stringify(aud));
                _this86.deviceAudios = [].concat(_toConsumableArray(_this86.deviceAudios), [aud]);
                console.log(JSON.stringify(_this86.deviceAudios));

                _this86.cdr.detectChanges();
              }
            });
          }
        }, {
          key: "loadCloudAudios",
          value: function loadCloudAudios() {
            var _this87 = this;

            var _a;

            this.mediaService.getUserAudios((_a = this.user) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (aud) {
              var _a, _b;

              console.log((_a = _this87.user) === null || _a === void 0 ? void 0 : _a.id);
              _this87.cloudAudios = _toConsumableArray(aud);

              if (((_b = _this87.cloudAudios) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                _this87.galleryType = 'cloud';
              }
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return MyAudioPickerComponent;
      }();

      MyAudioPickerComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_providers_local_media_service__WEBPACK_IMPORTED_MODULE_8__["LocalMediaService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_4__["MySignals"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]
        }, {
          type: src_app_shared_services_model_service_media_service__WEBPACK_IMPORTED_MODULE_1__["MediaService"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }];
      };

      MyAudioPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-audio-picker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-audio-picker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-audio-picker/my-audio-picker.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-audio-picker.component.scss */
        "./src/app/widgets/my-audio-picker/my-audio-picker.component.scss"))["default"]]
      })], MyAudioPickerComponent);
      /***/
    },

    /***/
    "./src/app/widgets/my-photo-picker/my-photo-picker.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/my-photo-picker/my-photo-picker.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsMyPhotoPickerMyPhotoPickerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvbXktcGhvdG8tcGlja2VyL215LXBob3RvLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/widgets/my-photo-picker/my-photo-picker.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/my-photo-picker/my-photo-picker.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MyPhotoPickerComponent */

    /***/
    function srcAppWidgetsMyPhotoPickerMyPhotoPickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPhotoPickerComponent", function () {
        return MyPhotoPickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var src_app_models_my_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/my-media */
      "./src/app/models/my-media.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/photo-library/ngx */
      "./node_modules/@ionic-native/photo-library/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var src_app_shared_services_providers_local_media_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/providers/local-media.service */
      "./src/app/shared/services/providers/local-media.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_permission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/providers/permission.service */
      "./src/app/shared/services/providers/permission.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/providers/widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_media_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/model-service/media.service */
      "./src/app/shared/services/model-service/media.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");

      var MyPhotoPickerComponent = /*#__PURE__*/function () {
        function MyPhotoPickerComponent(localMediaService, mediaService, userService, photoLibrary, permissionService, plt, signals, toaster, cdr) {
          var _this88 = this;

          _classCallCheck(this, MyPhotoPickerComponent);

          this.localMediaService = localMediaService;
          this.mediaService = mediaService;
          this.userService = userService;
          this.photoLibrary = photoLibrary;
          this.permissionService = permissionService;
          this.plt = plt;
          this.signals = signals;
          this.toaster = toaster;
          this.cdr = cdr;
          this._galleryType = 'local'; // local or

          this.sub$ = [];
          this.devicePhotos = [];
          this.cloudPhotos = [];
          this.selectedCloudPhotos = [];
          this.uploadedPhotos = [];
          this.isAccessDenied = false; // verify device permissions

          this.photoLibrary.requestAuthorization().then(function (_) {
            return _;
          })["catch"](function (error) {
            _this88.signals.log('Photo library permission denied');

            _this88.isAccessDenied = true;
          });
        }

        _createClass(MyPhotoPickerComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee61() {
              return regeneratorRuntime.wrap(function _callee61$(_context61) {
                while (1) {
                  switch (_context61.prev = _context61.next) {
                    case 0:
                    case "end":
                      return _context61.stop();
                  }
                }
              }, _callee61);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee62() {
              var _this89 = this;

              return regeneratorRuntime.wrap(function _callee62$(_context62) {
                while (1) {
                  switch (_context62.prev = _context62.next) {
                    case 0:
                      _context62.next = 2;
                      return this.plt.ready();

                    case 2:
                      this.userService.getUserLocal().then(function (user) {
                        _this89.user = user;

                        _this89.loadCloudPhotos();

                        _this89.getLatestPhotos().then(function (_) {
                          return _;
                        });
                      });

                    case 3:
                    case "end":
                      return _context62.stop();
                  }
                }
              }, _callee62, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
              return regeneratorRuntime.wrap(function _callee63$(_context63) {
                while (1) {
                  switch (_context63.prev = _context63.next) {
                    case 0:
                      src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"].destroySubscription(this.sub$);

                    case 1:
                    case "end":
                      return _context63.stop();
                  }
                }
              }, _callee63, this);
            }));
          }
        }, {
          key: "getLatestPhotos",
          // Read photos from device and set it to the view
          // Uri path must be result from filesystem to http type
          value: function getLatestPhotos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee64() {
              var _this90 = this;

              return regeneratorRuntime.wrap(function _callee64$(_context64) {
                while (1) {
                  switch (_context64.prev = _context64.next) {
                    case 0:
                      if (!this.isAccessDenied) {
                        _context64.next = 3;
                        break;
                      }

                      _context64.next = 3;
                      return this.permissionService.getPhotolibraryPermission();

                    case 3:
                      this.photoLibrary.getLibrary().subscribe({
                        next: function next(library) {
                          _this90.isAccessDenied = false;

                          if (library.length > 4) {
                            library = library.slice(0, 4); // slice first 4 items
                          } // reset photos array


                          _this90.devicePhotos = [];
                          library.forEach(function (libraryItem) {
                            var _a;

                            var temp = {
                              id: libraryItem.id,
                              fileName: libraryItem.fileName,
                              nativeURL: libraryItem.photoURL,
                              thumbnailNativeURL: libraryItem.thumbnailURL,
                              creationDate: libraryItem.creationDate
                            };

                            _this90.devicePhotos.push(temp);

                            if (temp.id === ((_a = library[library.length - 1]) === null || _a === void 0 ? void 0 : _a.id)) {
                              // if last item
                              _this90.resolvePaths().then(function (_) {
                                return _;
                              });
                            }
                          });
                        },
                        error: function error(err) {
                          console.log('could not get photos');
                        },
                        complete: function complete() {
                          console.log('done getting photos');
                        }
                      });

                    case 4:
                    case "end":
                      return _context64.stop();
                  }
                }
              }, _callee64, this);
            }));
          }
        }, {
          key: "resolvePaths",
          value: function resolvePaths() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
              var _this91 = this;

              return regeneratorRuntime.wrap(function _callee65$(_context65) {
                while (1) {
                  switch (_context65.prev = _context65.next) {
                    case 0:
                      this.devicePhotos.forEach(function (ph) {
                        _this91.localMediaService.convertPhotoLibraryPathToNativeUrl(ph).then(function (path) {
                          ph.thumbnailResolvedURL = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].convertFileSrc(path);
                          ph.resolvedURL = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].convertFileSrc(path);
                          ph.nativeURL = path;
                          ph.thumbnailNativeURL = path; // this.signals.log(ph.thumbnailResolvedURL);
                        })["catch"](function (e) {
                          _this91.signals.log(e);
                        });
                      });
                      this.cdr.detectChanges();

                    case 2:
                    case "end":
                      return _context65.stop();
                  }
                }
              }, _callee65, this);
            }));
          }
        }, {
          key: "selectPhoto",
          value: function selectPhoto() {
            var _this92 = this;

            this.localMediaService.selectPhotosFromDevice().then(function (photos) {
              if ((photos === null || photos === void 0 ? void 0 : photos.length) > 0) {
                _this92.devicePhotos = [].concat(_toConsumableArray(_this92.devicePhotos), _toConsumableArray(photos));
              }
            });
          } // viewPhoto(uri) {
          //   try {
          //     setTimeout(() => {
          //       this.photoViewer.show(uri, '', { share: true });
          //     }, 200);
          //   } catch (e) {
          //     console.log(e);
          //   }
          // }

        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var _this93 = this;

            this.localMediaService.takePhoto().then(function (photo) {
              if (photo === null || photo === void 0 ? void 0 : photo.id) {
                _this93.devicePhotos.push(photo);
              }
            });
          }
        }, {
          key: "deleteFromDevicePhotos",
          value: function deleteFromDevicePhotos(ph) {
            this.devicePhotos = this.devicePhotos.filter(function (photo) {
              console.log(ph.id);
              console.log(photo.id);
              return ph.id != photo.id;
            });
          }
        }, {
          key: "deleteFromCloudPhotos",
          value: function deleteFromCloudPhotos(ph) {
            console.log(ph);
            this.cloudPhotos = this.cloudPhotos.filter(function (photo) {
              return ph.id != photo.id;
            });
          }
        }, {
          key: "selectFromCloudPhotos",
          value: function selectFromCloudPhotos(ph$) {
            if (this.selectedCloudPhotos.includes(ph$)) {
              // remove
              this.selectedCloudPhotos = this.selectedCloudPhotos.filter(function (ph) {
                return ph.id !== (ph$ === null || ph$ === void 0 ? void 0 : ph$.id);
              });
            } else {
              // add
              this.selectedCloudPhotos.push(ph$);
            }

            console.log(this.selectedCloudPhotos);
          }
        }, {
          key: "uploadPhotos",
          value: function uploadPhotos() {
            var _this94 = this;

            // move photos to permanent storage folder
            var photos = [];
            this.devicePhotos.forEach(function (photo) {
              // make a copy of the image to permanent storage
              _this94.localMediaService.writeVideoToMediaDirectory(photo === null || photo === void 0 ? void 0 : photo.nativeURL).then(function (ph) {
                // upload photo and instruct to create thumbnail on server
                _this94.localMediaService.upload(ph === null || ph === void 0 ? void 0 : ph.nativeURL, ph === null || ph === void 0 ? void 0 : ph.fileName, true).then(function (result) {
                  var _a; // {"bytesSent":169025,
                  // "responseCode":200,
                  // "response":"{
                  //   \"files\":[{\"fieldname\":\"file\",\"originalname\":\"IMG_20201103_234610.jpg\",
                  //                \"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"size\":168907}],
                  //   \"fields\":{}}",
                  //    "objectId":""}


                  console.log(JSON.stringify(result));
                  result = result;

                  if (result) {
                    var uploadedPhoto = {
                      description: '',
                      fileName: ph.fileName,
                      fileUrl: _shared_config__WEBPACK_IMPORTED_MODULE_1__["SERVER_DOWNLOAD_PATH"] + ph.fileName,
                      dateCreated: new Date(),
                      type: src_app_models_my_media__WEBPACK_IMPORTED_MODULE_2__["MediaType"].PHOTO,
                      thumbnailUrl: _shared_config__WEBPACK_IMPORTED_MODULE_1__["SERVER_DOWNLOAD_PATH"] + 'thumb_' + ph.fileName
                    };
                    photos.push(uploadedPhoto);

                    _this94.signals.announceUploadCompleteSource(uploadedPhoto); // delete from device photos


                    _this94.deleteFromDevicePhotos(photo);

                    if (((_a = _this94.devicePhotos) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                      // Fire all upload complete
                      _this94.signals.announceAllUploadCompleteSource(photos); // Reload cloud photos

                    }
                  }
                });
              }, function (error) {
                console.log(JSON.stringify(error));

                _this94.toaster.toast('Uploading some files failed, Please check your network');
              });
            }, function (error) {
              console.log(JSON.stringify(error));

              _this94.toaster.toast('Uploading some files failed, Please check your network');
            });
          }
        }, {
          key: "loadCloudPhotos",
          value: function loadCloudPhotos() {
            var _this95 = this;

            var _a;

            this.mediaService.getUserPhotos((_a = this.user) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (photos) {
              var _a, _b;

              console.log((_a = _this95.user) === null || _a === void 0 ? void 0 : _a.id);
              _this95.cloudPhotos = _toConsumableArray(photos);

              if (((_b = _this95.cloudPhotos) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                _this95.galleryType = 'cloud';
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "isSelected",
          value: function isSelected(ph) {
            return this.selectedCloudPhotos.includes(ph);
          }
        }, {
          key: "galleryType",
          set: function set(type) {
            this._galleryType = type; // if (type === 'cloud') {
            //   // allow double click
            //   setTimeout(() => {
            //   }, 2000);
            // } else {
            // }
          },
          get: function get() {
            return this._galleryType;
          }
        }]);

        return MyPhotoPickerComponent;
      }();

      MyPhotoPickerComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_providers_local_media_service__WEBPACK_IMPORTED_MODULE_8__["LocalMediaService"]
        }, {
          type: src_app_shared_services_model_service_media_service__WEBPACK_IMPORTED_MODULE_12__["MediaService"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]
        }, {
          type: _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_5__["PhotoLibrary"]
        }, {
          type: src_app_shared_services_providers_permission_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_7__["MySignals"]
        }, {
          type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_11__["ToasterService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      MyPhotoPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-photo-picker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-photo-picker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-photo-picker/my-photo-picker.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-photo-picker.component.scss */
        "./src/app/widgets/my-photo-picker/my-photo-picker.component.scss"))["default"]]
      })], MyPhotoPickerComponent);
      /***/
    },

    /***/
    "./src/app/widgets/my-share/my-share.component.scss":
    /*!**********************************************************!*\
      !*** ./src/app/widgets/my-share/my-share.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsMyShareMyShareComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvbXktc2hhcmUvbXktc2hhcmUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/my-share/my-share.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/widgets/my-share/my-share.component.ts ***!
      \********************************************************/

    /*! exports provided: MyShareComponent */

    /***/
    function srcAppWidgetsMyShareMyShareComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyShareComponent", function () {
        return MyShareComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_services_providers_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/providers/sharing.service */
      "./src/app/shared/services/providers/sharing.service.ts");

      var MyShareComponent = /*#__PURE__*/function () {
        function MyShareComponent(navCtrl, actionSheetCtrl, social) {
          _classCallCheck(this, MyShareComponent);

          this.navCtrl = navCtrl;
          this.actionSheetCtrl = actionSheetCtrl;
          this.social = social;
        }

        _createClass(MyShareComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.navCtrl.pop();
          }
        }, {
          key: "showShareComponents",
          value: function showShareComponents() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
              var _this96 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee66$(_context66) {
                while (1) {
                  switch (_context66.prev = _context66.next) {
                    case 0:
                      actionSheet = this.actionSheetCtrl.create({
                        buttons: [{
                          text: 'Share on Facebook',
                          role: 'destructive',
                          cssClass: 'action-facebook',
                          icon: 'logo-facebook',
                          handler: function handler() {
                            var _a, _b, _c, _d;

                            _this96.social.share('com.facebook.katana', 'Facebook', 'facebook', (_a = _this96.shareable) === null || _a === void 0 ? void 0 : _a.message, (_b = _this96.shareable) === null || _b === void 0 ? void 0 : _b.subject, (_c = _this96.shareable) === null || _c === void 0 ? void 0 : _c.image, (_d = _this96.shareable) === null || _d === void 0 ? void 0 : _d.url);
                          }
                        }, {
                          text: 'Share on Whatsup',
                          role: 'destructive',
                          cssClass: 'action-whatsup',
                          icon: 'logo-whatsapp',
                          handler: function handler() {
                            var _a, _b, _c, _d;

                            _this96.social.share('com.whatsapp', 'Whatsapp', 'whatsapp', (_a = _this96.shareable) === null || _a === void 0 ? void 0 : _a.message, (_b = _this96.shareable) === null || _b === void 0 ? void 0 : _b.subject, (_c = _this96.shareable) === null || _c === void 0 ? void 0 : _c.image, (_d = _this96.shareable) === null || _d === void 0 ? void 0 : _d.url);
                          }
                        }, {
                          text: 'Share on Instagram',
                          role: 'destructive',
                          cssClass: 'action-instagram',
                          icon: 'logo-instagram',
                          handler: function handler() {
                            var _a, _b, _c, _d;

                            _this96.social.share('com.instagram.android', 'Instagram', 'instagram', (_a = _this96.shareable) === null || _a === void 0 ? void 0 : _a.message, (_b = _this96.shareable) === null || _b === void 0 ? void 0 : _b.subject, (_c = _this96.shareable) === null || _c === void 0 ? void 0 : _c.image, (_d = _this96.shareable) === null || _d === void 0 ? void 0 : _d.url);
                          }
                        }, {
                          text: 'Share on Twitter',
                          role: 'destructive',
                          cssClass: 'action-twitter',
                          icon: 'logo-twitter',
                          handler: function handler() {
                            var _a, _b, _c, _d;

                            _this96.social.share('com.twitter.android', 'Twitter', 'twitter', (_a = _this96.shareable) === null || _a === void 0 ? void 0 : _a.message, (_b = _this96.shareable) === null || _b === void 0 ? void 0 : _b.subject, (_c = _this96.shareable) === null || _c === void 0 ? void 0 : _c.image, (_d = _this96.shareable) === null || _d === void 0 ? void 0 : _d.url);
                          }
                        }, {
                          text: 'More',
                          role: 'destructive',
                          cssClass: 'action-regular',
                          icon: 'share',
                          handler: function handler() {
                            var _a, _b, _c, _d;

                            _this96.social.share('none', 'Share', 'none', (_a = _this96.shareable) === null || _a === void 0 ? void 0 : _a.message, (_b = _this96.shareable) === null || _b === void 0 ? void 0 : _b.subject, (_c = _this96.shareable) === null || _c === void 0 ? void 0 : _c.image, (_d = _this96.shareable) === null || _d === void 0 ? void 0 : _d.url);
                          }
                        }]
                      });
                      _context66.next = 3;
                      return actionSheet;

                    case 3:
                      _context66.sent.present();

                    case 4:
                    case "end":
                      return _context66.stop();
                  }
                }
              }, _callee66, this);
            }));
          }
        }, {
          key: "share",
          value: function share(shareable) {
            this.shareable = shareable;
            this.showShareComponents();
          }
        }]);

        return MyShareComponent;
      }();

      MyShareComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: src_app_shared_services_providers_sharing_service__WEBPACK_IMPORTED_MODULE_3__["SocialSharingService"]
        }];
      };

      MyShareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-share',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-share.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-share/my-share.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-share.component.scss */
        "./src/app/widgets/my-share/my-share.component.scss"))["default"]]
      })], MyShareComponent);
      /***/
    },

    /***/
    "./src/app/widgets/my-slider/my-slider.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/widgets/my-slider/my-slider.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsMySliderMySliderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".swiper-slide {\n  display: block;\n}\n\nion-slide ion-card {\n  height: 100%;\n  box-shadow: 0px 0px 6px -5px black;\n  margin-left: 0;\n  margin-right: 0;\n  padding: 0;\n}\n\nion-slide ion-card ion-item {\n  margin-top: 20vh;\n}\n\n.play-button {\n  height: 45px;\n  width: 45px;\n  box-shadow: none;\n  margin-left: 21vw;\n  --border-style: solid;\n  --border-width: 0px;\n  --background-hover-opacity: 50%;\n  --background-hover: red;\n  --background: #ffffffa6;\n  --box-shadow: none;\n  --color: light;\n  color: white !important;\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9teS1zbGlkZXIvbXktc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsY0FBQTtBQUhKOztBQVFJO0VBQ0ksWUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBTFI7O0FBT1E7RUFDUSxnQkFBQTtBQUxoQjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFQRiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvbXktc2xpZGVyL215LXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgLy8gaGVpZ2h0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbmlvbi1zbGlkZXtcclxuICAgIC8vIHdpZHRoOiA2MHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggLTVweCBibGFjaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogIDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBsYXktYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMjF2dztcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogNTAlO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmVkO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZmE2O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAtLWNvbG9yOiBsaWdodDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyMDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/my-slider/my-slider.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/widgets/my-slider/my-slider.component.ts ***!
      \**********************************************************/

    /*! exports provided: MySliderComponent */

    /***/
    function srcAppWidgetsMySliderMySliderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MySliderComponent", function () {
        return MySliderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var _shared_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../video-player/video-player.component */
      "./src/app/widgets/video-player/video-player.component.ts");
      /* harmony import */


      var _models_my_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../models/my-media */
      "./src/app/models/my-media.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

      var MySliderComponent = /*#__PURE__*/function () {
        function MySliderComponent(photoViewer) {
          _classCallCheck(this, MySliderComponent);

          this.photoViewer = photoViewer;
          this.sliderId = 'player' + Date.now();
          this.slideObjects = []; // Photo | PhotoLocal | Video | VideoLocal | Audio | AudioLocal

          this.playVideo = false;
          this.slideOptions = {
            slidesPerView: 1,
            coverflowEffect: {
              rotate: 40,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: true
            },
            on: {
              beforeInit: function beforeInit() {
                var swiper = this;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
              },
              setTranslate: function setTranslate() {
                var swiper = this;
                var swiperWidth = swiper.width,
                    swiperHeight = swiper.height,
                    slides = swiper.slides,
                    $wrapperEl = swiper.$wrapperEl,
                    slidesSizesGrid = swiper.slidesSizesGrid,
                    $ = swiper.$;
                var params = swiper.params.coverflowEffect;
                var isHorizontal = swiper.isHorizontal();
                var transform$$1 = swiper.translate;
                var center = isHorizontal ? -transform$$1 + swiperWidth / 2 : -transform$$1 + swiperHeight / 2;
                var rotate = isHorizontal ? params.rotate : -params.rotate;
                var translate = params.depth; // Each slide offset from center

                for (var i = 0, length = slides.length; i < length; i += 1) {
                  var $slideEl = slides.eq(i);
                  var slideSize = slidesSizesGrid[i];
                  var slideOffset = $slideEl[0].swiperSlideOffset;
                  var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
                  var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                  var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                  var translateZ = -translate * Math.abs(offsetMultiplier);
                  var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
                  var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

                  if (Math.abs(translateX) < 0.001) {
                    translateX = 0;
                  }

                  if (Math.abs(translateY) < 0.001) {
                    translateY = 0;
                  }

                  if (Math.abs(translateZ) < 0.001) {
                    translateZ = 0;
                  }

                  if (Math.abs(rotateY) < 0.001) {
                    rotateY = 0;
                  }

                  if (Math.abs(rotateX) < 0.001) {
                    rotateX = 0;
                  }

                  var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
                  $slideEl.transform(slideTransform);
                  $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                  if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if ($shadowBeforeEl.length === 0) {
                      $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                      $slideEl.append($shadowBeforeEl);
                    }

                    if ($shadowAfterEl.length === 0) {
                      $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                      $slideEl.append($shadowAfterEl);
                    }

                    if ($shadowBeforeEl.length) {
                      $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    }

                    if ($shadowAfterEl.length) {
                      $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                    }
                  }
                } // Set correct perspective for IE10


                if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                  var ws = $wrapperEl[0].style;
                  ws.perspectiveOrigin = "".concat(center, "px 50%");
                }
              },
              setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              }
            }
          };
          this.mediaType = _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO;
          this.slider = {
            isBeginningSlide: true,
            isEndSlide: false
          };
        }

        _createClass(MySliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a, _b, _c;

            if (this.playerObserver) {
              (_b = (_a = this.playerObserver) === null || _a === void 0 ? void 0 : _a.observer) === null || _b === void 0 ? void 0 : _b.unobserve((_c = this.playerObserver) === null || _c === void 0 ? void 0 : _c.element);
            }
          } // Move to Next slide

        }, {
          key: "slideNext",
          value: function slideNext(object, slideView) {
            var _this97 = this;

            slideView.slideNext(500).then(function () {
              _this97.checkIfNavDisabled(object, slideView);
            });
          } // Move to previous slide

        }, {
          key: "slidePrev",
          value: function slidePrev(object, slideView) {
            var _this98 = this;

            slideView.slidePrev(500).then(function () {
              _this98.checkIfNavDisabled(object, slideView);
            });
          } // Method called when slide is changed by drag or navigation

        }, {
          key: "SlideDidChange",
          value: function SlideDidChange(object, slideView) {
            this.checkIfNavDisabled(object, slideView);
          } // Call methods to check if slide is first or last to enable disbale navigation

        }, {
          key: "checkIfNavDisabled",
          value: function checkIfNavDisabled(object, slideView) {
            this.checkisBeginning(object, slideView);
            this.checkisEnd(object, slideView);
          }
        }, {
          key: "checkisBeginning",
          value: function checkisBeginning(object, slideView) {
            slideView.isBeginning().then(function (istrue) {
              object.isBeginningSlide = istrue;
            });
          }
        }, {
          key: "checkisEnd",
          value: function checkisEnd(object, slideView) {
            slideView.isEnd().then(function (istrue) {
              object.isEndSlide = istrue;
            });
          }
        }, {
          key: "play",
          value: function play(obj) {
            switch (this.mediaType) {
              case _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].PHOTO:
                // preview image
                this.photoViewer.show(_shared_config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + obj.fileName, '', {
                  share: true
                });
                break;

              case _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO:
                this.stream();
                break;

              case _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].DOCUMENT:
                break;

              case _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO:
                this.stream();
                break;

              default:
                console.log('Invalid media object');
            }
          }
        }, {
          key: "stream",
          value: function stream() {
            var _this99 = this;

            this.playVideo = true;
            setTimeout(function () {
              _this99.playerObserver = src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].monitorElementOutOfView(_this99.sliderId, function () {
                _this99.player = null;
                _this99.playVideo = false;
              });
            }, 500);
          }
        }, {
          key: "getObjPhoto",
          value: function getObjPhoto(obj) {
            if (this.mediaType === _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].PHOTO) {
              return _shared_config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + obj.fileName;
            } else if (this.mediaType === _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].VIDEO) {
              return _shared_config__WEBPACK_IMPORTED_MODULE_2__["DOWNLOAD_CONTAINER"] + obj.posterUrl;
            } else if (this.mediaType === _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].AUDIO) {
              return _shared_config__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_AUDIO_COVER"];
            } else if (this.mediaType === _models_my_media__WEBPACK_IMPORTED_MODULE_4__["MediaType"].DOCUMENT) {
              return _shared_config__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DOCUMENT_COVER"];
            }
          }
        }]);

        return MySliderComponent;
      }();

      MySliderComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"]
        }];
      };

      MySliderComponent.propDecorators = {
        slideObjects: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        mediaType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        player: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: [_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_3__["VideoPlayerComponent"]]
        }],
        slideWithNav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['slideWithNav', {
            "static": false
          }]
        }]
      };
      MySliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-my-slider',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-slider.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-slider/my-slider.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-slider.component.scss */
        "./src/app/widgets/my-slider/my-slider.component.scss"))["default"]]
      })], MySliderComponent);
      /***/
    },

    /***/
    "./src/app/widgets/my-video-picker/my-video-picker.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/my-video-picker/my-video-picker.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsMyVideoPickerMyVideoPickerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvbXktdmlkZW8tcGlja2VyL215LXZpZGVvLXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/widgets/my-video-picker/my-video-picker.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/my-video-picker/my-video-picker.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MyVideoPickerComponent */

    /***/
    function srcAppWidgetsMyVideoPickerMyVideoPickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyVideoPickerComponent", function () {
        return MyVideoPickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_model_service_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/model-service/media.service */
      "./src/app/shared/services/model-service/media.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var src_app_shared_services_providers_local_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/providers/local-media.service */
      "./src/app/shared/services/providers/local-media.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var src_app_models_my_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/my-media */
      "./src/app/models/my-media.ts");
      /* harmony import */


      var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/providers/widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");

      var _capacitor_core__WEBP3 = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"],
          CapacitorVideoPlayer = _capacitor_core__WEBP3.CapacitorVideoPlayer,
          Device = _capacitor_core__WEBP3.Device;

      var MyVideoPickerComponent = /*#__PURE__*/function () {
        function MyVideoPickerComponent(localMediaService, plt, toaster, cdr, signals, mediaService, userService) {
          _classCallCheck(this, MyVideoPickerComponent);

          this.localMediaService = localMediaService;
          this.plt = plt;
          this.toaster = toaster;
          this.cdr = cdr;
          this.signals = signals;
          this.mediaService = mediaService;
          this.userService = userService;
          this.galleryType = 'cloud'; // local or cloud

          this.sub$ = [];
          this.deviceVideos = [];
          this.cloudVideos = [];
          this.selectedCloudVideos = [];
          this.uploadedVideos = [];
          this.isAccessDenied = false;
          this.deviceVideos = [];
        }

        _createClass(MyVideoPickerComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee67() {
              return regeneratorRuntime.wrap(function _callee67$(_context67) {
                while (1) {
                  switch (_context67.prev = _context67.next) {
                    case 0:
                    case "end":
                      return _context67.stop();
                  }
                }
              }, _callee67);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee68() {
              var _this100 = this;

              return regeneratorRuntime.wrap(function _callee68$(_context68) {
                while (1) {
                  switch (_context68.prev = _context68.next) {
                    case 0:
                      _context68.next = 2;
                      return this.plt.ready();

                    case 2:
                      this.userService.getUserLocal().then(function (user) {
                        _this100.user = user;

                        _this100.loadCloudVideos(); // this.getLatestPhotos().then(_ => _);

                      });

                    case 3:
                    case "end":
                      return _context68.stop();
                  }
                }
              }, _callee68, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee69() {
              return regeneratorRuntime.wrap(function _callee69$(_context69) {
                while (1) {
                  switch (_context69.prev = _context69.next) {
                    case 0:
                      src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"].destroySubscription(this.sub$);

                    case 1:
                    case "end":
                      return _context69.stop();
                  }
                }
              }, _callee69, this);
            }));
          } // Read videos from device and set it to the view
          // Uri path must be result from filesystem to http type

        }, {
          key: "getLatestVideos",
          value: function getLatestVideos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee70() {
              return regeneratorRuntime.wrap(function _callee70$(_context70) {
                while (1) {
                  switch (_context70.prev = _context70.next) {
                    case 0:
                    case "end":
                      return _context70.stop();
                  }
                }
              }, _callee70);
            }));
          } // async play(url: string) {
          //   document.addEventListener('jeepCapVideoPlayerPlay',
          //     (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPlay ', e.detail); }, false);
          //   document.addEventListener('jeepCapVideoPlayerPause',
          //     (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPause ', e.detail); }, false);
          //   document.addEventListener('jeepCapVideoPlayerEnded',
          //     (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerEnded ', e.detail); }, false);
          //   const res: any = await this.videoPlayer.initPlayer({ mode: 'fullscreen', url });
          // }

        }, {
          key: "deleteFromCloudVideos",
          value: function deleteFromCloudVideos(vid) {
            this.deviceVideos = this.deviceVideos.filter(function (videos) {
              // console.log(vid?.id);
              // console.log(videos.id);
              return vid.id !== videos.id;
            });
          } // Does not remove permanently from the device
          // but from the application memory

        }, {
          key: "deleteFromDeviceVideos",
          value: function deleteFromDeviceVideos(vid) {
            this.deviceVideos = this.deviceVideos.filter(function (video) {
              return video.id !== vid.id;
            });
          }
        }, {
          key: "recordVideo",
          value: function recordVideo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee71() {
              var vid;
              return regeneratorRuntime.wrap(function _callee71$(_context71) {
                while (1) {
                  switch (_context71.prev = _context71.next) {
                    case 0:
                      _context71.next = 2;
                      return this.localMediaService.recordVideo()["catch"](function (error) {
                        return console.log(JSON.stringify(error));
                      });

                    case 2:
                      vid = _context71.sent;

                      if (vid === null || vid === void 0 ? void 0 : vid.id) {
                        console.log(JSON.stringify(vid));
                        this.deviceVideos = [].concat(_toConsumableArray(this.deviceVideos), [vid]);
                        console.log(JSON.stringify(this.deviceVideos));
                        this.cdr.detectChanges();
                      }

                    case 4:
                    case "end":
                      return _context71.stop();
                  }
                }
              }, _callee71, this);
            }));
          }
        }, {
          key: "uploadVideos",
          value: function uploadVideos() {
            var _this101 = this;

            // move videos to permanent storage folder
            var videos = [];
            this.deviceVideos.forEach(function (video) {
              // copy video to permanent location 
              _this101.localMediaService.writeVideoToMediaDirectory(video === null || video === void 0 ? void 0 : video.nativeURL).then(function (vid) {
                // upload video and instruct to create thumbnail on server
                _this101.localMediaService.upload(vid === null || vid === void 0 ? void 0 : vid.nativeURL, vid === null || vid === void 0 ? void 0 : vid.fileName, true).then(function (result) {
                  var _a; // {"bytesSent":169025,
                  // "responseCode":200,
                  // "response":"{
                  //   \"files\":[{\"fieldname\":\"file\",\"originalname\":\"IMG_20201103_234610.jpg\",
                  //                \"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"size\":168907}],
                  //   \"fields\":{}}",
                  //    "objectId":""}


                  console.log(JSON.stringify(result));
                  result = result;

                  if (result) {
                    var fileName = vid.fileName.substr(0, vid.fileName.lastIndexOf('.'));
                    var uploadedVideo = {
                      description: '',
                      fileName: vid.fileName,
                      fileUrl: '/' + vid.fileName,
                      dateCreated: new Date(),
                      type: src_app_models_my_media__WEBPACK_IMPORTED_MODULE_8__["MediaType"].VIDEO,
                      thumbnailUrl: '/thumb_' + fileName + '.jpg',
                      posterUrl: '/poster_' + fileName + '.jpg',
                      length: vid.length
                    };
                    videos.push(uploadedVideo);

                    _this101.signals.announceUploadCompleteSource(uploadedVideo); // delete from device videos


                    _this101.deleteFromDeviceVideos(video);

                    if (((_a = _this101.deviceVideos) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                      // Fire all upload complete
                      _this101.signals.announceAllUploadCompleteSource(videos); // Reload cloud videos

                    }
                  }
                });
              }, function (error) {
                _this101.toaster.toast('Uploading some files failed, Please check your network');
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "loadCloudVideos",
          value: function loadCloudVideos() {
            var _this102 = this;

            var _a;

            this.mediaService.getUserVideos((_a = this.user) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (videos) {
              var _a, _b;

              console.log((_a = _this102.user) === null || _a === void 0 ? void 0 : _a.id);
              _this102.cloudVideos = _toConsumableArray(videos);

              if (((_b = _this102.cloudVideos) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                _this102.galleryType = 'cloud';
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "isSelected",
          value: function isSelected(vid) {
            return this.selectedCloudVideos.includes(vid);
          }
        }, {
          key: "selectVideo",
          value: function selectVideo() {
            var _this103 = this;

            this.localMediaService.selectVideoFromDevice().then(function (video) {
              console.log(JSON.stringify(video));

              if (video === null || video === void 0 ? void 0 : video.id) {
                _this103.deviceVideos = [].concat(_toConsumableArray(_this103.deviceVideos), [video]);
              }
            }, function (error) {
              console.log(JSON.stringify(error));
            });
          }
        }, {
          key: "selectFromCloudVideos",
          value: function selectFromCloudVideos(vid$) {
            if (this.selectedCloudVideos.includes(vid$)) {
              // remove
              this.selectedCloudVideos = this.selectedCloudVideos.filter(function (vid) {
                return vid.id !== (vid$ === null || vid$ === void 0 ? void 0 : vid$.id);
              });
            } else {
              // add
              this.selectedCloudVideos.push(vid$);
            }

            console.log(JSON.stringify(this.selectedCloudVideos));
          }
        }]);

        return MyVideoPickerComponent;
      }();

      MyVideoPickerComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_providers_local_media_service__WEBPACK_IMPORTED_MODULE_5__["LocalMediaService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_9__["ToasterService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_4__["MySignals"]
        }, {
          type: src_app_shared_services_model_service_media_service__WEBPACK_IMPORTED_MODULE_1__["MediaService"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }];
      };

      MyVideoPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-video-picker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-video-picker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/my-video-picker/my-video-picker.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-video-picker.component.scss */
        "./src/app/widgets/my-video-picker/my-video-picker.component.scss"))["default"]]
      })], MyVideoPickerComponent);
      /***/
    },

    /***/
    "./src/app/widgets/photo-thumbnail/photo-thumbnail.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/photo-thumbnail/photo-thumbnail.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsPhotoThumbnailPhotoThumbnailComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvcGhvdG8tdGh1bWJuYWlsL3Bob3RvLXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/widgets/photo-thumbnail/photo-thumbnail.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/photo-thumbnail/photo-thumbnail.component.ts ***!
      \**********************************************************************/

    /*! exports provided: PhotoThumbnailComponent */

    /***/
    function srcAppWidgetsPhotoThumbnailPhotoThumbnailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoThumbnailComponent", function () {
        return PhotoThumbnailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/config */
      "./src/app/shared/config.ts");

      var PhotoThumbnailComponent = /*#__PURE__*/function () {
        function PhotoThumbnailComponent(gestureCtrl, photoViewer) {
          _classCallCheck(this, PhotoThumbnailComponent);

          this.gestureCtrl = gestureCtrl;
          this.photoViewer = photoViewer;
          this.selected = false;
          this.count = 0;
          this.location = 'local'; // cloud || local

          this.lastOnStart = 0; // double click start count

          this.DOUBLE_CLICK_THRESHOLD = 500;
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.isSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.downloadUrlRoot = src_app_shared_config__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD_CONTAINER"];
        }

        _createClass(PhotoThumbnailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this104 = this;

            setTimeout(function () {
              var gesture = _this104.gestureCtrl.create({
                el: _this104.photoThumbnail.nativeElement,
                threshold: 0,
                gestureName: 'photo-double-click',
                onStart: function onStart() {
                  _this104.onDoubleClickImageThumbnail();
                }
              });

              gesture.enable();
            }, 1000);
          }
        }, {
          key: "select",
          value: function select() {
            this.selected = !this.selected;
            this.isSelected.emit(this.thumb);
          }
        }, {
          key: "onDoubleClickImageThumbnail",
          value: function onDoubleClickImageThumbnail() {
            var now = Date.now();

            if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
              this.preview();
              this.lastOnStart = 0;
            } else {
              this.lastOnStart = now;
            }
          }
        }, {
          key: "preview",
          value: function preview() {
            var _this105 = this;

            try {
              var path = '';

              if (this.location == 'cloud') {
                // console.log('cloud');
                path = this.downloadUrlRoot + this.thumb.fileName;
              } else if (this.location == 'local') {
                // console.log('local');
                path = this.thumb.nativeURL;
              } // console.log(path);


              setTimeout(function () {
                _this105.photoViewer.show(path, '', {
                  share: true
                });
              }, 100);
            } catch (e) {
              console.log(JSON.stringify(e));
            }
          }
        }, {
          key: "getThumbnailUrl",
          value: function getThumbnailUrl() {
            var path = '';

            if (this.location == 'cloud') {
              // console.log('cloud');
              path = this.downloadUrlRoot + this.thumb.fileName;
            } else if (this.location == 'local') {
              // console.log('local');
              path = this.thumb.thumbnailResolvedURL;
            } // console.log(path);


            return path;
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            this["delete"].emit(true);
          }
        }]);

        return PhotoThumbnailComponent;
      }();

      PhotoThumbnailComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["GestureController"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"]
        }];
      };

      PhotoThumbnailComponent.propDecorators = {
        thumb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        location: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        photoThumbnail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['photoThumbnail']
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      PhotoThumbnailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo-thumbnail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./photo-thumbnail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/photo-thumbnail/photo-thumbnail.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./photo-thumbnail.component.scss */
        "./src/app/widgets/photo-thumbnail/photo-thumbnail.component.scss"))["default"]]
      })], PhotoThumbnailComponent);
      /***/
    },

    /***/
    "./src/app/widgets/popular-schools/popular-schools.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/popular-schools/popular-schools.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsPopularSchoolsPopularSchoolsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvcG9wdWxhci1zY2hvb2xzL3BvcHVsYXItc2Nob29scy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/widgets/popular-schools/popular-schools.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/popular-schools/popular-schools.component.ts ***!
      \**********************************************************************/

    /*! exports provided: PopularSchoolsComponent */

    /***/
    function srcAppWidgetsPopularSchoolsPopularSchoolsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopularSchoolsComponent", function () {
        return PopularSchoolsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PopularSchoolsComponent = /*#__PURE__*/function () {
        function PopularSchoolsComponent() {
          _classCallCheck(this, PopularSchoolsComponent);
        }

        _createClass(PopularSchoolsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PopularSchoolsComponent;
      }();

      PopularSchoolsComponent.ctorParameters = function () {
        return [];
      };

      PopularSchoolsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popular-schools',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./popular-schools.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/popular-schools/popular-schools.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./popular-schools.component.scss */
        "./src/app/widgets/popular-schools/popular-schools.component.scss"))["default"]]
      })], PopularSchoolsComponent);
      /***/
    },

    /***/
    "./src/app/widgets/post-widget1/post-widget1.component.scss":
    /*!******************************************************************!*\
      !*** ./src/app/widgets/post-widget1/post-widget1.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsPostWidget1PostWidget1ComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avatar-group .avatar-group-img {\n  border-radius: 50% !important;\n  width: 30px !important;\n  height: 30px !important;\n  border: solid white 2px;\n  box-shadow: 0px -18px 0px -44px;\n}\n.avatar-group .avatar-count-icon {\n  background: var(--ion-color-secondary);\n  font-size: 0.7em;\n  font-weight: bold;\n  font-family: \"poppins-bold\";\n  padding-right: 6px;\n  padding-top: 5px;\n}\n.tags {\n  padding: 0;\n  list-style: none;\n}\n.tags li {\n  display: inline;\n}\n.info {\n  margin-top: -40px;\n}\n.tempHeight {\n  height: 57px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9wb3N0LXdpZGdldDEvcG9zdC13aWRnZXQxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQURSO0FBR0k7RUFDSSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUtBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNJLGVBQUE7QUFGUjtBQU9BO0VBQ0ksaUJBQUE7QUFKSjtBQVFBO0VBQ0ksdUJBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvcG9zdC13aWRnZXQxL3Bvc3Qtd2lkZ2V0MS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYXZhdGFyLWdyb3VwIHtcclxuICAgIC5hdmF0YXItZ3JvdXAtaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAtMThweCAwcHggLTQ0cHg7XHJcbiAgICB9XHJcbiAgICAuYXZhdGFyLWNvdW50LWljb257XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInBvcHBpbnMtYm9sZFwiO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFncyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIFxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcblxyXG5cclxuLnRlbXBIZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDU3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/widgets/post-widget1/post-widget1.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/post-widget1/post-widget1.component.ts ***!
      \****************************************************************/

    /*! exports provided: PostWidget1Component */

    /***/
    function srcAppWidgetsPostWidget1PostWidget1ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostWidget1Component", function () {
        return PostWidget1Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _my_share_my_share_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../my-share/my-share.component */
      "./src/app/widgets/my-share/my-share.component.ts");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _models_my_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../models/my-media */
      "./src/app/models/my-media.ts");
      /* harmony import */


      var _shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../shared/services/model-service/post.service */
      "./src/app/shared/services/model-service/post.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/model-service/social.service */
      "./src/app/shared/services/model-service/social.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../comments/comments.component */
      "./src/app/widgets/comments/comments.component.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PostWidget1Component = /*#__PURE__*/function () {
        function PostWidget1Component(postService, socialService, modalController, signals, userService, router) {
          _classCallCheck(this, PostWidget1Component);

          this.postService = postService;
          this.socialService = socialService;
          this.modalController = modalController;
          this.signals = signals;
          this.userService = userService;
          this.router = router;
          this.tags = ['irepmyschool', 'back2school2020'];
          this.objects = [];
          this.postUserImage = '';
          this.likes = [];
          this.disLikes = [];
          this.totalComments = 0;
        }

        _createClass(PostWidget1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getLikes();
          }
        }, {
          key: "getLikes",
          value: function getLikes() {
            var _this106 = this;

            var _a;

            this.socialService.getPostLikes((_a = this.post) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (affections) {
              _this106.likes = [];
              _this106.disLikes = [];
              affections === null || affections === void 0 ? void 0 : affections.forEach(function (affection) {
                if (affection.rate) {
                  _this106.likes.push(affection);
                } else {
                  _this106.disLikes.push(affection);
                }
              });
            });
          }
        }, {
          key: "comment",
          value: function comment() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee72() {
              var _this107 = this;

              return regeneratorRuntime.wrap(function _callee72$(_context72) {
                while (1) {
                  switch (_context72.prev = _context72.next) {
                    case 0:
                      _context72.next = 2;
                      return this.modalController.create({
                        component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"],
                        cssClass: 'my-custom-class',
                        componentProps: {
                          Post: this.post
                        }
                      });

                    case 2:
                      this.modal = _context72.sent;
                      this.signals.closeModalSource$.subscribe(function (name) {
                        if (name === 'comments') {
                          _this107.modal.dismiss();
                        }
                      });
                      _context72.next = 6;
                      return this.modal.present();

                    case 6:
                      return _context72.abrupt("return", _context72.sent);

                    case 7:
                    case "end":
                      return _context72.stop();
                  }
                }
              }, _callee72, this);
            }));
          }
        }, {
          key: "gotoProfile",
          value: function gotoProfile() {
            var _this108 = this;

            this.userService.setSelectedUserLocal(this.postUser).then(function (_) {
              _this108.router.navigateByUrl('/links/profile');
            });
          }
        }, {
          key: "share",
          value: function share() {
            var _a, _b, _c;

            var fileUrl = '';
            var image = '';

            if (((_a = this.objects) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              fileUrl = src_app_shared_config__WEBPACK_IMPORTED_MODULE_6__["DOWNLOAD_CONTAINER"] + ((_b = this.objects[0]) === null || _b === void 0 ? void 0 : _b.fileName);

              if (this.mediaType === _models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].PHOTO) {
                image = src_app_shared_config__WEBPACK_IMPORTED_MODULE_6__["DOWNLOAD_CONTAINER"] + this.objects[0].fileName;
              } else if (this.mediaType === _models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].VIDEO) {
                image = src_app_shared_config__WEBPACK_IMPORTED_MODULE_6__["DOWNLOAD_CONTAINER"] + this.objects[0].posterUrl;
              } else if (this.mediaType === _models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].AUDIO) {
                image = src_app_shared_config__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_AUDIO_COVER"];
              } else if (this.mediaType === _models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].DOCUMENT) {
                image = src_app_shared_config__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_DOCUMENT_COVER"];
              }
            }

            var shareable = {
              message: (_c = this.post) === null || _c === void 0 ? void 0 : _c.message,
              subject: 'Yearbook Post',
              url: fileUrl,
              image: image,
              emailRecipients: []
            };
            this.myShareComponent.share(shareable);
          }
        }, {
          key: "Post",
          set: function set(post) {
            var _a, _b, _c, _d, _e, _f;

            this.post = post; // console.log(this.objects);

            this.postUserImage = this.userService.getOwnerImage(post === null || post === void 0 ? void 0 : post.user);
            this.postUser = (_a = this.post) === null || _a === void 0 ? void 0 : _a.user;
            this.school = (_b = this.post) === null || _b === void 0 ? void 0 : _b.school;

            if (((_c = post === null || post === void 0 ? void 0 : post.photos) === null || _c === void 0 ? void 0 : _c.length) > 0) {
              this.objects = post === null || post === void 0 ? void 0 : post.photos;
              this.mediaType = _models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].PHOTO;
            } else if (((_d = post === null || post === void 0 ? void 0 : post.videos) === null || _d === void 0 ? void 0 : _d.length) > 0) {
              this.objects = post === null || post === void 0 ? void 0 : post.videos;
              this.mediaType = _models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].VIDEO;
            } else if (((_e = post === null || post === void 0 ? void 0 : post.audios) === null || _e === void 0 ? void 0 : _e.length) > 0) {
              this.objects = post === null || post === void 0 ? void 0 : post.audios;
              this.mediaType = _models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].AUDIO;
            } else if (((_f = post === null || post === void 0 ? void 0 : post.documents) === null || _f === void 0 ? void 0 : _f.length) > 0) {
              this.objects = post === null || post === void 0 ? void 0 : post.documents;
              this.mediaType = _models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].DOCUMENT;
            }
          },
          get: function get() {
            return this.post;
          }
        }, {
          key: "TotalComments",
          set: function set(total) {
            this.totalComments = total;
          }
        }]);

        return PostWidget1Component;
      }();

      PostWidget1Component.ctorParameters = function () {
        return [{
          type: _shared_services_model_service_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
        }, {
          type: src_app_shared_services_model_service_social_service__WEBPACK_IMPORTED_MODULE_7__["SocialService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_2__["MySignals"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }];
      };

      PostWidget1Component.propDecorators = {
        myShareComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: [_my_share_my_share_component__WEBPACK_IMPORTED_MODULE_1__["MyShareComponent"]]
        }],
        Post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      };
      PostWidget1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-post-widget1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./post-widget1.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget1/post-widget1.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./post-widget1.component.scss */
        "./src/app/widgets/post-widget1/post-widget1.component.scss"))["default"]]
      })], PostWidget1Component);
      /***/
    },

    /***/
    "./src/app/widgets/post-widget2/post-widget2.component.scss":
    /*!******************************************************************!*\
      !*** ./src/app/widgets/post-widget2/post-widget2.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsPostWidget2PostWidget2ComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avatar-group .avatar-group-img {\n  border-radius: 50% !important;\n  width: 30px !important;\n  height: 30px !important;\n  border: solid white 2px;\n  box-shadow: 0px -18px 0px -44px;\n}\n.avatar-group .avatar-count-icon {\n  background: var(--ion-color-secondary);\n  font-size: 0.7em;\n  font-weight: bold;\n  font-family: \"poppins-bold\";\n  padding-right: 6px;\n  padding-top: 5px;\n}\n.tags {\n  padding: 0;\n  list-style: none;\n}\n.tags li {\n  display: inline;\n}\n.info {\n  margin-top: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9wb3N0LXdpZGdldDIvcG9zdC13aWRnZXQyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQURSO0FBR0k7RUFDSSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUtBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNJLGVBQUE7QUFGUjtBQU9BO0VBQ0ksaUJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvcG9zdC13aWRnZXQyL3Bvc3Qtd2lkZ2V0Mi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYXZhdGFyLWdyb3VwIHtcclxuICAgIC5hdmF0YXItZ3JvdXAtaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAtMThweCAwcHggLTQ0cHg7XHJcbiAgICB9XHJcbiAgICAuYXZhdGFyLWNvdW50LWljb257XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInBvcHBpbnMtYm9sZFwiO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFncyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIFxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/widgets/post-widget2/post-widget2.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/post-widget2/post-widget2.component.ts ***!
      \****************************************************************/

    /*! exports provided: PostWidget2Component */

    /***/
    function srcAppWidgetsPostWidget2PostWidget2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostWidget2Component", function () {
        return PostWidget2Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/model-service/school.service */
      "./src/app/shared/services/model-service/school.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/model-service/alumni.service */
      "./src/app/shared/services/model-service/alumni.service.ts");

      var PostWidget2Component = /*#__PURE__*/function () {
        function PostWidget2Component(router, alumniService) {
          _classCallCheck(this, PostWidget2Component);

          this.router = router;
          this.alumniService = alumniService;
          this.totalAlumni = 0;
          this.sub$ = [];
        }

        _createClass(PostWidget2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"].destroySubscription(this.sub$);
          }
        }, {
          key: "goToSchool",
          value: function goToSchool() {
            this.router.navigateByUrl('/links/school-profile');
          }
        }, {
          key: "goToSchoolPage",
          value: function goToSchoolPage() {
            this.router.navigateByUrl('/school-profile');
          }
        }, {
          key: "getProfilePhotoUrl",
          value: function getProfilePhotoUrl() {
            return src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"].getSchoolProfilePhotoUrl(this.schoolIdentityPhoto);
          }
        }, {
          key: "getCoverPhotoUrl",
          value: function getCoverPhotoUrl() {
            return src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"].getSchoolCoverPhotoUrl(this.schoolIdentityPhoto);
          }
        }, {
          key: "countAlumni",
          value: function countAlumni() {
            var _this109 = this;

            var _a;

            this.sub$.push(this.alumniService.countAlumni((_a = this.school) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (count) {
              _this109.totalAlumni = count;
            }));
          }
        }, {
          key: "School",
          set: function set(school) {
            this.school = school;
            this.schoolIdentityPhoto = src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"].getSchoolIdentityPhoto(school);
            this.countAlumni();
          }
        }]);

        return PostWidget2Component;
      }();

      PostWidget2Component.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_5__["AlumniService"]
        }];
      };

      PostWidget2Component.propDecorators = {
        school: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        School: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      PostWidget2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-post-widget2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./post-widget2.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget2/post-widget2.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./post-widget2.component.scss */
        "./src/app/widgets/post-widget2/post-widget2.component.scss"))["default"]]
      })], PostWidget2Component);
      /***/
    },

    /***/
    "./src/app/widgets/post-widget3/post-widget3.component.scss":
    /*!******************************************************************!*\
      !*** ./src/app/widgets/post-widget3/post-widget3.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsPostWidget3PostWidget3ComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvcG9zdC13aWRnZXQzL3Bvc3Qtd2lkZ2V0My5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/widgets/post-widget3/post-widget3.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/post-widget3/post-widget3.component.ts ***!
      \****************************************************************/

    /*! exports provided: PostWidget3Component */

    /***/
    function srcAppWidgetsPostWidget3PostWidget3ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostWidget3Component", function () {
        return PostWidget3Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PostWidget3Component = /*#__PURE__*/function () {
        function PostWidget3Component() {
          _classCallCheck(this, PostWidget3Component);
        }

        _createClass(PostWidget3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostWidget3Component;
      }();

      PostWidget3Component.ctorParameters = function () {
        return [];
      };

      PostWidget3Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-widget3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./post-widget3.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/post-widget3/post-widget3.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./post-widget3.component.scss */
        "./src/app/widgets/post-widget3/post-widget3.component.scss"))["default"]]
      })], PostWidget3Component);
      /***/
    },

    /***/
    "./src/app/widgets/school-card/school-card.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/school-card/school-card.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsSchoolCardSchoolCardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avatar-group .avatar-group-img {\n  border-radius: 50% !important;\n  width: 30px !important;\n  height: 30px !important;\n  border: solid white 2px;\n  box-shadow: 0px -18px 0px -44px;\n}\n.avatar-group .avatar-count-icon {\n  background: var(--ion-color-secondary);\n  font-size: 0.7em;\n  font-weight: bold;\n  font-family: \"poppins-bold\";\n  padding-right: 6px;\n  padding-top: 5px;\n}\n.tags {\n  padding: 0;\n  list-style: none;\n}\n.tags li {\n  display: inline;\n}\n.info {\n  margin-top: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9zY2hvb2wtY2FyZC9zY2hvb2wtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUFEUjtBQUdJO0VBQ0ksc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFLQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFDSSxlQUFBO0FBRlI7QUFPQTtFQUNJLGlCQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL3NjaG9vbC1jYXJkL3NjaG9vbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hdmF0YXItZ3JvdXAge1xyXG4gICAgLmF2YXRhci1ncm91cC1pbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IC0xOHB4IDBweCAtNDRweDtcclxuICAgIH1cclxuICAgIC5hdmF0YXItY291bnQtaWNvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwicG9wcGlucy1ib2xkXCI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWdzIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgXHJcbiAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/school-card/school-card.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/widgets/school-card/school-card.component.ts ***!
      \**************************************************************/

    /*! exports provided: SchoolCardComponent */

    /***/
    function srcAppWidgetsSchoolCardSchoolCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolCardComponent", function () {
        return SchoolCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/model-service/school.service */
      "./src/app/shared/services/model-service/school.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/model-service/alumni.service */
      "./src/app/shared/services/model-service/alumni.service.ts");

      var SchoolCardComponent = /*#__PURE__*/function () {
        function SchoolCardComponent(router, alumniService) {
          _classCallCheck(this, SchoolCardComponent);

          this.router = router;
          this.alumniService = alumniService;
          this.totalAlumni = 0;
          this.sub$ = [];
        }

        _createClass(SchoolCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"].destroySubscription(this.sub$);
          }
        }, {
          key: "goToSchool",
          value: function goToSchool() {
            this.router.navigateByUrl('/links/school-profile');
          }
        }, {
          key: "goToSchoolPage",
          value: function goToSchoolPage() {
            this.router.navigateByUrl('/school-profile');
          }
        }, {
          key: "getProfilePhotoUrl",
          value: function getProfilePhotoUrl() {
            return src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"].getSchoolProfilePhotoUrl(this.schoolIdentityPhoto);
          }
        }, {
          key: "getCoverPhotoUrl",
          value: function getCoverPhotoUrl() {
            return src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"].getSchoolCoverPhotoUrl(this.schoolIdentityPhoto);
          }
        }, {
          key: "countAlumni",
          value: function countAlumni() {
            var _this110 = this;

            var _a;

            this.sub$.push(this.alumniService.countAlumni((_a = this.school) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (count) {
              _this110.totalAlumni = count;
            }));
          }
        }, {
          key: "School",
          set: function set(school) {
            this.school = school;
            this.schoolIdentityPhoto = src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"].getSchoolIdentityPhoto(school);
            this.countAlumni();
          }
        }]);

        return SchoolCardComponent;
      }();

      SchoolCardComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_5__["AlumniService"]
        }];
      };

      SchoolCardComponent.propDecorators = {
        school: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        School: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      SchoolCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-school-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./school-card.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-card/school-card.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./school-card.component.scss */
        "./src/app/widgets/school-card/school-card.component.scss"))["default"]]
      })], SchoolCardComponent);
      /***/
    },

    /***/
    "./src/app/widgets/school-join/school-join.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/school-join/school-join.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsSchoolJoinSchoolJoinComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvc2Nob29sLWpvaW4vc2Nob29sLWpvaW4uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/school-join/school-join.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/widgets/school-join/school-join.component.ts ***!
      \**************************************************************/

    /*! exports provided: SchoolJoinComponent */

    /***/
    function srcAppWidgetsSchoolJoinSchoolJoinComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolJoinComponent", function () {
        return SchoolJoinComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/providers/widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");
      /* harmony import */


      var _models_degree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../models/degree */
      "./src/app/models/degree.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_models_alumni__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/alumni */
      "./src/app/models/alumni.ts");
      /* harmony import */


      var src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/model-service/school.service */
      "./src/app/shared/services/model-service/school.service.ts");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/model-service/alumni.service */
      "./src/app/shared/services/model-service/alumni.service.ts");

      var SchoolJoinComponent = /*#__PURE__*/function () {
        function SchoolJoinComponent(router, schoolService, fb, signals, alumniService, toaster, userService) {
          _classCallCheck(this, SchoolJoinComponent);

          this.router = router;
          this.schoolService = schoolService;
          this.fb = fb;
          this.signals = signals;
          this.alumniService = alumniService;
          this.toaster = toaster;
          this.userService = userService;
          this.previousPage = '';
          this.alumnus = new src_app_models_alumni__WEBPACK_IMPORTED_MODULE_7__["Alumni"]();
          this.alumniCount = 0;
          this.sub$ = [];
          this.degreeTypes = _models_degree__WEBPACK_IMPORTED_MODULE_3__["DEGREE_TYPES"];
        }

        _createClass(SchoolJoinComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"].destroySubscription(this.sub$);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createAlumnusForm();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this111 = this;

            this.userService.getUserLocal().then(function (user) {
              _this111.user = user;
              console.log(_this111.user);
            });
            this.schoolService.getSchoolLocal().then(function (school) {
              _this111.school = school;
              console.log(school);
              _this111.identityPhoto = src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_8__["SchoolService"].getSchoolIdentityPhoto(_this111.school);
            });
          }
        }, {
          key: "createAlumnusForm",
          value: function createAlumnusForm() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

            this.alumnus.degree = this.alumnus.degree ? this.alumnus.degree : new _models_degree__WEBPACK_IMPORTED_MODULE_3__["Degree"]();
            this.aluForm = this.fb.group({
              yearStarted: [this.alumnus.yearStarted, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              yearCompleted: [this.alumnus.yearCompleted, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              schoolIndexNumber: [(_a = this.alumnus) === null || _a === void 0 ? void 0 : _a.schoolIndexNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)]],
              degreeName: [(_c = (_b = this.alumnus) === null || _b === void 0 ? void 0 : _b.degree) === null || _c === void 0 ? void 0 : _c.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)]],
              degreeType: [(_e = (_d = this.alumnus) === null || _d === void 0 ? void 0 : _d.degree) === null || _e === void 0 ? void 0 : _e.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)]],
              degreeProgramme: [(_g = (_f = this.alumnus) === null || _f === void 0 ? void 0 : _f.degree) === null || _g === void 0 ? void 0 : _g.programme, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)]],
              degreeCgpa: [((_j = (_h = this.alumnus) === null || _h === void 0 ? void 0 : _h.degree) === null || _j === void 0 ? void 0 : _j.cgpa) == 0 ? '' : (_l = (_k = this.alumnus) === null || _k === void 0 ? void 0 : _k.degree) === null || _l === void 0 ? void 0 : _l.cgpa, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(5)]]
            });
          }
        }, {
          key: "findSchool",
          value: function findSchool() {
            this.router.navigateByUrl('/links/schools-search');
          }
        }, {
          key: "getProfilePhotoUrl",
          value: function getProfilePhotoUrl() {
            return src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_8__["SchoolService"].getSchoolProfilePhotoUrl(this.identityPhoto);
          }
        }, {
          key: "closeModals",
          value: function closeModals() {
            this.signals.announceCloseModal('join-school');
          }
        }, {
          key: "save",
          value: function save() {
            var _this112 = this;

            var _a, _b;

            var info = this.alumnus.info;
            info.userId = (_a = this.user) === null || _a === void 0 ? void 0 : _a.id;
            info.yearStarted = this.aluForm.value.yearStarted ? this.aluForm.value.yearStarted : info.yearStarted;
            info.schoolId = (_b = this.school) === null || _b === void 0 ? void 0 : _b.id; // range picker assigned to year started

            info.yearCompleted = this.aluForm.value.yearCompleted ? this.aluForm.value.yearCompleted : info.yearCompleted;
            info.schoolIndexNumber = this.aluForm.value.schoolIndexNumber ? this.aluForm.value.schoolIndexNumber : info.schoolIndexNumber;

            try {
              info.userId = parseInt('' + info.userId, 10);
              info.schoolId = parseInt('' + info.schoolId, 10);
            } catch (e) {}

            var degree = this.alumnus.degree || new _models_degree__WEBPACK_IMPORTED_MODULE_3__["Degree"]();
            degree.cgpa = this.aluForm.value.degreeCgpa || 0;
            degree.name = this.aluForm.value.degreeName || '';
            degree.type = this.aluForm.value.degreeType || '';
            degree.programme = this.aluForm.value.degreeProgramme || '';

            try {
              degree.cgpa = parseInt('' + degree.cgpa, 10);
            } catch (e) {}

            console.log(degree);
            console.log(info);

            if (!(info.userId && info.yearStarted && info.schoolId && info.yearCompleted)) {
              this.toaster.toast('Please provide for all required fields');
              return;
            }

            this.alumniService.createOrUpdateAlumni(new src_app_models_alumni__WEBPACK_IMPORTED_MODULE_7__["Alumni"](info).info).subscribe(function (alumnus) {
              var _a;

              console.log(alumnus);

              if (alumnus) {
                _this112.alumnus.info = alumnus;

                if (degree.name || degree.type || degree.programme) {
                  // create the degree object
                  _this112.alumniService.createOrUpdateDegree(_this112.alumnus.id, degree).subscribe(function (deg) {
                    var _a;

                    _this112.toaster.toast('You are now alumni of ' + ((_a = _this112.school) === null || _a === void 0 ? void 0 : _a.name));

                    _this112.closeModals();

                    _this112.alumnus.degree = deg;
                  });
                } else {
                  _this112.toaster.toast('You are now alumni of ' + ((_a = _this112.school) === null || _a === void 0 ? void 0 : _a.name));

                  _this112.closeModals();
                } // trigger User schools reload


                _this112.signals.announceUserSchoolsReload();
              }
            }, function (error) {
              _this112.toaster.toast(error.message, error.title);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.closeModals();
          }
        }, {
          key: "setAlumni",
          value: function setAlumni() {
            var _this113 = this;

            if (this.aluForm.value.userId && this.aluForm.value.schoolId) {
              this.alumniService.getAlumni(null, this.aluForm.value.userId, this.aluForm.value.schoolId).subscribe(function (alus) {
                if ((alus === null || alus === void 0 ? void 0 : alus.length) > 0) {
                  _this113.alumnus = new src_app_models_alumni__WEBPACK_IMPORTED_MODULE_7__["Alumni"](alus[0]);
                  console.log(_this113.alumnus);

                  _this113.createAlumnusForm();
                } else {
                  var aluPartial = {
                    userId: _this113.aluForm.value.userId,
                    schoolId: _this113.aluForm.value.schoolId
                  };
                  _this113.alumnus = new src_app_models_alumni__WEBPACK_IMPORTED_MODULE_7__["Alumni"](aluPartial);

                  _this113.createAlumnusForm();
                }
              });
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.alumnus = new src_app_models_alumni__WEBPACK_IMPORTED_MODULE_7__["Alumni"]();
            this.createAlumnusForm();
          }
        }]);

        return SchoolJoinComponent;
      }();

      SchoolJoinComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_8__["SchoolService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_9__["MySignals"]
        }, {
          type: src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_11__["AlumniService"]
        }, {
          type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      };

      SchoolJoinComponent.propDecorators = {
        alumniCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      SchoolJoinComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-school-join',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./school-join.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-join/school-join.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./school-join.component.scss */
        "./src/app/widgets/school-join/school-join.component.scss"))["default"]]
      })], SchoolJoinComponent);
      /***/
    },

    /***/
    "./src/app/widgets/school-list-item/school-list-item.component.scss":
    /*!**************************************************************************!*\
      !*** ./src/app/widgets/school-list-item/school-list-item.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsSchoolListItemSchoolListItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvc2Nob29sLWxpc3QtaXRlbS9zY2hvb2wtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/widgets/school-list-item/school-list-item.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/school-list-item/school-list-item.component.ts ***!
      \************************************************************************/

    /*! exports provided: SchoolListItemComponent */

    /***/
    function srcAppWidgetsSchoolListItemSchoolListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolListItemComponent", function () {
        return SchoolListItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var _shared_services_my_signals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/model-service/alumni.service */
      "./src/app/shared/services/model-service/alumni.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/model-service/school.service */
      "./src/app/shared/services/model-service/school.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SchoolListItemComponent = /*#__PURE__*/function () {
        function SchoolListItemComponent(alert, alumniService, signals, schoolService, router) {
          _classCallCheck(this, SchoolListItemComponent);

          this.alert = alert;
          this.alumniService = alumniService;
          this.signals = signals;
          this.schoolService = schoolService;
          this.router = router;
          this.isEdit = false;
          this.sub$ = [];
          this.totalAlumni = 0;
        }

        _createClass(SchoolListItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this114 = this;

            this.sub$.push(this.signals.reloadUserSchoolsSource$.subscribe(function (_) {
              _this114.countAlumni();
            }));
            this.countAlumni();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].destroySubscription(this.sub$);
          }
        }, {
          key: "leaveSchool",
          value: function leaveSchool(school) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee73() {
              var _this115 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee73$(_context73) {
                while (1) {
                  switch (_context73.prev = _context73.next) {
                    case 0:
                      _context73.next = 2;
                      return this.alert.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: 'Are you sure to leave school?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            var _a; // delete alumni object from the database


                            _this115.sub$.push(_this115.alumniService.deleteAlumni((_a = _this115.user) === null || _a === void 0 ? void 0 : _a.id, school === null || school === void 0 ? void 0 : school.id).subscribe(function (_) {
                              _this115.signals.announceUserSchoolsReload();
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context73.sent;
                      _context73.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context73.stop();
                  }
                }
              }, _callee73, this);
            }));
          }
        }, {
          key: "view",
          value: function view(school) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee74() {
              return regeneratorRuntime.wrap(function _callee74$(_context74) {
                while (1) {
                  switch (_context74.prev = _context74.next) {
                    case 0:
                      _context74.next = 2;
                      return this.schoolService.setSchoolLocal(school);

                    case 2:
                      if (!_context74.sent) {
                        _context74.next = 4;
                        break;
                      }

                      // navigate to join school page
                      this.router.navigateByUrl('/links/school-profile');

                    case 4:
                    case "end":
                      return _context74.stop();
                  }
                }
              }, _callee74, this);
            }));
          }
        }, {
          key: "countAlumni",
          value: function countAlumni() {
            var _this116 = this;

            var _a;

            this.sub$.push(this.alumniService.countAlumni((_a = this.school) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (count) {
              _this116.totalAlumni = count;
            }));
          }
        }]);

        return SchoolListItemComponent;
      }();

      SchoolListItemComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_5__["AlumniService"]
        }, {
          type: _shared_services_my_signals__WEBPACK_IMPORTED_MODULE_2__["MySignals"]
        }, {
          type: src_app_shared_services_model_service_school_service__WEBPACK_IMPORTED_MODULE_6__["SchoolService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      SchoolListItemComponent.propDecorators = {
        isEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        school: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        profilePhotoUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SchoolListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-school-list-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./school-list-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/school-list-item/school-list-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./school-list-item.component.scss */
        "./src/app/widgets/school-list-item/school-list-item.component.scss"))["default"]]
      })], SchoolListItemComponent);
      /***/
    },

    /***/
    "./src/app/widgets/trending/trending.component.scss":
    /*!**********************************************************!*\
      !*** ./src/app/widgets/trending/trending.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsTrendingTrendingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".swiper-slide {\n  display: block;\n}\n\nion-slide ion-card {\n  height: 18vh;\n  box-shadow: 0px 0px 6px -5px black;\n  margin-left: 0;\n  margin-right: 0;\n  padding: 0;\n}\n\nion-slide ion-card ion-item {\n  margin-top: 6vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy90cmVuZGluZy90cmVuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGNBQUE7QUFISjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUxSOztBQU9RO0VBQ1EsZUFBQTtBQUxoQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvdHJlbmRpbmcvdHJlbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICAgIC8vIGhlaWdodDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG5pb24tc2xpZGV7XHJcbiAgICAvLyB3aWR0aDogNjB2dyAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHZoO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IC01cHggYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcblxyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnZoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/trending/trending.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/widgets/trending/trending.component.ts ***!
      \********************************************************/

    /*! exports provided: TrendingComponent */

    /***/
    function srcAppWidgetsTrendingTrendingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrendingComponent", function () {
        return TrendingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TrendingComponent = /*#__PURE__*/function () {
        function TrendingComponent() {
          _classCallCheck(this, TrendingComponent);

          this.slideOptions = {
            slidesPerView: 2,
            coverflowEffect: {
              rotate: 40,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: true
            },
            on: {
              beforeInit: function beforeInit() {
                var swiper = this;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
              },
              setTranslate: function setTranslate() {
                var swiper = this;
                var swiperWidth = swiper.width,
                    swiperHeight = swiper.height,
                    slides = swiper.slides,
                    $wrapperEl = swiper.$wrapperEl,
                    slidesSizesGrid = swiper.slidesSizesGrid,
                    $ = swiper.$;
                var params = swiper.params.coverflowEffect;
                var isHorizontal = swiper.isHorizontal();
                var transform$$1 = swiper.translate;
                var center = isHorizontal ? -transform$$1 + swiperWidth / 2 : -transform$$1 + swiperHeight / 2;
                var rotate = isHorizontal ? params.rotate : -params.rotate;
                var translate = params.depth; // Each slide offset from center

                for (var i = 0, length = slides.length; i < length; i += 1) {
                  var $slideEl = slides.eq(i);
                  var slideSize = slidesSizesGrid[i];
                  var slideOffset = $slideEl[0].swiperSlideOffset;
                  var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
                  var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                  var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                  var translateZ = -translate * Math.abs(offsetMultiplier);
                  var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
                  var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

                  if (Math.abs(translateX) < 0.001) {
                    translateX = 0;
                  }

                  if (Math.abs(translateY) < 0.001) {
                    translateY = 0;
                  }

                  if (Math.abs(translateZ) < 0.001) {
                    translateZ = 0;
                  }

                  if (Math.abs(rotateY) < 0.001) {
                    rotateY = 0;
                  }

                  if (Math.abs(rotateX) < 0.001) {
                    rotateX = 0;
                  }

                  var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
                  $slideEl.transform(slideTransform);
                  $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                  if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if ($shadowBeforeEl.length === 0) {
                      $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                      $slideEl.append($shadowBeforeEl);
                    }

                    if ($shadowAfterEl.length === 0) {
                      $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                      $slideEl.append($shadowAfterEl);
                    }

                    if ($shadowBeforeEl.length) {
                      $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    }

                    if ($shadowAfterEl.length) {
                      $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                    }
                  }
                } // Set correct perspective for IE10


                if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                  var ws = $wrapperEl[0].style;
                  ws.perspectiveOrigin = "".concat(center, "px 50%");
                }
              },
              setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              }
            }
          };
          this.slider = {
            isBeginningSlide: true,
            isEndSlide: false
          };
        }

        _createClass(TrendingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // Move to Next slide

        }, {
          key: "slideNext",
          value: function slideNext(object, slideView) {
            var _this117 = this;

            slideView.slideNext(500).then(function () {
              _this117.checkIfNavDisabled(object, slideView);
            });
          } // Move to previous slide

        }, {
          key: "slidePrev",
          value: function slidePrev(object, slideView) {
            var _this118 = this;

            slideView.slidePrev(500).then(function () {
              _this118.checkIfNavDisabled(object, slideView);
            });
          } // Method called when slide is changed by drag or navigation

        }, {
          key: "SlideDidChange",
          value: function SlideDidChange(object, slideView) {
            this.checkIfNavDisabled(object, slideView);
          } // Call methods to check if slide is first or last to enable disbale navigation

        }, {
          key: "checkIfNavDisabled",
          value: function checkIfNavDisabled(object, slideView) {
            this.checkisBeginning(object, slideView);
            this.checkisEnd(object, slideView);
          }
        }, {
          key: "checkisBeginning",
          value: function checkisBeginning(object, slideView) {
            slideView.isBeginning().then(function (istrue) {
              object.isBeginningSlide = istrue;
            });
          }
        }, {
          key: "checkisEnd",
          value: function checkisEnd(object, slideView) {
            slideView.isEnd().then(function (istrue) {
              object.isEndSlide = istrue;
            });
          }
        }]);

        return TrendingComponent;
      }();

      TrendingComponent.ctorParameters = function () {
        return [];
      };

      TrendingComponent.propDecorators = {
        slideWithNav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slideWithNav', {
            "static": false
          }]
        }]
      };
      TrendingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trending',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./trending.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/trending/trending.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./trending.component.scss */
        "./src/app/widgets/trending/trending.component.scss"))["default"]]
      })], TrendingComponent);
      /***/
    },

    /***/
    "./src/app/widgets/user-card/user-card.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/widgets/user-card/user-card.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsUserCardUserCardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avatar-group .avatar-group-img {\n  border-radius: 50% !important;\n  width: 30px !important;\n  height: 30px !important;\n  border: solid white 2px;\n  box-shadow: 0px -18px 0px -44px;\n}\n.avatar-group .avatar-count-icon {\n  background: var(--ion-color-secondary);\n  font-size: 0.7em;\n  font-weight: bold;\n  font-family: \"poppins-bold\";\n  padding-right: 6px;\n  padding-top: 5px;\n}\n.tags {\n  padding: 0;\n  list-style: none;\n}\n.tags li {\n  display: inline;\n}\n.info {\n  margin-top: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy91c2VyLWNhcmQvdXNlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQURSO0FBR0k7RUFDSSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUtBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNJLGVBQUE7QUFGUjtBQU9BO0VBQ0ksaUJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYXZhdGFyLWdyb3VwIHtcclxuICAgIC5hdmF0YXItZ3JvdXAtaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAtMThweCAwcHggLTQ0cHg7XHJcbiAgICB9XHJcbiAgICAuYXZhdGFyLWNvdW50LWljb257XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInBvcHBpbnMtYm9sZFwiO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFncyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIFxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/widgets/user-card/user-card.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/widgets/user-card/user-card.component.ts ***!
      \**********************************************************/

    /*! exports provided: UserCardComponent */

    /***/
    function srcAppWidgetsUserCardUserCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCardComponent", function () {
        return UserCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/providers/utility.service */
      "./src/app/shared/services/providers/utility.service.ts");
      /* harmony import */


      var src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/model-service/alumni.service */
      "./src/app/shared/services/model-service/alumni.service.ts");

      var UserCardComponent = /*#__PURE__*/function () {
        function UserCardComponent(router, alumniService) {
          _classCallCheck(this, UserCardComponent);

          this.router = router;
          this.alumniService = alumniService;
          this.totalAlumni = 0;
          this.sub$ = [];
        }

        _createClass(UserCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            src_app_shared_services_providers_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"].destroySubscription(this.sub$);
          }
        }, {
          key: "goToSchool",
          value: function goToSchool() {
            this.router.navigateByUrl('/links/school-profile');
          }
        }, {
          key: "goToSchoolPage",
          value: function goToSchoolPage() {
            this.router.navigateByUrl('/school-profile');
          }
        }, {
          key: "getProfilePhotoUrl",
          value: function getProfilePhotoUrl() {
            return src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUserProfilePhotoUrl(this.identityPhoto);
          }
        }, {
          key: "getCoverPhotoUrl",
          value: function getCoverPhotoUrl() {
            return src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUserCoverPhotoUrl(this.identityPhoto);
          }
        }, {
          key: "User",
          set: function set(user) {
            this.user = user;
            this.identityPhoto = src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"].getUserIdentityPhoto(user);
            console.log(user);
          }
        }, {
          key: "Alumni",
          set: function set(alu) {
            this.alumni = alu;
            console.log(alu);
          }
        }]);

        return UserCardComponent;
      }();

      UserCardComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_shared_services_model_service_alumni_service__WEBPACK_IMPORTED_MODULE_5__["AlumniService"]
        }];
      };

      UserCardComponent.propDecorators = {
        User: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        Alumni: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      UserCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-card.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/user-card/user-card.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-card.component.scss */
        "./src/app/widgets/user-card/user-card.component.scss"))["default"]]
      })], UserCardComponent);
      /***/
    },

    /***/
    "./src/app/widgets/user-list-item/user-list-item.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/user-list-item/user-list-item.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsUserListItemUserListItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvdXNlci1saXN0LWl0ZW0vdXNlci1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/user-list-item/user-list-item.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/widgets/user-list-item/user-list-item.component.ts ***!
      \********************************************************************/

    /*! exports provided: UserListItemComponent */

    /***/
    function srcAppWidgetsUserListItemUserListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListItemComponent", function () {
        return UserListItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");
      /* harmony import */


      var src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/my-signals */
      "./src/app/shared/services/my-signals.ts");

      var UserListItemComponent = /*#__PURE__*/function () {
        function UserListItemComponent(alert, router, signals, userService) {
          _classCallCheck(this, UserListItemComponent);

          this.alert = alert;
          this.router = router;
          this.signals = signals;
          this.userService = userService;
          this.isEdit = false;
          this.sub$ = [];
        }

        _createClass(UserListItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "view",
          value: function view() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee75() {
              return regeneratorRuntime.wrap(function _callee75$(_context75) {
                while (1) {
                  switch (_context75.prev = _context75.next) {
                    case 0:
                      console.log(this.user);
                      _context75.next = 3;
                      return this.userService.setSelectedUserLocal(this.user);

                    case 3:
                      if (!_context75.sent) {
                        _context75.next = 6;
                        break;
                      }

                      // navigate to join school page
                      this.router.navigateByUrl('/links/profile');
                      this.signals.announceSelectedUserChange();

                    case 6:
                    case "end":
                      return _context75.stop();
                  }
                }
              }, _callee75, this);
            }));
          }
        }]);

        return UserListItemComponent;
      }();

      UserListItemComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_shared_services_my_signals__WEBPACK_IMPORTED_MODULE_5__["MySignals"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      };

      UserListItemComponent.propDecorators = {
        isEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        profilePhotoUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      UserListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-list-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/user-list-item/user-list-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-list-item.component.scss */
        "./src/app/widgets/user-list-item/user-list-item.component.scss"))["default"]]
      })], UserListItemComponent);
      /***/
    },

    /***/
    "./src/app/widgets/video-player/video-player.component.scss":
    /*!******************************************************************!*\
      !*** ./src/app/widgets/video-player/video-player.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsVideoPlayerVideoPlayerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".video-player-wrapper {\n  max-width: 800px;\n  text-align: center;\n  margin: 0 auto;\n  max-height: 500px;\n}\n\n.player-list {\n  margin: 0;\n  padding: 0;\n}\n\n.player-list li {\n  list-style: none;\n  padding: 15px 35px;\n  display: block;\n  background: #cccc;\n  cursor: pointer;\n  text-align: left;\n  margin-bottom: 1px;\n}\n\nli.selected {\n  background: #03A9F4 !important;\n}\n\nion-slide {\n  height: 21vh;\n  margin: 7px;\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0csU0FBQTtFQUNBLFVBQUE7QUFDSDs7QUFFQTtFQUNHLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNIOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1wbGF5ZXItd3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnBsYXllci1saXN0IHtcclxuICAgbWFyZ2luOiAwO1xyXG4gICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucGxheWVyLWxpc3QgbGkge1xyXG4gICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICBwYWRkaW5nOiAxNXB4IDM1cHg7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBiYWNrZ3JvdW5kOiAjY2NjYztcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbmxpLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICMwM0E5RjQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNsaWRle1xyXG4gICAgaGVpZ2h0OiAyMXZoO1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/widgets/video-player/video-player.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/video-player/video-player.component.ts ***!
      \****************************************************************/

    /*! exports provided: VideoPlayerComponent */

    /***/
    function srcAppWidgetsVideoPlayerVideoPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function () {
        return VideoPlayerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/config */
      "./src/app/shared/config.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_models_my_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/my-media */
      "./src/app/models/my-media.ts");

      var VideoPlayerComponent = /*#__PURE__*/function () {
        function VideoPlayerComponent(cdref) {
          _classCallCheck(this, VideoPlayerComponent);

          this.cdref = cdref;
          this.items = [];
          this.itemPhotos = [];
          this.mediaType = 1;
          this.activeIndex = 0;
          this.currentVideo = this.items[this.activeIndex];
          this.slideOpts = {
            initialSlide: 1,
            slidesPerView: 2.5,
            speed: 400
          };
        }

        _createClass(VideoPlayerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getThumbnail",
          value: function getThumbnail(obj) {
            console.log(this.mediaType);

            if (this.mediaType === src_app_models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].VIDEO) {
              return src_app_shared_config__WEBPACK_IMPORTED_MODULE_1__["DOWNLOAD_CONTAINER"] + obj.posterUrl;
            } else if (this.mediaType === src_app_models_my_media__WEBPACK_IMPORTED_MODULE_3__["MediaType"].AUDIO) {
              return src_app_shared_config__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_AUDIO_ICON"];
            }

            return '';
          }
        }, {
          key: "videoPlayerInit",
          value: function videoPlayerInit(player) {
            this.player = player;
            console.log(this.player);
            this.initVdo(); // this.player.getDefaultMedia().subscriptions.loadedMetaplayer.subscribe(this.initVdo.bind(this));
            // this.player.subscriptions.pause.subscribe(this.initVdo.bind(this));

            this.player.subscriptions.ended.subscribe(this.nextVideo.bind(this));
          }
        }, {
          key: "nextVideo",
          value: function nextVideo() {
            this.activeIndex++;

            if (this.activeIndex === this.items.length) {
              this.activeIndex = 0;
            }

            this.currentVideo = this.items[this.activeIndex];
            this.cdref.detectChanges();
          }
        }, {
          key: "initVdo",
          value: function initVdo() {
            var _a;

            if (((_a = this.Items) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              this.activeIndex = 0;
              this.currentVideo = this.items[this.activeIndex];
              this.cdref.detectChanges();
            }

            console.log(this.currentVideo);
            this.player.play();
          }
        }, {
          key: "startPlaylistVdo",
          value: function startPlaylistVdo(index) {
            this.activeIndex = index;
            this.currentVideo = this.items[this.activeIndex];
            this.cdref.detectChanges();
          }
        }, {
          key: "Items",
          set: function set(items) {
            var _this119 = this;

            // console.log(items);
            items.forEach(function (obj) {
              var _a;

              _this119.items.push({
                name: (_a = obj === null || obj === void 0 ? void 0 : obj.description) !== null && _a !== void 0 ? _a : obj.fileName,
                src: src_app_shared_config__WEBPACK_IMPORTED_MODULE_1__["DOWNLOAD_CONTAINER"] + obj.fileName,
                type: 'video/mp4'
              });

              _this119.itemPhotos.push(_this119.getThumbnail(obj));
            });
          },
          get: function get() {
            return this.items;
          }
        }]);

        return VideoPlayerComponent;
      }();

      VideoPlayerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      };

      VideoPlayerComponent.propDecorators = {
        mediaType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        Items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      VideoPlayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-video-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./video-player.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/video-player/video-player.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./video-player.component.scss */
        "./src/app/widgets/video-player/video-player.component.scss"))["default"]]
      })], VideoPlayerComponent);
      /***/
    },

    /***/
    "./src/app/widgets/video-thumbnail/video-thumbnail.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/video-thumbnail/video-thumbnail.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWidgetsVideoThumbnailVideoThumbnailComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".play-button {\n  height: 45px;\n  width: 45px;\n  box-shadow: none;\n  margin-left: 33%;\n  --border-style: solid;\n  --border-width: 0px;\n  --background-hover-opacity: 50%;\n  --background-hover: red;\n  --background: #ffffffa6;\n  --box-shadow: none;\n  --color: light;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy92aWRlby10aHVtYm5haWwvdmlkZW8tdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL3ZpZGVvLXRodW1ibmFpbC92aWRlby10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheS1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogNTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZWQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmZhNjtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0tY29sb3I6IGxpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/widgets/video-thumbnail/video-thumbnail.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/video-thumbnail/video-thumbnail.component.ts ***!
      \**********************************************************************/

    /*! exports provided: VideoThumbnailComponent */

    /***/
    function srcAppWidgetsVideoThumbnailVideoThumbnailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoThumbnailComponent", function () {
        return VideoThumbnailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      "./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_shared_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/config */
      "./src/app/shared/config.ts");

      var VideoThumbnailComponent = /*#__PURE__*/function () {
        function VideoThumbnailComponent( // private gestureCtrl: GestureController,
        previewAnyFile) {
          _classCallCheck(this, VideoThumbnailComponent);

          this.previewAnyFile = previewAnyFile;
          this.location = 'cloud'; // cloud || local

          this.selected = false;
          this.count = 0; // private lastOnStart = 0; // double click start count
          // private DOUBLE_CLICK_THRESHOLD = 600;

          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.isSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.downloadUrlRoot = src_app_shared_config__WEBPACK_IMPORTED_MODULE_3__["DOWNLOAD_CONTAINER"];
        }

        _createClass(VideoThumbnailComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// setTimeout(() => {
            //   const gesture = this.gestureCtrl.create({
            //     el: this.videoThumbnail.nativeElement,
            //     threshold: 0,
            //     gestureName: 'double-click',
            //     onStart: () => { this.onDoubleClickVideoThumbnail(); }
            //   });
            //   console.log(gesture);
            //   gesture.enable();
            // }, 2000);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {}
        }, {
          key: "select",
          value: function select() {
            this.selected = !this.selected;
            this.isSelected.emit(this.thumb);
          }
        }, {
          key: "onDoubleClickVideoThumbnail",
          value: function onDoubleClickVideoThumbnail() {
            // const now = Date.now();
            // if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
            //   this.preview();
            //   this.lastOnStart = 0;
            // } else {
            //   this.lastOnStart = now;
            // }
            this.preview();
          }
        }, {
          key: "preview",
          value: function preview() {
            var path = '';
            console.log(this.location);

            try {
              if (this.location == 'cloud') {
                console.log('cloud');
                path = this.downloadUrlRoot + this.thumb.fileName;
              } else if (this.location == 'local') {
                console.log('local');
                path = this.thumb.nativeURL;
                path = path.replace('file//', '');
              } else {
                console.log('Unknown location');
              }

              console.log(JSON.stringify(this.thumb));
              this.previewAnyFile.preview(path).then(function (res) {
                return console.log(JSON.stringify(res));
              })["catch"](function (error) {
                return console.error(JSON.stringify(error));
              });
            } catch (e) {
              console.log(JSON.stringify(e));
            }
          }
        }, {
          key: "getThumbnailUrl",
          value: function getThumbnailUrl() {
            if (this.location == 'cloud') {
              return this.downloadUrlRoot + this.thumb.thumbnailUrl;
            } else if (this.location == 'local') {
              return this.thumb.posterResolvedURL;
            }
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            this["delete"].emit(true);
          }
        }]);

        return VideoThumbnailComponent;
      }();

      VideoThumbnailComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_2__["PreviewAnyFile"]
        }];
      };

      VideoThumbnailComponent.propDecorators = {
        location: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        videoThumbnail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['videoThumbnail']
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      VideoThumbnailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-thumbnail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./video-thumbnail.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets/video-thumbnail/video-thumbnail.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./video-thumbnail.component.scss */
        "./src/app/widgets/video-thumbnail/video-thumbnail.component.scss"))["default"]]
      })], VideoThumbnailComponent);
      /***/
    },

    /***/
    "./src/app/widgets/widgets.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/widgets/widgets.module.ts ***!
      \*******************************************/

    /*! exports provided: WidgetsModule */

    /***/
    function srcAppWidgetsWidgetsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetsModule", function () {
        return WidgetsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-list-item/user-list-item.component */
      "./src/app/widgets/user-list-item/user-list-item.component.ts");
      /* harmony import */


      var _school_list_item_school_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./school-list-item/school-list-item.component */
      "./src/app/widgets/school-list-item/school-list-item.component.ts");
      /* harmony import */


      var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-card/user-card.component */
      "./src/app/widgets/user-card/user-card.component.ts");
      /* harmony import */


      var _school_card_school_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./school-card/school-card.component */
      "./src/app/widgets/school-card/school-card.component.ts");
      /* harmony import */


      var _my_share_my_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-share/my-share.component */
      "./src/app/widgets/my-share/my-share.component.ts");
      /* harmony import */


      var _like_like_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./like/like.component */
      "./src/app/widgets/like/like.component.ts");
      /* harmony import */


      var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./comments/comments.component */
      "./src/app/widgets/comments/comments.component.ts");
      /* harmony import */


      var _school_join_school_join_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./school-join/school-join.component */
      "./src/app/widgets/school-join/school-join.component.ts");
      /* harmony import */


      var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../shared/pipes/pipes.module */
      "./src/app/shared/pipes/pipes.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./feed-filter-popover/feed-filter-popover.component */
      "./src/app/widgets/feed-filter-popover/feed-filter-popover.component.ts");
      /* harmony import */


      var _post_widget3_post_widget3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./post-widget3/post-widget3.component */
      "./src/app/widgets/post-widget3/post-widget3.component.ts");
      /* harmony import */


      var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./image-gallery/image-gallery.component */
      "./src/app/widgets/image-gallery/image-gallery.component.ts");
      /* harmony import */


      var _popular_schools_popular_schools_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./popular-schools/popular-schools.component */
      "./src/app/widgets/popular-schools/popular-schools.component.ts");
      /* harmony import */


      var _trending_trending_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./trending/trending.component */
      "./src/app/widgets/trending/trending.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _post_widget1_post_widget1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./post-widget1/post-widget1.component */
      "./src/app/widgets/post-widget1/post-widget1.component.ts");
      /* harmony import */


      var _post_widget2_post_widget2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./post-widget2/post-widget2.component */
      "./src/app/widgets/post-widget2/post-widget2.component.ts");
      /* harmony import */


      var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @videogular/ngx-videogular/buffering */
      "./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-buffering.js");
      /* harmony import */


      var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @videogular/ngx-videogular/controls */
      "./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-controls.js");
      /* harmony import */


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      "./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-core.js");
      /* harmony import */


      var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @videogular/ngx-videogular/overlay-play */
      "./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-overlay-play.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/google-maps */
      "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
      /* harmony import */


      var _audio_recorder_audio_recorder_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./audio-recorder/audio-recorder.component */
      "./src/app/widgets/audio-recorder/audio-recorder.component.ts");
      /* harmony import */


      var _audio_thumbnail_audio_thumbnail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./audio-thumbnail/audio-thumbnail.component */
      "./src/app/widgets/audio-thumbnail/audio-thumbnail.component.ts");
      /* harmony import */


      var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./create-post/create-post.component */
      "./src/app/widgets/create-post/create-post.component.ts");
      /* harmony import */


      var _map_map_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./map/map.component */
      "./src/app/widgets/map/map.component.ts");
      /* harmony import */


      var _my_audio_picker_my_audio_picker_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./my-audio-picker/my-audio-picker.component */
      "./src/app/widgets/my-audio-picker/my-audio-picker.component.ts");
      /* harmony import */


      var _my_photo_picker_my_photo_picker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./my-photo-picker/my-photo-picker.component */
      "./src/app/widgets/my-photo-picker/my-photo-picker.component.ts");
      /* harmony import */


      var _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./my-slider/my-slider.component */
      "./src/app/widgets/my-slider/my-slider.component.ts");
      /* harmony import */


      var _my_video_picker_my_video_picker_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./my-video-picker/my-video-picker.component */
      "./src/app/widgets/my-video-picker/my-video-picker.component.ts");
      /* harmony import */


      var _photo_thumbnail_photo_thumbnail_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./photo-thumbnail/photo-thumbnail.component */
      "./src/app/widgets/photo-thumbnail/photo-thumbnail.component.ts");
      /* harmony import */


      var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./video-player/video-player.component */
      "./src/app/widgets/video-player/video-player.component.ts");
      /* harmony import */


      var _video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./video-thumbnail/video-thumbnail.component */
      "./src/app/widgets/video-thumbnail/video-thumbnail.component.ts");
      /* harmony import */


      var _shared_directives_image_background_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../shared/directives/image-background.directive */
      "./src/app/shared/directives/image-background.directive.ts");
      /* harmony import */


      var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @ctrl/ngx-emoji-mart */
      "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm2015/ctrl-ngx-emoji-mart.js");
      /* harmony import */


      var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @ctrl/ngx-emoji-mart/ngx-emoji */
      "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm2015/ctrl-ngx-emoji-mart-ngx-emoji.js");
      /* harmony import */


      var _emoji_modal_emoji_modal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./emoji-modal/emoji-modal.component */
      "./src/app/widgets/emoji-modal/emoji-modal.component.ts");
      /* harmony import */


      var _shared_directives_watch_element_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ../shared/directives/watch-element.directive */
      "./src/app/shared/directives/watch-element.directive.ts");
      /* harmony import */


      var _follow_follow_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./follow/follow.component */
      "./src/app/widgets/follow/follow.component.ts");

      var WidgetsModule = function WidgetsModule() {
        _classCallCheck(this, WidgetsModule);
      };

      WidgetsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonicModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_24__["VgCoreModule"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_23__["VgControlsModule"], _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_25__["VgOverlayPlayModule"], _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_22__["VgBufferingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyBfKFrI5-iEUhsZyxjc2B56RNmoQoAeBmk'
        }), _angular_google_maps__WEBPACK_IMPORTED_MODULE_27__["GoogleMapsModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_40__["PickerModule"], _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_41__["EmojiModule"]],
        declarations: [_post_widget1_post_widget1_component__WEBPACK_IMPORTED_MODULE_20__["PostWidget1Component"], _post_widget2_post_widget2_component__WEBPACK_IMPORTED_MODULE_21__["PostWidget2Component"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_15__["TrendingComponent"], _popular_schools_popular_schools_component__WEBPACK_IMPORTED_MODULE_14__["PopularSchoolsComponent"], _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_13__["ImageGalleryComponent"], _post_widget3_post_widget3_component__WEBPACK_IMPORTED_MODULE_12__["PostWidget3Component"], _feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_11__["FeedFilterPopoverComponent"], _my_photo_picker_my_photo_picker_component__WEBPACK_IMPORTED_MODULE_33__["MyPhotoPickerComponent"], _my_audio_picker_my_audio_picker_component__WEBPACK_IMPORTED_MODULE_32__["MyAudioPickerComponent"], _my_video_picker_my_video_picker_component__WEBPACK_IMPORTED_MODULE_35__["MyVideoPickerComponent"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_30__["CreatePostComponent"], _photo_thumbnail_photo_thumbnail_component__WEBPACK_IMPORTED_MODULE_36__["PhotoThumbnailComponent"], _video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_38__["VideoThumbnailComponent"], _audio_recorder_audio_recorder_component__WEBPACK_IMPORTED_MODULE_28__["AudioRecorderComponent"], _audio_thumbnail_audio_thumbnail_component__WEBPACK_IMPORTED_MODULE_29__["AudioThumbnailComponent"], _shared_directives_image_background_directive__WEBPACK_IMPORTED_MODULE_39__["BackgroundImageDirective"], _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_37__["VideoPlayerComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_31__["MapComponent"], _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_34__["MySliderComponent"], _school_join_school_join_component__WEBPACK_IMPORTED_MODULE_8__["SchoolJoinComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"], _like_like_component__WEBPACK_IMPORTED_MODULE_6__["LikeComponent"], _my_share_my_share_component__WEBPACK_IMPORTED_MODULE_5__["MyShareComponent"], _emoji_modal_emoji_modal_component__WEBPACK_IMPORTED_MODULE_42__["EmojiModalComponent"], _shared_directives_watch_element_directive__WEBPACK_IMPORTED_MODULE_43__["WatchElementDirective"], _school_card_school_card_component__WEBPACK_IMPORTED_MODULE_4__["SchoolCardComponent"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_3__["UserCardComponent"], _school_list_item_school_list_item_component__WEBPACK_IMPORTED_MODULE_2__["SchoolListItemComponent"], _user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_1__["UserListItemComponent"], _follow_follow_component__WEBPACK_IMPORTED_MODULE_44__["FollowComponent"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _post_widget1_post_widget1_component__WEBPACK_IMPORTED_MODULE_20__["PostWidget1Component"], _post_widget2_post_widget2_component__WEBPACK_IMPORTED_MODULE_21__["PostWidget2Component"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_15__["TrendingComponent"], _popular_schools_popular_schools_component__WEBPACK_IMPORTED_MODULE_14__["PopularSchoolsComponent"], _post_widget3_post_widget3_component__WEBPACK_IMPORTED_MODULE_12__["PostWidget3Component"], _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_13__["ImageGalleryComponent"], _feed_filter_popover_feed_filter_popover_component__WEBPACK_IMPORTED_MODULE_11__["FeedFilterPopoverComponent"], _my_photo_picker_my_photo_picker_component__WEBPACK_IMPORTED_MODULE_33__["MyPhotoPickerComponent"], _my_audio_picker_my_audio_picker_component__WEBPACK_IMPORTED_MODULE_32__["MyAudioPickerComponent"], _my_video_picker_my_video_picker_component__WEBPACK_IMPORTED_MODULE_35__["MyVideoPickerComponent"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_30__["CreatePostComponent"], _photo_thumbnail_photo_thumbnail_component__WEBPACK_IMPORTED_MODULE_36__["PhotoThumbnailComponent"], _video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_38__["VideoThumbnailComponent"], _audio_thumbnail_audio_thumbnail_component__WEBPACK_IMPORTED_MODULE_29__["AudioThumbnailComponent"], _audio_recorder_audio_recorder_component__WEBPACK_IMPORTED_MODULE_28__["AudioRecorderComponent"], _shared_directives_image_background_directive__WEBPACK_IMPORTED_MODULE_39__["BackgroundImageDirective"], _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_37__["VideoPlayerComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_31__["MapComponent"], _my_slider_my_slider_component__WEBPACK_IMPORTED_MODULE_34__["MySliderComponent"], _school_join_school_join_component__WEBPACK_IMPORTED_MODULE_8__["SchoolJoinComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"], _like_like_component__WEBPACK_IMPORTED_MODULE_6__["LikeComponent"], _my_share_my_share_component__WEBPACK_IMPORTED_MODULE_5__["MyShareComponent"], _emoji_modal_emoji_modal_component__WEBPACK_IMPORTED_MODULE_42__["EmojiModalComponent"], _shared_directives_watch_element_directive__WEBPACK_IMPORTED_MODULE_43__["WatchElementDirective"], _school_card_school_card_component__WEBPACK_IMPORTED_MODULE_4__["SchoolCardComponent"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_3__["UserCardComponent"], _school_list_item_school_list_item_component__WEBPACK_IMPORTED_MODULE_2__["SchoolListItemComponent"], _user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_1__["UserListItemComponent"], _follow_follow_component__WEBPACK_IMPORTED_MODULE_44__["FollowComponent"]]
      })], WidgetsModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! hammerjs */
      "./node_modules/hammerjs/hammer.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\kold_fyre\Desktop\Yearbook\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map