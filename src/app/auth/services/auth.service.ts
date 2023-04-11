import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(private http: HttpClient) { }

  get auth(){
    return {...this._auth};
  }
 
  login(){ 
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth),
        //tap(auth => localStorage.setItem('token', auth.id)),
      );
  }
 
  logout(){
    this._auth = undefined;
  }

  verificaAutenticacionActivate(): boolean {
    if(this.auth.id){
      console.log('validado Activated');
      return true
    }

    console.log("rechazado por Activated")
    return false;
  }

  verificaAutenticacionMatch(): boolean {
    if(this.auth.id){
      console.log('validado Match');
      return true
    }

    console.log("rechazado por Match")
    return false;

    // if(!localStorage.getItem('token')){
    //   return of(false);
    // }
    // return this.http.get<Auth>(`${ this.baseURL }/usuarios/1`)
    //   .pipe(
    //     map(auth  => {
    //       this._auth = auth
    //       return true;
    //     })
    //   );
  }
}
