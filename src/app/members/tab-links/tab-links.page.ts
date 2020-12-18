import { ActivatedRoute, Router } from '@angular/router';
import { MySignals } from 'src/app/shared/services/my-signals';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-tab-links',
  templateUrl: './tab-links.page.html',
  styleUrls: ['./tab-links.page.scss'],
})
export class TabLinksPage implements OnInit, AfterContentInit {
  modal;
  highlightButton = false;
  constructor(
    private userService: UserService,
    public modalController: ModalController,
    public signals: MySignals,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.route.url.subscribe(u => {
      if (window.location.pathname === '/links/profile') {
        this.highlightButton = true;
      } else {
        this.highlightButton = false;
      }
    });

  }
  ngAfterContentInit(): void {

  }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  // async showLogs() {
  //   if (this.modal) {
  //     this.modal.hidden = false;
  //     return;
  //   }

  //   this.modal = await this.modalController.create({
  //     component: CreatePostPage1,
  //     cssClass: 'my-custom-class'
  //   });
  //   this.signals.closeModalSource$.subscribe(log => {
  //     this.modal.hidden = true;
  //   });
  //   return await this.modal.present();
  // }

  userViewChange($event) {
    console.log($event);
  }

  loadProfile() {
    this.signals.announceSelectedUserChange();
  }

}
