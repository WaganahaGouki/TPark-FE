import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Login} from "../models/login";
import {Role} from "../models/role";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public login(login: Login): Observable<Role>{
    return this.http.get<Role>(`${this.apiServerUrl}/user/role/${login.email}`)
      .pipe(map(role => {
        sessionStorage.setItem("role", role.name)
        return role;
      }))
  }
}
