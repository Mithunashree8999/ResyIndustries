import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servicecomponent',
  templateUrl: './servicecomponent.component.html',
  styleUrl: './servicecomponent.component.css'
})
export class ServicecomponentComponent {
  isOpened = false;
  isHeaderVisible = false;
  isVisible = false;
  isMobileView: boolean = false; // Default is desktop view

  @ViewChild('slidingDiv', { static: true }) slidingDiv!: ElementRef;


  triggerSlide() {
    this.isVisible = true; // Set the div to visible
  }
  ngOnInit() {
    this.createObserver();
    this.updateView(window.innerWidth); // Set initial layout based on screen size
console.log(this.isMobileView);
    // Trigger the animation after the component has initialized
    setTimeout(() => {
      this.isHeaderVisible = true;
    }, 100);  // Optional delay before starting animation
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const screenWidth = (event.target as Window).innerWidth;
    this.updateView(screenWidth);
  }

  updateView(width: number): void {
    this.isMobileView = width < 768; // Use column layout for widths less than 768px
  }
  createObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true; // Set the div to visible when in view
          observer.unobserve(entry.target); // Stop observing once the div is visible
        }
      });
    });

    observer.observe(this.slidingDiv.nativeElement); // Observe the sliding div
  }
}
