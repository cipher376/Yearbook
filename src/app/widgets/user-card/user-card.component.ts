import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Alumni } from './../../models/alumni';
import { Router } from '@angular/router';
import { School } from '../../models/school';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IdentityPhoto } from 'src/app/models/my-media';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { AlumniService } from 'src/app/shared/services/model-service/alumni.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit, OnDestroy {

  user: User;
   alumni: Alumni;
  identityPhoto: IdentityPhoto;
  totalAlumni = 0;

  sub$ = [];
  constructor(
    private router: Router,
    private alumniService: AlumniService,
    // private userService: UserService,
  ) { }

  ngOnInit() { }

  ngOnDestroy(): void {
    UtilityService.destroySubscription(this.sub$);
  }

  @Input() set User(user: User) {
    this.user = user;
    this.identityPhoto = UserService.getUserIdentityPhoto(user);
    console.log(user);
  }
  @Input() set Alumni(alu: Alumni){
    this.alumni = alu;
    console.log(alu);
  }

  goToSchool() {
    this.router.navigateByUrl('/links/school-profile');
  }

  goToSchoolPage() {
    this.router.navigateByUrl('/school-profile');
  }

  getProfilePhotoUrl() {
    return UserService.getUserProfilePhotoUrl(this.identityPhoto);
  }
  getCoverPhotoUrl() {
    return UserService.getUserCoverPhotoUrl(this.identityPhoto);
  }

}
