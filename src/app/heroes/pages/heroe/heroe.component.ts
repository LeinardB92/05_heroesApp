import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: []
})
export class HeroeComponent implements OnInit{
  
  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService){}

  ngOnInit(): void {
    // Detectar cambios en la ruta URL de la aplicación.
    this.activatedRoute.params
    .pipe(switchMap(param => this.heroesService.getHeroePorId(param['id'])))
    .subscribe(heroe => {
      this.heroe = heroe;
      console.log(this.heroe);
    })  

    //Código alternativo, al uso de switchMap().
    // this.activatedRoute.params
    // .subscribe(param => {this.heroesService.getHeroePorId(param['id'])
    // .subscribe(heroe => {
    //   this.heroe = heroe;
    //   console.log(this.heroe);
    // })

  }
}