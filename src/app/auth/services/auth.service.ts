import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { tap, Observable, of, map } from 'rxjs';

import { Auth } from '../interfaces/auth.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(private http: HttpClient,
              private router: Router) { }

  get auth(){
    return {...this._auth};
  }
 
  login(){ 
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('token', auth.id))
      );
  }
 
  logout(){
    this._auth = undefined;
  }

  verificaAutenticacionActivate(): Observable<boolean> {
    if(!localStorage.getItem('token')){
      console.log("rechazado por Activate");
      this.router.navigate(['./auth/login']);
      return of(false);
    }
    return this.http.get<Auth>(`${ this.baseURL }/usuarios/1`)
      .pipe(
        map(auth  => {
          console.log('validado Activate');
          this._auth = auth;
          return true;
        })
      );
  }

  verificaAutenticacionMatch(): Observable<boolean> {
    if(!localStorage.getItem('token')){
      console.log("rechazado por Match");
      this.router.navigate(['./auth/login']);
      return of(false);
    }
    return this.http.get<Auth>(`${ this.baseURL }/usuarios/1`)
      .pipe(
        map(auth  => {
          console.log('validado Match');
          this._auth = auth;
          return true;
        })
      );
  }

}
