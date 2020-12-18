import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Country } from 'src/app/models/country';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

@Component({
  selector: 'app-address-settings',
  templateUrl: './address-settings.page.html',
  styleUrls: ['./address-settings.page.scss'],
})
export class AddressSettingsPage implements OnInit {

  userAddress: Address = new Address();
  selectedCountry: any[] = new Country().states;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  updateUserInfo() {
  }

  get countries(): Country[] {
    return UtilityService.getAllCountries();
  }


  selectState(passed_country) {
    this.selectedCountry = this.countries.find( c => c.name === passed_country).states;
  }

}
