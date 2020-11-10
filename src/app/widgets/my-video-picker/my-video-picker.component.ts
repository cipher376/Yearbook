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

@Component({
  selector: 'app-my-video-picker',
  templateUrl: './my-video-picker.component.html',
  styleUrls: ['./my-video-picker.component.scss'],
})
export class MyVideoPickerComponent implements OnInit, OnDestroy, AfterViewInit {
  galleryType = 'cloud';  // local or cloud
  sub$ = [];
  deviceVideos: VideoLocal[];
  isAccessDenied = false;
  // cloudVideos: VideoLocal[] = [];

  MAX_PHOTO_POST_COUNT = 10;
  videoPlayer: any;

  constructor(
    private localMediaService: LocalMediaService,
    private plt: Platform,
    private cdr: ChangeDetectorRef,
    private previewAnyFile: PreviewAnyFile
  ) {
    this.deviceVideos = [];
  }

  async ngAfterViewInit() {
    await this.getLatestVideos();
    const info = await Device.getInfo();
    if (info.platform === 'ios' || info.platform === 'android') {
      this.videoPlayer = CapacitorVideoPlayer;
    } else {
      this.videoPlayer = PluginsLibrary.CapacitorVideoPlayer;
    }
  }

  async ngOnInit() {
    await this.plt.ready();
}

async ngOnDestroy() {
  UtilityService.destroySubscription(this.sub$);
}


// Read videos from device and set it to the view
// Uri path must be result from filesystem to http type
async getLatestVideos() {

}

async selectVideo() {
  this.localMediaService.selectVideoFromDevice().then(vid => {
    if (vid?.id) {
      console.log(JSON.stringify(vid));
      this.deviceVideos = [...this.deviceVideos, vid];
      console.log(JSON.stringify(this.deviceVideos));
      this.cdr.detectChanges();
    }
  });
}


previewVideo(vid: VideoLocal) {
  this.previewAnyFile.preview(vid.nativeURL.replace('file//', ''))
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
}

async play(url: string) {
  document.addEventListener('jeepCapVideoPlayerPlay',
    (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPlay ', e.detail); }, false);
  document.addEventListener('jeepCapVideoPlayerPause',
    (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerPause ', e.detail); }, false);
  document.addEventListener('jeepCapVideoPlayerEnded',
    (e: CustomEvent) => { console.log('Event jeepCapVideoPlayerEnded ', e.detail); }, false);
  const res: any = await this.videoPlayer.initPlayer({ mode: 'fullscreen', url });

}



deleteFromCloudVideos(vid: VideoLocal) {
  // this.cloudVideos = this.cloudVideos.filter(video => {
  //   return video.id !== vid.id;
  // });
}

// Does not remove permanently from the device
// but from the application memory
deleteFromDeviceVideos(vid: VideoLocal) {
  this.deviceVideos = this.deviceVideos.filter(video => {
    return video.id !== vid.id;
  });
}

async recordVideo() {
  const vid = await this.localMediaService.recordVideo();
  if (vid?.id) {
    console.log(JSON.stringify(vid));
    this.deviceVideos = [...this.deviceVideos, vid];
    console.log(JSON.stringify(this.deviceVideos));
    this.cdr.detectChanges();
  }
}

}
