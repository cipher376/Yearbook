import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolsSearchPageRoutingModule } from './schools-search-routing.module';

import { SchoolsSearchPage } from './schools-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolsSearchPageRoutingModule
  ],
  declarations: [SchoolsSearchPage]
})
export class SchoolsSearchPageModule {}
