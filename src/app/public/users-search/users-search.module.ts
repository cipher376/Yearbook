import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { UsersSearchPage } from './users-search.page';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: UsersSearchPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    WidgetsModule
  ],
  declarations: [UsersSearchPage]
})
export class UsersSearchPageModule {}
