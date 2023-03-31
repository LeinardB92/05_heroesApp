/*Este módulo tiene la función de contener los elementos de la API Angular Material*/ 

import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';  
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
