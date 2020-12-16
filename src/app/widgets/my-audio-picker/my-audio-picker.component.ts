import { MediaService } from 'src/app/shared/services/model-service/media.service';
import { Audio } from './../../models/my-media';
import { AudioLocal } from './../../models/LocalMediaInterfaces';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { MySignals } from 'src/app/shared/services/my-signals';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { AudioRecorderComponent } from '../audio-recorder/audio-recorder.component';
import { FileUploadResult } from '@ionic-native/file-transfer/ngx';
import { MediaType } from 'src/app/models/my-media';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
import { LocalMediaService } from 'src/app/shared/services/providers/local-media.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-my-audio-picker',
  templateUrl: './my-audio-picker.component.html',
  styleUrls: ['./my-audio-picker.component.scss'],
})
export class MyAudioPickerComponent implements OnInit, OnDestroy, AfterViewInit {
  galleryType = 'cloud';
  sub$ = [];
  deviceAudios: AudioLocal[] = [];
  cloudAudios: Audio[] = [];
  selectedCloudAudios: Audio[] = [];
  uploadedAudios: Audio[] = [];

  isAccessDenied = false;

  user: User;

  constructor(
    private localMediaService: LocalMediaService,
    private plt: Platform,
    private signals: MySignals,
    private cdr: ChangeDetectorRef,
    private modalController: ModalController,
    private toaster: ToasterService, 
    private mediaService: MediaService,
    private userService: UserService

     ) {


  }

  async ngAfterViewInit() {
  }

  async ngOnInit() {
    await this.plt.ready();
    this.userService.getUserLocal().then(user => {
      this.user = user;
      this.loadCloudAudios();
      // this.getLatestPhotos().then(_ => _);
    });
  }

  async ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }


 

  // playAudio(aud: AudioLocal) {
  //   this.previewAnyFile.preview(aud.nativeURL.replace('file//', ''))
  //     .then((res: any) => console.log(res))
  //     .catch((error: any) => console.error(error));
  // }


  deleteFromCloudAudios(aud: AudioLocal) {
    this.deviceAudios = this.deviceAudios.filter(aud => {
      // console.log(aud?.id);
      // console.log(audios.id);
      return aud.id !== aud.id;
    });
  }

  // Does not remove permanently from the device
  // but from the application memory
  deleteFromDeviceAudios(aud: AudioLocal) {
    this.deviceAudios = this.deviceAudios.filter(audio => {
      return audio.id !== aud.id;
    });
  }


  async recordAudio() {
    const modal = await this.modalController.create({
      component: AudioRecorderComponent,
      cssClass: 'record-modal-class'
    });
    this.sub$.push(this.signals.closeModalSource$.subscribe(modalName => {
      if (modalName === 'audio-recorder') { // check if its the recorded modal
        modal?.dismiss();
      }
    }));

    // get the recorded file path
    this.sub$.push(this.signals.audioRecordingCompleteSource$.subscribe(aud => {
      this.deviceAudios = [...this.deviceAudios, aud];
      console.log(JSON.stringify(this.deviceAudios));
      this.cdr.detectChanges();
      modal?.dismiss();
    }));
    await modal.present();

  }

  uploadAudios() {
    // move audios to permanent storage folder
    const audios: Audio[] = [];
    this.deviceAudios.forEach(audio => {
      // copy audio to permanent location
      this.localMediaService.writeAudioToMediaDirectory(audio?.nativeURL).then(aud => {
        // upload audio and instruct to create thumbnail on server
        this.localMediaService.upload(aud?.nativeURL, aud?.fileName, true).then(result => {
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
            const fileName = aud.fileName.substr(0, aud.fileName.lastIndexOf('.'));
            const uploadedAudio = {
              description: '',
              fileName: aud.fileName,
              fileUrl: '/' + aud.fileName,
              dateCreated: new Date(),
              type: MediaType.AUDIO,
              length: aud.length
            } as any;

            audios.push(uploadedAudio);
            this.signals.announceUploadCompleteSource(uploadedAudio);

            // delete from device audios
            this.deleteFromDeviceAudios(audio);

            if (this.deviceAudios?.length === 0) {
              // Fire all upload complete
              this.signals.announceAllUploadCompleteSource(audios);
              // Reload cloud audios
            }
          }
        });
      }, error => {
        this.toaster.toast('Uploading some audio files failed, Please check your network');
      });
    }, error => {
      console.log(error);
    });
  }

  selectFromCloudAudios(aud$: Audio) {
    if (this.selectedCloudAudios.includes(aud$)) {
      // remove
      this.selectedCloudAudios = this.selectedCloudAudios.filter(aud => {
        return aud.id !== aud$?.id;
      });
    } else {
      // add
      this.selectedCloudAudios.push(aud$);
    }
    console.log(JSON.stringify(this.selectedCloudAudios));
  }
  isSelected(aud: Audio | AudioLocal) {
    return this.selectedCloudAudios.includes(aud as Audio);
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

  loadCloudAudios() {
    this.mediaService.getUserAudios(this.user?.id).subscribe(aud => {
      console.log(this.user?.id);
      this.cloudAudios = [...aud];
      if (this.cloudAudios?.length > 0) {
        this.galleryType = 'cloud';
      }
    }, error => {
      console.log(error);
    });
  }

}
