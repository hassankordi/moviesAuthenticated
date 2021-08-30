import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class PathGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if(this._MoviesService.isLogin.getValue() ==true){
        return true;
      }
      else{

        this._Router.navigate(['/login'])
        
        return false;
      }
   
  }
 
  

  constructor(private _MoviesService:MoviesService , private _Router:Router){}
}
