import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { GestureController } from '@ionic/angular';
import { VideoLocal } from 'src/app/models/LocalMediaInterfaces';
import { Video } from 'src/app/models/my-media';
import { DOWNLOAD_CONTAINER } from 'src/app/shared/config';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() location = 'cloud'; // cloud || local
  @Input() thumb: any; // Video || VideoLocal
  selected = false;
  @Input() count = 0;

  @ViewChild('videoThumbnail') videoThumbnail: ElementRef; // element to double click
  // private lastOnStart = 0; // double click start count
  // private DOUBLE_CLICK_THRESHOLD = 600;

  @Output() delete = new EventEmitter<boolean>();
  @Output() isSelected = new EventEmitter<Video | VideoLocal>();

  downloadUrlRoot = DOWNLOAD_CONTAINER;

  constructor(
    // private gestureCtrl: GestureController,
    private previewAnyFile: PreviewAnyFile,
  ) { }


  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   const gesture = this.gestureCtrl.create({
    //     el: this.videoThumbnail.nativeElement,
    //     threshold: 0,
    //     gestureName: 'double-click',
    //     onStart: () => { this.onDoubleClickVideoThumbnail(); }
    //   });
    //   console.log(gesture);
    //   gesture.enable();
    // }, 2000);
  }


  ngOnInit() {

  }

  ngAfterContentInit() {

  }

  select() {
    this.selected = !this.selected;
    this.isSelected.emit(this.thumb);
  }

  onDoubleClickVideoThumbnail() {
    // const now = Date.now();
    // if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
    //   this.preview();
    //   this.lastOnStart = 0;
    // } else {
    //   this.lastOnStart = now;
    // }

    this.preview();
  }

  preview() {
    let path = '';
    console.log(this.location);
    try {
      if (this.location == 'cloud') {
        console.log('cloud');
        path = this.downloadUrlRoot + (this.thumb as Video).fileName;
      } else if (this.location == 'local') {
        console.log('local');
        path = (this.thumb as VideoLocal).nativeURL;
        path = path.replace('file//', '');
      }else {
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

  getThumbnailUrl() {
    if (this.location == 'cloud') {
      return this.downloadUrlRoot + (this.thumb as Video).thumbnailUrl;
    } else if (this.location == 'local') {
      return (this.thumb as VideoLocal).posterResolvedURL;
    }
  }

  onDelete() {
    this.delete.emit(true);
  }

}
