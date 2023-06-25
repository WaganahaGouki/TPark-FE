import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RequestParkingLotService} from "../../services/request-parking-lot.service";

@Component({
  selector: 'app-parking-lot-request-delete',
  templateUrl: './parking-lot-request-delete.component.html',
  styleUrls: ['./parking-lot-request-delete.component.css']
})
export class ParkingLotRequestDeleteComponent implements OnInit {
  deleteParkingLotRequestForm!: FormGroup

  constructor(private parkingLotRequestService: RequestParkingLotService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm() {
    this.deleteParkingLotRequestForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  deleteParkingLotRequest() {
    if(this.deleteParkingLotRequestForm.valid) {
      const parkingLot = this.deleteParkingLotRequestForm.value;
      this.parkingLotRequestService.deleteParkingLotRequest(parkingLot).subscribe({
        next: (response) => {
          console.log('Parking lot request successfully deleted!');
          this.snackBar.open('Parking lot request successfully deleted!', 'Close', {duration: 3000});
        },
        error: (error) => {
          console.error('Parking lot request did not delete!', error);
          this.snackBar.open('Parking lot request did not delete!', 'Close', {duration: 3000});
        }
      });
    }
  }

  checkRole() {
    return sessionStorage.getItem("role") == "USER"
  }
}
