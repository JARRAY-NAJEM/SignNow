import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {




  hide = true;
  myFormProfil:any
  pattern="^[ a-zA-Z][a-zA-Z ]*$";



  disable(){

  }

  ngOnInit(): void {

    // this.myFormProfil.controls['prenom'].disabledForm(this.click);
    // this.myFormProfil.controls['nom'].disabledForm(this.click );
    // this.myFormProfil.controls['email'].disabledForm(this.click);
    // this.myFormProfil.controls['num'].disabledForm(this.click);
 this.myFormProfil.disable()
  // this.myFormProfil.get('nom').enable();

  }

  constructor(private formbuilder:FormBuilder , private _snackBar: MatSnackBar) {


  this.myFormProfil=this.formbuilder.group({
    prenom:[ '', [Validators.required , Validators.pattern(this.pattern), ]  ],
    nom:['',[Validators.required , Validators.pattern(this.pattern)] ],
    email:['',[Validators.required , Validators.email] ],
    num:['',[Validators.required , Validators.pattern("[0-9]{8}")]],



  });

}



durationInSeconds = 1;
openSnackBar() {
  this._snackBar.open('Votre demande a été traitée avec succès.!!','',{
    duration: this.durationInSeconds * 1000,
  });
}
  click:boolean  = false;
  disableForm(){

  if(this.click= this.click) {
    this.myFormProfil.disable();
   } else {
      this.myFormProfil.enable();
    }

}

// set disabledForm(click: boolean){

//     if(click) {
//      this.myFormProfil.disable();
//     } else {
//        this.myFormProfil.enable();
//      }
//    }
//    maj(){
//     console.log(this.myFormProfil.value);


//    }



}



