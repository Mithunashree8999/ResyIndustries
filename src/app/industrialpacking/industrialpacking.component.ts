import { Component } from '@angular/core';
import { PackingdialogComponent } from '../packingdialog/packingdialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-industrialpacking',
  templateUrl: './industrialpacking.component.html',
  styleUrl: './industrialpacking.component.css'
})
export class IndustrialpackingComponent {
  // pack = ['Wholesale Plywood', 'Industrial Packing Wooden Items', 'Carton Box', 'Pallets'];

  hover = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PackingdialogComponent, {
      width: '800px',
      data: { /* Pass any data if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
