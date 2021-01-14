import { LocalMediaService } from 'src/app/shared/services/providers/local-media.service';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entry, File, } from '@ionic-native/file/ngx';
import { MySignals } from 'src/app/shared/services/my-signals';
import { Capacitor } from '@capacitor/core';
import { AudioLocal } from 'src/app/models/LocalMediaInterfaces';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.scss'],
})
export class AudioRecorderComponent implements OnInit {

  status = '';
  counter = 0;
  audioFile: MediaObject;
  currentFile = '';

  @Output() filePath = new EventEmitter<string>();

  constructor(
    private media: Media,
    private file: File,
    private signals: MySignals,
    private localMediaService: LocalMediaService) { }

  ngOnInit() { }

  start() {
    this.counter += 1;
    this.currentFile = this.file.dataDirectory + '/media/' + this.localMediaService.createFileName('temp.mp3');
    this.audioFile = this.media.create(this.currentFile);
    this.audioFile?.startRecord();
    this.status = 'Recording...';
  }

  stop() {
    this.audioFile?.stopRecord();

    // wait for 2 seconds
    setTimeout(() => {
      this.status = 'stopped';
      this.filePath.emit(this.currentFile);
      const uri = this.currentFile;
      const fileName = uri.substr(uri.lastIndexOf('/') + 1);
      const resolvedUri = Capacitor.convertFileSrc(uri);
      // create a local audio object and return
      const aud = {
        id: '0;' + uri,
        nativeURL: uri,
        posterNativeURL: '',
        resolvedURL: resolvedUri,
        posterResolvedURL: '',
        fileName,
        creationDate: new Date(Date.now()),
        length: this.audioFile.getDuration()
      } as AudioLocal;
      this.signals.announceAudioRecordingComplete(aud);
    }, 2000);

    // this.closeModals(); // close the modal its used as a modal;
  }

  play() {
    this.audioFile.play();
    // this.previewAnyFile.preview(this.file.dataDirectory + '/media/audiofile' + this.counter + '.mp3'.replace('file//', ''))
  }

  stopPlay() {
    this.audioFile.stop();
  }

  closeModals() {
    this.signals.announceCloseModal('audio-recorder');
  }

}
