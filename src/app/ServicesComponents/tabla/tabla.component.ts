import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  imports: [
    MatTableModule,
    MatCardModule
  ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

displayedColumns: string[] = ['nombre', 'descripcion', 'costo'];

  servicios = [
    {
      nombre: 'Cambio de aceite y filtros',
      descripcion: 'Mantén el motor en óptimas condiciones con aceites y filtros de calidad.',
      costo: '$800 - $1,500 MXN'
    },
    {
      nombre: 'Revisión y ajuste de frenos',
      descripcion: 'Seguridad ante todo, con inspección y cambio de pastillas, discos y líquido de frenos.',
      costo: '$1,200 - $3,000 MXN'
    },
    {
      nombre: 'Afinación del motor',
      descripcion: 'Mejora el rendimiento con cambio de bujías, limpieza de inyectores y revisión de sensores.',
      costo: '$1,500 - $3,500 MXN'
    },
    {
      nombre: 'Diagnóstico computarizado',
      descripcion: 'Detecta fallas electrónicas con tecnología avanzada.',
      costo: '$500 - $900 MXN'
    },
    {
      nombre: 'Cambio de batería',
      descripcion: 'Instalación y revisión de baterías para evitar problemas de arranque.',
      costo: '$1,000 - $2,500 MXN'
    },
    {
      nombre: 'Alineación y balanceo',
      descripcion: 'Garantiza una conducción estable y segura.',
      costo: '$600 - $1,200 MXN'
    },
    {
      nombre: 'Cambio de llantas',
      descripcion: 'Venta e instalación de neumáticos adecuados para cada vehículo.',
      costo: '$800 - $2,500 MXN por llanta'
    },
    {
      nombre: 'Sistema de suspensión',
      descripcion: 'Revisión y reparación de amortiguadores, resortes y componentes de dirección.',
      costo: '$2,000 - $5,000 MXN'
    },
    {
      nombre: 'Sistema de aire acondicionado',
      descripcion: 'Recarga de gas, limpieza y reparación para mantener el confort en el vehículo.',
      costo: '$800 - $2,000 MXN'
    },
    {
      nombre: 'Lavado y detallado automotriz',
      descripcion: 'Limpieza profunda interior y exterior para mantener el vehículo impecable.',
      costo: '$300 - $800 MXN'
    }
  ];

}
