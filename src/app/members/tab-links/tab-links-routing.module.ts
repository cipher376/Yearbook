import { TimeLinePageModule } from './../time-line/time-line.module';
import { SchoolsProfilePageModule } from './../schools-profile/schools-profile.module';
import { SchoolsPageModule } from './../schools/schools.module';
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
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
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
        loadChildren: () => import('../schools-search/schools-search.module').then(m => m.SchoolsSearchPageModule)
      },
      {
        path: 'school-profile',
        loadChildren: () => import('../schools-profile/schools-profile.module').then(m => m.SchoolsProfilePageModule)
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
        path: 'schools-join',
        loadChildren: () => import('../schools-join/schools-join.module').then(m => m.SchoolsJoinPageModule)
      },
      {
        path: 'create-post1',
        loadChildren: () => import('../create-post1/create-post1.module').then(m => m.CreatePostPage1Module)
      },
      {
        path: 'timeline',
        loadChildren: () => import('../time-line/time-line.module').then(m => m.TimeLinePageModule)
      },
      {
        path: 'post',
        loadChildren: () => import('../post/post.module').then(m => m.PostPageModule)
      },
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
