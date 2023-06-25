import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ParkingLot} from "../models/parkingLot";

@Injectable({
  providedIn: 'root'
})
export class ParkingLotsService {
  private readonly apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllParkingLots(): Observable<ParkingLot>{
    return this.http.get<ParkingLot>(`${this.apiServerUrl}/parkingLot/all`)
  }

  public addParkingLot(parkingLot: ParkingLot): Observable<ParkingLot>{
    return this.http.post<ParkingLot>(`${this.apiServerUrl}/parkingLot/add`, parkingLot)
  }

  public updateParkingLot(parkingLot: ParkingLot): Observable<ParkingLot>{
    return this.http.put<ParkingLot>(`${this.apiServerUrl}/parkingLot/update/${parkingLot.name}/${parkingLot.zone}/${parkingLot.lat}/${parkingLot.lng}/${parkingLot.carSlots}/${parkingLot.busSlots}/${parkingLot.handicapSlots}/${parkingLot.pricePerHour}`, parkingLot)
  }
}
