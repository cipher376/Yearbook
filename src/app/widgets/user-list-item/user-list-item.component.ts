import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { MySignals } from 'src/app/shared/services/my-signals';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {

  @Input() isEdit = false;
  @Input() user: User;
  @Input() profilePhotoUrl: string;
  sub$ = [];

  constructor(
    private alert: AlertController,
    private router: Router,
    private signals: MySignals,
    private userService: UserService
  ) { }

  ngOnInit() { }


  async view() {
    console.log(this.user);
    if (await this.userService.setSelectedUserLocal(this.user)) {
      // navigate to join school page
      this.router.navigateByUrl('/links/public-profile');
      this.signals.announceSelectedUserChange();
    }
  }

 

}
