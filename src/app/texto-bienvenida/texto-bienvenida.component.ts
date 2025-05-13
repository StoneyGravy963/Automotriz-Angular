import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-texto-bienvenida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './texto-bienvenida.component.html',
  styleUrls: ['./texto-bienvenida.component.css']
})
export class TextoBienvenidaComponent implements OnInit {
  title = 'Bienvenidos a Nuestra Plataforma';
  subtitle = 'Transformando ideas en experiencias inolvidables';
  
  constructor() { }
  
  ngOnInit() {

  }
}