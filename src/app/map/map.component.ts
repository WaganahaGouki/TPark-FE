import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
    zoom = 15;

    options: google.maps.MapOptions = {
      streetViewControl: false
    };

    center!: google.maps.LatLngLiteral;

    ngOnInit() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    }
}
