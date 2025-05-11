import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public form: FormGroup;

  public loginInvalido = false;
  private usuariosValidos = [
  { email: 'admin@ejemplo.com', password: 'admin1234' },
  { email: 'usuario@ejemplo.com', password: 'usuario1234' }
];

  constructor(private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl(''),
    }, {});
  }

  onSubmit(): void {
  if (this.form.valid) {
    const { email, password } = this.form.value;

    const usuarioEncontrado = this.usuariosValidos.find(user =>
      user.email === email && user.password === password
    );

    if (usuarioEncontrado) {
      this.loginInvalido = false;
      console.log('Inicio de sesión exitoso:', usuarioEncontrado);
      this.router.navigate(['/panel-control']);
    } else {
      this.loginInvalido = true;
      console.log('Usuario o contraseña incorrectos');
    }
  }
}
}
