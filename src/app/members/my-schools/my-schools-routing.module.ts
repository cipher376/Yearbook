import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySchoolsPage } from './my-schools.page';

const routes: Routes = [
  {
    path: '',
    component: MySchoolsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySchoolsPageRoutingModule {}
