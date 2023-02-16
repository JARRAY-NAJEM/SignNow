import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Observable, startWith, map } from 'rxjs';


@Component({
  selector: 'app-signer',
  templateUrl: './signer.component.html',
  styleUrls: ['./signer.component.css']
})




export class SignerComponent implements OnInit {

  add:any
  pattern="^[ a-zA-Z][a-zA-Z ]*$";
  constructor(private formbuilder:FormBuilder) {
  this.add=this.formbuilder.group({
    doc:['',Validators.required  ],

  })
   }


  ngOnInit(): void {

  }







}
