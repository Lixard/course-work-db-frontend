import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Diagnosis} from "../models/diagnosis.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentDiagnosesService {

  constructor(private http: HttpClient) {
  }

  getAppointmentDiagnoses(appointmentId: number): Observable<Diagnosis[]> {
    return this.http.get<Diagnosis[]>(`/api/appointments/${appointmentId}/diagnoses`);
  }

  create(appointmentId: number, diagnosisId: number): Observable<Diagnosis> {
    return this.http.post<Diagnosis>(`/api/appointments/${appointmentId}/diagnoses/${diagnosisId}`, null);
  }

  delete(appointmentId: number, diagnosisId: number): Observable<void> {
    return this.http.delete<void>(`/api/appointments/${appointmentId}/diagnoses/${diagnosisId}`);
  }
}
