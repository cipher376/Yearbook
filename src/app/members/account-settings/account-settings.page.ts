import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {
  

  constructor(
    private router: Router,
    private browserHistory: BrowserHistoryService,
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

}
