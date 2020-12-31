import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { Gesture } from '@ionic/angular';

@Component({
  selector: 'app-login-preview-auth',
  templateUrl: './login-preview-auth.page.html',
  styleUrls: ['./login-preview-auth.page.scss'],
})
export class LoginPreviewAuthPage implements OnInit {

  constructor(
    public router: Router,
    private userService: UserService
  ) { }

  firstname: string;
  swipeGesture: Gesture;

  ngOnInit() {
    this.getFirstName();
  }

  login(){
    // call logout first;
    // TODO: call logout;
    this.router.navigateByUrl('/login');
  }

  swipeEvent(event: any) {
    // this.swipeGesture.enable()
  }

  async getFirstName() {
    this.firstname = (await this.userService.getUserLocal()).firstName;
  }

}
