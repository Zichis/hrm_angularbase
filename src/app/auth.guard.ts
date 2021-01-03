import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from "./services/users.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public usersService: UsersService, public router: Router) {}

  canActivate(): boolean {
    if (!this.usersService.isAuthenticated()) {
      //this.router.navigate(['login']);
      window.location.href = "/login";
      return false;
    }
    return true;
  }

}
