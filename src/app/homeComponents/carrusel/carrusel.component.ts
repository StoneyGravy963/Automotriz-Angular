import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit, AfterViewInit {
  
  ngOnInit() {
  }

  ngAfterViewInit() {
    initFlowbite();
    const carousel = document.getElementById('controls-carousel');
    
    if (carousel) {
      const options = {
        interval: 3000, 
        indicators: true, 
        ride: 'carousel'
      };
      
      const carouselInstance = new (window as any).Carousel(carousel, options);
    }
  }
}