import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitySettingsPage } from './activity-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitySettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitySettingsPageRoutingModule {}
