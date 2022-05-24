import { Component, OnInit } from '@angular/core';
import { EmprendedorServicioService } from 'src/app/emprendedor-servicio.service';
import { Emprendedor } from 'src/app/emprendedor.model';

@Component({
  selector: 'app-actualizar-emprendedor',
  templateUrl: './actualizar-emprendedor.component.html',
  styleUrls: ['./actualizar-emprendedor.component.css']
})
export class ActualizarEmprendedorComponent implements OnInit {

  nombre:string;
  cedula:number;
  correo:string;

  constructor(private emprendedorService:EmprendedorServicioService) { }

  ngOnInit(): void {
  }

  actualizarEmprendedor(){
    let emprendedor:Emprendedor = new Emprendedor(this.nombre,this.correo,this.cedula);
    this.emprendedorService.actualizarEmprendedor(emprendedor);
  }
}
