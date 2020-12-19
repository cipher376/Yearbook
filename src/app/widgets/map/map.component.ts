import { UserService } from 'src/app/shared/services/model-service/user.service';

import { AgmMap, AgmMarker, AgmPolyline, GoogleMapsAPIWrapper, MapsAPILoader, MarkerManager, PolylineManager } from '@agm/core';
import { Input, NgZone, ViewChild, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LatLng } from 'src/app/models/latLng';
import { User } from 'src/app/models/user';
import { MySignals } from 'src/app/shared/services/my-signals';
import { GeolocationService } from 'src/app/shared/services/providers/navigation/geolocation.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/shared/services/model-service/school.service';

declare var google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy, AfterContentInit {


  zoom = 18;
  private center: LatLng = {
    lat: 8.1,
    lng: -1.1
  };

  private currentLocation: LatLng = {
    lat: 8.1,
    lng: -1.1
  } as any;

  private geoCoder;
  address;

  options: any = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  schoolMarker = {
    lat: 6.690251,
    lng: -1.6861461,
    title: '',
    label: '',
    iconUrl: '',
    showInfo: '',
    visible: false,
    clickable: ''
  };

  userMarker = {
    lat: '',
    lng: '',
    title: '',
    label: '',
    iconUrl: '',
    showInfo: '',
    visible: false,
    clickable: ''
  };

  sub$ = [];

  user: User;
  school: School;

  @ViewChild(AgmMap) map: AgmMap;
  @ViewChild(AgmPolyline) polyLine: AgmPolyline;

  /**
   *
   */
  constructor(
    private geoLocation: GeolocationService,
    private signals: MySignals,
    private makerManager: MarkerManager,
    private mapWrapper: GoogleMapsAPIWrapper,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private polylineManager: PolylineManager,
    private userService: UserService,
    private schoolService: SchoolService,
    private cdr: ChangeDetectorRef
  ) {

    // this.map.mapReady.subscribe(_ => {
    //   this.initMap();
    // });

    this.mapsAPILoader.load().then(_ => {
      this.initMap();
    });
  }
  ngAfterContentInit(): void {
    if (this.map) {
      this.initMap();
    }
  }



  async ngOnInit() {
    this.User = await this.userService.getUserLocal();
    this.School = await this.schoolService.getSchoolLocal();

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
  }

  initMap() {
    this.map.latitude = this.center.lat;
    this.map.longitude = this.center.lng;
    this.map.gestureHandling = 'greedy',
      this.map.minZoom = 8;
    this.map.maxZoom = 16;
    this.map.zoomControl = false;
    this.map.panControl = false;
    this.map.streetViewControl = true;
    this.map.tilt = 30;
    this.cdr.detectChanges();
  }


  ngOnDestroy(): void {
    UtilityService.destroySubscription(this.sub$);
  }

  @Input() set Center(center: LatLng) {
    this.center = center;
  }

  @Input() set User(user: User) {
    this.user = user;
    // if (user) {
    //   this.plotUserMarker();
    // }
  }

  @Input() set School(school: School) {
    this.school = school;
    if (school?.address?.latLng) {
      this.center = UtilityService.parseLatLngStringToObj(school.address.latLng);
      this.plotSchoolMarker();
    }
  }

  setMarker(marker: AgmMarker) {
    this.makerManager.addMarker(marker);
  }

  plotUserMarker() {
    this.userMarker.lat = this.currentLocation.lat as any;
    this.userMarker.lng = this.currentLocation.lng as any;
    this.userMarker.visible = true;
  }

  plotSchoolMarker() {
    this.schoolMarker.visible = true;
    this.initMap();
  }

  drawLineFromUserToSchool() {
    // draw a line to connect the user to the school
    this.polylineManager.addPolyline(this.polyLine);
  }

  lineClicked($event) {
    console.log($event);
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.currentLocation.lat = position.coords.latitude as any;
        this.currentLocation.lng = position.coords.longitude as any;
        this.zoom = 8;
        if (!this.schoolMarker?.lat) {
          this.Center.lat = position.coords.latitude as any;
          this.Center.lng = position.coords.longitude as any;
        }
        this.getAddress(this.currentLocation?.lat, this.currentLocation?.lng);
        this.plotUserMarker();
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

}


