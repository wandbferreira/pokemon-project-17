import { Component } from '@angular/core';
import { pokemonsMock } from '../../../mocks/pokemons.mock';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  pokemons: Pokemon[] = pokemonsMock;

  filterByName(name: string) {
    console.log(name);
    const search = name?.toLowerCase();

    this.pokemons = pokemonsMock.filter(p => {
      return p.name.toLowerCase().includes(search);
    })
  }
}
