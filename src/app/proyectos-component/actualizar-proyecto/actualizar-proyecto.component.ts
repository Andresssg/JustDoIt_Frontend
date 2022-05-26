import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoServicioService } from 'src/app/proyecto-servicio.service';

@Component({
  selector: 'app-actualizar-proyecto',
  templateUrl: './actualizar-proyecto.component.html',
  styleUrls: ['./actualizar-proyecto.component.css']
})
export class ActualizarProyectoComponent implements OnInit {

  id: string;
  titulo: string;
  descripcion: string;
  tipoDeProyecto: string;

  constructor(private router:Router,private proyectoService: ProyectoServicioService) { }

  ngOnInit(): void {
  }

  actualizarProyecto(){
    this.proyectoService.actualizarProyecto(this.id,this.titulo,this.descripcion,this.tipoDeProyecto)
    this.router.navigate(['/proyectos/buscar'])
  }
}
