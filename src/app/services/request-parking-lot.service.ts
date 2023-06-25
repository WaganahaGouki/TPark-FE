import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ParkingLotRequest} from "../models/parkingLotRequest";
import {ParkingLot} from "../models/parkingLot";

@Injectable({
  providedIn: 'root'
})
export class RequestParkingLotService {
  private readonly apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public requestParkingLot(parkingLotRequest: ParkingLotRequest): Observable<ParkingLotRequest> {
    return this.http.post<ParkingLotRequest>(`${this.apiServerUrl}/parkingLotRequest/add`, parkingLotRequest);
  }

  public getAllParkingLotRequests(): Observable<ParkingLotRequest> {
    return this.http.get<ParkingLotRequest>(`${this.apiServerUrl}/parkingLotRequest/all`)
  }

  public deleteParkingLotRequest(parkingLotRequest: ParkingLotRequest) {
    return this.http.delete(`${this.apiServerUrl}/parkingLotRequest/delete/${parkingLotRequest.name}`)
  }
}
