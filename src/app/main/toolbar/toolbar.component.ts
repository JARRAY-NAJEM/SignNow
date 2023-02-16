import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConditionComponent } from '../condition/condition.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  nom:string = "jarray";
  prenom:string = "najmeddine";
  email:string = "najmejarray@gmail.com";
  jeton:number = 5;
  constructor( private route:Router , public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  outGuard(){
   localStorage.setItem('beforeLogin', "false");
   this.route.navigate(['/authentification/login'])

  }
  condition() {
    this.dialog.open(ConditionComponent);
  }

}
