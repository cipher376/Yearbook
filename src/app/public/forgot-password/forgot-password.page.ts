import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { User } from 'src/app/models/user';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
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
  // browserOption = 'location=yes,hidden=no,clearcache=yes,clearsessioncache=yes,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=no';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toaster: ToasterService,
    public alertCtrl: AlertController,
    private util: UtilityService,
    private browserHistory: BrowserHistoryService,
    private loadCtrl: LoadingController,
    private userService: UserService,
    // private browser: InAppBrowser
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

  async onReset() {
    if (!this.resetForm.valid) {
      this.presentAlertPrompt();
      return;
    }
    this.loading = await this.loadCtrl.create({
      message: 'Processing ...'
    });
    this.loading.dismiss();

    // Perform reset here
    this.userService.RequestResetLink(this.resetForm.value.email).subscribe(res => {
      this.loading.dismiss();
      this.alertCtrl.create({
        header: 'Info',
        message:
          'Reset link has been sent to your email',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.router.navigate([
                '/login'
              ]);
            }
          }
        ]
      }).then(_ => _.present());
    }, error => {
      this.loading.dismiss();
      console.log(error);
      // const temp = this.resetForm.value.email.split('@');
      // if (temp.length > 1) {
      //   this.emailBrowser('https://www.' + temp[1]);
      // }
    });
  }

  // async emailBrowser(url: string) {
  //   const browserRef: InAppBrowserObject = this.browser.create(url,
  //     '_system', this.browserOption);
  //   browserRef.on('loadstop').subscribe(event => {
  //     this.loading.dismiss();
  //   });
  //   browserRef.on('exit').subscribe(event => {
  //     this.loading.dismiss();
  //   });
  // }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message:
        'Please check your email',
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


  // onValidate(email: string) {

  // }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
}
