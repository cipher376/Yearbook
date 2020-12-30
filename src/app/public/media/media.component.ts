import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { MediaService } from 'src/app/shared/services/model-service/media.service';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { SERVER_DOWNLOAD_PATH, NO_VIDEO_PHOTO } from 'src/app/shared/config';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit, AfterViewInit, OnDestroy {
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
    private mediaService: MediaService,
    private userService: UserService,
    private schoolService: SchoolService
  ) {
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });
  }



  ngAfterViewInit(): void {
    this.userService.getUserLocal().then(user => {
      this.User = user;
    });
    this.schoolService.getSchoolLocal().then(school => {
      this.School = school;
    });
  }

  ngOnInit() { }
  ngOnDestroy() {
    UtilityService.destroySubscription(this.history$);
  }


  @Input() set User(user: User) {
    this.user = user;
    // load entity(user or school) photos
    this.mediaService.getUserVideos(user?.id)?.subscribe(vids => {
      if (!this.school) {
        this.videos = [];
        vids.forEach(ph => {
          this.videos.push(SERVER_DOWNLOAD_PATH + ph.fileName);
        });
      }
    });
  }

  @Input() set School(school: School) {
    this.school = school;
    // load entity(user or school) photos
    this.mediaService.getUserVideos(school?.id)?.subscribe(vids => {
      if (!this.user) {
        this.videos = [];
        vids.forEach(ph => {
          this.videos.push(SERVER_DOWNLOAD_PATH + ph.fileName);
        });
      }
    });
  }
  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
}
