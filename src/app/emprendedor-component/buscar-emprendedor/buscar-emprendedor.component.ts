import { Component, OnInit } from '@angular/core';
import { EmprendedorServicioService } from 'src/app/emprendedor-servicio.service';

@Component({
  selector: 'app-buscar-emprendedor',
  templateUrl: './buscar-emprendedor.component.html',
  styleUrls: ['./buscar-emprendedor.component.css'],
})
export class BuscarEmprendedorComponent implements OnInit {
  emprendedores: any[];

  constructor(private emprendedorServicio: EmprendedorServicioService) {}

  ngOnInit(): void {
    this.getEmprendedores();
  }

  getEmprendedores() {
    this.emprendedorServicio.getEmprendedores().subscribe(response=>{
      this.emprendedores = JSON.parse(JSON.stringify(response));
      console.log(this.emprendedores)
    })
  }
}
