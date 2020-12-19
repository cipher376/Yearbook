import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/models/address';
import { Country } from 'src/app/models/country';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

@Component({
  selector: 'app-address-settings',
  templateUrl: './address-settings.page.html',
  styleUrls: ['./address-settings.page.scss'],
})
export class AddressSettingsPage implements OnInit {

  // current user address
  currentUserAddress: Address;
  // eof current user address
  
  userAddress: Address = new Address();
  selectedCountry: any[] = new Country().states;
  subs$: Subscription[] = [];


  constructor(
    private userService: UserService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.populateUserDetails();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  updateUserInfo() {
    // get current user
    this.userService.getUserLocal()
      .then((u: User) => {
        u.address = this.currentUserAddress;
        console.log(u);
        this.subs$.push(
          this.userService.updateUser(u).subscribe(
              (subs: User) => this.userAddress = subs.address, 
              (err: Error) => this.presentToast(err.message)
            ));
      });
  }

  get countries(): Country[] {
    return UtilityService.getAllCountries();
  }

  populateUserDetails() {
    this.userService.getUserLocal()
      .then((a: User) => this.currentUserAddress = new User(a, a as any).address);
  }

  selectState(passed_country) {
    this.selectedCountry = this.countries.find( c => c.name === passed_country).states;
  }

}
