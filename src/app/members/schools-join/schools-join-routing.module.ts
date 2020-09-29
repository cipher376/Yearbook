import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsJoinPage } from './schools-join.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolsJoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsJoinPageRoutingModule {}
