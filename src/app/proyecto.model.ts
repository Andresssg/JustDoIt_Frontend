export class Proyecto {
  titulo:string;
  descripcion: string;
  cedulaEmprendedor:number;
  valorObjetivo: number;
  fechaFinal: string;
  tipoDeProyecto: string;

  constructor(titulo:string,descripcion:string,cedula:number,valorObjetivo:number,fechaFinal:string,tipoProyecto:string){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.cedulaEmprendedor = cedula;
    this.valorObjetivo = valorObjetivo;
    this.fechaFinal = fechaFinal;
    this.tipoDeProyecto = tipoProyecto;
  }
}
