import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    let beforeLogin = this.authService.isAuthenticated();
    if (!beforeLogin   ){
      return  true;
    } else {
      this.router.navigate(['/main']);
    }
  }

}
