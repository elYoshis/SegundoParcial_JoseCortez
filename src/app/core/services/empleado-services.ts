import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServices {
  private base = 'http://localhost:8000/api/empleados';

  constructor(private http:HttpClient) { }

  listaEmpleados():Observable<any[]>{
  return this.http.get<any[]>(this.base);
}
}

