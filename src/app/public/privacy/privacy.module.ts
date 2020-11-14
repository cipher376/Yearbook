import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PrivacyPage } from './privacy ';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: PrivacyPage
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
  declarations: [PrivacyPage],
  entryComponents: [PrivacyPage],
})
export class PrivacyModule { }
