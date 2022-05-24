import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoServicioService } from 'src/app/proyecto-servicio.service';

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.css'],
})
export class CambiarEstadoComponent implements OnInit {
  idProyecto: string;
  idEmprendedor: string;
  estadoProyecto: string;

  constructor(
    private router: Router,
    private proyectoService: ProyectoServicioService
  ) {}

  ngOnInit(): void {}

  cambiarEstado() {
    this.proyectoService.cambiarEstado(
      this.idProyecto,
      this.idEmprendedor,
      this.estadoProyecto
    );
  }
}
