import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { UserConfig, UserConfigAction } from './../../models/user';
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

  deactivationReason: '';
  user: User;
  userConfigs: UserConfig[] = [];
  constructor(
    private router: Router,
    private browserHistory: BrowserHistoryService,
    private userService: UserService,
    private alertController: AlertController,
    private toaster: ToasterService
  ) { }

  async ngOnInit() {
    this.user = await this.userService.getUserLocal();
    this.userConfigs = this.user.userConfigs;
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
      message: `Your account will be blocked permanently. Please state
      why do you want to deactivate?`,
      inputs: [
        {
          type: 'text',
          placeholder: 'Reason',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'text-dark',
          handler: (data) => {
            // console.log(data);
          }
        },
        {
          text: 'Deactivate',
          cssClass: 'text-danger font-weight-bold',
          handler: (data) => {
            this.deactivationReason = data[0];
            this.deactivateAccount();
          }
        }
      ]
    });

    await alert.present();
  }


  deactivateAccount() {
    if (!this.deactivationReason) {
      this.toaster.toast('Please state your reason')
      return;
    }
    // check if user configuration exist
    let found: UserConfig;
    this.userConfigs.forEach(cfg => {
      if (cfg.action === UserConfigAction.AccountDeactivation) {
        found = cfg;
      }
    });

    const config = found ?? new UserConfig();
    config.action = UserConfigAction.AccountDeactivation;
    config.response = 'true';
    config.reason = this.deactivationReason;
    config.userId = this.user?.id;
    this.userService.createOrUpdateConfig(this.user?.id, config).subscribe(cfg => {
      if (this.user.userConfigs?.length > 0) {
        this.user.userConfigs.push(cfg);
      } else {
        this.user.userConfigs = [cfg];
      }
      this.userService.getUserDetails(this.user?.id).subscribe(_ => _);
      setTimeout(() => {
        this.userService.logout();
        this.router.navigateByUrl('/login;clear=true');
      }, 5000);
    });
  }

}
