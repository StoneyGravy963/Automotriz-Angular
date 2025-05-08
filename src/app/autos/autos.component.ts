import { Component } from '@angular/core';
import { BusquedaAutosComponent } from "../busqueda-autos/busqueda-autos.component";

@Component({
  selector: 'app-autos',
  imports: [BusquedaAutosComponent],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {

}
