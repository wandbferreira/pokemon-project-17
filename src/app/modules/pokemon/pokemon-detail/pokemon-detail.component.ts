import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../shared/models/pokemon';
import { pokemonsMock } from '../../../../mocks/pokemons.mock';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;
  trainers: string[] = [
    "Ash Ketchum",
    "Misty",
    "Brock",
    "May",
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const pokemonId = params['id'];
      this.pokemon = pokemonsMock.find(p => p.id == pokemonId);
    });
  }
}
