// import { Injectable } from '@angular/core';
// import { GoogleMaps, LatLng, GoogleMapsEvent } from '@ionic-native/google-maps/ngx';

// @Injectable({
//   providedIn: 'root'
// })
// export class NativeMapsProviderService {

//   map: any;

//   constructor(public googleMaps: GoogleMaps) {

//   }

//   init(location, element) {
//     const gPoint = new LatLng(location.latitude, location.longitude);

//     const opts = {
//       camera: {
//         gPoint: gPoint,
//         zoom: 11,
//         tilt: 30
//       }
//     };

//     // this.map = this.googleMaps.create(element.nativeElement, opts);

//     this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
//       console.log('Map is ready!');
//     });
//   }

// }
