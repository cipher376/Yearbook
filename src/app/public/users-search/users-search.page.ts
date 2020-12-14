import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, LoadingController, PopoverController } from '@ionic/angular';
import { Alumni } from 'src/app/models/alumni';
import { IdentityPhoto } from 'src/app/models/my-media';
import { PageInfo } from 'src/app/models/page';
import { User } from 'src/app/models/user';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { FeedFilterPopoverComponent } from 'src/app/widgets/feed-filter-popover/feed-filter-popover.component';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.page.html',
  styleUrls: ['./users-search.page.scss'],
})
export class UsersSearchPage implements OnInit, OnDestroy, AfterViewInit {
  previousPage = '';
  selectedUsers: User[] = [];
  users: User[] = [];
  usersIdentityPhoto: IdentityPhoto[] = [];

  userAlumni: Alumni[] = [];

  sub$ = [];

  searchOffset = 0; // Begin search at zero index;
  searchLimit = 10; // pull 20 users at a time
  searchKey = '';

  infiniteScrollTarget: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private browserHistory: BrowserHistoryService,
    private router: Router,
    public filterPopover: PopoverController,
    private userService: UserService,
    private loadingController: LoadingController,

  ) {
    this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    }));

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.search(false);
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
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

  // goBack() {
  //   this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  // }

  isAuthenticated() {
    return this.userService.isAuthenticated();
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

    // if ( this.users.length === 0 ) {
    //   this.presentLoading().then((res: any) => {
    //     this.users.length === 0 ? res.dismiss() : this.toast.toast('Sorry, something went wrong!')
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

    this.userService.searchUser(this.searchKey, pageInfo).subscribe(users => {
      if (keyTrigger) {
        console.log(users);
        this.users = users;
        this.usersIdentityPhoto = UtilityService.getIdentityPhotos(users);
      } else {
        this.users = this.users.concat(users);
        this.searchOffset = this.users.length;
        this.infiniteScrollTarget?.complete();
      }
    });
  }


  loadMoreEvents(event) {
    this.infiniteScrollTarget = event.target;
    this.search(false);
  }

  getProfilePhotoUrl(identityPhoto: IdentityPhoto) {
    return UserService.getUserProfilePhotoUrl(identityPhoto);
  }

}
