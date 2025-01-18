import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';




interface Category {
  title: string;
  explanation: string;
}

const categories: Category[] = [
  { title: 'Wooden Pallet', explanation: 'Four way Pallet, Two way Pallet, Euro Pallet, CP Pallet, Wooden Crates, Collar Pallet, Wooden Box, Plywood Box,S-Type Collapsible Plywood Box, P-Type Collapsible Plywood Box, Plastic Foldable Poly Box, Injection Moulded Pallet, Roto Moulded Pallet, Steel Pallet' },
  { title: 'Packaging Materials', explanation: 'Edge Protector, Dunnage Airbag, , Reusable PP Box, Corrugated Box, Corrugated Roll,  Foam Sheet, Steel Nails, Steel Strap, Lashing Belt, Steel Clip, Strap Roll, Pet Strap Green Roll, Thermocol Box, Thermal Barcode Label Sticker Roll, Brown Paper Craft Paper Roll, EPE Foam Sheet Roll, Paper Bubble, PVC  Heat Shrink Roll Firm, Box Starpping Roll, Manual Strapping Tools, Manual Stretch Film Wrap Dispenser, Box Resize Tool with Scoring Wheel and all types of Industrial Tapes are available' },
  { title: 'Polythene Products', explanation: '  Air Bubble Roll, LD Polythene Roll, Plastic Sheets, Pallet Net Wrap, Strecth Films, Industrial Roll, Industrial Bags, Color Bags, Courier Poly Bags, Bubble Poly Jiffy Bags, Security Bags, Plain Courier Bag, Plain Bubble Courier Bag,' },
  //{ title: 'Thermocol Products', explanation: 'Thermocol Ice Box, Thermocol Sheets, Thermocol Block, Thermocol Box, Thermocol Boards' },
  //{ title: 'Corrugated Boxes', explanation: ' T Shape Corrugated Box, Regular Corrugated Boxes 3 Ply & 5 Ply, Mailer Corrugated Boxes' },
  //{ title: 'Tape Products', explanation: 'Brown Tape,  Bopp Gum Tape, Masking Tape, Bopp Clear Tape, Color Tape, Printed Tape, Aluminium Tape, Warning Tape, Bopp Tapes, Self Ahesive Tapes' },
];

@Component({
  selector: 'app-packingdialog',
  templateUrl: './packingdialog.component.html',
  styleUrl: './packingdialog.component.css'
})
export class PackingdialogComponent {
  categories = categories;

  constructor(public dialogRef: MatDialogRef<PackingdialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
