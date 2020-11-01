import { MySignals } from 'src/app/shared/services/my-signals';
import { Platform } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PhotoLocal } from '../../models/LocalMediaInterfaces';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { MediaType } from '../../models/my-media';
import { PermissionsService } from '../../shared/services/providers/permission.service';
import { Photo } from 'src/app/models/my-media';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { LocalMediaService } from '../../shared/services/providers/local-media.service';
import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Capacitor, Plugins, CameraResultType, FilesystemDirectory } from '@capacitor/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit, OnDestroy, AfterViewInit {

  galleryType = 'cloud';
 

  sub$ = [];
  constructor(
    private localMediaService: LocalMediaService,
    private photoLibrary: PhotoLibrary,
    private permissionService: PermissionsService,
    private filePath: FilePath,
    private file: File,
    private plt: Platform,
    private signals: MySignals,
    private imagePicker: ImagePicker,
    private photoViewer: PhotoViewer
  ) {
    UtilityService.patch_IonicNativePhotoLibrary(photoLibrary);

    
  }

  async ngAfterViewInit() {
  }

  async ngOnInit() {
    await this.plt.ready();
  }

  async ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }


  recordVideo() {

  }

  recordAudio() {

  }

}
