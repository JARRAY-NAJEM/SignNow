import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  myFormSign: any;
  dataSign: any;
  data: any;

  pattern = '^[ a-zA-Z][a-zA-Z ]*$';
  condition =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}';
  phone = ' /^-?(0|[1-9]d*)?$/';


  constructor(
    private formbuilder: FormBuilder,
    private getapi: ApiDataService
  ) {
    this.myFormSign = this.formbuilder.group({
      firstname: [
        '',
        // [Validators.required, Validators.pattern(this.pattern)]
      ],
      lastname: [
        '',
        //  [Validators.required, Validators.pattern(this.pattern)]
      ],
      Email: [
        '',
        //  [Validators.required, Validators.email]
      ],
      num: [
        '',
        //  [Validators.required, Validators.pattern('[0-9 ]{8}')]
      ],
      identite: [
        '',
        //  [Validators.required, Validators.pattern('[0-9 ]{8}')]
      ],

      password: [
        '',
        //  [Validators.required, Validators.pattern(this.condition)]
      ],
      confirmer: [
        '',
        // [Validators.required, Validators.pattern(this.condition)],
      ],
    });

  }

  ngOnInit(): void {
    //  console.log(JSON.stringify(this.myFormSign.value));
    // console.log(this.myFormSign?.get("firstname")?.value,);
  }

  // data = {
  //   firstname: this.myFormSign?.get("firstname")?.value,
  //   lastname: 'njm',
  //   Email: 'njm@gmail.com',
  //   num: 111111,
  //   identite: 11111,
  // };

  post() {
    this.data = {
      firstname: this.myFormSign?.get('firstname')?.value,
      lastname: this.myFormSign?.get('lastname')?.value,
      Email: this.myFormSign?.get('Email')?.value,
      num: this.myFormSign?.get('num')?.value,
      identite: this.myFormSign?.get('identite')?.value,
    };

    this.getapi.addregister(this.data).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
      complete: () => console.log('done!'),
    });

  }
}
