import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InversionistaServicioService } from '../inversionista-servicio.service';
import { Inversionista } from '../inversionista.model';

@Component({
  selector: 'app-inversionista-component',
  templateUrl: './inversionista-component.component.html',
  styleUrls: ['./inversionista-component.component.css'],
})
export class InversionistaComponentComponent implements OnInit {
  nombre: string;
  correoElectronico: string;
  cedula: number;
  tipoDeProyecto: string;

  constructor(private router:Router,private inversionistaService:InversionistaServicioService) {}

  ngOnInit(): void {}

  agregarInversionista(){
    let inversionista:Inversionista = new Inversionista(this.nombre,this.cedula,this.correoElectronico,this.tipoDeProyecto);
    this.inversionistaService.agregarInversionista(inversionista);
    this.router.navigate(['/inversionista/buscar'])
  }
}
