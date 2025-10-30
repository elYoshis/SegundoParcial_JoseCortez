import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Empleadoservice {
  private base = 'http://127.0.0.1:8000/api/empleados';

  constructor(private http:HttpClient){
    /*this.listaEmpleados();*/
  }
  agregarRegistro(data: any): Observable<any> {
    return this.http.post(this.base, data);
  }
  listaEmpleados():Observable<any[]>{
    return this.http.get<any[]>(this.base);
  }
}

