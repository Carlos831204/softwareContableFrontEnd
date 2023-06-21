import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CuentaT } from './cuenta-t';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaTService {

  private baseURL = "http://localhost:8080/cuentaT";

  constructor(private httpClient : HttpClient) { }

  obtenerListadoCuentasT():Observable<CuentaT[]>{
    return this.httpClient.get<CuentaT[]>(`${this.baseURL}`);
  }

  crearCuentaT(cuentaT:CuentaT):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cuentaT);
  }

  actualizarCuentaT(id:number, cuentaT:CuentaT):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cuentaT);
  }

  obtenerCuentaTPorId(id:number):Observable<CuentaT>{
    return this.httpClient.get<CuentaT>(`${this.baseURL}/${id}`);
  }

  eliminarCuentaT(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
