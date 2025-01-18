import { Component } from '@angular/core';
import { WarehousedialogComponent } from '../warehousedialog/warehousedialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css'
})
export class WarehouseComponent {
  warehouse = [''];

  hover = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(WarehousedialogComponent, {
      width: '1000px',height:'500px',
      data: { /* Pass any data if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
