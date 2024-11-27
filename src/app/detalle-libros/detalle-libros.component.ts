import { Component, inject, OnInit } from '@angular/core';
import { LibrosServiciosService } from '../servicios/libros-servicios.service';


@Component({
  selector: 'app-detalle-libros',
  standalone: true,
  imports: [],
  templateUrl: './detalle-libros.component.html',
  styleUrl: './detalle-libros.component.css'
})
export class DetalleLibrosComponent implements OnInit{


  private servicioLibros = inject(LibrosServiciosService); 

  ngOnInit(): void {
    // Obtener todos los libros
    this.servicioLibros.getLibros().subscribe((libros) => {
      console.log(libros); // Aquí tendrás el array de libros
    });
  }
}

