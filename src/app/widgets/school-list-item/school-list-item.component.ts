import { UtilityService } from './../../shared/services/providers/utility.service';
import { MySignals } from './../../shared/services/my-signals';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alumni } from 'src/app/models/alumni';
import { IdentityPhoto } from 'src/app/models/my-media';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';
import { AlumniService } from 'src/app/shared/services/model-service/alumni.service';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-list-item',
  templateUrl: './school-list-item.component.html',
  styleUrls: ['./school-list-item.component.scss'],
})
export class SchoolListItemComponent implements OnInit, OnDestroy {

  @Input() isEdit = false;
  @Input() school: School;
  @Input() user: User;
  @Input() profilePhotoUrl: string;

  sub$ = [];
  totalAlumni = 0;

  constructor(
    private alert: AlertController,
    private alumniService: AlumniService,
    private signals: MySignals,
    private schoolService: SchoolService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.sub$.push(
      this.signals.reloadUserSchoolsSource$.subscribe(_ => {
        this.countAlumni();
      })
    );
    this.countAlumni();
  }

  ngOnDestroy(): void {
    UtilityService.destroySubscription(this.sub$);
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
          }
        },
        {
          text: 'Yes',
          handler: () => {
            // delete alumni object from the database
            this.sub$.push(this.alumniService.deleteAlumni(this.user?.id, school?.id).subscribe(_ => {
              this.signals.announceUserSchoolsReload();
            }));
          }
        }
      ]
    });
    await alert.present();
  }

  async view(school: School) {
    if (await this.schoolService.setSchoolLocal(school)) {
      // navigate to join school page
      this.router.navigateByUrl('/links/school-profile');
    }
  }
  countAlumni() {
    this.sub$.push(this.alumniService.countAlumni(this.school?.id).subscribe(count => {
      this.totalAlumni = count;
    }));
  }

}
