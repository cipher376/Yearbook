import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePostPage1 } from './create-post1.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePostPage1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePostPage1RoutingModule {}
