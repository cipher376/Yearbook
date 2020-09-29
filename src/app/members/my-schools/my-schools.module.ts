import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySchoolsPageRoutingModule } from './my-schools-routing.module';

import { MySchoolsPage } from './my-schools.page';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySchoolsPageRoutingModule,
    WidgetsModule

  ],
  declarations: [MySchoolsPage]
})
export class MySchoolsPageModule {}
