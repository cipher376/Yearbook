import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressSettingsPageRoutingModule } from './address-settings-routing.module';

import { AddressSettingsPage } from './address-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressSettingsPageRoutingModule
  ],
  declarations: [AddressSettingsPage]
})
export class AddressSettingsPageModule {}
