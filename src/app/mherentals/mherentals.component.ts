import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mherentals',
  templateUrl: './mherentals.component.html',
  styleUrl: './mherentals.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MherentalsComponent {
  isMobileView: boolean = false; // Default is desktop view

  isHovered1 = false;
  isHovered2 = false;
  isHovered3 = false;
  isHovered4 = false;
  isHovered5 = false;

  constructor() {}
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

  forklift = {
    title: 'Forklifts',
    description: 'All types of forklifts available for rental services have a capacity of up to 32 tons.',

  };
  reachtruck = {
    title: 'Reach Truck',
    description: 'All types of reach trucks available for rental services have a capacity of up to 2 tons.',
  };
  handtrolley = {
    title: 'Hand Trolley',
    description: 'Both manual and electrical trolleys are available for rental services, with a capacity of up to 2.5 tons.',
  };
  hydracrane = {
    title: 'Hydra Crane',
    description: 'All types of hydra cranes available for rental services have a capacity of up to 100 tons.',
  };
  combilift = {
    title: 'Combilift',
    description: 'All types of combilifts available for rental services have a capacity of up to 32 tons.',
  };


}
