import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Diagnosis} from "../models/diagnosis.model";

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(private http: HttpClient) {
  }

  getDiagnoses(): Observable<Diagnosis[]> {
    return this.http.get<Diagnosis[]>('/api/diagnoses');
  }

  getById(id: number): Observable<Diagnosis> {
    return this.http.get<Diagnosis>(`/api/diagnoses/${id}`);
  }

  create(diagnosis: Diagnosis): Observable<Diagnosis> {
    return this.http.post<Diagnosis>('/api/diagnoses', diagnosis);
  }

  update(id: number, diagnosis: Diagnosis): Observable<Diagnosis> {
    return this.http.put<Diagnosis>(`/api/diagnoses/${id}`, diagnosis);
  }

  delete(id: number): void {
    this.http.delete<void>(`/api/diagnoses/${id}`);
  }
}
