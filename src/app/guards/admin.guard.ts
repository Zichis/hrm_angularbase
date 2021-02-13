import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(public usersService: UsersService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usersService.getRoles().pipe(map((response: any) => {
      if (response['data']['roles'].includes('ROLE_ADMIN')) {
        return true;
      }
      localStorage.setItem('baseAppAlert', `Not authorized!`);
      this.router.navigate(['/']);
      return false;
    }));
  }
  
}
