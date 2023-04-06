import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: []
})
export class AgregarComponent {
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
}
