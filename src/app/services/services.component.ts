import { Component } from '@angular/core';
import { FormularioComponent } from '../ServicesComponents/formulario/formulario.component';
import { CabeceraSComponent } from "../ServicesComponents/cabecera-s/cabecera-s.component";
import { InformacionSComponent } from "../ServicesComponents/informacion-s/informacion-s.component";
import { TablaComponent } from '../ServicesComponents/tabla/tabla.component';
import { MecanicosComponent } from '../ServicesComponents/mecanicos/mecanicos.component';

@Component({
  selector: 'app-services',
  imports: [FormularioComponent, CabeceraSComponent, InformacionSComponent,TablaComponent,MecanicosComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  
}
