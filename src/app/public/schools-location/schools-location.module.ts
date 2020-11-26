import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SchoolsLocationPage } from './schools-location.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SchoolsLocationPage
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
  declarations: [SchoolsLocationPage]
})
export class SchoolsLocationPageModule {}
