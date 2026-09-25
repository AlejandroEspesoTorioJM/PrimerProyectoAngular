import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComicManagerComponent } from './comic-manager/comic-manager'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComicManagerComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// Aqui se llama a la clase
export class App {
  title = 'tienda-comics';
}
