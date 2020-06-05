import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../models/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('/api/appointments');
  }

  getPatientAppointments(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`/api/patients/${patientId}/appointments`);
  }

  getById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`/api/appointments/${id}`)
  }

  create(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>('/api/appointments', appointment);
  }

  update(id: number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`/api/appointments/${id}`, appointment);
  }

  delete(id: number): void {
    this.http.delete<void>(`/api/appointments/${id}`);
  }
}
