import { Component } from '@angular/core';
import { Auto } from '../auto';
import { AutoService } from '../shared/auto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Importaciones de Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-busqueda-autos',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    RouterModule
  ],
  templateUrl: './busqueda-autos.component.html',
  styleUrl: './busqueda-autos.component.css'
})
export class BusquedaAutosComponent {
  autos: Auto[] = [];
  autosFiltrados: Auto[] = [];
  busqueda: string = '';
  
  constructor(public servicioAuto: AutoService) {}
  
  ngOnInit(): void {
    this.autos = this.servicioAuto.getAutos();
    this.autosFiltrados = [...this.autos];
  }
  
  filtrarAutos(): void {
    this.autosFiltrados = this.autos.filter(auto => {
      return auto.name.toLowerCase().includes(this.busqueda.toLowerCase()) ||
             auto.brand.toLowerCase().includes(this.busqueda.toLowerCase()) ||
             auto.year.toString().includes(this.busqueda) ||
             auto.color.toLowerCase().includes(this.busqueda.toLowerCase()) ||
             auto.price.toString().includes(this.busqueda);
    });
  }
  
  limpiarBusqueda(): void {
    this.busqueda = '';
    this.autosFiltrados = [...this.autos];
  }
}