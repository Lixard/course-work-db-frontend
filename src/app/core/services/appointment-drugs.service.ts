import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Drug} from "../models/drug.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentDrugsService {

  constructor(private http: HttpClient) {
  }

  getAppointmentDrugs(appointmentId: number): Observable<Drug[]> {
    return this.http.get<Drug[]>(`/api/appointments/${appointmentId}/drugs`);
  }

  create(appointmentId: number, drugId: number): Observable<Drug> {
    return this.http.post<Drug>(`/api/appointments/${appointmentId}/drugs/${drugId}`, null);
  }

  delete(appointmentId: number, drugId: number): Observable<void> {
    return this.http.delete<void>(`/api/appointments/${appointmentId}/drugs/${drugId}`);
  }
}
