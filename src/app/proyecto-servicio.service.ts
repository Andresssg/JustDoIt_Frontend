import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectoServicioService {
  urlBase: string = 'http://localhost:8080/proyecto/';
  constructor(private http: HttpClient) {}

  crearProyecto(nuevoProyecto: Proyecto) {
    this.http
      .post(this.urlBase + 'add', nuevoProyecto)
      .subscribe((response) => alert(JSON.stringify(response)));
  }

  actualizarProyecto(
    id: string,
    titulo: string,
    descripcion: string,
    tipoDeProyecto: string
  ) {
    let nuevoProyecto: object = {
      id: id,
      titulo: titulo,
      descripcion: descripcion,
      tipoDeProyecto: tipoDeProyecto,
    };
    this.http
      .post(this.urlBase + 'actualizar', nuevoProyecto)
      .subscribe((response) => alert(JSON.stringify(response)));
  }

  cambiarEstado(idProyecto: string, idEmprendedor: string, estado: string) {
    let estadoProyecto: Object = {
      idProyecto: idProyecto,
      idEmprendedor: idEmprendedor,
      estado: estado,
    };
    this.http
      .post(this.urlBase + 'estado', estadoProyecto)
      .subscribe((response) => alert(JSON.stringify(response)));
  }

}
