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

  user: User;

  constructor(
    private userService: UserService,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    this.user = await this.userService.getUserLocal();
    this.userAddress = this.user.address;
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  updateUserInfo() {
    this.userAddress.userId = this.user.id;
    this.userService.createUpdateAddress(this.user?.id, this.userAddress).subscribe(address => {
      console.log(address);
      this.user.address = address;
      this.userService.setUserLocal(this.user).then(_ => _);
    });
  }

  get countries(): Country[] {
    return UtilityService.getAllCountries();
  }

 

  selectState(passed_country) {
    this.selectedCountry = this.countries.find( c => c.name === passed_country).states;
  }

}
