import { Component } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {
    public zoom = 14;

    public position = {
      lat: 45.755968,
      lng: 21.228967
    };

    public options: google.maps.MapOptions = {
      streetViewControl: false
    };
}
