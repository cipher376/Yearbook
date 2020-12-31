import { Router } from '@angular/router';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/model-service/user.service';
import { IdentityPhoto } from 'src/app/models/my-media';

@Component({
  selector: 'app-login-preview-auth',
  templateUrl: './login-preview-auth.page.html',
  styleUrls: ['./login-preview-auth.page.scss'],
})
export class LoginPreviewAuthPage implements OnInit, AfterContentInit {
  identityPhoto: IdentityPhoto;
  firstname: string;
  constructor(
    public router: Router,
    private userService: UserService
  ) { }




  ngOnInit() {
    this.getFirstName();
  }
  
  ngAfterContentInit(): void {
    this.userService.getUserLocal().then(user => {
      this.identityPhoto = UserService.getUserIdentityPhoto(user);
    });
  }
  login() {
    // call logout first;
    this.router.navigateByUrl('/login');
  }

  swipeEvent(event: any) {
    // this.swipeGesture.enable()
  }

  async getFirstName() {
    this.firstname = (await this.userService.getUserLocal()).firstName;
  }

}
