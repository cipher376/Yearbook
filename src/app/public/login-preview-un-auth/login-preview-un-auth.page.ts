import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-preview-un-auth',
  templateUrl: './login-preview-un-auth.page.html',
  styleUrls: ['./login-preview-un-auth.page.scss'],
})
export class LoginPreviewUnAuthPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
