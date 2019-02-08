import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable()
export class AuthentificationGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   const token = localStorage.getItem('token');
   if (!token) {
     this.router.navigate(['login']);
     return false;
   }
   return true;
  }
}
