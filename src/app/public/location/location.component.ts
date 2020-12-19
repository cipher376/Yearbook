import { IdentityPhoto } from 'src/app/models/my-media';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { MySignals } from 'src/app/shared/services/my-signals';
import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { School } from 'src/app/models/school';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit, AfterContentInit {
  previousPage = '';
  history$;
  user: User;
  school: School;
  schoolIdentityPhoto: IdentityPhoto
  constructor(
    private signals: MySignals,
    private schoolService: SchoolService,
    private userService: UserService,
    private browserHistory: BrowserHistoryService,
    private router: Router,
  ) {
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });
  }
  async ngAfterContentInit() {
    this.school = await this.schoolService.getSchoolLocal();
    this.user = await this.userService.getUserLocal();
  }

  async ngOnInit(
  ) {
    
  }

  @Input() User(user: User) {
    this.user = user;
  }
  @Input() School(school: School) {
    this.school = school;
  }

@Input() SchoolIdentityPhoto(identityPhoto: IdentityPhoto) {
  this.schoolIdentityPhoto = identityPhoto;
}

back() {
  this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
}

}
