import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


  export class AuthService {
    beforeLogin=false
    constructor() { }
  isAuthenticated(){
      return( localStorage.getItem("beforeLogin")

      )
      ;


    }
  }
