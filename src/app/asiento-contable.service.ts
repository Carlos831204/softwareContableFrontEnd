import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsientoContable } from './asiento-contable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsientoContableService {

  private baseURL = "http://localhost:8080/asientocontable";

  constructor(private httpClient : HttpClient) { }

  obtenerListadoAsientosContables():Observable<AsientoContable[]>{
    return this.httpClient.get<AsientoContable[]>(`${this.baseURL}`);
  }

  crearAsientoContable(asientoContable:AsientoContable):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, asientoContable);
  }

  actualizarAsientoContable(id:number, asientoContable:AsientoContable):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, asientoContable);
  }

  obtenerAsientoContablePorId(id:number):Observable<AsientoContable>{
    return this.httpClient.get<AsientoContable>(`${this.baseURL}/${id}`);
  }

  eliminarAsientoContable(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
