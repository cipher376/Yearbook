// import { JsMapsProviderService } from './js-maps-provider.service';
// import { Injectable } from '@angular/core';
// import { Platform } from '@ionic/angular';
// import { GoogleMaps } from '@ionic-native/google-maps/ngx';

// @Injectable({
//   providedIn: 'root'
// })
// export class MapsProviderService {
//   map: any;

//   constructor(public platform: Platform, googleMap: GoogleMaps) {
//     if (this.platform.is('cordova') &&
//       (this.platform.is('ios') || this.platform.is('android'))) {
//       this.map = new NativeMapsProviderService(googleMap);
//     } else {
//       this.map = new JsMapsProviderService();
//     }
//   }

//   init(location, element) {
//     this.map.init(location, element);
//   }


// }
