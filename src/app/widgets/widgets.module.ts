import { CreatePostComponent } from './create-post/create-post.component';
import { MyVideoPickerComponent } from './my-video-picker/my-video-picker.component';
import { MyPhotoPickerComponent } from './my-photo-picker/my-photo-picker.component';
import { RouterModule } from '@angular/router';
import { FeedFilterPopoverComponent } from './feed-filter-popover/feed-filter-popover.component';
import { PostWidget3Component } from './post-widget3/post-widget3.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PopularSchoolsComponent } from './popular-schools/popular-schools.component';
import { TrendingComponent } from './trending/trending.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PostWidget1Component } from './post-widget1/post-widget1.component';
import { PostWidget2Component } from './post-widget2/post-widget2.component';
import { MyAudioPickerComponent } from './my-audio-picker/my-audio-picker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
  ],
  declarations: [PostWidget1Component, PostWidget2Component, TrendingComponent, PopularSchoolsComponent,
    ImageGalleryComponent, PostWidget3Component, FeedFilterPopoverComponent, MyPhotoPickerComponent, MyAudioPickerComponent
    , MyVideoPickerComponent, CreatePostComponent],
  exports: [FormsModule, CommonModule, PostWidget1Component, PostWidget2Component, TrendingComponent,
    PopularSchoolsComponent, PostWidget3Component, ImageGalleryComponent, FeedFilterPopoverComponent,
    MyPhotoPickerComponent, MyAudioPickerComponent, MyVideoPickerComponent, CreatePostComponent]
})
export class WidgetsModule { }
