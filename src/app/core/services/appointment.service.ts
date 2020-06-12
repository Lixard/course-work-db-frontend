import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment, ComplicatedAppointment} from "../models/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {
  }

  getExportFile(): Observable<any> {
    return this.http.get('/api/appointments/export', {responseType: 'blob'});
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('/api/appointments');
  }

  getComplicatedAppointments(): Observable<ComplicatedAppointment[]> {
    return this.http.get<ComplicatedAppointment[]>('/api/appointments/complicated')
  }

  getPatientAppointments(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`/api/patients/${patientId}/appointments`);
  }

  getPatientComplicatedAppointments(patientId: number): Observable<ComplicatedAppointment[]> {
    return this.http.get<ComplicatedAppointment[]>(`/api/patients/${patientId}/appointments/complicated`);
  }

  getDoctorComplicatedAppointments(doctorId: number): Observable<ComplicatedAppointment[]> {
    return this.http.get<ComplicatedAppointment[]>(`api/doctors/${doctorId}/appointments/complicated`);
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

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/appointments/${id}`);
  }
}
