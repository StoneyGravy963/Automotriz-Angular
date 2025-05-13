import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablaReservasComponent } from "../dashboardComponents/tabla-reservas/tabla-reservas.component";
import { TablaOpinionesComponent } from "../dashboardComponents/tabla-opiniones/tabla-opiniones.component";

declare let alertify: any;

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, TablaReservasComponent, TablaOpinionesComponent],
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
    localStorage.setItem('reservasAutos', JSON.stringify(this.reservas)); 
    alertify.success("Reserva eliminada exitosamente.");
  }

  guardarOpinionDesdeHijo(index: number) {
    localStorage.setItem('formulariosOpinion', JSON.stringify(this.opiniones));
  }

  eliminarOpinionDesdeHijo(index: number) {
    this.opiniones.splice(index, 1);
    localStorage.setItem('formulariosOpinion', JSON.stringify(this.opiniones));
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
