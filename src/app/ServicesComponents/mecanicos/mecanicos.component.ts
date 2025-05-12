import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mecanicos',
  imports: [
    MatCardModule
  ],
  templateUrl: './mecanicos.component.html',
  styleUrl: './mecanicos.component.css'
})
export class MecanicosComponent {

mecanicos = [
  {
    nombre: 'Carlos Martínez',
    especialidad: 'Especialista en frenos y suspensión',
    foto: '../autohero1.png'
  },
  {
    nombre: 'Lucía Herrera',
    especialidad: 'Diagnóstico computarizado y electrónica',
    foto: 'assets/mecanicos/lucia.jpg'
  },
  {
    nombre: 'Miguel Torres',
    especialidad: 'Cambio de aceite y afinaciones',
    foto: 'assets/mecanicos/miguel.jpg'
  }
];


}
