import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageServiceService } from '../services/localstorage-service.service';


@Injectable({
  providedIn: 'root'
})
export class GuardserviceService implements CanActivate {

  
  constructor(public router:Router,public local:LocalstorageServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    console.log(state);
    let user = localStorage.getItem('USER');
    if(!user)
    {
      this.router.navigate(['/login',{url:state.url}]);
      return false;
    }
    return true;
  }

}
