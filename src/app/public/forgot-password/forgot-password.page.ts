import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { User } from 'src/app/models/user';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
// import { InAppBrowserObject, InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss']
})
export class ForgotPasswordPage implements OnInit {
  resetForm: FormGroup;
  loading: HTMLIonLoadingElement;
  user: User;
  // _browserOption = 'location=yes,hidden=no,clearcache=yes,clearsessioncache=yes,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=no';

  _isEmail = false;
  constructor(
    private fb: FormBuilder,
    public alertController: AlertController,
    private router: Router,
    private toaster: ToasterService,
    public alertCtrl: AlertController,
    private util: UtilityService,
    private browserHistory: BrowserHistoryService,
    private loadCtrl: LoadingController,
    // private _browser: InAppBrowser
  ) {
    this.user = new User();
   }

  ngOnInit() {
    // Initialize local variables
    this.resetForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(30)
        ]
      ]
    });
  }

  // async onReset() {
  //   if (!this.resetForm.valid) {
  //     this.presentAlertPrompt();
  //     return;
  //   }
  //   this.loading = await this.loadCtrl.create({
  //     message: 'Processing ...'
  //   });
  //   this.util.stopLoading(this.loading);
  //   // Perform reset here
  //   this.userService.RequestResetLink(this.resetForm.value.email).subscribe(res => {
  //     this.loading.dismiss();
  //     this.alertController.create({
  //       header: 'Info',
  //       message:
  //         'Reset link has been sent to your email',
  //       buttons: [
  //         {
  //           text: 'Ok',
  //           handler: () => {
  //             this.router.navigate([
  //               '/login'
  //             ]);
  //           }
  //         }
  //       ]
  //     }).then(_ => _.present());
  //   }, error => {
  //     this.loading.dismiss();
  //     if (error.search('verified') > -1) {
  //       this._auth.requestVerificationLink(this.resetForm.value.email).subscribe(res => {
  //         this.toaster.toast('Email is not verified! Check your email for verification link', 60);
  //       }, error => {
  //         this.alertCtrl.create({
  //           header: `Email is not verified. A verification link is sent to ` + this.resetForm.value.email +
  //             ` but it may take up 10min to show up. check spam if not in your In-box Verify your email now?`,
  //           message: '',
  //           buttons: [
  //             {
  //               text: 'No',
  //               role: 'cancel',
  //               cssClass: 'secondary',
  //               handler: (blah) => {
  //                 this.toaster.toast('Email is not verified! Check your email for verification link', 60);
  //               }
  //             }, {
  //               text: 'Yes',
  //               handler: () => {
  //                 const temp = this.resetForm.value.email.split('@');
  //                 if (temp.length > 1) {
  //                   this.emailBrowser('https://www.' + temp[1]);
  //                 }
  //               }
  //             }
  //           ],
  //           translucent: true,
  //         }).then(alert => alert.present());
  //       });
  //     } else {
  //       this.toaster.toast(error, 60);
  //     }
  //   });
  // }

  // async emailBrowser(url: string) {
  //   const browserRef: InAppBrowserObject = this._browser.create(url,
  //     '_system', this._browserOption);
  //   browserRef.on('loadstop').subscribe(event => {
  //     this.loading.dismiss();
  //   });
  //   browserRef.on('exit').subscribe(event => {
  //     this.loading.dismiss();
  //   });
  // }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message:
        'Please check your email!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            // console.log('Confirm Ok');
          }
        }
      ]
    }); 
    await alert.present();
  }


  onValidate(email: string) {

  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
}
