import { Photo, IdentityPhoto } from 'src/app/models/my-media';
import { SCHOOL_LOCATION_POINTER, USER_LOCATION_POINTER } from './../../shared/config';
import { UserService } from 'src/app/shared/services/model-service/user.service';

import { Input, NgZone, ViewChild, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, OnDestroy, Renderer2, ElementRef, Inject } from '@angular/core';
import { LatLng } from 'src/app/models/latLng';
import { User } from 'src/app/models/user';
import { MySignals } from 'src/app/shared/services/my-signals';
import { GeolocationService } from 'src/app/shared/services/providers/navigation/geolocation.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';
import { MarkerOptions } from '@agm/core/services/google-maps-types';
import { GoogleMap } from '@angular/google-maps';
import { Plugins } from '@capacitor/core';
import { DOCUMENT } from '@angular/common';

const { Geolocation, Network } = Plugins;
declare var google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  center: LatLng = {
    lat: 7.9039268,
    lng: -3.2744266
  };

  currentLocation: LatLng = {
    lat: 7.9039268,
    lng: -3.2744266
  } as any;

  geoCoder;
  address;

  options: any = {
    // mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 24,
    minZoom: 8,
  };
  public schoolMarkers: any[] = [];
  public usersMarkers: any[] = [];

  polyline;
  circles = [];
  mapsLoaded = false;
  networkHandler = null;

  sub$ = [];

  user: User;
  school: School;
  schoolIdentityPhoto: IdentityPhoto;

  isUserMarker: boolean;

  apiKey = 'AIzaSyBfKFrI5-iEUhsZyxjc2B56RNmoQoAeBmk';

  @ViewChild(GoogleMap) map: GoogleMap;
  /**
   *
   */
  constructor(
    private userService: UserService,
    private schoolService: SchoolService,
    private renderer: Renderer2,
    private element: ElementRef,
    // tslint:disable-next-line:variable-name
    @Inject(DOCUMENT) private _document,
    private signals: MySignals
  ) {

  }

  async ngOnInit() {
    this.User = await this.userService.getUserLocal();
    this.School = await this.schoolService.getSchoolLocal();
    console.log(this.school);
    this.schoolIdentityPhoto = SchoolService.getSchoolIdentityPhoto(this.school);

    this.init().then((res) => {
      console.log('Google Maps ready.');
      this.plotMarkers(this.currentLocation.lat, this.currentLocation.lng);
    }, (err) => {
      console.log(err);
    });
  }


  ngOnDestroy(): void {
    UtilityService.destroySubscription(this.sub$);
  }

  @Input() set Center(center: LatLng) {
    this.center = center;
  }

  @Input() set User(user: User) {
    this.user = user;
  }

  @Input() set School(school: School) {
    this.school = school;
    if (school?.address?.latLng) {
      this.center = UtilityService.parseLatLngStringToObj(school.address.latLng);
      if (this.mapsLoaded) {
        this.plotMarkers(this.currentLocation.lat, this.currentLocation.lng);
      }
    }
    this.schoolIdentityPhoto = SchoolService.getSchoolIdentityPhoto(this.school);

  }

  @Input() set SchoolIdentityPhoto(photo: IdentityPhoto) {
    if (photo) {
      this.schoolIdentityPhoto = photo;
    }
  }

  clearMap() {
    this.polyline?.setMap(null);
    this.schoolMarkers.forEach(m => {
      m.setMap(null);
    });
    this.usersMarkers.forEach(m => {
      m.setMap(null);
    });
    this.circles.forEach(c => {
      c.setMap(null);
    });
  }





  /****
   * 
   * HELPER FUNCTIONS
   */

  private init(): Promise<any> {

    return new Promise((resolve, reject) => {

      this.loadSDK().then((res) => {

        this.initMap().then((r) => {
          resolve(true);
        }, (err) => {
          reject(err);
        });

      }, (err) => {

        reject(err);

      });

    });

  }

  private loadSDK(): Promise<any> {

    console.log('Loading Google Maps SDK');

    return new Promise((resolve, reject) => {

      if (!this.mapsLoaded) {

        Network.getStatus().then((status) => {

          if (status.connected) {

            this.injectSDK().then((res) => {
              resolve(true);
            }, (err) => {
              reject(err);
            });

          } else {

            if (this.networkHandler == null) {

              this.networkHandler = Network.addListener('networkStatusChange', (stat) => {

                if (stat.connected) {

                  this.networkHandler.remove();

                  this.init().then((res) => {
                    console.log('Google Maps ready.');
                  }, (err) => {
                    console.log(err);
                  });

                }

              });

            }

            reject('Not online');
          }

        }, (err) => {

          // NOTE: navigator.onLine temporarily required until Network plugin has web implementation
          if (navigator.onLine) {

            this.injectSDK().then((res) => {
              resolve(true);
            }, (error) => {
              reject(error);
            });

          } else {
            reject('Not online');
          }

        });

      } else {
        reject('SDK already loaded');
      }

    });


  }

  private injectSDK(): Promise<any> {

    return new Promise((resolve, reject) => {

      // tslint:disable-next-line:no-string-literal
      window['mapInit'] = () => {
        this.mapsLoaded = true;
        resolve(true);
      };

      const script = this.renderer.createElement('script');
      script.id = 'googleMaps';

      if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
      }

      this.renderer.appendChild(this._document.body, script);

      // this.mapsLoaded = true;
      //   resolve(true);
    });

  }

  private initMap(): Promise<any> {

    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition().then((position) => {
        this.geoCoder = new google.maps.Geocoder;
        this.getAddress(position.coords.latitude, position.coords.longitude); // get user address
        console.log(position);
        // console.log("Position")
        this.map.panTo({ lat: position.coords.latitude, lng: position.coords.longitude });
        this.currentLocation.lat = position.coords.latitude;
        this.currentLocation.lng = position.coords.longitude;
        this.map.zoom = 8;
        this.map.options = this.options;

        this.signals.resetMapSource$.subscribe(_ => {
          window.location.href = '/links/location';
        });
        resolve(true);

      }, (err) => {

        reject('Could not initialise map');

      });

    });

  }

  // public addMarker(lat: number, lng: number): void {

  //   const latLng = new google.maps.LatLng(lat, lng);

  //   const marker = new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: latLng
  //   });

  //   // this.markers.push(marker);
  // }

  toggleBounce(marker: any) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }



  plotMarkers(lat: number, lng: number) {
    this.clearMap();
    // const image = {
    //   url: ,
    //   // This marker is 20 pixels wide by 32 pixels high.
    //   // size: new google.maps.Size(20, 32),
    //   // The origin for this image is (0, 0).
    //   origin: new google.maps.Point(0, 0),
    //   // The anchor for this image is the base of the flagpole at (0, 32).
    //   anchor: new google.maps.Point(0, 0),
    // };

    this.plotUserMarker(lat, lng);

    setTimeout(() => {
      if (this.school) {
        // draw line to connect them
        this.drawPolyline({ lat, lng }, this.center).then(_ => {
          this.plotSchoolMarker(this.center.lat, this.center.lng); // display school;
        });
      }
    }, 2000);

    const circle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map.googleMap,
      center: { lat, lng },
      radius: 10000,
    });
    this.circles.push(circle);

    this.isUserMarker = true;
  }

  plotUserMarker(lat: number, lng: number) {
    const latLng = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({
      map: this.map.googleMap,
      animation: google.maps.Animation.DROP,
      position: latLng,
      icon: USER_LOCATION_POINTER,
    });
    const infowindow = new google.maps.InfoWindow({
      content: 'You are currently at: ' + this.address,
    });
    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });

    this.map.center = { lat, lng };
    this.usersMarkers.push(marker);

  }


  plotSchoolMarker(lat: number, lng: number) {
    // const image = {
    //   url: ,
    //   // This marker is 20 pixels wide by 32 pixels high.
    //   // size: new google.maps.Size(20, 32),
    //   // The origin for this image is (0, 0).
    //   origin: new google.maps.Point(0, 0),
    //   // The anchor for this image is the base of the flagpole at (0, 32).
    //   anchor: new google.maps.Point(0, 0),
    // };


    const latLng = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({
      map: this.map.googleMap,
      animation: google.maps.Animation.BOUNCE,
      position: latLng,
      icon: SCHOOL_LOCATION_POINTER,
    });
    const infowindow = new google.maps.InfoWindow({
      content: `
      <div style="width: 48vw;
      height: 34vh;">
        <div style="background-color: #fff;
        color: #000;
        box-shadow: 0 0 0.25em rgb(255 67 26 / 77%);
        font-size: 0.875em;
        border:0.75em solid transparent;
        border-bottom: 0.35em;
        height: auto;
        left: 20%;
        top: 100%;">
          <header style="background-color: #f76361; padding-bottom: 0.5vh; padding: 0.8vh;">
            <img src="${this.getSchoolProfilePhotoUrl()}" width="100%">
            <h6 style="margin: 1.5vw 0vh 0vh 0vh;">${this.school?.name}</h6>
          </header>
          <main>
          <small class="mx-auto w-50" *ngIf="this.school?.address">
          <span *ngIf="this.school?.address?.city">${this.school?.address?.city || ''}</span>
          <span *ngIf="this.school?.address?.state"> ${this.school?.address?.state || ''}</span>
          <span *ngIf="this.school?.address?.country"> ${this.school?.address?.country || ''}</span>
        </small>
          </main>
        </div>
      </div>
      `,
    });
    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });

    this.map.panTo({ lat, lng });
    this.map.zoom = 8;
    const circle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map.googleMap,
      center: { lat, lng },
      radius: 10000,
    });
    this.circles.push(circle);
    this.schoolMarkers.push(marker);
  }

  drawLineFromUserToSchool() {
    // draw a line to connect the user to the school
  }

  async drawPolyline(start: LatLng, end: LatLng): Promise<boolean> {
    return new Promise<boolean>(resolve => {

      const path = [];
      const mid = this.midPoint(start, end);
      const topMid = this.midPoint(start, mid);
      const endMid = this.midPoint(mid, end);

      path.push(start);
      path.push(topMid);
      path.push(mid);
      path.push(endMid);
      path.push(end);
      let i = 0;
      const interval = setInterval(() => {
        this.polyline = new google.maps.Polyline({
          path: [path[i], path[i + 1]],
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 0.7,
          strokeWeight: 2,
        }).setMap(this.map.googleMap);
        this.map.panTo(path[i + 1]);
        if (path[i + 1].lat === end.lat) {
          clearInterval(interval);
          resolve(true);
        }
        i += 1;
      }, 500);
    });
  }

  midPoint(start: LatLng, end: LatLng) {
    return {
      lat: (start.lat + end.lat) / 2, lng: (start.lng + end.lng) / 2
    };
  }

  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     return navigator.geolocation.getCurrentPosition((position) => {
  //       // console.log(position);
  //       this.currentLocation.lat = position.coords.latitude as any;
  //       this.currentLocation.lng = position.coords.longitude as any;
  //       this.center.lat = position.coords.latitude as any;
  //       this.center.lng = position.coords.longitude as any;
  //       this.getAddress(this.currentLocation?.lat, this.currentLocation?.lng);
  //     });
  //   }
  // }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      if (status === 'OK') {
        if (results[0]) {
          this.address = results[0].formatted_address;
          if (this.isUserMarker) {
            this.usersMarkers.forEach(m => m.setMap(null));
            this.plotUserMarker(this.currentLocation.lat, this.currentLocation.lng);
          }
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  getSchoolProfilePhotoUrl() {
    return SchoolService.getSchoolProfilePhotoUrl(this.schoolIdentityPhoto);
  }



}


