import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoServicioService } from '../proyecto-servicio.service';
import { Proyecto } from '../proyecto.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent implements OnInit {
  titulo: string;
  descripcion: string;
  cedulaEmprendedor: number;
  valorObjetivo: number;
  fechaFinal: string;
  tipoDeProyecto: string;

  constructor(
    private router: Router,
    private proyectoService: ProyectoServicioService
  ) {}

  ngOnInit(): void {}

  crearProyecto() {
    let proyecto: Proyecto = new Proyecto(
      this.titulo,
      this.descripcion,
      this.cedulaEmprendedor,
      this.valorObjetivo,
      this.fechaFinal,
      this.tipoDeProyecto
    );
    this.proyectoService.crearProyecto(proyecto);
    this.router.navigate(['/proyectos/buscar'])
  }
}
