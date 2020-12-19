import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
// import { Router } from '@angular/router';
// import { MenuController, IonSlides } from '@ionic/angular';
import { APP_VERSION } from 'src/app/shared/config';
// import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {

  appVersion = APP_VERSION;

  constructor(
  ) { }


}
