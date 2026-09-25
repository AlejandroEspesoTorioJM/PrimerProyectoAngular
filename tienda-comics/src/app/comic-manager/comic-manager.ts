import { Component, signal } from '@angular/core';

interface Comic {
  id: number;
  titulo: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-comic-manager',
  imports: [],
  templateUrl: './comic-manager.html',
  styleUrl: './comic-manager.css'
})
export class ComicManagerComponent {
  // Signal para controlar el modo de vista
  mostrarModoCompacto = signal<boolean>(false);

  // Signal con el listado inicial de cómics
  comics = signal<Comic[]>([
    { id: 101, titulo: 'The Amazing Spider-Man #1', precio: 15.99, stock: 3 },
    { id: 102, titulo: 'Batman: The Dark Knight Returns', precio: 22.50, stock: 0 },
    { id: 103, titulo: 'Watchmen', precio: 18.00, stock: 5 }
  ]);

  // Alternar vista
  toggleVista(): void {
    this.mostrarModoCompacto.update(estadoActual => !estadoActual);
  }

  // Aumentar stock
  aumentarStock(idComic: number): void {
    this.comics.update(listaActual =>
      listaActual.map(item =>
        item.id === idComic ? { ...item, stock: item.stock + 1 } : item
      )
    );
  }

  // Vender cómic
  venderComic(idComic: number): void {
    this.comics.update(listaActual =>
      listaActual.map(item =>
        item.id === idComic && item.stock > 0 ? { ...item, stock: item.stock - 1 } : item
      )
    );
  }

  // Reto final: Vaciar almacén con .set()
  vaciarAlmacen(): void {
    this.comics.set([]);
  }
}