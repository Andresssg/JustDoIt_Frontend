import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InversionistaServicioService } from 'src/app/inversionista-servicio.service';
import { Inversionista } from 'src/app/inversionista.model';

@Component({
  selector: 'app-actualizar-inversionista',
  templateUrl: './actualizar-inversionista.component.html',
  styleUrls: ['./actualizar-inversionista.component.css'],
})
export class ActualizarInversionistaComponent implements OnInit {
  nombre: string;
  correoElectronico: string;
  cedula: number;
  tipoDeProyecto: string;

  constructor(private router:Router,private inversionistaService:InversionistaServicioService) {}

  ngOnInit(): void {}

  actualizarInversionista(){
    let inversionista:Inversionista = new Inversionista(this.nombre,this.cedula,this.correoElectronico,this.tipoDeProyecto);
    this.inversionistaService.actualizarInversionista(inversionista);
    this.router.navigate(['/inversionista/buscar']);
  }
}
