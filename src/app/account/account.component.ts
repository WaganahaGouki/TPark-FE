import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UpdateService} from "../services/update.service";

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  updateForm!: FormGroup;

  constructor(private updateService: UpdateService,
              private formBuilder: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.updateForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  updateUser() {
    if(this.updateForm.valid) {
      const user = this.updateForm.value;
      this.updateService.update(user).subscribe({
        next: (response) => {
          console.log('User successfully updated!');
          this.snackBar.open('User successfully updated!', 'Close', {duration: 3000});
        },
        error: (error) => {
          console.error('User did not update!', error);
          this.snackBar.open('User did not update!', 'Close', {duration: 3000});
        }
      });
    }
  }

  checkRole() {
    return sessionStorage.getItem("role") == "USER";
  }
}
