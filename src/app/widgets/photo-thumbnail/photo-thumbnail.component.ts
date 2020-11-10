import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { GestureController } from '@ionic/angular';
import { PhotoLocal } from 'src/app/models/LocalMediaInterfaces';
import { Photo } from 'src/app/models/my-media';
import { DOWNLOAD_CONTAINER } from 'src/app/shared/config';

@Component({
  selector: 'app-photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.scss'],
})
export class PhotoThumbnailComponent implements OnInit, AfterContentInit {
  @Input() thumb: any; // Photo || PhotoLocal
  selected = false;
  @Input() count = 0;

  @ViewChild('photoThumbnail') photoThumbnail: ElementRef; // element to double click
  private lastOnStart = 0; // double click start count
  private DOUBLE_CLICK_THRESHOLD = 500;

  @Output() delete = new EventEmitter<boolean>();
  @Output() isSelected = new EventEmitter<Photo | PhotoLocal>();

  downloadUrlRoot = DOWNLOAD_CONTAINER;
  constructor(
    private gestureCtrl: GestureController,
    private photoViewer: PhotoViewer
  ) { }


  ngOnInit() {

  }

  ngAfterContentInit() {
    setTimeout(() => {
      const gesture = this.gestureCtrl.create({
        el: this.photoThumbnail.nativeElement,
        threshold: 0,
        gestureName: 'double-click',
        onStart: () => { this.onDoubleClickImageThumbnail(); }
      });
      gesture.enable();
    }, 2000);

  }

  select() {
    this.selected = !this.selected;
    this.isSelected.emit(this.thumb);
  }

  onDoubleClickImageThumbnail() {
    const now = Date.now();

    if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
      this.preview();
      this.lastOnStart = 0;
    } else {
      this.lastOnStart = now;
    }
  }

  preview() {
    try {
      this.photoViewer.show(this.downloadUrlRoot + this.thumb.fileName ?? this.thumb.resolvedURL, '', { share: true });
    } catch (e) {
      console.log(e);
    }
  }
  getUrl() {
    return this.downloadUrlRoot + this.thumb.fileName ?? this.thumb.thumbnailResolvedURL;
  }

  onDelete() {
    this.delete.emit(true);
  }

}
