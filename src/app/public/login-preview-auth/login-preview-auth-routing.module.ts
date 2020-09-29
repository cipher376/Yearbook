import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPreviewAuthPage } from './login-preview-auth.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPreviewAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPreviewAuthPageRoutingModule {}
