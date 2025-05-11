import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { FormularioReactivoComponent } from "../formulario-reactivo/formulario-reactivo.component";

@Component({
  selector: 'app-services',
  imports: [FormularioComponent,FormularioReactivoComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
