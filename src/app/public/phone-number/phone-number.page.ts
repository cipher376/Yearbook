import { UserInterface, Credentials } from './../../models/user';
import { MyStorage } from 'src/app/shared/services/providers/storage/my-storage.service';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserHistoryService } from 'src/app/shared/services/providers/navigation/browser-history.service';
import { ToasterService } from 'src/app/shared/services/providers/widgets/toaster.service';
// var PhoneNumber = require('awesome-phonenumber');
import PhoneNumber from 'awesome-phonenumber';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit, AfterViewInit {
  phone = '';
  country = 'GH';
  countryCode = '+233';
  user: User;

  constructor(
    private browserHistory: BrowserHistoryService,
    private router: Router, private toaster: ToasterService,
    private userService: UserService, private store: MyStorage) {
  }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    this.user = await this.userService.getUserLocal();
    console.log(this.user);
  }

  goBack() {
    this.router.navigateByUrl(this.browserHistory.getPreviousUrl());
  }

  save() {
    if (!this.phone) {
      this.toaster.toast('Please input your phone number');
      return;
    }

    if (!(this.phone.slice(0, 1) === '+')) {
      this.phone = this.countryCode + this.phone.slice(1);
    }
    const pn = new PhoneNumber(this.phone);
    console.log(pn);

    if (pn.isPossible()) {
      console.log('Phone number is good');
      if (this.user) {
        this.user.phone = this.phone;
        this.user.dateOfBirth = this.user.dateOfBirth ?? undefined;
        this.user.otherName = this.user.otherName ?? undefined;
        this.user.gender = this.user.gender ?? undefined;
        this.user = new User(this.user as UserInterface, this.user as Credentials);
        console.log(this.user);

        this.userService.updateUser(this.user.Info).subscribe(user => {
          console.log(user);
          if (user.id) {
            // success
            this.router.navigateByUrl('/links/home');
          }
        }, error => {
          this.toaster.toast(error);
        });
      }
    } else {
      this.toaster.toast('Please input correct phone number');
    }
  }

  phoneChange(phone) {
    console.log(phone);
  }
}
