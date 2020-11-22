
import { Input, ViewChild } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LatLng } from 'src/app/models/latLng';
import { MySignals } from 'src/app/shared/services/my-signals';
import { GeolocationService } from 'src/app/shared/services/providers/navigation/geolocation.service';
import { UtilityService } from 'src/app/shared/services/providers/utility.service';

declare var google: any ;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {


  zoom = 18;
  private center: LatLng = {
    lat: 51.673858,
    lng: 7.815982
  };



  options: any = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  public markers = [

  ];

  sub$ = [];

  @ViewChild('googleMap', { static: false }) public googleMap: any;

  /**
   *
   */
  constructor(
    private geoLocation: GeolocationService,
    private signals: MySignals) {

    // subscribe to current user location
    this.sub$.push(this.geoLocation.getLocation().subscribe((position) => {
      this.Center = position as LatLng;

      // add new marker of user location
      this.addMarker(position);
    }));

    // subscribe to location change event
    this.sub$.push(
      this.signals.locationChangeSource$.subscribe(position => {

        this.Center = position;
        console.log('Location change in map component');
        console.log(this.center);
      })
    );

    this.options = {
      mapTypeId: 'hybrid',
      zoomControl: true,
      scrollwheel: true,
      rotateControl: true,
      panControl: true,
      mapTypeControl: true,
      fullscreenControl: true,
      // zoomControlOptions:{},
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8,
      zoom: 12,
      center: this.center
    };
  }



  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    UtilityService.destroySubscription(this.sub$);
  }

  @Input() set Center(center: LatLng) {
    this.center = center;
    this.center.lat = parseFloat(center.lat + '');
    this.center.lng = parseFloat(center.lng + '');
    this.addMarker(center);
    this.googleMap.panTo(this.center);
  }

  addMarker(center: LatLng) {
    this.markers.push({
      position: {
        lat: center.lat,
        lng: center.lng,
      },
      label: {
        color: 'red'
      },
      title: '',
      options: { animation: google?.maps?.Animation?.BOUNCE },
    });
  }


  mapClicked($event) {

  }

  centerChanged($event: LatLng) {
    console.log($event);
    // panTo

  }


}


