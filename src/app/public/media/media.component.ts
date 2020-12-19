import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit, AfterViewInit, OnDestroy {
  previousPage = '';
  history$;

  selectedTab: string = "photos";
  videos = [1,1,1,1,1,1,1,1,1,1,1,1,1];

  constructor(
    private browserHistory: BrowserHistoryService,
    private router: Router,
  ) {
    this.history$ = this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    });
   }
  ngAfterViewInit(): void {
      }

  ngOnInit() {}
  ngOnDestroy() {
    UtilityService.destroySubscription(this.history$);
  }
  
  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }
}
