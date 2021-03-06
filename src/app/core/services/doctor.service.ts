import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Doctor} from "../models/doctor.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }

  getExportFile(): Observable<any> {
    return this.http.get('/api/doctors/export', {responseType: 'blob'});
  }

  getDoctorPatientsForPeriod(doctorId: number, dateStart, dateEnd): Observable<any> {
    return this.http.get(`/api/doctors/${doctorId}/patients/${dateStart}/${dateEnd}/export`, {responseType: 'blob'});
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>('/api/doctors');
  }

  getById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`/api/doctors/${id}`);
  }

  create(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>('/api/doctors', doctor);
  }

  update(id: number, doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`/api/doctors/${id}`, doctor);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/doctors/${id}`);
  }
}
