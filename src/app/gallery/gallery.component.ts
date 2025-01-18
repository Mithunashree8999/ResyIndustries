import { Component } from '@angular/core';
import { SlideData } from '../sliderimage/slider.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  sliderData: SlideData[] = [
    {
      index: 0,
      headline: 'Forklift3ton',
      
      src: 'assets/images/3tonforklift.jpg'
    },
    {
      index: 1,
      headline: 'Froklift4ton',
      
      src: 'assets/images/4wayforklift.jpg'
    },
    {
      index: 2,
      headline: '5tonforklift',
      
      src: 'assets/images/5tonforklift.jpg'
    },
    {
      index: 3,
      headline: '30 ton forklift',
      
      src: 'assets/images/30tonforklift.webp'
    },
    {
      index: 4,
      headline: 'Combilift',
      
      src: 'assets/images/Combilift.jpeg'
    },
    {
      index: 5,
      headline: 'Electrical Hand Trolley',
      
      src: 'assets/images/ElectricalHandTrolley.jpg'
    },
    {
      index: 6,
      headline: 'Hand Trolley',
      
      src: 'assets/images/HandTrolley.jpg'
    },
    {
      index: 7,
      headline: 'Heavy Forklift',
      
      src: 'assets/images/HeavyForklift.jpeg'
    },
    {
      index: 8,
      headline: 'Reach Truck',
      
      src: 'assets/images/ReachTruck.jpg'
    },
    {
      index: 9,
      headline: 'Stacker',
      
      src: 'assets/images/Stacker.png'
    },
    {
      index: 10,
      headline: 'Warehouse',
      
      src: 'assets/images/WareHouse.jpeg'
    },
    {
      index: 11,
      headline: 'forklift battery',
      
      src: 'assets/images/forkliftbattery.webp'
    }
  ]
  
}
