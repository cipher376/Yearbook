import { LocalMediaService } from 'src/app/shared/services/providers/local-media.service';
import { MyPhotoPickerComponent } from './../../widgets/my-photo-picker/my-photo-picker.component';
import { MySignals } from 'src/app/shared/services/my-signals';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Router } from '@angular/router';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit, OnDestroy {
  modal;

  constructor(
    private userService: UserService,
    private router: Router,
    private signals: MySignals,
    public modalController: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private localMediaService: LocalMediaService
  ) { }

  user: User = new User();
  userAddress: Address = new Address();
  subs$: Subscription[] = [];

  ngOnInit() {
    this.populateUserDetails();
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.subs$);
  }

  editProfilePic() {

  }

  populateUserDetails() {
    this.userService.getUserLocal()
      .then(u => {
        this.user = new User(u, u as any);
        this.userAddress = this.user?.address;
      });
  }

  updateUserInfo() {
    this.subs$.push(this.userService.updateUser(this.user.UpdateInfo)
      .subscribe(subs => {
        this.user = subs;
        this.userService.getUserDetails(this.user?.id).subscribe(u => this.user = new User(u, u as any));
      }));
  }

  updateUserAddress() {

  }


  async upload(fromDevice = false) {
    this.modal = await this.modalController.create({
      component: MyPhotoPickerComponent,
      cssClass: '',
      componentProps: {
        galleryType: fromDevice ? 'local' : 'cloud',
        IsComponent: true
      }
    });
    this.signals.closeModalSource$.subscribe(name => {
      if (name === 'uploader') {
        this.modal.dismiss();
      }
    });
    return await this.modal.present();
  }

  async showChangeProfilePhoto() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          cssClass: 'camera',
          icon: 'camera',
          handler: () => {
            this.upload(true);
          }
        },
        {
          text: 'Select from device',
          role: 'destructive',
          cssClass: 'folder',
          icon: 'folder-open',
          handler: () => {
            this.upload(true);
          }
        },
        {
          text: 'Select from cloud',
          role: 'destructive',
          cssClass: 'cloudy',
          icon: 'cloudy',
          handler: () => {
            this.upload();
          }
        }
      ]
    });
    (await actionSheet).present();
  }

  takePhoto() {
    this.localMediaService.takePhoto().then(photo => {
      if (photo?.id) {
        // this.devicePhotos.push(photo);
        console.log(photo);
      }
    });
  }

  selectFromCloud() {
    // this.mediaService.getUserPhotos(this.user?.id).subscribe(photos => {
    //   console.log(this.user?.id);
    //   this.cloudPhotos = [...photos];
    //   if (this.cloudPhotos?.length > 0) {
    //     this.galleryType = 'cloud';
    //   }
    // }, error => {
    //   console.log(error);
    // });
  }

  selectFromDevice() {

  }


}
