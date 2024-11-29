import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'  // Esto hace que el servicio esté disponible en toda la aplicación
})
export class LibrosServiciosService {

  private apiUrl = 'http://localhost:3000/libros'; // Cambia 'items' por tu recurso

  constructor(private http: HttpClient) {}

  
  
  // Método para obtener libros filtrados por saga
  obtenerLibrosPorSaga(saga: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((libros) => 
        saga === 'Todos' ? libros : libros.filter((libro) => libro.saga === saga) // Si la saga es 'Todos', devuelve todos los libros sino devuelve los libros en base a la Saga elegida
      )
    );
  }
}
