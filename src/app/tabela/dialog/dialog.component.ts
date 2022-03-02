import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/app.component';



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  element!: PeriodicElement;


  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<DialogComponent>,
    

  ) { }

  ngOnInit(): void {
 

  }
    onNoClick(): void {
      this.dialogRef.close();
    }
  

}
