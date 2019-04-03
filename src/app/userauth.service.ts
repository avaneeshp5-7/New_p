import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserauthService implements CanActivate {

  constructor(private _router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    alert('auth');
    if(localStorage.getItem('login_check')!=null) {
        return true;
    }
    else{
      this._router.navigateByUrl('/user-login-securly');
    return false;
    }
  }

}
