import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthService } from './auth/services/auth.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroes',
    
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
      return inject(AuthService).verificaAutenticacionActivate();
    }],
    canMatch: [(route: Route, segments: UrlSegment[]) =>{
      return inject(AuthService).verificaAutenticacionMatch();
    }],
    
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
]

@NgModule({
  imports: [
    // se usa forRoot para las rutas principales.
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
