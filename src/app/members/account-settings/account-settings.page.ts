import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {
  

  constructor(
    private router: Router,
    private browserHistory: BrowserHistoryService,
    private userService: UserService,
    private alertController: AlertController
    
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

  async deactivate() {
    this.userService.getUserLocal()
      .then(res => this.presentAlertPrompt(res));
  }

  async presentAlertPrompt(user: User) {
    const alert = await this.alertController.create({
      cssClass: 'text-confirmation',
      header: 'Delete Account!',
      message: `Retype to <b> ${user.email} </b> to authorize the <b>deletion of your account</b>`,
      inputs: [
        {
          type: 'text',
          placeholder: user.email,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'text-dark',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'Delete',
          cssClass: 'text-danger font-weight-bold',
          handler: () => {
            console.log('Delete');
          }
        }
      ]
    });

    await alert.present();
  }

}
