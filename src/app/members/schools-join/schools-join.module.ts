import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolsJoinPageRoutingModule } from './schools-join-routing.module';

import { SchoolsJoinPage } from './schools-join.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SchoolsJoinPageRoutingModule,
    WidgetsModule

  ],
  declarations: [SchoolsJoinPage]
})
export class SchoolsJoinPageModule {}
