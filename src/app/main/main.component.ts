import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConditionComponent } from './condition/condition.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  ngOnInit(): void {
  }



  constructor(private route:Router , public dialog: MatDialog) {


  }


  signer(){
    this.route.navigate(['Signer'])

  }
  condition(){
    const dialogRef = this.dialog.open(ConditionComponent);


  }





}
