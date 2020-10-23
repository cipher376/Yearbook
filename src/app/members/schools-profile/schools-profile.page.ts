import { IdentityPhoto } from './../../models/media';
import { SchoolService } from './../../shared/services/model-service/school.service';
import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { MySignals } from './../../shared/services/my-signals';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { School } from 'src/app/models/school';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { NO_SCHOOL_COVER_PHOTO_URL } from 'src/app/shared/config';

@Component({
  selector: 'app-schools-profile',
  templateUrl: './schools-profile.page.html',
  styleUrls: ['./schools-profile.page.scss'],
})
export class SchoolsProfilePage implements OnInit, OnDestroy {
  currentSegment = 'photos';
  school: School;
  identityPhoto: IdentityPhoto; // includes cover, profile and flag

  previousPage = '';
  sub$ = [];

  constructor(
    private signal: MySignals,
    private router: Router,
    private browserHistory: BrowserHistoryService,
    private schoolService: SchoolService
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
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }


}
