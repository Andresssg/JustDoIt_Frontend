import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmprendedorServicioService } from '../emprendedor-servicio.service';
import { Emprendedor } from '../emprendedor.model';

@Component({
  selector: 'app-emprendedor-component',
  templateUrl: './emprendedor-component.component.html',
  styleUrls: ['./emprendedor-component.component.css']
})
export class EmprendedorComponentComponent implements OnInit {

  nombre:string;
  cedula:number;
  correo:string;


  constructor(private router:Router, private emprendedorService:EmprendedorServicioService) { }

  ngOnInit(): void {

  }

  agregarEmprendedor(){
    let emprendedor:Emprendedor = new Emprendedor(this.nombre,this.correo,this.cedula);
    this.emprendedorService.agregarEmprendedor(emprendedor);
    this.router.navigate(['/emprendedor/buscar'])
  }

}
