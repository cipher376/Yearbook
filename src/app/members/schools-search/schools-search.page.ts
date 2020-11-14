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
import { IonInfiniteScroll, LoadingController, PopoverController } from '@ionic/angular';
import { IdentityPhoto, Photo } from 'src/app/models/media';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';

@Component({
  selector: 'app-schools-search',
  templateUrl: './schools-search.page.html',
  styleUrls: ['./schools-search.page.scss'],
})
export class SchoolsSearchPage implements OnInit, AfterViewInit, OnDestroy {
  previousPage = '';
  selectedSchools: School[] = [];
  userSchools: School[] = [];
  schools: School[] = [];
  schoolsIdentityPhoto: IdentityPhoto[] = [];

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
    private store: MyStorage,
    private loadingController: LoadingController,
    private toast: ToasterService
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
    this.schoolService.setSchoolLocal(school).then(_ =>
      this.router.navigateByUrl('/links/school-profile')
    );
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  // if search term change, it means key
  // trigger is true
  search(keyTrigger = true) {

    // if ( this.schools.length === 0 ) {
    //   this.presentLoading().then((res: any) => {
    //     this.schools.length === 0 ? res.dismiss() : this.toast.toast('Sorry, something went wrong!')
    //   });
    // }

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
        this.schoolsIdentityPhoto = UtilityService.getSchoolsIdentityPhotos(schools);
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

  getProfilePhotoUrl(identityPhoto: IdentityPhoto) {
    return UtilityService.getSchoolProfilePhotoUrl(identityPhoto);
  }

}
