import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RequestParkingLotService} from "../services/request-parking-lot.service";

@Component({
  selector: 'request-parking-lot',
  templateUrl: './request-parking-lot.component.html',
  styleUrls: ['./request-parking-lot.component.css']
})
export class RequestParkingLotComponent implements OnInit {
  requestParkingLotForm!: FormGroup;

  constructor(private requestParkingLotService: RequestParkingLotService,
              private formBuilder: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.requestParkingLotForm = this.formBuilder.group({
      name: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    })
  }

  checkRole() {
    return sessionStorage.getItem("role") == "USER";
  }

  requestParkingLot() {
    if(this.requestParkingLotForm.valid) {
      const request = this.requestParkingLotForm.value;
      this.requestParkingLotService.requestParkingLot(request).subscribe({
        next: (response) => {
          console.log('Request successfully registered!');
          this.snackBar.open('Request successfully registered!', 'Close', {duration: 3000});
        },
        error: (error) => {
          console.error('Request did not register!', error);
          this.snackBar.open('Request did not register!', 'Close', {duration: 3000});
        }
      });
    }
  }
}
