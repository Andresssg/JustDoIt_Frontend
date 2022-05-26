import { Component, OnInit } from '@angular/core';
import { ProyectoServicioService } from 'src/app/proyecto-servicio.service';

@Component({
  selector: 'app-buscar-proyecto',
  templateUrl: './buscar-proyecto.component.html',
  styleUrls: ['./buscar-proyecto.component.css'],
})
export class BuscarProyectoComponent implements OnInit {
  cedulaEmprendedor: number;
  proyectos: any[];
  sinProyectos: boolean = true;

  constructor(private proyectoServicios: ProyectoServicioService) {}

  ngOnInit(): void {}

  buscarProyectos() {
    this.proyectoServicios
      .buscarProyectos(this.cedulaEmprendedor)
      .subscribe((response) => {
        let aux = JSON.parse(JSON.stringify(response));
        if (Array.isArray(aux)) {
          this.sinProyectos = false;
          this.proyectos = aux;
        } else {
          this.sinProyectos = true;
        }
      });
  }
}
