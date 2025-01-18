import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  isMobileView: boolean = false; // Default is desktop view

  ngOnInit(): void {
    this.updateView(window.innerWidth); // Set initial layout based on screen size
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const screenWidth = (event.target as Window).innerWidth;
    this.updateView(screenWidth);
  }

  updateView(width: number): void {
    this.isMobileView = width < 768; // Use column layout for widths less than 768px
  }
}
