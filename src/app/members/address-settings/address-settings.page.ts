import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/models/address';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-address-settings',
  templateUrl: './address-settings.page.html',
  styleUrls: ['./address-settings.page.scss'],
})
export class AddressSettingsPage implements OnInit {

  userAddress: Address = new Address();
  subs$: Subscription[] = [];
  countries: any = {};

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.subs$.push(
    //   this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
    //     s => console.log(s)
    //   ));

  }

  updateUserInfo() {
  }

}
