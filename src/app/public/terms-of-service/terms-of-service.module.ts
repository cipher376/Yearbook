import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TermsOfServicePage } from './terms-of-service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: TermsOfServicePage
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
  declarations: [TermsOfServicePage],
  entryComponents: [TermsOfServicePage],
})
export class TermsOfServiceModule { }
