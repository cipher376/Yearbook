import { Router } from '@angular/router';
import { School } from './../../models/school';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IdentityPhoto } from 'src/app/models/my-media';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { AlumniService } from 'src/app/shared/services/model-service/alumni.service';

@Component({
  selector: 'app-post-widget2',
  templateUrl: './post-widget2.component.html',
  styleUrls: ['./post-widget2.component.scss'],
})
export class PostWidget2Component implements OnInit, OnDestroy {

  @Input() school: School;
  schoolIdentityPhoto: IdentityPhoto;
  totalAlumni = 0;

  sub$ = [];
  constructor(
    private router: Router,
    private alumniService: AlumniService
  ) { }

  ngOnInit() { }

  ngOnDestroy(): void {
    UtilityService.destroySubscription(this.sub$);
  }

  @Input() set School(school: School) {
    this.school = school;
    this.schoolIdentityPhoto = SchoolService.getSchoolIdentityPhoto(school);
    this.countAlumni();
  }

  goToSchool() {
    this.router.navigateByUrl('/links/school-profile');
  }

  goToSchoolPage() {
    this.router.navigateByUrl('/school-profile');
  }

  getProfilePhotoUrl() {
    return SchoolService.getSchoolProfilePhotoUrl(this.schoolIdentityPhoto);
  }
  getCoverPhotoUrl() {
    return SchoolService.getSchoolCoverPhotoUrl(this.schoolIdentityPhoto);
  }
  countAlumni() {
    this.sub$.push(this.alumniService.countAlumni(this.school?.id).subscribe(count => {
      this.totalAlumni = count;
    }));
  }

}
