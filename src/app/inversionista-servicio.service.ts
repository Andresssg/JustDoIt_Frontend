import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inversionista } from './inversionista.model';

@Injectable({
  providedIn: 'root'
})
export class InversionistaServicioService {

  urlBase: string = 'http://localhost:8080/donante/';
  constructor(private http: HttpClient) {}

  agregarInversionista(nuevoInversionista: Inversionista) {
    this.http
      .post(this.urlBase + 'add', nuevoInversionista)
      .subscribe((response) =>
        alert('Se ha guardado el Inversionista: ' + JSON.stringify(response))
      );
  }

  actualizarInversionista(nuevoInversionista: Inversionista) {
    this.http
      .post(this.urlBase + 'actualizar', nuevoInversionista)
      .subscribe((response) =>
        alert(JSON.stringify(response))
      );
  }

  donar(idProyecto: string, idInversionista: string, valor: number){
    let donacion: Object = {
      idProyecto: idProyecto,
      idDonante: idInversionista,
      valor: valor,
    };
    this.http
      .post(this.urlBase + 'donacion', donacion)
      .subscribe((response) => alert(JSON.stringify(response)));
  }

  getInversionistas(): Observable<any> {
    return this.http.get(this.urlBase + 'getDonantes');
  }

  buscarInversionista(cedulaInversionista: number): Observable<any> {
    return this.http.get(this.urlBase + cedulaInversionista);
  }
}
