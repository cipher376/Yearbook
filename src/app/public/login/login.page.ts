import { MyStorage } from './../../shared/services/providers/storage/my-storage.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MenuController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit, OnDestroy, AfterViewInit {
  previousPage = '';
  history$;


  loginForm: FormGroup;
  _loading: HTMLIonLoadingElement;

  _isName = false;
  _isEmail = false;
  _isPhone = false;
  _isPassword = false;
  isShow = false;

  // _isLogin = false;
  user: User;
  // _browserOption = 'location=yes,hidden=no,clearcache=yes,clearsessioncache=yes,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=no';
  // _socialToken: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private store: MyStorage,
    private menu: MenuController,
    private toaster: ToasterService,
    private util: UtilityService,
    private loadCtrl: LoadingController,
    // private platform: Platform,
    public alertCtrl: AlertController,
    // private _browser: InAppBrowser,
    private browserHistory: BrowserHistoryService

  ) {

    // this.fb.logout().then(_ => {
    //   console.log(_);
    // });
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });
    this.userService.getUserLocal().then(user => {
      this.user = user;
    });

  }
  ngAfterViewInit(): void {
    if (this.route?.snapshot?.params?.clear) {
      // clear data from store 
      this.userService.logout();
    }
  }

  ngOnInit() {

    // disable the menu
    // this.enablePublicMenu();
    // this._fameIdentity = <FameIdentity>{};
    this.loginForm = this.fb.group({
      email: [
        'ama@andy.com',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(30)
        ]
      ],
      password: [
        '12345678',
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
      remember: [false]
    });


    // this._fstore.set('is_login', false).then(_ => { });
    // try {
    //   this.route.queryParamMap.subscribe(params => {
    //     this._socialToken = { token: params.get('access-token'), userId: params.get('user-id') };
    //     if (this._socialToken) {
    //       this._fstore.setObject('social_token', this._socialToken).then(_ => { });
    //     } else {
    //       this._fstore.remove('social_token').then(_ => { });
    //     }
    //     // alert(this.router.url);

    //     // valid token exist
    //     if (this._socialToken.token) {
    //       // store the token for future access
    //       this._auth.setSocialSDKToken(this._socialToken.token, this._socialToken.userId);
    //     } else {
    //       // this._auth.logout();
    //       // this._fstore.remove('user').then(_ => { });
    //       if (this._loading) {
    //         this._loading.dismiss();
    //       }
    //     }
    //   });
    // } catch (e) {
    //   console.log(e);
    // }

    // Get social user from database if exist
    // this.socialAuthentication();
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.history$);
    try {
      this._loading.dismiss();
    } catch (error) {

    }
  }
  // Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"),

  async onLogin() {
    if (!this.loginForm.valid) {
      this.toaster.toast('Provide valid credentials');
      return;
    }
    this._loading = await this.loadCtrl.create({
      message: 'Welcome to<br>alma mater'
    });
    UtilityService.stopLoading(this._loading);
    await this._loading.present();
    await this.userService.login(this.loginForm.value).subscribe(
      res => {
        if (res) {
          // fetch user details
          this.userService.getMyProfile().subscribe(user => {
            this.user = user;
            console.log(this.user);
            if (this.user?.phone) {
              this.router.navigateByUrl('/links/home');
            } else {
              this.router.navigateByUrl('/phone-number');
            }
          });
        }
        this._loading.dismiss();
      },
      error => {
        console.log(error);
        this.toaster.toast(error.message, 4000);
        this._loading.dismiss();
        // if (error.search('verified') > -1) {
        //   this.alertCtrl.create({
        //     header: `Email is not verified. A verification link is sent to the email provided but it may take up 10min to show up. check spam if not in your In-box Verify your email now?`,
        //     message: '',
        //     buttons: [
        //       {
        //         text: 'No',
        //         role: 'cancel',
        //         cssClass: 'secondary',
        //         handler: (blah) => {
        //           this.toaster.toast('Email is not verified! Check your email for verification link or reset password', 60);
        //         }
        //       }, {
        //         text: 'Yes',
        //         handler: () => {
        //           const temp = this.loginForm.value.email.split('@');
        //           if (temp.length > 1) {
        //             // this.emailBrowser('https://www.' + temp[1]);
        //           }
        //         }
        //       }
        //     ],
        //     translucent: true,
        //   }).then(alert => alert.present());
        // } else {
        //   this.toaster.toast('Check Credentials | Network');
        // }
      }
    );
  }

  // async emailBrowser(url: string) {
  //   this._loading = await this.loadCtrl.create({
  //     message: 'Accessing privacy statement ... '
  //   });
  //   this._loading.present();
  //   const browserRef: InAppBrowserObject = this._browser.create(url,
  //     '_system', this._browserOption);


  //   browserRef.on('loadstop').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  //   browserRef.on('exit').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  // }

  onValidate(value: string) {
    // console.log(value);
    switch (value) {
      case 'email':
        this._isEmail = true;
        break;
      case 'phone':
        this._isPhone = true;
        break;
      case 'password':
        this._isPassword = true;
        break;
    }
  }

  // async socialAuthentication() {
  //   this._socialToken = await this._fstore.getObject('social_token');
  //   if (this._socialToken && this._socialToken.token) {
  //     this._loading = await this.loadCtrl.create({
  //       message: 'Authenticating ... '
  //     });
  //     await this._loading.present();
  //     this._user.getSocialFameIdentityById(this._socialToken.userId).subscribe((fameIdentity: FameIdentity) => {
  //       if (fameIdentity) {
  //         this._user.getSocialUserIdentityById(this._socialToken.userId)
  //           .subscribe((userIdentity: UserIdentity) => {
  //             console.log(userIdentity);
  //             const user = new FameUser();
  //             user.dateCreated = userIdentity.created;
  //             user.dateModified = userIdentity.modified;
  //             user.name = new Name();
  //             user.name.first = userIdentity.profile.name.familyName;
  //             user.name.last = userIdentity.profile.name.givenName;

  //             // Create client side identity
  //             if (userIdentity.profile && userIdentity.profile._json && userIdentity.profile._json.email) {
  //               fameIdentity.email = userIdentity.profile._json.email;
  //             }
  //             fameIdentity.fameUser = user;
  //             // fameIdentity.fameUser.identity = fameIdentity;
  //             this._fameIdentity = fameIdentity;

  //             // save profile image to disk
  //             if (userIdentity.profile._json.picture) {
  //               this._fstore.set('social_profile_image', userIdentity.profile._json.picture)
  //                 .then(_ => {  // redirect to the correct page
  //                   this.redirectUserToPage();
  //                 });
  //             } else {
  //               this._fstore.set('social_profile_image', 'https://graph.facebook.com/' +
  //                 userIdentity.externalId + '/picture?type=large')
  //                 .then(_ => {  // redirect to the correct page
  //                   this.redirectUserToPage();
  //                 });
  //             }

  //           }, error => {
  //             console.log(error);
  //             this._loading.dismiss();
  //             this._fstore.set('is_login', false).then(_ => { });
  //           });
  //       } else {
  //         this._loading.dismiss();
  //         this._fstore.set('is_login', false).then(_ => { });
  //       }
  //     }, error => {
  //       console.log(error);
  //       this._loading.dismiss();
  //       this._fstore.set('is_login', false).then(_ => { });

  //     });

  //   } else {
  //     await this._fstore.set('is_login', false).then(_ => { });
  //   }
  // }

  // async getFacebookToken() {
  //   this._loading = await this.loadCtrl.create({
  //     message: 'Accessing Facebook ... '
  //   });
  //   this._loading.present();

  //   const browserRef: InAppBrowserObject = this._browser.create(environment.fb_auth_url,
  //     '_self', this._browserOption);

  //   browserRef.on('loadstop').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  //   browserRef.on('exit').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  // }
  // async getGoogleToken() {
  //   this._loading = await this.loadCtrl.create({
  //     message: 'Accessing GooglePlus ... '
  //   });
  //   this._loading.present();

  //   const browserRef: InAppBrowserObject = this._browser.create(environment.google_auth_url,
  //     '_self', this._browserOption);

  //   browserRef.on('loadstop').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  //   browserRef.on('exit').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  // }

  // async showPrivacyNote() {

  //   this._loading.present();
  //   const browserRef: InAppBrowserObject = this._browser.create('https://fame.natlink.xyz#privacy',
  //     '_system', this._browserOption);


  //   browserRef.on('loadstop').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  //   browserRef.on('exit').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  // }

  // async showFameWebsite() {

  //   const browserRef: InAppBrowserObject = this._browser.create('https://fame.natlink.xyz',
  //     '_system', this._browserOption);

  //   browserRef.on('loadstop').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  //   browserRef.on('exit').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  // }


  // async redirectUserToPage() {
  //   this.enableAuthenticatedMenu();
  //   this._auth.isAuthenticated(); // broadcast login successful
  //   this._fstore.set('is_login', true).then(_ => { });

  //   // if social update the current user object
  //   await this._fstore.setObject('user', this._fameIdentity);
  //   // console.log(this._fameIdentity.fameUser);
  //   if (this._fameIdentity.fameUser && this._fameIdentity.fameUser.id) {
  //     // User details exist
  //     // route due to how much information you have
  //     this.router.navigateByUrl('/home');

  //     if (this._loading) {
  //       this._loading.dismiss();
  //     }

  //   } else {
  //     // no details in profile
  //     // this._navCtrl.setDirection('root');
  //     // this._navCtrl.navigateRoot(['/edit-profile']);
  //     this.router.navigateByUrl('/edit-profile');
  //   }
  //   if (this._loading) {
  //     this._loading.dismiss();
  //   }
  // }

  // enableAuthenticatedMenu() {
  //   this._menu.enable(true, 'private');
  //   this._menu.enable(false, 'public');
  //   this._menu.close();
  // }

  // enablePublicMenu() {
  //   this._menu.enable(true, 'public');
  //   this._menu.enable(false, 'private');
  //   this._menu.close();
  // }

  gotoForgotPassword() {
    this.router.navigateByUrl('/forgot-password');
  }

  gotoRegister() {
    this.router.navigateByUrl('/register');
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
  // async presentAlert() {
  //   const alert = await this.alertCtrl.create({
  //     message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }
}
