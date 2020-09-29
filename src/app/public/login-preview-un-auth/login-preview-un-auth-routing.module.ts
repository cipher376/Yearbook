import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPreviewUnAuthPage } from './login-preview-un-auth.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPreviewUnAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPreviewUnAuthPageRoutingModule {}
