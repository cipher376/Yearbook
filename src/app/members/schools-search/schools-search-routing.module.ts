import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsSearchPage } from './schools-search.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsSearchPageRoutingModule {}
