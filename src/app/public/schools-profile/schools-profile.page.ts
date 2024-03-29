import { LocationComponent } from '../location/location.component';
import { MapComponent } from './../../widgets/map/map.component';
import { SocialService } from 'src/app/shared/services/model-service/social.service';
import { AlumniService } from './../../shared/services/model-service/alumni.service';
import { SchoolJoinComponent } from './../../widgets/school-join/school-join.component';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { SchoolService } from './../../shared/services/model-service/school.service';
import { MySignals } from './../../shared/services/my-signals';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { School } from 'src/app/models/school';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { IdentityPhoto } from 'src/app/models/my-media';
import { User } from 'src/app/models/user';
import { AlertController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { Post } from 'src/app/models/post';
import { PageInfo } from 'src/app/models/page';
import { PostService } from 'src/app/shared/services/model-service/post.service';
import { Alumni } from 'src/app/models/alumni';

@Component({
  selector: 'app-schools-profile',
  templateUrl: './schools-profile.page.html',
  styleUrls: ['./schools-profile.page.scss'],
})
export class SchoolsProfilePage implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
  currentSegment = 'posts';
  school: School;
  identityPhoto: IdentityPhoto; // includes cover, profile and flag
  totalAlumni = 0;
  alumni: Alumni[] = [];
  schoolPosts: Post[] = [];
  totalPost = 0;

  followers: User[] = [];
  totalFollowers = 0;
  isFollowing: false;

  previousPage = '';
  sub$ = [];
  modal: HTMLIonModalElement;

  user: User;
  isAlumni = false;
  userSchoolAlumni: Alumni;

  fixedMenu = false;
  showMedia = false;
  showLocation = false;
  showPost = false;
  showAbout = false;


  infiniteScrollTarget: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  postLimit = 5;
  postOffset = 0;

  alumniLimit = 5;
  alumniOffset = 0;

  followersLimit = 5;
  followersOffset = 0;


  isLoaded = false;
  constructor(
    private signals: MySignals,
    private router: Router,
    private browserHistory: BrowserHistoryService,
    private schoolService: SchoolService,
    private postService: PostService,
    private userService: UserService,
    public modalController: ModalController,
    private alumniService: AlumniService,
    private alert: AlertController,
    private socialService: SocialService
  ) {
  }

  async ngAfterViewInit() {


    this.user = await this.userService.getUserLocal();
    this.sub$.push(this.signals.selectedSchoolSource$.subscribe(school => {
      this.school = school;
      // console.log(this.school);
      this.identityPhoto = SchoolService.getSchoolIdentityPhoto(school);
      this.init();
    }));

    this.school = await this.schoolService.getSchoolLocal();
    // console.log(this.school);
    this.identityPhoto = SchoolService.getSchoolIdentityPhoto(this.school);
    console.log(this.identityPhoto);
    this.init();

  }

  ngAfterContentInit() {

  }

  ngOnInit() {
    this.sub$.push(
      this.signals.reloadUserSchoolsSource$.subscribe(_ => {
        this.init();
      })
    );
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }

  init() {
    this.fixedMenu = false;
    this.isLoaded = false;
    this.showLoader();

    this.totalAlumni = 0;
    this.totalPost = 0;
    this.totalFollowers = 0;
    this.postOffset = 0;
    this.followersOffset = 0;
    this.alumniOffset = 0;

    this.schoolPosts = [];
    this.alumni = [];
    this.followers = [];

    this.countAlumni();
    this.getSchoolAlumni(true);
    this.getSchoolPosts();
    this.userIsAlumni();
    this.getFollowers();
    this.countFollowers();
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

  set schoolFixedMenu(value: boolean) {
    this.fixedMenu = this.isLoaded && value;
  }


  async join() {
    if (!this.userService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return;
    }
    this.modal = await this.modalController.create({
      component: SchoolJoinComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        alumniCount: this.totalAlumni
      }
    });
    this.signals.closeModalSource$.subscribe(name => {
      if (name === 'join-school') {
        this.modal.dismiss();
        this.userIsAlumni();
        this.countAlumni();
      }
    });
    return await this.modal.present();
  }


  async leave() {
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
            this.sub$.push(this.alumniService.deleteAlumni(this.user?.id, this.school?.id).subscribe(_ => {
              this.userIsAlumni();
              this.countAlumni();
              this.signals.announceUserSchoolsReload();
            }));
          }
        }
      ]
    });
    await alert.present();
  }

  userIsAlumni() {
    this.alumniService.isUserAlumni(this.user?.id, this.school?.id).subscribe(alu => {
      if (alu?.id) {
        this.isAlumni = true;
      } else {
        this.isAlumni = false;
      }
    });
  }

  userIsFollowing($event) {
    this.isFollowing = $event;
  }

  getProfilePhotoUrl() {
    return SchoolService.getSchoolProfilePhotoUrl(this.identityPhoto);
  }
  getCoverPhotoUrl() {
    return SchoolService.getSchoolCoverPhotoUrl(this.identityPhoto);
  }

  countAlumni() {
    this.sub$.push(this.alumniService.countAlumni(this.school?.id).subscribe(count => {
      this.totalAlumni = count;
    }));
  }

  getSchoolPosts() {
    const pageInfo: PageInfo = {
      limit: this.postLimit,
      offset: this.postOffset
    };
    this.sub$.push(this.postService.getSchoolPosts(this.school?.id, pageInfo).subscribe(posts => {
      this.schoolPosts = [... this.schoolPosts, ...posts];
      this.postOffset += posts?.length;
      this.infiniteScrollTarget?.complete();
    }));
  }

  loadMorePosts(event) {
    this.infiniteScrollTarget = event.target;
    this.getSchoolPosts();
  }

  countPost() {
    this.sub$.push(this.postService.countSchoolPost(this.school?.id).subscribe(count => {
      console.log(count);
      this.totalPost = count;
    }));
  }

  getSchoolAlumni(reset = false) {
    if (reset) {
      this.alumniOffset = 0;
      this.alumni = [];
    }
    const pageInfo: PageInfo = {
      limit: this.alumniLimit,
      offset: this.alumniOffset
    };

    this.sub$.push(this.alumniService.getSchoolAlumni(this.school?.id, pageInfo).subscribe(alu => {
      this.alumni = [...this.alumni, ...alu];
      console.log(alu);
      this.alumniOffset += alu?.length;
      this.infiniteScrollTarget?.complete();
    }));
  }

  loadMoreAlumni(event) {
    this.infiniteScrollTarget = event.target;
    this.getSchoolAlumni();
  }



  getFollowers(reset = false) {
    if (reset) {
      this.followersOffset = 0;
      this.followers = [];
      this.countFollowers();
    }
    const pageInfo: PageInfo = {
      limit: this.followersLimit,
      offset: this.followersOffset
    };
    // followers
    this.socialService.getSchoolFollowers(this.school?.id, pageInfo).subscribe(users => {
      this.followers = users;
      this.alumniOffset += users?.length;
      this.infiniteScrollTarget?.complete();
    });
  }


  loadMoreFollowers(event) {
    this.infiniteScrollTarget = event.target;
    this.getFollowers();
  }

  countFollowers() {
    this.socialService.countSchoolFollower(this.school?.id).subscribe(count => {
      this.totalFollowers = count;
    });
  }


  async viewSchoolLocation() {
    await this.schoolService.setSchoolLocal(this.school);
    this.router.navigateByUrl('/links/location');
    this.signals.announceMapReset();
  }

  viewMedia() {
    this.schoolService.setSchoolLocal(this.school).then(_ => {
      this.router.navigateByUrl('/links/media;isSchool=true');
    });
  }

  showLoader() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 3000);
  }

}
