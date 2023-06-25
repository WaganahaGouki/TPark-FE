import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Register} from "../models/register";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private readonly apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public update(register: Register): Observable<Register> {
    return this.http.put<Register>(`${this.apiServerUrl}/user/update/${sessionStorage.getItem("email")}/${register.username}/${register.email}/${register.password}`, register);
  }
}
