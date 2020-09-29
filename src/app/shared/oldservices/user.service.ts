// import { Injectable } from '@angular/core';
// import {
//   FameUserApi,
//   FameIdentityApi,
//   FameIdentity,
//   UserLocation,
//   FameUser,
//   Name,
//   GeoPoint,
//   EventLocation,
//   FameEventApi,
//   FameEvent,
//   UserIdentityApi,
//   UserIdentity
// } from '../sdk';
// import { Observable, throwError, Subject } from 'rxjs';
// import { catchError, map, filter } from 'rxjs/operators';
// import { ALBUM_USAGE_TYPE, ALBUM_TYPE, fameConfig } from '../../interfaces/interface';
// import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
// import { FStorageService } from 'src/app/providers/f-storage.service';

// interface UserSearchObject {
//   score: number;
//   user: FameUser;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   ONE_MONTH = 30 * 24 * 60 * 60 * 1000; // 1 month in millisecons

//   private _usersSource = new Subject<FameUser[]>();
//   _users$ = this._usersSource.asObservable();

//   constructor(
//     private _fameIdentityApi: FameIdentityApi,
//     private _socailUserIdentity: UserIdentityApi, // this sent by social login
//     private _geolocation: Geolocation,
//     private _userApi: FameUserApi,
//     private _eventApi: FameEventApi,
//     private _fstore: FStorageService,
//   ) { }

//   newUsers(users: FameUser[]) {
//     this._usersSource.next(users);
//   }


//   // User current Identity id if id is not specified
//   getUserIdentityById(id: string = null) {
//     if (!id) {
//       id = this._fameIdentityApi.getCurrentId();
//     }
//     // const user = <FameIdentity>{};
//     const filter = {
//       fields: ['id', 'phone', 'email', 'username', 'dateCreated'],
//       include: [
//         {
//           relation: 'fameUser',
//           scope: {
//             // further filter the owner object
//             include: [
//               { relation: 'name' },
//               {
//                 relation: 'location',
//                 scope: {
//                   fields: ['id', 'street', 'city', 'state', 'country', 'postcode', 'postalAddress', 'apartmentAddress', 'gmap'],
//                   include: [
//                     {
//                       relation: 'timeZone'
//                     }]
//                 }
//               }
//             ]
//           }
//         },
//         {
//           relation: 'fcmDevices',
//           scope: {
//             include: {
//               relation: 'topics'
//             }
//           }
//         }
//       ]
//     };

