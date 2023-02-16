import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  myFormSupport:any
  pattern="^[ a-zA-Z][a-zA-Z ]*$";
  constructor(private formbuilder:FormBuilder) {
  this.myFormSupport=this.formbuilder.group({
    nom:['',[Validators.required , Validators.pattern(this.pattern)] ],
    email:['',[Validators.required , Validators.email] ],
    sujet:[''],
    msg:['',[Validators.required , Validators.maxLength(256) ]],
  })
   }
  ngOnInit(): void {
  }
}