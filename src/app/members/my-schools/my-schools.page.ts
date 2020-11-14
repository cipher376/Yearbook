import { AlertController } from '@ionic/angular';
import { IdentityPhoto } from 'src/app/models/media';
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

  sub$ = [];
  constructor(
    private browserHistory: BrowserHistoryService,
    private router: Router, private userService: UserService,
    private alumniService: AlumniService,
    private alert: AlertController,
    private schoolService: SchoolService) {
    this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    }));
  }

  ngOnInit() {
    this.userService.getUserLocal().then(user => {
      this.user = user;
      this.loadSchools();
    });
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }

  loadSchools() {
    if (this.user) {
      // this.sub$.push(this.alumniService.getUserAlumni( this.user?.id).subscribe(alumni => {
      //   this.alumni = alumni;
      // }));
      this.sub$.push(this.schoolService.getUserSchools(this.user?.id).subscribe(schools => {
        this.userSchools = schools;
        this.schoolsIdentityPhoto = UtilityService.getSchoolsIdentityPhotos(schools);
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
    return UtilityService.getSchoolProfilePhotoUrl(identityPhoto);
  }
  async view(school: School) {
    if (await this.schoolService.setSchoolLocal(school)) {
      // navigate to join school page
      this.router.navigateByUrl('/links/school-profile');
    }
  }
  async leaveSchool(school: School) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure to leave school?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            // delete alumni object from the database
            this.sub$.push(this.alumniService.deleteAlumni(this.user?.id, school?.id).subscribe(_ => {
              this.loadSchools();
            }));
          }
        }
      ]
    });
    await alert.present();
  }

}
