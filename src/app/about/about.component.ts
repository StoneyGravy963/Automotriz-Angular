import { Component } from '@angular/core';
import { VideoComponent } from '../aboutComponents/video/video.component';


@Component({
  selector: 'app-about',
  imports: [VideoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
