import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MediaComponent } from '../media/media.component';
import { LocationComponent } from './location.component';



const routes: Routes = [
  {
    path: '',
    component: LocationComponent
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    WidgetsModule
  ],
  declarations: [LocationComponent]
})
export class LocationModule {}
