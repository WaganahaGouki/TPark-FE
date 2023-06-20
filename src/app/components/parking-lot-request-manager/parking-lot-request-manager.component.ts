import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RequestParkingLotService} from "../../services/request-parking-lot.service";
import {ParkingLotsService} from "../../services/parking-lots.service";

@Component({
  selector: 'parking-lot-request-manager',
  templateUrl: './parking-lot-request-manager.component.html',
  styleUrls: ['./parking-lot-request-manager.component.css']
})
export class ParkingLotRequestManagerComponent implements OnInit {
  addParkingLotForm!: FormGroup

  parkingLotsRequests!: any[]

  constructor(private requestParkingLotService: RequestParkingLotService,
              private parkingLotsService: ParkingLotsService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initializeForm()
    this.getAllParkingLotRequests()
  }

  private initializeForm() {
    this.addParkingLotForm = this.formBuilder.group({
      name: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      car: ['', Validators.required],
      bus: ['', Validators.required],
      handicap: ['', Validators.required],
      zone: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addParkingLot() {
    if(this.addParkingLotForm.valid) {
      const parkingLot = this.addParkingLotForm.value;
      this.parkingLotsService.addParkingLot(parkingLot).subscribe({
        next: (response) => {
          console.log('Parking lot successfully registered!');
          this.snackBar.open('Parking lot successfully registered!', 'Close', {duration: 3000});
        },
        error: (error) => {
          console.error('Parking lot did not register!', error);
          this.snackBar.open('Parking lot did not register!', 'Close', {duration: 3000});
        }
      });
    }
  }

  getAllParkingLotRequests(): void {
    this.requestParkingLotService.getAllParkingLotRequests().subscribe({
      next: (response: any) => {
        this.parkingLotsRequests = response.map((parkingLotRequest: any) => ({
          ...parkingLotRequest
        }));
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  checkRole() {
    return sessionStorage.getItem("role") == "USER"
  }
}
