import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://apinotas-dev-qpha.3.us-1.fl0.io';

  constructor(private http: HttpClient) {}

  createDato(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/datos`, data);
  }

  getDatos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/datos`);
  }

  updateTarea(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/datos/${id}`, data);
  }

  deleteDato(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/datos/${id}`);
  }

  getDato(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/datos/${id}`);
  }

  
  getMaterias(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/materias`);
  }
  
}
