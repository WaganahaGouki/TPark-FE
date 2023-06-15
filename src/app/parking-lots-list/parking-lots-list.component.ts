import {Component, OnInit} from '@angular/core';
import {ParkingLot} from "../models/parkingLot";
import {ParkingLotsService} from "../services/parking-lots.service";
import {map} from "rxjs";

@Component({
  selector: 'parking-lots-list',
  templateUrl: './parking-lots-list.component.html',
  styleUrls: ['./parking-lots-list.component.css']
})
export class ParkingLotsListComponent implements OnInit {
  parkingLots!: any[];

  constructor(private parkingLotsService: ParkingLotsService) { }

  ngOnInit(): void {
    this.getAllParkingLots();
  }

  getAllParkingLots(): void {
    this.parkingLotsService.getAllParkingLots().subscribe({
      next: (response: any) => {
        this.parkingLots = response.map((parkingLot: any) => ({
          ...parkingLot
        }));
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  loggedIn() {
    return sessionStorage.getItem("email") != null;
  }
}
