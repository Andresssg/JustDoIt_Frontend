import { Component, OnInit } from '@angular/core';
import { InversionistaServicioService } from 'src/app/inversionista-servicio.service';

@Component({
  selector: 'app-buscar-inversionista',
  templateUrl: './buscar-inversionista.component.html',
  styleUrls: ['./buscar-inversionista.component.css'],
})
export class BuscarInversionistaComponent implements OnInit {
  inversionistas: any[];

  constructor(private inversionistaServicio: InversionistaServicioService) {}

  ngOnInit(): void {
    this.getInversionistas();
  }

  getInversionistas() {
    this.inversionistaServicio.getInversionistas().subscribe((response) => {
      this.inversionistas = JSON.parse(JSON.stringify(response));
      console.log(this.inversionistas);
    });
  }
}
