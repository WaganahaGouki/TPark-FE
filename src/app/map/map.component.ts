import {Component, OnInit} from '@angular/core';
import {ParkingLotsService} from "../services/parking-lots.service";

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  constructor(private parkingLotsService: ParkingLotsService) { }

  zoom = 15;

  markers: any[] = [];

  options: google.maps.MapOptions = {
    streetViewControl: false
  };

  center!: google.maps.LatLngLiteral;

  parkingIcon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png";

  parkingLots!: any[];

  ngOnInit() {
    this.getAllParkingLots()
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  getAllParkingLots(): void {
    this.parkingLotsService.getAllParkingLots().subscribe({
      next: (response: any) => {
        this.parkingLots = response.map((parkingLot: any) => ({
          ...parkingLot
        }));
        this.setMarkers();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  checkRole() {
    return sessionStorage.getItem("role") == "USER"
  }

  setMarkers() {
    for (let i = 0; i < this.parkingLots.length; i++) {
      this.markers[i] = new google.maps.Marker({
        position: {lat: this.parkingLots[i].lat, lng: this.parkingLots[i].lng},
        icon: this.parkingIcon,
        title: this.parkingLots[i].name
      });
    }
  }
}
