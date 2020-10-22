import { PageInfo } from './../../models/page';
import { SchoolService } from './../../shared/services/model-service/school.service';
import { AlumniService } from './../../shared/services/model-service/alumni.service';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { School } from 'src/app/models/school';
import { MySignals } from 'src/app/shared/services/my-signals';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { Alumni } from 'src/app/models/alumni';
import { FeedFilterPopoverComponent } from 'src/app/widgets/feed-filter-popover/feed-filter-popover.component';
import { IonInfiniteScroll, PopoverController } from '@ionic/angular';

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

  sub$ = [];

  searchOffset = 0; // Begin search at zero index;
  searchLimit = 20; // pull 20 schools at a time
  searchKey = '';

  infiniteScrollTarget: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

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
    this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    }));

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
    this.search(false);
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
    UtilityService.destroySubscription(this.sub$);
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

  gotoSchoolProfile(school: School) {
    this.signal.announceSchool(school);
    this.router.navigateByUrl('/links/school-profile');
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

  async join(school: School) {
    if (await this.schoolService.setSchoolLocal(school)) {
      // navigate to join school page
      this.router.navigateByUrl('/links/schools-join');
    }
    // console.log(school.name);
  }


  // if search term change, it means key
  // trigger is true
  search(keyTrigger = true) {
    console.log('searching');
    // refresh search
    if (keyTrigger) {
      this.searchOffset = 0;
    }
    const pageInfo = {
      offset: this.searchOffset,
      limit: this.searchLimit
    } as PageInfo;

    this.schoolService.searchSchool(this.searchKey, pageInfo).subscribe(schools => {
      if (keyTrigger) {
        console.log(schools);
        this.schools = schools;
      } else {
        this.schools = this.schools.concat(schools);
        this.searchOffset = this.schools.length;
        this.infiniteScrollTarget?.complete();
      }
    });

    // this.schoolService.getSchools(pageInfo).subscribe(schools => {
    //   this.schools = this.schools.concat(schools);
    //   this.searchOffset = this.schools.length;
    //   console.log(this.schools.length);
    // });
  }


  loadMoreEvents(event) {
    this.infiniteScrollTarget = event.target;
    this.search(false);
  }

}
