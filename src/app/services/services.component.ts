import { Component } from '@angular/core';
import { FormularioComponent } from '../ServicesComponents/formulario/formulario.component';
import { CabeceraSComponent } from "../ServicesComponents/cabecera-s/cabecera-s.component";
import { InformacionSComponent } from "../ServicesComponents/informacion-s/informacion-s.component";

@Component({
  selector: 'app-services',
  imports: [FormularioComponent, CabeceraSComponent, InformacionSComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  
}
