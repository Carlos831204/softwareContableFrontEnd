import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tercero } from './tercero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerceroService {

  private baseURL = "http://localhost:8080/terceros";

  constructor(private httpClient : HttpClient) { }

  obtenerListadoTerceros():Observable<Tercero[]>{
    return this.httpClient.get<Tercero[]>(`${this.baseURL}`);
  }

  crearTercero(tercero:Tercero):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, tercero);
  }

  actualizarTercero(id:number, tercero:Tercero):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, tercero);
  }

  obtenerTerceroPorId(id:number):Observable<Tercero>{
    return this.httpClient.get<Tercero>(`${this.baseURL}/${id}`);
  }

  eliminarTercero(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
