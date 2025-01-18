import { Component } from '@angular/core';

@Component({
  selector: 'app-sliderimage',
  templateUrl: './sliderimage.component.html',
  styleUrl: './sliderimage.component.css'
})
export class SliderimageComponent {

  images = [
    'assets/images/3tonforklift.jpg',
    'assets/images/4wayforklift.jpg',
    'assets/images/5tonforklift.jpg',
    'assets/images/Combilift.jpeg',
    'assets/images/ElectricalHandTrolley.jpg',
    'assets/images/forkliftbattery.webp',
    'assets/images/32tonforklift.jpg',
    'assets/images/Forklifts.jpeg',
    'assets/images/ForkLiftwithManPower.jpeg',
    'assets/images/HandTrolley.jpg',
    'assets/images/HeavyForklift.jpeg',
    'assets/images/ReachTruck.jpg',
    'assets/images/Stacker.png',
    'assets/images/WareHouse.jpeg',
    'assets/images/WarehouseForkLifts.jpeg',
    'assets/images/hydra1.jpeg',
    'assets/images/1.avif',
    'assets/images/2.avif',
    'assets/images/3.jpeg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/7.webp',
    'assets/images/8.jpg',
    'assets/images/9.jpg',
    'assets/images/10.jpg',
    'assets/images/11.jpg',
    'assets/images/12.jpg'
  ];
  currentSlide = 0;
  ngOnInit() {
    //Uncomment below to auto-slide every 3 seconds
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }
  
}
