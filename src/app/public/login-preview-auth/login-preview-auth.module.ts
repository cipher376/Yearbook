import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPreviewAuthPageRoutingModule } from './login-preview-auth-routing.module';

import { LoginPreviewAuthPage } from './login-preview-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPreviewAuthPageRoutingModule
  ],
  declarations: [LoginPreviewAuthPage]
})
export class LoginPreviewAuthPageModule {}
