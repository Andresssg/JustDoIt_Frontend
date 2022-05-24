import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ErroresComponent } from './errores/errores.component';
import { EmprendedorComponentComponent } from './emprendedor-component/emprendedor-component.component';
import { InversionistaComponentComponent } from './inversionista-component/inversionista-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ActualizarEmprendedorComponent } from './emprendedor-component/actualizar-emprendedor/actualizar-emprendedor.component';
import { BuscarEmprendedorComponent } from './emprendedor-component/buscar-emprendedor/buscar-emprendedor.component';
import { ActualizarInversionistaComponent } from './inversionista-component/actualizar-inversionista/actualizar-inversionista.component';
import { BuscarInversionistaComponent } from './inversionista-component/buscar-inversionista/buscar-inversionista.component';
import { DonarComponent } from './inversionista-component/donar/donar.component';
import { ActualizarProyectoComponent } from './proyectos-component/actualizar-proyecto/actualizar-proyecto.component';
import { BuscarProyectoComponent } from './proyectos-component/buscar-proyecto/buscar-proyecto.component';
import { CambiarEstadoComponent } from './proyectos-component/cambiar-estado/cambiar-estado.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'emprendedor', component: EmprendedorComponentComponent },
  { path: 'emprendedor/actualizar', component: ActualizarEmprendedorComponent },
  { path: 'emprendedor/buscar', component: BuscarEmprendedorComponent },
  { path: 'inversionista', component: InversionistaComponentComponent },
  {
    path: 'inversionista/actualizar',
    component: ActualizarInversionistaComponent,
  },
  { path: 'inversionista/donar', component: DonarComponent },
  { path: 'inversionista/buscar', component: BuscarInversionistaComponent },
  { path: 'proyectos', component: ProyectosComponentComponent },
  { path: 'proyectos/actualizar', component: ActualizarProyectoComponent },
  { path: 'proyectos/estado', component: CambiarEstadoComponent },
  { path: 'proyectos/buscar', component: BuscarProyectoComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: '**', component: ErroresComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ErroresComponent,
    EmprendedorComponentComponent,
    InversionistaComponentComponent,
    ProyectosComponentComponent,
    ActualizarEmprendedorComponent,
    BuscarEmprendedorComponent,
    ActualizarInversionistaComponent,
    BuscarInversionistaComponent,
    DonarComponent,
    ActualizarProyectoComponent,
    BuscarProyectoComponent,
    CambiarEstadoComponent,
    EstadisticasComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
