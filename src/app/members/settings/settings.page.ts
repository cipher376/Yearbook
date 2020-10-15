import { UtilityService } from './../../shared/services/providers/utility.service';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, AfterViewInit, OnDestroy {
  previousPage = '';
  history$;
  mySchoolOnlyFeed;
  flagAnnouncements;
  countryOnly;

  constructor(private browserHistory: BrowserHistoryService,
    private router: Router,
    private userService: UserService  
  ) {
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    UtilityService.destroySubscription(this.history$);
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

  logout() {
    this.userService.logout();
  }

  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }
}
