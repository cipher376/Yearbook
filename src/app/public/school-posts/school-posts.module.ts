import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SchoolPostsPage } from './school-posts.page';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
const routes: Routes = [
  {
    path: '',
    component: SchoolPostsPage
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
  declarations: [SchoolPostsPage]
})
export class SchoolPostsPageModule { }
