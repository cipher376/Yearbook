
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabLinksPage } from './tab-links.page';
import { ScreenLockGuardService } from 'src/app/shared/services/providers/authentication/screen-lock-guard.service';
import { AuthGuardService } from 'src/app/shared/services/providers/authentication/auth-guard.service';

const routes: Routes = [
  {
    path: 'links',
    component: TabLinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../public/home/home.module').then(m => m.HomePageModule)
      },
      {
        canActivate: [AuthGuardService, ScreenLockGuardService],
        canActivateChild: [AuthGuardService],
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        canActivate: [ScreenLockGuardService],
        path: 'schools',
        loadChildren: () => import('../schools/schools.module').then(m => m.SchoolsPageModule)
      },
      {
        path: 'schools-search',
        loadChildren: () => import('../../public/schools-search/schools-search.module').then(m => m.SchoolsSearchPageModule)
      },
      {
        path: 'schools-location',
        loadChildren: () => import('../../public/schools-location/schools-location.module').then(m => m.SchoolsLocationPageModule)
      },
      {
        path: 'school-profile',
        loadChildren: () => import('../../public/schools-profile/schools-profile.module').then(m => m.SchoolsProfilePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'my-schools',
        loadChildren: () => import('../my-schools/my-schools.module').then(m => m.MySchoolsPageModule)
      },
      {
        path: 'school-posts',
        loadChildren: () => import('../../public/school-posts/school-posts.module').then(m => m.SchoolPostsPageModule)
      },
      {
        path: 'timeline',
        loadChildren: () => import('../time-line/time-line.module').then(m => m.TimeLinePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/links/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabLinksPageRoutingModule { }
