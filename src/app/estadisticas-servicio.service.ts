import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadisticasServicioService {
  urlBase: string = 'http://localhost:8080/estadisticas/';
  constructor(private http: HttpClient) {}

  getValorFinanciado():Observable<any> {
   return this.http
      .get(this.urlBase + 'valorFinanciadoPromedio')
      
  }

  getProyectosPublicados(): Observable<any> {
    return this.http.get(this.urlBase + 'proyectosPublicados');
  }
}
