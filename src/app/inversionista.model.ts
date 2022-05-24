export class Inversionista {
  nombre: string;
  correoElectronico: string;
  cedula: number;
  tipoDeProyecto: string;

  constructor(nombre: string, cedula: number, correo: string, tipo: string) {
    this.nombre = nombre;
    this.correoElectronico = correo;
    this.cedula = cedula;
    this.tipoDeProyecto = tipo;
  }
}
