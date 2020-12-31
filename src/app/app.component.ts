import { NotificationsComponent } from './widgets/notifications/notifications.component';
import { PushSocketService } from './shared/services/model-service/socket.service';
import { MySignals } from 'src/app/shared/services/my-signals';
import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { BrowserHistoryService } from './shared/services/providers/navigation/browser-history.service';
import { Component, OnInit, AfterViewInit, AfterContentInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './shared/services/model-service/user.service';
import { User } from './models/user';
import { PermissionsService } from './shared/services/providers/permission.service';
import { IdentityPhoto } from './models/my-media';
import { Device } from '@ionic-native/device/ngx';
import { MyDevice } from './models/my-device';
import { ConnectivityProvider } from './shared/services/providers/connectivity-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  public selectedIndex = 0;
  public logs = [];
  public appPages = [
    // {
    //     title: 'Profile',
    //     url: '/links/profile',
    //     icon: 'person',
    //     params: {user: true}
    //   },
    {
      title: 'Schools',
      url: '/links/my-schools',
      icon: 'school',
      params: {}
    },
    {
      title: 'Timeline',
      url: '/links/timeline',
      icon: 'receipt',
      params: {}
    },
    // {
    //   title: 'Find class mate',
    //   url: '/links/users-search',
    //   icon: 'people',
    //   params: {}
    // },
    {
      title: 'Find your way',
      url: '/links/schools-location',
      icon: 'trail-sign',
      params: {}
    },
  ];
  public publicPages = [
    {
      title: 'Home',
      url: '/links/home',
      icon: 'home',
      params: {}
    },
    {
      title: 'Find your way',
      url: '/links/schools-location',
      icon: 'trail-sign',
      params: {}
    },
    {
      title: 'Find year mate',
      url: '/links/users-search',
      icon: 'people',
      params: {}
    },
    {
      title: 'Sign up',
      url: '/register',
      icon: 'person-add',
      params: {}
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in',
      params: {}
    },
  ];

  public otherPages = [
    ...this.publicPages
  ];

  user: User;
  myDevices: MyDevice[] = [];
  identityPhoto: IdentityPhoto;

  @ViewChild(NotificationsComponent) notificationComponent: NotificationsComponent;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private history: BrowserHistoryService,
    private store: MyStorage,
    private permissions: PermissionsService,
    private signals: MySignals,
    private cdr: ChangeDetectorRef,
    private pushService: PushSocketService,
    private device: Device,
    private connectivityProvider: ConnectivityProvider,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.history.loadRouting(); // tracking browsing history

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.permissions.initPermissions().then(_ => _);
      this.userService.getUserLocal().then(user => {
        this.user = user;
        this.myDevices = this.user?.devices;
        this.updateDevice();
      });
      this.manageNotifications();

      this.userService.userAuthenticatedSource$.subscribe(user => {
        this.identityPhoto = UserService.getUserIdentityPhoto(user);
        this.setMenu();
        this.user = user;
        this.myDevices = user?.devices;
        this.updateDevice();
      });
    });

    // check connectivity status
    this.getOnlineStatus();
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
  }

  getOnlineStatus() {
    this.connectivityProvider.appIsOnline$
    .subscribe(online => {
      if (!online) this.router.navigateByUrl('/no-connection');
    });
  }

  async ngAfterViewInit() {
    this.user = await this.userService.getUserLocal();
    this.identityPhoto = UserService.getUserIdentityPhoto(this.user);

    setTimeout(() => {
      this.setMenu();
      this.cdr.detectChanges();
    }, 100);
  }

  checkAuthentication() {
    return this.userService.isAuthenticated();
  }

  ngAfterContentInit(): void {

  }

  setMenu(user?: User) {
    this.store.getObject<User>('user').then(localUser => {
      if (user || localUser) {
        this.otherPages = [
          {
            title: 'Settings',
            url: '/links/settings',
            icon: 'settings',
            params: {}
          },
          {
            title: 'Log out',
            url: '/login',
            icon: 'log-out',
            params: { clear: true }
          },

        ];
        this.user = user ?? localUser;
      } else {
        this.otherPages = [...this.publicPages
        ];
      }

    });
  }

  manageNotifications() {
    this.notificationComponent.dismiss();
    this.signals.socketPushMessageSource$.subscribe(msg => {
      this.notificationComponent.show(msg);
    });
  }

  updateDevice() {
    // create device
    const device = new MyDevice();
    device.platform = this.device?.platform;
    device.playerId = this.user?.id;
    device.uuid = this.device?.uuid;


    const foundDevices = this.myDevices?.find((dv) => {
      if (
        dv.platform === device.platform &&
        device.uuid === device.uuid
      ) {
        return dv;
      }
    });
    if (!foundDevices) { // not found
      // create device
      this.userService.createOrUpdateDevice(device).subscribe(dev => {
        this.myDevices.push(dev);
      }, error => {
        console.log(error);
      });
    }
    console.log(this.device);
  }

}
