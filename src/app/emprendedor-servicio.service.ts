import { Injectable } from '@angular/core';
import { Emprendedor } from './emprendedor.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmprendedorServicioService {
  emprendedores: Emprendedor[];

  urlBase: string = 'http://localhost:8080/emprendedor/';
  constructor(private http: HttpClient) {}

  agregarEmprendedor(nuevoEmprendedor: Emprendedor) {
    this.http
      .post(this.urlBase + 'add', nuevoEmprendedor)
      .subscribe((response) => {
        alert('Se ha guardado el emprendedor! --->' + JSON.stringify(response));
      });
  }

  actualizarEmprendedor(emprendedor: Emprendedor) {
    this.http
      .post(this.urlBase + 'actualizar', emprendedor)
      .subscribe((response) => alert(JSON.stringify(response)));
  }

  getEmprendedores(): Observable<any> {
    return this.http.get(this.urlBase + 'getEmprendedores');
  }

  buscarEmprendedor(cedulaEmprendedor: number): Observable<any> {
    return this.http.get(this.urlBase + cedulaEmprendedor);
  }
}
