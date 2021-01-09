import { UserCloudPhotosComponent } from './../../widgets/user-cloud-photos/user-cloud-photos.component';
import { MediaService } from 'src/app/shared/services/model-service/media.service';
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
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { FileUploadResult } from '@ionic-native/file-transfer/ngx';
import { MediaType, Photo, IdentityPhoto } from 'src/app/models/my-media';
import { SERVER_DOWNLOAD_PATH } from 'src/app/shared/config';
import { PhotoLocal } from 'src/app/models/LocalMediaInterfaces';
import { PermissionsService } from 'src/app/shared/services/providers/permission.service';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Capacitor } from '@capacitor/core';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit, OnDestroy {
  modal;
  isAccessDenied = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private signals: MySignals,
    public modalController: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private localMediaService: LocalMediaService,
    private alertController: AlertController,
    private mediaService: MediaService,
    private permissionService: PermissionsService,
    private photoLibrary: PhotoLibrary,
    private toaster: ToasterService,

  ) {
    this.identityPhoto = UserService.getUserIdentityPhoto(this.user);
    // verify device permissions
    this.photoLibrary.requestAuthorization().then(_ => _).catch(error => {
      this.signals.log('Photo library permission denied');
      this.isAccessDenied = true;
    });
  }

  user: User = new User();
  userAddress: Address = new Address();
  subs$: Subscription[] = [];

  changeState = 'complete'; // uploading or complete or error
  identityPhoto: IdentityPhoto;

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
        this.identityPhoto = UserService.getUserIdentityPhoto(this.user);
      });
  }

  updateUserInfo() {
    this.subs$.push(this.userService.updateUser(this.user.UpdateInfo)
      .subscribe(subs => {
        this.user = subs;
        this.userService.getUserDetails(this.user?.id).subscribe(u => {
          this.user = new User(u, u as any);
          this.toaster.toast('Information updated');
        });
      }));
  }

  updateUserAddress() {

  }


  async upload(fromDevice = false) {
    // this.modal = await this.modalController.create({
    //   component: MyPhotoPickerComponent,
    //   cssClass: '',
    //   componentProps: {
    //     galleryType: fromDevice ? 'local' : 'cloud',
    //     IsComponent: true
    //   }
    // });
    // this.signals.closeModalSource$.subscribe(name => {
    //   if (name === 'uploader') {
    //     this.modal.dismiss();
    //   }
    // });
    // return await this.modal.present();
  }

  async showChangeCoverPhoto() {
    const actionSheet = this.actionSheetCtrl.create({
      header: 'Cover Photo',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          cssClass: 'camera',
          icon: 'camera-outline',
          handler: () => {
            this.takePhoto();
          }
        },
        {
          text: 'Select from device',
          role: 'destructive',
          cssClass: 'folder',
          icon: 'folder-open-outline',
          handler: () => {
            this.selectFromDevice();
          }
        },
        {
          text: 'Select from cloud',
          role: 'destructive',
          cssClass: 'cloudy',
          icon: 'cloudy-outline',
          handler: () => {
            this.selectFromCloud();
          }
        }
      ]
    });
    (await actionSheet).present();
  }

  async showChangeProfilePhoto() {
    const actionSheet = this.actionSheetCtrl.create({
      header: 'Profile Photo',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          cssClass: 'camera',
          icon: 'camera-outline',
          handler: () => {
            this.takePhoto();
          }
        },
        {
          text: 'Select from device',
          role: 'destructive',
          cssClass: 'folder',
          icon: 'folder-open-outline',
          handler: () => {
            this.selectFromDevice();
          }
        },
        {
          text: 'Select from cloud',
          role: 'destructive',
          cssClass: 'cloudy',
          icon: 'cloudy-outline',
          handler: () => {
            this.selectFromCloud();
          }
        }
      ]
    });
    (await actionSheet).present();
  }

  takePhoto() {
    this.localMediaService.takePhoto().then(photo => {
      if (photo?.id) {
        // confirm
        this.localMediaService.writeVideoToMediaDirectory(photo?.nativeURL).then(ph => {
          this.alertController.create({
            cssClass: '',
            header: 'Confirm!',
            message: 'Use this photo?',
            buttons: [
              {
                text: 'No',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                }
              }, {
                text: 'Yes',
                handler: () => {
                  this.changeState = 'uploading';
                  // upload photo and instruct to create thumbnail on server
                  this.uploadToServer(photo);
                }
              }
            ]
          }).then(alert => {
            alert.present();
          });
        });
      }
    });
  }

  async selectFromCloud() {
    let photo;
    this.modal = await this.modalController.create({
      component: UserCloudPhotosComponent,
      cssClass: '',
      componentProps: {
        User: this.user
      }
    });

    let sub$ = this.signals.selectedPhotosSource$.subscribe(photos => {
      photo = photos[0];
      photo.profile = true;
      photo.schoolId = photo.schoolId ?? undefined;
      photo.postId = photo.postId ?? undefined;
      photo.legend = photo.legend ?? '';
      photo.mimeType = photo.mimeType ?? '';

      this.alertController.create({
        cssClass: '',
        header: 'Confirm!',
        message: 'Use this photo?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              // sub$.unsubscribe();
              // this.modal.dismiss();
            }
          }, {
            text: 'Yes',
            handler: () => {
              this.changeState = 'uploading';
              // upload photo and instruct to create thumbnail on server
              this.mediaService.clearAllUserProfilePhotos(this.user?.id).subscribe(_ => {
                this.mediaService.updatePhoto(photo).subscribe(ph => {
                  this.changeState = 'complete';
                  console.log(JSON.stringify(ph));
                  this.userService.getUserDetails(this.user?.id).subscribe(u => {
                    this.user = new User(u, u as any);
                    console.log(JSON.stringify(this.user));
                    this.identityPhoto = UserService.getUserIdentityPhoto(this.user);
                    sub$.unsubscribe();
                    this.modal.dismiss();
                  }, error => {
                    sub$.unsubscribe();
                    this.modal.dismiss();
                  });
                }, error => {
                  sub$.unsubscribe();
                  this.modal.dismiss();
                });
              }, error => {
                sub$.unsubscribe();
                this.modal.dismiss();
              });
            }
          }
        ]
      }).then(alert => {
        alert.present();
      });
    });


    this.signals.closeModalSource$.subscribe(name => {
      if (name === 'user-cloud-photos') {
        sub$.unsubscribe();
        this.modal.dismiss();
      }
    });
    return await this.modal.present();
  }

  async selectFromDevice() {
    if (this.isAccessDenied) {
      await this.permissionService.getPhotolibraryPermission();
    }
    this.photoLibrary.getLibrary().subscribe({
      next: library => {
        this.isAccessDenied = false;
        if (library.length > 4) {
          library = library.slice(0, 1); // slice first 4 items
        }

        let temp: PhotoLocal;
        // reset photos array
        library.forEach(libraryItem => {
          temp = {
            id: libraryItem.id,
            fileName: libraryItem.fileName,
            nativeURL: libraryItem.photoURL,
            thumbnailNativeURL: libraryItem.thumbnailURL,
            creationDate: libraryItem.creationDate
          };
        });
        this.localMediaService.convertPhotoLibraryPathToNativeUrl(temp).then(path => {
          temp.thumbnailResolvedURL = Capacitor.convertFileSrc(path);
          temp.resolvedURL = Capacitor.convertFileSrc(path);
          temp.nativeURL = path;
          temp.thumbnailNativeURL = path;
          // this.signals.log(ph.thumbnailResolvedURL);
          this.alertController.create({
            cssClass: '',
            header: 'Confirm!',
            message: 'Use this photo?',
            buttons: [
              {
                text: 'No',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                }
              }, {
                text: 'Yes',
                handler: () => {
                  this.changeState = 'uploading';
                  this.uploadToServer(temp);
                }
              }
            ]
          }).then(alert => {
            alert.present();
          });
        }).catch(e => {
          this.signals.log(e);
        });
      },
      error: err => { console.log('could not get photos'); },
      complete: () => { console.log('done getting photos'); }
    });
  }



  uploadToServer(ph: PhotoLocal) {
    this.localMediaService.upload(ph?.nativeURL, ph?.fileName, true).then(result => {
      // returned results structure
      // {"bytesSent":169025,
      // "responseCode":200,
      // "response":"{
      //   \"files\":[{\"fieldname\":\"file\",\"originalname\":\"IMG_20201103_234610.jpg\",
      //                \"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"size\":168907}],
      //   \"fields\":{}}",
      //    "objectId":""}
      console.log(JSON.stringify(result));
      result = result as FileUploadResult;
      if (result) {
        const uploadedPhoto: Photo = {
          description: '',
          fileName: ph.fileName,
          fileUrl: SERVER_DOWNLOAD_PATH + ph.fileName,
          dateCreated: new Date(),
          type: MediaType.PHOTO,
          thumbnailUrl: SERVER_DOWNLOAD_PATH + 'thumb_' + ph.fileName,
          profile: true
        } as any;
        // this.signals.announceUploadComplete(uploadedPhoto);
        // // Fire all upload complete
        // this.signals.announceAllUploadComplete([uploadedPhoto]);

        // save photo to the server
        this.mediaService.clearAllUserProfilePhotos(this.user?.id).subscribe(_ => {
          this.subs$.push(this.mediaService.createUserPhoto(this.user.id, uploadedPhoto).subscribe(ph => {
            this.changeState = 'complete';
            console.log(JSON.stringify(ph));
            this.userService.getUserDetails(this.user?.id).subscribe(u => {
              this.user = new User(u, u as any);
              console.log(JSON.stringify(u));
              this.identityPhoto = UserService.getUserIdentityPhoto(this.user);
            });
          }, error => {
            console.log(JSON.stringify(error));
            this.changeState = 'error';
          }));
        })

      }
    }).catch(er => {
      console.log(JSON.stringify(er));
      this.changeState = 'error';
    });
  }


}
