import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsLocationPage } from './schools-location.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolsLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsLocationPageRoutingModule {}
