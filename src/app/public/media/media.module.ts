import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AboutPage } from "../about/about";
import { PhoneNumberPage } from "../phone-number/phone-number.page";
import { MediaComponent } from "./media.component";



const routes: Routes = [
  {
    path: '',
    component: MediaComponent
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MediaComponent]
})
export class MediaModule {}
