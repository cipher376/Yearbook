import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {
  galleryType = 'regular';
  prefersDark = true;

  images = [
    '../../../assets/images/me.jpg',
    '../../../assets/images/car.jpg',
    '../../../assets/images/bg1.jpg',
    '../../../assets/images/car.jpg',
    '../../../assets/images/me.jpg',
    '../../../assets/images/bg1.jpg',
    '../../../assets/images/car.jpg',
    '../../../assets/images/me.jpg',
    '../../../assets/images/me.jpg',
    '../../../assets/images/car.jpg',
    '../../../assets/images/bg1.jpg',
    '../../../assets/images/car.jpg',
  ];

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleTheme();
    }
  }

  toggleTheme() {
    this.prefersDark = !this.prefersDark;
    document.body.classList.toggle('dark', this.prefersDark);
  }

  async openViewer(url, title='', description='') {
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
