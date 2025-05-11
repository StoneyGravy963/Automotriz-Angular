import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { Sucursal } from '../sucursales';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listasucursales',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatInputModule,MatIconModule],
  templateUrl: './listasucursales.component.html',
  styleUrls: ['./listasucursales.component.css']
})
export class ListasucursalesComponent {
  sucursales: Sucursal[] = [];
  sucursalesFiltradas: Sucursal[] = [];
  busqueda: string = '';

  constructor(public datosApi: DatosService) {}

  ngOnInit(): void {
    this.recuperarDatos();
  }

  recuperarDatos(): void {
    this.datosApi.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {
        console.log(err);
      },
    });
  }

  successRequest(data: any): void {
    this.sucursales = data.sucursales;
    this.sucursalesFiltradas = [...this.sucursales];
  }

  filtrarSucursales(): void {
    this.sucursalesFiltradas = this.sucursales.filter((sucursal) => {
      return (
        sucursal.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        sucursal.ubicacion.direccion.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        sucursal.contacto.telefono.includes(this.busqueda) ||
        sucursal.contacto.correo.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        sucursal.contacto.whatsapp.includes(this.busqueda)
      );
    });
  }

  limpiarBusqueda(): void {
    this.busqueda = '';
    this.sucursalesFiltradas = [...this.sucursales];
  }
}
