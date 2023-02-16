import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    console.log(next,state.url);
    let beforeLogin = this.authService.isAuthenticated();
    if (state.url.includes("/main")) {


      if (beforeLogin=="true"){
        return  true;
      } else {
        this.router.navigate(['/authentification/login']);
      }
    } else {


      if (beforeLogin=='false'){


        return  true;
      } else {


        this.router.navigate(['/main']);
      }
    }
  }

}

