import { Component } from '@angular/core';
import { Auto } from '../auto';
import { AutoService } from '../shared/auto.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-un-auto',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule
  ],
  templateUrl: './un-auto.component.html',
  styleUrl: './un-auto.component.css'
})
export class UnAutoComponent {
  auto!: Auto;
 
  constructor(
    public autoService: AutoService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      try {
        this.auto = this.autoService.getUnAuto(params['id']);
      } catch (error) {
        console.error('Auto no encontrado:', error);
      }
    });
  }

  mostrarContacto() {
    Swal.fire({
      title: 'Información de contacto',
      text: 'Contacta con tu sucursal más cercana o al 4491234567',
      icon: 'info',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3f51b5'
    });
  }
}