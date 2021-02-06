import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ConnectivityProvider } from 'src/app/shared/services/providers/connectivity-provider';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

@Component({
  selector: 'app-no-connection',
  templateUrl: './no-connection.page.html',
  styleUrls: ['./no-connection.page.scss'],
})
export class NoConnectionPage implements OnInit, OnDestroy {

  isOnline: boolean;

  constructor(
    private connectivityProvider: ConnectivityProvider,
    private router: Router,
    private toastController: ToastController,
    private browserHistory: BrowserHistoryService
  ) { }

  subs$: Subscription;
  sub$ = [];
  previousPage = '';

  ngOnInit() {
    this.sub$.push(this.browserHistory.previousPageSource$.subscribe(previousPage => {
      this.previousPage = previousPage;
    }));


    this.subs$ = this.connectivityProvider.appIsOnline$
      .subscribe(online => {
        console.log(online);
        if (online) {
          // for online functions
          this.isOnline = true;
          this.router.navigateByUrl('/links/home');
        } else {
          // for offline functions
          this.isOnline = false;
          this.toast('Kindly make sure you have internet connectivity', 5);
        }
      });
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.subs$);
  }

  async toast(message: string, duration) {
    const toast = await this.toastController.create({
      header: 'Error!',
      message,
      duration: duration * 1000
    });

    toast.present();
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }


}
