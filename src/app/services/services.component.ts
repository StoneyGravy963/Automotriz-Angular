import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { FormularioReactivoComponent } from "../formulario-reactivo/formulario-reactivo.component";
import { TablaComponent } from '../servicesComponents/tabla/tabla.component';

@Component({
  selector: 'app-services',
  imports: [FormularioComponent,FormularioReactivoComponent,TablaComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
