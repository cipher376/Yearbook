import { MySignals } from 'src/app/shared/services/my-signals';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { MediaService } from 'src/app/shared/services/model-service/media.service';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { SERVER_DOWNLOAD_PATH, NO_VIDEO_PHOTO, DOWNLOAD_CONTAINER } from 'src/app/shared/config';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {
  previousPage = '';
  history$;

  selectedTab = 'photos';
  videos = [];

  noPhotoUrl = NO_VIDEO_PHOTO;

  user: User;
  school: School;

  constructor(
    private browserHistory: BrowserHistoryService,
    private router: Router,
    private route: ActivatedRoute,
    private mediaService: MediaService,
    private userService: UserService,
    private schoolService: SchoolService,
    private signals: MySignals
  ) {
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });
  }


  ngAfterContentInit(): void {
    this.user = null;
    this.school = null;
    if (this.route?.snapshot?.params?.isUser) {
      console.log('user');
      this.userService.getSelectedUserLocal().then(user => {
        this.User = user;
        this.signals.announceSelectedUsers([user]);
      });
    }
    if (this.route?.snapshot?.params?.isSchool) {
      console.log('school');
      this.schoolService.getSchoolLocal().then(school => {
        this.School = school;
        this.signals.announceSelectedSchools([school]);
      });
    }
  }



  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.signals.selectedSchoolSource$.subscribe(school => {
      this.user = null;
      this.school = null;
      this.School = school;
    });
    this.signals.selectedUserSource$.subscribe(user => {
      this.user = null;
      this.school = null;
      this.User = user;
    });
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.history$);
  }


  @Input() set User(user: User) {
    this.user = user;
    // load entity(user or school) photos
    this.mediaService.getUserVideos(user?.id)?.subscribe(vids => {
      this.videos = [];
      vids.forEach(ph => {
        this.videos.push(DOWNLOAD_CONTAINER + ph.fileName);
      });
    });
  }

  @Input() set School(school: School) {
    this.school = school;
    // load entity(user or school) photos
    this.mediaService.getSchoolVideos(school?.id)?.subscribe(vids => {
      this.videos = [];
      vids.forEach(ph => {
        this.videos.push(DOWNLOAD_CONTAINER + ph.fileName);
      });
    });
  }
  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
}
