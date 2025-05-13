import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';


declare let alertify: any;

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {
  
   public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      opinion: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
    
      const formData = this.form.value;
      localStorage.setItem('formularioOpinion', JSON.stringify(formData));
      console.log('Datos del formulario guardados en localStorage:', formData);
      alertify.success("cita guardada exitosamente.");
      
    }
  }
}
