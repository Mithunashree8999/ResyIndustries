import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AmcdialogComponent } from '../amcdialog/amcdialog.component';

@Component({
  selector: 'app-amcservice',
  templateUrl: './amcservice.component.html',
  styleUrl: './amcservice.component.css'
})
export class AmcserviceComponent {
  // amc = ['Battery Forklift and Diesel Forklift', 'Reach Truck', 'Stacker', 'Hand Trolley', 'Electrical Hand Trolley Monthly Rental basis, and etc.,','All type of Hydraulic Services provided'];

  hover = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AmcdialogComponent, {
      width: '800px',
      data: { /* Pass any data if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
