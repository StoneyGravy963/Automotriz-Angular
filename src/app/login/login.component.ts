import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
    
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    const { username, fullName, password } = this.loginForm.value;
    if (this.authService.login(username, password, fullName)) {
      Swal.fire('Bienvenido', `Acceso exitoso, ${fullName}`, 'success');
      this.router.navigate(['/dashboard']);
    } else {
      Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
    }
  }
}