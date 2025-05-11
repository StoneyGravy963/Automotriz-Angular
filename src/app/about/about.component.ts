import { Component } from '@angular/core';
import { VideoComponent } from '../aboutComponents/video/video.component';
import { ListasucursalesComponent } from '../aboutComponents/API/listasucursales/listasucursales.component';


@Component({
  selector: 'app-about',
  imports: [VideoComponent,ListasucursalesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
