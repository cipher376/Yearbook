import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePage } from './user-profile.page';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidgetsModule,
    RouterModule.forChild(routes)

  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {}
