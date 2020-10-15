import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolsSearchPageRoutingModule } from './schools-search-routing.module';

import { SchoolsSearchPage } from './schools-search.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolsSearchPageRoutingModule,
    WidgetsModule
  ],
  declarations: [SchoolsSearchPage]
})
export class SchoolsSearchPageModule {}
