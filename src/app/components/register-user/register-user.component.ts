import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{
  registerForm!: FormGroup;
  loginForm!: FormGroup;

  constructor(private router: Router,
              private registerService: RegisterService,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  registerUser() {
    if(this.registerForm.valid) {
      const user = this.registerForm.value;
      this.registerService.register(user).subscribe({
        next: (response) => {
          console.log('User successfully registered!');
          this.snackBar.open('User successfully registered!', 'Close', {duration: 3000});
        },
        error: (error) => {
          console.error('User did not register!', error);
          this.snackBar.open('User did not register!', 'Close', {duration: 3000});
        }
      });
    }
  }

  loginUser() {
    if(this.loginForm.valid) {
      const user = this.loginForm.value;
      this.loginService.login(user).subscribe({
        next: (response) => {
          if(response.name == "USER") {
            this.router.navigateByUrl("/map")
          } else {
            this.router.navigateByUrl("/addParkingLot")
          }
          console.log('User successfully logged in!');
          this.snackBar.open('User successfully logged in!', 'Close', {duration: 3000});
        },
        error: (error) => {
          console.error('Wrong credentials!', error);
          this.snackBar.open('Wrong credentials', 'Close', {duration: 3000});
        }
      });
    }
  }
}
