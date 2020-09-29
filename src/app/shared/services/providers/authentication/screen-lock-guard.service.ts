import { UserService } from './../../model-service/user.service';

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Injectable({
    providedIn: 'root'
})
export class ScreenLockGuardService implements CanActivate {

    constructor(public auth: UserService,
        private router: Router) { }

    async canActivate(): Promise<boolean> {
        if (!await this.auth.isScreenLocked()) {
            console.log('Authenticated user');
            return true;
        } else {
            // if its login dont reload
            // alert("hello");
            if (this.router.url.indexOf('login') < 0) {
                this.router.navigate([
                    '/auth/lock'
                ]);
            }
            return false;
        }
    }
}
