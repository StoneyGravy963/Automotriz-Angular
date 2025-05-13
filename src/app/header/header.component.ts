import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input() slogans: string[] = [
    "Tu camino, tu estilo",
    "Pasión por la velocidad",
    "Conduciendo el futuro",
    "Libertad sobre ruedas"
  ];
  @Input() typingSpeed: number = 150; 
  @Input() displayTime: number = 8000; 
  @Input() pauseTime: number = 2000; 

  currentSlogan: string = '';
  displayedText: string = '';
  currentIndex: number = 0;
  isTyping: boolean = false;
  isFading: boolean = false;
  private intervalId: any;

  ngOnInit() {
    this.startTypewriterAnimation();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearTimeout(this.intervalId);
    }
  }

  startTypewriterAnimation() {
    this.currentSlogan = this.slogans[this.currentIndex];
    this.isTyping = true;
    this.typeText(0);
  }

  typeText(charIndex: number) {
    if (charIndex <= this.currentSlogan.length) {
      this.displayedText = this.currentSlogan.substring(0, charIndex);
      this.intervalId = setTimeout(() => {
        this.typeText(charIndex + 1);
      }, this.typingSpeed);
    } else {
      this.isTyping = false;
      this.intervalId = setTimeout(() => {
        this.fadeOutAndChange();
      }, this.displayTime);
    }
  }

  fadeOutAndChange() {
    this.isFading = true;
    
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slogans.length;
      this.displayedText = '';
      this.isFading = false;
      
      setTimeout(() => {
        this.startTypewriterAnimation();
      }, this.pauseTime);
    }, 500); 
  }
}
