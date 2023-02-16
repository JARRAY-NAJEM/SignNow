import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor(

    private dialogRef: MatDialogRef<ConditionComponent>,
    public dialog: MatDialog   )  { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close(false);
  }


}
