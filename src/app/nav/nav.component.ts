import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../shared/auth.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-nav',
  imports: [RouterModule, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
 isMenuOpen = false;
  currentUser: string | null = null;
  currentUserFullName: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    
    this.authService.currentUserFullName$.subscribe(fullName => {
      this.currentUserFullName = fullName;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
  }
}
