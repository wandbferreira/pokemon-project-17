import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonFilter } from '../components/pokemon-filter/pokemon-filter.component';

@Pipe({
  name: 'pokemonFilter',
  standalone: true,
  // pure: false,
})
export class PokemonFilterPipe implements PipeTransform {
  transform(pokemons: Pokemon[], filter: PokemonFilter): Pokemon[] {
    // console.log('filterPipe...');
    const { name, type } = filter;

    return pokemons.filter(pokemon => {
      const nameMatch = !name || pokemon.name.toLowerCase().includes(name.toLowerCase());
      const typeMatch = !type || pokemon.type === type;
      return nameMatch && typeMatch;
    });
  }
}
