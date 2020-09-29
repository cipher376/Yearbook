import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {
  showSkip = true;

  @ViewChild('slides') slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public store: MyStorage
  ) { }

  startApp() {
    this.router
      .navigateByUrl('/home')
      .then(() => this.store.set('ion_did_tutorial', true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.store.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/home');
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
