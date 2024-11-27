import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibrosServiciosService {

  private apiUrl = 'http://localhost:4000/libros';


  constructor(private http: HttpClient) {}

  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
}
