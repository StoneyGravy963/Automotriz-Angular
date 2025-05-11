import { Component } from '@angular/core';
import { DomseguroPipe } from '../domseguro.pipe';


@Component({
  selector: 'app-video',
  imports: [DomseguroPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  video:string="g8E-791GSPs?si=ncBTVyMFb6QelZp6&amp;start=45&autoplay=1&mute=1&loop=1&playlist=g8E-791GSPs"; // <iframe width="560" height="315" src="https://www.youtube.com/embed/8FpXGOd_8u4?si=K-DvhQ6d0S63UgBm&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
}
