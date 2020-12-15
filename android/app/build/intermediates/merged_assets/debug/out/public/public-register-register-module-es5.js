(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/public/register/register.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/register/register.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPublicRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-row class=\"ion-padding\" style=\"margin-top: 2vh;\">\r\n    <ion-col size=\"6\"  (click)=\"goBack()\">\r\n      <ion-icon name=\"chevron-back-outline\" class=\"fs-20\"></ion-icon>&nbsp;\r\n      <ion-label style=\"margin-top: 1px; position: absolute; font-size:12px\">back</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"ion-float-right\">\r\n      <ion-label class=\"ion-float-right fs-12\" (click)=\"login()\">Log in</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <form [formGroup]=\"_regForm\" padding>\r\n    <ion-row>\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <!-- <ion-item lines=\"none\">\r\n          <ion-icon name=\"call\" padding size=\"small\"></ion-icon> -\r\n          <ion-input type=\"tel\" class=\"input-w-icon\" formControlName=\"phone\" placeholder=\"Phone\"></ion-input>\r\n          <ion-icon color=\"success\" size=\"small\" name=\"checkmark-circle-outline\"\r\n            *ngIf=\"!_regForm.get('phone').errors && _regForm.get('phone').dirty\"></ion-icon>\r\n          <ion-icon color=\"danger\" size=\"small\" name=\"close-circle-outline\"\r\n            *ngIf=\"_regForm.get('phone').errors && _regForm.get('phone').dirty\"></ion-icon>\r\n        </ion-item> -->\r\n\r\n        <ion-item lines=\"none\">\r\n          <!-- <ion-icon name=\"call\" padding size=\"small\"></ion-icon> -->\r\n          <ion-input type=\"text\" class=\"input-w-icon\" formControlName=\"fullname\" placeholder=\"Full  name\"></ion-input>\r\n          <!-- <ion-icon color=\"success\" size=\"small\" name=\"checkmark-circle-outline\"\r\n            *ngIf=\"!_regForm.get('phone').errors && _regForm.get('phone').dirty\"></ion-icon> -->\r\n          <!-- <ion-icon color=\"danger\" size=\"small\" name=\"close-circle-outline\"\r\n            *ngIf=\"_regForm.get('phone').errors && _regForm.get('phone').dirty\"></ion-icon> -->\r\n        </ion-item>\r\n        \r\n        <ion-item [ngClass]=\"{ 'invalid-item-md': '!_regForm.controls.email.valid' }\" lines=\"none\">\r\n          <!-- <ion-icon name=\"person\" padding size=\"small\"> </ion-icon> -->\r\n          <ion-input class=\"input-w-icon\" formControlName=\"email\" type=\"email\" (keyup)=\"onValidate('email')\"\r\n            placeholder=\"Email\">\r\n          </ion-input>\r\n          <ion-icon color=\"success\" size=\"small\" name=\"checkmark-circle-outline\"\r\n            *ngIf=\"!_regForm.get('email').errors && _regForm.get('email').dirty&& this._regForm.value.email!==''\"></ion-icon>\r\n          <ion-icon color=\"danger\" size=\"small\" name=\"close-circle-outline\"\r\n            *ngIf=\"_regForm.get('email').errors && _regForm.get('email').dirty&& this._regForm.value.email!==''\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n          <!-- <ion-icon name=\"key\" padding size=\"small\"></ion-icon> -->\r\n          <ion-input class=\"input-w-icon\" placeholder=\"Password\" type=\"{{isShow?'text':'password'}}\" formControlName=\"password\"\r\n            (ionChange)=\"onValidate('password')\">\r\n          </ion-input>\r\n          <ion-icon color=\"success\" size=\"small\" name=\"checkmark-circle-outline\" *ngIf=\"\r\n            !_regForm.get('password').errors && _regForm.get('password').dirty&& this._regForm.value.password!==''\r\n          \"></ion-icon>\r\n          <ion-icon color=\"danger\" size=\"small\" name=\"close-circle-outline\" *ngIf=\"\r\n            _regForm.get('password').errors && _regForm.get('password').dirty&& this._regForm.value.password!==''\r\n          \"></ion-icon>\r\n          <ion-icon size=\"small\" name=\"eye-outline\" \r\n          *ngIf=\"_regForm.get('password').dirty && this._regForm.value.password!==''\" (click)=\"isShow=!isShow\"></ion-icon> \r\n        </ion-item>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row style=\"margin-top: 5vh;\">\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col size=\"8\">\r\n        <ion-button shape=\"round\" expand=\"block\" class=\"fs-16 poppins-bold\" (click)=\"register()\">S<span\r\n            class=\"ion-text-lowercase\">ign up</span></ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/public/register/register.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/public/register/register.module.ts ***!
      \****************************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function srcAppPublicRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/public/register/register.page.ts");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
      }];

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "./src/app/public/register/register.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/public/register/register.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPublicRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  width: 100%;\n  height: auto;\n}\n\nform {\n  margin-top: 4vh !important;\n}\n\nion-router-outlet {\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7O0FBcUNBO0VBQ0UsMEJBQUE7QUFsQ0Y7O0FBaURBO0VBQ0UsMEJBQUE7QUE5Q0YiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC5jb3JyZWN0LWJvdHRvbSB7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4vLyB9XHJcblxyXG5pb24taXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vLyAuc29jaWFsIHtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbi8vIH1cclxuXHJcblxyXG4vLyAudGV4dC1jZW50ZXIge1xyXG4vLyAgIHAge1xyXG4vLyAgICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIHAge1xyXG4vLyAgIHBhZGRpbmc6IDBweDtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQtY2VudGVyIHtcclxuLy8gICBwIHtcclxuLy8gICAgIG1hcmdpbjogMHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gcCB7XHJcbi8vICAgcGFkZGluZzogMHB4O1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gfVxyXG5cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDR2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy8gLmdvb2dsZS1idXR0b24ge1xyXG5cclxuLy8gICBidXR0b24ge1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzkwMmIyMiAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcblxyXG5pb24tcm91dGVyLW91dGxldCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/public/register/register.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/public/register/register.page.ts ***!
      \**************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppPublicRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/providers/navigation/browser-history.service */
      "./src/app/shared/services/providers/navigation/browser-history.service.ts");
      /* harmony import */


      var _shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/services/providers/storage/my-storage.service */
      "./src/app/shared/services/providers/storage/my-storage.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/providers/widgets/toaster.service */
      "./src/app/shared/services/providers/widgets/toaster.service.ts");
      /* harmony import */


      var src_app_models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/user */
      "./src/app/models/user.ts");
      /* harmony import */


      var src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/model-service/user.service */
      "./src/app/shared/services/model-service/user.service.ts");

      var RegisterPage = /*#__PURE__*/function () {
        //  _browserOption = 'location=yes,hidden=no,clearcache=yes,clearsessioncache=yes,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=no';
        function RegisterPage(fb, router, userService, // private _fs: MyFileService,
        store, alertController, _toaster, // private _util: UtilityService,
        // private _browser: InAppBrowser,
        _loadCtrl, _alert, browserHistory) {
          _classCallCheck(this, RegisterPage);

          this.fb = fb;
          this.router = router;
          this.userService = userService;
          this.store = store;
          this.alertController = alertController;
          this._toaster = _toaster;
          this._loadCtrl = _loadCtrl;
          this._alert = _alert;
          this.browserHistory = browserHistory;
          this._isName = false;
          this._isEmail = false;
          this._isPhone = false;
          this._isPassword = false;
          this._isMatch = false;
          this.isShow = false;
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a; // Initializations


            this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
            this._regForm = this.fb.group({
              fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30)]],
              email: [((_a = this.user) === null || _a === void 0 ? void 0 : _a.email) || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30)]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)]],
              // password2: [
              //   '',
              //   [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
              // ],
              // phone: [
              //   '',
              //   [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
              // ],
              remember: [false]
            });
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this._regForm.valid) {
                        _context.next = 3;
                        break;
                      }

                      this._toaster.toast('Provide valid information');

                      return _context.abrupt("return");

                    case 3:
                      this.user = this.user || new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
                      this.user.email = this._regForm.value.email;
                      this.user.password = this._regForm.value.password;
                      this.user.FullName = this._regForm.value.fullname;
                      console.log(this.user);
                      this.userService.signUp(this.user.Info).subscribe(function (user) {
                        if (user.id) {
                          // success 
                          _this.router.navigateByUrl('/login');
                        }
                      }, function (error) {
                        _this._toaster.toast(error);
                      }); //   if (!this.getData()) {
                      //     this.presentAlertPrompt();
                      //     return;
                      //   }
                      //   this._loading = await this._loadCtrl.create({
                      //     message: 'Processing ...'
                      //   });
                      //   this._util.stopLoading(this._loading);
                      //   await this._loading.present();
                      //   this.auth.register(this._userInfo).subscribe(res => {
                      //     console.log(res);
                      //     if (res.id) {
                      //       this._fstore.set('foldersCreated', false).then(() => {
                      //         // redirect to login page
                      //         this._loading.dismiss();
                      //         this._alert.create({
                      //           header: 'Information',
                      //           message: 'Please check your inbox of the email provided to complete registration.',
                      //           buttons: [
                      //             {
                      //               text: 'Ok',
                      //               role: 'cancel',
                      //               cssClass: 'secondary',
                      //               handler: () => {
                      //                 this.router.navigate([
                      //                   '/login'
                      //                 ]);
                      //               }
                      //             }
                      //           ]
                      //         }).then(alert => alert.present());
                      //       });
                      //     }
                      //   },
                      //     error => {
                      //       console.log(error);
                      //       this._loading.dismiss();
                      //       if (error.toString().indexOf('in use') > -1) {
                      //         this._toaster.toast('Email is already in use!');
                      //       } else if (error.toString().indexOf('verified') > -1) {
                      //         this._alert.create({
                      //           header: `Email is not verified. A verification link is sent to ` +
                      //             this._regForm.value.email +
                      //             `but it may take up 10min to show up. check spam if not in your In-box Verify your email now?`,
                      //           message: '',
                      //           buttons: [
                      //             {
                      //               text: 'No',
                      //               role: 'cancel',
                      //               cssClass: 'secondary',
                      //               handler: (blah) => {
                      //                 this._toaster.toast('Email is not verified! Check your email for verification link or reset password', 60);
                      //               }
                      //             }, {
                      //               text: 'Yes',
                      //               handler: () => {
                      //                 const temp = this._regForm.value.emai.split('@');
                      //                 if (temp.length > 1) {
                      //                   this.emailBrowser('https://www.' + temp[1]);
                      //                 }
                      //               }
                      //             }
                      //           ],
                      //           translucent: true,
                      //         }).then(alert => alert.present());
                      //       } else {
                      //         this._toaster.toast('Check Credentials | Network');
                      //       }
                      //     });

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // async emailBrowser(url: string) {
          //   const browserRef: InAppBrowserObject = this._browser.create(url,
          //     '_system', this._browserOption);
          //   browserRef.on('loadstop').subscribe(event => {
          //     this._loading.dismiss();
          //   });
          //   browserRef.on('exit').subscribe(event => {
          //     this._loading.dismiss();
          //   });
          // }

        }, {
          key: "getData",
          value: function getData() {
            this.user.email = this._regForm.value.email;
            this.user.phone = this._regForm.value.phone;
            this.user.password = this._regForm.value.password;

            if (this._regForm.valid && this._regForm.value.password === this._regForm.value.password2) {
              return true;
            }

            return false;
          }
        }, {
          key: "onValidate",
          value: function onValidate(value) {
            console.log(value);

            switch (value) {
              case 'email':
                this._isEmail = true;
                break;

              case 'phone':
                this._isPhone = true;
                break;

              case 'password':
                this._isPassword = true;

                if (this._regForm.value.password === this._regForm.value.password2) {
                  this._isMatch = true;
                } else {
                  this._isMatch = false;
                }

                break;

              case 'password2':
                if (this._regForm.value.password === this._regForm.value.password2) {
                  this._isMatch = true;
                } else {
                  this._isMatch = false;
                }

                break;
            }
          } // async presentAlertPrompt() {
          //   const alert = await this.alertController.create({
          //     header: 'Alert',
          //     message:
          //       'Information is invalid',
          //     buttons: [
          //       {
          //         text: 'Ok',
          //         handler: () => {
          //           console.log('Confirm Ok');
          //         }
          //       }
          //     ]
          //   });
          //   await alert.present();
          // }

        }, {
          key: "login",
          value: function login() {
            this.router.navigateByUrl('/login');
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_model_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }, {
          type: _shared_services_providers_storage_my_storage_service__WEBPACK_IMPORTED_MODULE_2__["MyStorage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_shared_services_providers_widgets_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_shared_services_providers_navigation_browser_history_service__WEBPACK_IMPORTED_MODULE_1__["BrowserHistoryService"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/public/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/public/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=public-register-register-module-es5.js.map