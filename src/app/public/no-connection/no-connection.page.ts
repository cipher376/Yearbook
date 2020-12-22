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
  ) { }

  subs$: Subscription;

  ngOnInit() {
    this.subs$ = this.connectivityProvider.appIsOnline$
      .subscribe(online => {
        console.log(online);
        if (online) {
          // for online functions
          this.isOnline = true;
          this.router.navigateByUrl('/links/home')
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
      message: message,
      duration: duration * 1000
    });

    toast.present();
  }

}
