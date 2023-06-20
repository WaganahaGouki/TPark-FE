import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Register} from "../models/register";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public register(register: Register): Observable<Register> {
    return this.http.post<Register>(`${this.apiServerUrl}/register`, register);
  }
}
