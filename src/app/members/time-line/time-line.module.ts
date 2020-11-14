import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeLinePageRoutingModule } from './time-line-routing.module';

import { TimeLinePage } from './time-line.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeLinePageRoutingModule
  ],
  declarations: [TimeLinePage]
})
export class TimeLinePageModule {}
