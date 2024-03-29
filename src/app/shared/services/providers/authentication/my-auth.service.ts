import { Injectable, Inject } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Subject, Observable } from 'rxjs';
import { UserService } from '../../model-service/user.service';
import { User } from '../../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {
  // _httpOptions;

  private _authenticationStateSource = new Subject<boolean>();
  authenticationState$ = this._authenticationStateSource.asObservable();

  constructor(private userService: UserService) {
    // this._httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: ''
    //   })
    // };
  }

  // private authenticationState(state: boolean) {
  //   this._authenticationStateSource.next(state);
  // }

    register(data: User): Observable<any> {
      return this.userService.signUp(data);
    }

    // login(data: Credential): Observable<User> {
    //   return this.userService.login(data);
    //   // return this.userIdentity.login(data, this._httpOptions).pipe(
    //   //   map(res => {
    //   //     // console.log(res);
    //   //     return res;
    //   //   }),
    //   //   catchError(e => this.handleError(e))
    //   // );
    // }

  //   completeFBAuthentication(token: string, ttl: number = null) {
  //     const requestUrl = environment.fb_auth_success_url + token;
  //     return this.http.get(requestUrl)
  //       .pipe(
  //         map((res: FameIdentity) => {
  //           console.log(res);
  //           if (res && res.id) {
  //             const sdkToken = new SDKToken({
  //               id: token,
  //               ttl: ttl,
  //               // "scopes"?: ["string"];
  //               created: new Date(res.dateCreated),
  //               userId: res.id.toString(),
  //               user: res.email
  //             });
  //             this.auth.setToken(sdkToken);
  //           }
  //           return res;
  //         }),
  //         catchError(e => this.handleError(e))
  //       );
  //   }

  //   setSocialSDKToken(token: string, userId: string, created = new Date(), ttl = Date.now()) {
  //     const sdkToken = new SDKToken({
  //       id: token, // access jwt token
  //       ttl: ttl,
  //       // "scopes"?: ["string"];
  //       created: new Date(),
  //       userId: userId, // the row position in a table
  //       // user: res.email
  //     });
  //     this.auth.setToken(sdkToken);
  //   }

  //   getUserAccessToken(currentToken: string, userId: string) {
  //     this._httpOptions.headers.Authorization = currentToken;
  //     // .0
  //     return this.userIdentity.getAccessTokens(userId, {}, this._httpOptions).pipe(
  //       map(res => {
  //         console.log(res);
  //         return res;
  //       }),
  //       catchError(e => this.handleError(e))
  //     );
  //   }




    logout() {
      return throwError('Not Implemented');
    }

  //   // Requesting for password reset by email
  //   RequestResetLink(email: string) {
  //     return this.userIdentity.resetPassword({ email: email }).pipe(
  //       map(res => {
  //         return res;
  //       }),
  //       catchError(e => this.handleError(e))
  //     );
  //   }


  //   requestVerificationLink(email: string) {
  //     return this.userIdentity.verifyEmail(email).pipe(
  //       map(res => {
  //         return res;
  //       }),
  //       catchError(e => this.handleError(e))
  //     );
  //   }
  isAuthenticated() {
    // const state = this.userIdentity.isAuthenticated();
    // console.log('Autentication ' + state);
    // this.authenticationState(state); // broadcast state;
    return true;
  }

  private handleError(error) {
    // alert(JSON.stringify(error));
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(error);
    }
    // return an observable with a user-facing error message
    // return an observable with a user-facing error message
    if (error && error.message && error.message.search('Email already exists') > -1) {
      return throwError('Email is already in use!');
    } else if (error && error.message && error.message.search('verified') > -1) {
      return throwError('Email is not verified. Please verify from the in-box of the email provided!');
    } else if (error.toString().search('< in JSON at position 0') > -1) {
      return throwError('Email is not verified. Please verify from the in-box of the email provided!');
    } else if (error && error.message && error.message.search('not found') > -1) {
      return throwError('Email is not registered with Fame');
    } else {
      return throwError('System error, please report to: antiamoah890@gmail.com');
    }
  }
}
