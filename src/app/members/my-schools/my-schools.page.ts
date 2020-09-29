import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { AfterContentInit, AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

@Component({
  selector: 'app-my-schools',
  templateUrl: './my-schools.page.html',
  styleUrls: ['./my-schools.page.scss'],
})
export class MySchoolsPage implements OnInit, AfterViewInit, OnDestroy {
  isEdit = false;
  previousPage = '';
  history$;

  constructor(private browserHistory: BrowserHistoryService,
    private router: Router) {
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

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
}
