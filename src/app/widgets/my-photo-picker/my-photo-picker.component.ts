import { AudioRecorderComponent } from './../audio-recorder/audio-recorder.component';
import { NO_IMAGE_PHOTO, SERVER_DOWNLOAD_PATH } from './../../shared/config';
import { FileUploadResult } from '@ionic-native/file-transfer/ngx';
import { MediaType, Photo } from 'src/app/models/my-media';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform, ModalController } from '@ionic/angular';
import { PhotoLocal } from 'src/app/models/LocalMediaInterfaces';
import { MySignals } from 'src/app/shared/services/my-signals';
import { LocalMediaService } from 'src/app/shared/services/providers/storage/local-media.service';
import { PermissionsService } from 'src/app/shared/services/providers/permission.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { DOWNLOAD_CONTAINER } from 'src/app/shared/config';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { MediaService } from 'src/app/shared/services/model-service/media.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-my-photo-picker',
  templateUrl: './my-photo-picker.component.html',
  styleUrls: ['./my-photo-picker.component.scss'],
})
export class MyPhotoPickerComponent implements OnInit, OnDestroy, AfterViewInit {
  private _galleryType = 'local'; // local or
   _isComponent = false;
  sub$ = [];
  devicePhotos: PhotoLocal[] = [];
  cloudPhotos: Photo[] = [];
  selectedCloudPhotos: Photo[] = [];
  uploadedPhotos: Photo[] = [];
  user: User;

  isAccessDenied = false;

  noPhotosImage = NO_IMAGE_PHOTO;


  constructor(
    private localMediaService: LocalMediaService,
    private mediaService: MediaService,
    private userService: UserService,
    private photoLibrary: PhotoLibrary,
    private permissionService: PermissionsService,
    private plt: Platform,
    private signals: MySignals,
    private toaster: ToasterService,
    private cdr: ChangeDetectorRef) {

    // verify device permissions
    this.photoLibrary.requestAuthorization().then(_ => _).catch(error => {
      this.signals.log('Photo library permission denied');
      this.isAccessDenied = true;
    });
  }

  async ngAfterViewInit() {

  }

  async ngOnInit() {
    await this.plt.ready();
    this.userService.getUserLocal().then(user => {
      this.user = user;
      this.loadCloudPhotos();
      this.getLatestPhotos().then(_ => _);
    });

  }

