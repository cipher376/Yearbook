import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { DEFAULT_AUDIO_COVER, DEFAULT_AUDIO_ICON, DOWNLOAD_CONTAINER } from 'src/app/shared/config';
import { CONTENT_ATTR } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Video, Audio, MediaType } from 'src/app/models/my-media';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  items = [];
  itemPhotos = [];
  @Input() mediaType: MediaType = 1;

  activeIndex = 0;
  currentVideo = this.items[this.activeIndex];
  player;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 2.5,
    speed: 400,

  };

  showPlayer = false;

  constructor(
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  @Input() set Items(items: Video[] | Audio[]) {

    // console.log(items);
    items.forEach(obj => {
      this.items.push({
        name: obj?.description ?? obj.fileName,
        src: DOWNLOAD_CONTAINER + obj.fileName,
        type: obj.mimeType ?? UtilityService.getMimeTypeFromExtension(obj.fileName) ?? 'video/mp4'
      });
      this.itemPhotos.push(this.getThumbnail(obj));
    });

    this.showPlayer = true;

  }

  get Items() {
    return this.items;
  }

  getThumbnail(obj) {
    console.log(this.mediaType);
    if (this.mediaType === MediaType.VIDEO) {
      return DOWNLOAD_CONTAINER + (obj as Video).posterUrl;
    } else if (this.mediaType === MediaType.AUDIO) {
      return DEFAULT_AUDIO_ICON;
    }
    return '';
  }

  videoPlayerInit(player) {
    this.player = player;
    console.log(this.player);
    this.initVdo();
    // this.player.getDefaultMedia().subscriptions.loadedMetaplayer.subscribe(this.initVdo.bind(this));
    // this.player.subscriptions.pause.subscribe(this.initVdo.bind(this));
    this.player.subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.items.length) {
      this.activeIndex = 0;
    }
    this.currentVideo = this.items[this.activeIndex];
    this.cdref.detectChanges();
  }

  initVdo() {
    if (this.Items?.length > 0) {
      this.activeIndex = 0;
      this.currentVideo = this.items[this.activeIndex];
      console.log(JSON.stringify(this.currentVideo));
      this.cdref.detectChanges();
 
    }
    setTimeout(() => {

      this.player.play();
    }, 1000);
  }

  startPlaylistVdo(index: number) {
    this.activeIndex = index;
    this.currentVideo = this.items[this.activeIndex];
    this.cdref.detectChanges();
  }


}

