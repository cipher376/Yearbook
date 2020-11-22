import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolsLocationPageRoutingModule } from './schools-location-routing.module';

import { SchoolsLocationPage } from './schools-location.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolsLocationPageRoutingModule,
    WidgetsModule
  ],
  declarations: [SchoolsLocationPage]
})
export class SchoolsLocationPageModule {}
