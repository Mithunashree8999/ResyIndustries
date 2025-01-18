import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManpowerdialogComponent } from '../manpowerdialog/manpowerdialog.component';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.css'
})
export class BookcardComponent {
 // manpower = ['HouseKeeping Workers', 'Production Manpower Supply', 'Welder Manpower Supply', 'Fitter Manpower Supply'];

  hover = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ManpowerdialogComponent, {
      width: '1000px',height:'600px',
      data: { /* Pass any data if needed */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
