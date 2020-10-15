import { SchoolService } from './../../shared/services/model-service/school.service';
import { AlumniService } from './../../shared/services/model-service/alumni.service';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { School } from 'src/app/models/school';
import { MySignals } from 'src/app/shared/services/my-signals';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { Alumni } from 'src/app/models/alumni';
import { FeedFilterPopoverComponent } from 'src/app/widgets/feed-filter-popover/feed-filter-popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-schools-search',
  templateUrl: './schools-search.page.html',
  styleUrls: ['./schools-search.page.scss'],
})
export class SchoolsSearchPage implements OnInit, AfterViewInit, OnDestroy {
  previousPage = '';
  history$;
  schools$;
  selectedSchools: School[] = [];
  userSchools: School[] = [];
  schools: School[] = [];
  userAlumni: Alumni[] = [];

  constructor(
    private browserHistory: BrowserHistoryService,
    private router: Router,
    public filterPopover: PopoverController,
    private alumniService: AlumniService,
    private schoolService: SchoolService,
    private userService: UserService,
    private signal: MySignals,
    private store: MyStorage
    ) {
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });

  }

  ngOnInit() {
    this.store.getObject<Alumni[]>('user-alumni').then(alumni => {
      if (alumni) {
        this.userAlumni = alumni;
        this.userAlumni.forEach(alu => {
          this.userSchools.push(alu.school);
        });
      }
    });
  }

  ngAfterViewInit() {
    this.schools$ = this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.filterPopover.create({
      component: FeedFilterPopoverComponent,
      cssClass: 'filter-feed',
      event: ev,
      translucent: true,
      showBackdrop: false
    });
    return await popover.present();
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.history$);
    UtilityService.destroySubscription(this.schools$);
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

  gotoSchoolProfile(school: School) {
    this.signal.announceSchool(school);
    this.router.navigateByUrl('/links/school-profile');
  }

  isAuthenticated(){
    return this.userService.isAuthenticated();
  }

  async join(school: School) {
    if (await this.schoolService.setSchoolLocal(school)) {
      // navigate to join school page
      this.router.navigateByUrl('/links/schools-join');
    }
    // console.log(school.name);
  }


}
