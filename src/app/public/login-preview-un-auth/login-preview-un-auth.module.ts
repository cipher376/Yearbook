import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPreviewUnAuthPageRoutingModule } from './login-preview-un-auth-routing.module';

import { LoginPreviewUnAuthPage } from './login-preview-un-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPreviewUnAuthPageRoutingModule
  ],
  declarations: [LoginPreviewUnAuthPage]
})
export class LoginPreviewUnAuthPageModule {}
