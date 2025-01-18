import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForkliftdialogComponent } from '../forkliftdialog/forkliftdialog.component';

@Component({
  selector: 'app-forklift',
  templateUrl: './forklift.component.html',
  styleUrl: './forklift.component.css'
})
export class ForkliftComponent {
  // forklifts = [' We aim to gain our client’s satisfaction and trust by providing reliable and transparent services.'];

  hover = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ForkliftdialogComponent, {
      width: '800px',
      data: { /* Pass any data if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
