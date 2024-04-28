import { PokemonService } from '../../../shared/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';

@Component({
  selector: 'app-pokebola',
  templateUrl: './pokebola.component.html',
})
export class PokebolaComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getCaptures();
  }

  free() {
    this.pokemonService.freeCaptures();
    this.pokemons = [];
  }
}
