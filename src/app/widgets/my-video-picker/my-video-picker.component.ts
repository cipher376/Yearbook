import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform } from '@ionic/angular';
import { PhotoLocal } from 'src/app/models/LocalMediaInterfaces';
import { MySignals } from 'src/app/shared/services/my-signals';
import { LocalMediaService } from 'src/app/shared/services/providers/local-media.service';
import { PermissionsService } from 'src/app/shared/services/providers/permission.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

@Component({
  selector: 'app-my-video-picker',
  templateUrl: './my-video-picker.component.html',
  styleUrls: ['./my-video-picker.component.scss'],
})
export class MyVideoPickerComponent implements OnInit, OnDestroy, AfterViewInit {
  galleryType = 'cloud';
  sub$ = [];
  devicePhotos: PhotoLocal[] = [];
  isAccessDenied = false;

  MAX_PHOTO_POST_COUNT = 10;

  constructor(
    private localMediaService: LocalMediaService,
    private photoLibrary: PhotoLibrary,
    private permissionService: PermissionsService,
    private plt: Platform,
    private signals: MySignals,
    private imagePicker: ImagePicker,
    private photoViewer: PhotoViewer) {
      
    // verify device permissions
    this.photoLibrary.requestAuthorization().then(_ => _).catch(error => {
      this.signals.log('Photo library permission denied');
      this.isAccessDenied = true;
    });
  }

  async ngAfterViewInit() {
    await this.get3LatestPhotos();
  }

  async ngOnInit() {
    await this.plt.ready();
  }

  async ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }


  // Read photos from device and set it to the view
  // Uri path must be result from filesystem to http type
  async get3LatestPhotos() {
    // this.signals.log('----------------');
    if (this.isAccessDenied) {
      await this.permissionService.getPhotolibraryPermission();
    }

    this.photoLibrary.getLibrary().subscribe({
      next: library => {
        this.isAccessDenied = false;
        if (library.length > 3) {
          library = library.slice(0, 3); // slice first 3 items
        }
        // reset photos array
        this.devicePhotos = [];
        library.forEach(libraryItem => {
          const temp: PhotoLocal = {
            id: libraryItem.id,
            fileName: libraryItem.fileName,
            photoNativeURL: libraryItem.photoURL,
            thumbnailNativeURL: libraryItem.thumbnailURL,
            creationDate: libraryItem.creationDate
          };
          this.devicePhotos.push(temp);

          if (temp.id === library[library.length - 1].id) { // if last item
            this.resolvePaths().then(_ => _
              // this.signals.log('Resolved paths')
            );
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
        ph.photoResolvedURL = Capacitor.convertFileSrc(path);
        // this.signals.log(ph.thumbnailResolvedURL);
      }).catch(e => {
        this.signals.log(e);
      });
    });
  }

  selectPhoto() {
    const options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: this.MAX_PHOTO_POST_COUNT,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 8000,
      height: 800,

      // quality of resized image, defaults to 100
      quality: 70,

      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      this.devicePhotos = [];
      results.forEach(fileUri => {
        this.devicePhotos.push({
          id: '0;' + fileUri,
          fileName: this.localMediaService.getFileName(fileUri),
          photoNativeURL: fileUri,
          thumbnailNativeURL: fileUri,
          creationDate: new Date(Date.now()),
          photoResolvedURL: Capacitor.convertFileSrc(fileUri),
          thumbnailResolvedURL: Capacitor.convertFileSrc(fileUri),
        });
      });
    }, (err) => { });
  }


  viewPhoto(uri) {
    this.photoViewer.show(uri, '', { share: true });
  }

  takePhoto() {
    // this.localMediaService.takePhoto();
    this.localMediaService.getPhoto().then(photo => {
      this.devicePhotos.push(photo);
    });
  }
}
