import { MySignals } from './../../shared/services/my-signals';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { School } from 'src/app/models/school';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';

@Component({
  selector: 'app-schools-profile',
  templateUrl: './schools-profile.page.html',
  styleUrls: ['./schools-profile.page.scss'],
})
export class SchoolsProfilePage implements OnInit, OnDestroy {
  currentSegment = 'photos';
  school: School;

  school$;

  previousPage = '';
  history$;

  constructor(
    private signal: MySignals,
    private router: Router,
    private browserHistory: BrowserHistoryService
  ) {
    this.school$ = this.signal.selectedSchoolSource$.subscribe(school => {
      this.school = school;
      console.log(this.school);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.school);
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }


}
