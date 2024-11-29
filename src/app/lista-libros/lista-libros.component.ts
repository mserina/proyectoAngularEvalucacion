import { Component } from '@angular/core';
import { LibrosServiciosService } from '../servicios/libros-servicios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent{

  items: any[] = []; // Array para almacenar los datos recibidos del servicio
  titulo: string = 'Todos'; // Título dinámico por defecto
  mostrarLista: boolean = false; // Controla si se muestra o no la lista

  constructor(private servicioLibro: LibrosServiciosService) {} // Inyección del servicio
  

  cargarDatos(saga: string): void {
    
    this.cambiarTitulo(saga);

    // Llamamos al servicio para obtener los datos al inicializar el componente
    this.servicioLibro.obtenerLibrosPorSaga(saga).subscribe({
      next: (data) => {
        this.items = data; // Cuando se reciben datos
        this.mostrarLista = true; // Mostramos la lista
      },
      error: (error) => {
        console.error('Error al obtener datos:', error); // Si ocurre un error
      },
      complete: () => {
        console.log('La llamada al servicio ha terminado'); // Cuando el observable se completa
      }
    });
  }


  // Método para cambiar el título según la saga seleccionada
  cambiarTitulo(nuevoTitulo: string): void {
    this.titulo = nuevoTitulo;
  }
}