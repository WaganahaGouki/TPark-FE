import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public login(login: Login): Observable<Login>{
    return this.http.get<Login>(`${this.apiServerUrl}/login/${login.email}/${login.password}`)
      .pipe(map(login => {
        sessionStorage.setItem("email", JSON.stringify(login.email));
        return login;
      }))
  }
}
