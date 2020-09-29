
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, } from '@angular/router';
// import { AdminService, USER_ROLES } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuardService implements CanActivate, CanActivateChild {



  // constructor(public _auth: MyAuthService,
  //     private _router: Router,
  //     private _adminService: AdminService) { }

  async canActivate() {
  //     if (this._auth.isAuthenticated() &&
  //         await this._adminService.hasRole(USER_ROLES.superAdmin)) {
  //         console.log('Super admin user');
  //         return true;
  //     } else {
  //         // if its login dont reload
  //         // alert("hello");
  //         if (this._router.url.indexOf('login') < 0) {
  //             this._router.navigate([
  //                 '/auth/login'
  //             ]);
  //         }
          return false;
  //     }
  }


  async canActivateChild() {
  //     if (this._auth.isAuthenticated() &&
  //         await this._adminService.hasRole(USER_ROLES.superAdmin)) {
  //         console.log('super admin child navigation');
  //         return true;
  //     } else {
  //         // alert("hello1");
  //         // if its login dont reload
  //         if (this._router.url.indexOf('login') < 0) {
  //             this._router.navigate([
  //                 '/auth/login'
  //             ]);
  //         }
          return false;
  //     }
  }
}
