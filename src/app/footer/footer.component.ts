import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  nombreProy: string = 'Proyecto Automotriz';
  anio: number = new Date().getFullYear();
  color: boolean = false;
  
  constructor() {}
  
  ngOnInit(): void {
    const today = new Date();
    this.color = today.getDate() % 2 === 0;
  }

  goTo(url: string): void {
    window.open(url, '_blank');
  }
  
  toggleFooterColor(): void {
    this.color = !this.color;
  }
}