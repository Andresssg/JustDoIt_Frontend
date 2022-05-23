import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroresComponent } from './errores/errores.component';

const appRoutes: Routes =[
  { path: '', component: AppComponent},
  { path: '**', component: ErroresComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ErroresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
