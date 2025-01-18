import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  // isMobileView: boolean = false; 
  // isMobileView1: boolean = false; 
   isHandset$: Observable<boolean>;
   isTablet$: Observable<boolean>;
  isJumping = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
   // this.updateView(window.innerWidth); // Set the initial design based on the screen size
    this.triggerJump();
    this.isHandset$ = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(map((result) => result.matches));

  this.isTablet$ = this.breakpointObserver
    .observe([Breakpoints.Tablet])
    .pipe(map((result) => result.matches));
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   const screenWidth = (event.target as Window).innerWidth;
  //   this.updateView(screenWidth);
  // }

  // updateView(width: number): void {
  //   this.isMobileView = width < 768; // Change view based on screen width
  //   this.isMobileView1 = width < 768;
  // }

  triggerJump() {
    this.isJumping = true;

    // Optional: Reset the jump class after the animation completes
    setTimeout(() => {
      this.isJumping = false; // Reset the jump state if you want to re-trigger the jump later
    }, 1000); // This should match the duration of the jump animation
  }

  

  constructor(private router: Router,private breakpointObserver: BreakpointObserver) {}

  goToHome() {
    const target = document.getElementById('Home');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.router.navigate(['/']);
    this.closeMenu();
  }

  goToServices() {
    const target = document.getElementById('service');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.router.navigate(['/services']);
    this.closeMenu();
  }

  goToAbout() {
    const target = document.getElementById('aboutus');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.router.navigate(['/aboutus']);
    this.closeMenu();
  }

  goToGallery() {
    const target = document.getElementById('gallery');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.router.navigate(['/gallery']);
    this.closeMenu();
  }

  goToContact() {
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.router.navigate(['/contactus']);
    this.closeMenu();
  }

  goToMHE() {
    const target = document.getElementById('mhe');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.router.navigate(['/mhe']);
    this.closeMenu();
  }

 
  
}
