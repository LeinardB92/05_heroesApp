import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseUrl;
  private _auth!: Auth;

  constructor(private http: HttpClient) { }

  get auth(){
    return {...this._auth};
  }

  login(){
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
      .pipe(tap(auth => this._auth = auth))
  }
}
