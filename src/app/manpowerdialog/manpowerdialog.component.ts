import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Category {
  name: string;
  description: string;
}


@Component({
  selector: 'app-manpowerdialog',
  templateUrl: './manpowerdialog.component.html',
  styleUrl: './manpowerdialog.component.css'
})
export class ManpowerdialogComponent {

  constructor(public dialogRef: MatDialogRef<ManpowerdialogComponent>) {}

  categories: Category[] = [
    { name: 'Production Manager', description: '' },
    { name: 'Production Supervisor', description: '' },
    { name: 'Production Teamleader', description: '' }, 
    { name: 'Production Technicians', description: '' },
    { name: 'Warehouse Managers', description: '' },
    { name: 'Warehouse Supervisor', description: '' },
    { name: 'Warehouse Assitant', description: '' },
    { name: 'Forklift Operator', description: '' },
    { name: 'Crane Operator', description: '' },
    { name: 'Human Resources', description: '' },
    { name: 'HR Assitant', description: '' },
    { name: 'Housekeeping Manpowers', description: '' },
  ];


  onNoClick(): void {
    this.dialogRef.close();
  }

}
