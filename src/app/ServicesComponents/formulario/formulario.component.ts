import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare let alertify: any;

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
  formData = {
    nombre: '',
    auto: '',
    cita: '',
    acepta: false
  };
  
  enviarFormulario() {
  const nombreValido = /^[a-zA-ZÀ-ÿ\s]+$/.test(this.formData.nombre);

    if (!nombreValido) {
      alertify.error('El nombre solo puede contener letras y espacios');
      return;
    }

    const hoy = new Date();
    const fechaSeleccionada = new Date(this.formData.cita);
    const anioActual = hoy.getFullYear();

    if (fechaSeleccionada <= hoy) {
      alertify.error('La fecha debe ser posterior a la actual');
      return;
    }

    if (fechaSeleccionada.getFullYear() !== anioActual) {
      alertify.error('La cita debe ser en el mismo año');
      return;
    }

    if (this.formData.auto === 'default') {
      alertify.error('Debe seleccionar un servicio válido');
      return;
    }

    const datosAGuardar = {
      nombre: this.formData.nombre,
      servicio: this.formData.auto,
      cita: this.formData.cita,
      acepta: this.formData.acepta
    };

    const reservasExistentes = JSON.parse(localStorage.getItem('reservasAutos') || '[]');
    reservasExistentes.push(datosAGuardar);
    localStorage.setItem('reservasAutos', JSON.stringify(reservasExistentes));

    alertify.success("Reserva guardada exitosamente.");

    // Limpia el formulario si deseas
    this.formData = {
      nombre: '',
      auto: '',
      cita: '',
      acepta: false
    };
  }
}
