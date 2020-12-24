import { MediaService } from 'src/app/shared/services/model-service/media.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Platform } from '@ionic/angular';
import { VideoLocal } from 'src/app/models/LocalMediaInterfaces';
import { MySignals } from 'src/app/shared/services/my-signals';
import { LocalMediaService } from 'src/app/shared/services/providers/local-media.service';
import { PermissionsService } from 'src/app/shared/services/providers/permission.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Plugins } from '@capacitor/core';
const { CapacitorVideoPlayer, Device } = Plugins;
import * as PluginsLibrary from 'capacitor-video-player';
import { FileUploadResult } from '@ionic-native/file-transfer/ngx';
import { Video, MediaType } from 'src/app/models/my-media';
import { User } from 'src/app/models/user';
import { NO_VIDEO_PHOTO, SERVER_DOWNLOAD_PATH } from 'src/app/shared/config';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-my-video-picker',
  templateUrl: './my-video-picker.component.html',
  styleUrls: ['./my-video-picker.component.scss'],
})
export class MyVideoPickerComponent implements OnInit, OnDestroy, AfterViewInit {
  galleryType = 'cloud';  // local or cloud
  noVideoPhoto =  NO_VIDEO_PHOTO;
  sub$ = [];
  deviceVideos: VideoLocal[] = [];
  cloudVideos: Video[] = [];
  selectedCloudVideos: Video[] = [];
  uploadedVideos: Video[] = [];
  isAccessDenied = false;
  // cloudVideos: VideoLocal[] = [];

  user: User;

  constructor(
    private localMediaService: LocalMediaService,
    private plt: Platform,
    private toaster: ToasterService,
    private cdr: ChangeDetectorRef,
    private signals: MySignals,
    private mediaService: MediaService,
    private userService: UserService
  ) {
    this.deviceVideos = [];
  }

  async ngAfterViewInit() {
    // await this.getLatestVideos();
    // const info = await Device.getInfo();
    // if (info.platform === 'ios' || info.platform === 'android') {
    //   this.videoPlayer = CapacitorVideoPlayer;
    // } else {
    //   this.videoPlayer = PluginsLibrary.CapacitorVideoPlayer;
    // }
  }

  async ngOnInit() {
    await this.plt.ready();
    this.userService.getUserLocal().then(user => {
      this.user = user;
      this.loadCloudVideos();
      // this.getLatestPhotos().then(_ => _);
    });
  }

  async ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }


  // Read videos from device and set it to the view
  // Uri path must be result from filesystem to http type
  async getLatestVideos() {

  }

  // async play(url: string) {
  //   document.addEventListener('jeepCapVideoPlayerPlay',
  //     (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPlay ', e.detail); }, false);
  //   document.addEventListener('jeepCapVideoPlayerPause',
  //     (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPause ', e.detail); }, false);
  //   document.addEventListener('jeepCapVideoPlayerEnded',
  //     (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerEnded ', e.detail); }, false);
  //   const res: any = await this.videoPlayer.initPlayer({ mode: 'fullscreen', url });
  // }



  deleteFromCloudVideos(vid: VideoLocal) {
    this.deviceVideos = this.deviceVideos.filter(videos => {
      // console.log(vid?.id);
      // console.log(videos.id);
      return vid.id !== videos.id;
    });
  }


  // Does not remove permanently from the device
  // but from the application memory
  deleteFromDeviceVideos(vid: VideoLocal) {
    this.deviceVideos = this.deviceVideos.filter(video => {
      return video.id !== vid.id;
    });
  }



  async recordVideo() {
    const vid: VideoLocal = await this.localMediaService.recordVideo().catch(error => console.log(JSON.stringify(error))) as any;
    if (vid?.id) {
      console.log(JSON.stringify(vid));
      this.deviceVideos = [...this.deviceVideos, vid];
      console.log(JSON.stringify(this.deviceVideos));
      this.cdr.detectChanges();
    }
  }

  uploadVideos() {
    // move videos to permanent storage folder
    const videos: Video[] = [];
    this.deviceVideos.forEach(video => {
      // copy video to permanent location 
      this.localMediaService.writeVideoToMediaDirectory(video?.nativeURL).then(vid => {
        // upload video and instruct to create thumbnail on server
        this.localMediaService.upload(vid?.nativeURL, vid?.fileName, true).then(result => {
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
            const fileName = vid.fileName.substr(0, vid.fileName.lastIndexOf('.'));
            const uploadedVideo = {
              description: '',
              fileName: vid.fileName,
              fileUrl: '/' + vid.fileName,
              dateCreated: new Date(),
              type: MediaType.VIDEO,
              thumbnailUrl: '/thumb_' + fileName + '.jpg',
              posterUrl: '/poster_' + fileName + '.jpg',
              length: vid.length
            } as any;

            videos.push(uploadedVideo);
            this.signals.announceUploadComplete(uploadedVideo);

            // delete from device videos
            this.deleteFromDeviceVideos(video);

            if (this.deviceVideos?.length === 0) {
              // Fire all upload complete
              this.signals.announceAllUploadComplete(videos);
              // Reload cloud videos
            }
          }
        });
      }, error => {
        this.toaster.toast('Uploading some files failed, Please check your network');
      });
    }, error => {
      console.log(error);
    });
  }


  loadCloudVideos() {
    this.mediaService.getUserVideos(this.user?.id).subscribe(videos => {
      console.log(this.user?.id);
      this.cloudVideos = [...videos];
      if (this.cloudVideos?.length > 0) {
        this.galleryType = 'cloud';
      }
    }, error => {
      console.log(error);
    });
  }


  isSelected(vid: Video | VideoLocal) {
    return this.selectedCloudVideos.includes(vid as Video);
  }
  selectVideo() {
    this.localMediaService.selectVideoFromDevice().then(video => {
      console.log(JSON.stringify(video));
      if (video?.id) {
        this.deviceVideos = [...this.deviceVideos, video];
      }
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  selectFromCloudVideos(vid$: Video) {
    if (this.selectedCloudVideos.includes(vid$)) {
      // remove
      this.selectedCloudVideos = this.selectedCloudVideos.filter(vid => {
        return vid.id !== vid$?.id;
      });
    } else {
      // add
      this.selectedCloudVideos.push(vid$);
    }
    console.log(JSON.stringify(this.selectedCloudVideos));
  }
}
