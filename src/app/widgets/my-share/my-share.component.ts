import { Shareable } from './../../models/shareable';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from '@ionic/angular';
import { SocialSharingService } from 'src/app/shared/services/providers/sharing.service';

@Component({
  selector: 'app-my-share',
  templateUrl: './my-share.component.html',
  styleUrls: ['./my-share.component.scss'],
})
export class MyShareComponent implements OnInit {
  shareable: Shareable;
  

  constructor(
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    private social: SocialSharingService
  ) { }

  ngOnInit() { }


  navigateBack() {
    this.navCtrl.pop();
  }

  async showShareComponents() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Share on Facebook',
          role: 'destructive',
          cssClass: 'action-facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.social.share(
              'com.facebook.katana',
              'Facebook',
              'facebook',
              this.shareable?.message,
              this.shareable?.subject,
              this.shareable?.image,
              this.shareable?.url
            );
          }
        },
        {
          text: 'Share on Whatsup',
          role: 'destructive',
          cssClass: 'action-whatsup',
          icon: 'logo-whatsapp',
          handler: () => {
            this.social.share(
              'com.whatsapp',
              'Whatsapp',
              'whatsapp',
              this.shareable?.message,
              this.shareable?.subject,
              this.shareable?.image,
              this.shareable?.url
            );
          }
        },
        {
          text: 'Share on Instagram',
          role: 'destructive',
          cssClass: 'action-instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.social.share(
              'com.instagram.android',
              'Instagram',
              'instagram',
              this.shareable?.message,
              this.shareable?.subject,
              this.shareable?.image,
              this.shareable?.url
            );
          }
        },
        {
          text: 'Share on Twitter',
          role: 'destructive',
          cssClass: 'action-twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.social.share(
              'com.twitter.android',
              'Twitter',
              'twitter',
              this.shareable?.message,
              this.shareable?.subject,
              this.shareable?.image,
              this.shareable?.url
            );
          }
        },
        {
          text: 'More',
          role: 'destructive',
          cssClass: 'action-regular',
          icon: 'share',
          handler: () => {
            this.social.share(
              'none',
              'Share',
              'none',
              this.shareable?.message,
              this.shareable?.subject,
              this.shareable?.image,
              this.shareable?.url
            );
          }
        }
      ]
    });
    (await actionSheet).present();
  }

  share(shareable: Shareable){
    this.shareable = shareable;
    this.showShareComponents();
  }

}
