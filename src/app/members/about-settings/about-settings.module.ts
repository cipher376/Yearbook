import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSettingsPageRoutingModule } from './about-settings-routing.module';

import { AboutSettingsPage } from './about-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSettingsPageRoutingModule
  ],
  declarations: [AboutSettingsPage]
})
export class AboutSettingsPageModule {}
