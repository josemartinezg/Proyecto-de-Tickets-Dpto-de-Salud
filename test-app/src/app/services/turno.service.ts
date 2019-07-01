import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Turno } from '../models/Turno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  url:string = 'http://localhost:3000/api/turnos';
  limit = '?_limit=5';
  constructor(private http:HttpClient) { }

  getTurnos():Observable<Turno[]>{
    return this.http.get<Turno[]>(`${this.url}${this.limit}`);
  }
}