import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  price: number | undefined;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<PriceComponent>
  ) {}
  
  save() {
    // MatDialogRef service that contains a close method
    // The close method accepts a single parameter that defines the data we want to send back to the caller.
    this.dialogRef.close(this.price);
  }
}
