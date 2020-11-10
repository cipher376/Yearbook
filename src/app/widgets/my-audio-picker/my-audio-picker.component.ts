import { AudioLocal } from './../../models/LocalMediaInterfaces';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Platform } from '@ionic/angular';
import { MySignals } from 'src/app/shared/services/my-signals';
import { LocalMediaService } from 'src/app/shared/services/providers/local-media.service';
import { PermissionsService } from 'src/app/shared/services/providers/permission.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-my-audio-picker',
  templateUrl: './my-audio-picker.component.html',
  styleUrls: ['./my-audio-picker.component.scss'],
})
export class MyAudioPickerComponent implements OnInit, OnDestroy, AfterViewInit {
  galleryType = 'cloud';
  sub$ = [];
  deviceAudios: AudioLocal[] = [];
  isAccessDenied = false;

  MAX_PHOTO_POST_COUNT = 10;

  constructor(
    private localMediaService: LocalMediaService,
    private plt: Platform,
    private signals: MySignals,
    private cdr: ChangeDetectorRef,
    private previewAnyFile: PreviewAnyFile) {


  }

  async ngAfterViewInit() {
  }

  async ngOnInit() {
    await this.plt.ready();
  }

  async ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }


  selectAudio() {
    this.localMediaService.selectAudioFromDevice().then(aud => {
      if (aud?.id) {
        console.log(JSON.stringify(aud));
        this.deviceAudios = [...this.deviceAudios, aud];
        console.log(JSON.stringify(this.deviceAudios));
        this.cdr.detectChanges();
      }
    });
  }


  playAudio(aud: AudioLocal) {
    this.previewAnyFile.preview(aud.nativeURL.replace('file//', ''))
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }

  async recordAudio() {
    const aud = await this.localMediaService.recordAudio();
    if (aud?.id) {
      console.log(JSON.stringify(aud));
      this.deviceAudios = [...this.deviceAudios, aud];
      console.log(JSON.stringify(this.deviceAudios));
      this.cdr.detectChanges();
    }
  }
  deleteFromCloudAudios(aud: AudioLocal) {
    // this.cloudAudios = this.cloudAudios.filter(video => {
    //   return video.id !== aud.id;
    // });
  }

  // Does not remove permanently from the device
  // but from the application memory
  deleteFromDeviceAudios(aud: AudioLocal) {
    this.deviceAudios = this.deviceAudios.filter(video => {
      return video.id !== aud.id;
    });
  }
 
}
