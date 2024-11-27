import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetalleLibrosComponent } from "./detalle-libros/detalle-libros.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetalleLibrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalogoDragonBallMsM';
}
