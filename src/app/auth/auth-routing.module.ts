import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogingComponent } from './pages/loging/loging.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "login",
        component: LogingComponent
      }, 
      {
        path: "registro",
        component: RegistroComponent
      },
      {
        path: "**",
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
