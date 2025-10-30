import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Empleadoservice } from './core/services/empleadoservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SegundoParcial_angular');
  //declaramos variable para recibir a los datos del servicio bakcend
  empleados:any[]=[];
   nombre ='';
  apellido ='';
  email = '';
  salario = 0;
  //constructor para llamar el servicio
  constructor(private empleadoservice: Empleadoservice) {
    this.listarEmpleados();
  }
  //creamos un metodo lista para listar productos del servicio
  listarEmpleados():void{
    this.empleadoservice.listaEmpleados().subscribe({
      next:(data)=>{
        this.empleados=data;
        console.log(this.empleados);
      },
      error:(err)=>console.log('error',err)
    })
  }
  guardar() {
    const datos = { nombre: this.nombre, apellido: this.apellido, email: this.email, salario: this.salario };
    this.empleadoservice.agregarRegistro(datos).subscribe({
      next: () => {
        this.nombre = this.apellido = this.email = '';
        this.salario = 0;
        alert('Datos guardados correctamente ✅');
      },
      error: () => alert('Error al guardar ❌')
    });
  }
}

