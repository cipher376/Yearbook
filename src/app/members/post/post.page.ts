import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { MediaType } from './../../models/media';
import { PermissionsService } from '../../shared/services/providers/permission.service';
import { Photo } from 'src/app/models/media';
import { LocalMediaService } from '../../shared/services/providers/local-media.service';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  galleryType = 'cloud';
  devicePhotos: Photo[] = [];
  isAccessDenied = false;

  constructor(
    private localMediaService: LocalMediaService,
    private photoLibrary: PhotoLibrary,
    private permissionService: PermissionsService,

  ) {
    UtilityService.patch_IonicNativePhotoLibrary(photoLibrary);

    // verify device permissions
    this.photoLibrary.requestAuthorization().then(_ => _).catch(error => {
      console.log('Photo library permission denied');
      this.isAccessDenied = true;
    });
  }

  ngOnInit() {
  }



  // Read photos from device
  async get3LatestPhotos() {
    if (this.isAccessDenied) {
      await this.permissionService.getPhotolibraryPermission();
    }

    await this.photoLibrary.getLibrary().subscribe({
      next: library => {
        this.isAccessDenied = false;
        console.log(library);
        library.forEach(libraryItem => {
          console.log(libraryItem.id);          // ID of the photo
          console.log(libraryItem.photoURL);    // Cross-platform access to photo
          console.log(libraryItem.thumbnailURL); // Cross-platform access to thumbnail
          console.log(libraryItem.fileName);
          console.log(libraryItem.creationDate);

          const temp = new Photo({
            id: 0,
            description: '',
            fileName: libraryItem.fileName,
            fileUrl: libraryItem.photoURL,
            thumbnailUrl: libraryItem.thumbnailURL,
            dateCreated: libraryItem.creationDate,
            type: MediaType.PHOTO
          });
          this.devicePhotos.push(temp);
        });
      },
      error: err => { console.log('could not get photos'); },
      complete: () => { console.log('done getting photos'); }
    });

  }

}
