import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROOT_URL } from '../config';
import { UserService } from './model-service/user.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(private userService: UserService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method
    // console.log('INTERCEPTOR');
    // We retrieve the token, if any
    const token = this.userService.Token;

    // if content type is not set, default to  application/json
    let newHeaders = req.headers;
    if (newHeaders.get('Content-Type') == null && newHeaders.get('boundary') !== null) {
      // Uploading, don't append any headers;
    } else {
      // console.log('Setting content type')
      newHeaders = newHeaders.set('Content-Type', 'application/json');
    }
    // console.log(newHeaders.get('Content-Type'));
    if (token) {
      // If we have a token, we append it to our new headers
      newHeaders = newHeaders.set('Authorization', ('Bearer ' + token.token));
    }
    // Finally we have to clone our request with our new headers
    // This is required because HttpRequests are immutable
    const authReq = req.clone({ headers: newHeaders });
    // Then we return an Observable that will run the request
    // or pass it to the next interceptor if any
    return next.handle(authReq);
  }
}


@Injectable()
export class RootUrlInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor() {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({ url: `${API_ROOT_URL + req.url}` });
    // console.log(authReq);
    return next.handle(authReq);
  }
}










/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RootUrlInterceptor, multi: true },
];
