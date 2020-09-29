import { WidgetsModule } from './../../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolsProfilePageRoutingModule } from './schools-profile-routing.module';

import { SchoolsProfilePage } from './schools-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SchoolsProfilePageRoutingModule,
    WidgetsModule
  ],
  exports: [CommonModule],
  declarations: [SchoolsProfilePage],
})
export class SchoolsProfilePageModule {}
