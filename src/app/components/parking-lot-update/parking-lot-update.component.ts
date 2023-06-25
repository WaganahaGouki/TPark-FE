import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingLotsService} from "../../services/parking-lots.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-parking-lot-update',
  templateUrl: './parking-lot-update.component.html',
  styleUrls: ['./parking-lot-update.component.css']
})
export class ParkingLotUpdateComponent implements OnInit {
  updateParkingLotForm!: FormGroup

  constructor(private parkingLotsService: ParkingLotsService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm() {
    this.updateParkingLotForm = this.formBuilder.group({
      name: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      carSlots: ['', Validators.required],
      busSlots: ['', Validators.required],
      handicapSlots: ['', Validators.required],
      zone: ['', Validators.required],
      pricePerHour: ['', Validators.required]
    });
  }

  updateParkingLot() {
    if(this.updateParkingLotForm.valid) {
      const parkingLot = this.updateParkingLotForm.value;
      this.parkingLotsService.updateParkingLot(parkingLot).subscribe({
        next: (response) => {
          console.log('Parking lot successfully updated!');
          this.snackBar.open('Parking lot successfully updated!', 'Close', {duration: 3000});
        },
        error: (error) => {
          console.error('Parking lot did not update!', error);
          this.snackBar.open('Parking lot did not update!', 'Close', {duration: 3000});
        }
      });
    }
  }

  checkRole() {
    return sessionStorage.getItem("role") == "USER"
  }
}
