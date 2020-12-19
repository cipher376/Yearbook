import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { DEFAULT_DOCUMENT_COVER } from './../../shared/config';
import { Video } from 'src/app/models/my-media';
import { DEFAULT_AUDIO_COVER, DOWNLOAD_CONTAINER } from 'src/app/shared/config';
import { VideoPlayerComponent } from './../video-player/video-player.component';
import { MediaType, Photo, Audio } from './../../models/my-media';
import { AudioLocal, PhotoLocal, VideoLocal } from './../../models/LocalMediaInterfaces';
import { Component, Input, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.scss'],
})
export class MySliderComponent implements OnInit, AfterViewInit, OnDestroy {
  sliderId = 'player' + Date.now();
  @Input() slideObjects: any[] = []; // Photo | PhotoLocal | Video | VideoLocal | Audio | AudioLocal
  @Input() mediaType: MediaType;

  playAudio = false;
  playVideo = false;
  playerObserver: { observer: IntersectionObserver, element: any }

  @ViewChild(VideoPlayerComponent) player: VideoPlayerComponent;

  constructor(
    private photoViewer: PhotoViewer

  ) {
    this.mediaType = MediaType.VIDEO;

    this.slider =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      // slidesItems: [
      //   {
      //     id: 995
      //   },
      //   {
      //     id: 925
      //   },
      //   {
      //     id: 940
      //   },
      //   {
      //     id: 943
      //   },
      //   {
      //     id: 944
      //   }
      // ]
    };
  }

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  slider: any;

  slideOptions = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 40,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
          let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) { translateX = 0; }
          if (Math.abs(translateY) < 0.001) { translateY = 0; }
          if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
          if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
          if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
            if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
          }
        }

        // Set correct perspective for IE10
        if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
      }
    }
  };

  ngOnInit() { }

  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    if (this.playerObserver) {
      this.playerObserver?.observer?.unobserve(this.playerObserver?.element);
    }
  }

  // Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  // Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  // Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  // Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  play(obj: Photo | Video | Audio) {
    switch (this.mediaType) {
      case MediaType.PHOTO:
        // preview image
        this.photoViewer.show(DOWNLOAD_CONTAINER + obj.fileName, '', { share: true });
        break;
      case MediaType.VIDEO:
        this.streamVideo();
        break;
      case MediaType.DOCUMENT:
        break;
      case MediaType.AUDIO:
        this.streamAudio();
        break;
      default:
        console.log('Invalid media object');
    }
  }
  streamVideo() {
    this.playVideo = true;
    setTimeout(() => {
      this.playerObserver = UtilityService.monitorElementOutOfView(this.sliderId, () => {
        this.player = null;
        this.playVideo = false;
      });
    }, 500);
  }

  streamAudio() {
    this.playAudio = true;
    setTimeout(() => {
      this.playerObserver = UtilityService.monitorElementOutOfView(this.sliderId, () => {
        this.player = null;
        this.playAudio = false;
      });
    }, 500);
  }



  getObjPhoto(obj: any) {
    if (this.mediaType === MediaType.PHOTO) {
      return DOWNLOAD_CONTAINER + (obj as Photo).fileName;
    } else if (this.mediaType === MediaType.VIDEO) {
      return DOWNLOAD_CONTAINER + (obj as Video).posterUrl;
    } else if (this.mediaType === MediaType.AUDIO) {
      return DEFAULT_AUDIO_COVER;
    } else if (this.mediaType === MediaType.DOCUMENT) {
      return DEFAULT_DOCUMENT_COVER;
    }
  }


}
