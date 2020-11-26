import { SchoolJoinComponent } from './../../widgets/school-join/school-join.component';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { SchoolService } from './../../shared/services/model-service/school.service';
import { MySignals } from './../../shared/services/my-signals';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { School } from 'src/app/models/school';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { IdentityPhoto } from 'src/app/models/my-media';
import { User } from 'src/app/models/user';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schools-profile',
  templateUrl: './schools-profile.page.html',
  styleUrls: ['./schools-profile.page.scss'],
})
export class SchoolsProfilePage implements OnInit, OnDestroy {
  currentSegment = 'about';
  school: School;
  identityPhoto: IdentityPhoto; // includes cover, profile and flag

  previousPage = '';
  sub$ = [];
  modal: HTMLIonModalElement;

  user: User;

  constructor(
    private signal: MySignals,
    private router: Router,
    private browserHistory: BrowserHistoryService,
    private schoolService: SchoolService,
    private userService: UserService,
    public modalController: ModalController,

  ) {
    this.sub$.push(this.signal.selectedSchoolSource$.subscribe(school => {
      this.school = school;
      // console.log(this.school);
      this.identityPhoto = UtilityService.getSchoolIdentityPhoto(school);
    }));
    this.schoolService.getSchoolLocal().then(school => {
      this.school = school;
      // console.log(this.school);
      this.identityPhoto = UtilityService.getSchoolIdentityPhoto(school);
      console.log(this.identityPhoto);
    });

    this.userService.getUserLocal().then(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

  async join() {
    if (!this.userService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.modal = await this.modalController.create({
      component: SchoolJoinComponent,
      cssClass: 'my-custom-class'
    });
    this.signal.closeModalSource$.subscribe(log => {
      this.modal.dismiss();
    });
    return await this.modal.present();
  }

  isUserAlumni() {
    // this.alumnu
  }

}
