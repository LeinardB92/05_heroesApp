import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LogingComponent } from './pages/loging/loging.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    LogingComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
