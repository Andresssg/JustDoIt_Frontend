import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ErroresComponent } from './errores/errores.component';
import { EmprendedorComponentComponent } from './emprendedor-component/emprendedor-component.component';
import { InversionistaComponentComponent } from './inversionista-component/inversionista-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const appRoutes:Routes=[
  { path: '', component: HomeComponentComponent},
  { path: 'emprendedor', component: EmprendedorComponentComponent},
  { path: 'inversionista', component:InversionistaComponentComponent},
  { path: 'proyectos', component:ProyectosComponentComponent},
  { path: '**', component: ErroresComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ErroresComponent,
    EmprendedorComponentComponent,
    InversionistaComponentComponent,
    ProyectosComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
