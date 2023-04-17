import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersServiceService } from './users-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _userService: UsersServiceService,
              private _router: Router){}

  canActivate(): boolean{
    if(this._userService.loggedIn() == "null"){
      this._router.navigate(["login-signup"])
      return false;
    } else {
      return true;
    }
  }

}
  
