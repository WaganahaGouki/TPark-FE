import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  ngOnInit(): void { }

  loggedIn() {
    return sessionStorage.getItem("role") != null;
  }

  checkRole() {
    return sessionStorage.getItem("role") == "USER";
  }

  logout() {
    sessionStorage.clear();
  }
}
