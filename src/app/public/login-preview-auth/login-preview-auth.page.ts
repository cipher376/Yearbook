import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-preview-auth',
  templateUrl: './login-preview-auth.page.html',
  styleUrls: ['./login-preview-auth.page.scss'],
})
export class LoginPreviewAuthPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    // call logout first;
    // TODO: call logout;
    this.router.navigateByUrl('/login');
  }

}
