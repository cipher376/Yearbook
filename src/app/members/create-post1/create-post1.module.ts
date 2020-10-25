import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePostPage1RoutingModule } from './create-post1-routing.module';

import { CreatePostPage1 } from './create-post1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePostPage1RoutingModule
  ],
  declarations: [CreatePostPage1]
})
export class CreatePostPage1Module {}
