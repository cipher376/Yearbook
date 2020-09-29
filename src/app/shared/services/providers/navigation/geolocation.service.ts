// import { Platform } from '@ionic/angular';
// import { Injectable } from '@angular/core';
// import {
//   NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult,
//   NativeGeocoderForwardResult
// } from '@ionic-native/native-geocoder/ngx';
// import {
//   GoogleMap, GoogleMaps, Geocoder, GeocoderResult,
//   Marker, GoogleMapsEvent, LatLng, MarkerOptions
// } from '@ionic-native/google-maps/ngx';
// import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
// import { stringify } from '@angular/core/src/render3/util';
// import { Subject } from 'rxjs/Subject';


// export const DEFAULT_LOCATION_LAT = 11.1978503;
// export const DEFAULT_LOCATION_LNG = 13.83478;

// @Injectable({
//   providedIn: 'root'
// })
// export class GeolocationService {

//   gloc: LatLng;

//   watchLocationUpdates: any;
//   isWatching: boolean;

//   options: GeolocationOptions = {
//     enableHighAccuracy: true,
//     timeout: 30000,
//     maximumAge: 0
//   };
//   private _selectedLocationSource = new Subject<LatLng>();
//   selectedLocation$ = this._selectedLocationSource.asObservable();


//   // Geocoder configuration
//   private geoencoderOptions: NativeGeocoderOptions = {
//     useLocale: true,
//     maxResults: 5
//   };

//   constructor(private geolocation: Geolocation,
//     private nativeGeocoder: NativeGeocoder,
//     private fs: FStorageService,
//     private platform: Platform) {
//     this.gloc = <LatLng>{};
//     this.platform.ready().then(_ => console.log('Location service ready'))
//   }

//   // Get current coordinates of device
//   async getGeolocation() {
//     return new Promise<LatLng>((resolve, reject) => {
//       this.geolocation.getCurrentPosition(this.options).then((resp) => {
//         this.gloc.lat = resp.coords.latitude;
//         this.gloc.lng = resp.coords.longitude;
//         resolve(this.gloc);
//         // this.gloc.accuracy = resp.coords.accuracy;
//         // this.getAddressFromCoords(this.gloc.lat, this.gloc.lng).then(res => {
//         //   this.gloc.address = res ? res : '';
//         //   // save current location
//         //   this.fs.setObject('location', this.gloc).then(r => {
//         //     if (!r) {
//         //       console.error('Saving user location failed');
//         //     }
//         //   });
//         // });
//       }).catch((error) => {
//         console.log('Error getting location' + JSON.stringify(error));
//         reject('No location found, check network')
//       });
//     });

//   }

//   // geocoder method to fetch address from coordinates passed as arguments
//   getAddressFromCoords(latitude, longitude) {
//     if (this.platform.is('cordova') &&
//       (this.platform.is('ios') || this.platform.is('android'))) {
//       return this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
//         .then((result: NativeGeocoderReverseResult[]) => {
//           // return this.gloc.address = this.generateAddress(result[0]);
//         })
//         .catch((error: any) => {
//           console.log('Error getting location with native api' + JSON.stringify(error));
//         });
//     } else {
//       return Geocoder.geocode({ position: new LatLng(latitude, longitude) }).then((res: GeocoderResult[]) => {
//         if (res.length > 0) {
//           // return this.gloc.address = (res[0].country) + ', ' + res[0].adminArea + ', ' +
//           // res[0].subAdminArea + ', ' + res[0].locality + ', ' + res[0].subLocality;
//         }
//       }).catch((error: any) => {
//         console.log('Error getting location width googles goe api' + JSON.stringify(error));
//       });
//     }
//   }

//   getCoordFromAddress(address) {
//     if (this.platform.is('cordova') &&
//       (this.platform.is('ios') || this.platform.is('android'))) {
//       return this.nativeGeocoder.forwardGeocode(address, this.geoencoderOptions)
//         .then((result: NativeGeocoderForwardResult[]) => {
//           if (result.length > 0) {
//             const lat: any = result[0].latitude;
//             const lng: any = result[0].longitude;
//             return new LatLng(lat, lng);
//           }
//         })
//         .catch((error: any) => {
//           console.log('Error getting location with native api' + JSON.stringify(error));
//         });
//     } else {
//       return Geocoder.geocode({ address: address }).then((res: GeocoderResult[]) => {
//         if (res.length > 0) {
//           this.gloc.lat = res[0].position.lat;
//           this.gloc.lng = res[0].position.lng;
//           return res[0].position;
//         }
//       }).catch((error: any) => {
//         console.log('Error getting location width googles geo api' + JSON.stringify(error));
//       });
//     }
//   }

//   // Return Comma saperated address
//   private generateAddress(addressObj) {
//     const obj = [];
//     let address = '';
//     // for (let key in addressObj) {
//     //   obj.push(addressObj[key]);
//     // }
//     addressObj.array.forEach(element => {
//       obj.push(element);
//     });

//     obj.reverse();
//     // for (let val in obj) {
//     //   if (obj[val].length) {
//     //     address += obj[val] + ', ';
//     //   }
//     // }
//     obj.forEach(el => {
//       address += el + ', ';
//     });

//     return address.slice(0, -2);
//   }

//   // Start location update watch
//   watchLocation() {
//     this.isWatching = true;
//     this.watchLocationUpdates = this.geolocation.watchPosition();
//     this.watchLocationUpdates.subscribe((resp) => {
//       this.gloc.lat = resp.coords.latitude;
//       this.gloc.lng = resp.coords.longitude;
//       this.getAddressFromCoords(this.gloc.lat, this.gloc.lng);
//     });
//   }

//   // Stop location update watch
//   stopLocationWatch() {
//     this.isWatching = false;
//     this.watchLocationUpdates.unsubscribe();
//   }


//   /***** Broadcast the new selected location (LatLng) from a map UI ***/
//   announceSelectedMapLocationChange(loc: LatLng) {
//     this._selectedLocationSource.next(loc);
//   }
// }
