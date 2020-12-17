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
  @Input() thumb: any; // Audio || AudioLocal
  selected = false;
  @Input() count = 0;

  @ViewChild('audioThumbnail') audioThumbnail: ElementRef; // element to double click
  @Output() delete = new EventEmitter<boolean>();
  @Output() isSelected = new EventEmitter<Audio | AudioLocal>();

  downloadUrlRoot = DOWNLOAD_CONTAINER;

  constructor(
    private previewAnyFile: PreviewAnyFile,
  ) { }

  ngOnInit() { }
  select() {
    this.selected = !this.selected;
    this.isSelected.emit(this.thumb);
  }

  onDoubleClickAudioThumbnail() {
    this.preview();
  }

  togglePlay(a: any, b: any) {
    a.el.name === 'play' ? a.el.name = 'pause' : a.el.name = 'play';
  }

  preview() {
    let path = '';
    console.log(this.location);
    try {
      if (this.location == 'cloud') {
        console.log('cloud');
        path = this.downloadUrlRoot + (this.thumb as Audio).fileName;
      } else if (this.location == 'local') {
        console.log('local');
        path = (this.thumb as AudioLocal).nativeURL;
        path = path.replace('file//', '');
      } else {
        console.log('Unknown location');
      }
      console.log(JSON.stringify(this.thumb));
      this.previewAnyFile.preview(path)
        .then((res: any) => console.log(JSON.stringify(res)))
        .catch((error: any) => console.error(JSON.stringify(error)));
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
