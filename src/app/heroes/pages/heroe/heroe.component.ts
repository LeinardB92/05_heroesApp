import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 10px;
    }  
  `]
})
export class HeroeComponent implements OnInit{
  
  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, 
              private heroesService: HeroesService,
              private router: Router){}

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

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}