import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressSettingsPage } from './address-settings.page';

const routes: Routes = [
  {
    path: '',
    component: AddressSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressSettingsPageRoutingModule {}
