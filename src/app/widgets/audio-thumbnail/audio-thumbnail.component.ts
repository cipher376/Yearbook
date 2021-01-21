import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Audio } from './../../models/my-media';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AudioLocal } from 'src/app/models/LocalMediaInterfaces';
import { DOWNLOAD_CONTAINER } from 'src/app/shared/config';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-audio-thumbnail',
  templateUrl: './audio-thumbnail.component.html',
  styleUrls: ['./audio-thumbnail.component.scss'],
})
export class AudioThumbnailComponent implements OnInit {
  @Input() location = 'cloud'; // cloud || local
  thumb: any; // Audio || AudioLocal
  selected = false;
  @Input() count = 0;

  @ViewChild('audioThumbnail') audioThumbnail: ElementRef; // element to double click
  @Output() delete = new EventEmitter<boolean>();
  @Output() isSelected = new EventEmitter<Audio | AudioLocal>();

  downloadUrlRoot = DOWNLOAD_CONTAINER;

  audioFile: MediaObject;
  filePath: string;

  constructor(
    private previewAnyFile: PreviewAnyFile,
    private media: Media
  ) { }

  ngOnInit() { }

  @Input() set Thumb(file: any){
    this.thumb = file;
    this.init();
  }

  select() {
    this.selected = !this.selected;
    this.isSelected.emit(this.thumb);
  }

  // onDoubleClickAudioThumbnail() {
  //   this.preview();
  // }

  togglePlay(a: any, b: any) {
    a.el.name === 'play' ? a.el.name = 'pause' : a.el.name = 'play';
    if (a.el.name === 'play') {
      this.audioFile?.play();
    } else {
      this.audioFile?.stop(); // stop recording
    }
  }

  init() {
    try {
      if (this.location === 'cloud') {
        console.log('cloud');
        this.filePath = this.downloadUrlRoot + (this.thumb as Audio).fileName;
        // download the file from server b4 playing
      } else if (this.location === 'local') {
        console.log('local');
        this.filePath = (this.thumb as AudioLocal).nativeURL;
        // this.filePath = this.filePath.replace('file//', '');
      } else {
        console.log('Unknown location');
      }
      console.log(JSON.stringify(this.thumb));
      console.log(this.filePath);

      if (!this.audioFile) {
        this.audioFile = this.media.create(this.filePath);
      }
      console.log(JSON.stringify(this.audioFile));

      // this.previewAnyFile.preview(path)
      //   .then((res: any) => console.log(JSON.stringify(res)))
      //   .catch((error: any) => console.error(JSON.stringify(error)));
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  // getThumbnailUrl() {
  //   if (this.location == 'cloud') {
  //     return this.downloadUrlRoot + (this.thumb as Audio).thumbnailUrl;
  //   } else if (this.location == 'local') {
  //     return (this.thumb as AudioLocal).posterResolvedURL;
  //   }
  // }

  onDelete() {
    this.delete.emit(true);
  }
}
