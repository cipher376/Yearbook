import { AboutPage } from './about';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: AboutPage
  }
];


@NgModule({
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule
  ],
  declarations: [AboutPage],
  entryComponents: [AboutPage],
})
export class AboutModule { }