  async ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }

  set galleryType(type: string) {
    this._galleryType = type;
    // if (type === 'cloud') {
    //   // allow double click
    //   setTimeout(() => {

    //   }, 2000);

    // } else {

    // }
  }
  get galleryType() {
    return this._galleryType;
  }

  set IsComponent(ans: boolean) {
    this._isComponent = ans;
  }

  // Read photos from device and set it to the view
  // Uri path must be result from filesystem to http type
  async getLatestPhotos() {
    // this.signals.log('----------------');
    if (this.isAccessDenied) {
      await this.permissionService.getPhotolibraryPermission();
    }

    this.photoLibrary.getLibrary().subscribe({
      next: library => {
        this.isAccessDenied = false;
        if (library.length > 4) {
          library = library.slice(0, 4); // slice first 4 items
        }
        // reset photos array
        this.devicePhotos = [];
        library?.forEach(libraryItem => {
          const temp: PhotoLocal = {
            id: libraryItem.id,
            fileName: libraryItem.fileName,
            nativeURL: libraryItem.photoURL,
            thumbnailNativeURL: libraryItem.thumbnailURL,
            creationDate: libraryItem.creationDate
          };
          this.devicePhotos.push(temp);
          if (temp.id === library[library.length - 1]?.id) { // if last item
            this.resolvePaths().then(_ => _);
          }
        });
      },
      error: err => { console.log('could not get photos'); },
      complete: () => { console.log('done getting photos'); }
    });
  }

  async resolvePaths() {
    this.devicePhotos.forEach(ph => {
      this.localMediaService.convertPhotoLibraryPathToNativeUrl(ph).then(path => {
        ph.thumbnailResolvedURL = Capacitor.convertFileSrc(path);
        ph.resolvedURL = Capacitor.convertFileSrc(path);
        ph.nativeURL = path;
        ph.thumbnailNativeURL = path;
        // this.signals.log(ph.thumbnailResolvedURL);
      }).catch(e => {
        this.signals.log(e);
      });
    });
    this.cdr.detectChanges();
  }

  selectPhoto() {
    this.localMediaService.selectPhotosFromDevice().then(photos => {
      if (photos?.length > 0) {
        this.devicePhotos = [...this.devicePhotos, ...photos];
      }
    });
  }


  // viewPhoto(uri) {
  //   try {
  //     setTimeout(() => {
  //       this.photoViewer.show(uri, '', { share: true });
  //     }, 200);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  takePhoto() {
    this.localMediaService.takePhoto().then(photo => {
      if (photo?.id) {
        this.devicePhotos.push(photo);
      }
    });
  }


  deleteFromDevicePhotos(ph: PhotoLocal) {
    console.log('Removing from device');
    this.devicePhotos = this.devicePhotos.filter(photo => {
      console.log(ph.id);
      console.log(photo.id);
      return ph.id != photo.id;
    });
  }

  deleteFromCloudPhotos(ph: Photo) {
    console.log(ph);
    this.cloudPhotos = this.cloudPhotos.filter(photo => {
      return ph.id != photo.id;
    });
  }

  selectFromCloudPhotos(ph$: Photo) {
    if (this.selectedCloudPhotos.includes(ph$)) {
      // remove
      this.selectedCloudPhotos = this.selectedCloudPhotos.filter(ph => {
        return ph.id !== ph$?.id;
      });
    } else {
      // add
      this.selectedCloudPhotos.push(ph$);
    }
    console.log(this.selectedCloudPhotos);
  }

  uploadPhotos() {
    // move photos to permanent storage folder
    const photos: Photo[] = [];
    this.devicePhotos.forEach(photo => {
      // make a copy of the image to permanent storage
      this.localMediaService.writeVideoToMediaDirectory(photo?.nativeURL).then(ph => {

        // upload photo and instruct to create thumbnail on server
        this.localMediaService.upload(ph?.nativeURL, ph?.fileName, true).then(result => {
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
            const uploadedPhoto = {
              description: '',
              fileName: ph.fileName,
              fileUrl: SERVER_DOWNLOAD_PATH + ph.fileName,
              dateCreated: new Date(),
              type: MediaType.PHOTO,
              thumbnailUrl: SERVER_DOWNLOAD_PATH + 'thumb_' + ph.fileName
            } as any;

            photos.push(uploadedPhoto);
            this.signals.announceUploadComplete(uploadedPhoto);

            // delete from device photos
            this.deleteFromDevicePhotos(photo);

            if (this.devicePhotos?.length === 0) {
              // Fire all upload complete
              this.signals.announceAllUploadComplete(photos);

              // Reload cloud photos
            }
          }
        });
      }, error => {
        console.log(JSON.stringify(error));
        this.toaster.toast('Uploading some files failed, Please check your network');
      });
    }, error => {
      console.log(JSON.stringify(error));
      this.toaster.toast('Uploading some files failed, Please check your network');
    });
  }

  loadCloudPhotos() {
    this.mediaService.getUserPhotos(this.user?.id).subscribe(photos => {
      console.log(this.user?.id);
      this.cloudPhotos = [...photos];
      if (this.cloudPhotos?.length > 0) {
        this.galleryType = 'cloud';
      }
    }, error => {
      console.log(error);
    });
  }

  isSelected(ph: Photo | PhotoLocal) {
    return this.selectedCloudPhotos.includes(ph as Photo);
  }

  close() {

  }



}
