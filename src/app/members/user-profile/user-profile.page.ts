import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit, OnDestroy {

  constructor(
    private userService: UserService
  ) { }

  user: User = new User();
  userAddress: Address = new Address();
  subs$: Subscription[] = [];

  ngOnInit() {
    this.populateUserDetails();
  }

  ngOnDestroy() {
    UtilityService.destroySubscription(this.subs$);
  }

  editProfilePic() {

  }

  populateUserDetails() {
    this.userService.getUserLocal()
      .then(u => {
        this.user = new User(u, u as any);
        this.userAddress = this.user?.address;
      });
  }

  updateUserInfo() {
    this.subs$.push(this.userService.updateUser(this.user.UpdateInfo)
      .subscribe(subs => this.user = subs));
  }

  updateUserAddress() {

  }

}