//     return this._fameIdentityApi.findById<FameIdentity>(id, filter).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   getSocialFameIdentityById(id: string = null) {
//     return this._fameIdentityApi.findById(id).pipe(
//       map(res => {
//         // console.log(res);
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }
//   getSocialUserIdentityById(id: string = null) {
//     return this._socailUserIdentity.findById(id).pipe(
//       map(res => {
//         // console.log(res);
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   getUserByFameId(id: string) {
//     const filter = {
//       where: {
//         fameId: id
//       }
//     };
//     return this._userApi.findOne(filter).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   countUsers() {
//     return this._userApi.count().pipe(
//       map(res => {
//         console.log(res);
//         if (res) {
//           return res.count;
//         }
//         return 0;
//       }));
//   }

//   // get user details
//   getUserdetails(id: string): Observable<any> {
//     const filter = {
//       include: [
//         {
//           relation: 'identity',
//           scope: {
//             fields: ['id', 'phone', 'email', 'username', 'created'],
//           }
//         },
//         {
//           relation: 'albums'
//         },
//         {
//           relation: 'location',
//           scope: {
//             fields: ['id', 'street', 'city', 'state', 'country', 'postcode', 'postalAddress', 'apartmentAddress', 'gmap'],
//             include: [
//               {
//                 relation: 'timeZone'
//               }]
//           }
//         },
//         // {
//         //   relation: 'eventBookmarks'
//         // },
//         {
//           relation: 'assets'
//         },
//         {
//           relation: 'purchasedTickets'
//         },
//         {
//           relation: 'name', // include the owner object
//           scope: {
//             // further filter the owner object
//             fields: ['id', 'title', 'first', 'last', 'other'] // only show two fields
//             // include: { // include orders for the owner
//             //   relation: 'ors',
//             //   scope: {
//             //     where: { orderId: 5 } // only select order with id 5
//             //   }
//             // }
//           }
//         }]
//     };
//     return this._userApi.findById(id, filter).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   getUserByIds(ids: string[]) {
//     if (!ids && ids.length <= 0) {
//       return;
//     }
//     const filter = {
//       where: {
//         id: { inq: ids }
//       },
//       include: [
//         {
//           relation: 'identity',
//           scope: {
//             fields: ['id', 'phone', 'email', 'username', 'created'],
//           }
//         },
//         {
//           relation: 'albums'
//         },
//         {
//           relation: 'location',
//           scope: {
//             fields: ['id', 'street', 'city', 'state', 'country', 'postcode', 'postalAddress', 'apartmentAddress', 'gmap'],
//             include: [
//               {
//                 relation: 'timeZone'
//               }]
//           }
//         },
//         // {
//         //   relation: 'eventBookmarks'
//         // },
//         // {
//         //   relation: 'assets'
//         // },
//         // {
//         //   relation: 'purchasedTickets'
//         // },
//         {
//           relation: 'name', // include the owner object
//           scope: {
//             // further filter the owner object
//             fields: ['id', 'title', 'first', 'last', 'other'] // only show two fields
//             // include: { // include orders for the owner
//             //   relation: 'ors',
//             //   scope: {
//             //     where: { orderId: 5 } // only select order with id 5
//             //   }
//             // }
//           }
//         }]
//     };
//     return this._userApi.find(filter).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   savePersonalInfo(user: FameUser) {
//     if (user.id) {
//       return this._fameIdentityApi.updateFameUser(this._fameIdentityApi.getCurrentId(), user).pipe(
//         map(res => {
//           return <FameUser>res;
//         }),
//         catchError(e => this.handleError(e))
//       );
//     } else {
//       return this._fameIdentityApi
//         .createFameUser(this._fameIdentityApi.getCurrentId(), user)
//         .pipe(
//           map(res => {
//             return res;
//           }),
//           catchError(e => this.handleError(e))
//         );
//     }
//   }

//   saveName(id: string, name: Name): Observable<Name> {
//     if (!name.id) {
//       return this._userApi.createName(id, name).pipe(
//         map(res => {
//           return res;
//         }),
//         catchError(e => this.handleError(e))
//       );
//     } else {
//       console.log('updating name data: ');
//       console.log(name);

//       return this._userApi.updateName(id, name).pipe(
//         map(res => {
//           return res;
//         }),
//         catchError(e => this.handleError(e))
//       );
//     }
//   }

//   getPersonalInfo(): Observable<FameUser> {
//     return this._fameIdentityApi.getFameUser(this._fameIdentityApi.getCurrentId());
//   }

//   // saveLocation(
//   //   id: string,
//   //   location: UserLocation
//   // ): Observable<{} | UserLocation> {
//   //   if (!location.id) {
//   //     return this._userApi.createLocation(id, location).pipe(
//   //       map(res => {
//   //         return res;
//   //       }),
//   //       catchError(e => this.handleError(e))
//   //     );
//   //   } else {
//   //     console.log('updating location data: ');
//   //     console.log(location);
//   //     return this._userApi.updateLocation(id, location).pipe(
//   //       map(res => {
//   //         return res;
//   //       }),
//   //       catchError(e => this.handleError(e))
//   //     );
//   //   }
//   // }

//   /**************Add Location to the user *********/
//   addOrUpdateLocation(data: UserLocation): Observable<UserLocation | {}> {
//     if (!data.fameUserId) {
//       throwError('User location should have fame user id');
//       return;
//     }
//     if (!data.id) {
//       return this._userApi.createLocation(data.fameUserId, data).pipe(
//         map(res => {
//           console.log(res);
//           const loc: UserLocation = res;

//           return loc;
//         }),
//         catchError((e) => this.handleError(e))
//       );
//     } else {
//       return this._userApi.updateLocation(data.fameUserId, data).pipe(
//         map(res => {
//           console.log(res);
//           const loc: UserLocation = res;
//           return loc;
//         }),
//         catchError((e) => this.handleError(e))
//       );
//     }
//   }


//   searchFameUser(key: string, user: FameUser) {
//     key = key.trim().toLowerCase();
//     if (user) {
//       if (
//         (user.age && user.age.toString().trim().toLowerCase().search(key) > -1) ||
//         (user.id && user.id.toString().trim().toLowerCase().search(key) > -1) ||
//         (user.fameId && user.fameId.toString().trim().toLowerCase().search(key) > -1) ||
//         (user.gender && user.gender.toString().trim().toLowerCase().search(key) > -1) ||
//         (user.dateCreated && user.dateCreated.toString().toLowerCase().trim().search(key) > -1) ||
//         (user.dateModified && user.dateModified.toString().toLowerCase().trim().search(key) > -1)
//       ) {
//         return true;
//       }

//       if (user.name) {
//         const name = user.name;
//         if ((name.first.toString().trim().toLowerCase() + ' ' +
//           name.last.toString().trim().toLowerCase() + ' ' +
//           name.other.toString().trim().toLowerCase()).search(key) > -1) {
//           return true;
//         }
//         if ((name.first.toString().trim().toLowerCase() + ' ' +
//           name.other.toString().trim().toLowerCase() + ' ' +
//           name.last.toString().trim().toLowerCase()).search(key) > -1
//         ) {
//           return true;
//         }
//         if ((name.last.toString().trim().toLowerCase() + ' ' +
//           name.first.toString().trim().toLowerCase() + ' ' +
//           name.other.toString().trim().toLowerCase()).search(key) > -1
//         ) {
//           return true;
//         }
//       }

//       if (user.location) {
//         if (
//           (user.location.apartmentAddress && user.location.apartmentAddress.toString()
//             .trim().toLowerCase().search(key.toLowerCase()) > -1) ||
//           (user.location.city && user.location.city.toString().trim().toLowerCase().search(key.toLowerCase()) > -1) ||
//           (user.location.country && user.location.country.toString().trim().toLowerCase().search(key.toLowerCase()) > -1) ||
//           (user.location.postalAddress && user.location.postalAddress.toString().trim().toLowerCase().search(key.toLowerCase()) > -1) ||
//           (user.location.state && user.location.state.toString().trim().toLowerCase().search(key.toLowerCase()) > -1) ||
//           (user.location.street && user.location.street.toString().trim().toLowerCase().search(key.toLowerCase()) > -1)) {
//           return true;
//         }
//       }
//     }
//   }

//   searchRemote(key: string, skip = 0, limit = 100, ) {
//     const data = {
//       key: key,
//       filter: {
//         limit: limit,
//         skip: skip
//       }
//     };
//     return this._userApi.search(data).pipe(
//       map((res: UserSearchObject[]) => {
//         console.log(res);
//         const users: FameUser[] = [];
//         if (res && res.length > 0) {
//           res.forEach(obj => {
//             users.push(obj.user);
//           });
//         }
//         return users;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   /**********************Get Users locations but returns only id***************/
//   getUserLocationsIndexGeoPoint(point: GeoPoint, limit = fameConfig.defaultMaxLimitOfQueryResult,
//     skip = 0,
//     maxDistanceFromPoint = fameConfig.defaultMaxDistanceToUserGeoPoint,
//     unit = fameConfig.defaultMaxDistanceToUserGeoPointUnit
//   ) {
//     if (!point || !point.lat) {
//       console.log('No geo point specified');
//       point = { lat: 0, lng: 0 }
//     }
//     const filt = {
//       // order: 'id DESC',
//       limit: limit,
//       skip: skip,
//       fields: ['id'], // since we are interested in users only include id of location
//       where:
//       {
//         gmap: {
//           near: point,
//           maxDistance: maxDistanceFromPoint,
//           unit: unit
//         }
//       },
//     };
//     return this._userApi.find(filt).pipe(
//       map((res: EventLocation[]) => {
//         // console.log(res);
//         return res;
//       })
//     );
//   }

//   /*******************Get users by location ID****** */
//   getUsersByGeoPoint(point: GeoPoint, skip = 0, limit = 100, maxDistance = fameConfig.defaultMaxDistanceToUserGeoPoint,
//     unit = fameConfig.defaultMaxDistanceToUserGeoPointUnit) {
//     if (!point) {
//       console.log('No geopoint')
//       this.newUsers([]);
//       return;
//     }

//     const filt = {
//       order: 'id DESC',
//       skip: skip,
//       limit: limit,
//       where: {
//         id: { inq: [] },
//         // dateCreated: { gte: new Date(Date.now() - (this.ONE_MONTH * months)) }
//       },
//       include: [
//         {
//           relation: 'identity',
//           scope: {
//             fields: ['id', 'phone', 'email', 'username', 'created'],
//           }
//         },
//         {
//           relation: 'albums'
//         },
//         {
//           relation: 'location'
//         },
//         // {
//         //   relation: 'eventBookmarks'
//         // },
//         {
//           relation: 'assets'
//         },
//         {
//           relation: 'purchasedTickets'
//         },
//         {
//           relation: 'name', // include the owner object
//           scope: {
//             // further filter the owner object
//             fields: ['id', 'title', 'first', 'last', 'other'] // only show two fields
//             // include: { // include orders for the owner
//             //   relation: 'ors',
//             //   scope: {
//             //     where: { orderId: 5 } // only select order with id 5
//             //   }
//             // }
//           }
//         }]
//     };

//     // get indexes of location
//     this.getUserLocationsIndexGeoPoint(point, limit, skip, maxDistance, unit).subscribe((locs: EventLocation[]) => {
//       if (locs && locs.length > 0) {
//         const loc_indexes: number[] = [];
//         locs.forEach(loc => {
//           if (loc) {
//             loc_indexes.push(loc.id);
//           }
//         });

//         if (loc_indexes.length > 0) {
//           filt.where.id.inq = loc_indexes;
//           console.log(filt);
//           console.log(loc_indexes);
//           return this._userApi.find<FameUser>(filt).pipe(
//             map(res => {
//               console.log(res);
//               this.newUsers(res);
//             })
//           ).subscribe();
//         }
//       } else {
//         this.newUsers([]);
//       }
//     });
//     return;
//   }

//   /******************Get users by geopoint nested query ****************************/
//   getUsersByGeoPointNestedQuery(point: GeoPoint, skip = 0, limit = 100,
//     maxDistanceFromPoint = fameConfig.defaultMaxDistanceToUserGeoPoint,
//     unit = fameConfig.defaultMaxDistanceToUserGeoPointUnit) {
//     if (!point || !point.lat) {
//       console.log('No geopoint')
//       // this.newUsers([]);
//       point = { lat: 0, lng: 0 }
//     }

//     const filt = {
//       order: 'id DESC',
//       skip: skip,
//       limit: limit,
//       include: [
//         {
//           relation: 'identity',
//           scope: {
//             fields: ['id', 'phone', 'email', 'username', 'created'],
//           }
//         },
//         {
//           relation: 'albums'
//         },
//         {
//           relation: 'location'
//         },
//         {
//           relation: 'location',
//           scope: {
//             where:
//             {
//               gmap: {
//                 near: point,
//                 maxDistance: maxDistanceFromPoint,
//                 unit: unit
//               }
//             },
//           }
//         },
//         // {
//         //   relation: 'eventBookmarks'
//         // },
//         // {
//         //   relation: 'assets'
//         // },
//         // {
//         //   relation: 'purchasedTickets'
//         // },
//         {
//           relation: 'name', // include the owner object
//           scope: {
//             fields: ['id', 'title', 'first', 'last', 'other']
//           }
//         }]
//     };

//     return this._userApi.find<FameUser>(filt).pipe(
//       map(res => {
//         // console.log(res);
//         this.newUsers(res); // backward compatibility
//         return res;
//       })
//     );


//   }

//   /***************************Fetch 200 users at a time *********************/
//   fetchUsers(skip: number = 0, limit = 200) {
//     const filt = {
//       order: 'id DESC',
//       limit: limit,
//       skip: skip,
//       // where: {
//       //   dateCreated: { lt: new Date(Date.now() - (this.ONE_MONTH * months)) }
//       // },
//       include: [
//         {
//           relation: 'identity',
//           scope: {
//             fields: ['id', 'phone', 'email', 'username', 'created'],
//           }
//         },
//         {
//           relation: 'albums'
//         },
//         {
//           relation: 'location'
//         },
//         // {
//         //   relation: 'eventBookmarks'
//         // },
//         {
//           relation: 'assets'
//         },
//         {
//           relation: 'purchasedTickets'
//         },
//         {
//           relation: 'name', // include the owner object
//           scope: {
//             // further filter the owner object
//             fields: ['id', 'title', 'first', 'last', 'other'] // only show two fields

//           }
//         }]
//     };
//     return this._userApi.find<FameUser>(filt).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       })
//     );
//   }

//   // get request for user location
//   async getCurrentUserLocation() {
//     return new Promise((resolve) => {
//       this._geolocation.getCurrentPosition({
//         enableHighAccuracy: true
//         // maximumAge?: number;
//         // timeout?: number;
//       }).then((point: Geoposition) => {
//         console.log(point);
//         // this._userCurrentGeoPoint = point;
//         resolve(point);
//       }, error => {
//         console.log(error);
//         console.log('Error reading user current location');
//         resolve();
//       });
//     });
//   }

//   /******************Get Bookmarked User from remote********************/
//   getBookMarkedUsersByEvent(eventId: string) {
//     const filter = {
//       include: [
//         {
//           relation: 'albums',
//           scope: {
//             include: {
//               relation: 'photos'
//             }
//           }
//         },
//         // {
//         //   relation: 'eventBookmarks'
//         // },
//         {
//           relation: 'name', // include the owner object
//           scope: {
//             fields: ['id', 'title', 'first', 'last', 'other'] // only show two fields
//           }
//         }]
//     };
//     return this._eventApi.getBookMarkedUsers(eventId, filter).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   isUserExit(email: string) {
//     const filter = {
//       where: {

//       }
//     }
//     this._userApi.findOne();
//   }


//   /*************************LOCAL FUNCTION****************/
//   async getUserIdentityLocal() {
//     return await this._fstore.getObject('user');
//   }

//   handleError(e: any): any {
//     console.log(e);
//     let message = '';
//     if (e.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', e.error.message);
//       console.log('No connection');
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${e.status}, ` + `body was: ${e.code}`
//       );
//     }
//     // return an observable with a user-facing error message
//     return throwError('System error, please report to: antiamoah890@gmail.com');
//   }
// }
