import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './shared/services/providers/authentication/auth-guard.service';
import { ScreenLockGuardService } from './shared/services/providers/authentication/screen-lock-guard.service';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  
  {
    path: 'login',
    loadChildren: './public/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './public/register/register.module#RegisterPageModule'
  },
  {
    path: 'forgot-password',
    loadChildren: './public/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  },
  {
    path: 'tutorial',
    loadChildren: './public/tutorial/tutorial.module#TutorialModule'
  },
  {
    path: 'login-unauth',
    loadChildren: () => import('./public/login-preview-un-auth/login-preview-un-auth.module').then( m => m.LoginPreviewUnAuthPageModule)
  },
  {
    canActivate: [AuthGuardService, ScreenLockGuardService],
    canActivateChild: [AuthGuardService],
    path: 'login-auth',
    loadChildren: () => import('./public/login-preview-auth/login-preview-auth.module').then( m => m.LoginPreviewAuthPageModule)
  },
  {
    canActivate: [AuthGuardService, ScreenLockGuardService],
    canActivateChild: [AuthGuardService],
    path: 'phone-number',
    loadChildren: () => import('./public/phone-number/phone-number.module').then( m => m.PhoneNumberPageModule)
  },
  // {
  //   canActivate: [ScreenLockGuardService],
  //   path: 'home',
  //   loadChildren: () => import('./members/home/home.module').then( m => m.HomePageModule)
  // },
  // {   canActivate: [ScreenLockGuardService],
  //   path: 'schools',
  //   loadChildren: () => import('./members/schools/schools.module').then( m => m.SchoolsPageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./members/settings/settings.module').then( m => m.SettingsPageModule)
  // },
  // {
  //   canActivate: [AuthGuardService, ScreenLockGuardService],
  //   canActivateChild: [AuthGuardService],
  //   path: 'profile',
  //   loadChildren: () => import('./members/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./members/tab-links/tab-links.module').then( m => m.TabLinksPageModule)
  },


 
  // {
  //   path: 'schools-search',
  //   loadChildren: () => import('./members/schools-search/schools-search.module').then( m => m.SchoolsSearchPageModule)
  // },
  // {
  //   path: 'my-schools',
  //   loadChildren: () => import('./members/my-schools/my-schools.module').then( m => m.MySchoolsPageModule)
  // },
  // {
  //   path: 'schools-profile',
  //   loadChildren: () => import('./members/schools-profile/schools-profile.module').then( m => m.SchoolsProfilePageModule)
  // },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule {}
