import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentSegment = 'about';
  profile_bio: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, alias Lorem ipsum dolor.';
  username: string = 'Esmeralda Appiah Kubi';

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  // }

}
