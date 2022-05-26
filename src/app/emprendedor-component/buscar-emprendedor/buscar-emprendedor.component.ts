import { Component, OnInit } from '@angular/core';
import { EmprendedorServicioService } from 'src/app/emprendedor-servicio.service';
import { Emprendedor } from 'src/app/emprendedor.model';

@Component({
  selector: 'app-buscar-emprendedor',
  templateUrl: './buscar-emprendedor.component.html',
  styleUrls: ['./buscar-emprendedor.component.css'],
})
export class BuscarEmprendedorComponent implements OnInit {
  cedulaEmprendedor: number;
  emprendedores: any[];
  emprendedorEncontrado: boolean = false;

  constructor(private emprendedorServicio: EmprendedorServicioService) {}

  ngOnInit(): void {}

  getEmprendedores() {
    this.emprendedorServicio.getEmprendedores().subscribe((response) => {
      this.emprendedores = JSON.parse(JSON.stringify(response));
      this.emprendedorEncontrado=true;
    });
  }

  buscarEmprendedor() {
    this.emprendedorServicio
      .buscarEmprendedor(this.cedulaEmprendedor)
      .subscribe((response) => {
        let aux = JSON.parse(JSON.stringify(response));
        if (aux.informacion===undefined) {
          this.emprendedorEncontrado = true;
          this.emprendedores = []
          this.emprendedores.push(aux)
        } else {
          this.emprendedorEncontrado = false;
        }
      });
  }
}
