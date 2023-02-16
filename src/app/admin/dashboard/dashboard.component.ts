import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // userNumber: number = Math.floor(Math.random() * 999);
  // priceTotal: number = Math.floor(Math.random() * 999);
  // signatureNumber: number = Math.floor(Math.random() * 999999);
  userNumber=0;
  priceTotal=0;
  signatureNumber=0;



  constructor() { }

  ngOnInit(): void {
  }

}
