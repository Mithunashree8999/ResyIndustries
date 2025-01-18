import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


interface Category {
  name: string;
  description: string;
}


@Component({
  selector: 'app-forkliftdialog',
  templateUrl: './forkliftdialog.component.html',
  styleUrl: './forkliftdialog.component.css'
})
export class ForkliftdialogComponent {

  categories: Category[] = [
    { name: 'Accurate & timely data', description: 'Companies like yours need accurate and timely data on inventories, compliances, costs and schedules to increase resilience, efficiency and connectivity across the supply chain.' },
    { name: 'Trustworthy partner', description: 'We offer a trustworthy partner who will enable you to grow by seamlessly integrating with your supply chain without disrupting existing protocols, systems or your business.' },
    
  ];

  constructor(private dialogRef: MatDialogRef<ForkliftdialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }


}
