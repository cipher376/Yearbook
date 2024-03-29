import { MySignals } from './../../my-signals';
import { MyStorage } from './../storage/my-storage.service';
import { Injectable } from '@angular/core';

import { Subject, Observable, of } from 'rxjs';
import { MapsAPILoader } from '@agm/core';
import { tap, map, switchMap } from 'rxjs/operators';
import { from as fromPromise } from 'rxjs';
// import { SignalService, MY_ACTION } from './signal.service';
// import { MyLocalStorageService } from './local-storage.service';
import { reject } from 'q';
import { LatLng } from '../../../../models/LatLng';

export const DEFAULT_LOCATION_LAT = 11.1978503;
export const DEFAULT_LOCATION_LNG = 13.83478;

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private geocoder: any;
  private location = {} as LatLng;

  constructor(
    private mapLoader: MapsAPILoader,
    private signals: MySignals,
    private store: MyStorage
  ) {

  }

  set Location(loc: LatLng) {
    this.location = loc;
    this.setLocationLocal();
  }
  get Location() {
    return this.location;
  }


  private initGeocoder() {
    console.log('Init geocoder!');
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if (!this.geocoder) {
      return fromPromise(this.mapLoader.load())
        .pipe(
          tap(() => this.initGeocoder()),
          map(() => true)
        );
    }
    return of(true);
  }

  geocodeAddress(location: string): Observable<any> {
    console.log('Start geocoding!');
    return this.waitForMapsToLoad().pipe(
      // filter(loaded => loaded),
      switchMap(() => {
        return new Observable(observer => {
          this.geocoder.geocode({ 'address': location }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log('Geocoding complete!');
              observer.next({
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              });
            } else {
              console.log('Error - ', results, ' & Status - ', status);
              observer.next({ lat: 0, lng: 0 });
            }
            observer.complete();
          });
        });
      })
    );
  }

  getLocation(opts = { enableHighAccuracy: true, timeout: 5000, maximumAge: 10 * 60 * 1000 }): Observable<LatLng> {
    return new Observable(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            console.log('Latitude: ' + position.coords.latitude +
              'Longitude: ' + position.coords.longitude);
            const location = {} as LatLng;
            location.lat = position.coords.latitude;
            location.lng = position.coords.longitude;
            this.location = location;
            this.setLocationLocal();
            observer.next(location);
          }
        },
          (error: PositionError) => {
            console.log(error);
            observer.next({ lat: 0, lng: 0 });
          }, opts);
      } else {
        alert('Geolocation is not supported by this browser.');
        observer.next({ lat: 0, lng: 0 });
      }
    });
  }

  setLocationLocal() {
    this.store.setObject('currentLocation', this.location).then(_ => {
      this.signals.announceLocationChange(this.location);
    });
  }
  async getLocationLocal() {
    return await this.store.getObject('currentLocation');
  }



}
