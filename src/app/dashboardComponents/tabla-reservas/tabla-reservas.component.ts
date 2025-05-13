import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-reservas',
  imports: [CommonModule,FormsModule],
  templateUrl: './tabla-reservas.component.html',
  styleUrl: './tabla-reservas.component.css'
})
export class TablaReservasComponent {
  @Input() reservas: any[] = [];
  @Output() guardar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  guardarReserva(index: number) {
    this.guardar.emit(index);
  }

  eliminarReserva(index: number) {
    this.eliminar.emit(index);
  }
}
