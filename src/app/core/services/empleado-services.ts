import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServices {
  private base = 'http://localhost:8000/api/empleados';

  constructor(private http:HttpClient) { }
}
