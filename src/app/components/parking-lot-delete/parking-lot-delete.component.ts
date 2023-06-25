import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParkingLotsService} from "../../services/parking-lots.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-parking-lot-delete',
  templateUrl: './parking-lot-delete.component.html',
  styleUrls: ['./parking-lot-delete.component.css']
})
export class ParkingLotDeleteComponent implements OnInit {
  deleteParkingLotForm!: FormGroup

  constructor(private parkingLotsService: ParkingLotsService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm() {
    this.deleteParkingLotForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  deleteParkingLot() {
    if(this.deleteParkingLotForm.valid) {
      const parkingLot = this.deleteParkingLotForm.value;
      this.parkingLotsService.deleteParkingLot(parkingLot).subscribe({
        next: (response) => {
          console.log('Parking lot successfully deleted!');
          this.snackBar.open('Parking lot successfully deleted!', 'Close', {duration: 3000});
        },
        error: (error) => {
          console.error('Parking lot did not deleted!', error);
          this.snackBar.open('Parking lot did not deleted!', 'Close', {duration: 3000});
        }
      });
    }
  }

  checkRole() {
    return sessionStorage.getItem("role") == "USER"
  }
}
