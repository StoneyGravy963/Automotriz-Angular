import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  goToTemplateData() {
    this.router.navigate(['/panel-control']); 
  }

  goToReactiveData() {
    this.router.navigate(['/panel-control']); 
  }
}
