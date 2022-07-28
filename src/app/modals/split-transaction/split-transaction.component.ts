import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-split-transaction',
  templateUrl: './split-transaction.component.html',
  styleUrls: ['./split-transaction.component.css']
})
// export class SplitTransactionComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


export class SplitTransactionComponent {
  
  constructor(
    public dialogRef: MatDialogRef<SplitTransactionComponent>,
    ) { }
  
  onCancel(): void {
    this.dialogRef.close();
  }
  
}
