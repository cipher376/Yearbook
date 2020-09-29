import { WidgetsModule } from './../../widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolsPageRoutingModule } from './schools-routing.module';

import { SchoolsPage } from './schools.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolsPageRoutingModule,
    WidgetsModule
  ],
  declarations: [SchoolsPage]
})
export class SchoolsPageModule {}
