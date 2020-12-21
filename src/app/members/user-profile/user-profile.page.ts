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
    private actionSheetCtrl: ActionSheetController
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
        this.userService.getUserDetails(this.user?.id).subscribe(u =>  this.user = new User(u, u as any));
      }));
  }

  updateUserAddress() {

  }


  async upload() {
    this.modal = await this.modalController.create({
      component: MyPhotoPickerComponent,
      cssClass: '',
      componentProps: {
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
          icon: 'camera-outline',
          handler: () => {
            
          }
        },
        {
          text: 'Select photo',
          role: 'destructive',
          cssClass: 'folder',
          icon: 'folder-open-outline',
          handler: () => {
            
          }
        }
      ]
    });
    (await actionSheet).present();
  }

}
