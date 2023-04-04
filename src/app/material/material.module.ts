/*Este módulo tiene la función de contener los elementos de la API Angular Material*/ 

import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';  
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
