import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatalogoCuenta } from './catalogo-cuenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoCuentaService {

  //Listado de cuentas desde el backend
  private baseURL = "http://localhost:8080/catalogo/cuentas";

  constructor(private httpClient : HttpClient) { }

  obtenerListadoCatalgoCuentas():Observable<CatalogoCuenta[]>{
    return this.httpClient.get<CatalogoCuenta[]>(`${this.baseURL}`);
  }

  crearCuenta(cuenta:CatalogoCuenta):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cuenta);
  }

  actualizarCuenta(id:number, cuenta:CatalogoCuenta):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cuenta);
  }

  obtenerCuentaPorId(id:number):Observable<CatalogoCuenta>{
    return this.httpClient.get<CatalogoCuenta>(`${this.baseURL}/${id}`);
  }

  eliminarCuenta(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
