import { School } from './../../models/school';
import { User } from './../../models/user';
import { MediaService } from './../../shared/services/model-service/media.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { NO_IMAGE_PHOTO, SERVER_DOWNLOAD_PATH } from 'src/app/shared/config';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {
  galleryType = 'regular';
  prefersDark = true;

  user: User;
  school: School;

  images = [];

  noPhotosUrl = NO_IMAGE_PHOTO;

  constructor(
    public modalController: ModalController,
    public mediaService: MediaService
  ) { }

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleTheme();
    }
  }

  @Input() set User(user: User) {
    this.user = user;
    // load entity(user or school) photos
    this.mediaService.getUserPhotos(user?.id)?.subscribe(photos => {
      if (!this.school) {
        this.images = [];
        photos.forEach(ph => {
          this.images.push(SERVER_DOWNLOAD_PATH + ph.fileName);
        });
      }
    });
  }

  @Input() set School(school: School) {
    this.school = school;
    // load entity(user or school) photos
    this.mediaService.getSchoolPhotos(school?.id)?.subscribe(photos => {
      if (!this.user) {
        this.images = [];
        photos.forEach(ph => {
          this.images.push(SERVER_DOWNLOAD_PATH + ph.fileName);
        });
      }
    });
  }


  toggleTheme() {
    this.prefersDark = !this.prefersDark;
    document.body.classList.toggle('dark', this.prefersDark);
  }

  async openViewer(url, title = '', description = '') {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: url, // required
        title, // optional
        text: description// optional
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

}
