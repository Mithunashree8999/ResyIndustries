import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-warehousedialog',
  templateUrl: './warehousedialog.component.html',
  styleUrl: './warehousedialog.component.css',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class WarehousedialogComponent {

 
  categories = [
    {
      title: 'Dedicated Warehousing',
      fields: [
        { explanation: 'Dedicated warehousing provides businesses with a standalone facility tailored to their specific needs. This model offers greater control over storage conditions, security, and inventory management processes, making it suitable for companies with large volumes of inventory or specialized storage requirements.' },
      ]
    },
    {
      title: 'Pick, Pack & Ship',
      fields: [
        {  explanation: 'Efficient and accurate order processing is at the core of our fulfillment services. Our technology-driven processes optimize accuracy and speed, providing a reliable service that enhances customer satisfaction.' },
       
      ]
    },
    {
      title: 'On-Demand Warehousing',
      fields: [
        {  explanation: 'On-demand warehousing offers flexible and scalable storage solutions, allowing businesses to adjust their warehouse space based on real-time demand. This model is especially beneficial for handling seasonal peaks or unexpected surges in inventory.' },
       
      ]
    },
    {
      title: 'Labeling & Barcoding',
      fields: [
        {  explanation: 'We provide comprehensive labeling and barcoding services, ensuring your products are accurately labeled for easy tracking and compliance with retailer requirements. This service streamlines your inventory management and enhances order accuracy.' },
       
      ]
    },
    {
      title: 'Kitting & VAS',
      fields: [
        {  explanation: 'Our specialised teams VAS management workforce to take care of all the value added services like kitting, sticker pasting, ironing and much more.' },
       
      ]
    },
    {
      title: 'Reduce complexity',
      fields: [
        {  explanation: 'Global supply chains are getting more complex and harder to manage as consumer needs fluctuate daily and disruptions threaten the smooth flow of goods from origin to destination.' },
       
      ]
    },
    {
      title: 'Visibility & reliability',
      fields: [
        {  explanation: 'Getting complete visibility and increasing reliability are the top priorities as companies battle to streamline supply chains, simplify processes and optimise logistics.' },
       
      ]
    },
    {
      title: 'Accurate & timely data',
      fields: [
        {  explanation: 'Companies like yours need accurate and timely data on inventories, compliances, costs and schedules to increase resilience, efficiency and connectivity across the supply chain.' },
       
      ]
    },
    // Add more categories as needed
  ];

  constructor(public dialogRef: MatDialogRef<WarehousedialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
