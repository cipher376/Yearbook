import { SocialService } from 'src/app/shared/services/model-service/social.service';
import { Degree, DegreeType } from './../../models/degree';
import { Alumni } from './../../models/alumni';
import { UserService } from './../../shared/services/model-service/user.service';
import { Component, OnInit, OnDestroy, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentityPhoto } from 'src/app/models/my-media';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { MySignals } from 'src/app/shared/services/my-signals';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { AlumniService } from 'src/app/shared/services/model-service/alumni.service';
import { PostService } from 'src/app/shared/services/model-service/post.service';
import { PageInfo } from 'src/app/models/page';
import { Post } from 'src/app/models/post';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, AfterContentInit, OnDestroy, AfterViewInit {

  currentSegment = 'posts';
  selectedUser: User;
  selectedUserSchools: School[] = [];
  selectedUserFollowedSchools: School[] = [];
  schoolsIdentityPhotos: IdentityPhoto[] = [];
  identityPhoto: IdentityPhoto;
  selectedUserPosts: Post[] = [];
  totalPost = 0;

  selectedUserAlumni: Alumni[] = [];
  degrees: Degree[] = [];
  highestDegreeEnrolled: Alumni;

  selectedUserComments: Comment[] = [];

  user: User; // Currently logged in user


  postLimit = 5;
  postOffset = 0;

  followedSchoolsLimit = 5;
  followedSchoolsOffset = 0;

  infiniteScrollTarget: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  profileFixedMenu = false;

  sub$ = [];
  previousPage = '';

  constructor(
    private userService: UserService,
    private alumniService: AlumniService,
    private postService: PostService,
    private schoolService: SchoolService,
    private browserHistory: BrowserHistoryService,
    private router: Router,
    private signals: MySignals,
    private socialService: SocialService,
    private route: ActivatedRoute
  ) {
    this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    }));
  }

  ngOnInit() {
    this.profileFixedMenu = false;
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.sub$);
  }

  ngAfterContentInit() {
  }

  async ngAfterViewInit() {
    this.sub$.push(this.signals.selectedUserSource$.subscribe(_ => {
      this.init();
    }));
    this.init();
  }

  async init() {
    this.postOffset = 0;
    this.selectedUserPosts = [];

    this.user = await this.userService.getUserLocal();
    if (this.route?.snapshot?.params?.user) { // check if its current login user
      this.selectedUser = this.user;
      await this.userService.setSelectedUserLocal(this.user);
      window.location.href = '/links/profile';
    } else {
      this.selectedUser = await this.userService.getSelectedUserLocal();
    }
    console.log(this.selectedUser);
    // if (!this.selectedUser) {
    //   this.selectedUser = this.user;
    // }
    const filter = {
      include: [
        { relation: 'photos' },
        { relation: 'address' },
        { relation: 'userConfig' },
        { relation: 'post' }
      ]
    };
    this.sub$.push(this.userService.getUserDetails(this.selectedUser?.id, filter).subscribe(u => {
      if (u?.id) {
        this.selectedUser = u;
        console.log(u);
        this.identityPhoto = UserService.getUserIdentityPhoto(u);
        console.log(this.identityPhoto);
      }
    }));
    this.sub$.push(this.alumniService.getUserAlumni(this.selectedUser?.id).subscribe(a => {
      this.selectedUserAlumni = a;
      console.log(a);
      this.degrees = [];
      this.selectedUserAlumni?.forEach(alu => {
        if (alu?.degree) {
          this.degrees?.push(alu.degree);
        }
      });
      this.degrees = UtilityService.SortDegree(this.degrees);
      if (this.degrees?.length > 0) {
        this.highestDegreeEnrolled = this.getAlumniByDegree(this.degrees[0]);
      }
    }));

    this.sub$.push(this.signals.followSource$.subscribe(isFollowing => {
      this.loadFollowedSchools();
    }));
    this.loadSchools();
    this.loadFollowedSchools();
    this.getUserPost();
    this.countPost();
  }

  set FixedMenu(value: boolean) {
    this.profileFixedMenu = value;
  }

  protected getAlumniByDegree(degree: Degree) {
    for (const alu of this.selectedUserAlumni) {
      if (alu.degree === degree) {
        return alu;
      }
    }
  }

  getUserPost() {
    const pageInfo: PageInfo = {
      limit: this.postLimit,
      offset: this.postOffset
    };
    this.sub$.push(this.postService.getUserPosts(this.selectedUser?.id, pageInfo).subscribe(posts => {
      console.log(posts);
      this.selectedUserPosts = [... this.selectedUserPosts, ...posts];
      this.postOffset += posts?.length;
      this.infiniteScrollTarget?.complete();
    }));
  }

  loadMorePosts(event) {
    this.infiniteScrollTarget = event.target;
    this.getUserPost();
  }

  countPost() {
    this.sub$.push(this.postService.countUserPost(this.selectedUser?.id).subscribe(count => {
      // console.log(count);
      this.totalPost = count;
    }));
  }

  loadSchools() {
    if (this.selectedUser) {
      this.sub$.push(this.schoolService.getUserSchools(this.selectedUser?.id).subscribe(schools => {
        this.selectedUserSchools = schools;
        console.log(schools);
        this.schoolsIdentityPhotos = UtilityService.getIdentityPhotos(schools);
      }));
    }
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }


  loadFollowedSchools(reset = false) {
    if (reset) {
      this.followedSchoolsOffset = 0;
    }
    const pageInfo: PageInfo = {
      limit: this.followedSchoolsLimit,
      offset: this.followedSchoolsOffset
    };
    this.sub$.push(this.socialService.getUserFollowedSchools(this.selectedUser?.id, pageInfo).subscribe(fs => {
      this.selectedUserFollowedSchools = [...this.selectedUserFollowedSchools, ...fs];
      this.followedSchoolsOffset += fs?.length;
      this.infiniteScrollTarget?.complete();
    }));
  }

  loadMoreFollowedUsers(event) {
    this.infiniteScrollTarget = event.target;
    this.loadFollowedSchools();
  }

  loadFollowedUsers() {

  }

  countFollowers() {
    this.loadFollowedSchools(true);
  }

  edit() {

  }

  follow() {

  }
}
