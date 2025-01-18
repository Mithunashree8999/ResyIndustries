import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  isMobileView: boolean = false; // Default view is laptop
  constructor() {}
  ngOnInit(): void {
    this.updateView(window.innerWidth); // Set the initial design based on the screen size
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const screenWidth = (event.target as Window).innerWidth;
    this.updateView(screenWidth);
  }

  updateView(width: number): void {
    this.isMobileView = width < 768; // Change view based on screen width
  }
}
