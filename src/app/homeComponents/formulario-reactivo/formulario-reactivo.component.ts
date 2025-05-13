import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

declare let alertify: any;

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule, CommonModule],
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
    const nuevaOpinion = this.form.value;

    const opinionesGuardadas = JSON.parse(localStorage.getItem('formulariosOpinion') || '[]');
    opinionesGuardadas.push(nuevaOpinion);

    localStorage.setItem('formulariosOpinion', JSON.stringify(opinionesGuardadas));
    console.log('Formulario guardado correctamente:', nuevaOpinion);
    alertify.success("cita guardada exitosamente.");
    
    this.form.reset();
  }
}
}
