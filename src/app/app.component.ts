import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { BrowserHistoryService } from './shared/services/providers/navigation/browser-history.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './shared/services/model-service/user.service';
import { User } from './models/user';
import { PermissionsService } from './shared/services/providers/permission.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Schools',
      url: '/links/my-schools',
      icon: 'school'
    },
    {
      title: 'Timeline',
      url: '/links/timeline',
      icon: 'stopwatch'
    },
    {
      title: 'Posts',
      url: '/links/posts',
      icon: 'paper-plane'
    }
  ];
  public otherPages = [
    {
      title: 'Settings',
      url: '/links/settings',
      icon: 'cog'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person-circle'
    },
    {
      title: 'Sign up',
      url: '/register',
      icon: 'person-add'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person-circle'
    },
  ];

  user: User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private history: BrowserHistoryService,
    private store: MyStorage,
    private permissions: PermissionsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.history.loadRouting(); // tracking browsing history

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.permissions.initPermissions().then(_ => _);
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  ngAfterViewInit() {
    if (this.userService.isAuthenticated) {
      setTimeout(() => {
        this.otherPages = [
          {
            title: 'Settings',
            url: '/links/settings',
            icon: 'cog'
          },
          {
            title: 'Log out',
            url: '/login',
            icon: 'log-out'
          },
        ];
      }, 20);
      this.store.getObject<User>('user').then(user => this.user = user);
    }
  }

  checkAuthentication() {
    return this.userService.isAuthenticated();
  }

}
