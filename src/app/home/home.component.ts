import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { CarruselComponent } from '../homeComponents/carrusel/carrusel.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
