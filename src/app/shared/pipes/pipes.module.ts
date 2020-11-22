import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToEventTime } from './pipes.pipe';

@NgModule({
  declarations: [ToEventTime],
  imports: [
    CommonModule
  ],
  exports: [ ToEventTime ]
})
export class PipesModule { }
