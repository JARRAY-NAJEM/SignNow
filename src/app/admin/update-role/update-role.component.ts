import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface Role {
  role: string;
}
@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css'],
})
export class UpdateRoleComponent implements OnInit {


  myFormRole: any;


  Roles: Role[] = [
    { role: 'admin' },
     { role: 'client' }
    ];







  // print() {
  //   console.log(this.myFormRole.value);
  // }

  constructor( private formbuilder:FormBuilder,
    private dialogRef: MatDialogRef<UpdateRoleComponent>,
    public dialog: MatDialog , @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.myFormRole=this.formbuilder.group({

      role:['',[Validators.required] ],
      ID:[''],




    })


    this.dataUser=data

  }
  dataUser:any

  ngOnInit(): void {

    console.log (this.dataUser)
    if (this.dataUser.action=="edit"){
      console.log(this.dataUser.element);
      this.myFormRole=this.formbuilder.group({


    role:[ this.dataUser.element.role],

    ID:[this.dataUser.element.ID],




      })
        };



  }
  //close done
  close(): void {
    this.dialogRef.close(false);
  }

  confirmer(): void {
    this.dialogRef.close({
      action:"edit",
      user:this.myFormRole.value
     });


  }
}





