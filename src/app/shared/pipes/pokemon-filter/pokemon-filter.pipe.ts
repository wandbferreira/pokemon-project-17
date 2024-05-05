import { Pipe, PipeTransform } from '@angular/core';
import { PokemonFilter } from '../../../modules/pokemon/pokemon-filters/pokemon-filters.component';
import { Pokemon } from '../../models/pokemon';

@Pipe({
  name: 'pokemonFilter',
  standalone: true,
  // pure: false,
})
export class PokemonFilterPipe implements PipeTransform {
  transform(pokemons: Pokemon[], filter: PokemonFilter): Pokemon[] {
    console.log('aff');
    const { name, type } = filter;

    return pokemons.filter(pokemon => {
      const nameMatch = !name || pokemon.name.toLowerCase().includes(name.toLowerCase());
      const typeMatch = !type || pokemon.type === type;
      return nameMatch && typeMatch;
    });
  }
}
