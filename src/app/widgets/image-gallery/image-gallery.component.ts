import { MySignals } from 'src/app/shared/services/my-signals';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { School } from './../../models/school';
import { User } from './../../models/user';
import { MediaService } from './../../shared/services/model-service/media.service';
import { Component, Input, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { NO_IMAGE_PHOTO, DOWNLOAD_CONTAINER } from 'src/app/shared/config';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit, AfterViewInit, AfterContentInit {
  galleryType = 'regular';
  prefersDark = true;

  user: User;
  school: School;
  @Input() isUser = false;
  @Input() isSchool = false;
  images = [];

  noPhotosUrl = NO_IMAGE_PHOTO;

  constructor(
    public modalController: ModalController,
    public mediaService: MediaService,
    public userService: UserService,
    public schoolService: SchoolService,
    public signals: MySignals
  ) { }

  ngAfterContentInit(): void {
    this.images = [];
  }


  ngAfterViewInit(): void {
  }

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleTheme();
    }
    this.signals.selectedSchoolsSource$.subscribe(school => {
      this.School = school[0];
    });
    this.signals.selectedUsersSource$.subscribe(user => {
      this.User = user[0];
    });
  }

  @Input() set User(user: User) {
    this.user = user;
    if (this.user) {
      this.mediaService.getUserPhotos(this.user?.id)?.subscribe(photos => {
        console.log('users');
        this.images = [];
        console.log(this.images);
        photos.forEach(ph => {
          this.images.push(DOWNLOAD_CONTAINER + ph.fileName);
        });
      });
    }
  }

  @Input() set School(school: School) {
    this.school = school;
    if (this.school) {
      // load entity(user or school) photos
      this.mediaService.getSchoolPhotos(this.school?.id)?.subscribe(photos => {
        this.images = [];
        console.log('schools');
        console.log(this.images);
        photos.forEach(ph => {
          this.images.push(DOWNLOAD_CONTAINER + ph.fileName);
        });
      });
    }
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
