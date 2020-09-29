import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/model-service/user.service';

@Component({
  selector: 'app-tab-links',
  templateUrl: './tab-links.page.html',
  styleUrls: ['./tab-links.page.scss'],
})
export class TabLinksPage implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.userService.isAuthenticated();
  }

}
