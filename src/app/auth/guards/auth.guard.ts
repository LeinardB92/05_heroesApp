import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, RouterStateSnapshot, 
         UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService){}
  
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree>  | 
  //                                Promise<boolean | UrlTree>     | 
  //                                boolean                        | 
  //                                UrlTree {
  //    return true;
  //  }
  
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree>  | 
                             Promise<boolean | UrlTree>     | 
                             boolean                        | 
                             UrlTree {
      if(this.authService.auth.id){
        console.log('AuthGuard Retorno true');
        return true;
      }
      console.log('AuthGuard Retorno false');
      return false;
    }
}
