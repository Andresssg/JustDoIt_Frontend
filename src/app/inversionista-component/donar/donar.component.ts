import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InversionistaServicioService } from 'src/app/inversionista-servicio.service';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css'],
})
export class DonarComponent implements OnInit {
  idProyecto: string;
  idInversionista: string;
  valor: number;

  constructor(
    private router: Router,
    private inversionistaServicio: InversionistaServicioService
  ) {}

  ngOnInit(): void {}

  donar() {
    this.inversionistaServicio.donar(this.idProyecto,this.idInversionista,this.valor)
  }
}
