import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { CarruselComponent } from '../homeComponents/carrusel/carrusel.component';
import { FormularioReactivoComponent } from "../homeComponents/formulario-reactivo/formulario-reactivo.component";
import { TextoBienvenidaComponent } from '../texto-bienvenida/texto-bienvenida.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CarruselComponent, FormularioReactivoComponent,TextoBienvenidaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
