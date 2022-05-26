import { Component, OnInit } from '@angular/core';
import { InversionistaServicioService } from 'src/app/inversionista-servicio.service';

@Component({
  selector: 'app-buscar-inversionista',
  templateUrl: './buscar-inversionista.component.html',
  styleUrls: ['./buscar-inversionista.component.css'],
})
export class BuscarInversionistaComponent implements OnInit {
  cedulaInversionista: number;
  inversionistas: any[];
  inversionistaEncontrado: boolean = false;

  constructor(private inversionistaServicio: InversionistaServicioService) {}

  ngOnInit(): void {}

  getInversionistas() {
    this.inversionistaServicio.getInversionistas().subscribe((response) => {
      this.inversionistas = JSON.parse(JSON.stringify(response));
      console.log(this.inversionistas);
      this.inversionistaEncontrado = true;
    });
  }

  buscarInversionista() {
    this.inversionistaServicio
      .buscarInversionista(this.cedulaInversionista)
      .subscribe((response) => {
        let aux = JSON.parse(JSON.stringify(response));
        if (aux.informacion === undefined) {
          this.inversionistaEncontrado = true;
          this.inversionistas = [];
          this.inversionistas.push(aux);
        } else {
          this.inversionistaEncontrado = false;
        }
      });
  }
}
