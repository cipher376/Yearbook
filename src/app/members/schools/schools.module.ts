import { WidgetsModule } from './../../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SchoolsPage } from './schools.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SchoolsPage
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
  declarations: [SchoolsPage]
})
export class SchoolsPageModule {}
