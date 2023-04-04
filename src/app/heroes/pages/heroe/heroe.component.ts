import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: []
})
export class HeroeComponent implements OnInit{
  
  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params => {
      console.log(params['id']);
    })  
  }
}