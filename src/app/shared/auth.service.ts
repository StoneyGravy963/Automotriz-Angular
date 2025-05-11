import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private admins = [
    { username: 'admin1', password: 'admin1' },
    { username: 'admin2', password: 'admin2' },
    { username: 'admin3', password: 'admin3' }
  ];

  private currentUserSubject = new BehaviorSubject<string | null>(this.getCurrentUser());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.admins.find(
      admin => admin.username === username && admin.password === password
    );

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', username);
      this.currentUserSubject.next(username);
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null); 
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getCurrentUser(): string | null {
    return localStorage.getItem('currentUser');
  }

}