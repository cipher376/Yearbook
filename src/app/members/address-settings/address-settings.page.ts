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
  userAddress: Address = new Address();
  selectedCountryStates: string[] = [];
  subs$: Subscription[] = [];

  user: User;

  constructor(
    private userService: UserService,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    this.user = await this.userService.getUserLocal();
    this.userAddress = this.user.address || new Address();
    try {
      this.loadStates();
    } catch (error) {

    }
    console.log(this.user);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  updateUserInfo() {
    this.userAddress.userId = this.user.id;
    this.userService.createUpdateAddress(this.user?.id, this.userAddress).subscribe(address => {
      console.log(address);
      this.user.address = address;
      this.userAddress = address;
      this.userService.setUserLocal(this.user).then(_ => _);
    });
  }

  get countries(): Country[] {
    return UtilityService.getAllCountries();
  }



  loadStates() {
    const foundCountries = this.countries?.find(c => c?.name === this.userAddress?.country);
    this.selectedCountryStates = foundCountries?.states;
    if (!this.selectedCountryStates.includes(this.userAddress.state)) {
      this.userAddress.state = '';
    }
  }

}
