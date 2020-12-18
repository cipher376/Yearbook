import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSettingsPage } from './about-settings.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSettingsPageRoutingModule {}
