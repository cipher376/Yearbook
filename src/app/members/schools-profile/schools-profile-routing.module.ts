import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsProfilePage } from './schools-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolsProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class SchoolsProfilePageRoutingModule {}
