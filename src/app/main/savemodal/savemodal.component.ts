import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-savemodal',
  templateUrl: './savemodal.component.html',
  styleUrls: ['./savemodal.component.css']
})
export class SavemodalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SavemodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }



}
