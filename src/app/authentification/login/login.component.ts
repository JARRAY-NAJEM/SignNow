import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  myFormlogin: any;
  pattern = '^[ a-zA-Z][a-zA-Z ]*$';
  condition =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}';

  beforeLogin = 'false';
  http: any;

  constructor(private formbuilder: FormBuilder, private route: Router) {
    this.myFormlogin = this.formbuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.condition)]
      ],
    });
  }
  ngOnInit(): void {
    localStorage.setItem('beforeLogin', this.beforeLogin);
  }

  logGuard() {
    this.beforeLogin = 'true';
    localStorage.setItem('beforeLogin', this.beforeLogin);

  }
  // login(data :any){
  //   return this.http.post('http://localhost:5000/login',  data)

  // }
}
