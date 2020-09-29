import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';

import { MyStorage } from './../../shared/services/providers/storage/my-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  public _regForm: FormGroup;
  _loading: HTMLIonLoadingElement;

  _isName = false;
  _isEmail = false;
  _isPhone = false;
  _isPassword = false;
  _isMatch = false;
  isShow = false;
  user: User;

  //  _browserOption = 'location=yes,hidden=no,clearcache=yes,clearsessioncache=yes,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=no';


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    // private _fs: MyFileService,
    private store: MyStorage,
    public alertController: AlertController,
    private _toaster: ToasterService,
    // private _util: UtilityService,
    // private _browser: InAppBrowser,
    private _loadCtrl: LoadingController,
    private _alert: AlertController,
    private browserHistory: BrowserHistoryService
  ) { }

  ngOnInit() {
    // Initializations
    this.user = new User();

    this._regForm = this.fb.group({
      fullname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ]
      ],
      email: [
        this.user?.email || '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(30)
        ]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
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

  async register() {
    if (!this._regForm.valid) {
      this._toaster.toast('Provide valid information');
      return;
    }

    this.user = this.user || new User();
    this.user.email = this._regForm.value.email;
    this.user.password = this._regForm.value.password;
    this.user.FullName = this._regForm.value.fullname;
    console.log(this.user);
    this.userService.signUp(this.user.Info as User).subscribe(user => {
      if ((user as User).id) {
        // success 
        this.router.navigateByUrl('/login');
      }
    }, error => {
      this._toaster.toast(error);
    });


    //   if (!this.getData()) {
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
  }

  // async emailBrowser(url: string) {
  //   const browserRef: InAppBrowserObject = this._browser.create(url,
  //     '_system', this._browserOption);


  //   browserRef.on('loadstop').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  //   browserRef.on('exit').subscribe(event => {
  //     this._loading.dismiss();
  //   });
  // }

  getData(): boolean {
    this.user.email = this._regForm.value.email;
    this.user.phone = this._regForm.value.phone;
    this.user.password = this._regForm.value.password;

    if (
      this._regForm.valid &&
      this._regForm.value.password === this._regForm.value.password2
    ) {
      return true;
    }
    return false;
  }

  onValidate(value: string) {
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
  }

  // async presentAlertPrompt() {
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

  login() {
    this.router.navigateByUrl('/login');
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
}
