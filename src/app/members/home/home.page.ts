import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/model-service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firstname: string;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUsername();
  }

  getUsername() {
    if ( this.isAuthenticated() ) {
      this.userService.getUserLocal().then(
        user => this.firstname = user.firstName
      )
    }
  }

  isAuthenticated(){
    return this.userService.isAuthenticated();
  }

  gotoLogin() {
    this.router.navigateByUrl('/login');
  }

}
