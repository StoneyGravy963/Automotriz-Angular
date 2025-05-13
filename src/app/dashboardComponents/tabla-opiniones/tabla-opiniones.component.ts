import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-opiniones',
  imports: [CommonModule,FormsModule],
  templateUrl: './tabla-opiniones.component.html',
  styleUrl: './tabla-opiniones.component.css'
})
export class TablaOpinionesComponent {
   @Input() opiniones: any[] = [];

  @Output() guardar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  guardarOpinion(index: number) {
    this.guardar.emit(index);
  }

  eliminarOpinion(index: number) {
    this.eliminar.emit(index);
  } 
}
