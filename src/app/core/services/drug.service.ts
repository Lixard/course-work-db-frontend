import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drug} from "../models/drug.model";

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private http: HttpClient) {
  }

  getDrugs(): Observable<Drug[]> {
    return this.http.get<Drug[]>('/api/drugs');
  }

  findById(id: number): Observable<Drug> {
    return this.http.get<Drug>(`/api/drugs/${id}`);
  }

  create(drug: Drug): Observable<Drug> {
    return this.http.post<Drug>('/api/drugs', drug);
  }

  update(id: number, drug: Drug): Observable<Drug> {
    return this.http.put<Drug>(`/api/drugs/${id}`, drug);
  }

  delete(id: number): void {
    this.http.delete<void>(`/api/drugs/${id}`);
  }
}
