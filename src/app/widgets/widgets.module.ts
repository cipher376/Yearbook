import { LikeComponent } from './like/like.component';
import { CommentsComponent } from './comments/comments.component';
import { SchoolJoinComponent } from './school-join/school-join.component';
import { PipesModule } from './../shared/pipes/pipes.module';

import { RouterModule } from '@angular/router';
import { FeedFilterPopoverComponent } from './feed-filter-popover/feed-filter-popover.component';
import { PostWidget3Component } from './post-widget3/post-widget3.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PopularSchoolsComponent } from './popular-schools/popular-schools.component';
import { TrendingComponent } from './trending/trending.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PostWidget1Component } from './post-widget1/post-widget1.component';
import { PostWidget2Component } from './post-widget2/post-widget2.component';

import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { AudioRecorderComponent } from './audio-recorder/audio-recorder.component';
import { AudioThumbnailComponent } from './audio-thumbnail/audio-thumbnail.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MapComponent } from './map/map.component';
import { MyAudioPickerComponent } from './my-audio-picker/my-audio-picker.component';
import { MyPhotoPickerComponent } from './my-photo-picker/my-photo-picker.component';
import { MySliderComponent } from './my-slider/my-slider.component';
import { MyVideoPickerComponent } from './my-video-picker/my-video-picker.component';
import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { BackgroundImageDirective } from '../shared/directives/image-background.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfKFrI5-iEUhsZyxjc2B56RNmoQoAeBmk'
    }),
    GoogleMapsModule,
    PipesModule
  ],
  declarations: [
    PostWidget1Component, PostWidget2Component, TrendingComponent, PopularSchoolsComponent,
    ImageGalleryComponent, PostWidget3Component, FeedFilterPopoverComponent, MyPhotoPickerComponent, MyAudioPickerComponent
    , MyVideoPickerComponent, CreatePostComponent, PhotoThumbnailComponent, VideoThumbnailComponent,
    AudioRecorderComponent, AudioThumbnailComponent, BackgroundImageDirective, VideoPlayerComponent,
    MapComponent, MySliderComponent, SchoolJoinComponent, CommentsComponent, LikeComponent

  ],
  exports: [

    FormsModule, CommonModule, PostWidget1Component, PostWidget2Component, TrendingComponent,
    PopularSchoolsComponent, PostWidget3Component, ImageGalleryComponent, FeedFilterPopoverComponent,
    MyPhotoPickerComponent, MyAudioPickerComponent, MyVideoPickerComponent, CreatePostComponent,
    PhotoThumbnailComponent, VideoThumbnailComponent,
    AudioThumbnailComponent, AudioRecorderComponent, BackgroundImageDirective, VideoPlayerComponent,
    MapComponent, MySliderComponent, SchoolJoinComponent, CommentsComponent, LikeComponent
  ]
})
export class WidgetsModule { }
