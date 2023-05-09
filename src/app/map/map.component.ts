import { Component } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  public users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }
}
