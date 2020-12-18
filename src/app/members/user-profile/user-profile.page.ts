import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  user: User = new User;
  subs: Subscription;

  ngOnInit() {
    this.populateUserDetails();
    setTimeout(() => console.log(this.user), 2000);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  editProfilePic() {
    
  }
  
  populateUserDetails() {
    this.userService.getUserLocal()
      .then(u => this.user = new User(u, u as any));
  }

  updateInfo() {
    this.subs = this.userService.updateUser(this.user.UpdateInfo)
      .subscribe(subs => this.user = subs);
  }

}
