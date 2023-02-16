import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.css']
})
export class AcheterComponent implements OnInit {

  constructor(private route:Router) {

  }
  ngOnInit(): void {
  }
  Contacter()
{
    this.route.navigate(['Contacter'])
  }
}
