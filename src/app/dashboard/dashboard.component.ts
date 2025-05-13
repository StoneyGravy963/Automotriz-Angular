import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablaReservasComponent } from "../dashboardComponents/tabla-reservas/tabla-reservas.component";

declare let alertify: any;

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, TablaReservasComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  reservas: any[] = [];
  opiniones: any[] = [];

  constructor(private authService: AuthService, private router: Router) {
    this.cargarDatos();
  }

  cargarDatos() {
    this.reservas = JSON.parse(localStorage.getItem('reservasAutos') || '[]');
    this.opiniones = JSON.parse(localStorage.getItem('formulariosOpinion') || '[]');
  }

  guardarReservaDesdeHijo(index: number) {
    localStorage.setItem('formularioReserva', JSON.stringify(this.reservas));
  }

  eliminarReservaDesdeHijo(index: number) {
    this.reservas.splice(index, 1);
    localStorage.setItem('formularioReserva', JSON.stringify(this.reservas));
  }

  goToTemplateData() {
    this.router.navigate(['/panel-control']);
  }

  goToReactiveData() {
    this.router.navigate(['/panel-control']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
