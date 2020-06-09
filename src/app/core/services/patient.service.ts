import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('/api/patients');
  }

  getById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`/api/patients/${id}`);
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>('/api/patients', patient);
  }

  update(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`/api/patients/${id}`, patient);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/patients/${id}`);
  }
}
