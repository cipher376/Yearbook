import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitySettingsPageRoutingModule } from './activity-settings-routing.module';

import { ActivitySettingsPage } from './activity-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitySettingsPageRoutingModule
  ],
  declarations: [ActivitySettingsPage]
})
export class ActivitySettingsPageModule {}
