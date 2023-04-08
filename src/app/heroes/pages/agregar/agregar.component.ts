import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';

import { Heroe } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';

import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

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
              private router: Router,
              private snackBar: MatSnackBar,
              private dialogo: MatDialog){}
  
  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }

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
        .subscribe(heroe => {
          this.heroe = heroe;
          this.mostrarSnackBar('Registro actualizado');
        })
    }else{
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackBar('Registro creado');
      })
    }
  }

  borrar(){
      const dialog = this.dialogo.open(ConfirmarComponent, {
      width: '350px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(resp => {
      if(resp){
        this.heroesService.borrarHeroe(this.heroe.id!)
          .subscribe(resp => {
            this.router.navigate(['/heroes']);
          })
      }
    })
  }

  mostrarSnackBar(mensaje: string){
    this.snackBar.open(mensaje, 'Ok!', {duration: 2500});
  }
}
