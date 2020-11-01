import { MyPhotoPickerComponent } from './../my-photo-picker/my-photo-picker.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  mediaPage = '';

  @ViewChild('myPhotoPicker') myPhotoPicker: MyPhotoPickerComponent;
  @ViewChild('myAudioPicker') myAudioPicker: MyPhotoPickerComponent;
  @ViewChild('myVideoPicker') myVideoPicker: MyPhotoPickerComponent;

  constructor() { }

  ngOnInit() { }

  takePhoto() {
    this.mediaPage = 'photos';

  }
  recordVideo() {
    this.mediaPage = 'videos';
  }
  recordAudio() {
    this.mediaPage = 'audios';
  }

  clear() {
    this.mediaPage = '';
  }


  postWithPhotos() {
    if (this.myPhotoPicker.galleryType === 'cloud') {
      // Create post from with cloud photos

    } else if (this.myPhotoPicker.galleryType === 'local') {
      this.myPhotoPicker.uploadPhotos();
    }

  }

  postWithAudios() {
    if (this.myAudioPicker.galleryType === 'cloud') {
      // Create post from with cloud photos

    } else if (this.myAudioPicker.galleryType === 'local') {
      // move photos to permanent storage folder

    }
  }

  postWithVideos() {
    if (this.myVideoPicker.galleryType === 'cloud') {
      // Create post from with cloud photos

    } else if (this.myVideoPicker.galleryType === 'local') {
      // move photos to permanent storage folder

    }
  }

  post() {
    if (this.mediaPage === 'photos') {
      this.postWithPhotos();
    } else if (this.mediaPage === 'videos') {
      this.postWithVideos();
    } else if (this.mediaPage === 'audios') {
      this.postWithAudios();
    } else {
      // post message without media
    }
  }

}
