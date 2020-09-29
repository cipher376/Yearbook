import { MySignals } from './../../shared/services/my-signals';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { School } from 'src/app/models/school';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

@Component({
  selector: 'app-schools-profile',
  templateUrl: './schools-profile.page.html',
  styleUrls: ['./schools-profile.page.scss'],
})
export class SchoolsProfilePage implements OnInit, OnDestroy {
  currentSegment = 'photos';
  school: School;

  school$;

  constructor(
    private signal: MySignals
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


}
