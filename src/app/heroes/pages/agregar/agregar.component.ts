import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 10px;
    }
  `]
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'MARVEL Comics',
      desc: 'MARVEL - Comics'
    }
  ]

  heroe: Heroe = {
    id : '',
    superhero : '',
    publisher : Publisher.DCComics,
    alter_ego : '',
    first_appearance : '',
    characters : '',
    alt_img : ''
  }

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router){}
  
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(param => this.heroesService.getHeroePorId(param['id'])))
    .subscribe(heroe => this.heroe = heroe)
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe(heroe => console.log('Actualizando', heroe))
    }else{
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes/editar', heroe.id]);
      })
    }
  }
}
