import { MySignals } from 'src/app/shared/services/my-signals';
import { AlertController } from '@ionic/angular';
import { SchoolService } from './../../shared/services/model-service/school.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { AlumniService } from './../../shared/services/model-service/alumni.service';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { AfterContentInit, AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Alumni } from 'src/app/models/alumni';
import { User } from 'src/app/models/user';
import { School } from 'src/app/models/school';
import { IdentityPhoto } from 'src/app/models/my-media';
import { NO_SCHOOL_PHOTO } from 'src/app/shared/config';

@Component({
  selector: 'app-my-schools',
  templateUrl: './my-schools.page.html',
  styleUrls: ['./my-schools.page.scss'],
})
export class MySchoolsPage implements OnInit, AfterViewInit, OnDestroy {
  isEdit = false;
  previousPage = '';
  alumni: Alumni[] = [];
  userSchools: School[] = [];
  user: User;
  schoolsIdentityPhoto: IdentityPhoto[] = [];

  noDefaultImage = NO_SCHOOL_PHOTO;

  sub$ = [];
  constructor(
    private browserHistory: BrowserHistoryService,
    private router: Router, private userService: UserService,
    private schoolService: SchoolService,
    private signals: MySignals,
    ) {
    this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    }));
  }

  ngOnInit() {
    this.sub$.push(
      this.signals.reloadUserSchoolsSource$.subscribe(_ => {
        this.loadSchools();
      })
    );
  }

  ngAfterViewInit() {
    this.userService.getUserLocal().then(user => {
      this.user = user;
      this.loadSchools();
    });
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }

  loadSchools() {
    if (this.user) {
      this.sub$.push(this.schoolService.getUserSchools(this.user?.id).subscribe(schools => {
        this.userSchools = schools;
        this.schoolsIdentityPhoto = UtilityService.getIdentityPhotos(schools);
      }));
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
  
  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
  getProfilePhotoUrl(identityPhoto: IdentityPhoto) {
    return SchoolService.getSchoolProfilePhotoUrl(identityPhoto);
  }
  
  

}
