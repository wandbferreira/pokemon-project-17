import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { pokemonsMock } from '../../../../mocks/pokemons.mock';

@Pipe({
  name: 'pokemonEnemies',
  standalone: true,
})
/**
 * Retorna todos pokemons, exceto suas evolucoes
 */
export class PokemonEnemiesPipe implements PipeTransform {
  transform(evolutions: Pokemon[], limit = 3): Pokemon[] {
    const sortRandom = () => (Math.random() > 0.5 ? 1 : -1);

    const ids = evolutions.map((p) => p.id);
    return pokemonsMock
      .filter((p) => ids.indexOf(p.id) < 0)
      .sort(sortRandom)
      .slice(0, limit);
  }
}
