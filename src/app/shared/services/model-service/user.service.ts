import { PageInfo, getPagedData } from '../../../models/page';
import { Router } from '@angular/router';
import { API_ROOT_URL, DOWNLOAD_CONTAINER, USER_DEFAULT_PHOTO_URL } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable, of, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CredentialsInterface, User, UserInterface } from '../../../models/user';
import { MyStorage } from '../providers/storage/my-storage.service';
import { UtilityService } from '../providers/utility.service';
import { PhotoType, IdentityPhoto } from 'src/app/models/my-media';

export interface Token {
  token: '';
}



@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: Token = null;
  redirectUrl = '';


  private userAuthenticatedSource = new Subject<User>();
  userAuthenticatedSource$ = this.userAuthenticatedSource.asObservable();

  constructor(
    private http: HttpClient,
    private store: MyStorage,
    private router: Router) {
    this.getToken().then(token => {
      this.token = token;
    });

  }

  announceUserAuthenticated(user: User) {
    this.userAuthenticatedSource.next(user);
  }

  signUp(user: User) {
    return this.http.post<User>('/signup', user).pipe(
      map(res => {
        // console.log(res);
        return res;
      }),
      catchError(e => this.handleError(e))
    );
  }

  login(data: Credential): Observable<Token> {
    return this.http.post<Token>('/login', data).pipe(
      map(res => {
        this.token = res as any;
        if (this.token.token) {
          this.saveToken(this.token);
          // console.log(res);
          // fetch user data
          this.getMyProfile().subscribe(_ => _);
        }
        this.router.navigateByUrl(this.redirectUrl);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  logout() {
    this.token = null;
    this.deleteToken(); // delete jwt auth token
    this.deleteUserLocal(); // clear user details
    this.announceUserAuthenticated(null); // send signal to log user out
  }

  async getToken(): Promise<Token> {
    return await this.store.getObject('token');
  }

  saveToken(token: Token) {
    /** Save the authentication token **/
    this.store.setObject('token', token);
  }

  deleteToken() {
    this.store.remove('token');
  }

  isAuthenticated() {
    if (this.token) {
      return true;
    }
    return false;
  }
  RequestResetLink(email: string) {
    // return this.userIdentity.resetPassword({ email: email }).pipe(
    //   map(res => {
    //     return res;
    //   }),
    //   catchError(e => this.handleError(e))
    // );
  }


  requestVerificationLink(email: string) {
    // return this.userIdentity.verifyEmail(email).pipe(
    //   map(res => {
    //     return res;
    //   }),
    //   catchError(e => this.handleError(e))
    // );
  }



  updateUser(user: CredentialsInterface | UserInterface): Observable<User> {
    return this.http.patch<User>('/users/' + user.id, user).pipe(
      map(res => {
        console.log(res);
        let user = new User(res, res as CredentialsInterface) as any;
        this.store.setObject('user', user).then(_ => _);
        return user;
      }),
      catchError(e => this.handleError(e))
    );
  }


  // Quick user peep
  getMe(): Observable<User> {
    return this.http.get<User>('/users/me').pipe(
      map(res => {
        /** Save the authentication token **/
        this.store.setObject('user', res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  // Get user details
  getMyProfile(): Observable<User> {
    return this.http.get<User>('/users/my-profile').pipe(
      map(res => {
        /** Save the authentication token **/
        this.store.setObject('user', res);
        this.announceUserAuthenticated(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getUsers(pageInfo?: PageInfo): Observable<User[]> {
    let filter;
    if (pageInfo) {
      filter = {
        // order: 'id DESC',
        offset: pageInfo.offset * pageInfo.limit,
        limit: pageInfo.limit,
        // skip: pageInfo.count
      };
    }
    filter = filter ? '?filter=' + JSON.stringify(filter) : '';
    const url = '/users' + filter;
    // console.log(url);
    return this.http.get<User[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getUsersByIds(ids: string[], pageInfo?: PageInfo): Observable<User[]> {
    let filter;
    if (pageInfo) {
      filter = {
        offset: pageInfo.offset * pageInfo.limit,
        limit: pageInfo.limit,
        where: {
          id: { inq: ids }
        },
      };
    }
    filter.include = [
      { relation: 'photos' },
      { relation: 'address' },
    ];

    filter = filter ? '?filter=' + JSON.stringify(filter) : '';
    const url = '/users' + filter;
    // console.log(url);
    return this.http.get<User[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getUserDetails(userId: any) {
    const filter = {
      include: [
        { relation: 'photos' },
        { relation: 'address' },
        { relation: 'userConfig' },
        { relation: 'post' },
        {
          relation: 'alumni',
          scope: {
            include: [
              {
                relation: 'school',
                // scope: {
                //   include: [
                //     { relation: 'photos' }]
                // }
              }
            ]
          }
        }
      ]
    };
    const url = `/users/${userId}?filter=` + JSON.stringify(filter);
    return this.http.get<User[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }

  getUserProfile(userId: any): Observable<User> {
    const filter = {
      include: [
        {
          relation: 'photos',
          scope: {
            where: {
              profile: true
            }
          }
        },
        { relation: 'address' }
      ]
    };
    const url = `/users/${userId}?filter=` + JSON.stringify(filter);
    return this.http.get<User[]>(url).pipe(
      map(res => {
        // console.log(res);
        return res as any;
      }),
      catchError(e => this.handleError(e))
    );
  }



  countUsers(): Observable<number> {
    return this.http.get<User[]>('/users/count').pipe(
      map(res => {
        if (res) {
          return (res as any).count;
        }
        return 0;
      }),
      catchError(e => this.handleError(e))
    );
  }

  /**************************************/
  /************Lock screen***************/
  /**************************************/
  lockScreen() {
    // generate the number
    const max = 1000, min = 100;
    const code = Math.floor(Math.random() * (max - min) + min);
    this.store.set('lock_code', code);
    return code;
  }

  async unlockScreen(code: number): Promise<boolean> {
    const stored_code: number = await this.store.get('lock_code');
    if (stored_code === code) {
      await this.store.remove('lock_code');
      return true;
    } else {
      return false;
    }
  }

  async isScreenLocked() {
    const stored_code: number = await this.store.get('lock_code');
    if (stored_code) {
      return true;
    }
    return false;
  }

  /////////////////////////////////////////////////////////////////////////
  /*************Local user access*****/
  ///////////////////////////////////////////////////////////////////////////



  // Read user object from sesson storage
  async getUserLocal(): Promise<User> {
    return await this.store.getObject('user');
  }

  deleteUserLocal() {
    this.store.remove('user');
  }

  async setUserLocal(user: User): Promise<boolean> {
    return await this.store.setObject('user', user);
  }

  getOwnerImage(user: User, photoType?: PhotoType) {
    const identityPhoto: IdentityPhoto = {
      cover: null,
      profile: null,
      flag: null,

    } as IdentityPhoto;
    if (user?.photos?.length > 0) {
      for (const photo of user.photos) {
        if (photo.coverImage) {
          identityPhoto.cover = photo;
          if (photoType === PhotoType.cover) {
            return (DOWNLOAD_CONTAINER + identityPhoto?.cover?.fileName);
          }
        }
        if (photo.profile) {
          identityPhoto.profile = photo;
          if (photoType === PhotoType.profile) {
            return (DOWNLOAD_CONTAINER + identityPhoto?.profile?.fileName);
          }
        }
        if (photo.flag) {
          identityPhoto.flag = photo;
          if (photoType === PhotoType.flag) {
            return (DOWNLOAD_CONTAINER + identityPhoto?.flag?.fileName);
          }
        }
      }
    }
    return USER_DEFAULT_PHOTO_URL;
  }
  async getSelectedUserLocal(): Promise<User> {
    return await this.store.getObject('selected-user');
  }

  deleteSelectedUserLocal() {
    this.store.remove('selected-user');
  }

  async setSelectedUserLocal(user: User): Promise<boolean> {
    return await this.store.setObject('selected-user', user);
  }

  private handleError(e: any): any {
    // console.log(e);
    return throwError(UtilityService.myHttpErrorFormat(e, 'user'));
  }
}
