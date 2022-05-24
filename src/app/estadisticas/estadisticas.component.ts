import { Component, OnInit } from '@angular/core';
import { EstadisticasServicioService } from '../estadisticas-servicio.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  valorFinanciadoPromedio: number;
  proyectosPublicados: any[];

  constructor(private estadisticasServicio: EstadisticasServicioService) {}

  ngOnInit(): void {
    this.getValorFinanciado();
    this.getProyectosPublicados();
  }

  getValorFinanciado() {
    this.estadisticasServicio.getValorFinanciado().subscribe((response) => {
      this.valorFinanciadoPromedio = JSON.parse(
        JSON.stringify(response)
      ).Valor_Financiado_Promedio;
    });
  }

  getProyectosPublicados() {
    this.estadisticasServicio.getProyectosPublicados().subscribe((response) => {
      this.proyectosPublicados = JSON.parse(JSON.stringify(response));
    });
  }
}
