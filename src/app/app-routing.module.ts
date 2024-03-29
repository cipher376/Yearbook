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
    loadChildren: () => import('./public/login-preview-un-auth/login-preview-un-auth.module').then(m => m.LoginPreviewUnAuthPageModule)
  },
  {
    canActivate: [AuthGuardService, ScreenLockGuardService],
    canActivateChild: [AuthGuardService],
    path: 'login-auth',
    loadChildren: () => import('./public/login-preview-auth/login-preview-auth.module').then(m => m.LoginPreviewAuthPageModule)
  },
  {
    canActivate: [AuthGuardService, ScreenLockGuardService],
    canActivateChild: [AuthGuardService],
    path: 'phone-number',
    loadChildren: () => import('./public/phone-number/phone-number.module').then(m => m.PhoneNumberPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./public/privacy/privacy.module').then(m => m.PrivacyModule)
  },
  {
    canActivate: [ScreenLockGuardService],
    path: 'terms-of-service',
    loadChildren: () => import('./public/terms-of-service/terms-of-service.module').then(m => m.TermsOfServiceModule)
  },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./public/about/about.module').then(m => m.AboutModule)
  // },
  {
    path: 'home', 
    loadChildren: './public/home/home.module#HomePageModule'
  },
  // {
  //   canActivate: [AuthGuardService, ScreenLockGuardService],
  //   canActivateChild: [AuthGuardService],
  //   path: 'profile',
  //   loadChildren: () => import('./members/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./members/tab-links/tab-links.module').then(m => m.TabLinksPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./members/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
  


  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },

  // {
  //   canActivate: [AuthGuardService, ScreenLockGuardService],
  //   canActivateChild: [AuthGuardService],
  //   path: 'profile',
  //   loadChildren: () => import('./members/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./members/tab-links/tab-links.module').then(m => m.TabLinksPageModule)
  // },
  {
    path: 'address-settings',
    loadChildren: () => import('./members/address-settings/address-settings.module').then( m => m.AddressSettingsPageModule)
  },
  {
    path: 'about-settings',
    loadChildren: () => import('./public/about/about.module').then( m => m.AboutModule)
  },
  
  // {
  //   path: 'report-bug',
  //   loadChildren: () => import('./public/report-bug/report-bug.module').then( m => m.ReportBugPageModule)
  // },
  // {
  //   path: 'help-and-support',
  //   loadChildren: () => import('./public/help-and-support/help-and-support.module').then( m => m.HelpAndSupportPageModule)
  // },





  // {
  //   path: 'school-posts',
  //   loadChildren: () => import('./public/school-posts/school-posts.module').then( m => m.SchoolPostsPageModule)
  // },



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
export class AppRoutingModule { }
