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
    nombre: 'Adal Yahir de Luna Nieves ID:335944',
    especialidad: 'Especialista en frenos y suspensión',
    foto: 'assets/img/yahir.jpg'
  },
  {
    nombre: 'Elías López Gutiérrez ID:210356',
    especialidad: 'Diagnóstico computarizado y electrónica',
    foto: 'assets/img/elias.jpg'
  },
  {
    nombre: 'Jaime Iván López Gutiérrez ID:232901',
    especialidad: 'Cambio de aceite y afinaciones',
    foto: 'assets/img/jaime.jpg'
  }
];

}
