import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: `
  ::ng-deep .pokemon-type-icon {
    border: solid 1px black;
    transform: scale(2);
    margin-left: 8px;
  }
  `,
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;
  evolutions: Pokemon[] = [];
  trainers: string[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.pokemon = data['pokemon'];
      this.evolutions = data['evolutions'];
      this.trainers = data['trainers'];
    });
  }
}
