import { Component } from '@angular/core';
import { pokemonsMock } from '../../../mocks/pokemons.mock';
import { Pokemon } from '../../shared/models/pokemon';
import { PokemonFilter } from '../pokemon-list-filter/pokemon-list-filter.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  pokemons: Pokemon[] = pokemonsMock;

  filterPokemons(filter: PokemonFilter) {
    console.log('filtrar:', filter);

    const filterByName = (p: Pokemon): boolean => {
      const name = filter.name.toLowerCase();
      return p.name.toLowerCase().includes(name);
    };

    const filterByType = (p: Pokemon): boolean => {
      if (!filter.type){
        console.log('ss');

        return true;
      }
      return p.type.includes(filter.type);
    };

    this.pokemons = pokemonsMock
      .filter(filterByName)
      .filter(filterByType);
  }

}
