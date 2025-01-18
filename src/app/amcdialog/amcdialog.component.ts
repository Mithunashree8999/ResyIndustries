import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Category {
  name: string;
  description: string;
}

@Component({
  selector: 'app-amcdialog',
  templateUrl: './amcdialog.component.html',
  styleUrl: './amcdialog.component.css'
})
export class AmcdialogComponent {


  categories: Category[] = [
    { name: 'Battery Forklift and Diesel Forklift', description: '' },
    { name: 'Reach Truck', description: '' },
    { name: 'Stacker', description: '' }, 
    { name: 'Hand Trolley', description: '' },
    { name: 'Electrical Hand Trolley Monthly Rental basis, and etc.,', description: '' },
    { name: 'All type of Hydraulic Services provided', description: '' },
  ];

  constructor(private dialogRef: MatDialogRef<AmcdialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
