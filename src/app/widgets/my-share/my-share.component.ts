import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from '@ionic/angular';
import { SocialSharingService } from 'src/app/shared/services/providers/sharing.service';

@Component({
  selector: 'app-my-share',
  templateUrl: './my-share.component.html',
  styleUrls: ['./my-share.component.scss'],
})
export class MyShareComponent implements OnInit {
  message: string;
  subject: string;
  image: string;
  url: string;

  emailRecipients = [];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private social: SocialSharingService
  ) { }

  ngOnInit() { }


  navigateBack() {
    this.navCtrl.pop();
  }

  async presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Share on Facebook',
          role: 'destructive',
          cssClass: ' action-facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.social.share(
              'com.facebook.katana',
              'Facebook',
              'facebook',
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        },
        {
          text: 'Share on Whatsup',
          role: 'destructive',
          cssClass: ' action-whatsup',
          icon: 'logo-whatsapp',
          handler: () => {
            this.social.share(
              'com.whatsapp',
              'Whatsapp',
              'whatsapp',
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        },
        {
          text: 'Share on Instagram',
          role: 'destructive',
          cssClass: ' action-instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.social.share(
              'com.instagram.android',
              'Instagram',
              'instagram',
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        },
        {
          text: 'Share on Twitter',
          role: 'destructive',
          cssClass: ' action-twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.social.share(
              'com.twitter.android',
              'Twitter',
              'twitter',
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        },
        {
          text: 'Share on other Social medias',
          role: 'destructive',
          cssClass: ' action-regular',
          icon: 'share',
          handler: () => {
            this.social.share(
              'none',
              'Share',
              'none',
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        }
      ]
    });
    (await actionSheet).present();
  }

}
